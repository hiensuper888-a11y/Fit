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
import { supabase } from './lib/supabase';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'article'>('home');
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check active sessions and sets the user
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

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
          {currentRoute === 'home' ? (
            <>
              <Hero />
              <Shop />
              <Workouts />
            </>
          ) : (
            <CreatineArticle />
          )}
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
