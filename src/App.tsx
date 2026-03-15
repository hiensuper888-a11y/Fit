import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Shop } from './components/Shop';
import { Workouts } from './components/Workouts';
import { Activities } from './components/Activities';
import { Learn } from './components/Learn';
import { Profile } from './components/Profile';
import { AdminDashboard } from './components/AdminDashboard';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { supabase } from './lib/supabase';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'shop' | 'workouts' | 'learn' | 'profile' | 'admin'>('home');
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);

  const fetchProfile = async (userId: string) => {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', userId)
      .single();
    setIsAdmin(profile?.role === 'admin');
  };

  useEffect(() => {
    if (!supabase) {
      setAuthLoading(false);
      return;
    }

    // Check active sessions and sets the user
    supabase.auth.getSession()
      .then(async ({ data: { session } }) => {
        setUser(session?.user ?? null);
        if (session?.user) {
          await fetchProfile(session.user.id);
        }
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
      
      if (session?.user) {
        // Update last_seen
        supabase.from('profiles').update({ last_seen: new Date().toISOString() }).eq('id', session.user.id).then();
        // Re-fetch profile on auth change
        fetchProfile(session.user.id);
      } else {
        setIsAdmin(false);
      }
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
      <div className="min-h-screen bg-zinc-950 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"></div>
        <AuthModal 
          isOpen={true} 
          onClose={() => {}} 
          isMandatory={true}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900">
      <Navbar 
        currentRoute={currentRoute} 
        setCurrentRoute={setCurrentRoute} 
        user={user}
        isAdmin={isAdmin}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <main>
        {currentRoute === 'home' && (
          <>
            <Hero />
            <Shop searchQuery={searchQuery} />
            <Workouts />
            <Activities />
          </>
        )}
        {currentRoute === 'shop' && <Shop searchQuery={searchQuery} />}
        {currentRoute === 'workouts' && <Workouts />}
        {currentRoute === 'learn' && <Learn searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
        {currentRoute === 'admin' && isAdmin && <AdminDashboard />}
        {currentRoute === 'profile' && <Profile user={user} />}
      </main>
      <Footer />
    </div>
  );
}
