# -*- coding: utf-8 -*-
"""
ئۇيغۇرچە AI چات-بات — مۇكەممەل نۇسخا
— داتا يۈكلەش
— ئۇيغۇرچە جۈملە ئىزدەش (case-insensitive, punctuation-tolerant)
— fallback جاۋاب
— خاتالىق باشقۇرۇش
"""

from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import re
import os
import logging

# === سەرۋېر تەڭشەش ===
app = Flask(__name__)
CORS(app)
logging.basicConfig(level=logging.INFO)

# === داتا فایلى ===
DATA_FILE = 'uyghur_1000_sentences.csv'

# === داتا يۈكلەش ===
def load_sentences():
    if not os.path.exists(DATA_FILE):
        print(f"❌ داتا فایلى تېپىلمىدى: {os.path.abspath(DATA_FILE)}")
        return []
    
    try:
        df = pd.read_csv(DATA_FILE)
        if 'sentence' not in df.columns:
            print("❌ CSV فورماتىدا خاتالىق: بىرىنچى قۇرۇ بېشى 'sentence' بولۇشى كېرەك.")
            return []
        
        sentences = df['sentence'].dropna().astype(str).tolist()
        print(f"✅ {len(sentences)} جۈملە يۈكلەندى.")
        return sentences
    
    except Exception as e:
        print(f"❌ داتا يۈكلىيەلمىدى: {e}")
        return []

# === تېكىست تازىلاش ===
def clean_text(text):
    """ئۇيغۇرچە تېكىستنى تازىلاش: پۇنكتۇئاتسىيە، بۇشلۇق، ئىزاھاتلار"""
    # پۇنكتۇئاتسىيە ۋە ئىزاھاتلارنى چىقىرىش
    text = re.sub(r'[^\w\s\u0600-\u06FF]', ' ', text)  # ئەرەب يېزىقى ھەرپلەرنى ساقلاش
    text = re.sub(r'\s+', ' ', text)  # قوش بۇشلۇقنى بىر بۇشلۇققا ئايلاندۇرۇش
    return text.strip().lower()

# === جاۋاب تېپىش ===
def find_best_match(question, sentences):
    if not question or not sentences:
        return None

    # 1. توغرىسىدىن كىرگۈزۈلگەن جۈملە بولسا قايتۇرۇش
    for sent in sentences:
        if clean_text(question) == clean_text(sent):
            return sent

    # 2. سۆز ئوخشاشلىقى بويىچە ئىزدەش
    q_clean = clean_text(question)
    q_words = set(q_clean.split())
    
    best_match = None
    max_overlap = 0

    for sent in sentences:
        s_clean = clean_text(sent)
        s_words = set(s_clean.split())
        overlap = len(q_words & s_words)
        
        # كەم دېگەندە 2 سۆز ئوخشاش بولسا
        if overlap > max_overlap and overlap >= 2:
            max_overlap = overlap
            best_match = sent

    return best_match

# === داتا يۈكلەش ===
sentences = load_sentences()

# === API ئەند-پوينت ===
@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        if not data or 'message' not in data:
            return jsonify({'reply': "سوئالىڭىزنى كىرگۈزۈڭ."}), 400

        user_msg = str(data['message']).strip()
        if not user_msg:
            return jsonify({'reply': "سوئالىڭىزنى كىرگۈزۈڭ."})

        # جاۋاب ئىزدەش
        reply = find_best_match(user_msg, sentences)

        if not reply:
            fallback = [
                "بۇ توغرىسىدا ھازىرچە بىلمىمەن، لېكىن كەلگۈسىدە ئۆگىنىمەن!",
                "سىزنىڭ سوئالىڭىزغا جاۋاب تېپەلمىدىم. باشقا سوئال بېرىپ كۆرۈڭ.",
                "بۇ مەزمۇن ھازىرچە داتىمىزدا يوق.",
                "ئۇيغۇرچە سۆزلىرىڭىزنى قىسقارتىپ يېزىڭ — جاۋاب ئېھتىماللىقى ئېشىدۇ."
            ]
            import random
            reply = random.choice(fallback)

        return jsonify({'reply': reply})

    except Exception as e:
        logging.error(f"خاتالىق: {e}")
        return jsonify({'reply': "خاتالىق كۆرۈلدى. سەرۋېر ئىشلىتىۋاتامدۇ؟"}), 500

# === سەرۋېر باشلاش ===
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)