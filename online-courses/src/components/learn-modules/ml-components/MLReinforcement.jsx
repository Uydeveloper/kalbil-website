// src/components/learn-modules/ml-components/MLReinforcement.jsx
import React from 'react';
import { Zap, Target, Trophy, TrendingUp, Play } from 'lucide-react';

const MLReinforcement = ({ onComplete }) => {
  const steps = [
    { step: 1, title: 'ھالەتنى كۆزىتىش', description: 'مۇھىتنىڭ ھالەتىنى كۆرۈش' },
    { step: 2, title: 'ھەرىكەت قىلىش', description: 'ھەرىكەت تاللاش' },
    { step: 3, title: 'مۇكاپات ئېلىش', description: 'نەتىجىگە كۆرە مۇكاپات ئېلىش' },
    { step: 4, title: 'ئۆگىنىش', description: 'تەجرىبىدىن ئۆگىنىش' },
    { step: 5, title: 'تەكرارلاش', description: 'جەرياننى تەكرارلاش' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100">
        <h5 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          كۈچلەندۈرۈش ئۆگىنىشى
        </h5>
        <p className="text-gray-700">
          ئاكتور مۇھىت بىلەن ئۆز-ئارا تەسىرلىشىپ، مۇكاپات بىلەن ئۆگىنىدىغان سىستېما
        </p>
      </div>

      <div className="grid grid-cols-5 gap-4">
        {steps.map((item) => (
          <div key={item.step} className="text-center">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-orange-100 text-yellow-700 rounded-full flex flex-col items-center justify-center mx-auto mb-2">
              <div className="font-bold">{item.step}</div>
            </div>
            <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
            <div className="text-xs text-gray-600 mt-1">{item.description}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">Q-Learning مىسالى:</h5>
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`import numpy as np

class QLearningAgent:
    def __init__(self, n_states, n_actions, alpha=0.1, gamma=0.9, epsilon=0.1):
        self.n_states = n_states
        self.n_actions = n_actions
        self.alpha = alpha    # ئۆگىنىش سۈرئىتى
        self.gamma = gamma    # دېسكونت فاكتورى
        self.epsilon = epsilon # تەكشۈرۈش ئېھتىماللىقى
        
        # Q-جەدۋىل قۇرۇش
        self.q_table = np.zeros((n_states, n_actions))
    
    def choose_action(self, state):
        # تەكشۈرۈش-ئىشلىتىش
        if np.random.uniform(0, 1) < self.epsilon:
            # تەكشۈرۈش: تاسادىپىي ھەرىكەت
            return np.random.choice(self.n_actions)
        else:
            # ئىشلىتىش: ئەڭ يۇقىرى قىممەتلىك ھەرىكەت
            return np.argmax(self.q_table[state])
    
    def learn(self, state, action, reward, next_state, done):
        # Q-قىممىتىنى يېڭىلاش
        current_q = self.q_table[state, action]
        
        if done:
            target = reward
        else:
            target = reward + self.gamma * np.max(self.q_table[next_state])
        
        # Q-قىممىتىنى يېڭىلاش
        self.q_table[state, action] = current_q + self.alpha * (target - current_q)

# ئىشلىتىش
agent = QLearningAgent(n_states=10, n_actions=4)

# تەربىيەلەش
for episode in range(1000):
    state = 0
    done = False
    
    while not done:
        action = agent.choose_action(state)
        next_state, reward, done = env.step(action)
        agent.learn(state, action, reward, next_state, done)
        state = next_state`}
            </pre>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h5 className="font-bold text-gray-800 mb-4">ئۆگىنىش كۆرسەتكۈچى:</h5>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-yellow-500" />
                  <span className="font-medium text-gray-700">تەربىيە ئەۋرى</span>
                </div>
                <span className="font-semibold text-yellow-600">1,000</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-green-500" />
                  <span className="font-medium text-gray-700">ئوتتۇرا مۇكاپات</span>
                </div>
                <span className="font-semibold text-green-600">+85.6</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '85.6%' }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-blue-500" />
                  <span className="font-medium text-gray-700">ئۆگىنىش سۈرئىتى</span>
                </div>
                <span className="font-semibold text-blue-600">0.1</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-yellow-100">
            <div className="flex items-center gap-3">
              <Play className="w-5 h-5 text-orange-500" />
              <div>
                <div className="font-semibold text-gray-800">ئىپتىدائىي قىممەت</div>
                <div className="text-sm text-gray-600">Q-جەدۋىل باشتا 0 قىممەتتە باشلىنىدۇ، ئاندىن ئۆگىنىدۇ</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-600">
          <span className="font-semibold">5</span> قەدەملىك ئۆگىنىش جەريانى
        </div>
        <button
          onClick={onComplete}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg hover:from-yellow-600 hover:to-orange-700 transition-all duration-300"
        >
          <Zap className="w-5 h-5" />
          كۈچلەندۈرۈش ئۆگىنىشىنى تاماملا
        </button>
      </div>
    </div>
  );
};

export default MLReinforcement;