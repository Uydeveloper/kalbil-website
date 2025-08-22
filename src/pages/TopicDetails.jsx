import { useParams, useNavigate } from 'react-router-dom';
import courses from '../data/courses.json';
import { useState, useEffect, useRef } from 'react';

export default function TopicDetails() {
  const { id, topicId } = useParams();
  const navigate = useNavigate();

  // course نى تاپايلى
  const course = courses.find((c) => String(c.id ) === id);
  const topic = course.topics[topicId] ;

  // ⚡ topicId نى بىر تەرەپ قىلىش: index ياكى id بولۇشى مۇمكىن
  // let topic = null;
  // if (course?.topics) {
  //   // بىرىنچىدىن index بويىچە قاراپ باقىمىز
  //   const byIndex = course.topics[Number(topicId)];
  //   // ئىككىنچىدىن id بويىچە قاراپ باقىمىز
  //   const byId = course.topics.find((t) => String(t.id) === topicId);
  //   topic = byIndex || byId || null;
  // }

  const [pyodide, setPyodide] = useState(null);
  const [topicOutput, setTopicOutput] = useState("");
  const [pythonCode, setPythonCode] = useState("");
  const [pythonOutput, setPythonOutput] = useState("");
  const [showPythonOutput, setShowPythonOutput] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const outputRef = useRef(null);

  useEffect(() => {
    const loadPyodide = async () => {
      try {
        const py = await window.loadPyodide();
        await py.loadPackage("micropip");
        setPyodide(py);
      } catch (err) {
        console.error("❌ Pyodide load error:", err);
      }
    };
    loadPyodide();
  }, []);

  const ensurePackagesInstalled = async (code) => {
    const requiredPackages = [];
    if (code.includes("numpy")) requiredPackages.push("numpy");
    if (code.includes("pandas")) requiredPackages.push("pandas");
    if (code.includes("matplotlib")) requiredPackages.push("matplotlib");

    if (requiredPackages.length > 0) {
      try {
        await pyodide.runPythonAsync(`
import micropip
await micropip.install(${JSON.stringify(requiredPackages)})
`);
      } catch (err) {
        console.error("❌ Package install error:", err);
      }
    }
  };

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
      await ensurePackagesInstalled(code);
      await pyodide.runPythonAsync(code);
      setOutput(stdout || "✅ No output.");
    } catch (err) {
      setOutput("❌ Python Error: " + err.message);
    }
  };

  const handleRunTopicCode = async () => {
    await runPython(topic?.code, setTopicOutput);
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

  // 🚫 خاتالىق بولسا fallback
if (!course || !topic) {
  return (
    <div className="p-6 text-red-600 dark:text-red-400">
      <h2 className="text-2xl font-bold mb-4">🚫 تېما ياكى دەرس تېپىلمىدى</h2>
      <p>Course ID: <code>{courseId}</code></p>
      <p>Topic ID: <code>{topicId}</code></p>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
      >
        🔙 قايتىش
      </button>
    </div>
  );
}

  return (
    <div className={`${darkMode ? "dark" : ""} p-6 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">📚 {topic.title}</h2>
      </div>

      <p className="mb-4">📝 {topic.description}</p>

      <h3 className="text-xl font-bold mb-2">🐍 تېما كودى</h3>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm mb-2">
        <code>{topic.code}</code>
      </pre>
      <button
        onClick={handleRunTopicCode}
        className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 mb-4"
      >
        ▶️ كود ئىجرا قىل
      </button>

      {topicOutput && (
        <div className="mt-2 bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm">
          <strong>Topic Output:</strong>
          <pre>{topicOutput}</pre>
        </div>
      )}

      <div className="mt-10">
        <h3 className="text-xl font-bold mb-2">🧪 مەشىق كودى</h3>
        <textarea
          value={pythonCode}
          onChange={(e) => setPythonCode(e.target.value)}
          placeholder="e.g. import numpy as np\nprint(np.array([1,2,3]))"
          rows={6}
          className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white mb-2"
        />
        <button
          onClick={handleRunPythonPractice}
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          ▶️ مەشىق كودىنى ئىجرا قىل
        </button>
      </div>

      {showPythonOutput && (
        <div ref={outputRef} className="mt-6 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow p-4 rounded">
          <div className="flex justify-between items-center mb-2">
            <strong className="text-lg">🧪 مەشىق نەتىجىسى</strong>
            <button
              onClick={() => setShowPythonOutput(false)}
              className="text-sm text-red-600 hover:underline"
            >
              ✖ تاقا
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
              📋 كۆچۈر
            </button>
            <button
              onClick={handleSaveOutput}
              className="bg-yellow-600 text-white py-1 px-3 rounded hover:bg-yellow-700 text-sm"
            >
              💾 ساقلا
            </button>
            <button
              onClick={handleShareOutput}
              className="bg-purple-600 text-white py-1 px-3 rounded hover:bg-purple-700 text-sm"
            >
              📤 ھەمبەھىرلە
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => navigate(-1)}
        className="mt-6 ml-5 bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600"
      >
        🔙 قايتىش
      </button>
    </div>
  );
}
