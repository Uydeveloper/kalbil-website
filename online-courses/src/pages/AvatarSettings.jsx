import { useState, useEffect } from "react";

export default function AvatarSettings() {
  const [avatarPreview, setAvatarPreview] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("user-avatar");
    if (saved) setAvatarPreview(saved);
  }, []);

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      localStorage.setItem("user-avatar", base64);
      setAvatarPreview(base64);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">🖼 Avatar Settings</h2>
      <input type="file" accept="image/*" onChange={handleChange} />
      {avatarPreview && (
        <img
          src={avatarPreview}
          alt="Preview"
          className="mt-4 w-32 h-32 rounded-full object-cover border"
        />
      )}
    </div>
  );
}