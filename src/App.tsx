import React, { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Shop } from './components/Shop';
import { Workouts } from './components/Workouts';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { supabase } from './lib/supabase';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'shop' | 'workouts' | 'profile'>('home');
  const [user, setUser] = useState<any>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession()
      .then(({ data: { session } }) => {
        setUser(session?.user ?? null);
      })
      .catch((err) => {
        console.error('Error getting session:', err);
      })
      .finally(() => {
        setAuthLoading(false);
      });

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

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
          {currentRoute === 'shop' && <Shop />}
          {currentRoute === 'workouts' && <Workouts />}
          {currentRoute === 'profile' && (
            <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-4xl font-bold mb-8">Profile</h1>
              <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm">
                <p className="text-zinc-600 mb-4">Email: <span className="text-zinc-900 font-bold">{user.email}</span></p>
                <p className="text-zinc-600">User ID: <span className="text-zinc-900 font-bold">{user.id}</span></p>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
