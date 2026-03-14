import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Only initialize if we have the required credentials
// This prevents the app from crashing at module load time
export const supabase = (() => {
  if (!supabaseUrl || !supabaseAnonKey) return null;
  try {
    return createClient(supabaseUrl, supabaseAnonKey);
  } catch (e) {
    console.error('Failed to initialize Supabase client:', e);
    return null;
  }
})() as any;

if (!supabase) {
  console.warn('Supabase credentials missing. Please check your environment variables in the Settings menu.');
}
