import { useState } from 'react';

export default function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      name,
      email,
      phone,
      country,
      password,
    };

    const stored = localStorage.getItem('registrationData');
    let existing = [];

    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        existing = parsed;
      }
    } catch {
      existing = [];
    }

    const updated = [...existing, newEntry];
    localStorage.setItem('registrationData', JSON.stringify(updated));

    // Clear form
    setName('');
    setEmail('');
    setPhone('');
    setCountry('');
    setPassword('');
    alert('✅ تىزىملىتىش مۇۋەپپەقىيەتلىك بولدى!');
  };

  return (
    <div className="max-w-md mx-auto mt-40 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">📝 تىزىملىتىش فورمىسى</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="👤 ئىسم"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="📧 ئىلخەت"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          placeholder="📱 تېلفۇن"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          placeholder="🌍 دۆلەت"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="🔒 مەخپى نۇمۇر"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          ➕ تىزىملىتىش
        </button>
      </form>
    </div>
  );
}