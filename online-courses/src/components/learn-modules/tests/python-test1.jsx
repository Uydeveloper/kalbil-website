// PythonTest1.jsx
import React, { useState } from 'react';
import {
  BookOpen, Book, Code, ChevronDown, ChevronRight, Target,
  BarChart3, PieChart, TrendingUp, Calculator, Lightbulb,
  Coffee, Zap, Cpu, Database, Layers, GitBranch, AlertCircle,
  CheckCircle, Clock, Award, Brain, GraduationCap, Hash,
  Percent, Users, Settings, Search, Filter, Download,
  Share2, Star, MessageSquare, HelpCircle, Globe, Home,
  Bookmark, Play, Terminal, FileCode, Type, GitCommit,
  Cpu as CpuIcon, Zap as ZapIcon, Globe as GlobeIcon,
  Shield, AlertTriangle, Info, ExternalLink, Maximize2,
  Minimize2, Copy, Check, X, Menu, Hash as HashIcon,
  Clock as ClockIcon, Users as UsersIcon, Settings as SettingsIcon,
  RefreshCw, ArrowRight, ArrowLeft, DownloadCloud, UploadCloud,
  Eye, EyeOff, Volume2, VolumeX, Moon, Sun, Bell, BellOff,
  Heart, ThumbsUp, Flag, Award as AwardIcon, Trophy, Crown,
  Target as TargetIcon, TrendingUp as TrendingUpIcon
} from 'lucide-react';

const PythonTest1 = () => {
  const [activeChapter, setActiveChapter] = useState(null);
  const [language, setLanguage] = useState('ug');
  const [favorites, setFavorites] = useState(new Set());
  const [expandedExamples, setExpandedExamples] = useState(new Set());
  const [codeTheme, setCodeTheme] = useState('dark');
  const [studyMode, setStudyMode] = useState(false);
  const [copiedCode, setCopiedCode] = useState(null);

  // تىل تەرجىمە فۇنكسىيىسى
  const t = (obj) => {
    if (!obj) return '';
    return language === 'ug' ? obj.ug : obj.en;
  };

  // ئۇيغۇرچە تېكىستنى كېسىش
  const getFirstWord = (text) => {
    if (!text) return '';
    return text.split(' ')[0] || text;
  };

  const chapters = [
    {
      id: 1,
      ja: '食欲をそそってみようか',
      ug: 'باشلاشنىڭ دەمكۈچىنى يېشىۋېتىپ قويىدۇ',
      en: 'Whetting Your Appetite',
      count: 1,
      rate: 2.5,
      icon: '🎯',
      color: 'from-blue-500 to-cyan-500',
      difficulty: 'يېڭى باشلىغۇچى',
      time: '15 مىنۇت',
      description: {
        ug: 'Python نىڭ ئاساسىي پىكىرلىرى ۋە قانداق باشلاش كېرەكلىكى ھەققىدە كىرىش سۆز',
        en: 'Introduction to Python basic concepts and how to get started'
      },
      content: {
        objective: {
          ug: 'Python نىڭ قانداق بىر تىل ئىكەنلىكى ۋە نېمە ئۈچۈن ئۆگىنىش كېرەكلىكىنى چۈشىنىش',
          en: 'Understand what Python is as a language and why to learn it'
        },
        topics: [
          { ug: 'Python نىڭ تارىخى', en: 'History of Python', icon: '📜' },
          { ug: 'Python نىڭ ئالاھىدىلىكلىرى', en: 'Features of Python', icon: '✨' },
          { ug: 'Python نىڭ قوللىنىش ساھەلىرى', en: 'Application areas of Python', icon: '🌍' },
          { ug: 'Python مۇھىتىنى تەكشۈرۈش', en: 'Exploring Python environment', icon: '🔍' }
        ],
        examples: [
          {
            title: { ug: 'بىرىنچى Python پروگراممىسى', en: 'First Python Program' },
            code: `# بىرىنچى Python پروگراممىسى
print("سالام، Python!")
print("بۇ سىزنىڭ بىرىنچى Python پروگراممىڭىز.")

# ئاساسىي ھېسابلاش
x = 5
y = 3
print(f"{x} + {y} = {x + y}")
print(f"{x} * {y} = {x * y}")

# ئۆزگەرگۈچىلەر ۋە قىممەتلەر
name = "ئەخمەت"
age = 25
print(f"مېنىڭ ئىسمىم {name}، مەن {age} ياشتىمەن.")

# كىچىك بىر تەجرىبە
numbers = [1, 2, 3, 4, 5]
print("سانلار جەدۋىلى:", numbers)
print("جەمئىي:", sum(numbers))`
          }
        ],
        tips: [
          { ug: 'Python ئۈچۈن Python.org دىن يۈكلىۋېلىڭ', en: 'Download Python from Python.org' },
          { ug: 'IDLE ياكى VS Code قاتارلىق تەھرىرلىگۈچنى ئىشلىتىڭ', en: 'Use editor like IDLE or VS Code' },
          { ug: 'ھەر بىر كۈنى بىر كىچىك پروگرامما يېزىڭ', en: 'Write one small program each day' }
        ],
        exercises: [
          { ug: 'كىرىپ چىقىش پروگراممىسى يېزىڭ', en: 'Write a login program' },
          { ug: 'كىچىك ھېسابلاش پروگراممىسى', en: 'Create a small calculator program' }
        ]
      }
    },
    {
      id: 2,
      ja: 'Pythonインタープリタの使い方',
      ug: 'Python تەرجىمەچىسىنى ئىشلىتىش ئۇسۇلى',
      en: 'Using the Python Interpreter',
      count: 1,
      rate: 2.5,
      icon: '💻',
      color: 'from-green-500 to-emerald-500',
      difficulty: 'يېڭى باشلىغۇچى',
      time: '20 مىنۇت',
      description: {
        ug: 'Python تەرجىمەچىسىنى قانداق ئىشلىتىش ۋە تۇنۇشتۇرۇش',
        en: 'How to use and familiarize with the Python interpreter'
      },
      content: {
        objective: {
          ug: 'Python تەرجىمەچىسىنى ئىشلىتىپ، كۆزىتىش ۋە چوڭ كۆلەمدە يۇقىرى مەقسەتلىك پروگراممىلارنى ئىجرا قىلىش',
          en: 'Use Python interpreter for observation and execute large-scale programs'
        },
        topics: [
          { ug: 'تەرجىمەچىنى قوزغىتىش ۋە تاقىتىش', en: 'Starting and stopping interpreter', icon: '🚀' },
          { ug: 'مۇلازىمەتلىك مودا', en: 'Interactive mode', icon: '💬' },
          { ug: 'سىكرىپت مودىسى', en: 'Script mode', icon: '📜' },
          { ug: 'تەرجىمەچى پارامېتىرلىرى', en: 'Interpreter parameters', icon: '⚙️' },
          { ug: 'Python مۇھىتى ئۆزگەرگۈچىلىرى', en: 'Python environment variables', icon: '🌿' }
        ],
        examples: [
          {
            title: { ug: 'تەرجىمەچىنى ئىشلىتىش', en: 'Using the Interpreter' },
            code: `# تەرجىمەچىدە بىۋاسىتە ھېسابلاش
# $ python3  (تېرمىنالدا)
# >>> 2 + 3
# 5
# >>> print("Hello")
# Hello

# سىكرىپت ئىجرا قىلىش
# script.py دېگەن فايلىڭىز بولسۇن:
def greet(name):
    return f"سالام، {name}!"

if __name__ == "__main__":
    print(greet("ئەخمەت"))
    
# تېرمىنالدا ئىجرا قىلىش:
# $ python3 script.py

# تەرجىمەچى پارامېتىرلىرى:
# $ python3 -c "print(2+3)"    # بىۋاسىتە كود ئىجرا
# $ python3 -m pip install numpy  # مودۇل ئورنىتىش
# $ python3 -V                   # Python نەشرىنى كۆرسىتىش

# مۇلازىمەتلىك مودا مىسالى:
"""
>>> def calculate_area(radius):
...     return 3.14159 * radius * radius
...
>>> calculate_area(5)
78.53975
>>> 
"""`
          }
        ],
        tips: [
          { ug: 'تەرجىمەچىنى مۇلازىمەتلىك مودىدا كۆزىتىش ئۈچۈن ئىشلىتىڭ', en: 'Use interpreter in interactive mode for exploration' },
          { ug: 'سىكرىپتلارنى .py كېڭەيمىلىك بىلەن ساقلاڭ', en: 'Save scripts with .py extension' },
          { ug: 'python --help بىلەن بارلىق پارامېتىرلارنى كۆرۈڭ', en: 'See all parameters with python --help' }
        ],
        exercises: [
          { ug: 'تەرجىمەچىدە بىرنەچچە فۇنكسىيە يېزىڭ', en: 'Write several functions in interpreter' },
          { ug: '.py فايلى قۇرۇپ ئىجرا قىلىڭ', en: 'Create .py file and execute it' }
        ]
      }
    },
    {
      id: 3,
      ja: '気楽な入門編',
      ug: 'ئادەمگە يېقىملىق كىرگۈزۈش',
      en: 'An Informal Introduction',
      count: 6,
      rate: 15.0,
      icon: '📚',
      color: 'from-purple-500 to-pink-500',
      difficulty: 'ئوتتۇرا',
      time: '45 مىنۇت',
      description: {
        ug: 'Python نىڭ ئاساسىي ئېلېمېنتلىرىغا يۇمشاق ۋە قىزىقارلىق كىرىش',
        en: 'Gentle and interesting introduction to Python basic elements'
      },
      content: {
        objective: {
          ug: 'Python نىڭ ئاساسىي سىنتاكسىسى ۋە ئېلېمېنتلىرىنى چۈشىنىپ، ساددە پروگراممىلار يېزىش',
          en: 'Understand Python basic syntax and elements, write simple programs'
        },
        topics: [
          { ug: 'سانلار ۋە ھېسابلاش', en: 'Numbers and calculations', icon: '🔢' },
          { ug: 'تېكىست (String) ھەرىكەتلىرى', en: 'String operations', icon: '🔤' },
          { ug: 'تىزىملار (Lists)', en: 'Lists', icon: '📋' },
          { ug: 'ئېنىقلاش (Comments)', en: 'Comments', icon: '💭' },
          { ug: 'ئىپادىلەر ۋە ئېنىقلامىلار', en: 'Expressions and statements', icon: '🧮' },
          { ug: 'كىرگۈزۈش ۋە چىقىرىش', en: 'Input and output', icon: '📥📤' }
        ],
        examples: [
          {
            title: { ug: 'ئاساسىي دېتا تۈرلىرى', en: 'Basic Data Types' },
            code: `# 1. سانلار
integer_num = 42           # پۈتۈن سان
float_num = 3.14159       # ھەقىقىي سان
complex_num = 2 + 3j      # كۆپ ئۆلچەملىك سان

print(f"پۈتۈن سان: {integer_num}")
print(f"ھەقىقىي سان: {float_num}")
print(f"كۆپ ئۆلچەملىك سان: {complex_num}")

# ھېسابلاش
a = 10
b = 3
print(f"{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")
print(f"{a} / {b} = {a / b:.2f}")      # ئاددىي بۆلۈش
print(f"{a} // {b} = {a // b}")       # پۈتۈن بۆلۈش
print(f"{a} % {b} = {a % b}")         # قالدۇق
print(f"{a} ** {b} = {a ** b}")       # دەرىجىگە كۆتۈرۈش

# 2. تېكىست (String)
name = "ئەخمەت"
greeting = "سالام، " + name + "!"
multiline = """بۇ كۆپ قۇرلۇق تېكىست.
ھەر بىر قۇر يېڭى قۇرغا كېتىدۇ."""

print(greeting)
print(multiline)

# تېكىست ھەرىكەتلىرى
text = "Python ئۆگىنىش"
print(f"ئۇزۇنلۇقى: {len(text)}")
print(f"باشلانغۇچ 3 ھەرىپ: {text[:3]}")
print(f"ئاخىرقى 5 ھەرىپ: {text[-5:]}")
print(f"چوڭ ھەرىپكە ئايلاندۇرۇش: {text.upper()}")
print(f"كىچىك ھەرىپكە ئايلاندۇرۇش: {text.lower()}")
print(f"ئۆز ئىچىگە ئالىدۇ: {'Python' in text}")

# 3. تىزىملار (Lists)
numbers = [1, 2, 3, 4, 5]
fruits = ["ئالمۇ", "ئۆرۈك", "شاپتۇل", "ئانار"]

print(f"سانلار: {numbers}")
print(f"مېۋىلەر: {fruits}")

# تىزىم ھەرىكەتلىرى
numbers.append(6)          # قوشۇش
numbers.insert(0, 0)       # كىرگۈزۈش
numbers.remove(3)          # چىقىرىش
print(f"يېڭى سانلار: {numbers}")

# تىزىمنى كېسىش
print(f"باشلانغۇچ 3: {numbers[:3]}")
print(f"ئاخىرقى 3: {numbers[-3:]}")
print(f"2-بەسىمدىن 5-بەسىمغىچە: {numbers[2:5]}")

# تىزىمنى قايتا تەرتىپلەش
numbers.sort()             # كىچىكتىن چوڭغا
print(f"تەرتىپلەنگەن: {numbers}")
numbers.reverse()          # تەتۈر تەرتىپ
print(f"تەتۈر تەرتىپ: {numbers}")

# تىزىم ئىچىدە تېكىست
mixed_list = [1, "ئالمۇ", 3.14, True]
print(f"ئارىلاش تىزىم: {mixed_list}")`
          }
        ],
        tips: [
          { ug: 'f-string ئەڭ ئاسان ۋە ئوقۇشچان چىقىرىش ئۇسۇلى', en: 'f-string is the easiest and most readable output method' },
          { ug: 'input() ھەمىشە تېكىست قايتۇرىدۇ، سانغا ئايلاندۇرۇش كېرەك', en: 'input() always returns text, needs conversion to number' },
          { ug: 'print() نىڭ end ۋە sep پارامېتىرلىرىنى ئۆگىنىڭ', en: 'Learn end and sep parameters of print()' }
        ],
        exercises: [
          { ug: 'سانلار ۋە تېكىست بىلەن پروگرامما يېزىڭ', en: 'Write program with numbers and text' },
          { ug: 'تىزىم بىلەن تەجرىبە قىلىڭ', en: 'Experiment with lists' }
        ]
      }
    },
    {
      id: 4,
      ja: '制御構造ツール',
      ug: 'باشقۇرۇش قۇرۇلمىسى قوراللىرى',
      en: 'Control Flow Tools',
      count: 9,
      rate: 22.5,
      icon: '⚡',
      color: 'from-orange-500 to-red-500',
      difficulty: 'ئالىي',
      time: '60 مىنۇت',
      description: {
        ug: 'پروگراممىنىڭ ئىجرا يولىنى باشقۇرۇدىغان ئىپادىلەر ۋە قۇرۇلمىلار',
        en: 'Expressions and structures that control program execution flow'
      },
      content: {
        objective: {
          ug: 'پروگراممىنىڭ قانداق شەرتلىك ئىجرا بولۇشىنى، قايتا-قايتا ئىجرا بولۇشىنى ۋە قانداق بۇزۇلۇشىنى باشقۇرۇش',
          en: 'Control how program executes conditionally, repeatedly, and how to break execution'
        },
        topics: [
          { ug: 'if ئىپادىسى', en: 'if statement', icon: '🔀' },
          { ug: 'for ئىپادىسى', en: 'for statement', icon: '🔄' },
          { ug: 'range() فۇنكسىيەسى', en: 'range() function', icon: '📊' },
          { ug: 'while ئىپادىسى', en: 'while statement', icon: '⏱️' },
          { ug: 'break ۋە continue ئىپادىسى', en: 'break and continue statements', icon: '⏹️▶️' },
          { ug: 'pass ئىپادىسى', en: 'pass statement', icon: '➡️' },
          { ug: 'فۇنكسىيەلەرنى تەكىتلەش', en: 'Defining functions', icon: '🧩' },
          { ug: 'فۇنكسىيە ئارگۇمېنتلىرى', en: 'Function arguments', icon: '🎯' },
          { ug: 'Lambda ئىپادىسى', en: 'Lambda expressions', icon: 'λ' }
        ],
        examples: [
          {
            title: { ug: 'شەرتلىك ئىپادىلەر', en: 'Conditional Statements' },
            code: `# if-elif-else ئىپادىسى
def check_grade(score):
    if score >= 90:
        return "A"
    elif score >= 80:
        return "B"
    elif score >= 70:
        return "C"
    elif score >= 60:
        return "D"
    else:
        return "F"

# مىسال ئىشلىتىش
scores = [95, 85, 75, 65, 55]
print("ئىمتاھان نەتىجىسى باھالىشى:")
for score in scores:
    grade = check_grade(score)
    print(f"نەتىجە: {score} → دەرىجە: {grade}")

# بىر قۇرلۇق if ئىپادىسى
number = 7
result = "تاق" if number % 2 == 0 else "تاق ئەمەس"
print(f"{number} {result}")

# ئىچكى-تاشقى if ئىپادىسى
age = 25
has_license = True

if age >= 18:
    if has_license:
        print("ماشىنا ھەيدەشكە رۇخسەت قىلىنىدۇ.")
    else:
        print("ياش چەككە يەتكەن، ئەمما ھۆججەت يوق.")
else:
    print("ياش چەككە يەتمىگەن.")

# ئەندىزە-بەلگە كۆرسىتىش
def find_max(a, b, c):
    if a >= b and a >= c:
        return a
    elif b >= a and b >= c:
        return b
    else:
        return c

print(f"ئەڭ چوڭ سان: {find_max(10, 25, 15)}")`
          }
        ],
        tips: [
          { ug: 'break كۆپىنچە while True: دىن چىقىش ئۈچۈن ئىشلىتىلىدۇ', en: 'break is mostly used to exit from while True:' },
          { ug: 'continue كەلگۈسى قەدەملەرنى ئاتلاپ ئۆتۈش ئۈچۈن', en: 'continue is for skipping remaining steps' },
          { ug: 'lambda قىسقا، بىر قۇرلۇق فۇنكسىيەلەر ئۈچۈن پايدىلىق', en: 'lambda is useful for short, one-line functions' }
        ],
        exercises: [
          { ug: 'مۇرەككەپ if ئىپادىسى يېزىڭ', en: 'Write complex if statement' },
          { ug: 'فۇنكسىيە بىلەن پروگرامما يېزىڭ', en: 'Write program with functions' }
        ]
      }
    }
  ];

  const total = chapters.reduce((sum, ch) => sum + ch.count, 0);
  const totalRate = chapters.reduce((sum, ch) => sum + ch.rate, 0);

  const getActiveChapter = () => {
    return chapters.find(ch => ch.id === activeChapter) || null;
  };

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const toggleExample = (id) => {
    const newSet = new Set(expandedExamples);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setExpandedExamples(newSet);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                    {language === 'ug' ? 'Python ئۆگىنىش كۇرسى' : 'Python Learning Course'}
                  </h1>
                  <p className="text-gray-600 mt-1">
                    {language === 'ug' 
                      ? 'سىناق تارقىلىشى ۋە تەپسىلاتلىق ئۆگىنىش'
                      : 'Test Distribution & Detailed Learning'}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="flex bg-white rounded-lg border border-gray-300 overflow-hidden">
                <button
                  onClick={() => setLanguage('ug')}
                  className={`px-4 py-2 font-medium transition-all ${
                    language === 'ug'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  ئۇيغۇرچە
                </button>
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 font-medium transition-all ${
                    language === 'en'
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  English
                </button>
              </div>
              
              <button
                onClick={() => setStudyMode(!studyMode)}
                className={`p-2 rounded-lg border ${
                  studyMode 
                    ? 'bg-blue-100 border-blue-300 text-blue-700'
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
                title={language === 'ug' ? 'ئۆگىنىش ھالىتى' : 'Study Mode'}
              >
                {studyMode ? <BookOpen className="w-5 h-5" /> : <Book className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <div className="p-4 bg-white rounded-xl shadow-sm border border-blue-200">
              <div className="flex items-center text-blue-600 mb-2">
                <Target className="w-5 h-5 mr-2" />
                <span className="font-semibold">{language === 'ug' ? 'جەمئىي سۇئال' : 'Total Questions'}</span>
              </div>
              <div className="flex items-end">
                <div className="text-3xl font-bold text-gray-900">{total}</div>
                <div className="ml-2 text-sm text-gray-500">{language === 'ug' ? 'سۇئال' : 'questions'}</div>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-xl shadow-sm border border-green-200">
              <div className="flex items-center text-green-600 mb-2">
                <PieChart className="w-5 h-5 mr-2" />
                <span className="font-semibold">{language === 'ug' ? 'ئومۇمىي نىسبەت' : 'Total Rate'}</span>
              </div>
              <div className="flex items-end">
                <div className="text-3xl font-bold text-gray-900">{totalRate.toFixed(1)}%</div>
                <div className="ml-2 text-sm text-gray-500">{language === 'ug' ? 'نىسبەت' : 'rate'}</div>
              </div>
            </div>
            
            <div className="p-4 bg-white rounded-xl shadow-sm border border-purple-200">
              <div className="flex items-center text-purple-600 mb-2">
                <TrendingUp className="w-5 h-5 mr-2" />
                <span className="font-semibold">{language === 'ug' ? 'مۇھىم باب' : 'Key Chapter'}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">4-باب</div>
              <div className="text-sm text-gray-600">22.5%</div>
            </div>
            
            <div className="p-4 bg-white rounded-xl shadow-sm border border-orange-200">
              <div className="flex items-center text-orange-600 mb-2">
                <Clock className="w-5 h-5 mr-2" />
                <span className="font-semibold">{language === 'ug' ? 'ئۆگىنىش ۋاقتى' : 'Learning Time'}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">2-3h</div>
              <div className="text-sm text-gray-600">{language === 'ug' ? 'تەخمىنەن' : 'estimated'}</div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Chapters */}
          <div className="lg:col-span-1 space-y-4">
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-bold text-gray-900 flex items-center">
                  <Book className="w-6 h-6 mr-2 text-blue-600" />
                  {language === 'ug' ? 'بابلار' : 'Chapters'}
                </h2>
                <div className="flex items-center">
                  <span className="text-sm text-gray-500 mr-2">{chapters.length}</span>
                  <span className="text-sm text-gray-500">{language === 'ug' ? 'باب' : 'chapters'}</span>
                </div>
              </div>
              
              <div className="space-y-3">
                {chapters.map((chapter) => {
                  const isActive = activeChapter === chapter.id;
                  const isFavorite = favorites.has(chapter.id);
                  const chapterTitle = language === 'ug' ? chapter.ug : chapter.en;
                  
                  return (
                    <div key={chapter.id} className={`border rounded-lg overflow-hidden transition-all ${
                      isActive 
                        ? 'border-blue-400 shadow-md'
                        : 'border-gray-200 hover:border-blue-300 hover:shadow-sm'
                    }`}>
                      <div className="flex items-center">
                        <button
                          onClick={() => setActiveChapter(isActive ? null : chapter.id)}
                          className={`flex-1 p-4 text-left transition-all ${
                            isActive 
                              ? 'bg-gradient-to-r from-blue-50 to-cyan-50'
                              : 'hover:bg-gray-50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center">
                              <span className="text-xl mr-3">{chapter.icon}</span>
                              <div className="text-left">
                                <div className="font-bold text-gray-900">
                                  {chapter.id}. {getFirstWord(chapterTitle)}
                                </div>
                                <div className="text-xs text-gray-500 mt-1">
                                  {chapter.count} {language === 'ug' ? 'سۇئال' : 'q'} • {chapter.rate}%
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                                chapter.difficulty === 'يېڭى باشلىغۇچى' ? 'bg-green-100 text-green-800' :
                                chapter.difficulty === 'ئوتتۇرا' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-red-100 text-red-800'
                              }`}>
                                {language === 'ug' 
                                  ? chapter.difficulty.charAt(0) 
                                  : chapter.difficulty === 'يېڭى باشلىغۇچى' ? 'B' :
                                    chapter.difficulty === 'ئوتتۇرا' ? 'I' : 'A'}
                              </span>
                              {isActive ? (
                                <ChevronDown className="w-4 h-4 text-gray-500" />
                              ) : (
                                <ChevronRight className="w-4 h-4 text-gray-500" />
                              )}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="w-full bg-gray-200 rounded-full h-1.5">
                              <div 
                                className={`h-1.5 rounded-full ${
                                  isActive ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-blue-400'
                                }`}
                                style={{ width: `${Math.min(chapter.rate * 3, 100)}%` }}
                              ></div>
                            </div>
                          </div>
                        </button>
                        
                        <button
                          onClick={() => toggleFavorite(chapter.id)}
                          className="p-3 mr-2 text-gray-400 hover:text-yellow-500 transition-colors"
                        >
                          {isFavorite ? (
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ) : (
                            <Star className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Stats Card */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-5 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                {language === 'ug' ? 'سىناق ئىستاتىستىكىسى' : 'Test Statistics'}
              </h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">{language === 'ug' ? 'سۇئال تارقىلىشى' : 'Question Distribution'}</span>
                    <span className="font-bold">{totalRate.toFixed(1)}%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500" style={{ width: `${totalRate}%` }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">{language === 'ug' ? 'مۇھىملىق ئۆلچىمى' : 'Importance Scale'}</span>
                    <span className="font-bold">22.5%</span>
                  </div>
                  <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500" style={{ width: '22.5%' }}></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">{language === 'ug' ? 'ئەڭ يۇقىرى 3 باب' : 'Top 3 Chapters'}</h4>
                  <div className="space-y-3">
                    {chapters
                      .sort((a, b) => b.rate - a.rate)
                      .slice(0, 3)
                      .map((chapter, index) => {
                        const chapterTitle = language === 'ug' ? chapter.ug : chapter.en;
                        return (
                          <div key={chapter.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div className="flex items-center">
                              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                                index === 0 ? 'bg-yellow-100 text-yellow-800' :
                                index === 1 ? 'bg-gray-100 text-gray-800' :
                                'bg-orange-100 text-orange-800'
                              }`}>
                                {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                              </div>
                              <div className="ml-3">
                                <div className="font-medium text-sm">{chapter.id}. {getFirstWord(chapterTitle)}</div>
                                <div className="text-xs text-gray-500">{chapter.count} {language === 'ug' ? 'سۇئال' : 'q'}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="font-bold text-gray-900">{chapter.rate}%</div>
                              <div className="text-xs text-gray-500">{language === 'ug' ? 'نىسبەت' : 'rate'}</div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            {!activeChapter ? (
              <WelcomeContent 
                language={language} 
                total={total} 
                totalRate={totalRate} 
                chapters={chapters}
                setActiveChapter={setActiveChapter}
              />
            ) : (
              <ChapterDetailContent 
                chapter={getActiveChapter()}
                t={t}
                language={language}
                toggleFavorite={toggleFavorite}
                isFavorite={favorites.has(activeChapter)}
                expandedExamples={expandedExamples}
                toggleExample={toggleExample}
                codeTheme={codeTheme}
                setCodeTheme={setCodeTheme}
                copyCode={copyCode}
                copiedCode={copiedCode}
                studyMode={studyMode}
              />
            )}
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-8 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-600 mb-2">
                {language === 'ug' 
                  ? 'Python ئۆگىنىش كۇرسى — ئاساسىي بىلىم ۋە سىناق تارقىلىشى'
                  : 'Python Learning Course — Basic Knowledge & Test Distribution'}
              </p>
              <p className="text-sm text-gray-500">
                {language === 'ug' 
                  ? 'ئەڭ مۇھىم باب: 4-باب (باشقۇرۇش قۇرۇلمىلىرى) — 22.5%'
                  : 'Most Important: Chapter 4 (Control Flow Tools) — 22.5%'}
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition">
                {language === 'ug' ? 'سىناق باشلاش' : 'Start Test'}
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
                {language === 'ug' ? 'PDF چۈشۈرۈش' : 'Download PDF'}
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

// Welcome Content Component
const WelcomeContent = ({ language, total, totalRate, chapters, setActiveChapter }) => {
  const topChapters = chapters
    .sort((a, b) => b.rate - a.rate)
    .slice(0, 3);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-10">
        <div className="w-32 h-32 mx-auto mb-6 flex items-center justify-center bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full">
          <div className="relative">
            <Code className="w-16 h-16 text-blue-600" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">4</span>
            </div>
          </div>
        </div>
        
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          {language === 'ug' 
            ? 'Python ئۆگىنىش كۇرسىغا خۇش كەپسىز!'
            : 'Welcome to Python Learning Course!'}
        </h3>
        
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
          {language === 'ug'
            ? 'بۇ كۇرستا Python نىڭ ئاساسىي چۈشەنچىلىرى، كود ئۈلگىلىرى، سىناق سوئاللىرى ۋە ئەمەلىي مەسلىھەتلەر بېرىلگەن.'
            : 'This course covers basic concepts of Python, code examples, test questions, and practical tips.'}
        </p>
        
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => setActiveChapter(1)}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition shadow-md"
          >
            {language === 'ug' ? 'باشلاش' : 'Get Started'}
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition">
            {language === 'ug' ? 'تۇنۇشتۇرۇش' : 'Introduction'}
          </button>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <div className="text-4xl font-bold text-blue-700 mb-2">{total}</div>
          <div className="font-medium text-gray-900 mb-2">{language === 'ug' ? 'جەمئىي سۇئال' : 'Total Questions'}</div>
          <p className="text-sm text-gray-600">
            {language === 'ug' ? '4 بابتا تارقالغان' : 'Distributed across 4 chapters'}
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <div className="text-4xl font-bold text-green-700 mb-2">{totalRate.toFixed(1)}%</div>
          <div className="font-medium text-gray-900 mb-2">{language === 'ug' ? 'ئومۇمىي نىسبەت' : 'Total Rate'}</div>
          <p className="text-sm text-gray-600">
            {language === 'ug' ? 'مۇھىملىق ئۆلچىمى' : 'Importance scale'}
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <div className="text-4xl font-bold text-purple-700 mb-2">4-باب</div>
          <div className="font-medium text-gray-900 mb-2">{language === 'ug' ? 'ئەڭ مۇھىم' : 'Most Important'}</div>
          <p className="text-sm text-gray-600">22.5% {language === 'ug' ? 'نىسبەت' : 'rate'}</p>
        </div>
      </div>
      
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h4 className="font-bold text-gray-900 mb-6 text-xl flex items-center">
          <Trophy className="w-6 h-6 mr-3 text-yellow-600" />
          {language === 'ug' ? 'ئەڭ مۇھىم بابلار' : 'Most Important Chapters'}
        </h4>
        
        <div className="space-y-4">
          {topChapters.map((chapter, index) => (
            <div 
              key={chapter.id} 
              className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-300 cursor-pointer transition"
              onClick={() => setActiveChapter(chapter.id)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    index === 0 ? 'bg-gradient-to-r from-yellow-100 to-yellow-200' :
                    index === 1 ? 'bg-gradient-to-r from-gray-100 to-gray-200' :
                    'bg-gradient-to-r from-orange-100 to-orange-200'
                  }`}>
                    <span className="text-xl">{chapter.icon}</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">
                      {chapter.id}. {language === 'ug' ? chapter.ug.split(' ')[0] : chapter.en.split(' ')[0]}
                    </div>
                    <div className="text-sm text-gray-600">{chapter.count} {language === 'ug' ? 'سۇئال' : 'questions'}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-gray-900">{chapter.rate}%</div>
                  <div className="text-xs text-gray-500">{language === 'ug' ? 'نىسبەت' : 'rate'}</div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {chapter.time}
                </div>
                <div className={`px-3 py-1 text-xs font-medium rounded-full ${
                  chapter.difficulty === 'يېڭى باشلىغۇچى' ? 'bg-green-100 text-green-800' :
                  chapter.difficulty === 'ئوتتۇرا' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {language === 'ug' ? chapter.difficulty : chapter.difficulty === 'يېڭى باشلىغۇچى' ? 'Beginner' :
                   chapter.difficulty === 'ئوتتۇرا' ? 'Intermediate' : 'Advanced'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
        <h4 className="font-bold text-gray-900 mb-4 flex items-center">
          <Lightbulb className="w-6 h-6 mr-3 text-blue-600" />
          {language === 'ug' ? 'ئۆگىنىش يولى' : 'Learning Path'}
        </h4>
        
        <div className="flex items-center justify-between mb-6">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-2">1</div>
            <div className="text-sm font-medium">Python مۇھىتى</div>
          </div>
          <ArrowRight className="w-6 h-6 text-gray-400" />
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-2">2</div>
            <div className="text-sm font-medium">ئاساسىي چۈشەنچىلەر</div>
          </div>
          <ArrowRight className="w-6 h-6 text-gray-400" />
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center mx-auto mb-2">3</div>
            <div className="text-sm font-medium">كود يېزىش</div>
          </div>
          <ArrowRight className="w-6 h-6 text-gray-400" />
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-2">4</div>
            <div className="text-sm font-medium">باشقۇرۇش قۇرۇلمىسى</div>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm text-center">
          {language === 'ug' 
            ? 'ھەر بىر قەدەم داۋاملىشىپ ئۆگىنىڭ. 4-باب ئەڭ مۇھىم بولۇپ، 22.5% نىسبەتكە ئىگە.'
            : 'Learn each step sequentially. Chapter 4 is most important with 22.5% rate.'}
        </p>
      </div>
    </div>
  );
};

// Chapter Detail Content Component
const ChapterDetailContent = ({ 
  chapter, t, language, toggleFavorite, isFavorite,
  expandedExamples, toggleExample, codeTheme, setCodeTheme,
  copyCode, copiedCode, studyMode 
}) => {
  if (!chapter) return null;
  
  return (
    <div className="space-y-6">
      {/* Chapter Header */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className={`p-6 bg-gradient-to-r ${chapter.color} text-white`}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center mb-4">
                <div className="text-4xl mr-4">{chapter.icon}</div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {language === 'ug' ? 'باب' : 'Chapter'} {chapter.id}
                    </span>
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {chapter.rate}% {language === 'ug' ? 'نىسبەت' : 'rate'}
                    </span>
                    <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                      {chapter.count} {language === 'ug' ? 'سۇئال' : 'questions'}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">{t(chapter)}</h2>
                  <p className="text-blue-100 opacity-90">{t(chapter.description)}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{chapter.time}</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2" />
                  <span>{chapter.difficulty}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => toggleFavorite(chapter.id)}
                className={`p-2 rounded-full ${
                  isFavorite 
                    ? 'bg-yellow-100 text-yellow-600 hover:bg-yellow-200' 
                    : 'bg-white/20 hover:bg-white/30'
                } transition`}
              >
                {isFavorite ? (
                  <Star className="w-6 h-6 fill-yellow-400" />
                ) : (
                  <Star className="w-6 h-6" />
                )}
              </button>
              
              <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {/* Learning Objective */}
          {chapter.content && chapter.content.objective && (
            <div className="mb-8 p-5 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center text-lg">
                <Target className="w-5 h-5 mr-2 text-green-600" />
                {language === 'ug' ? 'ئۆگىنىش مەقسىتى' : 'Learning Objective'}
              </h3>
              <p className="text-gray-700 leading-relaxed">{t(chapter.content.objective)}</p>
            </div>
          )}
          
          {/* Topics Grid */}
          {chapter.content && chapter.content.topics && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <Hash className="w-6 h-6 mr-2 text-blue-600" />
                  {language === 'ug' ? 'تېمىلار' : 'Topics'}
                </h3>
                <span className="text-sm text-gray-500">
                  {chapter.content.topics.length} {language === 'ug' ? 'تېما' : 'topics'}
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {chapter.content.topics.map((topic, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start mb-3">
                      <span className="text-2xl mr-3">{topic.icon || '📌'}</span>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900">{t(topic.ug)}</h4>
                        <p className="text-xs text-gray-500 mt-1">{t(topic.en)}</p>
                      </div>
                    </div>
                    
                    {studyMode && (
                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <div className="text-xs text-gray-600">
                          {language === 'ug' ? 'ئۆگىنىش پۇرسىتى:' : 'Learning opportunity:'}
                        </div>
                        <div className="text-sm text-gray-700 mt-1">
                          {index % 3 === 0 && (language === 'ug' ? 'ئاساسىي بىلىم' : 'Basic knowledge')}
                          {index % 3 === 1 && (language === 'ug' ? 'ئەمەلىي قوللىنىش' : 'Practical application')}
                          {index % 3 === 2 && (language === 'ug' ? 'كەڭ تەدبىر' : 'Broad concept')}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Code Examples */}
          {chapter.content && chapter.content.examples && chapter.content.examples.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <Code className="w-6 h-6 mr-2 text-purple-600" />
                  {language === 'ug' ? 'كود ئۈلگىلىرى' : 'Code Examples'}
                </h3>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCodeTheme(codeTheme === 'dark' ? 'light' : 'dark')}
                    className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded"
                  >
                    {codeTheme === 'dark' ? '🌙' : '☀️'}
                  </button>
                </div>
              </div>
              
              <div className="space-y-6">
                {chapter.content.examples.map((example, index) => {
                  const exampleId = `${chapter.id}-${index}`;
                  const isExpanded = expandedExamples.has(exampleId);
                  
                  return (
                    <div key={index} className="border border-gray-300 rounded-xl overflow-hidden">
                      <button
                        onClick={() => toggleExample(exampleId)}
                        className="w-full px-5 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between text-left"
                      >
                        <div className="flex items-center">
                          <FileCode className="w-5 h-5 mr-3 text-blue-600" />
                          <span className="font-medium text-gray-900">{t(example.title)}</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-3">
                            {example.code.split('\n').length} {language === 'ug' ? 'قۇر' : 'lines'}
                          </span>
                          {isExpanded ? (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-500" />
                          )}
                        </div>
                      </button>
                      
                      {isExpanded && (
                        <div className="relative">
                          <pre className={`p-5 overflow-x-auto text-sm ${
                            codeTheme === 'dark' 
                              ? 'bg-gray-900 text-gray-100' 
                              : 'bg-gray-50 text-gray-800'
                          }`}>
                            <code>{example.code}</code>
                          </pre>
                          
                          <div className="absolute top-3 right-3 flex space-x-2">
                            <button
                              onClick={() => copyCode(example.code)}
                              className="px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white text-xs rounded flex items-center"
                            >
                              {copiedCode === example.code ? (
                                <>
                                  <Check className="w-3 h-3 mr-1" />
                                  {language === 'ug' ? 'كۆچۈرۈلدى' : 'Copied'}
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3 h-3 mr-1" />
                                  {language === 'ug' ? 'كۆچۈرۈش' : 'Copy'}
                                </>
                              )}
                            </button>
                            
                            <div className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                              Python
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          
          {/* Tips & Exercises */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Tips */}
            {chapter.content && chapter.content.tips && chapter.content.tips.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-orange-600" />
                  {language === 'ug' ? 'مەسلىھەتلەر' : 'Tips'}
                </h3>
                <div className="space-y-3">
                  {chapter.content.tips.map((tip, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200"
                    >
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                            <span className="text-orange-600 font-bold">{index + 1}</span>
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-orange-900">{t(tip)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Exercises */}
            {chapter.content && chapter.content.exercises && chapter.content.exercises.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-green-600" />
                  {language === 'ug' ? 'مەشىقلەر' : 'Exercises'}
                </h3>
                <div className="space-y-3">
                  {chapter.content.exercises.map((exercise, index) => (
                    <div
                      key={index}
                      className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mt-1">
                          <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                            <Play className="w-3 h-3 text-green-600" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <p className="text-green-900 font-medium">{t(exercise)}</p>
                          <div className="mt-2 flex space-x-2">
                            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                              {language === 'ug' ? 'ئاسان' : 'Easy'}
                            </span>
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                              10-15 {language === 'ug' ? 'مىنۇت' : 'min'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Progress & Navigation */}
          <div className="mt-10 pt-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">{language === 'ug' ? 'باب ئۆگىنىش ئىلگىرىلەش' : 'Chapter Learning Progress'}</span>
                  <span className="font-bold">{Math.round(chapter.rate * 0.8)}%</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                    style={{ width: `${Math.min(chapter.rate * 0.8, 100)}%` }}
                  ></div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg hover:from-blue-600 hover:to-cyan-600 transition font-medium">
                  {language === 'ug' ? 'بۇ بابقا سىناق باشلاش' : 'Test This Chapter'}
                </button>
                <button className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition font-medium">
                  {language === 'ug' ? 'كېيىنكى باب' : 'Next Chapter'} →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Chapter Stats */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-4">{language === 'ug' ? 'باب ئىستاتىستىكىسى' : 'Chapter Statistics'}</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-blue-50 rounded-xl">
            <div className="text-2xl font-bold text-blue-700">{chapter.count}</div>
            <div className="text-sm text-gray-600">{language === 'ug' ? 'سۇئال سانى' : 'Questions'}</div>
          </div>
          <div className="p-4 bg-green-50 rounded-xl">
            <div className="text-2xl font-bold text-green-700">{chapter.rate}%</div>
            <div className="text-sm text-gray-600">{language === 'ug' ? 'نىسبەت' : 'Rate'}</div>
          </div>
          <div className="p-4 bg-purple-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-700">{chapter.difficulty === 'يېڭى باشلىغۇچى' ? '1' : chapter.difficulty === 'ئوتتۇرا' ? '2' : '3'}</div>
            <div className="text-sm text-gray-600">{language === 'ug' ? 'قىيىنچىلىق' : 'Difficulty'}</div>
          </div>
          <div className="p-4 bg-orange-50 rounded-xl">
            <div className="text-2xl font-bold text-orange-700">{chapter.time.split(' ')[0]}</div>
            <div className="text-sm text-gray-600">{language === 'ug' ? 'ۋاقىت' : 'Time'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonTest1;