import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Loader2, Users } from 'lucide-react';

export const AdminDashboard: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*');
      if (data) setUsers(data);
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (loading) return <div className="p-8 text-center"><Loader2 className="animate-spin mx-auto" /></div>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-serif font-bold mb-6 flex items-center gap-2"><Users /> Admin Dashboard</h1>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-zinc-100">
            <tr>
              <th className="px-6 py-3 text-left">Email</th>
              <th className="px-6 py-3 text-left">Role</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id} className="border-b">
                <td className="px-6 py-4">{u.email}</td>
                <td className="px-6 py-4">{u.role}</td>
                <td className="px-6 py-4">{u.status || 'Active'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
