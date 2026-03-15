import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';

export const AdminArticleEditor: React.FC = () => {
  const [logoUrl, setLogoUrl] = useState('');
  const [productImageUrl, setProductImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    setLoading(true);
    setMessage('');
    
    // Giả sử slug của bài viết là 'nutrex-outlift'
    const { error } = await supabase
      .from('articles')
      .update({ logo_url: logoUrl, product_image_url: productImageUrl })
      .eq('slug', 'nutrex-outlift');

    if (error) {
      setMessage('Lỗi: ' + error.message);
    } else {
      setMessage('Cập nhật thành công!');
    }
    setLoading(false);
  };

  return (
    <div className="p-6 bg-white rounded-xl border border-zinc-200 shadow-sm">
      <h2 className="text-xl font-bold mb-4">Chỉnh sửa bài viết Nutrex Outlift</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-700">Logo URL</label>
          <input type="text" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700">Product Image URL</label>
          <input type="text" value={productImageUrl} onChange={(e) => setProductImageUrl(e.target.value)} className="w-full p-2 border rounded" />
        </div>
        <button onClick={handleUpdate} disabled={loading} className="px-4 py-2 bg-emerald-600 text-white rounded">
          {loading ? 'Đang cập nhật...' : 'Cập nhật'}
        </button>
        {message && <p className="text-sm mt-2">{message}</p>}
      </div>
    </div>
  );
};
