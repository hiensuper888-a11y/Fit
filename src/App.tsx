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
      if (event.data?.type === 'OAUTH_AUTH_SUCCESS' && event.data.session) {
        // Force a session refresh or set user directly
        const { session } = event.data;
        
        // If we have a session from the popup, set it explicitly
        // This handles Safari/Incognito where localStorage is partitioned
        const { error } = await supabase.auth.setSession({
          access_token: session.access_token,
          refresh_token: session.refresh_token,
        });
        
        if (!error) {
          const { data } = await supabase.auth.getUser();
          setUser(data.user);
          setAuthLoading(false);
          setIsAuthModalOpen(false);
        }
      } else if (event.data?.type === 'OAUTH_AUTH_ERROR') {
        console.error('OAuth Error:', event.data.error);
        setAuthLoading(false);
      }
    };
    window.addEventListener('message', handleMessage);

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
