// AI Agents Course Promotion - React Component
import React, { useState } from 'react';
import { 
  PlayCircle, 
  Clock, 
  Users, 
  Award, 
  CheckCircle, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Zap,
  Brain,
  Globe,
  Target,
  Shield,
  TrendingUp,
  MessageSquare,
  BarChart,
  BookOpen,
  Video
} from 'lucide-react';

const AIAgentsCoursePromotion = () => {
  const [expandedSections, setExpandedSections] = useState({
    curriculum: false,
    instructors: false,
    testimonials: false,
    faq: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const courseStats = [
    { icon: <Video />, label: 'تور لېكسىيە', value: '32+', desc: 'يۇقىرى سۈپەتلىك' },
    { icon: <Clock />, label: 'ئوقۇتۇش ۋاقتى', value: '12 سائەت', desc: 'ئەمەلىي مەشىقلەر' },
    { icon: <BookOpen />, label: 'بابلىق ماتېرىيال', value: '6', desc: 'تولۇق قوللانما' },
    { icon: <Award />, label: 'مۇكاپات', value: '3', desc: 'ئەمەلىي پروگرامما' }
  ];

  const curriculumModules = [
    {
      title: 'باب 1: سۈنئىي ئەقىل ۋاكالەتچىلىرىنىڭ ئاساسى',
      topics: ['AI Agent نىڭ تەرىپى', 'تارىخىي تەرەققىيات', '5 دەرىجىلىك مودېل', 'ئاساسىي تەرەققىيات قوراللىرى'],
      duration: '2 سائەت',
      projects: 1
    },
    {
      title: 'باب 2: ئاپتونوم ۋاكالەتچىلەرنى قۇرۇش',
      topics: ['مۇستەقىل قارار چىقىرىش', 'ئىشەنچ سىستېمىسى', 'كۈتۈلمىگەن ۋەزىيەتلەرنى بىر تەرەپ قىلىش', 'ئۆگىنىش مېخانىزىمى'],
      duration: '3 سائەت',
      projects: 2
    },
    {
      title: 'باب 3: كۆپ ۋاكالەتچىلىك سىستېما',
      topics: ['ۋاكالەتچىلەر ئارا ئالاقە', 'ئورتاق مەقسەت بەلگىلەش', 'ھەمكارلىق مېخانىزمى', 'تارقىتىلغان ئەقىل'],
      duration: '2.5 سائەت',
      projects: 1
    },
    {
      title: 'باب 4: ئىنوۋاتسىيە ۋە يارىتىشچانلىق',
      topics: ['يېڭى مەھسۇلات يارىتىش', 'ئىجادىيەت ۋاكالەتچىلىرى', 'ئۆزىنىڭ ئۆگىنىشى', 'يېڭىلىق يارىتىش جەريانى'],
      duration: '2 سائەت',
      projects: 1
    },
    {
      title: 'باب 5: تەشكىلات ۋە باشقۇرۇش',
      topics: ['AI تەشكىلات قۇرۇلمىسى', 'باشقۇرۇش ئۇسۇلى', 'كۆپ ۋاكالەتچىلىك باشقۇرۇش', 'ئۆزىنى تەڭشەش سىستېمىسى'],
      duration: '1.5 سائەت',
      projects: 1
    },
    {
      title: 'باب 6: ئەخلاق ۋە بىخەتەرلىك',
      topics: ['ئەخلاقىي قارار چىقىرىش', 'مەخپىيەتلىكنى قوغداش', 'باشقۇرۇش ۋە قانۇن', 'كەلگۈسىدىكى مەسىلىلەر'],
      duration: '1 سائەت',
      projects: 0
    }
  ];

  const instructors = [
    {
      name: 'دەرىسا قاسىم',
      title: 'باش ئوقۇتقۇچى',
      bio: 'سۈنئىي ئەقىل تەتقىقاتچىسى، 10 يىللىق تەجرىبە، 50+ AI پروگرامما تەرەققىي قىلدۇرغان',
      expertise: ['يېڭى ۋاكالەتچىلىك مودېللىرى', 'تەبىئىي تىل بىر تەرەپ قىلىش', 'ئاپتونوم سىستېما'],
      imageColor: 'bg-gradient-to-r from-teal-500 to-cyan-400'
    },
    {
      name: 'ئەلىجان ئابدۇللا',
      title: 'ئەمەلىيەت ئوقۇتقۇچىسى',
      bio: 'AI ئىشلىتىشچانلىق مەخسۇسى، كۆپ خەلقئارالىق شىركەتلەردە يېتەكچىلىك قىلغان',
      expertise: ['AI جەريانلاشتۇرۇش', 'كارخانا ئەمەلىيىتى', 'سىستېما تەڭشەش'],
      imageColor: 'bg-gradient-to-r from-blue-500 to-indigo-400'
    },
    {
      name: 'ئايگۈل نەسىر',
      title: 'تەتقىقات يېتەكچىسى',
      bio: 'ئەخلاقىي AI تەتقىقاتچىسى، ئاكادېمىك تەتقىقاتلارنىڭ مۇئەللىپى',
      expertise: ['AI ئەخلاقى', 'جامائەت سىياسىتى', 'تەڭشەش تەدبىرلىرى'],
      imageColor: 'bg-gradient-to-r from-purple-500 to-pink-400'
    }
  ];

  const testimonials = [
    {
      name: 'مەھمۇت ئەخمەد',
      role: 'باش پروگراممىر',
      company: 'تېخنوۋېيشن',
      text: 'بۇ دەرس مېنىڭ AI ھەققىدىكى چۈشەنچىمنى تۈپتىن ئۆزگەرتتى. ھازىر ئۆزىمنىڭ ئاپتونوم ۋاكالەتچىلىرىنى قۇرالايمەن!',
      rating: 5
    },
    {
      name: 'زۇلەيخا ئىبراھىم',
      role: 'باشقۇرغۇچى',
      company: 'ئاسيا مالىيە',
      text: 'دەرس ماتېرىياللىرى ناھايىتى تەپسىلىي ۋە ئەمەلىي. ئەمەلىي پروگراممىلار مېنىڭ كارخانامدىكى جەريانلارنى ئۈنۈملۈك ئۆزگەرتتى.',
      rating: 5
    },
    {
      name: 'ئابدۇرېشىت كەرىم',
      role: 'باش تەتقىقاتچى',
      company: 'دىجىتال يېتەكچى',
      text: 'ئوقۇتقۇچىلارنىڭ بىلىم دەرىجىسى ۋە ئەمەلىي تەجرىبىسى ناھايىتى يۇقىرى. ھەر بىر بابتىكى ئەمەلىي مەشىقلەر ئەڭ قىممەتلىك قىسمى.',
      rating: 4
    }
  ];

  const faqItems = [
    {
      question: 'بۇ دەرستىن كېيىن قانداق بىلىملەرگە ئىگە بولىمەن؟',
      answer: 'سىز ئاپتونوم AI ۋاكالەتچىلىرىنى لايىھىلەش، قۇرۇش ۋە يولغا قويۇشنى ئۆگىنىسىز. شۇنداقلا، كۆپ ۋاكالەتچىلىك سىستېما ۋە ئەخلاقىي AI لايىھىلەش توغرىسىدا چوڭقۇر بىلىملەرگە ئىگە بولىسىز.'
    },
    {
      question: 'قانداق پروگرامما بىلىملىرى كېرەك؟',
      answer: 'ئاساسىي Python بىلىمى يېتەرلىك. دەرس جەريانىدا كېرەكلىك كودلار ۋە مىساللارنى تەمىنلەيمىز. ئالدىنقى بىلىم بولمىسىمۇ، ئۆگىنىشكە توسالغۇ بولمايدۇ.'
    },
    {
      question: 'ئەمەلىي پروگراممىلارنى قانداق ئىجرا قىلىمىز؟',
      answer: 'ھەر بىر بابتىكى ئەمەلىي مەشىقلەر ئارقىلىق ئۆگىنىسىز. بۇلار: ئاددىي ۋاكالەتچى قۇرۇش، ئاپتونوم جەريانلاشتۇرۇش ۋاكالەتچىسى، كۆپ ۋاكالەتچىلىك سىستېما قۇرۇش قاتارلىقلارنى ئۆز ئىچىگە ئالىدۇ.'
    },
    {
      question: 'تاماملاش گۇۋاھنامىسى بارمۇ؟',
      answer: 'ھەئە، دەرسنى مۇۋەپپەقىيەتلىك تاماملاش شەرتى بىلەن سىزگە رەسمىي گۇۋاھنامە تارقىتىلىدۇ. بۇ گۇۋاھنامە خەلقئارالىق دەرىجىدە تونۇلغان بولۇپ، خىزمەت ۋە ئوقۇش ئىلتىماسلىرىڭىزدا پايدىلىنىشقا بولىدۇ.'
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-gray-50 to-teal-50 font-cairo text-gray-800">
      {/* Header */}
      <header className="bg-gradient-to-r from-teal-900 to-cyan-800 text-white py-8 px-6 shadow-xl">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="lg:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="w-10 h-10 text-cyan-300" />
                <span className="text-cyan-200 font-semibold text-lg">كەلگۈسىنىڭ تېخنىكىسى</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                سۈنئىي ئەقىل ۋاكالەتچىلىرىگە كىرىش
              </h1>
              <p className="text-xl text-teal-100 mb-6">
                كەلگۈسىدىكى ئەڭ كۈچلۈك تېخنىكىلارنى ئۆگىنىڭ — تولۇق قوللانما ۋە ئەمەلىي مەشىقلەر
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <span className="bg-teal-700 px-4 py-2 rounded-full flex items-center gap-2">
                  <Zap className="w-5 h-5" /> ئەڭ يېڭى تېخنىكا
                </span>
                <span className="bg-cyan-700 px-4 py-2 rounded-full flex items-center gap-2">
                  <Target className="w-5 h-5" /> ئەمەلىي مەشىقلەر
                </span>
                <span className="bg-emerald-700 px-4 py-2 rounded-full flex items-center gap-2">
                  <Users className="w-5 h-5" /> ئوقۇتقۇچىلار ياردىمى
                </span>
              </div>
            </div>
            <div className="lg:w-1/3 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-4 text-center">ھەممىدىن مۇھىمى</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>6 بابلىق تولۇق قوللانما</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>ئەمەلىي پروگرامما ۋە مىساللار</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>ھاياتىي يېتەكچىلىك ۋە قوللاش</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <span>تاماملاش گۇۋاھنامىسى</span>
                </li>
              </ul>
              <button className="w-full mt-8 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                ھازىر تىزىملىتىڭ — 20% چۈشۈرۈم
              </button>
              <p className="text-center text-teal-200 mt-4 text-sm">
                چەكلىك ئورۇنلار قالدى! ھازىر تىزىملىتىڭ
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-teal-800">دەرس سۈپەت كۆرسەتكۈچلىرى</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courseStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-teal-100 to-cyan-100 text-teal-700 mb-4 mx-auto">
                  <div className="w-8 h-8">{stat.icon}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-lg font-semibold text-gray-700 mt-2">{stat.label}</div>
                  <div className="text-gray-500 text-sm mt-2">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-teal-800">دەرس مەزمۇنى</h2>
            <button 
              onClick={() => toggleSection('curriculum')}
              className="flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-900"
            >
              {expandedSections.curriculum ? 'ئىقتىسارلاشتۇرۇش' : 'تولۇق كۆرۈش'}
              {expandedSections.curriculum ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
          
          <div className="space-y-6">
            {curriculumModules.map((module, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 ${expandedSections.curriculum ? 'max-h-[500px]' : 'max-h-24'}`}>
                <div className="p-6 flex flex-col md:flex-row md:items-center justify-between">
                  <div className="md:w-2/3">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white font-bold">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{module.title}</h3>
                    </div>
                    
                    {expandedSections.curriculum && (
                      <div className="mt-4 pl-14">
                        <h4 className="font-semibold text-gray-700 mb-2">ئۆگىنىش مەزمۇنلىرى:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                          {module.topics.map((topic, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-6 mt-6">
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-gray-500" />
                            <span className="font-medium">ۋاقىت: {module.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-gray-500" />
                            <span className="font-medium">ئەمەلىي پروگرامما: {module.projects} تە</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-4 md:mt-0 md:w-1/3 flex flex-col items-end">
                    <div className="flex items-center gap-2 mb-4">
                      <PlayCircle className="w-6 h-6 text-teal-600" />
                      <span className="text-lg font-semibold">تور لېكسىيە</span>
                    </div>
                    {expandedSections.curriculum && (
                      <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-semibold py-2 px-6 rounded-xl transition-colors duration-300">
                        مۇشتەرى بولۇش
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-teal-700 to-cyan-700 hover:from-teal-800 hover:to-cyan-800 text-white font-bold py-4 px-12 rounded-2xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300">
              تولۇق دەرس مەزمۇنىنى چۈشۈرۈپ ئېلىش
            </button>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-teal-800">ئوقۇتقۇچىلار</h2>
            <button 
              onClick={() => toggleSection('instructors')}
              className="flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-900"
            >
              {expandedSections.instructors ? 'ئىقتىسارلاشتۇرۇش' : 'بارلىق ئوقۇتقۇچىلارنى كۆرۈش'}
              {expandedSections.instructors ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className={`h-4 ${instructor.imageColor}`}></div>
                <div className="p-6">
                  <div className="flex flex-col items-center text-center mb-6">
                    <div className={`w-24 h-24 rounded-full ${instructor.imageColor} flex items-center justify-center text-white text-3xl font-bold mb-4 -mt-12 border-4 border-white shadow-lg`}>
                      {instructor.name.charAt(0)}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{instructor.name}</h3>
                    <p className="text-teal-600 font-semibold">{instructor.title}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{instructor.bio}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-3">ئىختىساس ساھەلىرى:</h4>
                    <div className="flex flex-wrap gap-2">
                      {instructor.expertise.map((exp, i) => (
                        <span key={i} className="bg-teal-50 text-teal-700 px-3 py-1 rounded-full text-sm">
                          {exp}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {expandedSections.instructors && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button className="w-full bg-gradient-to-r from-gray-100 to-gray-50 hover:from-gray-200 hover:to-gray-100 text-gray-800 font-medium py-3 rounded-xl transition-colors duration-300">
                        تەپسىلاتىي تونۇشتۇرۇش
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-teal-800">ئوقۇغۇچىلار باھالىرى</h2>
            <button 
              onClick={() => toggleSection('testimonials')}
              className="flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-900"
            >
              {expandedSections.testimonials ? 'ئىقتىسارلاشتۇرۇش' : 'ھەممە باھالارنى كۆرۈش'}
              {expandedSections.testimonials ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role} • {testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                
                {expandedSections.testimonials && (
                  <div className="mt-6 pt-6 border-t border-gray-100 flex justify-end">
                    <button className="text-teal-700 font-medium hover:text-teal-900 flex items-center gap-2">
                      تولۇق باھا
                      <MessageSquare className="w-5 h-5" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-4 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-6 border border-teal-100">
              <Globe className="w-12 h-12 text-teal-600" />
              <div className="text-right">
                <h4 className="text-xl font-bold text-teal-800">5,000+ ئوقۇغۇچى</h4>
                <p className="text-gray-600">دۇنيا جۇغراپىيىسىدىن بىزدە ئۆگەنگەن</p>
              </div>
              <BarChart className="w-12 h-12 text-cyan-600" />
              <div className="text-right">
                <h4 className="text-xl font-bold text-teal-800">94% قانائەتلىكلىك</h4>
                <p className="text-gray-600">ئوقۇغۇچىلارنىڭ باھاسى</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold text-teal-800">كۆپ سورالغان سوئاللار</h2>
            <button 
              onClick={() => toggleSection('faq')}
              className="flex items-center gap-2 text-teal-700 font-semibold hover:text-teal-900"
            >
              {expandedSections.faq ? 'ئىقتىسارلاشتۇرۇش' : 'ھەممە سوئاللارنى كۆرۈش'}
              {expandedSections.faq ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
          </div>
          
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
                <button 
                  className="w-full p-6 text-right flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => {
                    // Toggle individual FAQ item
                    const newItems = [...document.querySelectorAll('.faq-answer')];
                    newItems[index].classList.toggle('hidden');
                  }}
                >
                  <span className="text-xl font-semibold text-gray-900">{item.question}</span>
                  <ChevronDown className="w-6 h-6 text-teal-600 flex-shrink-0" />
                </button>
                <div className="faq-answer hidden px-6 pb-6 border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-teal-900 to-cyan-800 rounded-3xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">تېخىمۇ كۆپ سوئالىڭىز بارمۇ؟</h3>
            <p className="text-teal-100 mb-6">بىزنىڭ ياردەم گۇرۇپپىمىز 24 سائەت ئىچىدە سوئاللىرىڭىزغا جاۋاب بېرىدۇ.</p>
            <button className="bg-white text-teal-800 hover:bg-gray-100 font-bold py-3 px-8 rounded-xl text-lg transition-colors duration-300">
              بىز بىلەن ئالاقىلىشىڭ
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-6 bg-gradient-to-b from-white to-teal-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl p-2 inline-block mb-6">
            <span className="text-white font-bold text-lg px-6 py-2">چەكلىك ئورۇنلار قالدى!</span>
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            كەلگۈسىدىكى ئەڭ مۇھىم ماھارەتنى ئۆگىنىڭ
          </h2>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            سۈنئىي ئەقىل ۋاكالەتچىلىرى كەلگۈسىنىڭ ئەڭ كۈچلۈك تېخنىكىسى بولۇپ، بۇ دەرس سىزنى شۇ كەلگۈسىگە تەييارلايدۇ.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-5xl font-bold text-teal-700 mb-2">٪20</div>
              <div className="text-lg font-semibold text-gray-800">بۇ ھەپتە چۈشۈرۈم</div>
              <div className="text-gray-500 text-sm mt-2">چەكلىك ۋاقىت تەكلىپى</div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-5xl font-bold text-teal-700 mb-2">7 كۈن</div>
              <div className="text-lg font-semibold text-gray-800">پۇل قايتۇرۇش كاپالىتى</div>
              <div className="text-gray-500 text-sm mt-2">ھېچقانداق مەسئۇلىيەتسىز سىناڭ</div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
              <div className="text-5xl font-bold text-teal-700 mb-2">ھەرۋاقىت</div>
              <div className="text-lg font-semibold text-gray-800">ئۆگىنىش ئەركىنلىكى</div>
              <div className="text-gray-500 text-sm mt-2">ئۆزىڭىزنىڭ تېمپىدا ئۆگىنىڭ</div>
            </div>
          </div>
          
          <button className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-5 px-16 rounded-2xl text-2xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-300 mb-6">
            ھازىر تىزىملىتىڭ — ھەق 349,000 سۆم
          </button>
          
          <p className="text-gray-500">
            <span className="line-through text-gray-400">436,000 سۆم</span> • بىر جەريانلىق ھەق • ھەممە ماتېرىياللارنى ئۆز ئىچىگە ئالىدۇ
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Brain className="w-10 h-10 text-cyan-400" />
                <span className="text-2xl font-bold">AI ۋاكالەتچىلىرى</span>
              </div>
              <p className="text-gray-400">
                كەلگۈسىنىڭ تېخنىكىسىنى ئۆگىتىش — ھەممە ئادەم ئۈچۈن يۇقىرى سۈپەتلىك AI بىلىملىرى.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">تېز ئۇلانمىلار</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">باشلانغۇچ دەرسلەر</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ئوتتۇرا سەۋىيە دەرسلىرى</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ئالىي سەۋىيە دەرسلىرى</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ئەمەلىي پروگراممىلار</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">ياردەم</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">ياردەم مەركىزى</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ئىجتىمائىي تورلار</a></li>
                <li><a href="#" className="hover:text-white transition-colors">ھەمكارلىشىش</a></li>
                <li><a href="#" className="hover:text-white transition-colors">باشقۇرۇش تەڭشەش</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">ئالاقىلىشىش</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5" />
                  <span>support@aiagents.ug</span>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="w-5 h-5" />
                  <span>www.aiagents.ug</span>
                </li>
                <li className="flex items-center gap-3">
                  <Shield className="w-5 h-5" />
                  <span>شەخسىي ئۇچۇرلارنى قوغداش سىياسىتى</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-10 border-t border-gray-800 text-center text-gray-500">
            <p>© 2026 سۈنئىي ئەقىل ۋاكالەتچىلىرى دەرسى. ھەممە ھوقۇق مۇھاپىزەتلىك.</p>
            <p className="mt-2">بۇ دەرس مەزمۇنى خالايمەن تەرىپىدىن تەييارلاندى ۋە يېتەكلەندى.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AIAgentsCoursePromotion;