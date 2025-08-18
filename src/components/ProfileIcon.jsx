// src/components/ProfileIcon.jsx
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

export default function ProfileIcon() {
  const { user } = useContext(UserContext);
  const initial = user?.username?.charAt(0).toUpperCase();

  return (
    <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center">
      {initial || '👤'}
    </div>
  );
}