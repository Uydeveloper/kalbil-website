import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import myCourses from '../data/mycourses.json';

export default function CourseStart() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const outputRef = useRef(null);

  useEffect(() => {
    const found = myCourses.find(c => String(c.id) === id);
    if (found) {
      setCourse(found);
      if (found.topics?.[0]?.codeExample) {
        setCode(found.topics[0].codeExample);
      }
    } else {
      setCourse(null);
    }
  }, [id]);

  useEffect(() => {
    async function loadPyodide() {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/pyodide.js';
      script.onload = async () => {
        const py = await window.loadPyodide();
        setPyodide(py);
      };
      document.body.appendChild(script);
    }
    loadPyodide();
  }, []);

  const runCode = async (customCode = code) => {
    if (!pyodide) {
      setOutput('⏳ Pyodide is still loading...');
      return;
    }

    let outputBuffer = '';
    pyodide.setStdout({ batched: (text) => { outputBuffer += text; } });
    pyodide.setStderr({ batched: (text) => { outputBuffer += text; } });

    try {
      await pyodide.runPythonAsync(customCode);
      setOutput(outputBuffer || '✅ Code ran successfully, but no output.');
      setTimeout(() => {
        outputRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } catch (err) {
      setOutput(`❌ Error: ${err.message}`);
    }
  };

  if (!course || !course.topics) {
    return (
      <div className="p-6 text-red-600 dark:text-red-400">
        ❌ Course not found or has no topics.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* 🔙 Back Button */}
        <div>
          <button
            onClick={() => navigate(-1)}
            className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition"
          >
            ← كەينىگە قايتىش
          </button>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">{course.title}</h2>

        {/* 📋 Topics Table */}
        <table className="w-full table-auto border-collapse bg-white dark:bg-gray-800 rounded shadow">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">📚 Topic</th>
              <th className="p-3 text-left">📝 Description</th>
              <th className="p-3 text-left">💻 Code Example</th>
            </tr>
          </thead>
          <tbody>
            {course.topics.map((topic, index) => (
              <tr key={index} className="hover:bg-blue-100 dark:hover:bg-gray-700">
                <td className="p-3">{topic.title}</td>
                <td className="p-3">{topic.description}</td>
                <td className="p-3">
                  <pre className="bg-gray-200 dark:bg-gray-700 p-2 rounded text-sm whitespace-pre-wrap mb-2">
                    {topic.codeExample}
                  </pre>
                  <button
                    onClick={() => runCode(topic.codeExample)}
                    className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 text-sm"
                  >
                    ▶️ Run this example
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 🐍 Python Code Editor */}
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">💻 Python Code Practice</h3>
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            className="w-full h-40 p-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white rounded resize-none font-mono"
          ></textarea>

          <button
            onClick={() => runCode()}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            ▶️ Run Code
          </button>

          <div
            ref={outputRef}
            className="mt-4 bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm text-gray-700 dark:text-gray-300 font-mono"
          >
            🧾 Output:
            <pre>{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}