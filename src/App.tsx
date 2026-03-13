/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Shop } from './components/Shop';
import { Workouts } from './components/Workouts';
import { Footer } from './components/Footer';
import { CreatineArticle } from './components/CreatineArticle';
import { AuthModal } from './components/AuthModal';
import { Profile } from './components/Profile';
import { supabase } from './lib/supabase';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'article' | 'profile'>('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // If this is a popup opened for OAuth, close it after processing auth
    if (window.opener && window.opener !== window) {
      supabase.auth.onAuthStateChange((event, session) => {
        if (event === 'SIGNED_IN') {
          // Send message to opener in case localStorage is partitioned (e.g., Safari iframes)
          window.opener.postMessage({ type: 'OAUTH_AUTH_SUCCESS', session }, '*');
          setTimeout(() => window.close(), 500);
        }
      });
      // Fallback close after 5 seconds just in case
      setTimeout(() => window.close(), 5000);
    }

    // Listen for messages from the OAuth popup
    const handleMessage = async (event: MessageEvent) => {
      // Validate origin
      if (event.origin && !event.origin.includes(window.location.hostname) && !event.origin.includes('supabase.co')) {
        // In dev, hostname might be localhost or a run.app domain
      }

      const data = event.data;
      if (data?.type === 'OAUTH_CODE' || data?.type === 'OAUTH_AUTH_SUCCESS' || data?.type === 'OAUTH_AUTH_ERROR') {
        processAuthMessage(data);
      }
    };

    const processAuthMessage = async (data: any) => {
      if (data.type === 'OAUTH_CODE' && data.code) {
        setAuthLoading(true);
        try {
          const { data: authData, error } = await supabase.auth.exchangeCodeForSession(data.code);
          if (error) throw error;
          if (authData.session) {
            setUser(authData.session.user);
            setIsAuthModalOpen(false);
          }
        } catch (err) {
          console.error('Error exchanging code:', err);
        } finally {
          setAuthLoading(false);
        }
      } else if (data.type === 'OAUTH_AUTH_SUCCESS' && data.session) {
        setAuthLoading(true);
        try {
          const { session } = data;
          const { error } = await supabase.auth.setSession({
            access_token: session.access_token,
            refresh_token: session.refresh_token,
          });
          
          if (!error) {
            const { data: userData } = await supabase.auth.getUser();
            setUser(userData.user);
            setIsAuthModalOpen(false);
          }
        } catch (err) {
          console.error('Error setting session:', err);
        } finally {
          setAuthLoading(false);
        }
      } else if (data.type === 'OAUTH_AUTH_ERROR') {
        console.error('OAuth Error message received:', data.error);
        setAuthLoading(false);
      }
    };

    // Fallback for cross-origin or lost opener using localStorage
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === 'supabase_auth_callback' && event.newValue) {
        try {
          const data = JSON.parse(event.newValue);
          // Only process if it's recent (within last 30 seconds)
          if (Date.now() - data.timestamp < 30000) {
            processAuthMessage(data);
            localStorage.removeItem('supabase_auth_callback');
          }
        } catch (e) {
          console.error('Error parsing auth callback from storage', e);
        }
      }
    };

    window.addEventListener('message', handleMessage);
    window.addEventListener('storage', handleStorageChange);

    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
      if (session) {
        setIsAuthModalOpen(false);
      }
    });

    return () => {
      subscription.unsubscribe();
      window.removeEventListener('message', handleMessage);
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  // If we are in a popup, just show a loading screen while auth processes
  if (window.opener && window.opener !== window) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
        <Loader2 className="w-8 h-8 text-emerald-500 animate-spin mb-4" />
        <p>Completing authentication...</p>
      </div>
    );
  }

  if (authLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <LanguageProvider>
        <div className="min-h-screen bg-zinc-950 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat relative">
          <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"></div>
          <AuthModal 
            isOpen={true} 
            onClose={() => {}} 
            isMandatory={true}
          />
        </div>
      </LanguageProvider>
    );
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
        <Navbar 
          currentRoute={currentRoute} 
          setCurrentRoute={setCurrentRoute} 
          onOpenAuth={() => setIsAuthModalOpen(true)}
          user={user}
        />
        <main>
          {currentRoute === 'home' && (
            <>
              <Hero />
              <Shop />
              <Workouts />
            </>
          )}
          {currentRoute === 'article' && <CreatineArticle />}
          {currentRoute === 'profile' && <Profile user={user} />}
        </main>
        <Footer />
        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      </div>
    </LanguageProvider>
  );
}
