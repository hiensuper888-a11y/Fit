import React, { useState, useEffect } from 'react';

export const CurrentDate: React.FC = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60000); // Cập nhật mỗi phút
    return () => clearInterval(timer);
  }, []);

  const formattedDate = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return <span className="text-sm text-zinc-500">{formattedDate}</span>;
};
