import React from 'react';

const Blog61 = () => {
  return (
    <div style={{
      direction: 'rtl',
      textAlign: 'right',
      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
      lineHeight: '1.8',
      padding: '20px',
      maxWidth: '1000px',
      margin: '0 auto',
      color: '#333',
      backgroundColor: '#f9f9f9'
    }}>
      
      {/* العنوان الرئيسي */}
      <header style={{
        borderBottom: '3px solid #2c5aa0',
        paddingBottom: '20px',
        marginBottom: '40px'
      }}>
        <h1 style={{
          fontSize: '2.5em',
          color: '#1a3a6d',
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: '10px'
        }}>
          كۋانت كومپيۇتېرلىرى ۋە ماشىنا ئۆگىنىش: كۇتۇپخانىلارنى ئىشلىتىشتىكى ئەمەلىي مىساللار
        </h1>
        <div style={{
          textAlign: 'center',
          color: '#666',
          fontSize: '1.1em'
        }}>
          <span style={{ marginLeft: '15px' }}>KeLBiL</span>
          <span> | </span>
          <span>2026-يىلى 1-ئاينىڭ 6-كۈنى</span>
        </div>
      </header>

      {/* المقدمة */}
      <section style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>
          كۋانت كومپيۇتېرلىرى تەرەققىي قىلغانسېرى، ئۇلارنىڭ ماشىنا ئۆگىنىش ساھەسىدە ئىشلىتىلىشى دىققەتنى تارتماقتا.
          ئادەتتىكى كومپيۇتېرلارغا سېلىشتۇرغاندا، كۋانت كومپيۇتېرلىرى بەزى ھېسابلاشلاردا زور سۈرئەتكە يېتىش ئىقتىدارىغا ئىگە.
          بولۇپمۇ، كۋانت مېخانىكىسىنى ئىشلىتىدىغان كۋانت ماشىنا ئۆگىنىشى (QML) چوڭ سانلىق مەلۇماتلار توپلىمىنى ئۈنۈملۈك تەھلىل قىلىش 
          ۋە يېڭى ئۆگىنىش ئالگورىزىملىرىنى لايىھىلەشتە يېڭىلىق يارىتىشى مۇمكىن.
        </p>
        <p style={{ fontSize: '1.2em' }}>
          بۇ ماقالىدە كۋانت ماشىنا ئۆگىنىشى ئۈچۈن بىر قانچە كۇتۇپخانا تونۇشتۇرۇلىدۇ ۋە ئۇلارنىڭ ئىشلىتىلىشى ۋە ئەمەلىي مىساللار تەپسىلىي چۈشەندۈرۈلىدۇ.
        </p>
      </section>

      {/* القسم 1: PennyLane */}
      <section style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '40px'
      }}>
        <h2 style={{
          fontSize: '2em',
          color: '#1a3a6d',
          borderRight: '5px solid #4CAF50',
          paddingRight: '15px',
          marginBottom: '20px'
        }}>
          1. PennyLane: كۋانت ۋە كلاسسىك تېخنىكىلارنى بىرلەشتۈرۈش
        </h2>
        
        <h3 style={{ fontSize: '1.5em', color: '#2c5aa0', marginBottom: '10px' }}>
          ئومۇمىي ئەھۋال
        </h3>
        <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
          PennyLane كۋانت ھېسابلاش ۋە ماشىنا ئۆگىنىشىنى بىرلەشتۈرۈش ئۈچۈن لايىھەلەنگەن Python كۇتۇپخانىسى.
          بۇ كۇتۇپخانا كۋانت توك يولىنى ماشىنا ئۆگىنىش مودېللىرى بىلەن لايىھىلەش، سىمۇلياتسىيە قىلىش ۋە بىرلەشتۈرۈشنى ئاسانلاشتۇرىدۇ.
          ئۇ يەنە TensorFlow ۋە PyTorch قاتارلىق مەۋجۇت ماشىنا ئۆگىنىش رامكىسى بىلەن بىۋاسىتە بىرلەشتۈرۈشنى ئۆز ئىچىگە ئالىدۇ.
        </p>

        <h3 style={{ fontSize: '1.5em', color: '#2c5aa0', marginBottom: '10px' }}>
          ئەمەلىي مىسال: كۋانت نېرۋا تورى قۇرۇش
        </h3>
        <p style={{ marginBottom: '15px', fontSize: '1.1em' }}>
          تۆۋەندە PennyLane ئارقىلىق ئاددىي كۋانت نېرۋا تورى (QNN) قۇرۇشنىڭ مىسالى كۆرسىتىلدى.
        </p>
        
        <div style={{
          backgroundColor: '#f4f4f4',
          padding: '20px',
          borderRadius: '8px',
          overflowX: 'auto',
          direction: 'ltr',
          textAlign: 'left',
          fontFamily: 'monospace',
          marginBottom: '20px',
          borderLeft: '4px solid #4CAF50'
        }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`import pennylane as qml
from pennylane import numpy as np

# ئۈسكۈنە سەپلىمىسى (كۋانت سىمۇلياتورى)
dev = qml.device("default.qubit", wires=2)

# كۋانت توك يولى قۇرۇش
@qml.qnode(dev)
def quantum_circuit(inputs, weights):
    qml.RX(inputs[0], wires=0)
    qml.RY(inputs[1], wires=1)
    qml.CZ(wires=[0, 1])
    qml.Rot(weights[0], weights[1], weights[2], wires=0)
    return qml.expval(qml.PauliZ(0))

# كىرگۈزۈش ۋە ئېغىرلىقلارنى تەڭشەش
inputs = np.array([0.5, 0.1])
weights = np.array([0.2, 0.4, 0.6])

# توك يولىنى ئىجرا قىلىش
output = quantum_circuit(inputs, weights)
print(f"Quantum Circuit Output: {output}")`}
          </pre>
        </div>
      </section>

      {/* القسم 2: Qiskit */}
      <section style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '40px'
      }}>
        <h2 style={{
          fontSize: '2em',
          color: '#1a3a6d',
          borderRight: '5px solid #FF9800',
          paddingRight: '15px',
          marginBottom: '20px'
        }}>
          2. Qiskit ماشىنا ئۆگىنىشى: IBM نىڭ Quantum كۈتۈپخانىسى
        </h2>
        
        <h3 style={{ fontSize: '1.5em', color: '#2c5aa0', marginBottom: '10px' }}>
          ئومۇمىي ئەھۋال
        </h3>
        <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
          Qiskit IBM تەمىنلىگەن ئوچۇق كودلۇق كۋانت ھېسابلاش رامكىسى بولۇپ، «Qiskit ماشىنا ئۆگىنىشى» ماشىنا ئۆگىنىش مودۇلىنى ئۆز ئىچىگە ئالىدۇ.
          بۇ مودۇل كۋانت ماشىنا ئۆگىنىش مودېللىرىنى قۇرۇش ۋە تەربىيەلەشنى ئاسانلاشتۇرىدۇ.
        </p>

        <h3 style={{ fontSize: '1.5em', color: '#2c5aa0', marginBottom: '10px' }}>
          مىسال: كۋانت يادروسى بىلەن قوللاش ۋېكتور ماشىنىسى (SVM)
        </h3>
        <p style={{ marginBottom: '15px', fontSize: '1.1em' }}>
          بۇ ماقالە Qiskit ئارقىلىق كۋانت يادروسى ئارقىلىق قوللاش ۋېكتور ماشىنىسىنى يولغا قويۇشنىڭ مىسالىنى تونۇشتۇرىدۇ.
        </p>
        
        <div style={{
          backgroundColor: '#f4f4f4',
          padding: '20px',
          borderRadius: '8px',
          overflowX: 'auto',
          direction: 'ltr',
          textAlign: 'left',
          fontFamily: 'monospace',
          marginBottom: '20px',
          borderLeft: '4px solid #FF9800'
        }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`from qiskit import Aer
from qiskit.utils import QuantumInstance
from qiskit_machine_learning.algorithms.classifiers import QSVC
from qiskit_machine_learning.kernels import QuantumKernel

# كۋانت يادروسىنى ئېنىقلاڭ
quantum_kernel = QuantumKernel(feature_map=qiskit.circuit.library.ZZFeatureMap(2),
                                quantum_instance=QuantumInstance(Aer.get_backend('statevector_simulator')))

# QSVC (كۋانت SVM) نى قۇرۇڭ
qsvc = QSVC(quantum_kernel=quantum_kernel)

# مەشىق سانلىق مەلۇماتلىرى
X_train = [[0, 0], [1, 1], [0, 1], [1, 0]]
y_train = [0, 0, 1, 1]

# مودېل مەشىق
qsvc.fit(X_train, y_train)

# يېڭى سانلىق مەلۇماتلار بىلەن پەرەز قىلىش
X_test = [[0, 0], [1, 1]]
y_pred = qsvc.predict(X_test)
print(f"Predictions: {y_pred}")`}
          </pre>
        </div>
        
        <p style={{ fontSize: '1.1em', fontStyle: 'italic', color: '#555' }}>
          بۇ مىسال كۋانت يادروسىنى ئىشلىتىپ، ئالاھىدىلىك بوشلۇقىنى ئۆزگەرتىدۇ ۋە كلاسسىك SVM ئالگورىزىمى ئارقىلىق تۈرگە ئايرىشنى ئېلىپ بارىدۇ.
        </p>
      </section>

      {/* القسم 3: TensorFlow Quantum */}
      <section style={{
        backgroundColor: 'white',
        padding: '25px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        marginBottom: '40px'
      }}>
        <h2 style={{
          fontSize: '2em',
          color: '#1a3a6d',
          borderRight: '5px solid #9C27B0',
          paddingRight: '15px',
          marginBottom: '20px'
        }}>
          3. TensorFlow كۋانت: Google نىڭ كۋانت ماشىنا ئۆگىنىش رامكىسى
        </h2>
        
        <h3 style={{ fontSize: '1.5em', color: '#2c5aa0', marginBottom: '10px' }}>
          ئومۇمىي ئەھۋال
        </h3>
        <p style={{ marginBottom: '20px', fontSize: '1.1em' }}>
          TensorFlow كۋانت Google تەرىپىدىن ئىجاد قىلىنغان ۋە TensorFlow ئېكولوگىيە سىستېمىسى بىلەن بىرلەشتۈرۈلگەن كۋانت ماشىنا ئۆگىنىش كۈتۈپخانىسى.
          بۇ كۈتۈپخانا سىزگە كۋانت توك يولىنى ئۆز ئىچىگە ئالغان چوڭقۇر ئۆگىنىش مودېللىرىنى قۇرۇشقا يول قويىدۇ.
        </p>

        <h3 style={{ fontSize: '1.5em', color: '#2c5aa0', marginBottom: '10px' }}>
          مىسال: كۋانت توك يولىنى ئۆز ئىچىگە ئالغان چوڭقۇر ئۆگىنىش مودېلى
        </h3>
        <p style={{ marginBottom: '15px', fontSize: '1.1em' }}>
          تۆۋەندە TensorFlow كۋانت ئارقىلىق كۋانت توك يولىنى ئۆز ئىچىگە ئالغان مودېل قۇرۇشنىڭ مىسالى كۆرسىتىلدى.
        </p>
        
        <div style={{
          backgroundColor: '#f4f4f4',
          padding: '20px',
          borderRadius: '8px',
          overflowX: 'auto',
          direction: 'ltr',
          textAlign: 'left',
          fontFamily: 'monospace',
          marginBottom: '20px',
          borderLeft: '4px solid #9C27B0'
        }}>
          <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
{`import tensorflow as tf
import tensorflow_quantum as tfq
import cirq

# كۋانت دەۋرىيلىكىنى ئېنىقلاڭ
qubit = cirq.GridQubit(0, 0)
circuit = cirq.Circuit(cirq.rx(tf.constant(0.5))(qubit))

# TensorFlow دا كۋانت دەۋرىيلىكىنى ئىپادىلەڭ
quantum_layer = tfq.layers.PQC(circuit, cirq.Z(qubit))

# كىرگۈزۈش سانلىق مەلۇماتلىرى
inputs = tf.keras.Input(shape=(), dtype=tf.dtypes.string)
outputs = quantum_layer(inputs)

# مودېل قۇرۇش
model = tf.keras.Model(inputs=inputs, outputs=outputs)`}
          </pre>
        </div>
        
        <p style={{ fontSize: '1.1em', fontStyle: 'italic', color: '#555' }}>
          TensorFlow كۋانت دەۋرىيلىكىنى چوڭقۇر ئۆگىنىش مودېللىرىغا مۇكەممەل كىرگۈزۈشكە يول قويىدۇ.
        </p>
      </section>

      {/* الخاتمة */}
      <section style={{
        backgroundColor: '#e8f4f8',
        padding: '30px',
        borderRadius: '10px',
        border: '2px solid #2c5aa0'
      }}>
        <h2 style={{
          fontSize: '2em',
          color: '#1a3a6d',
          textAlign: 'center',
          marginBottom: '20px'
        }}>
          خۇلاسە
        </h2>
        <p style={{ fontSize: '1.2em', marginBottom: '15px' }}>
          كۋانت كومپيۇتېرى بىلەن ماشىنا ئۆگىنىشنىڭ بىرلىشىشى يېڭى ئىمكانىيەتلەرنى ئاچىدۇ.
          بۇ ماقالىدە تونۇشتۇرۇلغان كۇتۇپخانىلار (PennyLane، Qiskit ماشىنا ئۆگىنىشى ۋە TensorFlow Quantum) 
          كۋانت ماشىنا ئۆگىنىش تەتقىقاتى ۋە يولغا قويۇشنى باشلاش ئۈچۈن كۈچلۈك قوراللار.
        </p>
        <p style={{ fontSize: '1.2em' }}>
          كۋانت ھېسابلاش يەنىلا تەرەققىي قىلىۋاتقان ساھە، ئەمما بۇ كۇتۇپخانىلار سىزگە ھەقىقىي كود يېزىش ۋە ئۇنىڭ يوشۇرۇن كۈچىنى ھېس قىلىش ئىمكانىيىتىنى بېرىدۇ.
          قىزىقسىڭىز، سىناپ بېقىڭ!
        </p>
      </section>

      {/* التذييل */}
      <footer style={{
        marginTop: '40px',
        paddingTop: '20px',
        borderTop: '1px solid #ddd',
        textAlign: 'center',
        color: '#666',
        fontSize: '0.9em'
      }}>
        <p>© 2026 KeLBiL. بارلىق ھوقۇقلار قوغدىلىدى.</p>
        <p style={{ marginTop: '5px' }}>بۇ ماقالىدا كۆرسىتىلگەن كود ئۈلگىلىرى ئەمەلىي قوللىنىشقا تەييار.</p>
      </footer>
    </div>
  );
};

export default Blog61;