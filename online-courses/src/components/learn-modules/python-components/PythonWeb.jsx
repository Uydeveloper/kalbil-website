// src/components/learn-modules/python-components/PythonWeb.jsx
import React, { useState } from 'react';
import { Globe, Server, Database, Code, Zap, CheckCircle } from 'lucide-react';

const PythonWeb = ({ onComplete }) => {
  const [selectedFramework, setSelectedFramework] = useState('django');

  const frameworks = [
    { id: 'django', name: 'Django', description: 'يۇقىرى سۈپەتلىك تور بېكەت', color: 'from-green-500 to-emerald-500', features: ['Admin Panel', 'ORM', 'Authentication', 'Security'] },
    { id: 'flask', name: 'Flask', description: 'يېڭى كىچىك تور بېكەت', color: 'from-blue-500 to-cyan-500', features: ['Micro', 'Flexible', 'Lightweight', 'Simple'] },
    { id: 'fastapi', name: 'FastAPI', description: 'تېز API قۇرۇش', color: 'from-purple-500 to-violet-500', features: ['Fast', 'Async', 'Type Hints', 'Auto Docs'] },
  ];

  const steps = [
    { title: 'مۇھىت تەييارلاش', code: 'pip install django\npip install flask\npip install fastapi' },
    { title: 'يېڭى پروژا قۇرۇش', code: selectedFramework === 'django' ? 'django-admin startproject myproject' : 
                                        selectedFramework === 'flask' ? 'touch app.py' : 
                                        'touch main.py' },
    { title: 'ئاساسىي قۇرۇلما', code: selectedFramework === 'django' ? 'python manage.py startapp myapp' : 
                                        selectedFramework === 'flask' ? 'from flask import Flask\napp = Flask(__name__)' :
                                        'from fastapi import FastAPI\napp = FastAPI()' },
    { title: 'ئىجرا قىلىش', code: selectedFramework === 'django' ? 'python manage.py runserver' : 
                                    selectedFramework === 'flask' ? 'flask run' : 
                                    'uvicorn main:app --reload' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5 text-indigo-500" />
          تور بېكەت قۇرۇش زەنجىرى
        </h5>
        <div className="grid grid-cols-4 gap-4">
          {['مۇھىت', 'بېكەت', 'سانلىق مەلۇمات', 'دىپلوى'].map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">
                {index + 1}
              </div>
              <div className="text-xs text-gray-700">{step}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Framework تاللاش */}
      <div>
        <h5 className="font-bold text-gray-800 mb-4">تور بېكەت فرەيمووركىنى تاللاڭ:</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {frameworks.map((fw) => (
            <button
              key={fw.id}
              onClick={() => setSelectedFramework(fw.id)}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                selectedFramework === fw.id 
                  ? `bg-gradient-to-br ${fw.color} text-white border-transparent transform scale-105` 
                  : 'bg-white border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex flex-col items-center text-center">
                <Server className="w-8 h-8 mb-3" />
                <div className="font-bold text-lg">{fw.name}</div>
                <div className="text-sm mt-1 opacity-90">{fw.description}</div>
                <div className="mt-3 flex flex-wrap justify-center gap-1">
                  {fw.features.map((feature, idx) => (
                    <span key={idx} className={`px-2 py-1 text-xs rounded ${
                      selectedFramework === fw.id 
                        ? 'bg-white/20' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* قۇرۇش قەدەملىرى */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">قۇرۇش قەدەملىرى:</h5>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 mb-2">{step.title}</div>
                  <div className="bg-gray-800 text-gray-100 p-3 rounded">
                    <code className="text-sm font-mono whitespace-pre-wrap">{step.code}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">مىسال كود:</h5>
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{selectedFramework === 'django' ? 
`# Django: views.py
from django.http import HttpResponse
from django.shortcuts import render

def home(request):
    return render(request, 'home.html', 
        {'title': 'مېنىڭ بېكىتىم'})

def about(request):
    return HttpResponse('بۇ بىز ھەققىمىزدا')

# urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
]` :
selectedFramework === 'flask' ?
`# Flask: app.py
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html', 
        title='مېنىڭ بېكىتىم')

@app.route('/about')
def about():
    return 'بۇ بىز ھەققىمىزدا'

if __name__ == '__main__':
    app.run(debug=True)` :
`# FastAPI: main.py
from fastapi import FastAPI
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
async def home():
    return """
    <html>
        <head><title>مېنىڭ بېكىتىم</title></head>
        <body><h1>خۇش كەپسىز!</h1></body>
    </html>
    """

@app.get("/about")
async def about():
    return {"message": "بۇ بىز ھەققىمىزدا"}`}
            </pre>
          </div>
          
          <div className="mt-4 bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border border-indigo-100">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-indigo-500" />
              <span className="font-semibold text-gray-800">ئىجرا نەتىجىسى:</span>
            </div>
            <div className="text-sm text-gray-600">
              http://localhost:8000 ئادرېسىنى تور كۆرگۈچىدە ئېچىڭ
            </div>
          </div>
        </div>
      </div>

      {/* تاماملا */}
      <div className="flex justify-between items-center pt-4 border-t border-gray-200">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">{frameworks.length}</span> فرەيموورك تونۇشتۇرۇلدى
        </div>
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-blue-600 text-white rounded-lg hover:from-indigo-600 hover:to-blue-700 transition-all duration-300"
        >
          <Globe className="w-5 h-5" />
          تور بېكەت قۇرۇشنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default PythonWeb;