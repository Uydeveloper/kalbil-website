import React from "react";
import { 
  FaDatabase, FaCloud, FaCode, FaBrain, 
  FaShieldAlt, FaGlobe, FaRoad, FaCalendarAlt,
  FaServer, FaNetworkWired, FaChartLine, FaHistory
} from "react-icons/fa";

const Blog45 = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-8 bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900 font-sans rounded-2xl shadow-xl">
      
      {/* 双语标题区 */}
      <header className="text-center mb-12 px-4 py-8 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl shadow-lg">
        <div className="inline-block p-3 bg-white/10 rounded-full backdrop-blur-sm mb-4">
          <FaDatabase className="text-white text-4xl" />
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight" dir="rtl" lang="ug">
          ئۇيغۇر سانلىق مەلۇمات مەركىزى: كەلگۈسىنىڭ دىجىتال ئاساسى
        </h1>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto mb-6"></div>
        <h2 className="text-xl md:text-2xl text-cyan-100 font-light italic" dir="ltr" lang="en">
          Uyghur Data Center: Vision, Infrastructure & Strategic Roadmap (2026–2030)
        </h2>
        <p className="mt-6 text-blue-200 text-sm">
          <FaCalendarAlt className="inline mr-2" />
           2025-يىلى 12-ئاينىڭ 16-كۈنى 
        </p>
      </header>

      {/* 摘要部分 */}
      <div className="mb-12 p-6 font-uyghur bg-white/80 backdrop-blur-sm rounded-xl shadow-md border-l-4 border-blue-500">
        <p className="text-2xl md:text-2xl mb-4 leading-relaxed text-justify" dir="rtl" lang="ug">
          <strong>مەزمۇن:</strong>  بۇ تەكلىپتە ئۇيغۇر مەدەنىيەت، تىل ۋە تەتقىقات ئېھتىياجلىرىنى قاندۇرۇش ئۈچۈن مۇستەقىل رەقەملىك ئۇل ئەسلىھە قۇرۇش، ئۇقۇم چارچىۋىلىرىنى ئەمەلىي ئىجرا باسقۇچلىرى بىلەن بىرلەشتۈرۈش ئۈچۈن ئومۇميۈزلۈك كۆز قاراش بايان قىلىنغان.
        </p>
        <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed" dir="ltr" lang="en">
          <strong>Context:</strong> This proposal outlines a comprehensive vision for establishing independent digital infrastructure to serve Uyghur cultural, linguistic, and research needs, blending conceptual frameworks with actionable implementation phases.
        </p>
      </div>

      {/* 核心概念部分 */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-blue-100 rounded-lg mr-4">
            <FaServer className="text-blue-600 text-2xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800" dir="rtl" lang="ug">
            1. سانلىق مەلۇمات مەركىزىنىڭ تەپسىلىي چۈشەندۈرۈلۈشى
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-3" dir="rtl" lang="ug">
              ئاساسىي ئۇقۇم
            </h3>
            <p className="mb-4 leading-relaxed" dir="rtl" lang="ug">
              سانلىق مەلۇمات مەركىزى چوڭ كۆلەملىك رەقەملىك سانلىق مەلۇماتلارنى <strong>يىغىش، ساقلاش، بىر تەرەپ قىلىش، تەھلىل قىلىش ۋە بىخەتەر باشقۇرۇش</strong> ئۈچۈن مەخسۇس لايىھەلەنگەن قاتتىق دېتال، يۇمشاق دېتال ۋە تور ئۇل ئەسلىھەلىرىنىڭ مۇرەككەپ بىر گەۋدىلىشىشىدۇر.
            </p>
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border-r-4 border-blue-400">
              <p className="italic text-blue-800" dir="rtl" lang="ug">
                «سانلىق مەلۇمات يېڭى نېفىت؛ سانلىق مەلۇمات مەركىزى ئۇنىڭ نېفىت ئايرىش زاۋۇتى».
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-700 mb-3" dir="ltr" lang="en">
              Core Definition
            </h3>
            <p className="mb-4 leading-relaxed" dir="ltr" lang="en">
              A data center is a sophisticated integration of <strong>hardware, software, and network infrastructure</strong> specifically engineered for the <strong>collection, storage, processing, analysis, and secure management</strong> of massive digital datasets.
            </p>
            <div className="mt-4 p-4 bg-gray-100 rounded-lg border-l-4 border-blue-400">
              <p className="italic text-gray-800" dir="ltr" lang="en">
                "Data is the new oil; the data center is its refinery."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 架构分类部分 */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-green-100 rounded-lg mr-4">
            <FaNetworkWired className="text-green-600 text-2xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800" dir="rtl" lang="ug">
            2. مەركىز قۇرۇلمىسىنىڭ تۈرلىرى ۋە تاللاشلار
          </h2>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center" dir="rtl" lang="ug">
            <FaCloud className="ml-2" /> قۇرۇلما مودېلى بويىچە تۈرلەر
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                titleUg: "باشقۇرۇلغان (On-Premise)",
                titleEn: "Managed (On-Premise)",
                descUg: "ئۆزى قۇرۇپ، ئۆزى باشقۇرىدىغان مەركەز. تولۇق كونترول ۋە مەخپىيەتلىك، لېكىن يۇقىرى باشلانغۇچ خىراجەت.",
                descEn: "Self-built and self-managed facility. Full control & privacy, but high CapEx.",
                color: "from-blue-100 to-blue-50",
                border: "border-blue-300"
              },
              {
                titleUg: "بۇلۇت (Cloud)",
                titleEn: "Cloud",
                descUg: "AWS، Azure، Google Cloud قاتارلىق ھازىرقى زامان مۇلازىمەتلىرى. ئۆزگەرتىشچان ۋە تېخىمۇ ئاز مەسئۇلىيەت.",
                descEn: "Modern services like AWS, Azure, Google Cloud. Scalable & less operational burden.",
                color: "from-green-100 to-green-50",
                border: "border-green-300"
              },
              {
                titleUg: "ئارىلاش (Hybrid)",
                titleEn: "Hybrid",
                descUg: "On-Premise ۋە Cloud نى بىرلەشتۈرگەن ئەڭ مۇناسىۋەتلىك سىستېما. مەخپىي مەلۇماتلار ئۆزىدە، ئاشقۇچان يۈكلەر بۇلۇتتا.",
                descEn: "Optimal blend of on-premise & cloud. Sensitive data on-site, variable loads on cloud.",
                color: "from-purple-100 to-purple-50", 
                border: "border-purple-300"
              }
            ].map((type, index) => (
              <div key={index} className={`bg-gradient-to-br ${type.color} p-5 rounded-xl border ${type.border} shadow-sm`}>
                <h4 className="font-bold text-lg mb-2" dir="rtl" lang="ug">{type.titleUg}</h4>
                <p className="text-sm mb-3" dir="rtl" lang="ug">{type.descUg}</p>
                <div className="border-t pt-3 mt-3">
                  <h4 className="font-bold text-lg mb-2" dir="ltr" lang="en">{type.titleEn}</h4>
                  <p className="text-sm italic text-gray-700" dir="ltr" lang="en">{type.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-green-700 mb-4 flex items-center" dir="rtl" lang="ug">
            <FaDatabase className="ml-2" /> مەزمۇن تىپى بويىچە تۈرلەر
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1 ml-3">
                    <FaBrain className="text-blue-600" />
                  </div>
                  <div>
                    <strong dir="rtl" lang="ug">ئىلمىي-تەتقىقات مەلۇماتلىرى</strong>
                    <p className="text-sm text-gray-600" dir="rtl" lang="ug">(ھەسسىيات، ژېنوم، كىلىمات)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mt-1 ml-3">
                    <FaHistory className="text-green-600" />
                  </div>
                  <div>
                    <strong dir="rtl" lang="ug">تىل-مەدەنىيەت سانلىق خەزىنىسى</strong>
                    <p className="text-sm text-gray-600" dir="rtl" lang="ug">(قوليازما، ئەدەبىيات، ئاۋاز ساقلاش)</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-red-100 p-2 rounded-lg mt-1 mr-3">
                    <FaGlobe className="text-red-600" />
                  </div>
                  <div>
                    <strong dir="ltr" lang="en">Scientific & Research</strong>
                    <p className="text-sm text-gray-600" dir="ltr" lang="en">(Climate, Genomics, Sensor data)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mt-1 mr-3">
                    <FaShieldAlt className="text-purple-600" />
                  </div>
                  <div>
                    <strong dir="ltr" lang="en">Cultural-Linguistic Repository</strong>
                    <p className="text-sm text-gray-600" dir="ltr" lang="en">(Manuscripts, Literature, Oral history)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 技术架构部分 */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-purple-100 rounded-lg mr-4">
            <FaCode className="text-purple-600 text-2xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800" dir="rtl" lang="ug">
            3. تېخنىكىلىق ئارخىتېكتۇرا ۋە ئەسلىھەلەش
          </h2>
        </div>

        <div className="bg-white/90 p-6 rounded-xl shadow-md mb-8">
          <h3 className="text-xl font-semibold text-purple-700 mb-4" dir="rtl" lang="ug">
            مەلۇمات يىغىش قاتلىمى
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-blue-800 mb-2" dir="rtl" lang="ug">مەنبەلەر:</h4>
              <ul className="space-y-2 text-sm" dir="rtl" lang="ug">
                <li className="flex items-center"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full ml-2"></span>تور بېكەت ۋە ئىجتىمائىي تاراتقۇ سىستېمىلىرى</li>
                <li className="flex items-center"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full ml-2"></span>ئوچۇق مەلۇمات پورتاللىرى (API ئارقىلىق)</li>
                <li className="flex items-center"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full ml-2"></span>IoT سەنسورلىرى ۋە سۈنئىي ھەمراھلار</li>
                <li className="flex items-center"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full ml-2"></span>دىجىتاللاشتۇرۇلغان PDF، كىتاب ۋە قوليازما</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-blue-800 mb-2" dir="ltr" lang="en">Sources:</h4>
              <ul className="space-y-2 text-sm italic text-gray-700" dir="ltr" lang="en">
                <li className="flex items-center"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Websites & Social Media Platforms</li>
                <li className="flex items-center"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Open Data Portals (via APIs)</li>
                <li className="flex items-center"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>IoT Sensors & AI Agents</li>
                <li className="flex items-center"><span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>Digitized PDFs, Books & Manuscripts</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white/90 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-700 mb-4" dir="rtl" lang="ug">
            ساقلاش ۋە بىر تەرەپ قىلىش قاتلىمى
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h4 className="font-bold text-green-800 mb-2" dir="rtl" lang="ug">سانلىق مەلۇمات ئاساسلىرى:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Elasticsearch</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-green-800 mb-2" dir="rtl" lang="ug">بىر تەرەپ قىلىش تېخنىكىلىرى:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Docker/K8s</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Apache Spark</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">HPC Resources</span>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h4 className="font-bold text-green-800 mb-2" dir="ltr" lang="en">Databases:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">PostgreSQL</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Elasticsearch</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold text-green-800 mb-2" dir="ltr" lang="en">Processing Tech:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Docker/K8s</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Apache Spark</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">HPC Resources</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 战略路线图部分 */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <div className="p-3 bg-orange-100 rounded-lg mr-4">
            <FaRoad className="text-orange-600 text-2xl" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800" dir="rtl" lang="ug">
            4. 2026–2030 يىللىرى ئارىلىقى ئىستراتېگىيىلىك يول خەرىتىسى
          </h2>
        </div>

        <div className="relative">
          {/* 时间线连接线 */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-indigo-600"></div>
          
          {[
            { 
              year: "2026", 
              titleUg: "ئاساس سالىش دەۋرى", 
              titleEn: "Foundation Phase",
              detailsUg: ["قانۇنىي ۋە مالىيە چوڭ تۈزۈم", "تېخنىكىلىق كوماندە تەشكىللەش", "Pilot Cloud Infrastructure", "ئاساسىي مەلۇمات جەدۋىلى"],
              detailsEn: ["Legal & Financial Framework", "Technical Team Assembly", "Pilot Cloud Infrastructure", "Core Data Schema"],
              tech: ["Legal Docs", "Team", "Pilot Cloud", "Schema"],
              color: "bg-blue-100",
              border: "border-blue-400"
            },
            { 
              year: "2027", 
              titleUg: "مەلۇمات يىغىش دەۋرى", 
              titleEn: "Data Acquisition Phase",
              detailsUg: ["تېكىست ۋە قوليازما دىجىتاللاشتۇرۇش", "ئاۋاز-ۋىدىئو ساقلاش سىستېمىسى", "GIS ۋە جۇغراپىيەلىك مەلۇمات", "ئىشلەپچىقىرىش سىستېمىسى قۇرۇش"],
              detailsEn: ["Text & Manuscript Digitization", "Audio-Video Archiving System", "GIS & Geospatial Data", "ETL Pipeline Development"],
              tech: ["OCR", "AV Archive", "GIS", "ETL"],
              color: "bg-green-100", 
              border: "border-green-400"
            },
            { 
              year: "2028", 
              titleUg: "AI ۋە تەھلىل دەۋرى", 
              titleEn: "AI & Analytics Phase",
              detailsUg: ["ئۇيغۇرچە NLP ئىنتېگراتسىيەسى (OCR، ASR، TTS)", "ماشىنا ئۈگىنىش مودېللىرىنى ئىشلەپچىقىرىش", "مەلۇمات كۆرۈنمە يۈزى ۋە داشبورد", "API Gateway ۋە مۇلازىمېتەر"],
              detailsEn: ["Uyghur NLP Integration (OCR, ASR, TTS)", "ML Model Development", "Data Visualization & Dashboards", "API Gateway & Microservices"],
              tech: ["NLP", "ML Models", "Dashboards", "API"],
              color: "bg-purple-100",
              border: "border-purple-400"
            },
            { 
              year: "2029", 
              titleUg: "قوللىنىش ۋە سىناش دەۋرى", 
              titleEn: "Application & Testing Phase",
              detailsUg: ["ئىزدەش سىستېمىسى ۋە بىلىم bazası", "Smart Education Platform MVP", "ئەمەلىي تەتبىقلار ۋە ئىشلەتكۈچى تەكشۈرۈش", "تەڭشەش ۋە ياخشىلاش"],
              detailsEn: ["Search System & Knowledge Base", "Smart Education Platform MVP", "Pilot Deployments & User Testing", "Optimization & Refinement"],
              tech: ["Search", "EdTech", "User Testing", "Optimize"],
              color: "bg-orange-100",
              border: "border-orange-400"
            },
            { 
              year: "2030", 
              titleUg: "ئىكوسىستېما ۋە داۋاملىقى دەۋرى", 
              titleEn: "Ecosystem & Sustainability Phase",
              detailsUg: ["ئوچۇق مەلۇمات پورتالىنى قۇرۇش", "Startup Incubator ۋە API ماركىتى", "ئىلمىي ھەمكارلىق ۋە خەلقئارا ئۇلىنىش", "داۋاملىق باشقۇرۇش مودېلى"],
              detailsEn: ["Open Data Portal Launch", "Startup Incubator & API Marketplace", "Academic Collaboration & Global Integration", "Sustainable Governance Model"],
              tech: ["Open Data", "Incubator", "Collaboration", "Governance"],
              color: "bg-red-100",
              border: "border-red-400"
            }
          ].map((phase, index) => (
            <div key={index} className={`mb-8 flex flex-col md:flex-row items-center md:items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* 时间节点 */}
              <div className="z-10 flex-shrink-0 w-24 h-24 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                <div className={`text-center ${phase.color} p-4 rounded-full border-2 ${phase.border}`}>
                  <div className="font-black text-2xl text-gray-900">{phase.year}</div>
                </div>
              </div>
              
              {/* 内容卡片 */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'} mt-6 md:mt-0`}>
                <div className={`${phase.color} p-6 rounded-xl shadow-md border ${phase.border}`}>
                  <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1" dir="rtl" lang="ug">{phase.titleUg}</h3>
                      <h4 className="text-lg font-semibold text-gray-700 italic mb-3" dir="ltr" lang="en">{phase.titleEn}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                      {phase.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-white/70 text-gray-800 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <ul className="space-y-2 text-sm">
                        {phase.detailsUg.map((detail, i) => (
                          <li key={i} className="flex items-start" dir="rtl" lang="ug">
                            <span className="inline-block w-2 h-2 bg-current rounded-full mt-2 ml-2"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2 text-sm italic text-gray-700">
                        {phase.detailsEn.map((detail, i) => (
                          <li key={i} className="flex items-start" dir="ltr" lang="en">
                            <span className="inline-block w-2 h-2 bg-current rounded-full mt-2 mr-2"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 结语部分 */}
      <section className="mt-16 mb-12 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-8 rounded-2xl shadow-inner border border-blue-200">
          <FaChartLine className="text-5xl text-blue-600 mx-auto mb-6" />
          <blockquote className="mb-8">
            <p className="text-2xl font-bold text-blue-900 mb-4 leading-relaxed" dir="rtl" lang="ug">
              "سانلىق مەلۇماتقا ئىگە بولغان خەلق كەلگۈسىنىڭ خەرىتىسىنى ئۆز قولىغا ئالىدۇ."
            </p>
            <p className="text-xl italic text-gray-700" dir="ltr" lang="en">
              "A community that owns its data holds the map to its own future."
            </p>
          </blockquote>
          
          <div className="max-w-2xl mx-auto mt-10 p-6 bg-white/80 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold text-gray-800 mb-4" dir="rtl" lang="ug">
              كەلگۈسىدىكى ئىمكانىيەتلەر:
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                {ug: "تېخنىكىلىق مۇستەقىللىق", en: "Technical Sovereignty"},
                {ug: "مەدەنىي داۋاملىقى", en: "Cultural Continuity"},
                {ug: "ئىلمىي تەرەققىيات", en: "Scientific Advancement"},
                {ug: "ئىقتىسادىي بايلىق", en: "Economic Asset"}
              ].map((item, i) => (
                <div key={i} className="text-center p-3 bg-gradient-to-b from-white to-gray-100 rounded-lg shadow">
                  <div className="font-bold text-blue-800" dir="rtl" lang="ug">{item.ug}</div>
                  <div className="text-xs italic text-gray-600 mt-1" dir="ltr" lang="en">{item.en}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="mt-12 pt-8 border-t border-gray-300 text-center text-gray-600">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-lg text-blue-800">© 2025 — KeLBiL Initiative</div>
            <div className="text-sm">Uyghur Digital Infrastructure & AI Research Group</div>
          </div>
          <div className="flex space-x-4">
            <div className="text-sm p-2 bg-gray-100 rounded-lg">v2.1.0</div>
            <div className="text-sm p-2 bg-gray-100 rounded-lg">Technical Proposal</div>
            <div className="text-sm p-2 bg-gray-100 rounded-lg">Confidential</div>
          </div>
        </div>
        <p className="text-xs text-gray-500 max-w-2xl mx-auto">
          This document outlines a strategic technical proposal for establishing digital infrastructure to support Uyghur linguistic, cultural, and scientific advancement. All concepts are presented for technical discussion and planning purposes.
        </p>
      </footer>
    </div>
  );
};

export default Blog45;