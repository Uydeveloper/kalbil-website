// GatesModule.jsx
import React, { useState } from 'react';

const GatesModule = () => {
  const [activeSection, setActiveSection] = useState('classical');
  const [activeGate, setActiveGate] = useState(null);

  // كىلاسسىك دەرۋازىلار
  const classicalGates = [
    {
      id: 'not',
      name: 'NOT Gate',
      nameUy: 'NOT دەرۋازىسى',
      function: 'Output = NOT A → 0→1, 1→0',
      functionUy: 'چىقىرىش = يوق A → 0→1، 1→0',
      boolean: '¬A',
      symbol: 'NOT',
      truthTable: [
        { input: '0', output: '1' },
        { input: '1', output: '0' }
      ],
      examples: [
        {
          title: 'Toggle state',
          titleUy: 'ھالەتنى ئالماشتۇرۇش',
          code: 'let darkMode = true;\ndarkMode = !darkMode; // false',
          codeUy: 'let قاراڭغۇ = true;\nقاراڭغۇ = !قاراڭغۇ; // false'
        },
        {
          title: 'Validate absence',
          titleUy: 'بوشلىقىنى دەلىللەش',
          code: 'const isEmpty = (arr) => !arr.length;',
          codeUy: 'const بوش = (تۈزۈم) => !تۈزۈم.length;'
        }
      ],
      inputs: 1,
      color: '#0891b2'
    },
    {
      id: 'and',
      name: 'AND Gate',
      nameUy: 'AND دەرۋازىسى',
      function: 'Output = 1 only if A=1 AND B=1',
      functionUy: 'پەقەت A=1 ۋە B=1 بولغاندا چىقىرىش=1',
      boolean: 'A ∧ B',
      symbol: 'AND',
      truthTable: [
        { a: '0', b: '0', output: '0' },
        { a: '0', b: '1', output: '0' },
        { a: '1', b: '0', output: '0' },
        { a: '1', b: '1', output: '1' }
      ],
      examples: [
        {
          title: 'Login condition',
          titleUy: 'كىرگۈزۈش شەرتى',
          code: 'if (email && password) allowLogin();',
          codeUy: 'if (ئېلخەت && پارول) كىرگۈزۈش();'
        },
        {
          title: 'Safety interlock',
          titleUy: 'خەۋپسىزلىك قۇلۇپ',
          code: 'const start = engineReady && doorsClosed;',
          codeUy: 'const باشلاش = موتور && ئىشىك;'
        }
      ],
      inputs: 2,
      color: '#0891b2'
    },
    {
      id: 'or',
      name: 'OR Gate',
      nameUy: 'OR دەرۋازىسى',
      function: 'Output = 0 only if A=0 AND B=0',
      functionUy: 'پەقەت A=0 ۋە B=0 بولغاندا چىقىرىش=0',
      boolean: 'A ∨ B',
      symbol: 'OR',
      truthTable: [
        { a: '0', b: '0', output: '0' },
        { a: '0', b: '1', output: '1' },
        { a: '1', b: '0', output: '1' },
        { a: '1', b: '1', output: '1' }
      ],
      examples: [
        {
          title: 'Error handling',
          titleUy: 'خاتالىق مۇئامىلىسى',
          code: 'if (networkError || serverDown) alert(\'Try later\');',
          codeUy: 'if (تور || سېستېما) ئوقۇتۇش(\'كېيىن قايتا سىنا\');'
        },
        {
          title: 'Feature toggle',
          titleUy: 'ئىقتىدار ئالماشتۇرۇش',
          code: 'const showBeta = user.isDev || user.isTester;',
          codeUy: 'const كۆرسەت = ئىشلەتكۈچى.ئىشلىتىش || ئىشلەتكۈچى.تەكشۈرۈش;'
        }
      ],
      inputs: 2,
      color: '#0891b2'
    },
    {
      id: 'nand',
      name: 'NAND Gate',
      nameUy: 'NAND دەرۋازىسى',
      function: 'NOT(AND) → Opposite of AND',
      functionUy: 'يوق(AND) → AND نىڭ قارشىلىقى',
      boolean: '¬(A ∧ B)',
      symbol: 'NAND',
      truthTable: [
        { a: '0', b: '0', output: '1' },
        { a: '0', b: '1', output: '1' },
        { a: '1', b: '0', output: '1' },
        { a: '1', b: '1', output: '0' }
      ],
      examples: [
        {
          title: 'Prevent both true',
          titleUy: 'ئىككىلا true بولۇشنى توسۇش',
          code: '// Not both admin and guest\nconst valid = !(isAdmin && isGuest);',
          codeUy: '// ئادمىن ۋە مېھمان ئىككىلىسى بولماسۇن\nconst توغرا = !(ئادمىن && مېھمان);'
        },
        {
          title: 'Universal gate',
          titleUy: 'ئۇنىۋېرسال دەرۋازا',
          code: '// NAND can build any classical circuit',
          codeUy: '// NAND بىلەن بارلىق كىلاسسىك سىستېمىلارنى قۇرۇش مۇمكىن'
        }
      ],
      inputs: 2,
      color: '#0891b2'
    },
    {
      id: 'nor',
      name: 'NOR Gate',
      nameUy: 'NOR دەرۋازىسى',
      function: 'NOT(OR) → 1 only if A=0 AND B=0',
      functionUy: 'يوق(OR) → پەقەت A=0 ۋە B=0 بولغاندا 1',
      boolean: '¬(A ∨ B)',
      symbol: 'NOR',
      truthTable: [
        { a: '0', b: '0', output: '1' },
        { a: '0', b: '1', output: '0' },
        { a: '1', b: '0', output: '0' },
        { a: '1', b: '1', output: '0' }
      ],
      examples: [
        {
          title: 'Inactive state',
          titleUy: 'ھەرىكەتسىز ھالەت',
          code: 'const isIdle = !isPlaying && !isRecording;',
          codeUy: 'const ھەرىكەتسىز = !ئويۇن && !يېزىش;'
        },
        {
          title: 'Emergency stop',
          titleUy: 'ئاۋارىيە توختىتىش',
          code: 'const halt = !(powerOn || manualOverride);',
          codeUy: 'const توختا = !(ئىشلەۋاتىدۇ || قول);'
        }
      ],
      inputs: 2,
      color: '#0891b2'
    },
    {
      id: 'xor',
      name: 'XOR Gate',
      nameUy: 'XOR دەرۋازىسى',
      function: 'Output = 1 if inputs are different',
      functionUy: 'كىرگۈزۈشلەر پەرقلىق بولغاندا چىقىرىش=1',
      boolean: 'A ⊕ B',
      symbol: 'XOR',
      truthTable: [
        { a: '0', b: '0', output: '0' },
        { a: '0', b: '1', output: '1' },
        { a: '1', b: '0', output: '1' },
        { a: '1', b: '1', output: '0' }
      ],
      examples: [
        {
          title: 'Toggle selection',
          titleUy: 'تاللاشنى ئالماشتۇرۇش',
          code: 'isSelected = isSelected ^ true;',
          codeUy: 'تاللانغان = تاللانغان ^ true;'
        },
        {
          title: 'Parity check',
          titleUy: 'تەكشۈرۈش',
          code: 'const parity = (a ^ b ^ c) & 1;',
          codeUy: 'const تەكشۈر = (a ^ b ^ c) & 1;'
        }
      ],
      inputs: 2,
      color: '#0891b2'
    },
    {
      id: 'xnor',
      name: 'XNOR Gate',
      nameUy: 'XNOR دەرۋازىسى',
      function: 'Output = 1 if inputs are same',
      functionUy: 'كىرگۈزۈشلەر ئوخشاش بولغاندا چىقىرىش=1',
      boolean: '¬(A ⊕ B)',
      symbol: 'XNOR',
      truthTable: [
        { a: '0', b: '0', output: '1' },
        { a: '0', b: '1', output: '0' },
        { a: '1', b: '0', output: '0' },
        { a: '1', b: '1', output: '1' }
      ],
      examples: [
        {
          title: 'Equality check',
          titleUy: 'تەڭلىكنى تەكشۈرۈش',
          code: 'const equal = (a === b); // same as !(a ^ b)',
          codeUy: 'const ئوخشاش = (a === b); // !(a ^ b) دەك'
        },
        {
          title: 'Sync validation',
          titleUy: 'ماسلىشىشنى دەلىللەش',
          code: 'const synced = localVersion XNOR remoteVersion;',
          codeUy: 'const ماس = نۇسخا XNOR يىراقتىكى;'
        }
      ],
      inputs: 2,
      color: '#0891b2'
    }
  ];

  // كىۋانىت دەرۋازىلىرى
  const quantumGates = [
    {
      id: 'pauli-x',
      name: 'Pauli-X Gate',
      nameUy: 'پاۋلى-X دەرۋازىسى',
      function: 'Quantum NOT: |0⟩ ↔ |1⟩',
      functionUy: 'كىۋانىت NOT: |0⟩ ↔ |1⟩',
      matrix: '[[0,1],[1,0]]',
      symbol: 'X',
      examples: [
        {
          title: 'Flip basis state',
          titleUy: 'ئاساسىي ھالەتنى ئۆزگەرتىش',
          code: 'let q = [1,0]; // |0⟩\nq = [q[1], q[0]]; // |1⟩',
          codeUy: 'let q = [1,0]; // |0⟩\nq = [q[1], q[0]]; // |1⟩'
        },
        {
          title: 'Bit-flip error',
          titleUy: 'بىت-تەتۈرۈش خاتالىقى',
          code: '// X gate models bit-flip noise',
          codeUy: '// X دەرۋازىسى بىت-تەتۈرۈش شاۋقانىنى مودېللىيدۇ'
        }
      ],
      type: 'single-qubit',
      color: '#9333ea'
    },
    {
      id: 'pauli-y',
      name: 'Pauli-Y Gate',
      nameUy: 'پاۋلى-Y دەرۋازىسى',
      function: 'Rotates qubit around Y-axis',
      functionUy: 'كىۋانىت بىتنى Y-ئوقنى دورىدا ئايلاندۇرىدۇ',
      matrix: '[[0,-i],[i,0]]',
      symbol: 'Y',
      examples: [
        {
          title: 'Complex flip',
          titleUy: 'مۇرەككەپ تەتۈرۈش',
          code: '// |0⟩ → i|1⟩, |1⟩ → -i|0⟩\n// Requires complex numbers',
          codeUy: '// |0⟩ → i|1⟩, |1⟩ → -i|0⟩\n// مۇرەككەپ ساننى تەلەپ قىلىدۇ'
        },
        {
          title: 'Error correction',
          titleUy: 'خاتالىق تۈزىتىش',
          code: '// Used in detecting phase-flip errors',
          codeUy: '// فازا-تەتۈرۈش خاتالىقىنى بايقالىشىدا ئىشلىتىلىدۇ'
        }
      ],
      type: 'single-qubit',
      color: '#9333ea'
    },
    {
      id: 'pauli-z',
      name: 'Pauli-Z Gate',
      nameUy: 'پاۋلى-Z دەرۋازىسى',
      function: 'Flips phase: |1⟩ → -|1⟩',
      functionUy: 'فازانى تەتۈرىدۇ: |1⟩ → -|1⟩',
      matrix: '[[1,0],[0,-1]]',
      symbol: 'Z',
      examples: [
        {
          title: 'Phase marking',
          titleUy: 'فازا بەلگىلەش',
          code: 'let q = [0.7, 0.7]; // |+⟩\nq = [q[0], -q[1]]; // |-⟩',
          codeUy: 'let q = [0.7, 0.7]; // |+⟩\nq = [q[0], -q[1]]; // |-⟩'
        },
        {
          title: 'Oracle in Grover',
          titleUy: 'گروۋېر ئوراكلىلى',
          code: '// Z marks solution states',
          codeUy: '// Z چۈشۈم ھالىتىنى بەلگىلىيدۇ'
        }
      ],
      type: 'single-qubit',
      color: '#9333ea'
    },
    {
      id: 'hadamard',
      name: 'Hadamard Gate (H)',
      nameUy: 'ھادامار دەرۋازىسى (H)',
      function: 'Creates superposition: |0⟩ → (|0⟩+|1⟩)/√2',
      functionUy: 'سۇپىرپوزىتسىيە قۇرىدۇ: |0⟩ → (|0⟩+|1⟩)/√2',
      matrix: '(1/√2)[[1,1],[1,-1]]',
      symbol: 'H',
      examples: [
        {
          title: 'Quantum coin flip',
          titleUy: 'كىۋانىت تەسادىپىي چېچىش',
          code: 'let q = [1,0];\nconst h = Math.sqrt(0.5);\nq = [h, h]; // 50-50 chance',
          codeUy: 'let q = [1,0];\nconst h = Math.sqrt(0.5);\nq = [h, h]; // 50-50 ئېھتىمال'
        },
        {
          title: 'Start quantum algo',
          titleUy: 'كىۋانىت ئالگورىتمىنى باشلاش',
          code: '// First gate in Deutsch, Grover, etc.',
          codeUy: '// دويچ، گروۋېر ۋە باشقا ئالگورىتملارنىڭ باشلىنىشى'
        }
      ],
      type: 'single-qubit',
      color: '#9333ea'
    },
    {
      id: 'phase',
      name: 'Phase Gate (S)',
      nameUy: 'فازا دەرۋازىسى (S)',
      function: 'Adds π/2 phase to |1⟩',
      functionUy: '|1⟩ غا π/2 فازا قوشىدۇ',
      matrix: '[[1,0],[0,i]]',
      symbol: 'S',
      examples: [
        {
          title: 'Create |i⟩ state',
          titleUy: '|i⟩ ھالىتىنى قۇرۇش',
          code: 'let q = H|0⟩; // |+⟩\nq = S * q;   // |+i⟩ = (|0⟩ + i|1⟩)/√2',
          codeUy: 'let q = H|0⟩; // |+⟩\nq = S * q;   // |+i⟩ = (|0⟩ + i|1⟩)/√2'
        },
        {
          title: 'Clifford group',
          titleUy: 'كلىففور گۇرۇپپىسى',
          code: '// S + H + CNOT = universal for stabilizer circuits',
          codeUy: '// S + H + CNOT = مۇقىم سىستېمىلار ئۈچۈن ئۇنىۋېرسال'
        }
      ],
      type: 'single-qubit',
      color: '#9333ea'
    },
    {
      id: 't-gate',
      name: 'T Gate (π/8)',
      nameUy: 'T دەرۋازىسى (π/8)',
      function: 'Adds π/4 phase to |1⟩',
      functionUy: '|1⟩ غا π/4 فازا قوشىدۇ',
      matrix: '[[1,0],[0,e^{iπ/4}]]',
      symbol: 'T',
      examples: [
        {
          title: 'Approximate arbitrary rotations',
          titleUy: 'مۇرەككەپ ئايلانىشنى يېقىنلاشتۇرۇش',
          code: '// T + H can approximate any single-qubit gate',
          codeUy: '// T + H بىلەن بارلىق بىر كىۋانىت بىتلىك دەرۋازىلارنى يېقىنلاشتۇرۇش مۇمكىن'
        },
        {
          title: 'Magic state distillation',
          titleUy: 'سىھىرىي ھالەت سېلىشتۇرۇش',
          code: '// Enables universal fault-tolerant QC',
          codeUy: '// ئۇنىۋېرسال خاتاسىز كىۋانىت كومپيۇتېرلىشنى مۇمكىن قىلىدۇ'
        }
      ],
      type: 'single-qubit',
      color: '#9333ea'
    },
    {
      id: 'cnot',
      name: 'CNOT Gate',
      nameUy: 'CNOT دەرۋازىسى',
      function: 'Flip target if control=|1⟩',
      functionUy: 'كونترول=|1⟩ بولسا، ماھىيەتنى تەتۈرىدۇ',
      matrix: '4x4 (acts on 2 qubits)',
      symbol: 'X',
      examples: [
        {
          title: 'Entangle qubits',
          titleUy: 'كىۋانىت بىتلەرنى باغلاش',
          code: '// |00⟩ → H on first → CNOT → (|00⟩+|11⟩)/√2',
          codeUy: '// |00⟩ → بىرىنچىگە H → CNOT → (|00⟩+|11⟩)/√2'
        },
        {
          title: 'Quantum teleportation',
          titleUy: 'كىۋانىت تېلېفورماتسىيە',
          code: '// CNOT is essential for Bell measurement',
          codeUy: '// CNOT بېل ئۆلچىمى ئۈچۈن زۆرۈرىي'
        }
      ],
      type: 'two-qubit',
      color: '#9333ea'
    },
    {
      id: 'swap',
      name: 'SWAP Gate',
      nameUy: 'SWAP دەرۋازىسى',
      function: 'Exchanges states of two qubits',
      functionUy: 'ئىككى كىۋانىت بىتنىڭ ھالىتىنى ئالماشتۇرىدۇ',
      matrix: 'Swaps |01⟩ ↔ |10⟩',
      symbol: 'SWAP',
      examples: [
        {
          title: 'Reorder qubits',
          titleUy: 'كىۋانىت بىتلەرنى ئالماشتۇرۇش',
          code: '// Useful in hardware with connectivity constraints',
          codeUy: '// باغلىنىش چەكلىمىسى بار ئۈسكۈنىلەردە پايدىلىنىدۇ'
        },
        {
          title: 'Built from 3 CNOTs',
          titleUy: '3 CNOT دىن قۇرۇلغان',
          code: '// CNOT₁₂ → CNOT₂₁ → CNOT₁₂ = SWAP',
          codeUy: '// CNOT₁₂ → CNOT₂₁ → CNOT₁₂ = SWAP'
        }
      ],
      type: 'two-qubit',
      color: '#9333ea'
    },
    {
      id: 'toffoli',
      name: 'Toffoli Gate (CCNOT)',
      nameUy: 'توپپولى دەرۋازىسى (CCNOT)',
      function: 'Flip target iff both controls = |1⟩',
      functionUy: 'ئىككى كونترول=|1⟩ بولغاندا ماھىيەتنى تەتۈرىدۇ',
      matrix: '',
      symbol: 'X',
      examples: [
        {
          title: 'Reversible AND',
          titleUy: 'ئەكس قايتۇرغۇچان AND',
          code: '// |a,b,0⟩ → |a,b,a∧b⟩',
          codeUy: '// |a,b,0⟩ → |a,b,a∧b⟩'
        },
        {
          title: 'Universal for classical reversible computing',
          titleUy: 'كىلاسسىك ئەكس قايتۇرغۇچان كومپيۇتېرلىش ئۈچۈن ئۇنىۋېرسال',
          code: '// Can implement any classical circuit reversibly',
          codeUy: '// بارلىق كىلاسسىك سىستېمىلارنى ئەكس قايتۇرغۇچان قىلىپ ئىشلىتىش مۇمكىن'
        }
      ],
      type: 'three-qubit',
      color: '#9333ea'
    }
  ];

  // ھازىرقى دەرۋازىلار
  const currentGates = activeSection === 'classical' ? classicalGates : quantumGates;

  // دەرۋازا سىمۋولىنى كۆرسىتىش
  const renderGateSymbol = (gate) => {
    const gateColor = gate.color || (activeSection === 'classical' ? '#0891b2' : '#9333ea');
    
    if (activeSection === 'classical') {
      return (
        <div className="flex items-center justify-center my-4">
          {Array.from({ length: gate.inputs }).map((_, i) => (
            <div key={i} className="w-8 h-0.5 bg-slate-500"></div>
          ))}
          <div 
            className="flex items-center justify-center mx-4"
            style={{
              border: `2px solid ${gateColor}`,
              color: gateColor,
              width: '60px',
              height: '50px',
              borderRadius: '6px',
              backgroundColor: `${gateColor}15`,
              fontWeight: 'bold',
              fontSize: '14px'
            }}
          >
            {gate.symbol}
          </div>
          <div className="w-8 h-0.5 bg-slate-500"></div>
        </div>
      );
    } else {
      switch (gate.type) {
        case 'single-qubit':
          return (
            <div className="flex items-center justify-center my-4">
              <div className="w-8 h-0.5 bg-slate-500"></div>
              <div 
                className="flex items-center justify-center mx-4"
                style={{
                  border: `2px solid ${gateColor}`,
                  color: gateColor,
                  width: '60px',
                  height: '50px',
                  borderRadius: '6px',
                  backgroundColor: `${gateColor}15`,
                  fontWeight: 'bold',
                  fontSize: '18px'
                }}
              >
                {gate.symbol}
              </div>
              <div className="w-8 h-0.5 bg-slate-500"></div>
            </div>
          );
        case 'two-qubit':
          if (gate.id === 'cnot') {
            return (
              <div className="flex items-center justify-center my-4">
                <div className="w-6 h-0.5 bg-slate-500"></div>
                <div className="w-6 h-0.5 bg-slate-500"></div>
                <div className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-slate-500"></div>
                  <div 
                    className="flex items-center justify-center"
                    style={{
                      border: `2px solid ${gateColor}`,
                      color: gateColor,
                      width: '50px',
                      height: '50px',
                      borderRadius: '6px',
                      backgroundColor: `${gateColor}15`,
                      fontWeight: 'bold',
                      fontSize: '18px'
                    }}
                  >
                    X
                  </div>
                </div>
                <div className="w-6 h-0.5 bg-slate-500"></div>
                <div className="w-6 h-0.5 bg-slate-500"></div>
              </div>
            );
          } else if (gate.id === 'swap') {
            return (
              <div className="flex items-center justify-center my-4">
                <div className="w-6 h-0.5 bg-slate-500"></div>
                <div className="w-6 h-0.5 bg-slate-500"></div>
                <div className="flex flex-col items-center">
                  <div 
                    className="flex items-center justify-center mb-1"
                    style={{
                      border: `2px solid ${gateColor}`,
                      color: gateColor,
                      width: '35px',
                      height: '35px',
                      borderRadius: '6px',
                      backgroundColor: `${gateColor}15`,
                      fontWeight: 'bold',
                      fontSize: '18px'
                    }}
                  >
                    ×
                  </div>
                  <div className="w-0.5 h-2 bg-slate-500"></div>
                  <div 
                    className="flex items-center justify-center mt-1"
                    style={{
                      border: `2px solid ${gateColor}`,
                      color: gateColor,
                      width: '35px',
                      height: '35px',
                      borderRadius: '6px',
                      backgroundColor: `${gateColor}15`,
                      fontWeight: 'bold',
                      fontSize: '18px'
                    }}
                  >
                    ×
                  </div>
                </div>
                <div className="w-6 h-0.5 bg-slate-500"></div>
                <div className="w-6 h-0.5 bg-slate-500"></div>
              </div>
            );
          }
          break;
        case 'three-qubit':
          return (
            <div className="flex items-center justify-center my-4">
              <div className="w-4 h-0.5 bg-slate-500"></div>
              <div className="w-4 h-0.5 bg-slate-500"></div>
              <div className="w-4 h-0.5 bg-slate-500"></div>
              <div className="flex flex-col items-center">
                <div 
                  className="flex items-center justify-center mb-1"
                  style={{
                    border: `2px solid ${gateColor}`,
                    color: gateColor,
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: `${gateColor}20`,
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}
                >
                  ●
                </div>
                <div 
                  className="flex items-center justify-center my-1"
                  style={{
                    border: `2px solid ${gateColor}`,
                    color: gateColor,
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: `${gateColor}20`,
                    fontWeight: 'bold',
                    fontSize: '14px'
                  }}
                >
                  ●
                </div>
                <div 
                  className="flex items-center justify-center mt-1"
                  style={{
                    border: `2px solid ${gateColor}`,
                    color: gateColor,
                    width: '50px',
                    height: '50px',
                    borderRadius: '6px',
                    backgroundColor: `${gateColor}15`,
                    fontWeight: 'bold',
                    fontSize: '18px'
                  }}
                >
                  X
                </div>
              </div>
              <div className="w-4 h-0.5 bg-slate-500"></div>
              <div className="w-4 h-0.5 bg-slate-500"></div>
              <div className="w-4 h-0.5 bg-slate-500"></div>
            </div>
          );
        default:
          return (
            <div className="flex items-center justify-center my-4">
              <div className="w-8 h-0.5 bg-slate-500"></div>
              <div 
                className="flex items-center justify-center mx-4"
                style={{
                  border: `2px solid ${gateColor}`,
                  color: gateColor,
                  width: '60px',
                  height: '50px',
                  borderRadius: '6px',
                  backgroundColor: `${gateColor}15`,
                  fontWeight: 'bold',
                  fontSize: '14px'
                }}
              >
                {gate.symbol}
              </div>
              <div className="w-8 h-0.5 bg-slate-500"></div>
            </div>
          );
      }
    }
  };

  // ھەقىقەت جەدۋىلى
  const renderTruthTable = (gate) => {
    if (!gate.truthTable) return null;
    
    if (gate.inputs === 1) {
      return (
        <div className="mt-4">
          <h4 className="font-semibold text-slate-700 mb-2">Truth Table:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-slate-700">Input</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-slate-700">Output</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {gate.truthTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="px-4 py-2 text-sm text-slate-900">{row.input}</td>
                    <td className="px-4 py-2 text-sm text-slate-900">{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mt-4">
          <h4 className="font-semibold text-slate-700 mb-2">Truth Table:</h4>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-2 text-left text-sm font-medium text-slate-700">A</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-slate-700">B</th>
                  <th className="px-4 py-2 text-left text-sm font-medium text-slate-700">Output</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-200">
                {gate.truthTable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="px-4 py-2 text-sm text-slate-900">{row.a}</td>
                    <td className="px-4 py-2 text-sm text-slate-900">{row.b}</td>
                    <td className="px-4 py-2 text-sm text-slate-900">{row.output}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 text-slate-900 p-4 md:p-6">
      {/* باش بەت */}
      <header className="text-center mb-10 pt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-2">
          All Classical & Quantum Logic Gates
        </h1>
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-600 mb-4">
          بارلىق كىلاسسىك ۋە كىۋانىت لوگىك دەرۋازىلىرى
        </h1>
        <p className="text-slate-600 mb-1">
          Complete bilingual reference with practical examples per gate
        </p>
        <p className="text-slate-600">
          ھەر بىر دەرۋازىغا ئەمەلىي مىساللار بىلەن تولۇق ئىككى تىللىق قوللانچا
        </p>
      </header>

      <div className="max-w-7xl mx-auto">
        {/* كىرسەش سۆزى */}
        <section className="mb-10 bg-white p-6 rounded-2xl shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold text-cyan-600 mb-3">
                What is a Logic Gate?
              </h2>
              <p className="text-slate-700 leading-relaxed">
                A logic gate is a physical or simulated device that performs a Boolean function on one or more binary inputs to produce a single binary output. Classical gates are irreversible; quantum gates are reversible and operate on qubits in superposition.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-purple-700 mb-3">
                لوگىك دەرۋازىسى دېگەن نىمە؟
              </h2>
              <p className="text-slate-700 leading-relaxed">
                لوگىك دەرۋازىسى بىر ياكى بىر قانچە ئىككىلىك كىرگۈزۈش بويىچە لوگىك ۋەزىپە ئېلىپ بارىدىغان جىھاز ياكى سىمۇلاتور دۇر. ئۇ بىردىنبىر ئىككىلىك چىقىرىش ھاسىل قىلىدۇ. كىلاسسىك دەرۋازىلار ئەكس قايتۇرۇش مۇمكىن ئەمەس؛ كىۋانىت دەرۋازىلىرى ئەكس قايتۇرغۇچان ۋە سۇپىرپوزىتسىيە ھالىتىدىكى كىۋانىت بىتلىرى بىلەن ئىشلەيدۇ.
              </p>
            </div>
          </div>
        </section>

        {/* بۆلۈم تاللاش تۇيۇنلىرى */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              onClick={() => setActiveSection('classical')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === 'classical'
                  ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-200'
                  : 'bg-white text-cyan-700 border border-cyan-200 hover:bg-cyan-50 hover:shadow-md'
              }`}
            >
              Classical Gates / كىلاسسىك دەرۋازىلار
            </button>
            <button
              onClick={() => setActiveSection('quantum')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeSection === 'quantum'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-200'
                  : 'bg-white text-purple-700 border border-purple-200 hover:bg-purple-50 hover:shadow-md'
              }`}
            >
              Quantum Gates / كىۋانىت دەرۋازىلىرى
            </button>
          </div>
          
          {/* دەرۋازا تاللاش تۇيۇنلىرى */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {currentGates.map((gate) => (
              <button
                key={gate.id}
                onClick={() => setActiveGate(activeGate === gate.id ? null : gate.id)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeGate === gate.id
                    ? activeSection === 'classical'
                      ? 'bg-cyan-100 text-cyan-700 border border-cyan-300'
                      : 'bg-purple-100 text-purple-700 border border-purple-300'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-50'
                }`}
              >
                {gate.symbol}
              </button>
            ))}
          </div>
        </div>

        {/* كىلاسسىك دەرۋازىلار */}
        {activeSection === 'classical' && (
          <section id="classical">
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-600 mb-8 pb-3 border-b-2 border-cyan-300">
              Classical Logic Gates / كىلاسسىك لوگىك دەرۋازىلىرى
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {classicalGates.map((gate) => (
                <div 
                  key={gate.id} 
                  className={`bg-white rounded-xl shadow-lg border transition-all duration-300 ${
                    activeGate === gate.id 
                      ? 'border-cyan-400 shadow-xl scale-[1.02]' 
                      : 'border-slate-200 hover:shadow-xl hover:border-cyan-200'
                  }`}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* ئىنگلىزچە تەرىپ */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-cyan-700">{gate.name}</h3>
                          <span className="text-sm font-semibold px-3 py-1 rounded-full bg-cyan-100 text-cyan-800">
                            {gate.boolean}
                          </span>
                        </div>
                        
                        <p className="text-slate-700 mb-3">
                          <span className="font-semibold text-cyan-600">Function:</span> {gate.function}
                        </p>
                        
                        {renderGateSymbol(gate)}
                        
                        {renderTruthTable(gate)}
                        
                        <div className="mt-6 space-y-4">
                          {gate.examples.map((example, idx) => (
                            <div key={idx}>
                              <h4 className="font-semibold text-cyan-600 mb-2">
                                {example.title}
                              </h4>
                              <pre className="bg-slate-50 p-3 rounded-lg font-mono text-sm overflow-x-auto border-l-4 border-cyan-500 text-slate-800">
                                {example.code}
                              </pre>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* ئۇيغۇرچە تەرىپ */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-purple-700">{gate.nameUy}</h3>
                          <span className="text-sm font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                            {gate.boolean}
                          </span>
                        </div>
                        
                        <p className="text-slate-700 mb-3">
                          <span className="font-semibold text-purple-600">ۋەزىپە:</span> {gate.functionUy}
                        </p>
                        
                        <div className="opacity-90">
                          {renderGateSymbol(gate)}
                        </div>
                        
                        <div className="mt-6 space-y-4">
                          {gate.examples.map((example, idx) => (
                            <div key={idx}>
                              <h4 className="font-semibold text-purple-600 mb-2">
                                {example.titleUy}
                              </h4>
                              <pre className="bg-slate-50 p-3 rounded-lg font-mono text-sm overflow-x-auto border-l-4 border-purple-500 text-slate-800">
                                {example.codeUy}
                              </pre>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* ئورتاق ئۇچۇرلار */}
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{backgroundColor: gate.color}}></div>
                          <span className="text-sm text-slate-600">
                            {activeSection === 'classical' ? 'Classical Gate' : 'Quantum Gate'}
                          </span>
                        </div>
                        <div className="text-sm text-slate-600">
                          Inputs: {gate.inputs || '1'}
                        </div>
                        <div className="text-sm text-slate-600">
                          Type: {gate.type || 'Basic'}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* كىۋانىت دەرۋازىلىرى */}
        {activeSection === 'quantum' && (
          <section id="quantum">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-600 mb-8 pb-3 border-b-2 border-purple-300">
              Quantum Logic Gates / كىۋانىت لوگىك دەرۋازىلىرى
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {quantumGates.map((gate) => (
                <div 
                  key={gate.id} 
                  className={`bg-white rounded-xl shadow-lg border transition-all duration-300 ${
                    activeGate === gate.id 
                      ? 'border-purple-400 shadow-xl scale-[1.02]' 
                      : 'border-slate-200 hover:shadow-xl hover:border-purple-200'
                  }`}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* ئىنگلىزچە تەرىپ */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-purple-700">{gate.name}</h3>
                          <span className="text-sm font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-800">
                            {gate.type || 'Qubit'}
                          </span>
                        </div>
                        
                        <p className="text-slate-700 mb-3">
                          <span className="font-semibold text-purple-600">Function:</span> {gate.function}
                        </p>
                        
                        {gate.matrix && (
                          <p className="text-slate-700 mb-4">
                            <span className="font-semibold text-purple-600">Matrix:</span> {gate.matrix}
                          </p>
                        )}
                        
                        {renderGateSymbol(gate)}
                        
                        <div className="mt-6 space-y-4">
                          {gate.examples.map((example, idx) => (
                            <div key={idx}>
                              <h4 className="font-semibold text-purple-600 mb-2">
                                {example.title}
                              </h4>
                              <pre className="bg-slate-50 p-3 rounded-lg font-mono text-sm overflow-x-auto border-l-4 border-purple-500 text-slate-800">
                                {example.code}
                              </pre>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* ئۇيغۇرچە تەرىپ */}
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-xl font-bold text-cyan-700">{gate.nameUy}</h3>
                          <span className="text-sm font-semibold px-3 py-1 rounded-full bg-cyan-100 text-cyan-800">
                            {gate.type || 'كىۋانىت بىت'}
                          </span>
                        </div>
                        
                        <p className="text-slate-700 mb-3">
                          <span className="font-semibold text-cyan-600">ۋەزىپە:</span> {gate.functionUy}
                        </p>
                        
                        {gate.matrix && (
                          <p className="text-slate-700 mb-4">
                            <span className="font-semibold text-cyan-600">ماترىتسا:</span> {gate.matrix}
                          </p>
                        )}
                        
                        <div className="opacity-90">
                          {renderGateSymbol(gate)}
                        </div>
                        
                        <div className="mt-6 space-y-4">
                          {gate.examples.map((example, idx) => (
                            <div key={idx}>
                              <h4 className="font-semibold text-cyan-600 mb-2">
                                {example.titleUy}
                              </h4>
                              <pre className="bg-slate-50 p-3 rounded-lg font-mono text-sm overflow-x-auto border-l-4 border-cyan-500 text-slate-800">
                                {example.codeUy}
                              </pre>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* ئورتاق ئۇچۇرلار */}
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center">
                          <div className="w-3 h-3 rounded-full mr-2" style={{backgroundColor: gate.color}}></div>
                          <span className="text-sm text-slate-600">
                            {gate.type === 'single-qubit' ? 'Single Qubit' : 
                             gate.type === 'two-qubit' ? 'Two Qubit' : 
                             gate.type === 'three-qubit' ? 'Three Qubit' : 'Quantum Gate'}
                          </span>
                        </div>
                        <div className="text-sm text-slate-600">
                          Color Code: {gate.color}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ئۇچۇر بۆلۈمى */}
        <section className="mt-12 mb-8 bg-gradient-to-r from-cyan-50 to-purple-50 p-6 rounded-2xl shadow-lg border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-600 mb-2">
                {classicalGates.length}
              </div>
              <div className="text-lg font-semibold text-slate-700">
                Classical Gates
              </div>
              <div className="text-slate-600 mt-1">
                كىلاسسىك دەرۋازىلار
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {quantumGates.length}
              </div>
              <div className="text-lg font-semibold text-slate-700">
                Quantum Gates
              </div>
              <div className="text-slate-600 mt-1">
                كىۋانىت دەرۋازىلىرى
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-600 mb-2">
                {classicalGates.length + quantumGates.length}
              </div>
              <div className="text-lg font-semibold text-slate-700">
                Total Gates
              </div>
              <div className="text-slate-600 mt-1">
                جەمئىي دەرۋازىلار
              </div>
            </div>
          </div>
        </section>

        {/* پائۇتېر */}
        <footer className="text-center text-slate-600 text-sm mt-12 pt-8 border-t border-slate-300">
          <p className="mb-1 font-medium">
            © 2025 KeLBiL QuantumAI Education Initiative for Uyghur Communities
          </p>
          <p className="mb-4 text-slate-500">
            ئۇيغۇر جامائەتلىرى ئۈچۈن كىۋانىت ۋە سۈنئىي زېكى بىلىم يېتىلدۈرۈش مۇبىتى
          </p>
          <p className="mb-1">
            This tutorial includes all fundamental classical and quantum logic gates with bilingual explanations and practical code examples.
          </p>
          <p>
            بۇ دەرسلىكتە ئىككى تىللىق چۈشەندۈرۈش ۋە ئەمەلىي كود مىساللىرى بىلەن بارلىق ئاساسىي كىلاسسىك ۋە كىۋانىت لوگىك دەرۋازىلىرى قاچىلاندى.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default GatesModule;