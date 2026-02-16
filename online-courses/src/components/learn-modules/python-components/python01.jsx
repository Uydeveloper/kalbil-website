import React, { useEffect, useState } from 'react';
import { 
  BookOpen, 
  Code, 
  Cpu, 
  Database, 
  Globe, 
  GraduationCap, 
  Layers, 
  Lightbulb, 
  Terminal, 
  Zap,
  ChevronRight,
  Sparkles,
  Brain,
  Server,
  GitBranch,
  Coffee,
  FileText,
  AlertCircle,
  Users,
  Rocket,
  Cpu as CPUIcon,
  GitCompare,
  Code2,
  Braces,
  BookMarked
} from 'lucide-react';

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

const CodeBlock = ({ children, language = "python" }) => (
  <div className="relative group">
    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
    <div className="relative bg-gray-900/90 backdrop-blur-sm rounded-xl p-4 border border-emerald-800/50">
      <div className="flex items-center justify-between mb-3 px-2">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-mono text-emerald-300">{language}</span>
        </div>
        <button 
          className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors px-2 py-1 hover:bg-cyan-900/30 rounded"
          onClick={() => navigator.clipboard.writeText(children)}
        >
          كۆچۈرۈش
        </button>
      </div>
      <pre className="text-emerald-300 text-sm leading-relaxed overflow-x-auto" 
           style={{ fontFamily: "'Fira Code', monospace", direction: 'ltr', textAlign: 'left' }}>
        <code>{children}</code>
      </pre>
    </div>
  </div>
);

const Chapter = ({ number, uyTitle, enTitle, uyDesc, enDesc, examples, icon: Icon, difficulty = "ئاسان" }) => {
  const [expanded, setExpanded] = useState(false);

  const getDifficultyColor = (level) => {
    switch(level) {
      case "ئاسان": return "from-emerald-500 to-emerald-700";
      case "ئوتتۇرا": return "from-amber-500 to-orange-600";
      case "قىيىن": return "from-rose-500 to-pink-600";
      default: return "from-emerald-500 to-cyan-600";
    }
  };

  return (
    <div className="relative mb-16" id={`chapter-${number}`}>
      <div className="absolute -left-6 top-0 w-12 h-12 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-xl"></div>
      
      <div className={`relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-emerald-800/30 overflow-hidden transition-all duration-500 ${expanded ? 'shadow-2xl shadow-emerald-900/20' : 'shadow-lg hover:shadow-xl hover:shadow-emerald-900/10'}`}>
        {/* Chapter header */}
        <button 
          onClick={() => setExpanded(!expanded)}
          className="w-full p-8 text-left hover:bg-gray-800/30 transition-all duration-300 group"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-start gap-4">
              <div className="relative">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-600 to-cyan-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-xs font-bold">
                  {number}
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h2 
                    className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                    style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
                  >
                    {uyTitle}
                  </h2>
                  <ChevronRight className={`w-5 h-5 text-emerald-400 transition-transform duration-300 ${expanded ? 'rotate-90' : ''}`} />
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <p 
                    className="text-cyan-300 italic text-sm"
                    style={{ direction: 'ltr', textAlign: 'left' }}
                  >
                    {enTitle}
                  </p>
                  <div className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getDifficultyColor(difficulty)} text-white`}>
                    {difficulty}
                  </div>
                </div>
                <p 
                  className="text-gray-300 text-sm line-clamp-2"
                  style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
                >
                  {uyDesc}
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 bg-gradient-to-r from-emerald-900/50 to-cyan-900/50 rounded-full text-xs text-emerald-300">
                {examples.length} مىسال
              </div>
              <div className="hidden md:block px-3 py-1 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-full text-xs text-purple-300">
                باب {number}
              </div>
            </div>
          </div>
        </button>

        {/* Expanded content */}
        {expanded && (
          <div className="px-8 pb-8 space-y-8 animate-slideDown">
            {/* Description */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-emerald-900/20 rounded-xl p-6 border border-emerald-800/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-900/50 flex items-center justify-center">
                    <BookOpen className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="font-semibold text-emerald-300">چۈشەندۈرۈش</h4>
                </div>
                <p 
                  className="text-gray-200 leading-relaxed text-justify"
                  style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
                >
                  {uyDesc}
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-800/50 to-cyan-900/20 rounded-xl p-6 border border-cyan-800/30">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-900/50 flex items-center justify-center">
                    <Globe className="w-4 h-4 text-cyan-400" />
                  </div>
                  <h4 className="font-semibold text-cyan-300">Explanation</h4>
                </div>
                <p 
                  className="text-gray-300 leading-relaxed italic text-justify"
                  style={{ direction: 'ltr', textAlign: 'left' }}
                >
                  {enDesc}
                </p>
              </div>
            </div>

            {/* Examples */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">ئەمەلىي مىساللار</h3>
                <div className="h-px flex-1 bg-gradient-to-r from-emerald-600/50 to-transparent"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {examples.map((ex, idx) => (
                  <div key={idx} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600/30 to-cyan-600/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-emerald-700/50 transition-all duration-300 h-full flex flex-col">
                      {/* Example header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-700/30 to-cyan-700/30 flex items-center justify-center">
                            <span className="text-sm font-bold text-emerald-300">{idx + 1}</span>
                          </div>
                          <div>
                            <h4 
                              className="font-semibold text-white mb-1"
                              style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
                            >
                              {ex.uyTitle}
                            </h4>
                            <p 
                              className="text-xs text-cyan-300 italic"
                              style={{ direction: 'ltr', textAlign: 'left' }}
                            >
                              {ex.enTitle}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Explanation */}
                      <div className="space-y-3 mb-4 flex-grow">
                        <p 
                          className="text-sm text-gray-300"
                          style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl', textAlign: 'right' }}
                        >
                          {ex.uyExplanation}
                        </p>
                        <p 
                          className="text-xs text-gray-400 italic"
                          style={{ direction: 'ltr', textAlign: 'left' }}
                        >
                          {ex.enExplanation}
                        </p>
                      </div>

                      {/* Code preview */}
                      <div className="mb-4">
                        <CodeBlock>{ex.code}</CodeBlock>
                      </div>

                      {/* Output */}
                      <div className="mt-auto p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                          <span 
                            className="text-xs text-gray-400"
                            style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
                          >
                            نەتىجە:
                          </span>
                        </div>
                        <div className="font-mono text-sm text-cyan-200 bg-gray-900/50 p-2 rounded">
                          {ex.output}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress indicator */}
            <div className="pt-6 border-t border-gray-800">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">بۇ بابنى تاماملاش دەرىجىسى</span>
                <span className="text-sm font-semibold text-emerald-400">100%</span>
              </div>
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full transition-all duration-1000"
                  style={{ width: '100%' }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function FullBilingualPythonCourse() {
  const [activeChapter, setActiveChapter] = useState(null);

  useEffect(() => {
    injectFonts();
  }, []);

  const lessons = [
    {
      number: "01",
      uyTitle: "تاماق ئىشتاھىنى قىزغىتىپ بېقىي...",
      enTitle: "Whetting Your Appetite",
      uyDesc: "Python نىڭ كۈچى ۋە قۇۋۋىتىنى تەسۋىرلىش ئارقىلىق باشلانغۇچلارنى قىزىقتۇرۇش. بۇ بابقا Python تىلىنىڭ ئاددىيلىقى ۋە كۈچى تونۇشتۇرۇلىدۇ.",
      enDesc: "Getting beginners excited by showcasing Python's power and simplicity. This chapter introduces Python's easy syntax and powerful capabilities.",
      examples: [
        { 
          uyTitle: "ئەڭ سادە «سالام دۇنيا»", 
          enTitle: "Hello, World!", 
          uyExplanation: "باشلانغۇچلارنىڭ دۇنياسىغا كىرىش ئۈچۈن بىر قەدەم. بۇ ئەڭ ئاددىي Python كودى.", 
          enExplanation: "The first step into the programming world. This is the simplest Python code.", 
          code: `print("Hello, World!")`, 
          output: "Hello, World!" 
        },
        { 
          uyTitle: "تاماق ئۇسۇلى", 
          enTitle: "Food List", 
          uyExplanation: "تاماق ئىشتاھىنى قىزغىتىش ئۈچۈن مىسال. List ۋە loop ئىشلىتىش.", 
          enExplanation: "Example to whet your appetite. Using list and loop.", 
          code: `foods = ["نان", "گۆش", "چاي"]\nfor food in foods:\n    print(f"مەن {food} يەيمەن!")`, 
          output: "مەن نان يەيمەن!\nمەن گۆش يەيمەن!\nمەن چاي يەيمەن!" 
        },
        { 
          uyTitle: "ئاڭلىق تاماق تاللاش", 
          enTitle: "Smart Food Picker", 
          uyExplanation: "ئىشلىتىلغان كومپيۇتېر سانلىق مەلۇماتى بويىچە تاماق تەۋسىيە قىلىش.", 
          enExplanation: "Recommending food randomly using random module.", 
          code: `import random\nmeals = ["پولو", "لەڭمەن", "دۆلمە"]\nprint("بۈگۈنكى تاماق:", random.choice(meals))`, 
          output: "بۈگۈنكى تاماق: لەڭمەن" 
        }
      ],
      icon: Coffee,
      difficulty: "ئاسان"
    },
    {
      number: "02",
      uyTitle: "Python ئىنتېرپرىتاتورىنىڭ ئىشلىتىش ئۇسۇلى",
      enTitle: "Using the Python Interpreter",
      uyDesc: "Python نى ۋاقىتلىق (interactive) ھالەتتە قانداق ئىشلىتىش كېرەكلىكى. ئىنتېرپرىتاتور ئارقىلىق كودنى تېز سىناپ كۆرۈش.",
      enDesc: "How to use Python in interactive mode. Quickly test code through the interpreter.",
      examples: [
        { 
          uyTitle: "IDLE نى ئىشلىتىش", 
          enTitle: "Using IDLE", 
          uyExplanation: "IDLE نى قوزغىتىپ، بىۋاسىتە كود يېزىش ۋە نەتىجىسىنى كۆرۈش.", 
          enExplanation: "Launch IDLE and write code directly, seeing immediate results.", 
          code: `>>> 2 + 3\n5\n>>> print("Python")\nPython`, 
          output: "5\nPython" 
        },
        { 
          uyTitle: "تېرمىنالدا Python", 
          enTitle: "Python in Terminal", 
          uyExplanation: "تېرمىنالدا python دېيىپ ئىنتېرپرىتاتورنى قوزغىتىش ۋە ئىشلىتىش.", 
          enExplanation: "Start interpreter via terminal and use it.", 
          code: `$ python\n>>> print('Python')\nPython\n>>> exit()`, 
          output: "Python" 
        },
        { 
          uyTitle: "غەلىتە تۈزىتىش", 
          enTitle: "Error Feedback", 
          uyExplanation: "ئاۋۋال ئۇچۇر بېرىش ئارقىلىق خاتالىقنى كۆزەش ۋە تۈزىتىش.", 
          enExplanation: "See immediate interpreter feedback and fix errors.", 
          code: `>>> 'Hello' + 5\nTypeError: can only concatenate str to str\n>>> 'Hello' + str(5)\n'Hello5'`, 
          output: "'Hello5'" 
        }
      ],
      icon: Terminal,
      difficulty: "ئاسان"
    },
    {
      number: "03",
      uyTitle: "قۇيۇشمىغان باشلاش بابى",
      enTitle: "An Informal Introduction",
      uyDesc: "ئادەمنىڭ باشلىنىشى — ئۆزگىرىگۈچى، تىپ، ئۆزگىرىشسىز، ئىفادە قاتارلىق ئاساسىي تۈشۈنچىلەر.",
      enDesc: "The basics: variables, types, immutability, expressions and other fundamental concepts.",
      examples: [
        { 
          uyTitle: "ئۆزگىرىگۈچى تەڭشەش", 
          enTitle: "Variable Assignment", 
          uyExplanation: "ئۆزگىرىگۈچى سان ۋە تېكىست بولۇشى مۇمكىن. ئۇلارنى قانداق ئىشلىتىش كېرەك.", 
          enExplanation: "Variables hold numbers or strings. How to use them effectively.", 
          code: `name = "ئابدۇل"\nage = 25\nheight = 1.75\nprint(f"{name} {age} ياشتا، بويى {height} مېتىر")`, 
          output: "ئابدۇل 25 ياشتا، بويى 1.75 مېتىر" 
        },
        { 
          uyTitle: "تىپنى تەكشۈرۈش", 
          enTitle: "Checking Types", 
          uyExplanation: "ئوخشىمىغان تىپلارنى تونۇش كېرەك. type() فۇنكسىيەسىنى ئىشلىتىش.", 
          enExplanation: "Understand data types. Using type() function.", 
          code: `a = 10\nb = "10"\nc = 10.5\nd = True\nprint(type(a), type(b), type(c), type(d))`, 
          output: "<class 'int'> <class 'str'> <class 'float'> <class 'bool'>" 
        },
        { 
          uyTitle: "ئۆزگىرىشسز (Tuple)", 
          enTitle: "Immutable Tuple", 
          uyExplanation: "ئۆزگىرىشسز تىزىملىك بولۇپ، ئۆزگەرتىشكە بولمايدۇ. بۇ قانۇنسىزلىقنىڭ ئالدىنى ئالىدۇ.", 
          enExplanation: "Tuples are immutable, cannot be changed. Prevents accidental modifications.", 
          code: `colors = ("قىزىل", "كۆك", "يېشىل")\nprint(colors[0])\n# colors[0] = "سېرىق"  # خاتا، tuple ئۆزگەرتىشكە بولمايدۇ`, 
          output: "قىزىل" 
        }
      ],
      icon: Zap,
      difficulty: "ئاسان"
    },
    {
      number: "04",
      uyTitle: "باشقۇرۇش قۇرۇلمىسى",
      enTitle: "Control Flow Tools",
      uyDesc: "شەرتلىك باشقۇرۇش (if)، چەگرىلىك تەكرار (for، while) قاتارلىق پروگرامما ئىجراسىنى كونترول قىلىش قوراللىرى.",
      enDesc: "Conditional and loop structures: if, for, while - tools to control program execution flow.",
      examples: [
        { 
          uyTitle: "if شەرتى", 
          enTitle: "If Statement", 
          uyExplanation: "شەرت ئورۇنلانسا، بلوكنى ئىجرا قىلىدۇ. ئەگەر-ئۇنداقتا قارار چىقىرىش.", 
          enExplanation: "Execute block if condition is true. Making decisions with if-else.", 
          code: `age = 18\nif age >= 18:\n    print("سىز تاماققا بېرىشنى باشلىيالايسىز!")\nelse:\n    print("سىز يەنىلا تاماققا بارالمايسىز!")`, 
          output: "سىز تاماققا بېرىشنى باشلىيالايسىز!" 
        },
        { 
          uyTitle: "for تەكرارى", 
          enTitle: "For Loop", 
          uyExplanation: "تىزىملىك بويىچە تەكرارلاش. range() فۇنكسىيەسىنى ئىشلىتىش.", 
          enExplanation: "Iterate over a sequence. Using range() function.", 
          code: `print("تەكرارلاش باشلىنىدۇ:")\nfor i in range(1, 4):\n    print(f"{i} - قېتىم تەكرارلاندى")`, 
          output: "تەكرارلاش باشلىنىدۇ:\n1 - قېتىم تەكرارلاندى\n2 - قېتىم تەكرارلاندى\n3 - قېتىم تەكرارلاندى" 
        },
        { 
          uyTitle: "while تەكرارى", 
          enTitle: "While Loop", 
          uyExplanation: "شەرت راست بولغۇچە تەكرارلايدۇ. قايتا-قايتا ئىجرا قىلىش.", 
          enExplanation: "Repeat while condition is true. Repeated execution until condition fails.", 
          code: `count = 3\nwhile count > 0:\n    print(f"سانىم: {count}")\n    count -= 1\nprint("تەكرارلاش تۇتاشتى!")`, 
          output: "سانىم: 3\nسانىم: 2\nسانىم: 1\nتەكرارلاش تۇتاشتى!" 
        }
      ],
      icon: Layers,
      difficulty: "ئوتتۇرا"
    },
    {
      number: "05",
      uyTitle: "سانلىق مەلۇمات قۇرۇلمىلىرى",
      enTitle: "Data Structures",
      uyDesc: "List، Tuple، Set، Dict قاتارلىق تۈرلەرنىڭ خۇسۇسىيىتى ۋە ئىشلىتىش ئۇسۇللىرى.",
      enDesc: "Lists, tuples, sets, dictionaries and their properties and usage methods.",
      examples: [
        { 
          uyTitle: "List (تىزىملىك)", 
          enTitle: "List", 
          uyExplanation: "ئۆزگەرتكىلى بولىدىغان تىزىملىك. ئېلېمېنتلارنى قوشۇش، ئۆچۈرۈش، ئۆزگەرتىش.", 
          enExplanation: "Mutable ordered sequence. Add, remove, modify elements.", 
          code: `fruits = ["ئالمۇ", "ئۆرۈك", "تال"]\nfruits.append("ئانار")\nfruits.insert(1, "ئۇزۇم")\nprint(f"مېۋىلەر: {fruits}")`, 
          output: "مېۋىلەر: ['ئالمۇ', 'ئۇزۇم', 'ئۆرۈك', 'تال', 'ئانار']" 
        },
        { 
          uyTitle: "Dict (لىغەت)", 
          enTitle: "Dictionary", 
          uyExplanation: "كۇنۇپكا-قىممەت جۈپى. تېز ئىزدەش ئۈچۈن ئىشلىتىلىدۇ.", 
          enExplanation: "Key-value pairs. Used for fast lookups.", 
          code: `student = {"ئىسمى": "ئابدۇل", "تېخىمۇ": 123, "كەسپى": "پروگرامماچى"}\nprint(f"{student['ئىسمى']} نىڭ كەسپى: {student['كەسپى']}")`, 
          output: "ئابدۇل نىڭ كەسپى: پروگرامماچى" 
        },
        { 
          uyTitle: "Set (تۈرلۈك تۈزۈم)", 
          enTitle: "Set", 
          uyExplanation: "تەكرارسىز، تەرتىپسىز تۈزۈم. تەكرارلارنى ئاپتوماتىك چىقىرىۋېتىدۇ.", 
          enExplanation: "Unordered, unique elements. Automatically removes duplicates.", 
          code: `numbers = {1, 2, 2, 3, 3, 4, 5}\ntext = set("hello")\nprint(f"سانلار: {numbers}")\nprint(f"ھەرىپلەر: {text}")`, 
          output: "سانلار: {1, 2, 3, 4, 5}\nھەرىپلەر: {'h', 'e', 'l', 'o'}" 
        }
      ],
      icon: Database,
      difficulty: "ئوتتۇرا"
    },
    {
      number: "06",
      uyTitle: "مودۇللار",
      enTitle: "Modules",
      uyDesc: "باشقا فايلدىن فۇنكسىيە ئىمپورت قىلىش ۋە ئۆز مودۇلىنى قۇرۇش. كودنى تەكشۈرۈش ۋە قايتا ئىشلىتىش.",
      enDesc: "Importing functions and creating your own modules. Organizing and reusing code.",
      examples: [
        { 
          uyTitle: "math مودۇلى", 
          enTitle: "Math Module", 
          uyExplanation: "ئاساسىي ماتېماتىكىلىق مودۇل. سىن، كوسىن، لۇگارىفم قاتارلىقلار.", 
          enExplanation: "Basic math functions. Sine, cosine, logarithm, etc.", 
          code: `import math\nprint(f"π نىڭ قىممىتى: {math.pi}")\nprint(f"16 نىڭ يىلتىزى: {math.sqrt(16)}")\nprint(f"2³: {math.pow(2, 3)}")`, 
          output: "π نىڭ قىممىتى: 3.141592653589793\n16 نىڭ يىلتىزى: 4.0\n2³: 8.0" 
        },
        { 
          uyTitle: "ئۆز مودۇلى", 
          enTitle: "Custom Module", 
          uyExplanation: "ئۆزىڭىز ياسىغان مودۇل. ئايرىم فايلدا فۇنكسىيە يېزىش ۋە ئىمپورت قىلىش.", 
          enExplanation: "Create and import your own module. Write functions in separate files and import them.", 
          code: `# mytools.py دىكى مەزمۇن:\ndef hello(name):\n    return f"سەلمەت، {name}!"\n\ndef add(a, b):\n    return a + b\n\n# main.py دىكى مەزمۇن:\nfrom mytools import hello, add\nprint(hello("ئابدۇل"))\nprint(f"جەمئى: {add(5, 3)}")`, 
          output: "سەلمەت، ئابدۇل!\nجەمئى: 8" 
        },
        { 
          uyTitle: "ئىسىم ئالماشتۇرۇش", 
          enTitle: "Alias Import", 
          uyExplanation: "قىسقى كود يېزىش ئۈچۈن مودۇللارغا قىسقارتىلغان ئىسىم بېرىش.", 
          enExplanation: "Use aliases for shorter code when importing modules.", 
          code: `import numpy as np\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\narr = np.array([1, 2, 3])\ndf = pd.DataFrame({"A": [1, 2], "B": [3, 4]})\nprint(f"نومپاى: {arr}")\nprint(f"پانداس: \\n{df}")`, 
          output: "نومپاى: [1 2 3]\nپانداس: \n   A  B\n0  1  3\n1  2  4" 
        }
      ],
      icon: GitBranch,
      difficulty: "ئوتتۇرا"
    },
    {
      number: "07",
      uyTitle: "كىرگۈزۈش چىقىرىش",
      enTitle: "Input and Output",
      uyDesc: "ئىشلەتكۈچى بىلەن مۇناسىۋەت قىلىش (input, print). فايللار بىلەن ئىشلەش ۋە سانلىق مەلۇماتنى ساقلاش.",
      enDesc: "Interacting with users via input and output. Working with files and saving data.",
      examples: [
        { 
          uyTitle: "ئىشلەتكۈچىدىن كىرگۈزۈش", 
          enTitle: "User Input", 
          uyExplanation: "ئىشلەتكۈچىنىڭ كىرگۈزۈشىنى قوبۇل قىلىش ۋە ئىشلەش.", 
          enExplanation: "Accept user input and process it.", 
          code: `name = input("ئىسمىڭىزنى كىرگۈزۈڭ: ")\nage = input("يېشىڭىزنى كىرگۈزۈڭ: ")\nprint(f"سەلمەت، {name}! سىز {age} ياشتا.")`, 
          output: "سەلمەت، ئابدۇل! سىز 25 ياشتا." 
        },
        { 
          uyTitle: "فورماتلاش", 
          enTitle: "Formatting", 
          uyExplanation: "سان ۋە تېكىستلەرنى كۆرۈنەرلىك قىلىش ئۈچۈن فورماتلاش.", 
          enExplanation: "Format numbers and text for better display.", 
          code: `price = 49.9567\nquantity = 3\ntotal = price * quantity\nprint(f"باھاسى: {price:.2f}")\nprint(f"سانى: {quantity:03d}")\nprint(f"ئومۇمىي: {total:,.2f}")`, 
          output: "باھاسى: 49.96\nسانى: 003\nئومۇمىي: 149.87" 
        },
        { 
          uyTitle: "فايلغا يېزىش", 
          enTitle: "File Writing", 
          uyExplanation: "سانلىق مەلۇماتنى ساقلاش ئۈچۈن فايللار بىلەن ئىشلەش.", 
          enExplanation: "Save data to file for persistence.", 
          code: `# فايلغا يېزىش\nwith open('data.txt', 'w', encoding='utf-8') as f:\n    f.write('بىرىنچى قۇر\\n')\n    f.write('ئىككىنچى قۇر\\n')\n\n# فايلىدىن ئوقۇش\nwith open('data.txt', 'r', encoding='utf-8') as f:\n    content = f.read()\n    print(content)`, 
          output: "بىرىنچى قۇر\nئىككىنچى قۇر" 
        }
      ],
      icon: FileText,
      difficulty: "ئاسان"
    },
    {
      number: "08",
      uyTitle: "خاتالىق ۋە ئىستىسنا",
      enTitle: "Errors and Exceptions",
      uyDesc: "خاتالىقنى باشقۇرۇش (try-except). پروگراممىنىڭ مۇقىملىقىنى كاپالەتلەندۈرۈش.",
      enDesc: "Handling errors with try-except blocks. Ensuring program stability.",
      examples: [
        { 
          uyTitle: "ئادەتتىكى خاتالىق", 
          enTitle: "Basic Exception", 
          uyExplanation: "ئىستىسنا باشقۇرۇش. بۆلۈش خاتالىقىنى تۇتۇش.", 
          enExplanation: "Handle division by zero exception.", 
          code: `try:\n    result = 10 / 0\n    print(result)\nexcept ZeroDivisionError as e:\n    print(f"خاتالىق: {e}")\n    print("نۆلگە بۆلۈشكە بولمايدۇ!")`, 
          output: "خاتالىق: division by zero\nنۆلگە بۆلۈشكە بولمايدۇ!" 
        },
        { 
          uyTitle: "كۆپ خاتالىق", 
          enTitle: "Multiple Exceptions", 
          uyExplanation: "بىر نەچچە خىل خاتالىقنى بىر ۋاقىتتا باشقۇرۇش.", 
          enExplanation: "Handle multiple types of errors at once.", 
          code: `try:\n    x = int(input("سان كىرگۈزۈڭ: "))\n    result = 10 / x\n    print(f"نەتىجە: {result}")\nexcept ValueError:\n    print("تېكىست ئەمەس، سان كىرگۈزۈڭ!")\nexcept ZeroDivisionError:\n    print("نۆلگە بۆلۈشكە بولمايدۇ!")`, 
          output: "سان كىرگۈزۈڭ: abc\nتېكىست ئەمەس، سان كىرگۈزۈڭ!" 
        },
        { 
          uyTitle: "finally بلوكى", 
          enTitle: "Finally Block", 
          uyExplanation: "ھەر ھالدا ئىجرا قىلىنىدىغان كود. مەنبەلەرنى تازىلاش.", 
          enExplanation: "Always executed code block. Clean up resources.", 
          code: `try:\n    f = open('test.txt', 'r')\n    content = f.read()\n    print(content)\nexcept FileNotFoundError:\n    print('فايل تېپىلمىدى!')\nfinally:\n    print('فايل تاقالدى.')\n    # f.close() ھەر ھالدا تاقىلىدۇ`, 
          output: "فايل تېپىلمىدى!\nفايل تاقالدى." 
        }
      ],
      icon: AlertCircle,
      difficulty: "ئوتتۇرا"
    },
    {
      number: "09",
      uyTitle: "كىلاس",
      enTitle: "Classes",
      uyDesc: "ئوبىيېكتقا نېگىزلىنىدىغان دىنا مەشغۇلات تىللىرىنىڭ ئاساسى. كىلاس ۋە ئوبىيېكتلارنى قانداق قۇرۇش ۋە ئىشلىتىش.",
      enDesc: "Foundation of object-oriented programming. How to create and use classes and objects.",
      examples: [
        { 
          uyTitle: "ئادەتتىكى كىلاس", 
          enTitle: "Basic Class", 
          uyExplanation: "ئۆزگىرىگۈچى ۋە ئۆز ئىقتىدارى بار كىلاس قۇرۇش.", 
          enExplanation: "Create class with attributes and methods.", 
          code: `class Student:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def introduce(self):\n        return f"مېنىڭ ئىسمى {self.name}، {self.age} ياشتا"\n\ns = Student("ئابدۇل", 25)\nprint(s.introduce())`, 
          output: "مېنىڭ ئىسمى ئابدۇل، 25 ياشتا" 
        },
        { 
          uyTitle: "مېتود قوشۇش", 
          enTitle: "Adding Methods", 
          uyExplanation: "كىلاسنىڭ ئىقتىدارىنى كېڭەيتىش ئۈچۈن يېڭى مېتودلار قوشۇش.", 
          enExplanation: "Add new methods to extend class functionality.", 
          code: `class Car:\n    def __init__(self, brand, model):\n        self.brand = brand\n        self.model = model\n        self.speed = 0\n    \n    def start(self):\n        return f"{self.brand} {self.model} ماشىنىسى ئىشلەپ قالدى"\n    \n    def accelerate(self, amount):\n        self.speed += amount\n        return f"سۈرئەت: {self.speed} كم/سائەت"\n\nc = Car("تويوتا", "كامرى")\nprint(c.start())\nprint(c.accelerate(50))`, 
          output: "تويوتا كامرى ماشىنىسى ئىشلەپ قالدى\nسۈرئەت: 50 كم/سائەت" 
        },
        { 
          uyTitle: "مېرۇت", 
          enTitle: "Inheritance", 
          uyExplanation: "مېرۇت ئىقتىدارى ئارقىلىق يېڭى كىلاسلار ياساش.", 
          enExplanation: "Create new classes by inheriting from parent class.", 
          code: `class Animal:\n    def speak(self):\n        return "ئاۋاز!"\n\nclass Dog(Animal):\n    def speak(self):\n        return "ھۇۋ-ھۇۋ!"\n\nclass Cat(Animal):\n    def speak(self):\n        return "مىياۋ!"\n\nd = Dog()\nc = Cat()\nprint(f"ئىت: {d.speak()}")\nprint(f"مۈشۈك: {c.speak()}")`, 
          output: "ئىت: ھۇۋ-ھۇۋ!\nمۈشۈك: مىياۋ!" 
        }
      ],
      icon: Cpu,
      difficulty: "قىيىن"
    },
    {
      number: "10",
      uyTitle: "ئاساسىي كۈتۈخانىلەر كۆرۈش",
      enTitle: "Brief Tour of the Standard Library",
      uyDesc: "os، sys، datetime، json قاتارلىق ئاساسىي كۈتۈخانىلەرنىڭ ئىشلىتىشى. پايدىلىق فۇنكسىيەلەر ۋە ئۇسۇللار.",
      enDesc: "Using os, sys, datetime, json and other standard libraries. Useful functions and methods.",
      examples: [
        { 
          uyTitle: "ۋاقىت ئالىش", 
          enTitle: "Get Time", 
          uyExplanation: "ۋاقىت بىلەن ئىشلەش ۋە ھازىرقى ۋاقىتنى ئېلىش.", 
          enExplanation: "Work with dates and get current time.", 
          code: `from datetime import datetime, timedelta\n\nnow = datetime.now()\nprint(f"ھازىرقى ۋاقىت: {now}")\nprint(f"كۈن/ئاي/يىل: {now.strftime('%Y-%m-%d')}")\nprint(f"سائەت/مىنۇت: {now.strftime('%H:%M:%S')}")\n\ntomorrow = now + timedelta(days=1)\nprint(f"ئەتە: {tomorrow.date()}")`, 
          output: "ھازىرقى ۋاقىت: 2024-12-11 14:30:45.123456\nكۈن/ئاي/يىل: 2024-12-11\nسائەت/مىنۇت: 14:30:45\nئەتە: 2024-12-12" 
        },
        { 
          uyTitle: "JSON ئىشلىتىش", 
          enTitle: "Using JSON", 
          uyExplanation: "سانلىق مەلۇمات ئالماشتۇرۇش ئۈچۈن JSON فورماتىنى ئىشلىتىش.", 
          enExplanation: "Use JSON format for data exchange.", 
          code: `import json\n\n# Python دىكتىغا ئايلاندۇرۇش\ndata = {"ئىسمى": "ئابدۇل", "يېشى": 25, "كەسپى": "پروگرامماچى"}\njson_str = json.dumps(data, ensure_ascii=False, indent=2)\nprint("JSON:")\nprint(json_str)\n\n# JSON دىن Python غا\nparsed = json.loads(json_str)\nprint(f"\\nكەسپ: {parsed['كەسپى']}")`, 
          output: "JSON:\n{\n  \"ئىسمى\": \"ئابدۇل\",\n  \"يېشى\": 25,\n  \"كەسپى\": \"پروگرامماچى\"\n}\n\nكەسپ: پروگرامماچى" 
        },
        { 
          uyTitle: "سىستېما ئۇچۇرلىرى", 
          enTitle: "System Information", 
          uyExplanation: "سىستېما بىلەن ئالاقە قىلىش ۋە سىستېما ئۇچۇرلىرىنى ئېلىش.", 
          enExplanation: "Interact with OS and get system information.", 
          code: `import os\nimport sys\n\nprint(f"Python نۇسقىسى: {sys.version}")\nprint(f"مەشغۇلات سىستېمىسى: {os.name}")\nprint(f"ھازىرقى مۇندەرىجە: {os.getcwd()}")\nprint(f"مۇھىت ئۆزگەرگۈچىلەر: {list(os.environ.keys())[:3]}...")`, 
          output: "Python نۇسقىسى: 3.9.0\nمەشغۇلات سىستېمىسى: posix\nھازىرقى مۇندەرىجە: /home/user/projects\nمۇھىت ئۆزگەرگۈچىلەر: ['PATH', 'HOME', 'USER']..." 
        }
      ],
      icon: Server,
      difficulty: "ئوتتۇرا"
    },
    {
      number: "11",
      uyTitle: "ئاساسىي كۈتۈخانىلەر كۆرۈش – قىسمىت II",
      enTitle: "Brief Tour – Part II",
      uyDesc: "math، random، re (رېگۇلار ئىپادە) قاتارلىق قوشۇمچە كۈتۈخانىلەرنىڭ ئىشلىتىشى.",
      enDesc: "More standard library modules: math, random, regex and their usage.",
      examples: [
        { 
          uyTitle: "تەسادىفىي سان", 
          enTitle: "Random Number", 
          uyExplanation: "تەسادىفىي سان ھاسىل قىلىش ۋە تەسادىفىي تاللاش.", 
          enExplanation: "Generate random numbers and make random selections.", 
          code: `import random\n\n# تەسادىفىي سان\nprint(f"1 دىن 10 غىچە: {random.randint(1, 10)}")\nprint(f"0 دىن 1 غىچە: {random.random():.3f}")\n\n# تەسادىفىي تاللاش\nitems = ["ئالمۇ", "ئۆرۈك", "شاپتۇل", "ئانار"]\nprint(f"تاللانغان مېۋە: {random.choice(items)}")\nprint(f"تاللانغان 2 مېۋە: {random.sample(items, 2)}")\n\n# تەسادىفىي تەرتىپ\ntest_list = [1, 2, 3, 4, 5]\nrandom.shuffle(test_list)\nprint(f"تەرتىپى ئالماشتۇرۇلغان: {test_list}")`, 
          output: "1 دىن 10 غىچە: 7\n0 دىن 1 غىچە: 0.435\nتاللانغان مېۋە: شاپتۇل\nتاللانغان 2 مېۋە: ['ئانار', 'ئالمۇ']\nتەرتىپى ئالماشتۇرۇلغان: [3, 1, 5, 2, 4]" 
        },
        { 
          uyTitle: "ماتېماتىكا", 
          enTitle: "Math Constants", 
          uyExplanation: "ماتېماتىكىلىق ئەڭ زۆرۈر ئۆزگەرمەس مىقدارلار ۋە فۇنكسىيەلەر.", 
          enExplanation: "Most essential mathematical constants and functions.", 
          code: `import math\n\n# ئۆزگەرمەس مىقدارلار\nprint(f"π ≈ {math.pi:.10f}")\nprint(f"e ≈ {math.e:.10f}")\n\n# فۇنكسىيەلەر\nprint(f"sin(π/2) = {math.sin(math.pi/2):.3f}")\nprint(f"log₁₀(100) = {math.log10(100):.1f}")\nprint(f"5! = {math.factorial(5)}")\nprint(f"√16 = {math.sqrt(16)}")`, 
          output: "π ≈ 3.1415926536\ne ≈ 2.7182818285\nsin(π/2) = 1.000\nlog₁₀(100) = 2.0\n5! = 120\n√16 = 4.0" 
        },
        { 
          uyTitle: "رېگۇلار ئىپادە", 
          enTitle: "Regular Expressions", 
          uyExplanation: "تېكىست ئىزدەش ۋە تەكشۈرۈش ئۈچۈن رېگۇلار ئىپادىلەرنى ئىشلىتىش.", 
          enExplanation: "Use regular expressions for text search and validation.", 
          code: `import re\n\n# ئىزدەش\ntext = "ئۇنىڭ تېلېفون نومۇرى +86-138-1234-5678"\nphone_pattern = r"\\+\\d{2}-\\d{3}-\\d{4}-\\d{4}"\nmatch = re.search(phone_pattern, text)\nif match:\n    print(f"تېلېفون نومۇرى تېپىلدى: {match.group()}")\n\n# ئالماشتۇرۇش\ntext2 = "پارول: 123456, باشقا سان: 789"\nnew_text = re.sub(r"\\d+", "[مەخپىي]", text2)\nprint(f"مەخپىيلەشتۈرۈلگەن: {new_text}")`, 
          output: "تېلېفون نومۇرى تېپىلدى: +86-138-1234-5678\nمەخپىيلەشتۈرۈلگەن: پارول: [مەخپىي], باشقا سان: [مەخپىي]" 
        }
      ],
      icon: Brain,
      difficulty: "قىيىن"
    },
    {
      number: "12",
      uyTitle: "ۋىرتۇئال مۇھىت ۋە پاكېت",
      enTitle: "Virtual Environments and Packages",
      uyDesc: "venv ئىشلىتىپ مۇھىت قۇرۇش ۋە pip بىلەن پاكېت ئورنىتىش. پروژا باشقۇرۇش ئاساسى.",
      enDesc: "Managing dependencies with venv and pip. Basics of project management.",
      examples: [
        { 
          uyTitle: "مۇھىت قۇرۇش", 
          enTitle: "Create Environment", 
          uyExplanation: "مۇستەقىل مۇھىت قۇرۇش ۋە ئاكتىپلاشتۇرۇش.", 
          enExplanation: "Create and activate isolated Python environment.", 
          code: `# ۋىرتۇئال مۇھىت قۇرۇش\n# تېرمىنالدا:\n$ python -m venv myenv\n\n# ئاكتىپلاشتۇرۇش (Linux/Mac):\n$ source myenv/bin/activate\n\n# ئاكتىپلاشتۇرۇش (Windows):\n$ myenv\\Scripts\\activate\n\n# نەتىجە:\n(myenv) $`, 
          output: "(myenv) $" 
        },
        { 
          uyTitle: "پاكېت ئورنىتىش", 
          enTitle: "Install Package", 
          uyExplanation: "تاشقى پاكېتلارنى ئورنىتىش ۋە يۈكلەش.", 
          enExplanation: "Install and load external packages.", 
          code: `# پاكېت ئورنىتىش\n$ pip install requests numpy pandas\n\n# Python كودىدا:\nimport requests\nimport numpy as np\nimport pandas as pd\n\n# تەكشۈرۈش\nprint(f"Requests نۇسقىسى: {requests.__version__}")\nprint(f"NumPy نۇسقىسى: {np.__version__}")\n\n# مىسال\narr = np.array([1, 2, 3, 4, 5])\nprint(f"نومپاى سانى: {arr.mean():.2f}")`, 
          output: "Requests نۇسقىسى: 2.31.0\nNumPy نۇسقىسى: 1.24.0\nنومپاى سانى: 3.00" 
        },
        { 
          uyTitle: "پاكېت سىيىرى", 
          enTitle: "Freeze Dependencies", 
          uyExplanation: "باشقا كومپيۇتېردا قايتىلاش ئۈچۈن پاكېت تىزىمىنى ساقلاش.", 
          enExplanation: "Save package list for reproduction on other computers.", 
          code: `# بارلىق پاكېتلارنى كۆرۈش\n$ pip list\n\n# پاكېت تىزىمىنى ساقلاش\n$ pip freeze > requirements.txt\n\n# requirements.txt مەزمۇنى:\nrequests==2.31.0\nnumpy==1.24.0\npandas==2.0.0\n\n# باشقا كومپيۇتېردا ئورنىتىش:\n$ pip install -r requirements.txt`, 
          output: "Successfully installed requests-2.31.0 numpy-1.24.0 pandas-2.0.0" 
        }
      ],
      icon: GitCompare,
      difficulty: "ئوتتۇرا"
    },
    {
      number: "13",
      uyTitle: "كېيىن نېمە؟",
      enTitle: "What Now?",
      uyDesc: "چوڭقۇر ئۆگىنىش، Web دېۋېلۇپمېنت، ماشىنا ئۆگىنىشى قاتارلىق تەرەققىيات يوللىرى ۋە تەكلىپلەر.",
      enDesc: "Next steps: deep learning, web development, machine learning paths and recommendations.",
      examples: [
        { 
          uyTitle: "ماشىنا ئۆگىنىشى", 
          enTitle: "Machine Learning", 
          uyExplanation: "ماشىنا ئۆگىنىشىنى باشلاش ئۈچۈن scikit-learn كۈتۈخانىسىنى ئىشلىتىش.", 
          enExplanation: "Start machine learning with scikit-learn library.", 
          code: `from sklearn import datasets\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.linear_model import LogisticRegression\nfrom sklearn.metrics import accuracy_score\n\n# سانلىق مەلۇمات\niris = datasets.load_iris()\nX, y = iris.data, iris.target\n\n# سانلىق مەلۇماتنى بۆلۈش\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\n# مودېل\nmodel = LogisticRegression()\nmodel.fit(X_train, y_train)\n\n# پىشقاندىراش\npredictions = model.predict(X_test)\naccuracy = accuracy_score(y_test, predictions)\nprint(f"مودېل ئىنچىكىلىقى: {accuracy:.2%}")`, 
          output: "مودېل ئىنچىكىلىقى: 96.67%" 
        },
        { 
          uyTitle: "Web دېۋېلۇپمېنت", 
          enTitle: "Web Development", 
          uyExplanation: "Web سەھىپە قۇرۇش ئۈچۈن Flask فرەيمۋوركىنى ئىشلىتىش.", 
          enExplanation: "Build a web app with Flask framework.", 
          code: `from flask import Flask, render_template, request\n\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return 'باش بەت!'\n\n@app.route('/greet/<name>')\ndef greet(name):\n    return f'سەلمەت، {name}!'\n\n@app.route('/calculate', methods=['POST'])\ndef calculate():\n    data = request.json\n    a = data['a']\n    b = data['b']\n    return {'result': a + b}\n\nif __name__ == '__main__':\n    app.run(debug=True)`, 
          output: "Running on http://127.0.0.1:5000" 
        },
        { 
          uyTitle: "داۋاملاشتۇرۇش", 
          enTitle: "Keep Going", 
          uyExplanation: "تەجرىبە ئىشلىتىش، پروژا قۇرۇش ۋە باشقىلار بىلەن ئورتاقلىشىش.", 
          enExplanation: "Practice, build projects, and share with others.", 
          code: `# 1. GitHub دا رېپوزىتورىيە قۇرۇڭ\n# 2. README.md يېزىڭ\n# 3. پروژا قۇرۇڭ\n# 4. پاكېت ئورنىتىڭ\n# 5. تەستىقلاش\n# 6. نەشر قىلىڭ\n# 7. باشقىلار بىلەن ئورتاقلىشىڭ\n\nprint("ئۆگىنىش داۋاملىشىدۇ...")`, 
          output: "ئۆگىنىش داۋاملىشىدۇ..." 
        }
      ],
      icon: Rocket,
      difficulty: "قىيىن"
    },
    {
      number: "14",
      uyTitle: "مۇكالىمە مۇھىتىدا كىرگۈزۈش تۈزىتىش ۋە تارىخ ئالماشتۇرۇش",
      enTitle: "Interactive Input Editing and History Substitution",
      uyDesc: "IPython ياكى Jupyter دا كودنى تەسلىك، تارىخنى ئىشلىتىش ۋە ئۈنۈملۈك ئۆگىنىش ئۇسۇللىرى.",
      enDesc: "Using IPython/Jupyter for interactive coding, history features, and effective learning techniques.",
      examples: [
        { 
          uyTitle: "تارىخ كۆرۈش", 
          enTitle: "View History", 
          uyExplanation: "ئىلاۋىز كودنى كۆرۈش ۋە قايتا ئىشلىتىش.", 
          enExplanation: "See command history and reuse previous code.", 
          code: `# IPython دا:\nIn [1]: x = 10\nIn [2]: y = 20\nIn [3]: x + y\nOut[3]: 30\n\n# تارىخنى كۆرۈش:\nIn [4]: %history\n1: x = 10\n2: y = 20\n3: x + y\n\n# مەلۇم تارىخنى ئىجرا قىلىش:\nIn [5]: _3  # 3-تارىخنى قايتا ئىجرا قىلىدۇ\nOut[5]: 30`, 
          output: "30" 
        },
        { 
          uyTitle: "كېيىنكى قۇر سۆز", 
          enTitle: "Immediate Output", 
          uyExplanation: "ئاڭلىق نەتىجە ۋە ئۇچۇرلۇق چىقىرىش.", 
          enExplanation: "See output immediately with informative display.", 
          code: `# IPython دا كۈچلۈك كۆرۈنۈش:\nIn [1]: import numpy as np\nIn [2]: data = np.random.randn(1000, 1000)\nIn [3]: data\nOut[3]: \narray([[ 0.123, -0.456,  0.789, ..., -1.234,  0.567, -0.890],\n       [-0.321,  0.654, -0.987, ...,  1.234, -0.567,  0.890],\n       ...,\n       [ 0.111, -0.222,  0.333, ..., -0.444,  0.555, -0.666]])\n\nIn [4]: %timeit data.dot(data.T)  # ۋاقىت ئۆلچەش\n1 loop, best of 5: 1.23 s per loop`, 
          output: "1 loop, best of 5: 1.23 s per loop" 
        },
        { 
          uyTitle: "خاتالىقنى قايتا تۈزىتىش", 
          enTitle: "Edit and Rerun", 
          uyExplanation: "ئىلاۋىز تۈزىتىش ۋە تېز سىناپ كۆرۈش.", 
          enExplanation: "Edit previous commands and rerun quickly.", 
          code: `# خاتا كود:\nIn [1]: def greet(name):\n   ...:     return "Hello " + nam  # خاتا: 'name' ئەمەس 'nam'\n\n# تۈزىتىش:\nIn [2]: %edit 1  # 1-تارىخنى تۈزىتىدۇ\n\n# تۈزىتىلگەن:\nIn [3]: def greet(name):\n   ...:     return "Hello " + name\n\nIn [4]: greet("Python")\nOut[4]: 'Hello Python'\n\n# تېز سىناپ كۆرۈش:\nIn [5]: greet("World")\nOut[5]: 'Hello World'`, 
          output: "Hello Python\nHello World" 
        }
      ],
      icon: Sparkles,
      difficulty: "ئوتتۇرا"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-emerald-950/50 to-black text-white">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/5 via-transparent to-pink-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="inline-block mb-6 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-emerald-600/20 to-cyan-600/20 rounded-full blur-xl"></div>
            <div className="relative w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-emerald-600 via-emerald-500 to-cyan-600 flex items-center justify-center mb-4">
              <Code className="w-12 h-12 text-white" />
            </div>
          </div>
          
          <h1
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent animate-gradient"
            style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
          >
            Python باشلىنىش دەرىجىلىك دەرىسلىك
          </h1>
          
          <p 
            className="text-xl text-cyan-300 italic mb-8"
            style={{ direction: 'ltr' }}
          >
            Full Bilingual Python Course for Beginners (Uyghur & English)
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="px-4 py-2 bg-gradient-to-r from-emerald-900/50 to-transparent rounded-full border border-emerald-700/50 hover:border-emerald-500 transition-colors">
              <span className="text-emerald-300">14 باب</span>
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-cyan-900/50 to-transparent rounded-full border border-cyan-700/50 hover:border-cyan-500 transition-colors">
              <span className="text-cyan-300">42 مىسال</span>
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-purple-900/50 to-transparent rounded-full border border-purple-700/50 hover:border-purple-500 transition-colors">
              <span className="text-purple-300">ئىككى تىلدا</span>
            </div>
            <div className="px-4 py-2 bg-gradient-to-r from-pink-900/50 to-transparent rounded-full border border-pink-700/50 hover:border-pink-500 transition-colors">
              <span className="text-pink-300">ئۈچ دەرىجە</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-16">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-emerald-700 transition-colors">
              <div className="text-2xl font-bold text-emerald-400 mb-1">100%</div>
              <div className="text-xs text-gray-400">ئۈنۈملۈك</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-cyan-700 transition-colors">
              <div className="text-2xl font-bold text-cyan-400 mb-1">0$</div>
              <div className="text-xs text-gray-400">ھەقسىز</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-purple-700 transition-colors">
              <div className="text-2xl font-bold text-purple-400 mb-1">∞</div>
              <div className="text-xs text-gray-400">مەغلۇمات</div>
            </div>
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 border border-gray-800 hover:border-pink-700 transition-colors">
              <div className="text-2xl font-bold text-pink-400 mb-1">24/7</div>
              <div className="text-xs text-gray-400">ئوقۇش</div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">تېز نىمىشقا:</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {lessons.map((lesson, idx) => (
                <a
                  key={idx}
                  href={`#chapter-${lesson.number}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(`chapter-${lesson.number}`)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveChapter(lesson.number);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                    activeChapter === lesson.number
                      ? 'bg-gradient-to-r from-emerald-600 to-cyan-600 text-white'
                      : 'bg-gray-800/50 hover:bg-gray-800 text-gray-300'
                  }`}
                >
                  {lesson.number}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Course Chapters */}
        <div className="space-y-8">
          {lessons.map((lesson, idx) => (
            <Chapter key={idx} {...lesson} />
          ))}
        </div>

        {/* Footer */}
        <div className="mt-32 text-center relative">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <div 
                className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                style={{ fontFamily: "'Noto Nastaliq Uyghur', serif", direction: 'rtl' }}
              >
                — كودلاش — بۇ سانلىق دۇنيانى تىلغا كەلتۈرۈشنىڭ سەنئىتى —
              </div>
              <div 
                className="text-lg text-cyan-300/80 italic"
                style={{ direction: 'ltr' }}
              >
                — Coding is the art of speaking to the digital world —
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-6 mb-8">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-600/50 to-transparent"></div>
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-600/50 to-transparent"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-sm text-gray-400">ئاسان</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <span className="text-sm text-gray-400">ئوتتۇرا</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500"></div>
                <span className="text-sm text-gray-400">قىيىن</span>
              </div>
            </div>
            
            <p className="text-gray-500 text-sm">
              © 2024 Python Bilingual Course • Made with ❤️ for Uyghur learners worldwide
            </p>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      >
        ↑
      </button>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}