// Blog117.jsx
import React from 'react';

const Blog117 = () => {
  return (
    <article 
      dir="rtl" 
      lang="ug" 
      className="bg-gradient-to-b from-slate-50 to-slate-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      style={{ 
        fontFamily: "'UKIJ Tuz', 'UKIJ Nasq', 'Microsoft Uighur', system-ui, sans-serif",
        fontSize: '1.125rem',
        lineHeight: '1.75'
      }}
    >
      {/* Header with KeLBiL branding and decorative lobster elements */}
      <header className="relative mb-12 pb-8 border-b-2 border-amber-200">
        <div className="absolute -top-6 -left-6 w-20 h-20 text-amber-400 opacity-15 animate-bounce-slow">
          <div className="text-7xl">☪</div>
        </div>
        <div className="absolute -bottom-8 -right-8 w-16 h-16 text-violet-300 opacity-20">
          <div className="text-6xl rotate-12">☪</div>
        </div>
        
        {/* KeLBiL Logo */}
        <div className="flex justify-end mb-6">
          <div className="bg-gradient-to-r from-amber-500 to-rose-600 text-white px-4 py-2 rounded-xl font-bold text-xl shadow-lg">
            KeLBiL
          </div>
        </div>
        
        <div className="flex flex-col items-end mb-6">
          <span className="inline-block bg-violet-50 text-violet-800 px-3 py-1 rounded-full text-sm font-medium mb-2">
            2026-يىلى 2-ئاينىڭ 4-كۈنى ئېلان قىلىندى
          </span>
          <div className="flex flex-wrap justify-end gap-2 mb-4">
            {[{text: 'Python', color: 'emerald'}, 
              {text: 'TypeScript', color: 'sky'}, 
              {text: 'OpenAI', color: 'violet'},
              {text: 'تېخنىكا', color: 'indigo'}].map((tag, i) => (
              <span 
                key={i} 
                className={`inline-block bg-${tag.color}-50 text-${tag.color}-800 text-xs px-2.5 py-0.5 rounded-full border border-${tag.color}-200`}
              >
                {tag.text}
              </span>
            ))}
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 text-right leading-tight">
          OpenAI Agent SDK نى قوللىنىش: LLM بىلەن شەخسىي ياسالغان فۇنكسىيە ۋە سىرتقى خىزمەتلەرنى بىرلەشتۈرۈش
        </h1>
        
        <div className="bg-gradient-to-r from-amber-400 to-rose-500 h-1 w-24 rounded-full mx-auto mr-0 mb-8"></div>
        
        <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg text-slate-800 italic text-lg">
          «سۈنئىي ئەقىل ئاگېنتلىرىنىڭ كۈچى — قوراللارنى چاقىرىپ، دۇنيانى بىلمەك»
        </div>
      </header>

      {/* Introduction Section */}
      <section className="mb-12 prose prose-ug max-w-none">
        <p className="text-lg leading-relaxed text-slate-800 mb-5">
          OpenAI دا <span className="font-bold text-violet-700">Agent SDK</span> ئاساسىدا ئاگېنت خىزمىتى تەمىنلەنگەندىن بېرى بىر مۇددەت ئۆتتى. بۇ ئاگېنت خىزمىتىنى قوللىنىش ئارقىلىق، سۈنئىي تىل مودېلى (LLM) سىرتقى قوراللار ياكى خىزمەتلەرنى چاقىرىپ، كۆپ قەدەملىك جەريانلارنى ئاسانلا ئىجرا قىلالايدۇ.
        </p>
        
        <p className="text-lg leading-relaxed text-slate-800 mb-5">
          مەسىلەن، LLM نىڭ سوئال جاۋابىنى توردا ئىزدەپ، ئۇنىڭ مەزمۇنىنى شەخسىي ياسالغان فۇنكسىيە بىلەن تەھلىل قىلىپ، تەھلىل نەتىجىسىنى قايتا LLM غا سوئال قىلىش كىبى خىزمەت ئېقىمىنى قۇرالايمىز.
        </p>
        
        <p className="text-lg leading-relaxed text-slate-800 mb-5">
          بۇ ھۆججەتتە، بىز OpenAI ئاگېنتىنى ھېچ قوللانمىغان ھالەتتىن باشلاپ، TypeScript ۋە Python دا OpenAI ئاگېنتىنى قوللانغان مىساللارنى ياساش ۋە ئىجرا قىلىش ئارقىلىق، ئاگېنتنى قانداق قوللىنىشى ۋە قايسى ۋاقىتتا ئىشلىتىش كېرەكلىكى توغرىسىدا پىكىر قىلىشنى خالايمىز.
        </p>
        
        <p className="text-lg leading-relaxed text-slate-800 mb-5">
          بۇ ماقالە <span className="font-bold">TypeScript ياكى Python دا OpenAI API نى قوللانغان، لېكىن ئاگېنتنى ھېچ قوللانمىغان</span> ئوقۇرمىزنىڭ دىققىتىگە تەييارلاندى.
        </p>
        
        <div className="bg-white rounded-2xl shadow-md p-6 border border-amber-200 mt-8">
          <div className="flex items-start">
            <div className="text-amber-500 text-4xl mr-4 mt-1">⚠️</div>
            <div>
              <p className="font-bold text-slate-900 mb-2">ئەسكەرتۈش:</p>
              <p className="text-slate-700">
                بۇ تەجرىبىلەر 2026-يىلى 2-ئاينىڭ 1-كۈنىدىن 4-كۈنىگىچە ئېلىنغان. كېلەرچەكى نەشرىيەتلەردە بۇ تەجرىبىلەر بىلەن بىر خىل ئىشلىمەسلىكى مۇمكىن.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Environment Setup Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right border-b pb-3 border-amber-200">مۇھىت قۇرۇش ۋە تېز باشلاش</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          رەسمىي بەتتە TypeScript ۋە Python ئۈچۈن <span className="font-bold text-amber-700">تېز باشلاش</span> قوللانمىسى تەييارلانغان. سىز تېزدىن OpenAI Agent SDK نى سىناپ بېقىشنى خالىسىڭىز، بۇ قوللانما ئەڭ ياخشى تاللاشلارنىڭ بىرىدۇر:
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <a 
            href="https://platform.openai.com/docs/agents/quickstart-typescript" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-sky-50 p-5 rounded-xl border border-sky-200 hover:border-sky-400 transition-colors"
          >
            <div className="text-sky-600 text-3xl mb-3">🔷</div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">TypeScript تېز باشلاش</h3>
            <p className="text-slate-700">ئاساسىي مىساللار ۋە قۇرۇلمىلار</p>
          </a>
          
          <a 
            href="https://platform.openai.com/docs/agents/quickstart-python" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block bg-emerald-50 p-5 rounded-xl border border-emerald-200 hover:border-emerald-400 transition-colors"
          >
            <div className="text-emerald-600 text-3xl mb-3">🔷</div>
            <h3 className="font-bold text-lg text-slate-900 mb-2">Python تېز باشلاش</h3>
            <p className="text-slate-700">ئاساسىي مىساللار ۋە قۇرۇلمىلار</p>
          </a>
        </div>
        
        <div className="bg-gradient-to-r from-violet-50 to-indigo-50 p-6 rounded-2xl border border-violet-300">
          <h3 className="font-bold text-xl text-slate-900 mb-3 flex items-center">
            <span className="text-violet-600 text-2xl mr-3">🔧</span>
            بۇ ھۆججەتتىكى مىسال كودلىرىنىڭ ئىشلىتىلىش مۇھىتى
          </h3>
          <p className="text-slate-700 mb-4">
            بۇ ھۆججەتتىكى مىسال كودلىرىنىڭ ئىشلىتىلىش مۇھىتىنى قۇرۇش ئۇسۇلى تۆۋەندىكىدەك:
          </p>
          <ul className="list-disc pr-6 space-y-2 text-slate-700">
            <li>TypeScript مۇھىتىنى قۇرۇش ئۇسۇلى</li>
            <li>Python مۇھىتىنى قۇرۇش ئۇسۇلى</li>
          </ul>
        </div>
      </section>

      {/* Simple Sample Section */}
      <section className="mb-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-amber-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right">ئاددىي مىسال</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          بۇ يەردە بىز TypeScript ۋە Python دا ئەڭ ئاددىي ئاگېنت قوللانما مىسالىنى كۆرسىتىمىز. بۇ مىسالدا پەقەت LLM غا سوئال بېرىپ، نەتىجىنى تېپىش بىلەن چەكلەنگەن. بۇ مىسال ئاگېنتنىڭ ئاددىي قوللىنىش ئۇسۇلىنى كۆرسىتىدۇ، ئاگېنتنىڭ تولۇق قوبايلىقىنى كۆرسىتەلمەيدۇ.
        </p>
        
        {/* TypeScript Simple Sample */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-sky-600 text-2xl ml-2">🔷</span>
            TypeScript دىكى ئاددىي مىسال
          </h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`import { Agent, run } from "@openai/agents";
import dotenv from "dotenv";

dotenv.config();

const agent = new Agent({
  name: 'Guide-City-Agent',
  instructions: 'يابونىيە شەھەر ۋە قىيامەت يېرى ئاتىغا دائىر سوئاللار. ئىشلەتكۈچىنىڭ سوئالىغا ئەڭ ماس كېلگەن شەھەر ياكى قىيامەت يېرى ئاتىنى قىسقىچە جاۋاب بېرىڭ.',
  model: "gpt-5-nano"
});
const result = await run(agent, 'توكيو دىزنىي لاندى قايسى شەھەردە؟');
console.log(result.finalOutput);`}</pre>
          </div>
          
          <p className="text-slate-700 mb-4">
            بۇ سكرىپتنى تۆۋەندىكىدەك ئىجرا قىلىڭ:
          </p>
          
          <div className="bg-slate-800 text-green-400 rounded-lg p-3 font-mono text-sm mb-6">
            npx tsx sample_agent_sdk.ts
          </div>
          
          <p className="text-slate-700 mb-4">
            <span className="font-bold">تەپسىلىي چۈشەندۈرۈش:</span>
          </p>
          <ul className="list-disc pr-6 space-y-2 text-slate-700 mb-6">
            <li><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">Agent</code> كىلاسسى بىلەن ئاگېنت ئوبيېكتىنى قۇرىمىز</li>
            <li><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">run</code> فۇنكسىيىسى بىلەن ئاگېنتنى ئىجرا قىلىمىز</li>
            <li><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">result.finalOutput</code> خاسلىقىدا ئاخىرقى نەتىجە ساقلىنىدۇ</li>
          </ul>
          
          <p className="text-slate-700 mb-4">
            ئىشلىتىلگەن بەلگىلەر سانى قاتارلىق ئىشلىتىش ئەھۋالىنى تەكشۈرۈشنى خالىسىڭىز، <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">result.state.usage</code> خاسلىقىنى قاراڭ:
          </p>
          
          <div className="bg-slate-800 text-amber-300 rounded-lg p-3 font-mono text-sm mb-6">
            console.log(result.state.usage);
          </div>
          
          <p className="text-slate-700">
            شۇنداقلا، ئاگېنت قانداق ئىشلىگەنلىكىنىڭ تارىخىنى <span className="font-bold">OpenAI Logs بەتى</span> دىن كۆرۈشكە بولىدۇ. بۇ تەجرىبىدە، ئاگېنتقا قىلىنغان بارلىق خىزمەتلەر ئاپتوماتىك تۈردە خىزمەت ئېقىمى (workflow) سۈپىتىدە يىغىلىپ، <span className="font-bold">Traces تابى</span> دا كۆرسىتىلگەن. شۇنداقلا، خىزمەت تارىخىنى <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">result.history</code> خاسلىقىدىن تېخىمۇ تەپسىلىي كۆرۈشكە بولىدۇ:
          </p>
          
          <div className="bg-slate-800 text-amber-300 rounded-lg p-3 font-mono text-sm mt-4">
            console.dir(result.history, {'{'} depth: null {'}'});
          </div>
        </div>
        
        {/* Python Simple Sample */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-emerald-600 text-2xl ml-2">🔷</span>
            Python دىكى ئاددىي مىسال
          </h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`from dotenv import load_dotenv
from agents import Agent, Runner

load_dotenv()

# Agent نىڭ بەلگىلەنمىسى
agent = Agent(
    name="Guide-City-Agent",
    instructions=(
        "يابونىيە شەھەر ۋە قىيامەت يېرى ئاتىغا دائىر سوئاللار."
        "ئىشلەتكۈچىنىڭ سوئالىغا ئەڭ ماس كېلگەن شەھەر ياكى قىيامەت يېرى ئاتىنى قىسقىچە جاۋاب بېرىڭ."
    ),
    model="gpt-5-nano",
)

# ئىجرا (JS: run(agent, '...') غا ماس كېلىدۇ)
result = Runner.run_sync(
    agent,
    input="توكيو دىزنىي لاندى قايسى شەھەردە؟"
)

# چىقىرىش
print(result.final_output)   # JS: result.finalOutput`}</pre>
          </div>
          
          <p className="text-slate-700 mb-4">
            بۇ سكرىپتنى تۆۋەندىكىدەك ئىجرا قىلىڭ:
          </p>
          
          <div className="bg-slate-800 text-green-400 rounded-lg p-3 font-mono text-sm mb-6">
            uv run agent_sample01.py
          </div>
          
          <p className="text-slate-700 mb-4">
            Python دىكى قوللانما ئۇسۇلى ھەمدەمەنەكەينىكىدەك. قوللىنىدىغان كىلاس ۋە فۇنكسىيىلەر:
          </p>
          <ul className="list-disc pr-6 space-y-2 text-slate-700 mb-6">
            <li><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">Agent</code> كىلاسسى</li>
            <li><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">Runner.run_sync</code> فۇنكسىيىسى</li>
            <li><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">RunResult</code> كىلاسسى</li>
          </ul>
          
          <p className="text-slate-700 mb-4">
            2026-يىلى 2-ئاينىڭ 3-كۈنىگىچە، <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">RunResult</code> دىن <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">state</code> نى تېپىش ئۇسۇلى يوق، شۇڭا تۆۋەندىكىدەك <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">raw_response</code> ئارقىلىق <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">ModelResponse</code> نى تېپىپ ئىشلىتىش ئەھۋالىنى تېپىڭ:
          </p>
          
          <div className="bg-slate-800 text-amber-300 rounded-lg p-3 font-mono text-sm mb-6">
            <pre className="whitespace-pre-wrap break-words">{`# ئىشلىتىش مىقدارى (JS: result.state.usage غا يېقىن)
if result.raw_responses:
    print(result.raw_responses[-1].usage)
    print(result.raw_responses)`}</pre>
          </div>
          
          <p className="text-slate-700">
            شۇنداقلا، ئاگېنت قانداق خىزمەت قىلغانلىقىنىڭ تارىخىنى <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">RunResult</code> نىڭ <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">new_items</code> خاسلىقىدىن تېپىڭ:
          </p>
          
          <div className="bg-slate-800 text-amber-300 rounded-lg p-3 font-mono text-sm mt-4">
            <pre className="whitespace-pre-wrap break-words">{`for item in result.new_items:
    print(item)`}</pre>
          </div>
        </div>
      </section>

      {/* Multi-step Query Section */}
      <section className="mb-12 bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 border-2 border-amber-300 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 text-amber-200 opacity-40">
          <div className="text-8xl">☪</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right relative z-10">كۆپ قەدەملىك سوئال مىسالى</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed relative z-10">
          بۇ يەردە بىز TypeScript ۋە Python دا كۆپ قەدەملىك سوئال مىسالىنى كۆرسىتىمىز. بۇ مىسالدا تۆۋەندىكى سوئاللارنى بېرىمىز:
        </p>
        
        <ul className="list-disc pr-6 space-y-2 text-slate-800 mb-8 relative z-10">
          <li>بىرىنچى سوئالدا شەھەر ياكى قىيامەت يېرى ئاتىنى تېپىش (مەسىلەن: «توكيو دىزنىي لاندى قايسى شەھەردە؟»)</li>
          <li>بىرىنچى جاۋابتىكى شەھەرنىڭ قايسى ۋىلايەتكە تەۋە بولۇشى ۋە نوپۇسىنى سوئال قىلىش</li>
        </ul>
        
        {/* TypeScript Multi-step */}
        <div className="bg-white rounded-2xl p-7 shadow-md mb-8 relative z-10 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-sky-600 text-2xl ml-2">🔷</span>
            TypeScript دىكى كۆپ قەدەملىك سوئال مىسالى
          </h3>
          
          <p className="text-slate-700 mb-4">
            كۆپ قەدەملىك سوئال بېرىش ھالىتىدە، ئالدىنقى جاۋاب نەتىجىسىنى كىرگۈزۈش سۈپىتىدە بېرىش ياكى سېسسىيە (session) ئارقىلىق ئالدىنقى سۆھبەت مەزمۇنىنى ساقلاش ئۇسۇلى بار.
          </p>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`import { Agent, run } from "@openai/agents";
import dotenv from "dotenv";

dotenv.config();

const agent1 = new Agent({
  name: 'Guide-City-Agent',
  instructions: 'يابونىيە شەھەر ۋە قىيامەت يېرى ئاتىغا دائىر سوئاللار. ئىشلەتكۈچىنىڭ سوئالىغا ئەڭ ماس كېلگەن شەھەر ياكى قىيامەت يېرى ئاتىنى قىسقىچە جاۋاب بېرىڭ.',
  model: "gpt-5-nano"
});
const result1 = await run(agent1, 'توكيو دىزنىي لاندى قايسى شەھەردە؟');
console.log('بىرىنچى سوئال:', result1.finalOutput);

const agent2 = new Agent({
  name: 'Guide-City-Detail-Agent',
  instructions: 'بەلگىلەنگەن شەھەرنىڭ قايسى ۋىلايەتكە تەۋە بولۇشى ۋە ھازىرقى بىلىنگەن نوپۇسىنى قىسقىچە جاۋاب بېرىڭ',
  model: "gpt-5-nano"
});
const result2 = await run(agent2, result1.finalOutput as string);
console.log('كېيىنكى سوئال:', result2.finalOutput);`}</pre>
          </div>
          
          <p className="text-slate-700 mb-4">
            چىقىرىش مىسالى:
          </p>
          
          <div className="bg-slate-800 text-green-400 rounded-lg p-3 font-mono text-sm mb-6">
            <pre className="whitespace-pre-wrap break-words">{`بىرىنچى سوئال: ئۇراياسۇ شەھىرى
كېيىنكى سوئال: ئۇراياسۇ شەھىرى چىبا ۋىلايىتىگە تەۋە. نوپۇسى تەخمىنەن 170 مىڭ كىشى (ئەڭ يېڭى باھالاش قىممىتى)`}</pre>
          </div>
          
          <p className="text-slate-700 mb-6">
            بۇ مىسالدا، ئىككىنچى قېتىم ئاگېنتنى ئىجرا قىلغاندا بىرىنچى قېتىم نەتىجىسىنى ئاچىقچە بېرىپ جاۋاب تاپىمىز.
          </p>
          
          <p className="text-slate-700 mb-4">
            يەنە بىر تەرەپتىن، سېسسىيە (session) خىزمىتىنى قوللىنىش ئارقىلىق، ئالدىنقى سۆھبەتنى قوللىنىپ جاۋاب تۈزۈشكە بولىدۇ:
          </p>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`import { Agent, run, OpenAIConversationsSession } from "@openai/agents";
import dotenv from "dotenv";

dotenv.config();

const agent1 = new Agent({
  name: 'Guide-City-Agent',
  instructions: 'يابونىيە شەھەر ۋە قىيامەت يېرى ئاتىغا دائىر سوئاللار. ئىشلەتكۈچىنىڭ سوئالىغا ئەڭ ماس كېلگەن شەھەر ياكى قىيامەت يېرى ئاتىنى قىسقىچە جاۋاب بېرىڭ.',
  model: "gpt-5-nano"
});
const session = new OpenAIConversationsSession();
const result1 = await run(agent1, 'توكيو دىزنىي لاندى قايسى شەھەردە؟', {
  session
});
console.log('بىرىنچى سوئال:', result1.finalOutput);

const agent2 = new Agent({
  name: 'Guide-City-Detail-Agent',
  instructions: 'بەلگىلەنگەن شەھەرنىڭ قايسى ۋىلايەتكە تەۋە بولۇشى ۋە ھازىرقى بىلىنگەن نوپۇسىنى قىسقىچە جاۋاب بېرىڭ',
  model: "gpt-5-nano"
});
const result2 = await run(agent2, "ئالدىنقى جاۋابتىكى شەھەر ياكى قىيامەت يېرى توغرىسىدا جاۋاب بېرىڭ", {
  session
});
console.log('كېيىنكى سوئال:', result2.finalOutput);`}</pre>
          </div>
          
          <p className="text-slate-700 mb-4">
            بۇ مىسالدا، ئىككىنچى قېتىم سوئال بېرىشتە بىرىنچى قېتىم جاۋابىنى ئاچىقچە قوللانمىغان بولسىمۇ، بىرىنچى ۋە ئىككىنچى قېتىمدا ئوخشاش سېسسىيەنى قوللانغان.
          </p>
          
          <p className="text-slate-700 mb-6">
            بۇنىڭ ئارقىلىق، ئىككىنچى قېتىم سوئال بېرىشتە ئالدىنقى سۆھبەت تارىخىنى قوللانغىلى بولىدۇ.
          </p>
          
          <p className="text-slate-700 mb-4">
            بۇ سۆھبەت تارىخىنى تۆۋەندىكىدەك دائىم ساقلاش مۇمكىن:
          </p>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`import fs from "fs";
/// قىسقارتىلغان
const session = new OpenAIConversationsSession();
const result1 = await run(agent1, 'توكيو دىزنىي لاندى قايسى شەھەردە؟', {
  session
});
console.log('بىرىنچى سوئال:', result1.finalOutput);

// دائىم ساقلاش
const snapshot = await session.getItems();
fs.writeFileSync(
  "session.json",
  JSON.stringify(snapshot, null, 2),
  "utf-8"
);
/// قىسقارتىلغان`}</pre>
          </div>
          
          <p className="text-slate-700">
            دائىم ساقلانغان سۆھبەت تارىخىنى تۆۋەندىكىدەك قايتا تىزىپ چىقىش مۇمكىن:
          </p>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mt-4">
            <pre className="whitespace-pre-wrap break-words">{`const items = JSON.parse(fs.readFileSync("session.json", "utf-8"));

const session = new OpenAIConversationsSession();
await session.addItems(items)`}</pre>
          </div>
        </div>
        
        {/* Python Multi-step */}
        <div className="bg-white rounded-2xl p-7 shadow-md relative z-10 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-emerald-600 text-2xl ml-2">🔷</span>
            Python دىكى كۆپ قەدەملىك سوئال مىسالى (سېسسىيە قوللانغان)
          </h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`from agents import Agent, Runner, OpenAIConversationsSession
from dotenv import load_dotenv

load_dotenv()

# --- Agent 1 -------------------------------------------------

agent1 = Agent(
    name="Guide-City-Agent",
    instructions=(
        "يابونىيە شەھەر ۋە قىيامەت يېرى ئاتىغا دائىر سوئاللار."
        "ئىشلەتكۈچىنىڭ سوئالىغا ئەڭ ماس كېلگەن شەھەر ياكى قىيامەت يېرى ئاتىنى قىسقىچە جاۋاب بېرىڭ."
    ),
    model="gpt-5-nano",
)

# سېسسىيە قۇرۇش
session = OpenAIConversationsSession()

# 1-قېتىملىق run
result1 = Runner.run_sync(
    agent1,
    "توكيو دىزنىي لاندى قايسى شەھەردە؟",
    session=session,
)

print("بىرىنچى سوئال:", result1.final_output)

# --- Agent 2 -------------------------------------------------

agent2 = Agent(
    name="Guide-City-Detail-Agent",
    instructions=(
        "بەلگىلەنگەن شەھەرنىڭ قايسى ۋىلايەتكە تەۋە بولۇشى ۋە"
        "ھازىرقى بىلىنگەن نوپۇسىنى قىسقىچە جاۋاب بېرىڭ."
    ),
    model="gpt-5-nano",
)

# 2-قېتىملىق run (ئوخشاش session نى بېرىڭ)
result2 = Runner.run_sync(
    agent2,
    "ئالدىنقى جاۋابتىكى شەھەر ياكى قىيامەت يېرى توغرىسىدا جاۋاب بېرىڭ",
    session=session,
)

print("كېيىنكى سوئال:", result2.final_output)`}</pre>
          </div>
          
          <p className="text-slate-700 mt-6">
            Python دا مۇشۇنداقلا <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">OpenAIConversationsSession</code> نى قوللىنىپ سېسسىيەنى باشقۇرالايمىز. سېسسىيىنىڭ دائىم ساقلىنىشى ناھايىتى مۇرەككەپ بولغاچقا، تۆۋەندىكىدەك <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">asyncio</code> كىتابخانىسىنى قوللىنىش كېرەك:
          </p>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mt-4">
            <pre className="whitespace-pre-wrap break-words">{`# سېسسىيىنىڭ دائىم ساقلىنىشى
import asyncio
# قىسقارتىلغان
async def dump_items():
    items = await session.get_items()
    with open("session_items.json", "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=2)

asyncio.run(dump_items())

# سېسسىيىنى قايتا تىزىش
async def restore_session():
    # سېسسىيە قۇرۇش
    session = OpenAIConversationsSession()

    with open("session_items.json", "r", encoding="utf-8") as f:
        items = json.load(f)

    # ★ بۇ يەردە await
    await session.add_items(items)

    return session
session = asyncio.run(restore_session())`}</pre>
          </div>
        </div>
      </section>

      {/* Handoff Section */}
      <section className="mb-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-violet-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right">Handoff (باشقا ئاگېنتقا تاپشۇرۇش) مىسالى</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          Handoff نى قوللىنىش ئارقىلىق، سۆھبەتنىڭ بىر قىسمىنى باشقا ئاگېنتقا تاپشۇرۇش مۇمكىن. تۆۋەندىكى مىسالدا، ئىشلەتكۈچىنىڭ سوئالىنى «مەتېماتىكا ۋە ھېسابلاش ئاگېنتى» ياكى «سىياھەت ۋە تۇرىستىك ئاگېنتى» غا تارقىتىش مىسالىنى كۆرسىتىمىز.
        </p>
        
        {/* TypeScript Handoff */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-sky-600 text-2xl ml-2">🔷</span>
            TypeScript دىكى Handoff مىسالى
          </h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`import { Agent, run, handoff } from "@openai/agents";
import { RECOMMENDED_PROMPT_PREFIX } from '@openai/agents-core/extensions';
import dotenv from "dotenv";

dotenv.config();

// 1) مۇتەخەسسىس: مەتېماتىكا
const mathAgent = new Agent({
  name: "Math agent",
  model: "gpt-5-nano",
  instructions: \`\${RECOMMENDED_PROMPT_PREFIX}
سىز مەتېماتىكا مۇتەخەسسىسىسىز. ھېسابلاش، سان-مۇناسىۋەت ۋە مەنتىقىي مەسىلىلەرنى پەقەت قىسقىچە جاۋاب بېرىڭ.\`,
});

// 2) مۇتەخەسسىس: سىياھەت
const travelAgent = new Agent({
  name: "Travel agent",
  model: "gpt-5-nano",
  instructions: \`\${RECOMMENDED_PROMPT_PREFIX}
سىز سىياھەت مۇتەخەسسىسىسىز. سىياھەت رېژىسى، دىققەت قىلىش زۆرۈر بولغان نۇقتىلار، تەۋسىيەلەرنى قىسقىچە جاۋاب بېرىڭ.\`,
});

// 3) قوبۇلخانا (تىزىملىك تەكشۈرۈش)
const toMath = handoff(mathAgent);
const toTravel = handoff(travelAgent);

const triageAgent = Agent.create({
  name: "Triage agent",
  model: "gpt-5-nano",
  instructions: \`
سىز «تارقىتىش مۇتەخەسسىسى» سىز. تەبىئىي تىلدا جاۋاب بېرىش مۇمكىن ئەمەس.
مۇقىم تۆۋەندىكى ئىككى قورالنىڭ بىرىنى پەقەت بىر قېتىم چاقىرىپ تاماملاڭ.

- مەتېماتىكا، ھېسابلاشقا ئوخشاش سوئال → Math agent
- سىياھەت، تۇرىستىكقا ئوخشاش سوئال → Travel agent

（چەكلەنگەن）«...غا تاپشۇرۇلدى»، «كۈتۈڭ» قاتارلىق تېكىست چىقىرىش
（زۆرۈر）قورال چاقىرىشىلا
\`,
  handoffs: [toMath, toTravel],
});

// ئىجرا مىسالى 1: مەتېماتىكا تەرەپ تارقىتىش
const r1 = await run(triageAgent, "17*23 قانچە؟");
console.log("جاۋاب 1:", r1.lastAgent?.name, r1.finalOutput);

// ئىجرا مىسالى 2: سىياھەت تەرەپ تارقىتىش
const r2 = await run(triageAgent, "كېلەركى ھەپتە، كىيوتودا كۈندۈزۈك سىياھەت قىلساق بولامدۇ؟");
console.log("جاۋاب 2:", r2.lastAgent?.name, r2.finalOutput);`}</pre>
          </div>
          
          <p className="text-slate-700 mb-4">
            چىقىرىش نەتىجىسى:
          </p>
          
          <div className="bg-slate-800 text-green-400 rounded-lg p-3 font-mono text-sm mb-6">
            <pre className="whitespace-pre-wrap break-words">{`جاۋاب 1: Math agent ھېسابلاش: 17 * 23 = 391.
جاۋاب 2: Travel agent كىيوتو كۈندۈزۈك سىياھەت رېژىسىنىڭ مىسالى. يۆتكىلىشنى يىغىن پويىزى ۋە شەھەرلەرئارا ئاپتوبۇس مەركىزىگە سېلىپ قارىتىلىدۇ.

- 08:30 توكيو قوزغىتىش (يىڭى سۇپىر تېز يۈرۈش پويىزى ياكى تېز يۈرۈش پويىزى بىلەن كىيوتوغىچە تەخمىنەن 2:15~2:40)
- 11:00 كىيوتو تېمىپېل، سان-نېن زاكا، ني-نېن زاكا ئەتراپى
  - كىيوتو تېمىپېلنىڭ ئىچىدە ۋە گۈللەر ياكى قىزغىن يېپىقلار مەۋسىمىدە زىيارەت قىلىشنىڭ توشۇق ۋاقتىنى تانلاش تەۋسىيە قىلىنىدۇ
- 12:30 كىيوتو تېمىپېل ئەتراپىدا تۈش تامى
  - كىيوتو ئۇسلۇبى: كىيوتو تاماق تاختىسى، يۇ تۇپۇ، بالىق تامىقى قاتارلىقلار
- 14:00 ياساكا شىنتۇ، گىئون چېگرىسىنى سىيىرىش
  - كاموگاۋا يېنى بويىچە جەنۇبىي تەرەپكە يۆتكىلىپ شىيجۆ چېگرىسىگە بارىش
- 16:00 كىنكاكۇجى ياكى ئاراشىياما رايونىغا يۆتكىلىش
  - كىنكاكۇجى كىلاسسىك، ئاراشىياما توشۇق كۆپۈر، بامبۇ توكايى يۈزىگە چىقىدۇ
- 18:30 كىيوتو بېكىتى ئەتراپىدا كەچ تامى
  - گىئون، كاۋاراماتچىدا كىيوتو تامىقى ياكى يارىتىلغان ياپون تامىقىنى زىيارەت قىلىش
- 20:00 يىڭى سۇپىر تېز يۈرۈش پويىزى ياكى تېز يۈرۈش پويىزى بىلەن توكيوغىچە قايتىش

ئاساسىي نۇقتىلار
- يۆتكىلىش توشۇقنىڭ توشۇق ۋاقتىنى تانلاپ، ئەتىگىدە تېز ھەرىكەت قىلىش. توشۇقنىڭ توشۇق ۋاقتى كىنكاكۇجى، كىيوتو تېمىپېل كىچىك توشۇق ۋاقتىدا زىيارەت قىلىش تەۋسىيە قىلىنىدۇ.
- مەۋسىمگە قاراپ تاللاش: بەھاردا فىلسۇپا يولى، كۈزدە قىزغىن يېپىقلار بىلەن ئاراشىياما، تۆنگۈز تېمىپېل.
- كىيوتودا يۈرۈشكە قۇلاي قويۇق تاقىتىش. يۈكىنى يېنىك تۇتۇش.

ئەگەر زۆرۈر بولسا، سىياھەت رېژىسىنىڭ تىلەكى (تاماق تالانتى، يۈرۈشچىنىڭ يېشى، قىزىقىش دائىرىسى) نى بىلدۈرۈڭ. ئەڭ ياخشى رېژىمنى تەييارلايمىز.`}</pre>
          </div>
          
          <p className="text-slate-700">
            <span className="font-bold">ئاساسىي نۇقتىلار:</span>
          </p>
          <ul className="list-disc pr-6 space-y-2 text-slate-700 mt-3">
            <li><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">Agent</code> دىن <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">HandOff</code> ئوبيېكتىنى قۇرۇپ، <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">Agent.create</code> نى قوللىنىپ ھەندوفنى قوشقان <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">Agent</code> نى قۇرۇڭ.</li>
            <li>ئىجرا نەتىجىسىنى تەكشۈرگەندە، <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">r1.lastAgent?.name</code> ياكى <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">r2.lastAgent?.name</code> نىڭ كۆرسىتىشىدىن ئاخىرقى قېتىم ئىجرا قىلغان ئاگېنتنى تەكشۈرۈشكە بولىدۇ.</li>
            <li>بۇ تەجرىبىدە، تىرىياج-ئاگېنت جاۋاب 1 دە ماتېماتىكا ئاگېنتى، جاۋاب 2 دە سىياھەت ئاگېنتى دېگەن مۇۋاپىق ئاگېنتنى ئىشلىتىپ قالغانلىقىنى تەكشۈرۈشكە بولىدۇ.</li>
            <li>ئاگېنتنىڭ كۆرسىتىشىدە <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">RECOMMENDED_PROMPT_PREFIX</code> بەلگىلەنگەن، بۇنىڭ بىلەن سۈنئىي تىل مودېلىنىڭ مۇقىملىقىنى يۇقىرى قىلىدۇ.</li>
          </ul>
        </div>
        
        {/* Python Handoff */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-emerald-600 text-2xl ml-2">🔷</span>
            Python دىكى Handoff مىسالى
          </h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`from dotenv import load_dotenv
from agents import Agent, Runner, handoff
from agents.extensions.handoff_prompt import RECOMMENDED_PROMPT_PREFIX

load_dotenv()

# 1) مۇتەخەسسىس: مەتېماتىكا
math_agent = Agent(
    name="Math agent",
    model="gpt-5-nano",
    instructions=f"""{RECOMMENDED_PROMPT_PREFIX}
سىز مەتېماتىكا مۇتەخەسسىسىسىز. ھېسابلاش، سان-مۇناسىۋەت ۋە مەنتىقىي مەسىلىلەرنى پەقەت قىسقىچە جاۋاب بېرىڭ.""",
)

# 2) مۇتەخەسسىس: سىياھەت
travel_agent = Agent(
    name="Travel agent",
    model="gpt-5-nano",
    instructions=f"""{RECOMMENDED_PROMPT_PREFIX}
سىز سىياھەت مۇتەخەسسىسىسىز. سىياھەت رېژىسى، دىققەت قىلىش زۆرۈر بولغان نۇقتىلار، تەۋسىيەلەرنى قىسقىچە جاۋاب بېرىڭ.""",
)

# 3) قوبۇلخانا (تىزىملىك تەكشۈرۈش)
to_math = handoff(math_agent)
to_travel = handoff(travel_agent)

triage_agent = Agent(
    name="Triage agent",
    model="gpt-5-nano",
    instructions="""
سىز «تارقىتىش مۇتەخەسسىسى» سىز. تەبىئىي تىلدا جاۋاب بېرىش مۇمكىن ئەمەس.
مۇقىم تۆۋەندىكى ئىككى قورالنىڭ بىرىنى پەقەت بىر قېتىم چاقىرىپ تاماملاڭ.

- مەتېماتىكا، ھېسابلاشقا ئوخشاش سوئال → Math agent
- سىياھەت، تۇرىستىكقا ئوخشاش سوئال → Travel agent

（چەكلەنگەن）«...غا تاپشۇرۇلدى»، «كۈتۈڭ» قاتارلىق تېكىست چىقىرىش
（زۆرۈر）قورال چاقىرىشىلا
""",
    handoffs=[to_math, to_travel],
)

# ئىجرا مىسالى 1: مەتېماتىكا تەرەپ تارقىتىش
r1 = Runner.run_sync(triage_agent, "17*23 قانچە؟")
print("جاۋاب 1:", r1.last_agent.name, r1.final_output)

# ئىجرا مىسالى 2: سىياھەت تەرەپ تارقىتىش
r2 = Runner.run_sync(triage_agent, "كېلەركى ھەپتە، كىيوتودا كۈندۈزۈك سىياھەت قىلساق بولامدۇ؟")
print("جاۋاب 2:", r2.last_agent.name, r2.final_output)`}</pre>
          </div>
        </div>
      </section>

      {/* Tool Calling Section */}
      <section className="mb-12 bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 border-2 border-amber-300 relative overflow-hidden">
        <div className="absolute -bottom-12 -left-12 w-36 h-36 text-rose-200 opacity-30">
          <div className="text-9xl rotate-12">☪</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right relative z-10">قورال (Tool) ئارقىلىق فۇنكسىيە چاقىرىش مىسالى</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed relative z-10">
          ئاگېنتلار قوراللارنى قوللىنىپ سانلىق مەلۇمات تېپىش، سىرتقى API چاقىرىش، كود ئىجرا قىلىش قاتارلىق خىزمەتلەرنى قىلالايدۇ. بۇ يەردە، قورالنى قوللىنىپ ئاددىي مىسال كودنى چاقىرىشنى كۆرسىتىمىز.
        </p>
        
        {/* TypeScript Tool Calling */}
        <div className="bg-white rounded-2xl p-7 shadow-md mb-8 relative z-10 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-sky-600 text-2xl ml-2">🔷</span>
            TypeScript دىكى فۇنكسىيە چاقىرىش مىسالى
          </h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`import { Agent, run, tool } from "@openai/agents";
import { z } from 'zod';
import dotenv from "dotenv";

dotenv.config();

const addTool = tool({
  name: "add",
  description: "ئىككى ساننى قوشۇش",
  parameters: z.object({
    a: z.number(),
    b: z.number()
  }),
  async execute({ a, b }) {
    return a + b;
  }
});

const agent = new Agent({
  name: "calculator-agent",
  instructions: "سىز بىر كالكۇلياتورسز. مۇۋاپىق قورالنى قوللىنىڭ.",
  tools: [addTool],
  modelSettings: { toolChoice: 'required' }, // auto: سۈكۈتتىكى ياكى required: مۇقىم قورالنى چاقىرىش ياكى none: قورالنى ئىشلىتىش ياكى قورال ئاتى
  model: "gpt-5-nano"
});

async function main() {
  const result = await run(agent, "12 بىلەن 30 نى قوشقاندا قانچە بولىدۇ؟" );
  console.log(result.finalOutput);
  console.dir(result.history, { depth: null });
}

main().catch(console.error);`}</pre>
          </div>
          
          <p className="text-slate-700 mb-4">
            <span className="font-bold">چىقىرىش مىسالى:</span>
          </p>
          
          <p className="text-slate-700 mb-6">
            فۇنكسىيە چاقىرىش ھالىتىدە، <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">zod</code> كىتابخانىسىنى قوللىنىپ <span className="font-bold">Zod سكېما</span> نى بەلگىلەش ئارقىلىق قاتتىق تىپ بىلەن پارامېتىرلارنى بەلگىلەشكە بولىدۇ.
          </p>
          
          <ul className="list-disc pr-6 space-y-2 text-slate-700 mb-6">
            <li><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">tool</code> ئوبيېكتىنى قۇرۇپ، فۇنكسىيە بەلگىلەمنى ئۇنىڭغا بېرىڭ.</li>
            <li>بۇ قورال ئوبيېكتىنى <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">Agent</code> ئوبيېكتىغا بېرىش ئارقىلىق ئاگېنتتىن قورالنى قوللانغىلى بولىدۇ.</li>
            <li><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">Agent</code> ئوبيېكتىنىڭ قورالنى ئاپتوماتىك قوللانامدۇ ياكى مەجبۇر قىلىپ قوللانامدۇ، بۇنى <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">modelSettings</code> نىڭ <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">toolChoice</code> خاسلىقى بىلەن تاللاڭ.</li>
          </ul>
          
          <p className="text-slate-700">
            بۇ فۇنكسىيىنىڭ ئىجرا نەتىجىسىنى تەكشۈرگەندە، تارىخ تۆۋەندىكىدەك بولغانلىقىنى تەكشۈرۈشكە بولىدۇ:
          </p>
          <ul className="list-disc pr-6 space-y-2 text-slate-700 mt-3">
            <li>كىرگۈزۈشنى سۈنئىي تىل مودېلى بىلەن تەھلىل قىلىش</li>
            <li><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">add</code> فۇنكسىيىسىنى چاقىرىش</li>
            <li><code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">add</code> فۇنكسىيىسىنىڭ نەتىجىسىنى تېپىش</li>
            <li>فۇنكسىيە نەتىجىسىنى سۈنئىي تىل مودېلى بىلەن تەھلىل قىلىش</li>
          </ul>
          <p className="text-slate-700 mt-3">
            يەنى <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">add</code> فۇنكسىيىسىنىڭ نەتىجىسىنى پەقەت قايتۇرۇپ قالماستىن، فۇنكسىيە نەتىجىسىگە سۈنئىي تىل مودېلى بىلەن تەھلىل قىلىپ، سوئال جاۋابىنى تۈزۈپ چىقىرىدۇ.
          </p>
        </div>
        
        {/* Python Tool Calling */}
        <div className="bg-white rounded-2xl p-7 shadow-md relative z-10 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-emerald-600 text-2xl ml-2">🔷</span>
            Python دىكى فۇنكسىيە چاقىرىش مىسالى
          </h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`from agents import Agent, Runner, function_tool, ModelSettings
from pydantic import BaseModel
import dotenv

dotenv.load_dotenv()

class AddInput(BaseModel):
    a: int
    b: int


@function_tool
def add_tool(args: AddInput) -> int:
    """ئىككى ساننى قوشۇش

    Args:
        args: AddInput كىلاسسى
    """
    return args.a + args.b

agent = Agent(
    name="calculator-agent",
    instructions="سىز بىر كالكۇلياتورسز. مۇۋاپىق قورالنى قوللىنىڭ.",
    tools=[add_tool],
    model="gpt-5-nano",
    model_settings=ModelSettings(
        tool_choice="required"
    )
)

result = Runner.run_sync(
    agent,
    input="12 بىلەن 30 نى قوشقاندا قانچە بولىدۇ؟"
)

# چىقىرىش
print(result.final_output)   # JS: result.finalOutput

# ئارىلىق جەريان (JS: result.history غا يېقىن بولغان نەرسە new_items / raw_responses)
print("new_items:")
for item in result.new_items:
    print(item)`}</pre>
          </div>
          
          <p className="text-slate-700 mt-6">
            Python دا <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">function_tool</code> فۇنكسىيە دېكوراتورى بىلەن فۇنكسىيە قورالىنى تۇنجىلاشقا بولىدۇ.
          </p>
        </div>
      </section>

      {/* Hosted Tools Section */}
      <section className="mb-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-sky-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right">ھۆست قىلىنغان قوراللارنىڭ قوللانما مىسالى</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          OpenAI دا توردا ئىزدەش ياكى OpenAI دا ھۆست قىلىنغان ۋېكتور ساقلىغۇچنى ئىزدەش قاتارلىق، قوشۇلغان قوراللار مەۋجۇت. بۇ يەردە بىز ھۆست قىلىنغان توردا ئىزدەشنى قىلغان ئاگېنتنىڭ مىسالىنى كۆرسىتىمىز.
        </p>
        
        <p className="text-slate-700 mb-6">
          ئادەتتىكى API نى ئىجرا قىلغان ھالدا، تۆۋەندىكىدەك ئىجرا قىلىدۇ:
        </p>
        
        <div className="bg-slate-800 text-green-400 rounded-lg p-3 font-mono text-sm mb-8">
          ئادەتتىكى API دا توردا ئىزدەش قىلىش ئۇسۇلى
        </div>
        
        {/* TypeScript Web Search */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-sky-600 text-2xl ml-2">🔷</span>
            TypeScript دىكى توردا ئىزدەش مىسالى
          </h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`import { Agent, run, webSearchTool } from "@openai/agents";
import dotenv from "dotenv";

dotenv.config();

// مەنبە
// https://github.com/openai/openai-agents-js/blob/main/examples/tools/web-search.ts  
const agent = new Agent({
  name: "web-search ",
  instructions: "سىز توردا ئىزدەپ نەتىجىنى قايتۇرۇشچان ئاگېنتسز. سوئالغا جاۋاب بېرىش ئۈچۈن ئىزدەش قىلىپ، ئىشلەتكۈچىنىڭ جۇغراپھىيىلىق جايىغا ماس كېلگەن نەتىجىنى قىسقىچە جاۋاب بېرىڭ",
  tools: [
    webSearchTool({
      userLocation: { type: 'approximate', city: 'Tokyo' },
    })
  ],
  modelSettings: { toolChoice: 'required' }, // auto: سۈكۈتتىكى ياكى required: مۇقىم قورالنى چاقىرىش ياكى none: قورالنى ئىشلىتىش ياكى قورال ئاتى
  model: "gpt-5-nano"
});

async function main() {
  const result = await run(agent, "ھازىرقى ھاۋارايى ۋە ھارارەت قانداق؟");
  console.log(result.finalOutput);
  console.dir(result.history, { depth: null });
}

main().catch(console.error);`}</pre>
          </div>
          
          <p className="text-slate-700">
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">webSearchTool</code> نى قورال سۈپىتىدە بەلگىلەش ئارقىلىق ھۆست تەرەپتە توردا ئىزدەش مۇمكىن. <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">webSearchTool</code> ئوبيېكتىنىڭ پارامېتىرلىرىنى تەڭشەش ئارقىلىق، <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">filters</code> تاللاشىنى قوللىنىپ زىيارەت قىلىدىغان دومېننى چەكلەشكە بولىدۇ.
          </p>
        </div>
        
        {/* Python Web Search */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-emerald-600 text-2xl ml-2">🔷</span>
            Python دىكى توردا ئىزدەش مىسالى
          </h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`from agents import Agent, Runner, WebSearchTool, ModelSettings
import dotenv

dotenv.load_dotenv()

agent = Agent(
    name="web-search",
    instructions="سىز توردا ئىزدەپ نەتىجىنى قايتۇرۇشچان ئاگېنتسز. سوئالغا جاۋاب بېرىش ئۈچۈن ئىزدەش قىلىپ، ئىشلەتكۈچىنىڭ جۇغراپھىيىلىق جايىغا ماس كېلگەن نەتىجىنى قىسقىچە جاۋاب بېرىڭ",
    tools=[
        WebSearchTool(
            user_location={ "type": "approximate", "city": "Tokyo" }
        )
    ],
    model="gpt-5-nano",
    model_settings=ModelSettings(
        tool_choice="required"
    )
)

result = Runner.run_sync(
    agent,
    input="ھازىرقى ھاۋارايى ۋە ھارارەت قانداق؟"
)

# چىقىرىش
print(result.final_output)`}</pre>
          </div>
          
          <p className="text-slate-700 mt-4">
            ئاگېنتنىڭ قورالىغا <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">WebSearchTool</code> نى قوشۇش ئارقىلىق توردا ئىزدەش مۇمكىن.
          </p>
        </div>
      </section>

      {/* Local Tools Section */}
      <section className="mb-12 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-3xl p-8 border-2 border-violet-300 relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-32 h-32 text-violet-200 opacity-40">
          <div className="text-8xl">☪</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right relative z-10">يەرلىك قوشۇلغان قوراللارنىڭ قوللانما مىسالى</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed relative z-10">
          يەرلىك كومپيۇتېر ئۈچۈن قوشۇلغان قوراللارمۇ تەمىنلەنگەن بولۇپ، گرافىك ئىنتېرفىيسى بىلەن كومپيۇتېر مەشغۇلاتى، شېللنىڭ ئىجرا قىلىشى، پاتچىنى قوللىنىش قاتارلىقلار بار.
        </p>
        
        <div className="bg-rose-50 p-5 rounded-xl border border-rose-300 mb-8 relative z-10">
          <div className="flex items-start">
            <div className="text-rose-600 text-3xl mr-4 mt-1">⚠️</div>
            <div>
              <p className="font-bold text-slate-900">مۇھىم ئەسكەرتۈش:</p>
              <p className="text-slate-700">
                شېللنىڭ ئىجرا قىلىشى ۋە پاتچىنى قوللىنىشىنى قوللايدىغان مودېللار چەكلەنگەن بولغاچقا، قوللانما بىلەن تەكشۈرۈڭ. بۇ يەردە قىلغان شېلل تەجرىبىسىمۇ <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">gpt-5-nano</code> دا قوللانمىغان، شۇڭا <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">gpt-5.2</code> نى قوللاندىق.
              </p>
            </div>
          </div>
        </div>
        
        {/* TypeScript Shell Execution */}
        <div className="bg-white rounded-2xl p-7 shadow-md mb-8 relative z-10 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-sky-600 text-2xl ml-2">🔷</span>
            TypeScript دىكى شېلل ئىجرا قىلىش مىسالى
          </h3>
          
          <p className="text-slate-700 mb-4">
            رەسمىي مىسالدا تۆۋەندىكى بار، شۇڭا تۆۋەندىكىنى قوللانما قىلىپ تۇنجىلاش تەۋسىيە قىلىنىدۇ:
          </p>
          
          <div className="bg-slate-800 text-sky-400 rounded-lg p-3 font-mono text-sm mb-6">
            https://platform.openai.com/docs/guides/tools-shell
          </div>
          
          <p className="text-slate-700 mb-6">
            تۆۋەندىكى يۇقىرىدا بەلگىلەنگەنگە ئاساسەن، يابونچىنىڭ تەرجىمىسى، ۋاقىت چەكلىمىسى ۋە مۇستەسنا مۇئامىلە قىلىشنى چىقىرىپ تاشلىغان. ئىشلىتىشتە رەسمىي مىسالنى قوللانما قىلىڭ.
          </p>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import process from 'node:process';
import {
  Agent,
  run,
  Shell,
  ShellAction,
  ShellResult,
  shellTool,
} from '@openai/agents';
import dotenv from "dotenv";

dotenv.config();

const execAsync = promisify(exec);

// مەنبە:
// https://platform.openai.com/docs/guides/tools-shell  
class LocalShell implements Shell {
  constructor(private readonly cwd: string = process.cwd()) {}

  // كۆپ نەرسە قىسقارتىلغان، ياخشى ئىشلىتىش ئۈچۈن تۆۋەندىكىنى قاراڭ
  // https://raw.githubusercontent.com/openai/openai-agents-js/refs/heads/main/examples/tools/shell.ts  
  async run(action: ShellAction): Promise<ShellResult> {
    console.log('run...', action);
    const output: ShellResult['output'] = await Promise.all(
      action.commands.map(async (command) => {
        const { stdout, stderr } = await execAsync(command, {
          cwd: this.cwd,
          timeout: action.timeoutMs,
          maxBuffer: action.maxOutputLength,
        });

        return {
          command,
          stdout,
          stderr,
          outcome: { type: "exit", exitCode: 0 },
        };
      }),
    );
    console.dir(output, { depth: null });

    return {
      output,
      providerData: { working_directory: this.cwd },
    };
  }
}

async function promptShellApproval(commands: string[]): Promise<boolean> {
  console.log(' تۆۋەندىكى بۇيرۇقلارنى ئىجرا قىلىدۇ: \\n');
  commands.forEach((cmd) => console.log(\`  > \${cmd}\`));
  const { createInterface } = await import('node:readline/promises');
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  try {
    const answer = await rl.question('\\nداۋاملاشتۇرامدۇ؟ [ھ/ي] ');
    const approved = answer.trim().toLowerCase();
    return approved === 'ھ' || approved === 'ھەئە';
  } finally {
    rl.close();
  }
}

async function main() {
  const shell = new LocalShell();

  const agent = new Agent({
    name: 'Shell Assistant',
    model: 'gpt-5.2',
    instructions:
      'شېلل بۇيرۇقىنى ئىجرا قىلىپ رېپوزىتورىيىنى تەكشۈرەلەيسىز. جاۋابنى قىسقىچە تۇتۇڭ، زۆرۈر بولسا بۇيرۇقنىڭ چىقىرىشىنىمۇ قوشۇڭ.',
    tools: [
      shellTool({
        shell,
        // قورالنى ئىجرا قىلىشتىن بۇرۇن جەزملەشتۈرۈش تەلەپ قىلىش
        needsApproval: true,
        onApproval: async (_ctx, approvalItem) => {
          const commands =
            approvalItem.rawItem.type === 'shell_call'
              ? approvalItem.rawItem.action.commands
              : [];
          const approve = await promptShellApproval(commands);
          return { approve };
        },
      }),
    ],
  });

  const result = await run(agent, 'Node.js نىڭ نەشرىيىتىنى كۆرسىتىڭ.');
  console.log(result.finalOutput);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});`}</pre>
          </div>
          
          <p className="text-slate-700 mt-6">
            شېلل قورالىنى قوللانغان ھالدا، <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">Shell</code> ئىنتېرفىيسىنى ئۆزۈڭىز تۇنجىلاشىڭىز كېرەك.
          </p>
          
          <p className="text-slate-700 mt-4">
            شۇنداقلا، يەرلىك شېلل ياكى ھۆججەتنى ئىجرا قىلغاندا، قورالنى ئىجرا قىلىشنىڭ ياخشى يامانلىقى توغرىسىدا ئىنساننىڭ جەزملەشتۈرۈشىنى قوشۇش ياخشى. ئىنسان جەزملەشتۈرۈشىنى قوشۇش ھالىتىدە، <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">shellTool</code> ئوبيېكتىنىڭ <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">needsApproval</code> نى <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">true</code> قىلىپ، <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">onApproval</code> ھادىسىسىگە جەزملەشتۈرۈش جەريانىنى تۇنجىلاڭ.
          </p>
          
          <p className="text-slate-700 mt-4">
            باشقا، ئىنساننىڭ قاتناشىشى توغرىسىدا تۆۋەندىكى قوللانمىنى قاراڭ:
          </p>
          
          <div className="bg-slate-800 text-sky-400 rounded-lg p-3 font-mono text-sm mt-4">
            ئىنساننىڭ قاتناشىشى (HITL)
          </div>
        </div>
        
        {/* Python Shell Execution */}
        <div className="bg-white rounded-2xl p-7 shadow-md relative z-10 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-emerald-600 text-2xl ml-2">🔷</span>
            Python دىكى شېلل ئىجرا قىلىش مىسالى
          </h3>
          
          <div className="bg-rose-50 p-5 rounded-xl border border-rose-300 mb-6">
            <div className="flex items-start">
              <div className="text-rose-600 text-3xl mr-4 mt-1">⚠️</div>
              <div>
                <p className="font-bold text-slate-900">ئەسكەرتۈش:</p>
                <p className="text-slate-700">
                  2026-يىلى 2-ئاينىڭ 3-كۈنى ئورنىتىلغان كىتابخانا بىلەن بۇ مىسال ئىشلىمەيدۇ. بۇ كېلەرچەكى نەشرىيەتتە ئىشلىيالايدۇ.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto">
            <pre className="whitespace-pre-wrap break-words">{`# Python دا شېلل قورالىنى تۇنجىلاش مىسالى ھازىرچە يوق`}</pre>
          </div>
        </div>
      </section>

      {/* MCP Integration Section */}
      <section className="mb-12 bg-white rounded-3xl shadow-xl p-8 border-2 border-amber-200">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right">MCP بىلەن بىرلەشتۈرۈش مىسالى</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          سۈنئىي تىل مودېلى بىلەن سىرتقى قوراللارنى بىرلەشتۈرۈش پروتوكولىغا <span className="font-bold text-amber-700">MCP (Model Context Protocol)</span> بار. OpenAI Agent MCP نى قوللىنىپ سىرتقى قوراللار بىلەن بىرلەشتۈرۈشكە بولىدۇ.
        </p>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed">
          بۇ يەردە بىز <span className="font-bold">Playwright نىڭ MCP سېرۋېرى</span> بىلەن بىرلەشتۈرۈپ كرولىنگ قىلغان مىسالنى كۆرسىتىمىز. بۇ مىسالدا <span className="font-bold">Zenn نىڭ باش بەتىنى</span> ئاچىپ، <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">h2</code> تېگىنىڭ تېكىستىنى تىزىپ چىقىرىش كرولىنگىنى ئىجرا قىلىمىز.
        </p>
        
        {/* TypeScript MCP */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-sky-600 text-2xl ml-2">🔷</span>
            TypeScript دىكى Playwright MCP بىلەن بىرلەشتۈرۈش مىسالى
          </h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`import { Agent, run, MCPServerStdio } from "@openai/agents";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  // Playwright MCP (stdio) نى npx بىلەن قوزغىتىش
  const playwrightMcp = new MCPServerStdio({
    name: "playwright-mcp",
    // -y npx نىڭ جەزملەشتۈرۈش پروگراممىسىنى چىقىرىپ تاشلاش
    // @playwright/mcp مايكروسوفتىنىڭ Playwright MCP سېرۋېرى
    fullCommand: "npx -y @playwright/mcp@latest",
    // زۆرۈر بولسا مۇھىت ئۆزگەرگۈچىلىرىنىمۇ بېرىشكە بولىدۇ
    // env: { ...process.env, PLAYWRIGHT_BROWSERS_PATH: "0" },
    cacheToolsList: true,
  });

  await playwrightMcp.connect();

  try {
    const agent = new Agent({
      name: "zenn-h2-lister",
      // مودېلنى مۇۋاپىق تاللاڭ. قورال چاقىرىشى زۆرۈر بولغاچقا، toolChoice نى required قىلىش مۇۋاپىق
      model: "gpt-5-nano",
      modelSettings: { toolChoice: "required" },
      mcpServers: [playwrightMcp],
      instructions: [
        "سىز براوزېرنىڭ ئاپتوماتىك مەشغۇلات ئاگېنتىسز.",
        "Playwright MCP نىلا قوللىنىڭ.",
        "ۋەزىپە: ",
        "  1. ئىشلەتكۈچىدىن كىرگۈزۈلگەن URL نى براوزېردا ئاچىڭ",
        "  2. بارلىق بەتلەردىكى <h2> تېكىستىنى تىزىپ چىقىرىڭ.",
        "     ئەگەر h2 قۇرۇق تېكىست بولسا، بۇنىڭغا كىرمەيدۇ.",
        "  3. نەتىجىنى تېكىست قاتارلىرىنىڭ جەدۋىلى سۈپىتىدە JSON دا قايتۇرۇڭ. شەرھ قوشۇش زۆرۈر ئەمەس",
        "مۇقىم بولۇش: ",
        "  - چىقىرىشتىن بۇرۇن بەتنىڭ يۈكلەشى تامام بولغانلىقىنى ساقلاڭ.",
      ].join("\\n"),
    });

    const result = await run(agent, "https://zenn.dev/  ");
    console.log(result.finalOutput);
    console.dir(result.history, { depth: null });

  } finally {
    await playwrightMcp.close();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});`}</pre>
          </div>
          
          <p className="text-slate-700 mt-4">
            بۇ مىسالنى ئىجرا قىلغاندا براوزېر قوزغىتىلىپ كرولىنگ ئىجرا قىلىنىدۇ.
          </p>
        </div>
        
        {/* Python MCP */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-emerald-600 text-2xl ml-2">🔷</span>
            Python دىكى Playwright MCP بىلەن بىرلەشتۈرۈش مىسالى
          </h3>
          
          <p className="text-slate-700 mb-4">
            Python ئۈچۈن Playwright MCP سېرۋېرى مەۋجۇت ئەمەس، شۇڭا <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">node</code> بىلەن ئورنىتىلغان <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">playwright-mcp</code> نى قوللانىمىز:
          </p>
          
          <div className="bg-slate-800 text-green-400 rounded-lg p-3 font-mono text-sm mb-6">
            npx -y @playwright/mcp@latest
          </div>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`import asyncio
import os

from dotenv import load_dotenv

from agents import Agent, Runner
from agents.mcp import MCPServerStdio
from agents.model_settings import ModelSettings

load_dotenv()

INSTRUCTIONS = """
سىز براوزېرنىڭ ئاپتوماتىك مەشغۇلات ئاگېنتىسز.
Playwright MCP نىلا قوللىنىڭ.
ۋەزىپە: 
  1. ئىشلەتكۈچىدىن كىرگۈزۈلگەن URL نى براوزېردا ئاچىڭ
  2. بارلىق بەتلەردىكى <h2> تېكىستىنى تىزىپ چىقىرىڭ.
     ئەگەر h2 قۇرۇق تېكىست بولسا، بۇنىڭغا كىرمەيدۇ.
  3. نەتىجىنى تېكىست قاتارلىرىنىڭ جەدۋىلى سۈپىتىدە JSON دا قايتۇرۇڭ. شەرھ قوشۇش زۆرۈر ئەمەس
مۇقىم بولۇش:
  - چىقىرىشتىن بۇرۇن بەتنىڭ يۈكلەشى تامام بولغانلىقىنى ساقلاڭ.
"""

async def main() -> None:
    # Playwright MCP (stdio) نى npx بىلەن قوزغىتىش
    # TS: fullCommand: "npx -y @playwright/mcp@latest"
    async with MCPServerStdio(
        name="playwright-mcp",
        params={
            "command": "npx",
            "args": ["-y", "@playwright/mcp@latest"],
            # زۆرۈر بولسا مۇھىت ئۆزگەرگۈچىلىرىنىمۇ بېرىشكە بولىدۇ (TS نىڭ env: { ...process.env, ... } غا ماس كېلىدۇ)
            "env": dict(os.environ),
            # "cwd": "/path/to/working/dir",  # زۆرۈر بولسا
        },
        cache_tools_list=True,
        client_session_timeout_seconds=60,
        max_retry_attempts=2,
        retry_backoff_seconds_base=1.0,
    ) as server:
        agent = Agent(
            name="zenn-h2-lister",
            model="gpt-5-nano",
            model_settings=ModelSettings(tool_choice="required"),
            mcp_servers=[server],
            instructions=INSTRUCTIONS,
        )

        url = "https://zenn.dev/  "
        result = await Runner.run(agent, url)

        # TS: console.log(result.finalOutput)
        # Python: result.final_output
        print(result.final_output)


if __name__ == "__main__":
    asyncio.run(main())`}</pre>
          </div>
          
          <p className="text-slate-700 mt-6">
            <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">MCPServerStdio</code> سىنخرون كونتېكىست مېنىجېر (<code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">with MCPServerStdio()</code>) نى قوللىمايدۇ، شۇڭا بۇ يەردە ناھايىتى مۇرەككەپ جەريان بىلەن تۇنجىلاندى. ئاساسىي ئېقىم ھەمدەمەنەكەينىكىدەك تۇنجىلانغان. لېكىن، Python دا سۈكۈتتىكى تەڭشەم دېگەندە سېسسىيە ۋاقتى چەكلىمىسى بىلەن تامام بولىدۇ، شۇڭا <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">client_session_timeout_seconds</code> نى قوللىنىپ MCP سېرۋېر سېسسىيىسىنىڭ ۋاقتى چەكلىمىسىنى تەڭشەش كېرەك.
          </p>
        </div>
      </section>

      {/* Guardrails Section */}
      <section className="mb-12 bg-gradient-to-br from-rose-50 to-amber-50 rounded-3xl p-8 border-2 border-rose-300 relative overflow-hidden">
        <div className="absolute -bottom-12 -right-12 w-40 h-40 text-amber-200 opacity-30">
          <div className="text-9xl rotate-12">☪</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right relative z-10">گاردرېيل (قۇرال چەكلىمىسى) مىسالى</h2>
        
        <p className="text-lg text-slate-800 mb-6 leading-relaxed relative z-10">
          گاردرېيلنى قوللىنىش ئارقىلىق ئىشلەتكۈچى كىرگۈزۈشى ياكى ئاگېنت چىقىرىشىغا تەكشۈرۈش ياكى تەستىقلار قىلىش مۇمكىن. گاردرېيلنى <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">Agent</code> ياكى <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">tool</code> غا تەڭشەشكە بولىدۇ. تۆۋەندىكى مىسالدا بىز تۆۋەندىكى گاردرېىللارنى قوشىمىز:
        </p>
        
        <ul className="list-disc pr-6 space-y-2 text-slate-800 mb-8 relative z-10">
          <li>قوشۇش قورالىنىڭ كىرگۈزۈشى بولغان <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">a, b</code> 10 دىن كىچىك بولۇشى كېرەك</li>
          <li>قوشۇش قورالىنىڭ چىقىرىشى 10 دىن كىچىك سان بولۇشى كېرەك</li>
          <li>ئاگېنتنىڭ كىرگۈزۈشى ھېسابلاش مەسىلىسىگە دائىر بولۇشى كېرەك</li>
        </ul>
        
        {/* TypeScript Guardrails */}
        <div className="bg-white rounded-2xl p-7 shadow-md mb-8 relative z-10 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-sky-600 text-2xl ml-2">🔷</span>
            TypeScript دىكى گاردرېيل مىسالى
          </h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`import {
  Agent,
  run,
  tool,
  InputGuardrail,
  ToolGuardrailFunctionOutputFactory,
  defineToolInputGuardrail,
  defineToolOutputGuardrail
} from "@openai/agents";
import { z } from 'zod';
import dotenv from "dotenv";

dotenv.config();

const addParameterType = z.object({
  a: z.number(),
  b: z.number()
});

const guardrailAgent = new Agent({
  name: 'Guardrail check',
  instructions: 'بۇ سوئال ھېسابلاش مەسىلىسىگە دائىر سوئال بولامدۇقىنى تەكشۈرۈڭ.',
  outputType: z.object({
    isMathHomework: z.boolean(),
    reasoning: z.string(),
  }),
});

const mathGuardrail: InputGuardrail = {
  name: 'Math Homework Guardrail',
  runInParallel: false,
  execute: async ({ input, context }) => {
    const result = await run(guardrailAgent, input, { context });
    return {
      outputInfo: result.finalOutput,
      tripwireTriggered: result.finalOutput?.isMathHomework === false,
    };
  },
};
// كىرگۈزۈش گاردرېىلى: a ياكى b 10 دىن چوڭ بولسا رەت قىلىش
const inputValueGuardrailBlock = defineToolInputGuardrail({
  name: 'inputValueGuardrailBlock',
  run: async ({ toolCall }) => {
    console.log('inputValueGuardrailBlock چاقىرىلدى:', toolCall);
    const args = JSON.parse(toolCall.arguments);
    if (args.a >= 10 || args.b >= 10) {
      return ToolGuardrailFunctionOutputFactory.rejectContent(
        \`\${args.a} ياكى \${args.b} 10 دىن چوڭ.\`,
      );
    }
    return ToolGuardrailFunctionOutputFactory.allow();
  },
});
// چىقىرىش گاردرېىلى: نەتىجە سان بولمىسا رەت قىلىش
function isNumericStrict(value: string): boolean {
  if (value.trim() === "") return false;
  const n = Number(value);
  return Number.isFinite(n);
}
const outputValueGuardrailBlock = defineToolOutputGuardrail({
  name: 'outputValueGuardrailBlock',
  run: async ({ output }) => {
    console.log('outputValueGuardrailBlock چاقىرىلدى:', output);
    const text = String(output ?? '');
    if (isNumericStrict(text)) {
      const v = Number(text);
      if (v < 10) {
        return ToolGuardrailFunctionOutputFactory.allow();
      } else {
        return ToolGuardrailFunctionOutputFactory.rejectContent(
          'چىقىرىش بەك چوڭ.',
        );
      }
    } else {
      return ToolGuardrailFunctionOutputFactory.rejectContent(
        'چىقىرىش سان بولمايدۇ.',
      );
    }
  },
});
const addTool = tool({
  name: "add",
  description: "ئىككى ساننى قوشۇش",
  parameters: addParameterType,
  inputGuardrails: [inputValueGuardrailBlock],
  outputGuardrails: [outputValueGuardrailBlock],
  async execute({ a, b }) {
    console.log('add قورالى چاقىرىلدى:', { a, b });
    return a + b;
  }
});

const agent = new Agent({
  name: "calculator-agent",
  instructions: "سىز بىر كالكۇلياتورسز. مۇۋاپىق قورالنى قوللىنىپ ھېسابلاڭ. قورالدىن نەتىجە تېپىلمىسا سەۋەبىنى يازىپ جاۋاب بېرەلمەيدىغانلىقىنى قىسقىچە جاۋاب بېرىڭ. سىزنىڭ ئۆزۈڭىز جاۋابنى ھېسابلاشىڭىز مۇقىم تەكلىپ قىلىنمايدۇ.",
  tools: [addTool],
  modelSettings: { toolChoice: 'required' }, // auto: سۈكۈتتىكى ياكى required: مۇقىم قورالنى چاقىرىش ياكى none: قورالنى ئىشلىتىش ياكى قورال ئاتى
  model: "gpt-5-nano",
  inputGuardrails: [mathGuardrail],
});

async function main() {
  {
    // نورمال
    const result = await run(agent, "1 بىلەن 3 نى قوشقاندا قانچە بولىدۇ؟" );
    console.log(result.finalOutput);
    // console.dir(result.history, { depth: null });
  }
  {
    // قورالنىڭ كىرگۈزۈش گاردرېىلى بىلەن رەت قىلىندى
    const result = await run(agent, "1 بىلەن 30 نى قوشقاندا قانچە بولىدۇ؟" );
    console.log(result.finalOutput);
    // console.dir(result.history, { depth: null });
  }
  {
    // قورالنىڭ چىقىرىش گاردرېىلى بىلەن رەت قىلىندى
    const result = await run(agent, "1 بىلەن 9 نى قوشقاندا قانچە بولىدۇ؟" );
    console.log(result.finalOutput);
    // console.dir(result.history, { depth: null });
  }
  {
    // ئاگېنتنىڭ كىرگۈزۈش گاردرېىلى بىلەن رەت قىلىندى. مۇستەسنا چىقىدۇ
    const result = await run(agent, "بۈگۈن ھاۋارايى قانداق؟" );
    console.log(result.finalOutput);
    // console.dir(result.history, { depth: null });
  }
}

main().catch(console.error);`}</pre>
          </div>
          
          <p className="text-slate-700 mt-6">
            بۇ مىسالنىڭ چىقىرىش نەتىجىسى: بىرىنچى سوئال 4، ئىككىنچى سوئال قورالنىڭ كىرگۈزۈش گاردرېىلى بىلەن جاۋاب بېرەلمىدى، ئۈچىنچى سوئال قورالنىڭ چىقىرىش گاردرېىلى بىلەن جاۋاب بېرەلمىدى، تۆتىنچى سوئال ئاگېنتنىڭ كىرگۈزۈش گاردرېىلى بىلەن مۇستەسنا چىقتى.
          </p>
          
          <p className="text-slate-700 mt-4">
            گاردرېيلنى بۇزغۇچى نەتىجىسى، قورال ياكى ئاگېنت گاردرېىلى بولۇشىغا قاراپ پەرق قىلىدۇ:
          </p>
          <ul className="list-disc pr-6 space-y-2 text-slate-700 mt-3">
            <li>قورال گاردرېىلىنى بۇزۇش مۇستەسنا بولمايدۇ، جەريان داۋام قىلىدۇ. پروگرامما تەلەپىگە قاراپ، قورالدا خاتالىق بولسىمۇ، باشقا ئۇسۇل، مەسىلەن سۈنئىي تىل مودېلى بىلەن قوشۇش نەتىجىسىنى ھېسابلاپ جاۋاب بېرىدۇ.</li>
            <li>ئاگېنت گاردرېىلىنى بۇزۇش تۈزۈك مۇستەسنا چىقىرىدۇ.</li>
          </ul>
        </div>
        
        {/* Python Guardrails */}
        <div className="bg-white rounded-2xl p-7 shadow-md relative z-10 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center">
            <span className="text-emerald-600 text-2xl ml-2">🔷</span>
            Python دىكى گاردرېيل مىسالى
          </h3>
          
          <div className="bg-slate-900 text-slate-200 rounded-xl p-5 font-mono text-base overflow-x-auto mb-6">
            <pre className="whitespace-pre-wrap break-words">{`from agents import Agent, Runner, function_tool, ModelSettings
from agents import (
    input_guardrail,
    tool_input_guardrail,
    tool_output_guardrail,
    GuardrailFunctionOutput,
    ToolGuardrailFunctionOutput,
    InputGuardrailTripwireTriggered,
)
from pydantic import BaseModel
import dotenv
import os
import json

dotenv.load_dotenv()


class AddInput(BaseModel):
    a: int
    b: int


# --- (1) ئاگېنت كىرگۈزۈش گاردرېىلى (TS: mathGuardrail غا ماس كېلىدۇ)---

class MathGuardrailOut(BaseModel):
    isMathHomework: bool
    reasoning: str


guardrail_agent = Agent(
    name="Guardrail check",
    instructions="بۇ سوئال ھېسابلاش مەسىلىسىگە دائىر سوئال بولامدۇقىنى تەكشۈرۈڭ.",
    output_type=MathGuardrailOut,
    model="gpt-5-nano",
)

@input_guardrail(run_in_parallel=False)
async def math_guardrail(ctx, agent: Agent, user_input: str):
    print("math_guardrail:", user_input)
    r = await Runner.run(guardrail_agent, input=user_input, context=ctx.context)
    out: MathGuardrailOut = r.final_output
    print("math_guardrail چىقىرىش:", out)
    # TS دىكىگە ئوخشاش: ھېسابلاش بولمىسا تىرېپۋاير
    return GuardrailFunctionOutput(
        output_info=out,
        tripwire_triggered=(out.isMathHomework is False),
    )


# --- (2) قورال كىرگۈزۈش گاردرېىلى (TS: a ياكى b >= 10 دا رەت قىلىش)---

@tool_input_guardrail
def input_value_guardrail_block(data):
    payload = json.loads(data.context.tool_arguments or "{}")
    print('input_value_guardrail_block:', payload)
    args = payload.get("args", {})

    a = args.get("a")
    b = args.get("b")

    # ئىشەنچىنى تەكشۈرۈش
    if a is None or b is None:
        return ToolGuardrailFunctionOutput.reject_content("a ياكى b يوق.")
    print("a:", a, "b:", b)
    if a >= 10 or b >= 10:
        print(f"input_value_guardrail_block رەت قىلىندى: a={a}, b={b}")
        return ToolGuardrailFunctionOutput.reject_content(f"{a} ياكى {b} 10 دىن چوڭ.")
    return ToolGuardrailFunctionOutput.allow()


# --- (3) قورال چىقىرىش گاردرېىلى (TS: سان ۋە <10 بولمىسا رەت قىلىش)---

def is_numeric_strict(text: str) -> bool:
    if text.strip() == "":
        return False
    try:
        v = float(text)
    except ValueError:
        return False
    return v not in (float("inf"), float("-inf"))

@tool_output_guardrail
def output_value_guardrail_block(data):
    print("output_value_guardrail_block:", data.output)
    text = str(data.output if data.output is not None else "")

    if is_numeric_strict(text):
        v = float(text)
        if v < 10:
            return ToolGuardrailFunctionOutput.allow()
        return ToolGuardrailFunctionOutput.reject_content("چىقىرىش بەك چوڭ.")

    return ToolGuardrailFunctionOutput.reject_content("چىقىرىش سان بولمايدۇ.")


# ---- بۇ يەردىن تۆۋەن «ئەسلى add_tool / agent / run_sync» نى قەدەرچە ساقلاپ قالدى ----

@function_tool(
    tool_input_guardrails=[input_value_guardrail_block],
    tool_output_guardrails=[output_value_guardrail_block],
)
def add_tool(args: AddInput) -> int:
    """ئىككى ساننى قوشۇش

    Args:
        args: AddInput كىلاسسى
    """
    print("add_tool چاقىرىلدى:", args)
    return args.a + args.b


agent = Agent(
    name="calculator-agent",
    instructions="سىز بىر كالكۇلياتورسز. مۇۋاپىق قورالنى قوللىنىپ ھېسابلاڭ. قورالدىن نەتىجە تېپىلمىسا سەۋەبىنى يازىپ جاۋاب بېرەلمەيدىغانلىقىنى قىسقىچە جاۋاب بېرىڭ. سىزنىڭ ئۆزۈڭىز جاۋابنى ھېسابلاشىڭىز مۇقىم تەكلىپ قىلىنمايدۇ.",
    tools=[add_tool],
    model="gpt-5-nano",
    model_settings=ModelSettings(tool_choice="required"),
    input_guardrails=[math_guardrail],  # ★ بۇ يەرگەلا قوشۇلدى
)


def run_case(text: str):
    try:
        result = Runner.run_sync(agent, input=text)
        print("كىرگۈزۈش:", text)
        print("چىقىرىش:", result.final_output)
    except InputGuardrailTripwireTriggered:
        print("كىرگۈزۈش:", text)
        print("چىقىرىش: كىرگۈزۈش گاردرېىلى بىلەن رەت قىلىندى.")


# خىزمەت تەكشۈرۈش (TS نىڭ main دىكى 4 ھالەتىگە ماس كېلىدۇ)
run_case("1 بىلەن 3 نى قوشقاندا قانچە بولىدۇ؟")     # نورمال
run_case("1 بىلەن 30 نى قوشقاندا قانچە بولىدۇ؟")    # قورال كىرگۈزۈش گاردرېىلى بىلەن رەت قىلىندى
run_case("1 بىلەن 9 نى قوشقاندا قانچە بولىدۇ؟")     # قورال چىقىرىش گاردرېىلى بىلەن رەت قىلىندى (10 >=10)
run_case("بۈگۈن ھاۋارايى قانداق؟")     # ئاگېنت كىرگۈزۈش گاردرېىلى بىلەن رەت قىلىندى`}</pre>
          </div>
          
          <p className="text-slate-700 mt-6">
            Python دا مۇشۇنداقلا TypeScript دىكىگە ئوخشاش گاردرېىللارنى قوشالايمىز. ئەسكەرتۈش: <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">run_sync</code> بىلەن قوزغىتىلغان جەرياندىن چاقىرىلغان فۇنكسىيە <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">run_sync</code> نى قوزغىتىپ قالسا خاتالىق چىقىدۇ، شۇڭا ئاگېنت گاردرېىلىنىڭ <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">run</code> نى قوللىنىپ ناھايىتى مۇرەككەپ جەرياندا قوزغىتىش كېرەك.
          </p>
          
          <p className="text-slate-700 mt-4">
            خىزمەت تارىخىنى تەكشۈرگەندە، قورال گاردرېىلىدا <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">ToolGuardrailFunctionOutput.reject_content</code> نى قايتۇرغان ھالەتلەردە قايتا سىناش جەريانىنىڭ ئىشلىگەندەك ھەرىكەت قىلىشىنى كۆرۈشكە بولىدۇ. ئەگەر تۈزۈك توختىتىشنى خالىسىڭىز، <code className="bg-slate-100 px-1.5 py-0.5 rounded text-sm font-mono">raise_exception</code> نى تەكشۈرۈشنى تەۋسىيە قىلىمىز.
          </p>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="mb-12 bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 border-2 border-amber-300 relative overflow-hidden">
        <div className="absolute -top-8 -left-8 w-24 h-24 text-amber-200 opacity-30">
          <div className="text-7xl">☪</div>
        </div>
        
        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-right text-center relative z-10">خۇلاسە</h2>
        
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-lg border border-amber-300 relative z-10">
          <p className="text-lg text-slate-800 leading-relaxed mb-6">
            بۇ قېتىم بىز <span className="font-bold text-violet-700">OpenAI Agent SDK</span> نى قوللىنىپ، سۈنئىي تىل مودېلى بىلەن شەخسىي فۇنكسىيە ۋە سىرتقى خىزمەتلەرنى بىرلەشتۈرۈش تەجرىبىسىنى يۈرگۈزدۈك.
          </p>
          
          <p className="text-lg text-slate-800 leading-relaxed mb-6">
            پەقەت API نى قوللانغان ۋاقتىدا، سۈنئىي تىل مودېلى بىلەن فۇنكسىيە ياكى سىرتقى خىزمەتلەرنى بىرلەشتۈرۈشنى ئۆزۈڭىز قىلىشىڭىز كېرەك ئىدى، ئەمما ئاگېنتنى قوللانغاندا بۇ قىيىنچىلىقلارنىڭ دەرىجىسى تۆۋەنلىگەندەك ھېس قىلىنىدۇ.
          </p>
          
          <p className="text-lg text-slate-800 leading-relaxed mb-6">
            شۇنداقلا، Python دا <span className="font-bold">ئاگېنتنى گرافىك سۈپىتىدە كۆرسىتىشكە</span> بولىدۇ، يۇقىرىدا تىلغا ئېلىنغان خىزمەت تارىخى خىزمىتى بار بولغاچقا، قانداق خىزمەت قىلىۋاتقانلىقىنى تەپسىلىي تەكشۈرۈش مۇرەككەپ ئەمەس.
          </p>
          
          <div className="bg-rose-50 p-5 rounded-xl border border-rose-300 mb-6">
            <div className="flex items-start">
              <div className="text-rose-600 text-3xl mr-4 mt-1">⚠️</div>
              <div>
                <p className="font-bold text-slate-900 mb-2">مۇھىم ئەسكەرتۈش:</p>
                <p className="text-slate-700">
                  سۈنئىي تىل مودېلى ئاساسىي بولۇپ قايسى خىزمەت بىلەن بىرلەشتۈرۈشنى بەلگىلەيدىغانلىقتىن، <span className="font-bold">قەرەلىك خىزمەت</span> قىلىش ئىمكانىيىتى بار. مەسىلەن، شەخسىي فۇنكسىيە بىلەن قىلىشىڭىز كېرەك بولغان نەرسىنى سۈنئىي تىل مودېلى ئۆزى جاۋاب بېرىپ قالىدۇ.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-lg text-slate-800 leading-relaxed mb-6">
            شۇڭا، ئىشلىتىش ۋاقتىدا <span className="font-bold">خاتىرە قاتارلىق نازارەت تىزىملىكى</span> نى تەكشۈرۈش زۆرۈر. شۇنداقلا، سۈنئىي تىل مودېلىنىڭ ئىشلىتىش مىقدارى زۆرۈر بولغان ۋاقىتتا بىۋاسىتە API نى ئىجرا قىلغان ۋاقىتتىن كۆپرەك بولۇش ئىمكانىيىتى بار.
          </p>
          
          <p className="text-lg text-slate-800 leading-relaxed">
            باشقا، بۇ قېتىم تونۇشتۇرۇلمىغان خىزمەتلەر بار، لېكىن رەسمىي مىساللارنى كۆرگەندە قانداق تۇنجىلاش كېرەكلىكىنى تېپىش مۇمكىن.
          </p>
          
          <div className="mt-10 pt-8 border-t border-amber-200 text-center">
            <div className="inline-block bg-gradient-to-r from-amber-500 to-rose-600 text-white px-8 py-4 rounded-2xl mb-6 shadow-lg">
              <p className="font-bold text-2xl">«بىلىم — كۆرۈشنىڭ كۆزى، تەجرىبە — يۈرۈشنىڭ قولى»</p>
              <p className="text-xl opacity-90 mt-2">— Uyghur wisdom on knowledge and practice</p>
            </div>
            
            <p className="text-xl text-slate-800 max-w-2xl mx-auto italic">
              تېخنىكا دۇنياسىنىڭ يېڭىلىقلىرىنى چۈشىنىش — كەلگۈسىنى شەكىللەندۈرۈشنىڭ بىرىنچى قەدىمى.
            </p>
            
            <div className="mt-8 flex justify-center gap-6 text-4xl">
              <span className="text-amber-500 animate-bounce">☪</span>
              <span className="text-violet-500 animate-bounce animation-delay-200">☪</span>
              <span className="text-rose-500 animate-bounce animation-delay-400">☪</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with KeLBiL branding */}
      <footer className="mt-12 pt-8 border-t border-amber-300 text-center">
        <div className="inline-block bg-gradient-to-r from-violet-600 to-indigo-700 text-white px-6 py-3 rounded-full mb-4">
          <p className="font-bold text-lg">KeLBiL تورى</p>
        </div>
        <p className="text-slate-600 text-sm max-w-2xl mx-auto">
          بۇ ماقالە سۈنئىي ئەقىل تەتقىقات مەركىزى (KeLBiL) تەرىپىدىن تەييارلاندى. تېخنىكا دۇنياسىنىڭ يېڭىلىقلىرىنى چۈشىنىش — كەلگۈسىنى شەكىللەندۈرۈشنىڭ بىرىنچى قەدىمى.
        </p>
        <div className="mt-6 flex justify-center gap-4 text-2xl">
          <span className="text-amber-500">☪</span>
          <span className="text-violet-500">☪</span>
          <span className="text-rose-500">☪</span>
          <span className="text-emerald-500">☪</span>
          <span className="text-sky-500">☪</span>
        </div>
      </footer>
    </article>
  );
};

export default Blog117;