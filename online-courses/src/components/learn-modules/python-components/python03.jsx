import React, { useEffect } from 'react';

const injectFonts = () => {
  if (!document.fonts || !document.fonts.check('16px "Noto Nastaliq Uyghur"')) {
    const uyghurFont = document.createElement('link');
    uyghurFont.href = 'https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Uyghur:wght@400;600;700&display=swap';
    uyghurFont.rel = 'stylesheet';
    document.head.appendChild(uyghurFont);
  }
  const monoFont = document.createElement('link');
  monoFont.href = 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500;600&display=swap';
  monoFont.rel = 'stylesheet';
  document.head.appendChild(monoFont);
};

const CodeBlock = ({ children }) => (
  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
    <pre className="text-emerald-300 text-sm" style={{ fontFamily: "'Fira Code', monospace", direction: 'ltr', textAlign: 'left' }}>
      {children}
    </pre>
  </div>
);

const Chapter = ({ number, uyTitle, enTitle, uyDesc, enDesc, examples, excluded = [] }) => (
  <div className="mb-14 pb-8 border-b border-gray-800/50">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-5">
      <h2 
        className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
        style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
      >
        {number} باب　{uyTitle}
      </h2>
      <span 
        className="text-pink-300 italic text-sm"
        style={{ direction: 'ltr', textAlign: 'left' }}
      >
        {enTitle}
      </span>
    </div>
    
    <div className="space-y-4">
      <p 
        className="text-justify text-gray-200"
        style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
      >
        {uyDesc}
      </p>
      <p 
        className="text-justify text-gray-400 text-sm italic"
        style={{ direction: 'ltr', textAlign: 'left' }}
      >
        {enDesc}
      </p>
      {excluded.length > 0 && (
        <p 
          className="text-xs text-orange-400 italic"
          style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
        >
          چەكلىمى: {excluded.join(', ')} ئىشلىتىلمەيدۇ.
        </p>
      )}
    </div>

    <div className="mt-8 space-y-7">
      {examples.map((ex, idx) => (
        <div key={idx} className="bg-gray-800/40 p-5 rounded-xl border border-purple-700/30">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
            <h4 
              className="font-semibold text-purple-300"
              style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
            >
              {idx + 1}. {ex.uyTitle}
            </h4>
            <span 
              className="text-pink-200 text-sm italic"
              style={{ direction: 'ltr', textAlign: 'left' }}
            >
              {ex.enTitle}
            </span>
          </div>
          
          <p 
            className="mb-4 text-sm text-gray-200"
            style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'justify' }}
          >
            {ex.uyExplanation}
          </p>
          <p 
            className="mb-4 text-xs text-gray-400 italic"
            style={{ direction: 'ltr', textAlign: 'left' }}
          >
            {ex.enExplanation}
          </p>
          
          <CodeBlock>{ex.code}</CodeBlock>
          
          <div className="mt-3 flex flex-col md:flex-row md:items-center gap-2">
            <span 
              className="text-xs text-gray-400"
              style={{ direction: 'rtl', textAlign: 'right', fontFamily: "'Noto Nastaliq Uyghur', serif" }}
            >
              نەتىجە:
            </span>
            <span 
              className="text-xs text-pink-300 font-mono"
              style={{ direction: 'ltr', textAlign: 'left' }}
            >
              {ex.output}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function ProfessionalPythonGuide() {
  useEffect(() => {
    injectFonts();
  }, []);

  const chapters = [
    // باب 1
    {
      number: "1",
      uyTitle: "Python مۇھىتى",
      enTitle: "Python Environment",
      uyDesc: "Python نى قاچىلاش، venv قۇرۇش، pip بىلەن باشقۇرۇش.",
      enDesc: "Installing Python, virtual environments, and package management.",
      examples: [
        { uyTitle: "venv قۇرۇش", enTitle: "Virtual Environment", uyExplanation: "پروگرامما بېكەتلەرنى ئايرىم ساقلاش.", enExplanation: "Isolate dependencies.", code: `$ python -m venv myenv\n$ source myenv/bin/activate`, output: "(myenv) $" },
        { uyTitle: "pip ئورنىتىش", enTitle: "Install with pip", uyExplanation: "كۈتۈخانە ئورنىتىش.", enExplanation: "Install libraries.", code: `$ pip install numpy`, output: "مۇۋەپپەقىيەتلىك ئورنىتىلدى" },
        { uyTitle: "نەشرىيات تىزىملىكى", enTitle: "Requirements File", uyExplanation: "باشقا كومپيۇتېردا مۇھىتنى قايتىلاش.", enExplanation: "Reproduce environment.", code: `$ pip freeze > requirements.txt`, output: "requirements.txt يېزىلدى" }
      ]
    },
    // باب 2
    {
      number: "2",
      uyTitle: "كودلاش قانۇنى",
      enTitle: "Coding Conventions",
      uyDesc: "PEP 8 قانۇنى بويىچە كود يېزىش ئۇسۇلى.",
      enDesc: "Writing clean code according to PEP 8.",
      examples: [
        { uyTitle: "ئۆزگىرىگۈچى ئىسمى", enTitle: "Variable Naming", uyExplanation: "ئۆزگىرىگۈچى ئىسمى — سودا ئىشلەتكىلى بولىدۇ.", enExplanation: "Use snake_case.", code: `user_name = 'Ali'  # not userName`, output: "user_name = 'Ali'" },
        { uyTitle: "بۆلەك ئارىلىق", enTitle: "Blank Lines", uyExplanation: "فۇنكسىيە ئوتتۇرىسىدا بىر قۇر بۆشلۇق قويۇش.", enExplanation: "Separate functions with blank lines.", code: `def func1():\n    pass\n\n\ndef func2():\n    pass`, output: "ئايقان كود" },
        { uyTitle: "ئىمپورت تەرتىپى", enTitle: "Import Order", uyExplanation: "ئىمپورت تەرتىپى — ستاندارت، دەرىجىلىك، ماھاللىي.", enExplanation: "Standard → 3rd-party → local.", code: `import os\nimport numpy as np\nfrom mymodule import helper`, output: "توغرىسىغا ئىمپورت" }
      ]
    },
    // باب 3
    {
      number: "3",
      uyTitle: "Python تىل قۇرۇلمىسى",
      enTitle: "Python Language Features",
      uyDesc: "List Comprehension، Generator، Decorator قاتارلىق.",
      enDesc: "List comprehensions, generators, decorators.",
      examples: [
        { uyTitle: "List Comprehension", enTitle: "List Comprehension", uyExplanation: "قىسقىچە تىزىملىك قۇرۇش.", enExplanation: "Concise list creation.", code: `squares = [x**2 for x in range(5)]`, output: "[0, 1, 4, 9, 16]" },
        { uyTitle: "Generator", enTitle: "Generator", uyExplanation: "خەتكە ئىشلىتىش ئۈچۈن تىللىما-تىللىك ياساش.", enExplanation: "Memory-efficient iteration.", code: `def count_up_to(n):\n    i = 0\n    while i < n:\n        yield i\n        i += 1`, output: "generator object" },
        { uyTitle: "Decorator", enTitle: "Decorator", uyExplanation: "فۇنكسىيەگە قوشۇمچە ئىقتىدار قوشۇش.", enExplanation: "Add behavior to functions.", code: `def log(func):\n    def wrapper(*args):\n        print(f'Calling {func.__name__}')\n        return func(*args)\n    return wrapper\n\n@log\ndef greet():\n    print('Hello')`, output: "Calling greet\\nHello" }
      ]
    },
    // باب 4
    {
      number: "4",
      uyTitle: "Python كىلاس",
      enTitle: "Python Classes",
      uyDesc: "كىلاس قۇرۇش، مېرۇت، ئۆز ئىقتىدارى.",
      enDesc: "Class creation, inheritance, magic methods.",
      examples: [
        { uyTitle: "ئۆز ئىقتىدارى", enTitle: "Magic Methods", uyExplanation: "كىلاسنىڭ ئۆز ئىقتىدارى (مەسىلەن: __str__).", enExplanation: "Customize class behavior.", code: `class Person:\n    def __init__(self, name):\n        self.name = name\n    def __str__(self):\n        return f'Person: {self.name}'\n\np = Person('Ali')\nprint(p)`, output: "Person: Ali" },
        { uyTitle: "مېرۇت", enTitle: "Inheritance", uyExplanation: "باپا كىلاسنىڭ ئىقتىدارىنى مېرۇت قىلىش.", enExplanation: "Inherit from parent class.", code: `class Animal:\n    def speak(self):\n        pass\n\nclass Dog(Animal):\n    def speak(self):\n        return 'Woof!'\n\nd = Dog()\nprint(d.s speak())`, output: "Woof!" },
        { uyTitle: "Property", enTitle: "Property Decorator", uyExplanation: "ئۆزگىرىگۈچىگە دۆلىتىنى باشقۇرۇش.", enExplanation: "Control attribute access.", code: `class Circle:\n    def __init__(self, radius):\n        self._radius = radius\n    @property\n    def radius(self):\n        return self._radius\n\nc = Circle(5)\nprint(c.radius)`, output: "5" }
      ]
    },
    // باب 5
    {
      number: "5",
      uyTitle: "تىپ ئىشەرتىسى",
      enTitle: "Type Hints",
      uyDesc: "فۇنكسىيە ۋە ئۆزگىرىگۈچىنىڭ تىپىنى بەلگىلەش.",
      enDesc: "Annotating function and variable types.",
      excluded: ["mypy"],
      examples: [
        { uyTitle: "فۇنكسىيە تىپى", enTitle: "Function Type Hint", uyExplanation: "فۇنكسىيە كىرگۈزۈش ۋە چىقىرىش تىپىنى بەلگىلەش.", enExplanation: "Annotate input and output types.", code: `def greet(name: str) -> str:\n    return f'Hello, {name}'\n\nprint(greet('Ali'))`, output: "Hello, Ali" },
        { uyTitle: "ئۆزگىرىگۈچى تىپى", enTitle: "Variable Type Hint", uyExplanation: "ئۆزگىرىگۈچىنىڭ تىپىنى بەلگىلەش.", enExplanation: "Specify variable type.", code: `age: int = 25\nname: str = 'Ali'`, output: "تىپ بەلگىلەندى" },
        { uyTitle: "List تىپى", enTitle: "List Type", uyExplanation: "تىزىملىكنىڭ ئېلېمېنت تىپىنى بەلگىلەش.", enExplanation: "Annotate list element type.", code: `from typing import List\n\ndef process(items: List[str]) -> None:\n    for item in items:\n        print(item)`, output: "تىزىملىك تىپى بەلگىلەندى" }
      ]
    },
    // باب 6
    {
      number: "6",
      uyTitle: "تېكىست بىلەن ئىشلىش",
      enTitle: "Text Processing",
      uyDesc: "رېگۇляр ئىپادە، فورماتلاش، encode/decode.",
      enDesc: "Regular expressions, formatting, encoding.",
      examples: [
        { uyTitle: "رېگۇляр ئىپادە", enTitle: "Regular Expressions", uyExplanation: "تېكىستتا نۇسخا ئىزدەش.", enExplanation: "Search patterns in text.", code: `import re\nif re.search(r'\\d+', 'ID: 123'):\n    print('رەقەم تېپىلدى')`, output: "رەقەم تېپىلدى" },
        { uyTitle: "فورماتلاش", enTitle: "String Formatting", uyExplanation: "f-string ئىشلىتىش.", enExplanation: "Use f-strings for formatting.", code: `name = 'Ali'\nage = 25\nprint(f'{name} {age} ياشايدۇ.')`, output: "Ali 25 ياشايدۇ." },
        { uyTitle: "UTF-8 ئايلاندۇرۇش", enTitle: "UTF-8 Encoding", uyExplanation: "تېكىستنى بايتقا ئايلاندۇرۇش.", enExplanation: "Convert string to bytes.", code: `text = 'سالام'\nencoded = text.encode('utf-8')\nprint(encoded)`, output: "b'\\xd8\\xb3\\xd9\\x84\\xd8\\xa7\\xd9\\x85'" }
      ]
    },
    // باب 7 — 0%، لېكىن تونۇشتۇرۇش بار
    {
      number: "7",
      uyTitle: "سان بىلەن ئىشلىش",
      enTitle: "Numeric Processing",
      uyDesc: "سان بىلەن ئىشلىش — بۇ بابتىن سوئال چىقمايدۇ.",
      enDesc: "Working with numbers — no exam questions from this chapter.",
      examples: [
        { uyTitle: "ئاساسىي ھېسابات", enTitle: "Basic Arithmetic", uyExplanation: "قوشۇش، ئايرىش، كۆپەيتىش.", enExplanation: "Basic math operations.", code: `a = 10 + 5 * 2\nprint(a)  # = 20`, output: "20" },
        { uyTitle: "Decimal ئىشلىتىش", enTitle: "Decimal for Precision", uyExplanation: "ئېنىق سان ھېسابى ئۈچۈن.", enExplanation: "Use Decimal for exact arithmetic.", code: `from decimal import Decimal\na = Decimal('0.1')\nb = Decimal('0.2')\nprint(a + b)`, output: "0.3" }
      ]
    },
    // باب 8
    {
      number: "8",
      uyTitle: "ۋاقىت ۋە چېسلا بىلەن ئىشلىش",
      enTitle: "Date and Time Handling",
      uyDesc: "datetime، timezone بىلەن ئىشلىش.",
      enDesc: "Working with datetime and timezones.",
      excluded: ["dateutil"],
      examples: [
        { uyTitle: "ھازىرقى ۋاقىت", enTitle: "Current Time", uyExplanation: "ھازىرقى ۋاقىتنى ئالىش.", enExplanation: "Get current datetime.", code: `from datetime import datetime\nnow = datetime.now()\nprint(now.strftime('%Y-%m-%d %H:%M'))`, output: "2025-12-11 15:30" },
        { uyTitle: "ۋاقىت قوشۇش", enTitle: "Add Time", uyExplanation: "بىر ۋاقىتتا كۈن قوشۇش.", enExplanation: "Add days to a date.", code: `from datetime import datetime, timedelta\nd = datetime(2025, 12, 1)\nnew_d = d + timedelta(days=10)\nprint(new_d.date())`, output: "2025-12-11" }
      ]
    },
    // باب 9
    {
      number: "9",
      uyTitle: "سانلىق مەلۇمات تۈرى ۋە ئالگورىزم",
      enTitle: "Data Types and Algorithms",
      uyDesc: "collections، heapq، itertools ئىشلىتىش.",
      enDesc: "Using collections, heapq, itertools.",
      excluded: ["bisect", "pprint"],
      examples: [
        { uyTitle: "Counter", enTitle: "Counter", uyExplanation: "ئېلېمېنتلارنى ھېسابلاش.", enExplanation: "Count element occurrences.", code: `from collections import Counter\nc = Counter(['a', 'b', 'a'])\nprint(c)`, output: "Counter({'a': 2, 'b': 1})" },
        { uyTitle: "defaultdict", enTitle: "defaultdict", uyExplanation: "مەۋجۇت بولمىغان كۇنۇپكىغا قىممەت بېرىش.", enExplanation: "Auto-initialize missing keys.", code: `from collections import defaultdict\nd = defaultdict(list)\nd['a'].append(1)\nprint(d)`, output: "defaultdict(<class 'list'>, {'a': [1]})" },
        { uyTitle: "itertools.chain", enTitle: "itertools.chain", uyExplanation: "تىزىملىكنى بىرلەشتۈرۈش.", enExplanation: "Flatten multiple iterables.", code: `import itertools\na = [1, 2]\nb = [3, 4]\nmerged = list(itertools.chain(a, b))\nprint(merged)`, output: "[1, 2, 3, 4]" }
      ]
    },
    // باب 10
    {
      number: "10",
      uyTitle: "ئومۇمۇيغۇر OS ۋە ئىجرا مۇلازىمىتى",
      enTitle: "Generic OS & Runtime Services",
      uyDesc: "os، sys، argparse قاتارلىقلار.",
      enDesc: "os, sys, argparse modules.",
      examples: [
        { uyTitle: "OS مۇلازىمىتى", enTitle: "OS Services", uyExplanation: "ف-فايل ئىشلىتىش، مۇھىت ئۆزگەرتىش.", enExplanation: "File and environment operations.", code: `import os\nprint(os.getcwd())\nos.environ['MY_VAR'] = 'value'`, output: "جەمئىي يول" },
        { uyTitle: "ئارگۇمېنت تەھلىلى", enTitle: "Argument Parsing", uyExplanation: "كوماندىلىك قۇر سۆز ئارگۇمېنتىنى تەھلىل قىلىش.", enExplanation: "Parse command-line args.", code: `import argparse\nparser = argparse.ArgumentParser()\nparser.add_argument('--name')\nargs = parser.parse_args()\nprint(args.name)`, output: "ئارگۇمېنت نەتىجىسى" }
      ]
    },
    // باب 11
    {
      number: "11",
      uyTitle: "فايل ۋە مۇندەرىجە زىيارىتى",
      enTitle: "File and Directory Access",
      uyDesc: "pathlib، os.walk بىلەن ئىشلىش.",
      enDesc: "Working with files and directories.",
      examples: [
        { uyTitle: "Pathlib", enTitle: "Pathlib", uyExplanation: "فايل يولى بىلەن ئىشلىش.", enExplanation: "Modern path handling.", code: `from pathlib import Path\np = Path('data')\nif p.exists():\n    for f in p.iterdir():\n        print(f.name)`, output: "فايل ئىسمىلەر" },
        { uyTitle: "فايل ئوقۇش", enTitle: "File Reading", uyExplanation: "فايلنى كونتېكىست مېنىجېر ئىشلىتىپ ئوقۇش.", enExplanation: "Read file safely.", code: `with open('file.txt', 'r') as f:\n    content = f.read()\nprint(content)`, output: "فايل مەزمۇنى" }
      ]
    },
    // باب 12 — 0%
    {
      number: "12",
      uyTitle: "سانلىق مەلۇمات قىسقىرتىش ۋە ساقلاش",
      enTitle: "Data Compression and Persistence",
      uyDesc: "بۇ بابتىن سوئال چىقمايدۇ.",
      enDesc: "No exam questions from this chapter.",
      examples: []
    },
    // باب 13
    {
      number: "13",
      uyTitle: "مۇئەييەن سانلىق مەلۇمات فورماتى بىلەن ئىشلىش",
      enTitle: "Handling Specific Data Formats",
      uyDesc: "JSON، CSV بىلەن ئىشلىش.",
      enDesc: "Working with JSON, CSV.",
      excluded: ["configparser", "PyYAML", "openpyxl", "Pillow"],
      examples: [
        { uyTitle: "JSON ئىشلىتىش", enTitle: "JSON Handling", uyExplanation: "JSON نى يۈكلەش ۋە يېزىش.", enExplanation: "Load and write JSON.", code: `import json\ndata = {'name': 'Ali'}\njson_str = json.dumps(data)\nprint(json_str)`, output: '{"name": "Ali"}' },
        { uyTitle: "CSV ئوقۇش", enTitle: "CSV Reading", uyExplanation: "CSV فايلنى ئوقۇش.", enExplanation: "Read CSV files.", code: `import csv\nwith open('data.csv') as f:\n    reader = csv.reader(f)\n    for row in reader:\n        print(row)`, output: "['name', 'age']" }
      ]
    },
    // باب 14
    {
      number: "14",
      uyTitle: "تېنەتتىكى سانلىق مەلۇمات بىلەن ئىشلىش",
      enTitle: "Working with Internet Data",
      uyDesc: "urllib بىلەن URL ئاچىش.",
      enDesc: "Fetching data using urllib.",
      excluded: ["Requests", "email"],
      examples: [
        { uyTitle: "URL ئاچىش", enTitle: "Open URL", uyExplanation: "تېنەتتىن سانلىق مەلۇمات ئالىش.", enExplanation: "Fetch data from URL.", code: `from urllib.request import urlopen\nwith urlopen('https://httpbin.org/json') as f:\n    data = f.read()\nprint(data[:100])`, output: "بىر قىسىم JSON" },
        { uyTitle: "URL پارامېتىر", enTitle: "URL Parameters", uyExplanation: "URL غا پارامېتىر قوشۇش.", enExplanation: "Add query parameters.", code: `from urllib.parse import urlencode\nparams = {'q': 'python'}\nquery = urlencode(params)\nprint(f'https://example.com?{query}')`, output: "https://example.com?q=python" }
      ]
    },
    // باب 15 — 0%
    {
      number: "15",
      uyTitle: "HTML/XML بىلەن ئىشلىش",
      enTitle: "Working with HTML/XML",
      uyDesc: "بۇ بابتىن سوئال چىقمايدۇ.",
      enDesc: "No exam questions from this chapter.",
      examples: []
    },
    // باب 16
    {
      number: "16",
      uyTitle: "سىناپ باقىش",
      enTitle: "Testing",
      uyDesc: "unittest بىلەن سىناپ باقىش.",
      enDesc: "Testing with unittest.",
      excluded: ["pytest", "pydoc"],
      examples: [
        { uyTitle: "ئادەتتىكى سىناپ باقىش", enTitle: "Basic Unit Test", uyExplanation: "ئادەتتىكى unittest يېزىش.", enExplanation: "Write a simple test.", code: `import unittest\n\ndef add(a, b):\n    return a + b\n\nclass TestMath(unittest.TestCase):\n    def test_add(self):\n        self.assertEqual(add(2, 3), 5)\n\nif __name__ == '__main__':\n    unittest.main()`, output: "OK" },
        { uyTitle: "setUp/tearDown", enTitle: "Setup and Teardown", uyExplanation: "سىناپ باقىشنىڭ باشى ۋە ئاخىرىدا ئىشلىتىش.", enExplanation: "Prepare and clean up.", code: `class TestDB(unittest.TestCase):\n    def setUp(self):\n        self.db = connect_db()\n    def tearDown(self):\n        self.db.close()`, output: "تەييارلىق ۋە تازىلاش" }
      ]
    },
    // باب 17
    {
      number: "17",
      uyTitle: "دېبۇگ قىلىش",
      enTitle: "Debugging",
      uyDesc: "logging، pdb بىلەن دېبۇگ قىلىش.",
      enDesc: "Debugging with logging and pdb.",
      excluded: ["traceback"],
      examples: [
        { uyTitle: "Logging", enTitle: "Logging", uyExplanation: "دېبۇگ ئۇچۇرلىرىنى ساقلاش.", enExplanation: "Log debug info.", code: `import logging\nlogging.basicConfig(level=logging.DEBUG)\nlogging.debug('Debug message')`, output: "DEBUG:root:Debug message" },
        { uyTitle: "PDB", enTitle: "PDB Debugger", uyExplanation: "كودنى قېرىندا توختاپ دېبۇگ قىلىش.", enExplanation: "Interactive debugging.", code: `import pdb; pdb.set_trace()\nprint('After breakpoint')`, output: "(Pdb)>" }
      ]
    },
    // باب 18
    {
      number: "18",
      uyTitle: "شىفىرلاش",
      enTitle: "Cryptography",
      uyDesc: "hashlib بىلەن ھاشلاش.",
      enDesc: "Hashing with hashlib.",
      excluded: ["cryptography"],
      examples: [
        { uyTitle: "SHA256 ھاش", enTitle: "SHA256 Hash", uyExplanation: "تېكىستنى ھاشلاش.", enExplanation: "Hash a string.", code: `import hashlib\nh = hashlib.sha256(b'hello')\nprint(h.hexdigest())`, output: "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824" }
      ]
    },
    // باب 19 — 0%
    {
      number: "19",
      uyTitle: "بىرلەشمىلىك ۋە پاراللېل ئىشلىتىش",
      enTitle: "Concurrency and Parallelism",
      uyDesc: "بۇ بابتىن سوئال چىقمايدۇ.",
      enDesc: "No exam questions from this chapter.",
      examples: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-950 to-black text-white">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="text-center mb-14">
          <h1
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
          >
            كېسپىي Python دەرىجىلىك دەرىسلىك
          </h1>
          <p 
            className="text-pink-300 italic"
            style={{ direction: 'ltr' }}
          >
            Professional Python Certification Guide (Uyghur & English)
          </p>
        </div>

        <div className="space-y-12">
          {chapters.map((chapter, idx) => (
            <Chapter key={idx} {...chapter} />
          ))}
        </div>

        <div 
          className="mt-20 text-center text-purple-400/70 text-sm"
          style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
        >
          — كودلاش — بۇ كېسپىيەت ۋە ئەقىلنىڭ ئۇچۇرى —
        </div>
        <div 
          className="mt-2 text-center text-pink-400/70 text-xs italic"
          style={{ direction: 'ltr' }}
        >
          — Coding is the fusion of craftsmanship and intellect —
        </div>
      </div>
    </div>
  );
}