// src/components/Blog74.jsx
import React from 'react';

const Blog74 = () => {
  const HeaderImage = () => (
    <div className="relative w-full h-64 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-xl mb-6 flex flex-col items-center justify-center text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-2 text-center px-4">
        RNN ۋە LSTM نى قانداق ئىشلىتىش؟
      </h1>
      <p className="text-2xl opacity-90">(ئەسكەرتىش - Python)</p>
      <p className="mt-1 text-2xl opacity-80">    2026-يىلى 1-ئاينىڭ 7-كۈنى </p>
      <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-black/30 to-transparent rounded-b-xl"></div>
    </div>
  );

  // رەسىم كومپونېنتى (خاتالىققا قارشى + ئانىماتسىيە)
  const Illustration = ({ src, alt, caption }) => (
    <div className="mt-4 mb-6 flex justify-center">
      <div className="overflow-hidden rounded-lg shadow-md border border-gray-200 hover:shadow-xl transition-shadow duration-300">
        <img
          src={src}
          alt={alt}
          className="w-full max-w-md h-auto"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <div className="hidden bg-gray-100 text-center py-2 text-2xl text-gray-600">
          {alt}
        </div>
        {caption && (
          <div className="bg-white/80 py-1 px-2 text-2xl text-gray-500 text-center">
            {caption}
          </div>
        )}
      </div>
    </div>
  );

  const Section = ({ title, en, ug, code = '', note = '', illustration = null }) => (
    <div className="mb-10 p-5 bg-white rounded-lg shadow-md border border-gray-100">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 font-[UKIJ Tuz]">{title}</h3>

      <div className="mb-4">
        <p className="text-gray-700 font-[UKIJ Nasq] leading-relaxed">{ug}</p>
      </div>

      {illustration && <Illustration {...illustration} />}

      <div className="pt-3 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-500 mb-2">🇬🇧 English:</h4>
        <p className="text-gray-600 text-2xl leading-relaxed">{en}</p>
      </div>

      {code && (
        <div className="mt-4 text-left bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto text-sm font-mono">
          <pre>{code}</pre>
        </div>
      )}

      {note && (
        <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-500 text-2xl text-blue-800">
          💡 {note}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8" dir="ltr">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 md:p-8" dir="rtl">
        <HeaderImage />

        <div className="mb-8 text-center">
          <p className="text-gray-700 font-[UKIJ Nasq] leading-relaxed">
            RNN ۋە LSTM نى ئىشلىتىش ئاسان، لېكىن ئۇلارنىڭ ئىچكى مېخانىزىمىنى چۈشىنسىڭىز، تېخىمۇ ئۈنۈملۈك ئىشلىتەلەيسىز.
          </p>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed" dir="ltr">
            Using RNN/LSTM is easy—but understanding their internals unlocks their full potential.
          </p>
        </div>

        {/* RNN ئومۇمىي ئەھۋال — رەسىم: RNN تور قۇرۇلمىسى */}
        <Section
          title="RNN — ئومۇمىي ئەھۋال"
          ug={`RNN (Recurrent Neural Network) يەنى «قايتا تەكرارلىنىدىغان نېرۋا تورى» دەپمۇ ئاتىلىدۇ. بۇ مودېل ۋاقىت يۈرۈشلۈك سانلىق مەلۇماتلار (مەسىلەن، تېكىست، ئاۋاز، بېكەت ھەرىكىتى) نى بىر تەرەپ قىلىشقا ئالاھىدە ياخشى. چۈنكى ئارقىراق كىرگۈزۈلگەن ئۇچۇرلارنى «يوشۇرۇن ھالەت» (hidden state) دە ساقلايدۇ. بۇ ئارقىلىق، مەسىلەن، «سۆز تىزىملىكىدىن كېيىنكى سۆزنى پەرەز قىلىش» قاتارلىق ئېھتىمالىيەتلىك مۇناسىۋەتلەرنى ئۆگىنىدۇ.`}
          en={`RNN (Recurrent Neural Network) is powerful for sequential data (text, speech, time series). It maintains a "hidden state" that encodes past inputs, allowing it to model temporal dependencies—e.g., predicting the next word in a sentence.`}
          illustration={{
            src: "https://cdn-images-1.medium.com/max/1600/0*aWIO7eB6E4-cIkK9.gif",
            alt: "RNN Unfolded Diagram",
            caption: "RNN تور قۇرۇلمىسى — ۋاقىت بويىچە يېيىلغان شەكىل"
          }}
        />

        {/* RNN كودى — رەسىم: Keras لوقوسى */}
        <Section
          title="RNN كودى (تۈرگە ئايرىش)"
          ug={`تۆۋەندىكى كود TensorFlow/Keras ئارقىلىق SimpleRNN نى قانداق قۇرۇشنى كۆرسىتىدۇ. Embedding قەۋىتى سۆزلەرنى ۋېكتورغا ئايلاندۇرىدۇ، RNN قەۋىتى ۋاقىت يۈرۈشلۈك مۇناسىۋەتنى ئۆگىنىدۇ.`}
          en={`The code below shows how to build a text classification model using SimpleRNN in TensorFlow/Keras. Embedding converts words to vectors; RNN learns sequential patterns.`}
          code={`from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import InputLayer, Embedding, SimpleRNN, Dense, Dropout
from tensorflow.keras import regularizers, optimizers

def RNN_model():
    model = Sequential()
    model.add(InputLayer(input_shape=(None,)))
    model.add(Embedding(input_dim=vocab_size, output_dim=300, mask_zero=True))
    model.add(SimpleRNN(64, return_sequences=False))
    model.add(Dense(100, activation='relu',
                    kernel_regularizer=regularizers.l1_l2(l1=0.01, l2=0.01)))
    model.add(Dropout(0.25))
    model.add(Dense(2, activation='softmax'))
    
    model.compile(optimizer='adam',
                  loss='sparse_categorical_crossentropy',
                  metrics=['acc'])
    return model`}
          note="مۇھىم: vocab_size = tokenizer.word_index سانى + 1"
          illustration={{
            src: "https://b2633864.smushcdn.com/2633864/wp-content/uploads/2019/10/keras_vs_tfdotkeras_header.png?lossy=2&strip=1&webp=1",
            alt: "TensorFlow and Keras",
            caption: "TensorFlow/Keras — Deep Learning ئۈچۈن كۈچلۈك قورال"
          }}
        />

        {/* RNN كەمچىلىكلىرى — رەسىم: گرادىيېنت يوقىلىشى */}
        <Section
          title="RNN نىڭ كەمچىلىكلىرى"
          ug={`RNN نىڭ ئاساسىي ئەھمىيىتى — «يوقاش گرادىيېنت مەسىلىسى» (Vanishing Gradient). ۋاقىت يۈرۈشلۈك سانلىق مەلۇمات ئۇزۇن بولغاندا، خالىتىك ئالقى ۋاقىت ئارقىلىق تارقىلىپ بېرىلگەندە، گرادىيېنت نۇرۇتقا يوقىلىپ كېتىدۇ. نەتىجىدە، مودېل ئالدىنقى ئۇزۇن مۇددەتلىك باغلىنىشلارنى ئۆگىنىشنى يېتەلمەيدۇ. بۇندىن باشقا، «ئېغىرلىق توقۇنۇش» (Weight Conflict) مەسىلىسىمۇ بار — مودېل قىسقا مۇددەتلىك ۋە ئۇزۇن مۇددەتلىك ئالاھىدىلىكلەرنى بىرلا ئېغىرلىق بىلەن باسقۇرغانلىقى سەۋەبلىك، ئىككىلىنىپ قالىدۇ.`}
          en={`RNNs suffer from the **vanishing gradient problem**: during backpropagation through time, gradients shrink exponentially, making it hard to learn long-term dependencies. Additionally, **weight conflict** arises—single weights must handle both short-term and long-term patterns, leading to poor performance on complex sequences.`}
          illustration={{
            src: "https://miro.medium.com/v2/resize:fit:1032/1*AUwc53cmW04hjPrKtVyePQ.gif",
            alt: "Vanishing Gradient in RNN",
            caption: "RNN دىكى گرادىيېنت يوقىلىشى — ۋاقىت ئۇزۇنلىقىغا قاراپ يوقىلىدۇ"
          }}
        />

        {/* LSTM — رەسىم: LSTM دەرۋازا مېخانىزمى */}
        <Section
          title="LSTM — يېڭىلىق ھەللىش"
          ug={`LSTM (Long Short-Term Memory) RNN نىڭ كەمچىلىكلىرىنى «دەرۋازا مېخانىزمى» (Gate Mechanism) ئارقىلىق ھەل قىلىدۇ. ئۇ ھۈجەيرە ھالىتى (cell state) دە مۇھىم ئۇچۇرلارنى ساقلايدۇ، غەيرىمۇھىم ئۇچۇرلارنى ئۇنتۇپ قېلىدۇ. بۇ مېخانىزم ئارقىلىق، LSTM ۋاقىت يۈرۈشلۈك سانلىق مەلۇماتنىڭ ئۇزۇن مۇددەتلىك باغلىنىشلىرىنى سەلەمەتلىك بىلەن ئۆگىنىدۇ.`}
          en={`LSTM (Long Short-Term Memory) solves RNN’s weaknesses with a **gate mechanism**. It maintains a "cell state" that acts like a conveyor belt for critical information, selectively forgetting irrelevant data. This enables robust long-term dependency learning.`}
          illustration={{
            src: "https://kd-biz.scene7.com/is/image/kddibiz/what-is-lstm_hero?obj=1755167311306&scl=1&qlt=90",
            alt: "LSTM Cell Architecture",
            caption: "LSTM ھۈجەيرە قۇرۇلمىسى — ئۇنتۇش، كىرىش، چىقىرىش دەرۋازىلىرى"
          }}
        />

        {/* LSTM تۆت دەرۋازىسى — رەسىم: تەپسىلىي دەرۋازا سىزىملىرى */}
        <Section
          title="LSTM نىڭ تۆت دەرۋازىسى"
          ug={`1. **ئۇنتۇش دەرۋازىسى**: قايسى ئۇچۇرلارنى ئۇنتۇش كېرەكلىكىنى بېلگىلەيدۇ (سىگموئىد قەۋىتى).  
2. **كىرىش دەرۋازىسى**: قايسى يېڭى ئۇچۇرلارنى ساقلاش كېرەكلىكىنى بېلگىلەيدۇ.  
3. **ھۈجەيرە ھالىتىنى يېڭىلاش**: ئۇنتۇلغان + يېڭى ساقلانغان ئۇچۇر بىلەن يېڭى ھالەت قۇرۇلىدۇ.  
4. **چىقىرىش دەرۋازىسى**: ھالىتتىن قايسى قىسمىنى چىقىرىش كېرەكلىكىنى بېلگىلەيدۇ. `}
          en={`1. **Forget Gate**: Decides what to erase from cell state (sigmoid).  
2. **Input Gate**: Decides what new info to store (sigmoid + tanh).  
3. **Cell State Update**: Old state × forget vector + input vector.  
4. **Output Gate**: Decides what part of the state to output (sigmoid × tanh).`}
          illustration={{
            src: "https://www.researchgate.net/publication/362859164/figure/fig1/AS:11431281080269463@1661225026291/The-Gating-Mechanism-in-LSTM.ppm",
            alt: "LSTM Gate Mechanism Animation",
            caption: "LSTM دەرۋازىلىرىنىڭ مېخانىزمى — ئۇچۇر تاللاش ۋە باشقۇرۇش"
          }}
        />

        {/* LSTM كودى — رەسىم: Python لوقوسى */}
        <Section
          title="LSTM كودى (تۈرگە ئايرىش)"
          ug={`LSTM نى قۇرۇش SimpleRNN غا ئوخشاش، لېكىن كۇۋۋىتى كۆپىرەك. تۆۋەندىكى كود LSTM ئارقىلىق ماتىن تۈرگە ئايرىش مودېلىنى كۆرسىتىدۇ.`}
          en={`Building an LSTM model is nearly identical to SimpleRNN—but far more powerful for long sequences.`}
          code={`def LSTM_model():
    model = Sequential()
    model.add(InputLayer(input_shape=(None,)))
    model.add(Embedding(input_dim=vocab_size, output_dim=300, mask_zero=True))
    model.add(LSTM(100, return_sequences=False))
    model.add(Dense(100, activation='relu',
                    kernel_regularizer=regularizers.l1_l2(l1=0.01, l2=0.01)))
    model.add(Dropout(0.25))
    model.add(Dense(2, activation='softmax'))
    
    model.compile(optimizer='adam',
                  loss='sparse_categorical_crossentropy',
                  metrics=['acc'])
    return model`}
          note="ئۆزگەرتىش: SimpleRNN → LSTM، units نى 100 غا ئۆگەرتكىلى بولىدۇ"
          illustration={{
            src: "https://miro.medium.com/1*IRGB-4OAoO8KSqH_huDPFw.gif",
            alt: "Python Programming",
            caption: "Python — ماشىنا ئۆگىنىشنىڭ ئاساسى"
          }}
        />

        {/* خۇلاسە — رەسىم: RNN vs LSTM ئادەم ئېقىلى */}
        <Section
          title="خۇلاسە"
          ug={`RNN ۋاقىت يۈرۈشلۈك سانلىق مەلۇماتلارنى بىر تەرەپ قىلىشنىڭ ئاساسى. لېكىن ئۇزۇن مۇددەتلىك باغلىنىشلاردا يېتىشمىيدۇ. LSTM ئۇنىڭ ئورنىغا، دەرۋازا مېخانىزمى ئارقىلىق مۇھىم ئۇچۇرلارنى تاللاپ ساقلايدۇ، شۇڭا ئۇزۇن ۋاقىتلىك تەسۋىرلەش قىلىشقا سەلەمەت. كود قۇرۇش جەھەتتىن، ئىككىلىسىمۇ Keras تىكى قەۋىت ئىشلىتىش بىلەن ئوخشاش، ئىشلىتىش ئاسان.`}
          en={`RNN is foundational for sequences but fails on long-term patterns. LSTM replaces it in practice, using gates to control information flow—making it the go-to for text, speech, and time-series tasks. Code-wise, switching from SimpleRNN to LSTM requires just one line change.`}
          illustration={{
            src: "https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_12_RNN-vs-LSTM-vs-GRU.jpg",
            alt: "RNN vs LSTM Comparison",
            caption: "RNN vs LSTM — ئۇزۇن مۇددەتلىك ئۇچۇر ساقلاش قابىلىيىتى"
          }}
        />

        <div className="mt-12 pt-6 border-t border-gray-300 text-center">
          <p className="text-gray-500 font-[UKIJ Nasq]">
            كۆپىنچە زامانىۋى ماتىن ئۆگىنىش مودېلى (مەسىلەن، ChatGPT) RNN/LSTM نى ئەمەس، بەلكى Transformer ئىشلىتىدۇ.  
            لېكىن RNN/LSTM بولسا، زامانىۋى زەكتىكى ئىلىم-پەننىڭ مۇھىم قەدەملىك تۇرمۇشى.
          </p>
          <p className="mt-1 text-gray-600 text-sm" dir="ltr">
            Modern models (e.g., ChatGPT) use Transformers—not RNNs—but understanding RNN/LSTM is essential to grasp the evolution of AI.
          </p>
          <p className="mt-2 text-sm text-gray-400">© 2025 • KeLBiL  بلوگى • ئەسكەرتىش - Python</p>
        </div>
      </div>
    </div>
  );
};

export default Blog74;