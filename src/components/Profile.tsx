import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { useLanguage } from '../i18n/LanguageContext';
import { User, Mail, Phone, MapPin, Heart, Target, Save, Loader2 } from 'lucide-react';

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

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setProfile(data);
      }
    } catch (error: any) {
      console.error('Error loading profile:', error.message);
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
    <div className="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mb-12">
        <h1 className="text-4xl font-black text-zinc-900 tracking-tight mb-2">Account Profile</h1>
        <p className="text-zinc-500">Manage your personal information and preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar Info */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm sticky top-24">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="relative w-24 h-24 mb-4">
                <img 
                  src={profile.avatar_url || 'https://via.placeholder.com/150'} 
                  alt="Avatar" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-md"
                />
                <label className="absolute bottom-0 right-0 bg-emerald-600 p-2 rounded-full cursor-pointer hover:bg-emerald-700 transition-colors">
                  <Upload className="w-4 h-4 text-white" />
                  <input type="file" className="hidden" accept="image/*" onChange={uploadAvatar} />
                </label>
              </div>
              <h3 className="font-bold text-zinc-900 text-lg">{profile.full_name || 'Fitness Enthusiast'}</h3>
              <p className="text-zinc-500 text-sm">{user.email}</p>
            </div>
            
            <div className="space-y-4 pt-6 border-t border-zinc-100">
              <div className="flex items-center gap-3 text-sm text-zinc-600">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span className="truncate">{user.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-600">
                <User className="w-4 h-4 text-emerald-500" />
                <span>ID: {user.id.substring(0, 8)}...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form */}
        <div className="md:col-span-2">
          <form onSubmit={updateProfile} className="bg-white p-8 rounded-3xl border border-zinc-200 shadow-sm space-y-6">
            {message && (
              <div className={`p-4 rounded-xl text-sm font-medium ${
                message.type === 'success' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-red-50 text-red-700 border border-red-200'
              }`}>
                {message.text}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                  <User className="w-4 h-4 text-emerald-500" />
                  {t('full_name')}
                </label>
                <input
                  type="text"
                  value={profile.full_name}
                  onChange={(e) => setProfile({ ...profile, full_name: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-emerald-500" />
                  {t('phone')}
                </label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                  placeholder="+84 123 456 789"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500" />
                {t('address')}
              </label>
              <input
                type="text"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                placeholder="123 Fitness St, Workout City"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-500" />
                {t('hobbies')}
              </label>
              <textarea
                value={profile.hobbies}
                onChange={(e) => setProfile({ ...profile, hobbies: e.target.value })}
                rows={3}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                placeholder="Gym, Running, Healthy Cooking..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-700 flex items-center gap-2">
                <Target className="w-4 h-4 text-emerald-500" />
                {t('goals')}
              </label>
              <textarea
                value={profile.goals}
                onChange={(e) => setProfile({ ...profile, goals: e.target.value })}
                rows={3}
                className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all resize-none"
                placeholder="Lose 5kg, Build muscle, Run a marathon..."
              />
            </div>

            <button
              type="submit"
              disabled={saving}
              className="w-full bg-zinc-900 hover:bg-zinc-800 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg active:scale-95"
            >
              {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <Save className="w-5 h-5" />}
              {t('save_profile')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
