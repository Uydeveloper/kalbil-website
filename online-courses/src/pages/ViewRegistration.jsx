import { useEffect, useState } from 'react';

export default function ViewRegistration() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('registrationData');
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed)) {
        setData(parsed);
      } else {
        setData([]);
      }
    } catch {
      setData([]);
    }
  }, []);

  const handleDelete = (index) => {
    const updated = data.filter((_, i) => i !== index);
    setData(updated);
    localStorage.setItem('registrationData', JSON.stringify(updated));
  };

  const handleEdit = (index) => {
    const entry = data[index];
    alert(`Edit not implemented yet. Entry: ${JSON.stringify(entry, null, 2)}`);
    // Future: open modal or navigate to edit page
  };

  const filteredData = data.filter((entry) =>
    entry.name.toLowerCase().includes(search.toLowerCase()) ||
    entry.email.toLowerCase().includes(search.toLowerCase()) ||
    entry.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">📋 تىزىملىتىلگەن ئۇچۇرلار</h2>

      <input
        type="text"
        placeholder="ئىسم، ئىلخەت، ياكى دۆلەت بويىچە ئىزدەڭ"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-6 p-2 border rounded"
      />

      {filteredData.length === 0 ? (
        <p className="text-center text-gray-500">ئۇچۇر تېپىلمىدى.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredData.map((entry, index) => (
            <div key={index} className="bg-white p-4 rounded shadow relative">
              <p><strong>👤 ئىسم:</strong> {entry.name}</p>
              <p><strong>📧 ئىلخەت:</strong> {entry.email}</p>
              <p><strong>📱 تېلفۇن:</strong> {entry.phone}</p>
              <p><strong>🌍 دۆلەت:</strong> {entry.country}</p>
              <p><strong>🔒 مەخپى نۇمۇر:</strong> {entry.password}</p>

              <div className="mt-4 flex justify-between">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  ✏️ تەھرىرلەش
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  🗑 ئۆچۈرۈش
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}