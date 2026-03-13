import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../i18n/LanguageContext';
import { Loader2, Camera, User } from 'lucide-react';

export const Profile: React.FC<{ user: any }> = ({ user }) => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  const [formData, setFormData] = useState({
    full_name: '',
    dob: '',
    address: '',
    company: '',
    department: '',
    position: '',
    phone: '',
    avatar_url: '',
  });

  useEffect(() => {
    if (user?.user_metadata) {
      setFormData({
        full_name: user.user_metadata.full_name || '',
        dob: user.user_metadata.dob || '',
        address: user.user_metadata.address || '',
        company: user.user_metadata.company || '',
        department: user.user_metadata.department || '',
        position: user.user_metadata.position || '',
        phone: user.user_metadata.phone || '',
        avatar_url: user.user_metadata.avatar_url || '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (!e.target.files || e.target.files.length === 0) return;
      const file = e.target.files[0];
      
      // Check file size (max 2MB)
      if (file.size > 2 * 1024 * 1024) {
        setMessage({ type: 'error', text: 'Image must be less than 2MB' });
        return;
      }

      setLoading(true);
      setMessage(null);

      // We use base64 for simplicity in this demo to avoid requiring a storage bucket setup
      // In a production app, you should upload to Supabase Storage
      const reader = new FileReader();
      reader.onloadend = async () => {
        const base64String = reader.result as string;
        setFormData(prev => ({ ...prev, avatar_url: base64String }));
        
        // Auto-save avatar
        const { error } = await supabase.auth.updateUser({
          data: { avatar_url: base64String }
        });
        
        if (error) throw error;
      };
      reader.readAsDataURL(file);
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);

    try {
      const { error } = await supabase.auth.updateUser({
        data: formData
      });

      if (error) throw error;
      setMessage({ type: 'success', text: t('update_success') });
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 overflow-hidden">
        <div className="p-8 border-b border-zinc-200 bg-zinc-50">
          <h1 className="text-2xl font-bold text-zinc-900">{t('profile')}</h1>
          <p className="text-zinc-500 mt-1">{t('edit_profile')}</p>
        </div>

        <div className="p-8">
          {message && (
            <div className={`mb-6 p-4 rounded-lg text-sm ${
              message.type === 'success' 
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Avatar Section */}
            <div className="flex items-center space-x-6">
              <div className="relative group">
                <div className="w-24 h-24 rounded-full overflow-hidden bg-zinc-100 border-2 border-zinc-200 flex items-center justify-center">
                  {formData.avatar_url ? (
                    <img src={formData.avatar_url} alt="Avatar" className="w-full h-full object-cover" />
                  ) : (
                    <User className="w-10 h-10 text-zinc-400" />
                  )}
                </div>
                <label className="absolute inset-0 flex items-center justify-center bg-black/50 text-white opacity-0 group-hover:opacity-100 rounded-full cursor-pointer transition-opacity">
                  <Camera className="w-6 h-6" />
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    onChange={handleAvatarUpload}
                    disabled={loading}
                  />
                </label>
              </div>
              <div>
                <h3 className="font-medium text-zinc-900">{t('avatar')}</h3>
                <p className="text-sm text-zinc-500">JPG, GIF or PNG. Max size of 2MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">{t('email')}</label>
                <input
                  type="email"
                  value={user?.email || ''}
                  disabled
                  className="w-full bg-zinc-100 border border-zinc-300 rounded-lg px-4 py-2 text-zinc-500 cursor-not-allowed"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">{t('full_name')}</label>
                <input
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">{t('dob')}</label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">{t('phone')}</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-zinc-700 mb-1">{t('address')}</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">{t('company')}</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">{t('department')}</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-700 mb-1">{t('position')}</label>
                <input
                  type="text"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full bg-white border border-zinc-300 rounded-lg px-4 py-2 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="pt-6 flex justify-end">
              <button
                type="submit"
                disabled={loading}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors flex items-center disabled:opacity-50"
              >
                {loading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
                {loading ? t('saving') : t('save')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
