import React, { useState, useEffect, useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';

// Multilingual text support
const translations = {
  en: {
    title: "Student Information System",
    addStudent: "Add New Student",
    name: "Name",
    age: "Age",
    grade: "Grade",
    courses: "Courses (comma-separated)",
    progress: "Progress (%)",
    attendance: "Attendance",
    add: "Add",
    actions: "Actions",
    edit: "Edit",
    delete: "Delete",
    save: "Save",
    cancel: "Cancel",
    exportPDF: "Print / Export to PDF",
    exportExcel: "Export All to Excel",
    saveData: "Save Current Data",
    confirmDelete: "Are you sure you want to delete this student?",
    validationError: "Please fill all fields correctly.",
  },
  ug: {
    title: "ئوقۇغۇچى ئۇچۇر باشقۇرۇش سېستىمىسى",
    addStudent: "يېڭى ئوقۇغۇچى قوشۇش",
    name: "ئاتى",
    age: "يېشى",
    grade: "سىنىپى",
    courses: "ئالغان دەرس (پەسىل بىلەن ئايرىلىدۇ)",
    progress: "پۇرۇجى (%)",
    attendance: "دۇرسىلىك",
    add: "قوشۇش",
    actions: "مەشغۇلات",
    edit: "تەھرىرلە",
    delete: "ئۆچۈر",
    save: "ساقلاش",
    cancel: "ۋاز كەچ",
    exportPDF: "پىرنىت قىلىش / PDF قىلىش",
    exportExcel: "بارلىقىنى ئاكسىلگە ساقلاش",
    saveData: "ھازىرقى ئۇچۇرلارنى ساقلاش",
    confirmDelete: "راستىنلا بۇ ئوقۇغۇچىنى ئۆچۈرەمسىز؟",
    validationError: "بارلىق بۆلەكلەرنى توغرا تولدۇرۇڭ.",
  },
};

const t = (key) => {
  const lang = navigator.language.startsWith('en') ? 'en' : 'ug';
  return translations[lang][key] || translations.ug[key];
};

// Dummy auth
const useAuth = () => ({ user: { role: 'admin', name: 'Abudureyimu' } });

// Initial data
const initialStudents = [
  {
    _id: '1',
    name: 'Ali',
    age: 17,
    grade: '11-A',
    courses: ['Math', 'Physics'],
    attendance: { '2025-08-25': true, '2025-08-26': false, '2025-08-27': true },
    progress: 80,
  },
  {
    _id: '2',
    name: 'Fatima',
    age: 16,
    grade: '10-B',
    courses: ['Biology', 'Chemistry'],
    attendance: { '2025-08-25': true, '2025-08-26': true, '2025-08-27': true },
    progress: 95,
  },
];

const StudentInfoSystem = () => {
  const { user } = useAuth();
  const [students, setStudents] = useState([]);
  const [savedData, setSavedData] = useState([]); // ساقلانغان ئۇچۇرلار
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});
  const [newStudent, setNewStudent] = useState({
    name: '',
    age: '',
    grade: '',
    courses: '',
    progress: 0,
    attendance: { '2025-08-25': false, '2025-08-26': false, '2025-08-27': false },
  });
  const [dates] = useState(['2025-08-25', '2025-08-26', '2025-08-27']);
  const [error, setError] = useState('');
  const printRef = useRef();

  useEffect(() => {
    setStudents(initialStudents);
  }, []);

  const validateForm = (data) => {
    if (!data.name || !data.age || !data.grade || !data.courses || data.progress < 0 || data.progress > 100) {
      setError(t('validationError'));
      return false;
    }
    setError('');
    return true;
  };

  const handleEdit = (student) => {
    setEditingId(student._id);
    setFormData({ ...student, courses: student.courses.join(', ') });
  };

  const handleDelete = (id) => {
    if (window.confirm(t('confirmDelete'))) {
      setStudents((prev) => prev.filter((s) => s._id !== id));
    }
  };

  const handleSave = () => {
    if (!validateForm(formData)) return;
    const updated = {
      ...formData,
      courses: formData.courses.split(',').map((c) => c.trim()).filter((c) => c),
      age: parseInt(formData.age),
      progress: parseInt(formData.progress),
      attendance: { ...formData.attendance },
    };
    setStudents((prev) =>
      prev.map((s) => (s._id === updated._id ? updated : s))
    );
    setEditingId(null);
    setFormData({});
  };

  const handleAddStudent = () => {
    if (!validateForm(newStudent)) return;
    const newEntry = {
      ...newStudent,
      _id: Date.now().toString(),
      courses: newStudent.courses.split(',').map((c) => c.trim()).filter((c) => c),
      age: parseInt(newStudent.age),
      progress: parseInt(newStudent.progress),
      attendance: { ...newStudent.attendance },
    };
    setStudents((prev) => [...prev, newEntry]);
    setNewStudent({
      name: '',
      age: '',
      grade: '',
      courses: '',
      progress: 0,
      attendance: { '2025-08-25': false, '2025-08-26': false, '2025-08-27': false },
    });
    setError('');
  };

  // ✅ ھازىرقى ئۇچۇرلارنى ساقلاش
  const handleSaveData = () => {
    const dataToSave = students.map(s => ({
      name: s.name,
      age: s.age,
      grade: s.grade,
      courses: s.courses.join(', '),
      progress: s.progress,
      attendance: dates.map(d => (s.attendance[d] ? 1 : 0)), // 1 ياكى 0
      date: new Date().toLocaleString(), // ساقلانغان ۋاقىت
    }));
    setSavedData(dataToSave);
  };

  // ✅ PDF ساقلاش ياكى پىرنىت قىلىش
  const handleExportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text(t('title'), 20, 20);

    const tableColumn = [
      t('name'),
      t('age'),
      t('grade'),
      t('courses'),
      t('progress'),
      ...dates,
    ];
    const tableRows = students.map((s) => [
      s.name,
      s.age,
      s.grade,
      s.courses.join(', '),
      `${s.progress}%`,
      ...dates.map((d) => (s.attendance[d] ? '✅' : '❌')),
    ]);

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 30,
    });

    const action = window.confirm('پىرنىت قىلىمىز؟ OK: پىرنىت، Cancel: PDF ساقلاش') ? 'print' : 'save';
    if (action === 'print') {
      const blob = doc.output('blob');
      const url = URL.createObjectURL(blob);
      const iframe = document.createElement('iframe');
      iframe.style.position = 'absolute';
      iframe.style.width = '0';
      iframe.style.height = '0';
      iframe.style.top = '-100px';
      iframe.src = url;
      document.body.appendChild(iframe);
      iframe.onload = () => {
        iframe.contentWindow.print();
      };
    } else {
      doc.save('StudentInfo.pdf');
    }
  };

  // ✅ Excel ساقلاش
  const handleExportExcel = () => {
    const headers = [
      t('name'),
      t('age'),
      t('grade'),
      t('courses'),
      t('progress') + ' (%)',
      ...dates.map(d => `${t('attendance')} (${d})`)
    ];

    const data = students.map(s => [
      s.name,
      s.age,
      s.grade,
      s.courses.join(', '),
      s.progress,
      ...dates.map(d => s.attendance[d] ? 1 : 0)
    ]);

    const ws = XLSX.utils.aoa_to_sheet([headers, ...data]);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Students');
    XLSX.writeFile(wb, 'Students.xlsx');
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8 bg-gray-50 min-h-screen font-sans text-gray-800 dark:text-gray-200 dark:bg-gray-900 transition-colors duration-300">
      <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 sm:mb-6 text-center text-blue-600 dark:text-blue-400">
        🧑‍🎓 {t('title')}
      </h2>

      {/* Export Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4 sm:mb-6">
        <button
          onClick={handleExportPDF}
          className="px-3 sm:px-4 py-2 sm:py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200 text-sm sm:text-base"
        >
          🖨️ {t('exportPDF')}
        </button>
        <button
          onClick={handleExportExcel}
          className="px-3 sm:px-4 py-2 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 text-sm sm:text-base"
        >
          📥 {t('exportExcel')}
        </button>
      </div>

      {error && (
        <div className="mb-4 p-2 sm:p-3 bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200 rounded text-sm sm:text-base">
          {error}
        </div>
      )}

      {user.role === 'admin' && (
        <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
          <h3 className="text-lg sm:text-xl md:text-xl font-semibold mb-3 sm:mb-4">🆕 {t('addStudent')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <input
              placeholder={t('name')}
              value={newStudent.name}
              onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
              className="p-2 sm:p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <input
              placeholder={t('age')}
              type="number"
              value={newStudent.age}
              onChange={(e) => setNewStudent({ ...newStudent, age: e.target.value })}
              className="p-2 sm:p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <input
              placeholder={t('grade')}
              value={newStudent.grade}
              onChange={(e) => setNewStudent({ ...newStudent, grade: e.target.value })}
              className="p-2 sm:p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <input
              placeholder={t('courses')}
              value={newStudent.courses}
              onChange={(e) => setNewStudent({ ...newStudent, courses: e.target.value })}
              className="p-2 sm:p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <input
              placeholder={t('progress')}
              type="number"
              value={newStudent.progress}
              onChange={(e) => setNewStudent({ ...newStudent, progress: e.target.value })}
              className="p-2 sm:p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
          </div>
          <button
            onClick={handleAddStudent}
            className="mt-3 sm:mt-4 px-3 sm:px-4 py-2 sm:py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 text-sm sm:text-base"
          >
            ➕ {t('add')}
          </button>
        </div>
      )}

      {/* تەھرىرلىنىۋاتقان جادوال */}
      <div ref={printRef}>
        <div className="overflow-x-auto mb-8">
          <table className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <thead className="bg-gray-200 dark:bg-gray-700">
              <tr>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">{t('name')}</th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">{t('age')}</th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">{t('grade')}</th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">{t('courses')}</th>
                <th className="p-2 sm:p-3 text-left text-sm sm:text-base">{t('progress')}</th>
                {dates.map((d) => (
                  <th key={d} className="p-2 sm:p-3 text-center text-sm sm:text-base">{d}</th>
                ))}
                {user.role === 'admin' && <th className="p-2 sm:p-3 text-left text-sm sm:text-base">{t('actions')}</th>}
              </tr>
            </thead>
            <tbody>
              {students.map((s) => (
                <tr key={s._id} className="border-t dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
                  <td className="p-2 sm:p-3">
                    {editingId === s._id ? (
                      <input
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="p-1 sm:p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    ) : (
                      s.name
                    )}
                  </td>
                  <td className="p-2 sm:p-3">
                    {editingId === s._id ? (
                      <input
                        value={formData.age}
                        type="number"
                        onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                        className="p-1 sm:p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    ) : (
                      s.age
                    )}
                  </td>
                  <td className="p-2 sm:p-3">
                    {editingId === s._id ? (
                      <input
                        value={formData.grade}
                        onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                        className="p-1 sm:p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    ) : (
                      s.grade
                    )}
                  </td>
                  <td className="p-2 sm:p-3">
                    {editingId === s._id ? (
                      <input
                        value={formData.courses}
                        onChange={(e) => setFormData({ ...formData, courses: e.target.value })}
                        className="p-1 sm:p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    ) : (
                      s.courses.join(', ')
                    )}
                  </td>
                  <td className="p-2 sm:p-3">
                    {editingId === s._id ? (
                      <input
                        type="number"
                        value={formData.progress}
                        onChange={(e) => setFormData({ ...formData, progress: e.target.value })}
                        className="p-1 sm:p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                      />
                    ) : (
                      <div className="relative pt-1 sm:pt-1">
                        <div className="w-16 sm:w-20 bg-gray-200 dark:bg-gray-600 rounded-full h-2 sm:h-2.5">
                          <div
                            className="bg-blue-500 dark:bg-blue-400 h-2 sm:h-2.5 rounded-full"
                            style={{ width: `${s.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-xs sm:text-sm">{s.progress}%</span>
                      </div>
                    )}
                  </td>
                  {dates.map((d) => (
                    <td key={d} className="p-2 sm:p-3 text-center">
                      {editingId === s._id ? (
                        <input
                          type="checkbox"
                          checked={formData.attendance[d] || false}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              attendance: { ...formData.attendance, [d]: e.target.checked },
                            })
                          }
                          className="w-4 h-4 accent-blue-500"
                        />
                      ) : (
                        <span>{s.attendance[d] ? '✅' : '❌'}</span>
                      )}
                    </td>
                  ))}
                  {user.role === 'admin' && (
                    <td className="p-2 sm:p-3 flex space-x-1 sm:space-x-2">
                      {editingId === s._id ? (
                        <>
                          <button
                            onClick={handleSave}
                            className="px-2 sm:px-3 py-1 sm:py-1 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200 text-xs sm:text-sm"
                          >
                            💾 {t('save')}
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="px-2 sm:px-3 py-1 sm:py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-200 text-xs sm:text-sm"
                          >
                            ❌ {t('cancel')}
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => handleEdit(s)}
                            className="px-2 sm:px-3 py-1 sm:py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 text-xs sm:text-sm"
                          >
                            📝 {t('edit')}
                          </button>
                          <button
                            onClick={() => handleDelete(s._id)}
                            className="px-2 sm:px-3 py-1 sm:py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200 text-xs sm:text-sm"
                          >
                            🗑️ {t('delete')}
                          </button>
                        </>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ساقلانغان ئۇچۇرلار جادوالى */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-2">{t('saveData')}</h3>
          <button
            onClick={handleSaveData}
            className="mb-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition text-sm"
          >
            💾 {t('saveData')}
          </button>

          {savedData.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-800 shadow-md rounded-lg">
                <thead className="bg-gray-200 dark:bg-gray-700">
                  <tr>
                    <th className="p-2 text-left">{t('name')}</th>
                    <th className="p-2 text-left">{t('age')}</th>
                    <th className="p-2 text-left">{t('grade')}</th>
                    <th className="p-2 text-left">{t('courses')}</th>
                    <th className="p-2 text-left">{t('progress')}</th>
                    {dates.map((d) => (
                      <th key={d} className="p-2 text-center">{d}</th>
                    ))}
                    <th className="p-2 text-left">ساقلانغان ۋاقىت</th>
                  </tr>
                </thead>
                <tbody>
                  {savedData.map((data, index) => (
                    <tr key={index} className="border-t dark:border-gray-600">
                      <td className="p-2">{data.name}</td>
                      <td className="p-2">{data.age}</td>
                      <td className="p-2">{data.grade}</td>
                      <td className="p-2">{data.courses}</td>
                      <td className="p-2">{data.progress}%</td>
                      {data.attendance.map((val, i) => (
                        <td key={i} className="p-2 text-center">{val}</td>
                      ))}
                      <td className="p-2 text-sm text-gray-500">{data.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentInfoSystem;