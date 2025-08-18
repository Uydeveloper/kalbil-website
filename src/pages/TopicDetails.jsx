import { useParams, useNavigate } from 'react-router-dom';
import courses from '../data/courses.json';
import { useState, useEffect, useRef } from 'react';

export default function TopicDetails() {
  const { id, topicId } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => String(c.id) === id);
  const topic = course.topics[topicId];

  const [pyodide, setPyodide] = useState(null);
  const [topicOutput, setTopicOutput] = useState("");
  const [pythonCode, setPythonCode] = useState("");
  const [pythonOutput, setPythonOutput] = useState("");
  const [showPythonOutput, setShowPythonOutput] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const outputRef = useRef(null);

  useEffect(() => {
    const loadPyodide = async () => {
      const py = await window.loadPyodide();
      setPyodide(py);
    };
    loadPyodide();
  }, []);

  const runPython = async (code, setOutput) => {
    if (!pyodide) {
      setOutput("⏳ Pyodide is still loading...");
      return;
    }

    if (!code?.trim()) {
      setOutput("⚠️ No Python code provided.");
      return;
    }

    let stdout = "";
    pyodide.setStdout({
      batched: (msg) => {
        stdout += msg;
      },
    });

    try {
      await pyodide.runPythonAsync(code);
      setOutput(stdout || "✅ No output.");
    } catch (err) {
      setOutput("❌ Python Error: " + err.message);
    }
  };

  const handleRunTopicCode = async () => {
    await runPython(topic.code, setTopicOutput);
  };

  const handleRunPythonPractice = async () => {
    await runPython(pythonCode, setPythonOutput);
    setShowPythonOutput(true);
    setTimeout(() => {
      outputRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCopyOutput = async () => {
    try {
      await navigator.clipboard.writeText(pythonOutput);
      alert("✅ Output copied to clipboard!");
    } catch (err) {
      alert("❌ Failed to copy: " + err.message);
    }
  };

  const handleSaveOutput = () => {
    try {
      localStorage.setItem("lastPythonOutput", pythonOutput);
      alert("💾 Output saved to localStorage!");
    } catch (err) {
      alert("❌ Failed to save: " + err.message);
    }
  };

  const handleShareOutput = () => {
    if (navigator.share) {
      navigator.share({
        title: "Python Output",
        text: pythonOutput,
      }).catch((err) => alert("❌ Share failed: " + err.message));
    } else {
      alert("⚠️ Share API not supported on this device.");
    }
  };

  return (
    <div className={`${darkMode ? "dark" : ""} p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">📚 {topic.title}</h2>
      </div>

      <p className="mb-4">📝 {topic.description}</p>

      {/* Topic Python Code */}
      <h3 className="text-xl font-bold mb-2">🐍 Topic Python Code</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm mb-2">
        <code>{topic.code}</code>
      </pre>
      <button
        onClick={handleRunTopicCode}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mb-4"
      >
        ▶️ Run Topic Code
      </button>

      {topicOutput && (
        <div className="mt-2 bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm">
          <strong>Topic Output:</strong>
          <pre>{topicOutput}</pre>
        </div>
      )}

      {/* Python Code Practice */}
      <div className="mt-10">
        <h3 className="text-xl font-bold mb-2">🧪 Python Code Practice</h3>
        <textarea
          value={pythonCode}
          onChange={(e) => setPythonCode(e.target.value)}
          placeholder="e.g. import math\nprint(math.pi)"
          rows={6}
          className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white mb-2"
        />
        <button
          onClick={handleRunPythonPractice}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          ▶️ Run Practice Code
        </button>
      </div>

      {/* Python Output Section */}
      {showPythonOutput && (
        <div ref={outputRef} className="mt-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow p-4 rounded">
          <div className="flex justify-between items-center mb-2">
            <strong className="text-lg">🧪 Practice Output</strong>
            <button
              onClick={() => setShowPythonOutput(false)}
              className="text-sm text-red-600 hover:underline"
            >
              ✖ Close
            </button>
          </div>
          <pre className="bg-gray-100 dark:bg-gray-900 p-3 rounded text-sm whitespace-pre-wrap mb-2">
            <code className="text-green-600 dark:text-green-400">{pythonOutput}</code>
          </pre>
          <div className="flex gap-3">
            <button
              onClick={handleCopyOutput}
              className="bg-gray-600 text-white py-1 px-3 rounded hover:bg-gray-700 text-sm"
            >
              📋 Copy
            </button>
            <button
              onClick={handleSaveOutput}
              className="bg-yellow-600 text-white py-1 px-3 rounded hover:bg-yellow-700 text-sm"
            >
              💾 Save
            </button>
            <button
              onClick={handleShareOutput}
              className="bg-purple-600 text-white py-1 px-3 rounded hover:bg-purple-700 text-sm"
            >
              📤 Share
            </button>
          </div>
        </div>
      )}

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mt-6 ml-5 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        🔙 Back
      </button>
    </div>
  );
}