import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Loader2, User, Trash2 } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAdminAndFetchUsers();
  }, []);

  async function checkAdminAndFetchUsers() {
    try {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single();

      if (profile?.role !== 'admin') {
        alert('Bạn không có quyền truy cập trang này!');
        // Có thể thêm logic redirect về trang chủ ở đây
        return;
      }

      fetchUsers();
    } catch (error) {
      console.error('Error checking admin:', error);
    }
  }

  async function fetchUsers() {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('profiles').select('*');
      if (error) throw error;
      setUsers(data || []);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteUser(userId: string) {
    if (!confirm('Bạn có chắc chắn muốn xóa người dùng này?')) return;
    
    // Xóa trong bảng profiles (RLS sẽ xử lý nếu bạn đã chạy SQL ở Bước 3)
    const { error } = await supabase.from('profiles').delete().eq('id', userId);
    if (error) {
      alert('Lỗi khi xóa: ' + error.message);
    } else {
      fetchUsers();
    }
  }

  if (loading) return <div className="py-24 flex justify-center"><Loader2 className="w-8 h-8 animate-spin" /></div>;

  return (
    <div className="py-24 max-w-7xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>
      <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-zinc-50 border-b border-zinc-200">
            <tr>
              <th className="p-4">User</th>
              <th className="p-4">Role</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} className="border-b border-zinc-100">
                <td className="p-4 flex items-center gap-3">
                  <img src={user.avatar_url || 'https://via.placeholder.com/40'} className="w-10 h-10 rounded-full" />
                  {user.full_name}
                </td>
                <td className="p-4">{user.role}</td>
                <td className="p-4 flex gap-2">
                  <button onClick={() => toggleAdmin(user.id, user.role)} className="text-emerald-600 font-bold">
                    Toggle Admin
                  </button>
                  <button onClick={() => deleteUser(user.id)} className="text-red-600 font-bold">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
