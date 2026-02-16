// Blog51.jsx
import React from 'react';

const Blog51 = () => {
  return (
    <article 
      className="max-w-4xl mx-auto px-4 py-10 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 leading-relaxed"
      style={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}
    >
      {/* Header */}
      <header className="mb-12 text-center">
        <div className="inline-block px-4 py-1 mb-4 text-sm font-semibold text-blue-600 bg-blue-50 rounded-full dark:bg-blue-900/30">
          #GenerativeAI #RAG
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-3" style={{ lineHeight: '1.4' }}>
          RAG توغرىسىدا قىسقىچە تەتقىقات — يېڭى ئۆگەنگۈچىلەرگە يېتەكچىلىك
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          2026-يىلى 1-ئاينىڭ 4-كۈنى | KeLBiL، ۋېكتور ئىزدەش، ۋېكتور سانلىق مەلۇمات ئامبىرى
        </p>
      </header>

      {/* Intro */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">كىرىش سۆز</h2>
        <p className="mb-4" style={{ textAlign: 'justify', fontSize: '1.05em' }}>
          يېقىندا، ھەر خىل ئىشلەپچىقىرىش سۈنئىي ئەقىل تېخنىكىلىرى تېز سۈرئەتتە تەرەققىي قىلدى. مەن بۇ ساھەگە يېتىشىش ئۈچۈن تىرىشىۋاتىمەن — شۇنداقلا، بىلەن بىللە «RAG» نى تېرەن چۈشىنىپ، بۇ بىلىمنى ئەمەلگە ئاشۇرۇش ئۈچۈن قىسقىچە تەتقىقات ئىزدىم.
        </p>
        <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border-r-4 border-yellow-500">
          <p className="italic text-gray-700 dark:text-gray-300" style={{ fontSize: '1.05em' }}>
            مەن بۇنىڭغا يېتىشەلمەيمەن، ئەمما… بۇ قېتىم مەن <strong>RAG</strong> ھەققىدە ئۆگەنگەنلىرىمنى قىسقىچە بايان قىلدىم. بۇنىڭ ئىشلەپچىقىرىش سۈنئىي ئەقىلغە يېڭى ئۆگەنگۈچىلەر ئۈچۈن پايدىلىق بولۇشىنى ئۈمىد قىلىمەن.
          </p>
        </div>
      </section>

      {/* What is RAG? */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100" style={{ borderBottom: '2px solid #3b82f6', paddingBottom: '8px' }}>
          RAG (Retrieval-Augmented Generation) دېگەن نېمە؟
        </h2>
        <p className="mb-3" style={{ textAlign: 'justify', fontSize: '1.05em' }}>
          RAG ياكى <strong className="text-blue-600 dark:text-blue-400">ئېلىپ كېلىش ئارقىلىق كۆپەيتىلگەن ئەۋلاد</strong> — بۇ بىر سىستېما بولۇپ، LLM (چوڭ تىل مودېلى) جاۋاب ھاسىل قىلىشتىن بۇرۇن، <em>تاشقى بىلىم مەنبەلىرىدىن</em> مۇناسىۋەتلىك سانلىق مەلۇماتلارنى ئېلىپ كېلىپ، جاۋابنىڭ <strong>توقۇقلىقى</strong> ۋە <strong>دەللىكى</strong> نى كاپالەتلەيدۇ.
        </p>
        <p className="mb-4" style={{ textAlign: 'justify', fontSize: '1.05em' }}>
          بۇ «بىلىم مەنبەسى» سۈزلەرنىڭ مەنىسىگە ئاساسلىنىپ، كۆپ ئۆلچەملىك سانلىق شەكىلدە ساقلىنىدىغان <strong>ۋېكتور سانلىق مەلۇمات ئامبىرى</strong> (Vector Database) دىن پايدىلىنىدۇ.
        </p>

        {/* Diagram Placeholder */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-lg p-6 mb-6 text-center border border-blue-200 dark:border-gray-700 shadow-sm">
          <div className="text-sm text-blue-600 dark:text-blue-300 mb-2 font-semibold">رەسىم: RAG ئىجرا جەريانى</div>
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-sm">
            <div className="px-3 py-2 bg-blue-100 dark:bg-blue-900 rounded-lg">سوئال</div>
            <div className="text-blue-500">→</div>
            <div className="px-3 py-2 bg-purple-100 dark:bg-purple-900 rounded-lg">ۋېكتور ئىزدەش</div>
            <div className="text-blue-500">→</div>
            <div className="px-3 py-2 bg-green-100 dark:bg-green-900 rounded-lg">ماس كېلىدىغان ھۆججەت</div>
            <div className="text-blue-500">→</div>
            <div className="px-3 py-2 bg-red-100 dark:bg-red-900 rounded-lg">LLM</div>
            <div className="text-blue-500">→</div>
            <div className="px-3 py-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg">جاۋاب</div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 p-5 rounded-xl border-l-4 border-blue-600 shadow-sm">
          <p className="font-medium text-lg mb-3">
            🎯 <strong className="text-blue-700 dark:text-blue-300">نېمە ئۈچۈن مۇھىم؟</strong> RAG نىڭ ئەڭ چوڭ ئىمكانىيىتى — سوئال بىلەن مودېلنىڭ بىلىم قاتلىمى ئوتتۇرىسىدا «كۆپىر» قۇرۇش. بۇ:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-800 dark:text-gray-300" style={{ fontSize: '1.05em' }}>
            <li>كېرەكسىز بەلگە سەرپىياتىنى ئازايتىدۇ</li>
            <li>گالىتۇسىناتسىيە (Hallucination) خەۋپىنى كېسىشىدۇ</li>
            <li>مەلۇمات يېڭىلانغان بولۇپمۇ، مودېلنى قايتا تەربىيلەش كېرەك ئەمەس</li>
          </ul>
        </div>
      </section>

      {/* Semantic Embedding */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100" style={{ borderBottom: '2px solid #10b981', paddingBottom: '8px' }}>
          «كىرىشتۈرۈش»: سانلىق مەلۇماتلارنىڭ مەنىسىنى مىقدارلاشتۇرۇش
        </h2>
        <p className="mb-3" style={{ textAlign: 'justify', fontSize: '1.05em' }}>
          كىرىشتۈرۈش (Embedding) — تېكىست، سۈرەت ياكى ئاۋازنى <strong className="text-green-600 dark:text-green-400">كۆپ ئۆلچەملىك ۋېكتورلار</strong> (مىسالى: 1536 ئۆلچەم) قىلىپ ئايلاندۇرۇش. بۇ ۋېكتورلار سۆزلەرنىڭ *مەنىسى* ۋە *مۇناسىۋىتى* نى سانلىق شەكىلدە مۇندەرىجىلەيدۇ.
        </p>

        <div className="bg-gray-900 text-green-300 text-left p-5 rounded-xl overflow-x-auto text-sm font-mono my-6 border border-gray-700 shadow-lg">
          <span className="text-gray-400">// مىسال: OpenAI text-embedding-ada-002</span><br />
          <span className="text-cyan-300">get_vector_embeddings</span>(<span className="text-yellow-300">"Arima Kinen"</span>)<br />
          <span className="text-gray-400">// → 1536 ئۆلچەملىك ۋېكتور:</span><br />
          <span className="text-gray-200">
            [-0.04045, -0.00384, -0.00051, ..., -0.01759, 0.00342, -0.00924]
          </span>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800">
          <blockquote className="italic my-3 text-gray-700 dark:text-gray-300" style={{ fontSize: '1.05em' }}>
            💡 بۇ ۋېكتورلار ئوتتۇرىسىدىكى «يېقىنلىق» (cosine similarity ياكى L2 distance) ئارقىلىق مەنى جەھەتتىن ئوخشاش تېكىستلارنى ئىزدەشكە بولىدۇ — بۇ ۋېكتور سانلىق مەلۇمات ئامبىرىنىڭ ئاساسى.
          </blockquote>
        </div>
      </section>

      {/* Vector Database */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100" style={{ borderBottom: '2px solid #8b5cf6', paddingBottom: '8px' }}>
          ۋېكتور سانلىق مەلۇمات ئامبىرى دېگەن نېمە؟
        </h2>
        <p className="mb-3" style={{ textAlign: 'justify', fontSize: '1.05em' }}>
          ئەنئەنىۋى SQL/NoSQL سانلىق مەلۇمات ئامبىرى «ئاچقۇچ سۆز بويىچە ئىزدەيدۇ»، لېكىن <strong className="text-purple-600 dark:text-purple-400">ۋېكتور سانلىق مەلۇمات ئامبىرى</strong> — «مەنىگە ئاساسەن ئىزدەيدۇ».
        </p>
        <p className="mb-6" style={{ textAlign: 'justify', fontSize: '1.05em' }}>
          مەسىلەن: «قەدىمىي يۆتكىلىش ۋاسىتىسى» دېگەن سوئالغا، «ئات»، «ئارۋا»، «سەييەھەت» دېگەن سۆزلەردەك ئوخشاش مەنىگە ئىگە ھۆججەتلەرنى تېپىدۇ — ھەتتا «ئات» دېگەن سۆز بولمىسىمۇ.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="border-2 border-gray-300 dark:border-gray-700 rounded-xl p-5 bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-gray-100">ئەنئەنىۋى سانلىق مەلۇمات ئامبىرى</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 dark:text-gray-300" style={{ fontSize: '1.05em' }}>
              <li>ئاچقۇچ سۆز بويىچە ئىزدەش</li>
              <li>مەنىگە ئاساسلانمايدۇ</li>
              <li>SQL, MongoDB</li>
              <li>ئۆلچەملىك مۇناسىۋەت قۇرۇش</li>
              <li>تېكىست ئىزدەش چەكلىمىسى</li>
            </ul>
          </div>
          <div className="border-2 border-purple-300 dark:border-purple-700 rounded-xl p-5 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-gray-100">ۋېكتور سانلىق مەلۇمات ئامبىرى</h3>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 dark:text-gray-300" style={{ fontSize: '1.05em' }}>
              <li>مەنى يېقىنلىق بويىچە ئىزدەش</li>
              <li>ئۆزگەرگۈچى كېڭەيتىلمە</li>
              <li>Faiss, Pinecone, Chroma, Milvus</li>
              <li>ئوخشاشلىق ھېسابلاش</li>
              <li>تېكىست مەنىسى ئىزدەش</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RAG Workflow */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100" style={{ borderBottom: '2px solid #f59e0b', paddingBottom: '8px' }}>
          RAG نىڭ ئىجرا جەريانى
        </h2>
        <ol className="list-decimal pl-6 space-y-4 mb-8" style={{ fontSize: '1.05em' }}>
          <li>
            <strong className="text-orange-600 dark:text-orange-400">پارچە بۆلۈش</strong>: تېكىستنى 500 سۆز/بۆلەك قىلىپ بۆلۈش
            <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">(ئاساسلىق تېكىستنى كىچىك بۆلەكلەرگە ئايرىش)</span>
          </li>
          <li>
            <strong className="text-orange-600 dark:text-orange-400">كىرگۈزۈش</strong>: ھەر بىر بۆلەكنى ۋېكتور قىلىپ ئايلاندۇرۇش
            <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">(تېكىستنى سانلىق ۋېكتورلارغا ئايلاندۇرۇش)</span>
          </li>
          <li>
            <strong className="text-orange-600 dark:text-orange-400">ھۆججەت يۈكلەش</strong>: ۋېكتورلارنى سانلىق مەلۇمات ئامبىرىغا يۈكلەش
            <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">(سانلىق مەلۇمات ئامبىرىغا ساقلاش)</span>
          </li>
          <li>
            <strong className="text-orange-600 dark:text-orange-400">ئىندېكىسلاش</strong>: Faiss ئارقىلىق ئىزدەش تېزلىكىنى كاپالەتلەش (ANN)
            <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">(يۇقىرى سۈرئەتلىك ئىزدەش ئىندېكىسى قۇرۇش)</span>
          </li>
          <li>
            <strong className="text-orange-600 dark:text-orange-400">داۋاملىقلىق</strong>: سانلىق مەلۇمات ئامبىرىنى دىسكىغا ساقلاش
            <span className="text-sm text-gray-500 dark:text-gray-400 block mt-1">(سانلىق مەلۇماتنى داۋاملىق ساقلاش)</span>
          </li>
        </ol>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border border-amber-200 dark:border-gray-700 shadow-md">
          <h3 className="font-semibold text-lg mb-3 flex items-center">
            <span className="bg-amber-500 text-white px-3 py-1 rounded-lg mr-3 text-sm">تېخنىكىلىك</span>
            Faiss (Facebook AI Similarity Search)
          </h3>
          <p className="text-gray-700 dark:text-gray-300" style={{ fontSize: '1.05em' }}>
            Faiss — يۇقىرى سۈرئەتلىك، يۇقىرى ئوخشاشلىق ئىزدەش مېخانىزمى بار كۈتۈپخانە. تېزلەشتۈرۈش ئۈچۈن IVF, HNSW قاتارلىق ئالگورىتمىلارنى قوللايدۇ. بۇ كۈتۈپخانە يۇقىرى ئۆلچەملىك ۋېكتورلار بىلەن ئىشلەشكە لايىھەلەنگەن بولۇپ، مىليونلىغان ۋېكتورلارنى سانلىق مەلۇمات ئامبىرىدا ساقلاش ۋە تېز ئىزدەش ئىقتىدارىغا ئىگە.
          </p>
        </div>
      </section>

      {/* Code Examples */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100" style={{ borderBottom: '2px solid #ef4444', paddingBottom: '8px' }}>
          كود مىساللىرى
        </h2>

        <div className="space-y-6">
          <details className="bg-gray-900 text-gray-200 rounded-xl overflow-hidden shadow-lg" open>
            <summary className="px-5 py-4 bg-gray-800 font-medium cursor-pointer hover:bg-gray-700 text-lg flex items-center">
              <span className="mr-3">📦</span>
              1. ۋېكتور سانلىق مەلۇمات ئامبىرى قۇرۇش (PDF → Embedding → Faiss)
            </summary>
            <div className="p-5 overflow-x-auto">
              <pre className="language-python text-sm text-left leading-relaxed" style={{ fontFamily: '"Courier New", monospace' }}>
{`import glob, os, numpy as np
from langchain.document_loaders import PDFMinerLoader
from langchain.text_splitter import CharacterTextSplitter
import faiss
from openai import OpenAI

# PDF يۈكلەش ۋە بۆلۈش
loader = PDFMinerLoader("sample.pdf")
data = loader.load()
splitter = CharacterTextSplitter(chunk_size=500, chunk_overlap=100)
chunks = splitter.split_documents(data)

# كىرگۈزۈش
client = OpenAI()
def embed(text):
    resp = client.embeddings.create(input=text, model="text-embedding-ada-002")
    return resp.data[0].embedding

vectors = np.array([embed(c.page_content) for c in chunks])

# Faiss ئىندېكىسى
index = faiss.IndexFlatL2(vectors.shape[1])
index.add(vectors)
faiss.write_index(index, "vector_db.index")`}
              </pre>
            </div>
          </details>

          <details className="bg-gray-900 text-gray-200 rounded-xl overflow-hidden shadow-lg">
            <summary className="px-5 py-4 bg-gray-800 font-medium cursor-pointer hover:bg-gray-700 text-lg flex items-center">
              <span className="mr-3">💬</span>
              2. RAG ئارقىلىق سوئالغا جاۋاب بېرىش
            </summary>
            <div className="p-5 overflow-x-auto">
              <pre className="language-python text-left text-sm  leading-relaxed" style={{ fontFamily: '"Courier New", monospace' }}>
{`def vector_search(query, k=1):
    q_vec = np.array([embed(query)])
    _, idxs = index.search(q_vec, k)
    return [chunks[i] for i in idxs[0]]

def rag_chat(user_query):
    docs = vector_search(user_query, k=2)
    context = "\\n".join([d.page_content for d in docs])
    
    messages = [
        {"role": "system", "content": "پەقەت بېرىلگەن مەزمۇن بويىچە جاۋاب بېرىڭ. بىلمىسىڭىز: 'بىلمەيمەن'."},
        {"role": "user", "content": f"مەزمۇن:\\n{context}\\n\\nسوئال: {user_query}"}
    ]
    
    res = client.chat.completions.create(model="gpt-3.5-turbo", messages=messages)
    return res.choices[0].message.content`}
              </pre>
            </div>
          </details>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-gray-100" style={{ borderBottom: '2px solid #06b6d4', paddingBottom: '8px' }}>
          ئاخىرىدا
        </h2>
        <div className="space-y-4">
          <p className="text-gray-800 dark:text-gray-300" style={{ textAlign: 'justify', fontSize: '1.05em' }}>
            RAG نى ئىشلىتىش ئارقىلىق، LLM لار «پەقەت بىلىدىغانلىرىڭىزغا ئاساسەن سۆزلەش» تىن «ماتېرىياللارغا قاراپ توغرا سۆزلەشكە» تەرەققىي قىلىدۇ. بۇ تېخنىكا سۈنئىي ئەقىل سىستېمىلىرىنىڭ توقۇقلىقى ۋە ئىشەنچلىكلىكىنى كۆپ ھالدا ئاشۇرىدۇ.
          </p>
          <p className="text-gray-800 dark:text-gray-300" style={{ textAlign: 'justify', fontSize: '1.05em' }}>
            بۇ قېتىم بىز <strong className="text-cyan-600 dark:text-cyan-400">Faiss</strong> نى يەرلىك تەجرىبە ئۈچۈن ئىشلىتتۇق. ئەمما ئەمەلىيەتتە، چوڭقۇر تىجارەت تالاپلىرى ئۈچۈن <strong className="text-cyan-600 dark:text-cyan-400">Pinecone</strong>، <strong className="text-cyan-600 dark:text-cyan-400">Chroma</strong>، <strong className="text-cyan-600 dark:text-cyan-400">Qdrant</strong> قاتارلىق بۇلۇت ئاساسىدىكى ۋېكتور سانلىق مەلۇمات ئامبىرى يېقىندا كەڭ قوللىنىلىۋاتىدۇ.
          </p>
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-5 rounded-xl border border-cyan-200 dark:border-cyan-800">
            <p className="text-gray-700 dark:text-gray-300 italic" style={{ fontSize: '1.05em' }}>
              🌱 كېيىنكى ماقالىلەردە بۇ مەزمۇننىڭ تېخىمۇ چوڭ تېخنىكىلىك تەپسىلاتلىرى، تىجارەت ، ۋە تۈرلۈك ۋېكتور سانلىق مەلۇمات ئامبىرىنى سېلىشتۇرۇش بارچە ئېلان قىلىنىدۇ. RAG تېخنىكىسىنىڭ كەلگۈسىدە قانداق تەرەققىي قىلىشى مۇمكىنلىكى ھەققىدە تەھلىللەرنىمۇ كۆرەلەيسىز.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Tags */}
      <footer className="pt-8 border-t-2 border-gray-300 dark:border-gray-700 flex flex-wrap gap-3">
        {[
          '#GenerativeAI',
          '#RAG', 
          '#VectorDB',
          '#LLM',
          '#KeLBiL',
          '#سۈنئىيئەقىل',
          '#ۋېكتورئىزدەش',
          '#بىلىممۇھىتى'
        ].map((tag, i) => (
          <span
            key={i}
            className="px-4 py-2 text-sm bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-shadow"
            style={{ fontSize: '0.95em' }}
          >
            {tag}
          </span>
        ))}
      </footer>
    </article>
  );
};

export default Blog51;