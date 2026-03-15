import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../i18n/LanguageContext';
import { User, Mail, Phone, MapPin, Heart, Target, Save, Loader2, Upload, Lock, Trash2, CheckCircle2, X } from 'lucide-react';

interface ProfileData {
  full_name: string;
  phone: string;
  address: string;
  hobbies: string;
  goals: string;
  avatar_url: string | null;
}

export const Profile: React.FC<{ user: any }> = ({ user }) => {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [profile, setProfile] = useState<ProfileData>({
    full_name: '',
    phone: '',
    address: '',
    hobbies: '',
    goals: '',
    avatar_url: null,
  });

  useEffect(() => {
    getProfile();

    // Thiết lập lắng nghe thay đổi Realtime
    const channel = supabase
      .channel('public:profiles')
      .on('postgres_changes', { 
        event: 'UPDATE', 
        schema: 'public', 
        table: 'profiles',
        filter: `id=eq.${user.id}`
      }, (payload) => {
        setProfile(payload.new as ProfileData);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [user]);

  async function getProfile() {
    try {
      setLoading(true);
      if (!supabase) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('full_name, phone, address, hobbies, goals, avatar_url')
        .eq('id', user.id)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          console.warn('Không tìm thấy hồ sơ cho user này, đang tạo hồ sơ mới...');
          // Tự động tạo hồ sơ trống nếu chưa có
          const { error: insertError } = await supabase.from('profiles').insert({ id: user.id });
          if (insertError) throw insertError;
          getProfile(); // Thử lại
        } else {
          throw error;
        }
      }

      if (data) {
        setProfile(data);
      }
    } catch (error: any) {
      console.error('Lỗi chi tiết khi tải hồ sơ:', error);
      setMessage({ type: 'error', text: 'Không thể tải hồ sơ: ' + error.message });
    } finally {
      setLoading(false);
    }
  }

  async function uploadAvatar(e: React.ChangeEvent<HTMLInputElement>) {
    try {
      if (!e.target.files || e.target.files.length === 0) return;
      const file = e.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${user.id}.${fileExt}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(fileName, file, { upsert: true });

      if (uploadError) throw uploadError;

      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(fileName);

      await supabase.from('profiles').update({ avatar_url: publicUrl }).eq('id', user.id);
      setProfile({ ...profile, avatar_url: publicUrl });
    } catch (error: any) {
      setMessage({ type: 'error', text: 'Upload failed: ' + error.message });
    }
  }

  async function updateProfile(e: React.FormEvent) {
    e.preventDefault();
    try {
      setSaving(true);
      setMessage(null);
      if (!supabase) return;

      const { error } = await supabase.from('profiles').upsert({
        id: user.id,
        ...profile,
        updated_at: new Date().toISOString(),
      });

      if (error) throw error;
      setMessage({ type: 'success', text: t('profile_updated') });
    } catch (error: any) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="w-8 h-8 animate-spin text-emerald-500" />
      </div>
    );
  }

  return (
    <div className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-black text-zinc-900 tracking-tight mb-2">Account Profile</h1>
          <p className="text-zinc-500">Manage your personal information and preferences.</p>
        </div>
        <div className="hidden sm:flex items-center gap-3 bg-white px-4 py-2 rounded-2xl border border-zinc-200 shadow-sm">
          <div className="p-2 bg-emerald-100 rounded-xl">
            <svg className="h-6 w-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="4" r="2" />
              <path d="M7 9a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1" />
              <path d="M17 9a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1" />
              <path d="M7 9c0-2 2-3 5-3s5 1 5 3" />
              <path d="M7 9v3l1.5 9a3.5 3.5 0 0 0 7 0L17 12V9" />
              <path d="M7 12c1.5 0 2.5-1 5-1s3.5 1 5 1" />
              <path d="M12 11v10" />
              <path d="M9 15h6" />
              <path d="M9.5 18h5" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tight text-zinc-900 leading-none">{t('app_name')}</span>
            <span className="text-[10px] font-bold text-emerald-600 tracking-wider uppercase mt-0.5">by Mr.Hien</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Info */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm sticky top-24">
            <div className="flex flex-col items-center text-center mb-8">
              <div className="relative w-32 h-32 mb-6 group">
                <div className="absolute inset-0 bg-emerald-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                <img 
                  src={profile.avatar_url || 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=150&auto=format&fit=crop'} 
                  alt="Avatar" 
                  className="relative w-32 h-32 rounded-full object-cover border-4 border-white shadow-xl transition-transform duration-500 group-hover:scale-105"
                />
                <label className="absolute bottom-0 right-0 bg-emerald-600 p-3 rounded-full cursor-pointer hover:bg-emerald-500 transition-all shadow-lg hover:scale-110">
                  <Upload className="w-5 h-5 text-white" />
                  <input type="file" className="hidden" accept="image/*" onChange={uploadAvatar} />
                </label>
              </div>
              <h3 className="font-black text-zinc-900 text-2xl mb-1">{profile.full_name || 'Fitness Enthusiast'}</h3>
              <p className="text-emerald-600 font-medium text-sm bg-emerald-50 px-3 py-1 rounded-full">{user.email}</p>
            </div>
            
            <div className="space-y-6 pt-8 border-t border-zinc-100">
              <div className="flex items-center gap-4 text-sm text-zinc-600 bg-zinc-50 p-4 rounded-2xl">
                <div className="p-2 bg-white rounded-xl shadow-sm">
                  <Mail className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-0.5">Email</span>
                  <span className="truncate font-medium text-zinc-900">{user.email}</span>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-600 bg-zinc-50 p-4 rounded-2xl">
                <div className="p-2 bg-white rounded-xl shadow-sm">
                  <User className="w-5 h-5 text-emerald-500" />
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-0.5">Account ID</span>
                  <span className="truncate font-mono text-zinc-900">{user.id.substring(0, 12)}...</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="lg:col-span-2 space-y-8">
          <form onSubmit={updateProfile} className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200 shadow-sm space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-emerald-100 rounded-xl">
                <User className="w-6 h-6 text-emerald-600" />
              </div>
              <h2 className="text-2xl font-bold text-zinc-900">Personal Information</h2>
            </div>
            
            {message && (
              <div className={`p-4 rounded-2xl text-sm font-bold flex items-center gap-3 ${
                message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <X className="w-5 h-5" />}
                {message.text}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-emerald-500" />
                  {t('full_name')}
                </label>
                <input
                  type="text"
                  value={profile.full_name}
                  onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-zinc-900 font-medium"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-zinc-900 font-medium"
                  placeholder="+84 123 456 789"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500" />
                {t('address')}
              </label>
              <input
                type="text"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all text-zinc-900 font-medium"
                placeholder="123 Fitness St, Workout City"
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-500" />
                {t('hobbies')}
              </label>
              <textarea
                value={profile.hobbies}
                onChange={(e) => setProfile({ ...profile, hobbies: e.target.value })}
                rows={3}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none text-zinc-900 font-medium"
                placeholder="Gym, Running, Healthy Cooking..."
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-500" />
                {t('goals')}
              </label>
              <textarea
                value={profile.goals}
                onChange={(e) => setProfile({ ...profile, goals: e.target.value })}
                rows={3}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none text-zinc-900 font-medium"
                placeholder="Lose 5kg, Build muscle, Run a marathon..."
              />
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-emerald-500/20 active:scale-95 text-lg"
            >
              {saving ? <Loader2 className="w-6 h-6 animate-spin" /> : <Save className="w-6 h-6" />}
              {t('save_profile')}
            </button>
          </form>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200 shadow-sm space-y-8">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-zinc-100 rounded-xl">
                <Lock className="w-6 h-6 text-zinc-600" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Account Security</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                onClick={() => {
                  const newPassword = prompt('Enter new password:');
                  if (newPassword) {
                    supabase.auth.updateUser({ password: newPassword }).then(({ error }) => {
                      if (error) setMessage({ type: 'error', text: error.message });
                      else setMessage({ type: 'success', text: 'Password updated successfully' });
                    });
                  }
                }}
                className="w-full flex items-center justify-center gap-3 bg-white border-2 border-zinc-200 text-zinc-700 font-bold py-4 rounded-2xl hover:bg-zinc-50 hover:border-zinc-300 transition-all"
              >
                <Lock className="w-5 h-5" />
                Change Password
              </button>
              
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
                    alert('Account deletion is not supported from the client-side for security reasons. Please delete your account from the Supabase dashboard.');
                  }
                }}
                className="w-full flex items-center justify-center gap-3 bg-red-50 text-red-600 font-bold py-4 rounded-2xl hover:bg-red-100 transition-all border border-red-100"
              >
                <Trash2 className="w-5 h-5" />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
