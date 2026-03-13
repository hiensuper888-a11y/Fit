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

  const [manualLoginUrl, setManualLoginUrl] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    setManualLoginUrl(null);

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
        });
        if (error) throw error;
        setSuccess(`${t('auth_success')} ${t('check_email')}`);
      }
    } catch (err: any) {
      setError(err.message || t('auth_error'));
    } finally {
      setLoading(false);
    }
  };

  const handleOAuthLogin = async (provider: 'google' | 'twitter') => {
    setLoading(true);
    setError(null);
    setManualLoginUrl(null);

    // Try to open popup synchronously to avoid popup blocker
    const width = 500;
    const height = 600;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    
    let popup: Window | null = null;
    try {
      popup = window.open(
        '',
        'supabase_oauth_popup',
        `width=${width},height=${height},left=${left},top=${top},toolbar=0,scrollbars=1,status=1,resizable=1,location=1,menuBar=0`
      );
    } catch (e) {
      console.warn('Popup blocked synchronously', e);
    }

    const isPopupBlocked = !popup || popup.closed || typeof popup.closed === 'undefined';

    if (!isPopupBlocked && popup) {
      // Show a loading message in the popup
      popup.document.write(`
        <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;font-family:sans-serif;background:#18181b;color:#fff;text-align:center;padding:20px;">
          <div style="border:3px solid #3f3f46;border-top:3px solid #10b981;border-radius:50%;width:30px;height:30px;animation:spin 1s linear infinite;margin-bottom:15px;"></div>
          <style>@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }</style>
          <div>${t('connecting') || 'Đang kết nối...'}</div>
        </div>
      `);
    }

    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/oauth-callback.html`,
          skipBrowserRedirect: true,
          queryParams: provider === 'google' 
            ? { access_type: 'offline', prompt: 'consent' }
            : { force_login: 'true' },
          scopes: provider === 'twitter' ? 'tweet.read users.read' : undefined
        },
      });
      
      if (error) throw error;

      if (data?.url) {
        if (isPopupBlocked) {
          // If popup was blocked, show a manual link
          setManualLoginUrl(data.url);
          setError('Trình duyệt đã chặn cửa sổ đăng nhập. Vui lòng nhấn vào nút bên dưới để tiếp tục.');
          setLoading(false);
        } else if (popup) {
          // Redirect the popup to the OAuth URL
          popup.location.href = data.url;

          // Optional: check if popup is closed manually by user
          const checkPopup = setInterval(() => {
            if (popup.closed) {
              clearInterval(checkPopup);
              setLoading(false);
            }
          }, 1000);
        }
      } else {
        if (popup) popup.close();
        setLoading(false);
      }
    } catch (err: any) {
      console.error('OAuth Error:', err);
      setError(err.message || t('auth_error'));
      if (popup) popup.close();
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-md p-6 relative shadow-2xl">
        {!isMandatory && (
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {isMandatory && (
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-emerald-500 rounded-full blur opacity-25"></div>
              <div className="relative bg-zinc-800 p-2 rounded-full border border-emerald-500/30">
                <BicepsFlexed className="h-8 w-8 text-emerald-500" />
              </div>
            </div>
          </div>
        )}

        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          {isLogin ? t('login') : t('register')}
        </h2>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-3 rounded-lg mb-4 text-sm flex flex-col gap-2">
            <span>{error}</span>
            {manualLoginUrl && (
              <a 
                href={manualLoginUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-red-500 text-white px-4 py-2 rounded-md text-center font-medium hover:bg-red-600 transition-colors mt-2"
                onClick={() => {
                  setError(null);
                  setManualLoginUrl(null);
                }}
              >
                {t('open_login_page') || 'Mở trang đăng nhập'}
              </a>
            )}
          </div>
        )}

        {success && (
          <div className="bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 p-3 rounded-lg mb-4 text-sm">
            {success}
          </div>
        )}

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => handleOAuthLogin('google')}
            disabled={loading}
            title={t('continue_with_google')}
            className="w-12 h-12 bg-white hover:bg-zinc-200 text-zinc-900 rounded-full transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
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
            className="w-12 h-12 bg-black hover:bg-zinc-800 border border-zinc-700 text-white rounded-full transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-700"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-zinc-900 text-zinc-500">{t('or_continue_with')}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">
              {t('email')}
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-400 mb-1">
              {t('password')}
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              isLogin ? t('sign_in') : t('sign_up')
            )}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-zinc-400">
          {isLogin ? t('no_account') : t('has_account')}{' '}
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setError(null);
              setSuccess(null);
            }}
            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            {isLogin ? t('register') : t('login')}
          </button>
        </div>
      </div>
    </div>
  );
};
