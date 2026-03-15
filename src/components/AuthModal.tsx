import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage, Language } from '../i18n/LanguageContext';
import { X, Loader2, Eye, EyeOff, Globe, Pill } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  isMandatory?: boolean;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, isMandatory = false }) => {
  const { t, language, setLanguage } = useLanguage();
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
  ];
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      // Note: Supabase uses 'twitter' provider for both old Twitter and new X OAuth 2.0.
      // The version used depends on your Supabase Dashboard configuration.
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: window.location.origin,
          skipBrowserRedirect: false,
        },
      });
      
      if (error) throw error;
    } catch (err: any) {
      console.error('OAuth Error:', err);
      let errorMessage = err.message || t('auth_error');
      if (errorMessage.includes('provider_not_enabled')) {
        errorMessage = `Nhà cung cấp ${provider === 'twitter' ? 'X 2.0' : 'Google'} chưa được bật trong cấu hình Supabase của bạn.`;
      }
      setError(errorMessage);
      setLoading(false);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-md"
    >
      <div className="bg-zinc-900 border border-zinc-800 rounded-[2rem] w-full max-w-5xl relative shadow-2xl z-10 my-auto overflow-hidden flex flex-col md:flex-row min-h-[600px]">
        
        {/* Left Side - Image & Branding */}
        <div className="hidden md:flex md:w-5/12 relative bg-zinc-950 overflow-hidden items-end p-10">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80" 
            alt="Fitness Motivation" 
            className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-overlay"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
          
          <div className="relative z-10 w-full">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="logo-rays-container">
                <div className="logo-rays"></div>
                <div className="w-11 h-11 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)] group-hover:shadow-[0_0_35px_rgba(16,185,129,0.7)] transition-all duration-500 relative z-10">
                  <Pill className="w-6 h-6 text-white" />
                </div>
              </div>
              <span className="text-2xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300 drop-shadow-[0_0_15px_rgba(16,185,129,0.5)]">{t('app_name')}</span>
            </div>
            <h3 className="text-3xl font-serif font-bold text-white mb-4 leading-tight">
              {isLogin ? "Welcome back to your fitness journey." : "Unlock your true physical potential."}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Join thousands of athletes and fitness enthusiasts who trust FitSupps for science-backed nutrition and training knowledge.
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-7/12 p-8 sm:p-12 relative flex flex-col justify-center bg-zinc-900">
          {/* Animated gradient background */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
          
          <div className="absolute top-6 right-6 flex items-center gap-2 z-50">
            <div className="relative">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="p-2 text-zinc-500 hover:text-emerald-400 bg-zinc-800/50 hover:bg-zinc-800 rounded-full transition-all flex items-center gap-2 border border-zinc-700/50"
                title={t('language')}
              >
                <Globe className="w-4 h-4" />
                <span className="text-[10px] font-bold uppercase">{language}</span>
              </button>

              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl py-2 z-50 animate-in fade-in zoom-in duration-200">
                  <div className="grid grid-cols-1 gap-1 px-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setShowLangMenu(false);
                        }}
                        className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs transition-all ${
                          language === lang.code 
                            ? 'bg-emerald-500/10 text-emerald-400 font-bold' 
                            : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {!isMandatory && (
              <button 
                onClick={onClose}
                className="text-zinc-500 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 p-2 rounded-full transition-all border border-zinc-700/50"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <div className="max-w-md w-full mx-auto relative z-10">
            {/* Mobile Logo */}
            <div className="md:hidden flex items-center justify-center gap-3 mb-8 group">
              <div className="bg-emerald-500 p-2 rounded-xl shadow-lg shadow-emerald-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                <svg className="h-6 w-6 text-white relative z-10 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
                  <path d="m8.5 8.5 7 7" />
                </svg>
              </div>
              <span className="text-2xl font-black tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">{t('app_name')}</span>
            </div>

            <h2 className="text-3xl font-serif font-black text-white mb-2 tracking-tight">
              {isLogin ? t('login') : t('register')}
            </h2>
            <p className="text-zinc-400 mb-8 text-sm">
              {isLogin ? 'Enter your credentials to access your account.' : 'Create an account to save your progress.'}
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

            <div className="flex gap-4 mb-8">
              <button
                onClick={() => handleOAuthLogin('google')}
                disabled={loading}
                title={t('continue_with_google')}
                className="flex-1 h-12 bg-white hover:bg-zinc-100 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm text-zinc-900 font-semibold text-sm"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Google
              </button>
              
              <button
                onClick={() => handleOAuthLogin('twitter')}
                disabled={loading}
                title={t('continue_with_x')}
                className="flex-1 h-12 bg-zinc-800 hover:bg-zinc-700 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed border border-zinc-700 text-white font-semibold text-sm"
              >
                <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                X 2.0
              </button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-800"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase tracking-widest">
                <span className="px-4 bg-zinc-900 text-zinc-500 font-bold">{t('or_continue_with')} email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-zinc-600"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-zinc-950/50 border border-zinc-800 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all placeholder:text-zinc-600"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-emerald-500/20 active:scale-95 mt-2"
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
                className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
              >
                {isLogin ? t('register') : t('login')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
