import React, { useState, useEffect, useRef, useCallback } from 'react';

// ==========================================
// 🎓 سانلىق مەلۇمات: 60 سوئال (تولۇق)
// ==========================================
const questions = [
  { q: "Hadamard Gate نېمە قىلىدۇ؟", opts: ["|0⟩ نى |1⟩ گە ئايلاندۇرىدۇ", "Superposition ھاسىل قىلىدۇ", "Qubit نى ئۆچۈرىدۇ", "Measurement ئېلىپ بارىدۇ"], ans: 1, exp: "Hadamard (H) gate قۇبىتنى |0⟩ ياكى |1⟩ دىن equal superposition (|0⟩+|1⟩)/√2 گە ئايلاندۇرىدۇ.", code: "qc.h(0)" },
  { q: "CNOT Gate قايسى تۈرگە كىرىدۇ؟", opts: ["Single-qubit", "Multi-qubit gate", "Measurement", "Classical logic gate"], ans: 1, exp: "CNOT (CX) ئىككى قۇبىتقا تەسىر قىلىدۇ.", code: "qc.cx(0, 1)" },
  { q: "تۆۋەندىكى كودنىڭ نەتىجىسى نېمە؟\nqc=QuantumCircuit(1)\nqc.x(0)\nqc.measure_all()", opts: ["0", "1", "50% 0 ۋە 50% 1", "خاتالىق بېرىدۇ"], ans: 1, exp: "X gate |0⟩ نى |1⟩ گە ئايلاندۇرىدۇ.", code: "qc.x(0)\nqc.measure_all()" },
  { q: "qc.h(0) نىڭ ئاساسلىق رولى نېمە؟", opts: ["Phase نى ئۆزگەرتىدۇ", "Equal Superposition ھاسىل قىلىدۇ", "Qubit نى قۇلۇپلايدۇ", "Classical بىت قايتۇرىدۇ"], ans: 1, exp: "H gate superposition ھاسىل قىلىدۇ.", code: "qc.h(0)" },
  { q: "Quantum Circuit 'depth' دېگەن نېمە؟", opts: ["Qubit سانى", "Gate قاتلاملىرىنىڭ ئەڭ ئۇزۇن يولى", "ئىشلىتىلگەن ئەسلەھە مىقدارى", "چىقىرىش نەتىجىسى"], ans: 1, exp: "Depth circuit نىڭ ئەڭ ئۇزۇن يولى.", code: "qc.depth()" },
  { q: "qc.barrier() نېمە ئۈچۈن ئىشلىتىلىدۇ؟", opts: ["Circuit نى توختىتىدۇ", "Compiler optimisation نى چەكلەپ", "يېڭى قۇرۇلما قوشىدۇ", "نەتىجىنى ساقلايدۇ"], ans: 1, exp: "Barrier debugging ئۈچۈن.", code: "qc.barrier()" },
  { q: "OpenQASM نېمە؟", opts: ["Python كۈتۈپخانىسى", "Quantum circuit تىلى", "سىن خاتىرىلەش", "Backend نامى"], ans: 1, exp: "OpenQASM circuit تىلى.", code: "print(qc.qasm())" },
  { q: "qc.cx(0, 1) نىڭ مەنىسى نېمە؟", opts: ["ئالماشتۇرۇش", "Control NOT gate", "ئۆلچەش", "Hadamard"], ans: 1, exp: "CX: كونترول ۋە نىشان.", code: "qc.cx(0,1)" },
  { q: "Bell state قانداق قۇرۇلىدۇ؟", opts: ["X + Z", "H(0) + CX(0,1)", "Measure", "Swap"], ans: 1, exp: "Bell state: H + CX.", code: "qc.h(0); qc.cx(0,1)" },
  { q: "Quantum Measurement نىڭ ئالاھىدىلىكى؟", opts: ["Deterministic", "Probabilistic", "پەقەت 0", "كۈچەيتىش"], ans: 1, exp: "ئۆلچەش probabilistic.", code: "qc.measure_all()" },
  { q: "qc.measure_all() نېمە قىلىدۇ؟", opts: ["پەقەت 0-قۇبىتنى ئۆلچەيدۇ", "بارلىق قۇبىتلارنى ئۆلچەپ classical register غا يازىدۇ", "Circuit نى ئۆچۈرىدۇ", "يېڭى gate قوشىدۇ"], ans: 1, exp: "measure_all() بارلىق qubit لارنى ئۆلچەپ، classical register غا ساقلايدۇ.", code: "qc.measure_all()" },
  { q: "Quantum register نېمە؟", opts: ["كود بۆلىكى", "Qubit توپلىمى", "Classical بىت يادىكارلىقى", "چىقىرىش ئېكرانى"], ans: 1, exp: "QuantumRegister بولسا qubit لارنىڭ لوگىكىلىق توپلىمى.", code: "qr = QuantumRegister(3, 'q')" },
  { q: "Classical register نېمە ئۈچۈن ئىشلىتىلىدۇ؟", opts: ["Gate ماترىتسىسىنى ساقلاش", "ئۆلچەش نەتىجىلىرىنى ساقلاش", "Backend تاللاش", "كود خاتالىقىنى بايقاش"], ans: 1, exp: "ClassicalRegister ئۆلچەش نەتىجىلىرىنى (0/1) ساقلاش ئۈچۈن.", code: "cr = ClassicalRegister(2, 'c')" },
  { q: "qc.draw() نېمە ئىش قىلىدۇ؟", opts: ["Circuit نى ۋىزۇئال شەكىلدە كۆرسىتىدۇ", "كودنى ئىجرا قىلىدۇ", "Backend قا ئۇلايدۇ", "نەتىجىنى گىرافىكقا ئايلاندۇرىدۇ"], ans: 0, exp: "draw() circuit نى ASCII ياكى matplotlib شەكلىدە كۆرسىتىدۇ.", code: "print(qc.draw('text'))" },
  { q: "qc.compose() ياكى qc.extend() نىڭ رولى نېمە؟", opts: ["Circuit نى بىرلەشتۈرۈش/قوشۇش", "Circuit نى ئۆچۈرۈش", "قۇبىت سانىنى ئازايتىش", "نەتىجىنى تەھرىرلەش"], ans: 0, exp: "compose() ياكى extend() باشقا circuit نى ھازىرقى circuit قا قوشىدۇ.", code: "qc.compose(other_qc)" },
  { q: "qc.depth() قايسى قىممەتنى قايتۇرىدۇ؟", opts: ["Qubit سانى", "Gate قاتلام سانى (Depth)", "ئىجرا ۋاقتى", "ئۆلچەش نەتىجىسى"], ans: 1, exp: "depth() circuit نىڭ ئەڭ چوڭ gate قاتلام سانىنى قايتۇرىدۇ.", code: "print(qc.depth())" },
  { q: "qc.qasm() نېمە قايتۇرىدۇ؟", opts: ["Python ئوبيېكتى", "OpenQASM تېكىست قاتارى", "Backend ئۇچۇرى", "خاتالىق خەۋىرى"], ans: 1, exp: "qasm() circuit نى OpenQASM 2.0 تېكىستى شەكلىدە قايتۇرىدۇ.", code: "print(qc.qasm())" },
  { q: "qc.barrier() قاچان ئىشلىتىش ئەڭ مۇاپىق؟", opts: ["ھەمىشە باشلىنىشتا", "Debugging ياكى compiler optimisation نى كونترول قىلغاندا", "نەتىجە چىقارغاندا", "كود يازغاندا"], ans: 1, exp: "Barrier ئاساسەن debugging ياكى compiler نىڭ gate تەرتىپىنى ئۆزگەرتىشىنى توسۇش ئۈچۈن.", code: "qc.barrier()" },
  { q: "qc.swap(0, 1) نېمە قىلىدۇ؟", opts: ["ئىككى قۇبىتنىڭ ھالىتىنى ئالماشتۇرىدۇ", "ئىككى قۇبىتنى ئۆچۈرىدۇ", "يېڭى قۇبىت قوشىدۇ", "ئۆلچەش ئېلىپ بارىدۇ"], ans: 0, exp: "SWAP gate ئىككى قۇبىتنىڭ quantum ھالىتىنى ئالماشتۇرىدۇ.", code: "qc.swap(0, 1)" },
  { q: "تۆۋەندىكىلەرنىڭ قايسىسى Multi-qubit gate؟", opts: ["H", "X", "CX (CNOT)", "Z"], ans: 2, exp: "CX (CNOT) ئىككى قۇبىتقا تەسىر قىلىدىغان يەگىنە multi-qubit gate.", code: "qc.cx(0, 1)" },
  { q: "execute() نىڭ ئاساسلىق ۋەزىپىسى نېمە؟", opts: ["Circuit نى backend دا ئىجرا قىلىدۇ", "Circuit سىزىدۇ", "Backend تاللايدۇ", "كودنى تەھرىرلەيدۇ"], ans: 0, exp: "execute() circuit نى تاللانغان backend دا ئىجرا قىلىدۇ.", code: "job = execute(qc, backend, shots=1024)" },
  { q: "Quantum Backend دېگەن نېمە؟", opts: ["Simulator ياكى ھەقىقىي Quantum ئۈسكۈنىسى", "Python كودى", "Classical كومپيۇتېر", "UI دىزايىن"], ans: 0, exp: "Backend بولسا circuit نى ئىجرا قىلىدىغان مۇھىت.", code: "backend = Aer.get_backend('qasm_simulator')" },
  { q: "qasm_simulator نېمە قىلىدۇ؟", opts: ["تولۇق quantum state نى ھېسابلايدۇ", "ئۆلچەش نەتىجىلىرىنى تەقلىد قىلىدۇ", "Unitary matrix قايتۇرىدۇ", "Real hardware غا ئۇلايدۇ"], ans: 1, exp: "qasm_simulator ئۆلچەش نەتىجىلىرىنى (counts) تەقلىد قىلىدۇ.", code: "backend = Aer.get_backend('qasm_simulator')" },
  { q: "statevector_simulator نىڭ ئالاھىدىلىكى نېمە؟", opts: ["پەقەت 0/1 قايتۇرىدۇ", "تولۇق quantum amplitude vector نى ھېسابلايدۇ", "پەقەت خاتالىقنى بايقايدۇ", "تېز ئىجرا قىلىدۇ"], ans: 1, exp: "statevector_simulator circuit نىڭ تولۇق quantum state نى قايتۇرىدۇ.", code: "backend = Aer.get_backend('statevector_simulator')" },
  { q: "{'00': 512, '11': 512} نەتىجىسى قايسى state كە ۋەكىللىك قىلىدۇ؟", opts: ["Product state", "Bell state (Maximally entangled)", "Mixed state", "Classical state"], ans: 1, exp: "00 ۋە 11 نىڭ تەڭ چىقىشى Bell state (Φ+) نىڭ ئالاھىدىلىكى.", code: "# H(0) + CX(0,1) → |00⟩+|11⟩" },
  { q: "result.get_counts() نېمە قايتۇرىدۇ؟", opts: ["Probability amplitude", "ئۆلچەش نەتىجىلىرىنىڭ سانى", "Unitary matrix", "Backend نامى"], ans: 1, exp: "get_counts() ئۆلچەش نەتىجىلىرىنىڭ frequency dictionary نى قايتۇرىدۇ.", code: "print(result.get_counts())" },
  { q: "result.get_statevector() نېمە قايتۇرىدۇ؟", opts: ["ئۆلچەش سانى", "Complex amplitude vector", "Circuit depth", "Error rate"], ans: 1, exp: "get_statevector() تولۇق quantum state نى complex array شەكلىدە قايتۇرىدۇ.", code: "print(result.get_statevector())" },
  { q: "unitary_simulator نېمە قايتۇرىدۇ؟", opts: ["ئۆلچەش نەتىجىسى", "Circuit نىڭ ئومۇمىي Unitary matrix نى", "Qubit سانى", "Job ID"], ans: 1, exp: "unitary_simulator circuit نىڭ ئومۇمىي unitary matrix نى ھېسابلايدۇ.", code: "print(result.get_unitary())" },
  { q: "execute(qc, backend) نېمە قايتۇرىدۇ؟", opts: ["نەتىجە (Result)", "Job ئوبيېكتى", "خاتالىق", "Backend ئۇچۇرى"], ans: 1, exp: "execute() دەرھال نەتىجە ئەمەس، Job ئوبيېكتى قايتۇرىدۇ.", code: "job = execute(qc, backend)" },
  { q: "job.result() نېمە قىلىدۇ؟", opts: ["Job نى توختىتىدۇ", "Job تاماملانغاندىن كېيىن Final Result قايتۇرىدۇ", "Backend نى ئۆزگەرتىدۇ", "Circuit نى سىزىدۇ"], ans: 1, exp: "job.result() job تاماملانغاندىن كېيىن Result ئوبيېكتىنى قايتۇرىدۇ.", code: "result = job.result()" },
  { q: "job_monitor() نېمە ئۈچۈن ئىشلىتىلىدۇ؟", opts: ["Job ھالىتىنى ۋاقتىدا كۆرسىتىدۇ", "Job نى ئۆچۈرىدۇ", "نەتىجىنى گىرافىكقا ئايلاندۇرىدۇ", "Backend نى تاللايدۇ"], ans: 0, exp: "job_monitor() real hardware دا job نىڭ ھالىتىنى كۆرسىتىدۇ.", code: "from qiskit.tools import job_monitor" },
  { q: "%qiskit_backend_overview (Jupyter magic) نېمە قىلىدۇ؟", opts: ["Backend تەپسىلاتى ۋە coupling map نى كۆرسىتىدۇ", "كودنى تېز ئىجرا قىلىدۇ", "خاتالىقنى تۈزىتىدۇ", "نەتىجىنى ساقلايدۇ"], ans: 0, exp: "بۇ Jupyter magic function بولۇپ، backend لارنىڭ ئۇچۇرىنى كۆرسىتىدۇ.", code: "%qiskit_backend_overview" },
  { q: "Qiskit Aer نېمە؟", opts: ["Real quantum device", "يۇقىرى سۈرئەتلىك Simulator framework", "UI كۈتۈپخانىسى", "Data analysis قورالى"], ans: 1, exp: "Aer بولسا Qiskit نىڭ يۇقىرى سۈرئەتلىك simulator framework ى.", code: "from qiskit import Aer" },
  { q: "IBMQ (IBM Quantum) نىڭ رولى نېمە؟", opts: ["پەقەت simulator بىلەن تەمىنلەيدۇ", "ھەقىقىي Quantum ئۈسكۈنىلىرىگە زىيارەت ئىمكانىيىتى بېرىدۇ", "Python نى ئۆگىتىدۇ", "Circuit سىزىدۇ"], ans: 1, exp: "IBMQ provider ھەقىقىي quantum processor لارغا token ئارقىلىق زىيارەت ئىمكانىيىتى بېرىدۇ.", code: "from qiskit import IBMQ" },
  { q: "Qiskit Providers نېمە؟", opts: ["Backend لارغا token ۋە ئۇلانما تەمىنلەيدۇ", "كود يازىدۇ", "نەتىجە ھېسابلايدۇ", "خاتالىق بايقايدۇ"], ans: 0, exp: "Provider بولسا backend لارنى باشقۇرىدىغان قاتلام.", code: "provider = IBMQ.get_provider(hub='ibm-q')" },
  { q: "qiskit.tools نېمە ئۈچۈن ئىشلىتىلىدۇ؟", opts: ["Utility functions, job monitoring, backend info", "Quantum gate قۇرۇش", "Circuit compile", "Real hardware control"], ans: 0, exp: "qiskit.tools job monitoring، backend overview قاتارلىق utility function لارنى ئۆز ئىچىگە ئالىدۇ.", code: "from qiskit.tools import job_monitor" },
  { q: "execute() فۇنكسىيەسى قايسى package غا تەۋە؟", opts: ["qiskit.providers", "qiskit (ئاساسىي)", "qiskit.visualization", "numpy"], ans: 1, exp: "execute() ئاساسىي qiskit package دىن بىۋاسىتە import قىلىنىدۇ.", code: "from qiskit import execute" },
  { q: "Visualization قوراللىرى قايسى package دا؟", opts: ["qiskit.tools", "qiskit.visualization", "qiskit.circuit", "matplotlib"], ans: 1, exp: "plot_histogram، plot_bloch_vector قاتارلىقلار qiskit.visualization دا.", code: "from qiskit.visualization import plot_histogram" },
  { q: "quantum_info نېمە تەمىنلەيدۇ؟", opts: ["State, Operator, Fidelity قاتارلىق ماتېماتىكىلىق قوراللار", "UI دىزايىن", "Backend ئۇلىنىش", "كود تەھرىرلەش"], ans: 0, exp: "quantum_info Statevector، Operator، fidelity قاتارلىق ماتېماتىكىلىق قوراللارنى بېرىدۇ.", code: "from qiskit.quantum_info import Statevector" },
  { q: "QASM نىڭ ئالاھىدىلىكى نېمە؟", opts: ["پەقەت Python دا ئىشلىتىلىدۇ", "Circuit نى تېكىست شەكلىدە ئىپادىلەيدىغان تىل", "Real-time simulator", "Hardware driver"], ans: 1, exp: "OpenQASM circuit نى پلاتفورمىدىن مۇستەقىل تېكىست شەكلىدە ساقلايدۇ.", code: "OPENQASM 2.0;" },
  { q: "plot_histogram نېمە كۆرسىتىدۇ؟", opts: ["Probability count نى bar chart شەكلىدە", "Circuit structure", "Qubit connectivity", "Gate matrix"], ans: 0, exp: "plot_histogram ئۆلچەش نەتىجىلىرىنى bar chart شەكلىدە كۆرسىتىدۇ.", code: "plot_histogram(result.get_counts())" },
  { q: "plot_bloch_vector نېمە ئۈچۈن ئىشلىتىلىدۇ؟", opts: ["Single qubit state نى 3D sphere دا كۆرسىتىش", "Multi-qubit entanglement", "Circuit depth", "Error rate"], ans: 0, exp: "Bloch vector single qubit نىڭ 3D sphere دىكى ئورنىنى كۆرسىتىدۇ.", code: "plot_bloch_vector([0, 0, 1])" },
  { q: "plot_state_qsphere نېمە كۆرسىتىدۇ؟", opts: ["Quantum state نىڭ amplitude ۋە phase نى sphere دا", "پەقەت classical بىتلەرنى", "Backend ئۇچۇرىنى", "Job ھالىتىنى"], ans: 0, exp: "QSphere multi-qubit state نىڭ amplitude ۋە phase نى 3D sphere دا كۆرسىتىدۇ.", code: "plot_state_qsphere(Statevector(qc))" },
  { q: "plot_density_matrix نېمە ئۈچۈن؟", opts: ["Mixed state ۋە quantum noise نى matrix شەكلىدە", "Circuit سىزىش", "Histogram", "Code optimization"], ans: 0, exp: "Density matrix pure ۋە mixed state لارنى بىرلەشتۈرۈپ كۆرسىتىدۇ.", code: "plot_density_matrix(rho)" },
  { q: "qc.draw(output='mpl') نېمە قىلىدۇ؟", opts: ["Matplotlib ئارقىلىق circuit diagram ھاسىل قىلىدۇ", "Text چىقىرىدۇ", "خاتالىق بايقايدۇ", "Backend تاللايدۇ"], ans: 0, exp: "mpl چىقىرىش شەكلى circuit نى matplotlib ئارقىلىق رەسىم قىلىدۇ.", code: "qc.draw('mpl')" },
  { q: "Bloch sphere دېگەن نېمە؟", opts: ["Qubit state نىڭ گېئومېترىك 3D كۆرۈنۈشى", "Classical بىت خەرىتىسى", "Quantum algorithm", "Memory structure"], ans: 0, exp: "Bloch sphere single qubit نىڭ ھالىتىنى 3D گېئومېترىك شەكىلدە كۆرسىتىدۇ.", code: "# |0⟩ شىمال قۇتۇپ" },
  { q: "Histogram دىكى bar نىڭ ئېگىزلىكى نېمىگە ۋەكىللىك قىلىدۇ؟", opts: ["ئۆلچەش نەتىجىسىنىڭ probability/frequency", "Gate سانى", "Qubit depth", "Error rate"], ans: 0, exp: "Bar ئېگىزلىكى شۇ نەتىجىنىڭ چىقىش frequency ياكى probability نى كۆرسىتىدۇ.", code: "# y-axis: counts" },
  { q: "QSphere نېمىنى كۆرسىتىدۇ؟", opts: ["Multi-qubit state نىڭ amplitude ۋە phase نى", "پەقەت 0 ۋە 1 نى", "Circuit width", "Backend temperature"], ans: 0, exp: "QSphere ھەر بىر basis state نىڭ amplitude (رەڭ/چوڭلۇق) ۋە phase نى كۆرسىتىدۇ.", code: "plot_state_qsphere(state)" },
  { q: "Density matrix نېمە ئۈچۈن مۇھىم؟", opts: ["Pure ۋە mixed state لارنى بىرلەشتۈرۈپ كۆرسىتىش", "پەقەت pure state", "Classical data", "Circuit optimization"], ans: 0, exp: "Density matrix noise، decoherence ۋە mixed state لارنى مودېللاشتا مۇھىم.", code: "rho = Statevector(qc).to_operator()" },
  { q: "Gate map / Coupling map نېمە؟", opts: ["Hardware دىكى قۇبىتلارنىڭ ئۆزئارا ئۇلىنىش خەرىتىسى", "Circuit دىزايىنى", "Python كودى", "Result table"], ans: 0, exp: "Coupling map real hardware دىكى قايسى qubit لارنىڭ بىۋاسىتە CX gate قىلالايدىغانلىقىنى كۆرسىتىدۇ.", code: "backend.configuration().coupling_map" },
  { q: "Pauli-X gate نېمە قىلىدۇ؟", opts: ["Bit flip (NOT)", "Phase flip", "Superposition", "Measurement"], ans: 0, exp: "Pauli-X classical NOT gate غا ئوخشايدۇ: |0⟩↔|1⟩.", code: "qc.x(0)" },
  { q: "Pauli-Z gate نېمە قىلىدۇ؟", opts: ["Phase flip (|1⟩ گە -1 phase قوشىدۇ)", "Bit flip", "Superposition", "Entanglement"], ans: 0, exp: "Pauli-Z |0⟩ نى ئۆزگەرتمەيدۇ، |1⟩ گە -1 phase قوشىدۇ.", code: "qc.z(0)" },
  { q: "Fidelity دېگەن نېمە؟", opts: ["ئىككى quantum state نىڭ ئوخشاشلىق دەرىجىسى (0-1)", "Circuit depth", "Backend speed", "Memory size"], ans: 0, exp: "Fidelity ئىككى state نىڭ قانچىلىك ئوخشاش ئىكەنلىكىنى 0~1 ئارىلىقىدا ئۆلچەيدۇ.", code: "state_fidelity(psi1, psi2)" },
  { q: "Superposition (ئارىلاشما ھالەت) نېمە؟", opts: ["Qubit نىڭ بىرلا ۋاقىتتا كۆپ ھالەتتە بولۇشى", "پەقەت 0 بولۇش", "پەقەت 1 بولۇش", "Classical بىت"], ans: 0, exp: "Superposition قۇبىتنىڭ |0⟩ ۋە |1⟩ نىڭ linear combination ىدا بولۇشى.", code: "α|0⟩ + β|1⟩" },
  { q: "Entanglement (ئۆزئارا باغلىنىش) نېمە؟", opts: ["قۇبىتلار ئارىسىدىكى كلاسسىك بولمىغان مۇناسىۋەت", "ئاددىي قوشۇش", "ئۆلچەش", "Circuit سىزىش"], ans: 0, exp: "Entanglement بىر قۇبىتنىڭ ھالىتى يەنە بىرىگە دەرھال تەسىر قىلىدىغان quantum مۇناسىۋەت.", code: "# Bell state: |00⟩+|11⟩" },
  { q: "Measurement 'collapse' نېمە؟", opts: ["Wavefunction نىڭ ئۆلچەش ئارقىلىق بەلگىلىك بىر ھالەتكە چۈشۈشى", "State نى كۈچەيتىش", "Error قايتۇرۇش", "Circuit نى ئۇزۇنلاشتۇرۇش"], ans: 0, exp: "Collapse بولسا superposition نىڭ ئۆلچەش ئارقىلىق بىرلا basis state غا چۈشۈشى.", code: "# α|0⟩+β|1⟩ → |0⟩ ياكى |1⟩" },
  { q: "Probability قانداق ھېسابلىنىدۇ؟", opts: ["|amplitude|² (Born rule)", "amplitude + 1", "amplitude - 1", "Depth * Width"], ans: 0, exp: "Born rule بويىچە، ھالەتنىڭ probability ئامپلىتۇدىنىڭ مۇتلەق قىممىتىنىڭ كۋادراتى.", code: "P(0) = |α|²" },
  { q: "|0⟩ ھالىتى نېمە؟", opts: ["Computational basis ground state", "Excited state", "Mixed state", "Error state"], ans: 0, exp: "|0⟩ computational basis نىڭ ground state (باشلىنىش ھالىتى).", code: "qc = QuantumCircuit(1)" },
  { q: "|1⟩ ھالىتى نېمە؟", opts: ["Computational basis excited state", "Ground state", "Superposition", "Classical bit"], ans: 0, exp: "|1⟩ computational basis نىڭ excited state.", code: "qc.x(0)" },
  { q: "Quantum vs Classical پەرقى نېمە؟", opts: ["Parallelism/Interference vs Sequential binary", "تېزلىك پەرقى", "Memory size", "Screen resolution"], ans: 0, exp: "Quantum superposition ۋە interference ئارقىلىق parallel ھېسابلايدۇ.", code: "# 2^n state" }
];

// ==========================================
// 🎨 Style Constants
// ==========================================
const styles = {
  container: { fontFamily: "'Segoe UI', 'Microsoft Uighur', Arial, sans-serif", maxWidth: '950px', margin: '0 auto', padding: '25px', backgroundColor: '#f8fafc', minHeight: '100vh', direction: 'rtl', lineHeight: '1.6' },
  card: { backgroundColor: 'white', borderRadius: '16px', padding: '30px', boxShadow: '0 8px 30px rgba(0,0,0,0.12)', marginBottom: '25px', border: '1px solid #e2e8f0' },
  button: { padding: '14px 28px', border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '16px', fontWeight: '600', margin: '10px', transition: 'all 0.25s ease', display: 'inline-flex', alignItems: 'center', gap: '8px' },
  primaryBtn: { backgroundColor: '#1A73E8', color: 'white', boxShadow: '0 4px 14px rgba(26, 115, 232, 0.4)' },
  successBtn: { backgroundColor: '#34A853', color: 'white', boxShadow: '0 4px 14px rgba(52, 168, 83, 0.4)' },
  dangerBtn: { backgroundColor: '#D93025', color: 'white', boxShadow: '0 4px 14px rgba(217, 48, 37, 0.4)' },
  secondaryBtn: { backgroundColor: '#5F6368', color: 'white', boxShadow: '0 4px 14px rgba(95, 99, 104, 0.3)' },
  header: { background: 'linear-gradient(135deg, #1A73E8 0%, #1557B0 100%)', color: 'white', padding: '20px 25px', borderRadius: '14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' },
  option: { padding: '18px 20px', margin: '12px 0', borderRadius: '12px', cursor: 'pointer', border: '2px solid #e2e8f0', transition: 'all 0.2s ease', backgroundColor: '#f8fafc', fontSize: '15px' },
  correctOption: { backgroundColor: '#dcfce7', borderColor: '#22c55e', fontWeight: '600' },
  codeBlock: { backgroundColor: '#1e293b', color: '#e2e8f0', padding: '15px 20px', borderRadius: '10px', fontFamily: 'monospace', direction: 'ltr', textAlign: 'left', fontSize: '14px', margin: '12px 0' },
  progressBar: { height: '8px', backgroundColor: '#e2e8f0', borderRadius: '4px', overflow: 'hidden', margin: '15px 0' },
  progressFill: { height: '100%', backgroundColor: '#1A73E8', borderRadius: '4px', transition: 'width 0.3s ease' }
};

// ==========================================
// 🎓 QuantumTest Component
// ==========================================
const QuantumTest = () => {
  const [mode, setMode] = useState('home');
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(60).fill(null));
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(90 * 60);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showExitConfirm, setShowExitConfirm] = useState(false);
  
  const timerRef = useRef(null);
  const questionRef = useRef(null);

  // Timer for exam mode
  useEffect(() => {
    if (mode === 'exam' && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current);
            finishExam();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [mode, timeLeft]);

  // Scroll to question when index changes
  useEffect(() => {
    if (questionRef.current) {
      questionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [qIndex, mode]);

  const startExam = useCallback(() => {
    setMode('exam');
    setQIndex(0);
    setAnswers(Array(60).fill(null));
    setScore(0);
    setTimeLeft(90 * 60);
    setShowExitConfirm(false);
  }, []);

  const startStudy = useCallback(() => {
    setMode('study');
    setQIndex(0);
  }, []);

  const handleAnswer = useCallback((optIndex) => {
    if (mode === 'exam') {
      const newAnswers = [...answers];
      newAnswers[qIndex] = optIndex;
      setAnswers(newAnswers);
    }
  }, [mode, qIndex, answers]);

  const nextQuestion = useCallback(() => {
    if (qIndex < 59) setQIndex(prev => prev + 1);
  }, [qIndex]);

  const prevQuestion = useCallback(() => {
    if (qIndex > 0) setQIndex(prev => prev - 1);
  }, [qIndex]);

  // ✅ نۆۋەتتىكى جاۋابلارغا ئاساسەن نومۇر ھېسابلاش
  const calculateCurrentScore = useCallback((currentAnswers) => {
    let s = 0;
    currentAnswers.forEach((ans, idx) => {
      if (ans !== null && ans === questions[idx]?.ans) s++;
    });
    return s;
  }, []);

  // ✅ ئىمتىھاندىن چىقىش (نەتىجە بىلەن)
  const exitExamWithResults = useCallback(() => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    clearInterval(timerRef.current);
    
    // ھازىرقى جاۋابلارغا ئاساسەن نومۇر ھېسابلاش
    const currentScore = calculateCurrentScore(answers);
    setScore(currentScore);
    setMode('result');
    setIsSubmitting(false);
    setShowExitConfirm(false);
  }, [answers, isSubmitting, calculateCurrentScore]);

  // ✅ ئىمتىھاننى تاماملاش (بارلىق سوئاللارغا جاۋاب بېرىلگەندە)
  const finishExam = useCallback(() => {
    if (isSubmitting) return;
    setIsSubmitting(true);
    clearInterval(timerRef.current);
    
    setTimeout(() => {
      let s = 0;
      answers.forEach((ans, idx) => {
        if (ans === questions[idx]?.ans) s++;
      });
      setScore(s);
      setMode('result');
      setIsSubmitting(false);
    }, 500);
  }, [answers, isSubmitting]);

  const formatTime = useCallback((seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }, []);

  const getProgressPercent = useCallback(() => {
    return mode === 'exam' ? ((60 - qIndex) / 60) * 100 : ((qIndex + 1) / 60) * 100;
  }, [mode, qIndex]);

  // ✅ گۇۋاھنامە ھاسىل قىلىش (تۈزىتىلگەن: HTML دىە 'class' ئىشلىتىلدى)
  const handleCertClick = useCallback(() => {
    const passed = score >= 44;
    const certContent = `
      <!DOCTYPE html>
      <html lang="ug" dir="rtl">
      <head>
        <meta charset="UTF-8">
        <title>IBM Qiskit Certification</title>
        <style>
          body { font-family: Arial, sans-serif; background: #f4f7f6; display: flex; justify-content: center; align-items: center; min-height: 100vh; margin: 0; padding: 20px; }
          .cert { background: white; width: 100%; max-width: 850px; padding: 50px 40px; border: 3px solid #1A73E8; text-align: center; box-shadow: 0 25px 80px rgba(0,0,0,0.3); border-radius: 20px; position: relative; }
          .cert::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 8px; background: linear-gradient(90deg, #1A73E8, #34A853, #1A73E8); }
          .logo { font-size: 48px; margin-bottom: 15px; color: #1A73E8; }
          h1 { color: #1A73E8; font-size: 38px; margin-bottom: 10px; font-weight: 700; }
          h2 { color: #333; margin-bottom: 35px; font-weight: 400; font-size: 20px; }
          .name { font-size: 42px; color: #D93025; margin: 25px 0; border-bottom: 4px solid #1A73E8; display: inline-block; padding: 0 40px 20px; font-weight: 700; }
          .score-box { background: #f8fafc; border-radius: 12px; padding: 25px; margin: 30px 0; border: 2px solid #e2e8f0; }
          .score { font-size: 48px; color: #34A853; font-weight: 800; margin: 10px 0; }
          .percentage { font-size: 20px; color: #666; margin-top: 8px; }
          .status { font-size: 24px; font-weight: 700; padding: 15px 30px; border-radius: 50px; display: inline-block; margin: 20px 0; }
          .status.pass { background: #dcfce7; color: #166534; border: 2px solid #22c55e; }
          .status.fail { background: #fee2e2; color: #991b1b; border: 2px solid #ef4444; }
          .footer { margin-top: 50px; font-size: 14px; color: #666; padding-top: 20px; border-top: 1px solid #e2e8f0; }
          .seal { position: absolute; bottom: 30px; left: 30px; width: 90px; height: 90px; background: linear-gradient(135deg, #1A73E8, #1557B0); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: 700; font-size: 11px; text-align: center; line-height: 1.3; box-shadow: 0 8px 25px rgba(26, 115, 232, 0.4); }
          @media print { body { background: white; } .cert { box-shadow: none; border: 2px solid #1A73E8; } }
        </style>
      </head>
      <body>
        <div class="cert">
          <div class="logo">🎓</div>
          <h1>گۇۋاھنامە</h1>
          <h2>IBM Qiskit Certification Mock Exam</h2>
          <p style="color:#666;font-size:16px;margin-bottom:25px;">بۇ گۇۋاھنامە تۆۋەندىكى ئوقۇغۇچىغا بېرىلىدۇ:</p>
          <div class="name">IBM Qiskit ئوقۇغۇچىسى</div>
          <div class="score-box">
            <p style="font-size:18px;color:#666;margin-bottom:8px;">ئىمتىھان نەتىجىسى:</p>
            <div class="score">${score} / 60</div>
            <div class="percentage">${Math.round((score/60)*100)}% مۇۋەپپەقىيەت</div>
          </div>
          <div class="status ${passed ? 'pass' : 'fail'}">
            ${passed ? '✅ مۇۋەپپەقىيەتلىك ئۆتتى' : '❗ تېخىمۇ تىرىشىش كېرەك'}
          </div>
          <div class="footer">
            <p>چىقىرىلغان ۋاقتى: ${new Date().toLocaleDateString('ug-CN')}</p>
            <p style="margin-top:8px;font-size:13px;color:#888;">بۇ گۇۋاھنامە پەقەت تەجرىبە ئۈچۈن</p>
          </div>
          <div class="seal">CERTIFIED<br/>IBM QISKIT</div>
        </div>
      </body>
      </html>
    `;
    const blob = new Blob([certContent], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  }, [score]);

  // ✅ چىقىش جەزملەشتۈرۈش دىئالوگى
  const renderExitConfirm = () => (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      direction: 'rtl'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '30px',
        borderRadius: '16px',
        maxWidth: '400px',
        width: '90%',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '15px' }}>⚠️</div>
        <h3 style={{ color: '#1A73E8', fontSize: '20px', fontWeight: '700', marginBottom: '15px' }}>
          ئىمتىھاندىن چىقىش
        </h3>
        <p style={{ color: '#666', fontSize: '16px', marginBottom: '25px', lineHeight: '1.6' }}>
          ھازىر چىقسىڭىز، جاۋابلىغان سوئاللارنىڭ نەتىجىسى كۆرسىتىلىدۇ.<br/>
          قايتا باشلىسىڭىز ھەممە نەرسە نۆلدىن باشلىنىدۇ.
        </p>
        <div style={{ 
          backgroundColor: '#eff6ff', 
          padding: '15px', 
          borderRadius: '10px', 
          marginBottom: '25px',
          fontSize: '15px',
          color: '#1e40af'
        }}>
          ✅ جاۋابلانغان: {answers.filter(a => a !== null).length} / 60<br/>
          📊 ھازىرقى نومۇر: {calculateCurrentScore(answers)} / 60
        </div>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button 
            style={{ ...styles.button, ...styles.secondaryBtn, margin: 0 }}
            onClick={() => setShowExitConfirm(false)}
          >
            ❌ داۋاملاشتۇرۇش
          </button>
          <button 
            style={{ ...styles.button, ...styles.dangerBtn, margin: 0 }}
            onClick={exitExamWithResults}
          >
            ✅ چىقىش ۋە نەتىجە
          </button>
        </div>
      </div>
    </div>
  );

  // ==========================================
  // UI Render Functions
  // ==========================================

  const renderHome = () => (
    <div style={styles.card}>
      <div style={{ textAlign: 'center', marginBottom: '35px' }}>
        <div style={{ fontSize: '60px', marginBottom: '15px' }}>🎓</div>
        <h1 style={{ color: '#1A73E8', fontSize: '34px', fontWeight: '700', marginBottom: '10px' }}>IBM Qiskit Certification</h1>
        <p style={{ color: '#666', fontSize: '18px' }}>كۋانت ھېسابلاش بىلىمىڭىزنى سىناڭ!</p>
      </div>
      <div style={{ padding: '25px', backgroundColor: '#eff6ff', borderRadius: '14px', marginBottom: '35px', fontSize: '17px', lineHeight: '2' }}>
        <div>✅ سوئال: 60 | ⏱ ۋاقىت: 90 مىنۇت | 🎯 ئۆتۈش: 44 نومۇر</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <button style={{ ...styles.button, ...styles.successBtn }} onClick={startStudy}>📖 ئۆگىنىش</button>
        <button style={{ ...styles.button, ...styles.primaryBtn }} onClick={startExam}>📝 ئىمتىھان</button>
      </div>
    </div>
  );

  const renderStudy = () => {
    const q = questions[qIndex];
    return (
      <div style={styles.card} ref={questionRef}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px', paddingBottom: '20px', borderBottom: '2px solid #e2e8f0' }}>
          <div>
            <h3 style={{ color: '#34A853', fontSize: '22px', fontWeight: '700', margin: 0 }}>📖 ئۆگىنىش</h3>
            <p style={{ color: '#666', fontSize: '16px', margin: '5px 0 0' }}>سوئال {qIndex + 1} / 60</p>
          </div>
          <button style={{ ...styles.button, ...styles.secondaryBtn, padding: '8px 18px', fontSize: '14px', margin: 0 }} onClick={() => setMode('home')}>🏠 باش بەت</button>
        </div>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${getProgressPercent()}%`, backgroundColor: '#34A853' }} />
        </div>
        <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '14px', marginBottom: '25px', border: '2px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.7', margin: 0 }}>{q.q}</h2>
        </div>
        <div style={{ marginBottom: '25px' }}>
          {q.opts.map((opt, idx) => (
            <div key={idx} style={{ ...styles.option, ...(idx === q.ans ? styles.correctOption : {}) }}>
              <span style={{ fontWeight: '700', marginLeft: '8px' }}>{String.fromCharCode(65 + idx)}.</span> {opt}
              {idx === q.ans && <span style={{ float: 'left', fontSize: '20px' }}>✅</span>}
            </div>
          ))}
        </div>
        <div style={{ backgroundColor: '#fffbeb', padding: '25px', borderRadius: '14px', marginBottom: '25px', border: '2px solid #fcd34d', direction: 'rtl', textAlign: 'right' }}>
          <div style={{ fontWeight: '700', fontSize: '17px', color: '#92400e', marginBottom: '10px' }}>💡 چۈشەندۈرۈش:</div>
          <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#333', margin: '0 0 15px' }}>{q.exp}</p>
          <div style={{ fontWeight: '700', fontSize: '17px', color: '#92400e', marginBottom: '10px' }}>💻 كود:</div>
          <div style={styles.codeBlock}>{q.code}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0' }}>
          <button style={{ ...styles.button, ...styles.secondaryBtn, opacity: qIndex === 0 ? 0.6 : 1 }} disabled={qIndex === 0} onClick={prevQuestion}>⬅️ ئالدىنقى</button>
          <button style={{ ...styles.button, ...styles.successBtn, opacity: qIndex === 59 ? 0.6 : 1 }} disabled={qIndex === 59} onClick={nextQuestion}>كېيىنكى ➡️</button>
        </div>
      </div>
    );
  };

  const renderExam = () => {
    const q = questions[qIndex];
    const isTimeWarning = timeLeft < 300;
    const answeredCount = answers.filter(a => a !== null).length;
    
    return (
      <div style={styles.card} ref={questionRef}>
        <div style={styles.header}>
          <div><span style={{ fontSize: '18px', fontWeight: '600' }}>📝 ئىمتىھان </span><span style={{ marginLeft: '15px', fontSize: '16px', opacity: 0.9 }}>سوئال {qIndex + 1} / 60</span></div>
          <div style={{ fontSize: '26px', fontFamily: 'monospace', fontWeight: '700', color: isTimeWarning ? '#fca5a5' : 'white', backgroundColor: isTimeWarning ? 'rgba(239,68,68,0.2)' : 'transparent', padding: '8px 16px', borderRadius: '8px' }}>⏱ {formatTime(timeLeft)}</div>
        </div>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressFill, width: `${getProgressPercent()}%`, backgroundColor: isTimeWarning ? '#ef4444' : '#1A73E8' }} />
        </div>
        <div style={{ backgroundColor: '#f8fafc', padding: '25px', borderRadius: '14px', marginBottom: '25px', border: '2px solid #e2e8f0' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', lineHeight: '1.7', margin: 0 }}>{q.q}</h2>
        </div>
        <div style={{ marginBottom: '25px' }}>
          {q.opts.map((opt, idx) => {
            const isSelected = answers[qIndex] === idx;
            return (
              <div key={idx} onClick={() => handleAnswer(idx)} style={{ ...styles.option, backgroundColor: isSelected ? '#dbeafe' : '#f8fafc', border: isSelected ? '2px solid #1A73E8' : '2px solid #e2e8f0', cursor: 'pointer' }}>
                <span style={{ fontWeight: '700', marginLeft: '8px' }}>{String.fromCharCode(65 + idx)}.</span> {opt}
                {isSelected && <span style={{ float: 'left', fontSize: '18px', color: '#1A73E8' }}>✓</span>}
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px', paddingTop: '20px', borderTop: '2px solid #e2e8f0' }}>
          <button style={{ ...styles.button, ...styles.secondaryBtn, opacity: qIndex === 0 ? 0.6 : 1 }} disabled={qIndex === 0} onClick={prevQuestion}>⬅️ قايتىش</button>
          {qIndex === 59 ? (
            <button style={{ ...styles.button, ...styles.successBtn }} onClick={finishExam} disabled={isSubmitting}>{isSubmitting ? 'يۈكلىنىۋاتىدۇ...' : '✅ تاماملاش'}</button>
          ) : (
            <button style={{ ...styles.button, ...styles.primaryBtn }} onClick={nextQuestion} disabled={!answers[qIndex]}>كېيىنكى ➡️</button>
          )}
        </div>
        {/* ✅ چىقىش كۇنۇپكىسى */}
        <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '20px', borderTop: '1px dashed #e2e8f0' }}>
          <button 
            style={{ ...styles.button, ...styles.dangerBtn, fontSize: '14px', padding: '10px 20px' }}
            onClick={() => setShowExitConfirm(true)}
          >
            🚪 ئىمتىھاندىن چىقىش ۋە نەتىجە كۆرۈش
          </button>
          <p style={{ fontSize: '13px', color: '#666', marginTop: '8px' }}>
            جاۋابلانغان: {answeredCount} / 60 | ھازىرقى نومۇر: {calculateCurrentScore(answers)} / 60
          </p>
        </div>
      </div>
    );
  };

  const renderResult = () => {
    const passed = score >= 44;
    const percentage = Math.round((score / 60) * 100);
    const answeredCount = answers.filter(a => a !== null).length;
    
    return (
      <div style={styles.card}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{ fontSize: '70px', marginBottom: '15px' }}>{passed ? '🎉' : '😔'}</div>
          <h1 style={{ textAlign: 'center', color: passed ? '#166534' : '#991b1b', fontSize: '32px', fontWeight: '700', marginBottom: '10px' }}>{passed ? 'مۇبارك بولسۇن!' : 'قايتا تىرىشىڭ'}</h1>
          <p style={{ color: '#666', fontSize: '18px' }}>{passed ? 'ئىمتىھاندىن ئۆتتىڭىز!' : 'تېخىمۇ ئۆگىنىڭ!'}</p>
        </div>
        
        {/* نەتىجە كارتىسى */}
        <div style={{ textAlign: 'center', padding: '30px', backgroundColor: passed ? '#f0fdf4' : '#fef2f2', borderRadius: '16px', marginBottom: '30px', border: `2px solid ${passed ? '#22c55e' : '#ef4444'}` }}>
          <div style={{ fontSize: '72px', fontWeight: '800', color: passed ? '#166534' : '#991b1b', margin: '10px 0' }}>{score}<span style={{ fontSize: '32px', color: '#666' }}>/60</span></div>
          <div style={{ fontSize: '24px', fontWeight: '600', color: '#333' }}>{percentage}% مۇۋەپپەقىيەت</div>
          <div style={{ marginTop: '20px', padding: '12px 30px', borderRadius: '50px', fontSize: '20px', fontWeight: '700', display: 'inline-block', backgroundColor: passed ? '#dcfce7' : '#fee2e2', color: passed ? '#166534' : '#991b1b', border: `2px solid ${passed ? '#22c55e' : '#ef4444'}` }}>
            {passed ? '✅ Pass' : '❗ Fail'}
          </div>
          {answeredCount < 60 && (
            <p style={{ fontSize: '14px', color: '#666', marginTop: '15px' }}>
              ⚠️ پەقەت {answeredCount} سوئالغا جاۋاب بېرىلدى
            </p>
          )}
        </div>
        
        {/* گۇۋاھنامە بۆلىكى - پەقەت ئۆتكەندە */}
        {passed && (
          <div style={{ textAlign: 'center', padding: '25px', backgroundColor: '#eff6ff', borderRadius: '16px', marginBottom: '30px', border: '2px solid #93c5fd' }}>
            <div style={{ fontSize: '40px', marginBottom: '15px' }}>🏆</div>
            <p style={{ fontSize: '19px', marginBottom: '20px', color: '#1e40af', fontWeight: '600' }}>✅ گۇۋاھنامە ئېلىڭ:</p>
            <button onClick={handleCertClick} style={{ ...styles.button, ...styles.successBtn, fontSize: '18px', padding: '16px 40px' }}>📜 گۇۋاھنامە كۆرۈش</button>
          </div>
        )}
        
        {/* تەپسىلىي ستاتىستىكا */}
        <div style={{ padding: '20px', backgroundColor: '#f8fafc', borderRadius: '12px', marginBottom: '30px' }}>
          <h3 style={{ margin: '0 0 15px', color: '#333', fontSize: '18px' }}>📊 تەپسىلىي نەتىجە:</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', fontSize: '16px' }}>
            <div>✅ توغرا جاۋاب: <strong>{score}</strong></div>
            <div>❌ خاتا جاۋاب: <strong>{answeredCount - score}</strong></div>
            <div>⭕ جاۋابلانمىغان: <strong>{60 - answeredCount}</strong></div>
            <div>🎯 ئۆتۈش ئۆلچىمى: <strong>44 (73%)</strong></div>
          </div>
        </div>

        {/* كۇنۇپكىلار */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginTop: '25px', flexWrap: 'wrap' }}>
          <button style={{ ...styles.button, ...styles.primaryBtn }} onClick={startExam}>🔄 قايتا سىناش</button>
          <button style={{ ...styles.button, ...styles.successBtn }} onClick={startStudy}>📖 ئۆگىنىش</button>
          <button style={{ ...styles.button, ...styles.secondaryBtn }} onClick={() => setMode('home')}>🏠 باش بەت</button>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      {/* ھالەت كۆرسەتكۈچى */}
      {mode !== 'home' && (
        <div style={{ textAlign: 'center', marginBottom: '20px', padding: '10px 20px', backgroundColor: '#e0f2fe', borderRadius: '10px', fontSize: '15px', color: '#0369a1', fontWeight: '600' }}>
          {mode === 'study' && '📖 ئۆگىنىش ھالىتى'}
          {mode === 'exam' && `📝 ئىمتىھان ھالىتى - ۋاقىت: ${formatTime(timeLeft)}`}
          {mode === 'result' && '🎯 نەتىجە'}
        </div>
      )}
      
      {/* مەزمۇن */}
      {mode === 'home' && renderHome()}
      {mode === 'study' && renderStudy()}
      {mode === 'exam' && renderExam()}
      {mode === 'result' && renderResult()}
      
      {/* چىقىش جەزملەشتۈرۈش دىئالوگى */}
      {showExitConfirm && renderExitConfirm()}
      
      {/* ئاستى قىسىم */}
      <div style={{ textAlign: 'center', marginTop: '30px', padding: '20px', color: '#666', fontSize: '14px' }}>
        <p>🎓 IBM Qiskit Mock Exam | 60 سوئال</p>
      </div>
    </div>
  );
};

export default QuantumTest;