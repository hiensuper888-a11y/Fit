import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../i18n/LanguageContext';
import { X, Loader2, BicepsFlexed } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isMandatory?: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, isMandatory = false }) => {
  const { t } = useLanguage();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    if (!supabase) {
      setError('Supabase is not configured. Please check your settings.');
      setLoading(false);
      return;
    }

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        onClose();
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin,
          }
        });
        if (error) throw error;
        setSuccess(`${t('auth_success')} ${t('check_email')} (Hãy kiểm tra cả hòm thư Spam/Rác)`);
      }
    } catch (err: any) {
      setError(err.message || t('auth_error'));
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthLogin = async (provider: 'google' | 'twitter') => {
    if (!supabase) {
      setError('Supabase is not configured. Please check your settings.');
      return;
    }
    setLoading(true);
    setError(null);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: window.location.origin,
        },
      });
      
      if (error) throw error;
    } catch (err: any) {
      console.error('OAuth Error:', err);
      setError(err.message || t('auth_error'));
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=1920&auto=format&fit=crop')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-3xl w-full max-w-md p-8 relative shadow-2xl z-10 my-auto">
        {/* Decorative background element */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl"></div>
        
        {!isMandatory && (
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors z-10"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="absolute -inset-4 bg-emerald-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <div className="relative bg-zinc-800 p-4 rounded-2xl border border-emerald-500/30 shadow-inner">
              <BicepsFlexed className="h-10 w-10 text-emerald-500" />
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-black text-white mb-2 text-center tracking-tight">
          {isLogin ? t('login') : t('register')}
        </h2>
        <p className="text-zinc-500 text-center mb-8 text-sm">
          {isLogin ? 'Welcome back to FitSupps' : 'Start your fitness journey today'}
        </p>

        {(!supabase) && (
          <div className="bg-amber-500/10 border border-amber-500/50 text-amber-400 p-4 rounded-xl mb-6 text-sm">
            <p className="font-bold mb-1">Supabase not configured</p>
            <p>Please add <strong>VITE_SUPABASE_URL</strong> and <strong>VITE_SUPABASE_ANON_KEY</strong> to the Environment Variables.</p>
          </div>
        )}

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl mb-6 text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 p-4 rounded-xl mb-6 text-sm">
            {success}
          </div>
        )}

        <div className="flex justify-center gap-6 mb-8">
          <button
            onClick={() => handleOAuthLogin('google')}
            disabled={loading}
            title={t('continue_with_google')}
            className="w-14 h-14 bg-white hover:bg-zinc-100 rounded-full transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 shadow-lg"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </button>
          
          <button
            onClick={() => handleOAuthLogin('twitter')}
            disabled={loading}
            title={t('continue_with_x')}
            className="w-14 h-14 bg-black hover:bg-zinc-800 rounded-full transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-110 shadow-lg border border-zinc-700"
          >
            <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </button>
        </div>

        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-800"></div>
          </div>
          <div className="relative flex justify-center text-xs uppercase tracking-widest">
            <span className="px-4 bg-zinc-900 text-zinc-500 font-bold">{t('or_continue_with')}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-zinc-600"
              placeholder={t('email')}
            />
          </div>

          <div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-zinc-600"
              placeholder={t('password')}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20 active:scale-95"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              isLogin ? t('sign_in') : t('sign_up')
            )}
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-zinc-500">{isLogin ? t('no_account') : t('has_account')}</span>{' '}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError(null);
              setSuccess(null);
            }}
            className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors underline underline-offset-4"
          >
            {isLogin ? t('register') : t('login')}
          </button>
        </div>
      </div>
    </div>
  );
};
