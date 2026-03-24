import React from 'react';

const Blog128 = () => {
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: '"Microsoft Uighur", "UKIJ Tuz", sans-serif',
      lineHeight: '1.8',
      color: '#333',
      direction: 'rtl', // Right-to-left for Uyghur
      textAlign: 'right',
    },
    header: {
      borderBottom: '3px solid #4a90e2',
      paddingBottom: '20px',
      marginBottom: '30px',
    },
    title: {
      fontSize: '32px',
      fontWeight: 'bold',
      color: '#2c3e50',
      marginBottom: '10px',
    },
    subtitle: {
      fontSize: '20px',
      color: '#7f8c8d',
      fontStyle: 'italic',
    },
    section: {
      marginBottom: '40px',
      backgroundColor: '#f9f9f9',
      padding: '25px',
      borderRadius: '8px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    },
    sectionTitle: {
      fontSize: '26px',
      color: '#2980b9',
      borderBottom: '1px solid #ddd',
      paddingBottom: '10px',
      marginBottom: '20px',
    },
    list: {
      listStyleType: 'disc',
      paddingRight: '20px',
      marginBottom: '15px',
    },
    listItem: {
      marginBottom: '10px',
      fontSize: '18px',
    },
    codeBlock: {
      backgroundColor: '#282c34',
      color: '#abb2bf',
      padding: '20px',
      borderRadius: '5px',
      overflowX: 'auto',
      fontFamily: 'Consolas, Monaco, "Andale Mono", monospace',
      fontSize: '14px',
      direction: 'ltr', // Code is always Left-to-Right
      textAlign: 'left',
      margin: '20px 0',
    },
    highlight: {
      color: '#e06c75',
      fontWeight: 'bold',
    },
    footer: {
      marginTop: '50px',
      paddingTop: '20px',
      borderTop: '1px solid #eee',
      textAlign: 'center',
      fontSize: '16px',
      color: '#666',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>كۋانت نېرۋا تورى (QNN): كەلگۈسى سۈنئىي ئەقىلنىڭ يېڭى سەھنىسى</h1>
        <p style={styles.subtitle}>كۋانت كومپيۇتېرلىرى ۋە ماشىنا ئۆگىنىشنىڭ بىرىكىشى</p>
      </header>

      {/* Introduction */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>1. كىرىش سۆز: كۋانت نېرۋا تورى دېگەن نېمە؟</h2>
        <p style={{ fontSize: '18px', marginBottom: '15px' }}>
          كۋانت نېرۋا تورى (QNN) «كۋانت كومپيۇتېرلىرى سۈنئىي ئەقىلنى تېزلەشتۈرىدۇ» ناملىق كىتابتا تەسۋىرلەنگەندەك، كۋانت كومپيۇتېرلىرىنىڭ ئىقتىدارىنى ئىشلىتىپ، نېرۋا تورىنى ئىشقا ئاشۇرۇشقا ئۇرۇنۇش. ئۇلارنىڭ مەقسىتى كۋانت مېخانىكىسىنىڭ خۇسۇسىيەتلىرىدىن پايدىلىنىپ، ئەنئەنىۋى ماشىنا ئۆگىنىش ئالگورىزىملىرىنى كېڭەيتىش ۋە ياخشىلاش.
        </p>
      </section>

      {/* Features Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>2. QNN لارنىڭ ئاساسلىق ئالاھىدىلىكلىرى</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>كۇبىتلارنى ئىشلىتىش:</strong> ئادەتتىكى بىتلاردىن (0 ياكى 1) پەرقلىق ھالدا، كۇبىتلار ئۈستۈنلۈك ھالىتىدە مەۋجۇت بولالايدۇ. بۇ خۇسۇسىيەت بىرلا ۋاقىتتا نۇرغۇن ھالەتلەرنى پاراللېل بىر تەرەپ قىلىشقا يول قويىدۇ.
          </li>
          <li style={styles.listItem}>
            <strong>كۋانت چىرمىشىش:</strong> QNN لار «كۋانت چىرمىشىش ۋە كوۋارىيانس» ناملىق كىتابتا تەسۋىرلەنگەندەك، كۋانت چىرمىشىش ئۇسۇلىنى قوللىنىپ، نېرۋا تورىدىكى تۈگۈنلەر ئارىسىدا كۈچلۈك مۇناسىۋەت ھاسىل قىلىپ، ئۈنۈملۈك ئۇچۇر يەتكۈزۈشنى ئىشقا ئاشۇرىدۇ.
          </li>
          <li style={styles.listItem}>
            <strong>كۋانت دەرۋازىسى مەشغۇلاتى:</strong> QNN لار تور ئېغىرلىقى ۋە يۆنىلىشىنى تەڭشەش ئۈچۈن كۋانت دەرۋازىسىنى ئىشلىتىپ، ھېسابلاش ئۈنۈمىنى ئاشۇرىدۇ.
          </li>
        </ul>
      </section>

      {/* Structure & Applications */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>3. قۇرۇلمىسى ۋە قوللىنىشچانلىقى</h2>
        
        <h3 style={{fontSize: '22px', color: '#34495e', marginBottom: '10px'}}>مۇمكىن بولغان قۇرۇلمىلار:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>كۋانت ۋە كلاسسىك قاتلاملارنىڭ بىرلىشىشى:</strong> نۇرغۇن QNN لار كۋانت ۋە كلاسسىك قاتلاملارنى بىرلەشتۈرگەن ئارىلاشما قۇرۇلمىنى ئىشلىتىدۇ. بۇ كۋانت قەۋىتىدىكى ئالاھىدىلىكلەرنى بىر تەرەپ قىلىش ۋە كلاسسىك قەۋەتتىكى نەتىجىلەرنى باھالاشنى ئۆز ئىچىگە ئالىدۇ.
          </li>
          <li style={styles.listItem}>
            <strong>توك يولىغا ئاساسلانغان لايىھە:</strong> QNNلار كۋانت توك يولىدىن تەركىب تاپقان بولۇپ، توك يولى ئىچىدىكى مەشغۇلاتلار (مەسىلەن، بىرلىككە ئۆزگەرتىشلەر) نېرۋا تورىنى بىر تەرەپ قىلىشقا ماس كېلىدۇ.
          </li>
        </ul>

        <h3 style={{fontSize: '22px', color: '#34495e', marginBottom: '10px', marginTop: '20px'}}>قوللىنىشچان پروگراممىلار:</h3>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>كۋانت ماشىنا ئۆگىنىشى:</strong> كۋانت كومپيۇتېرلىرىنىڭ پاراللېللىقىدىن پايدىلىنىپ، چوڭ كۆلەملىك سانلىق مەلۇمات بىر تەرەپ قىلىش ۋە مودېل مەشىقىنى تېزلىتىش.
          </li>
          <li style={styles.listItem}>
            <strong>ئەلالاشتۇرۇش مەسىلىلىرى:</strong> بىرىكمە ئەلالاشتۇرۇش مەسىلىلىرى ۋە چەكلىك ئەلالاشتۇرۇش مەسىلىلىرىگە قوللىنىلىش.
          </li>
          <li style={styles.listItem}>
            <strong>نەقنى تونۇش:</strong> ئادەتتىكى نېرۋا تورى ئەۋزەللىك تاپقان ساھەلەردىكى يېڭى ئىمكانىيەتلەر، مەسىلەن رەسىم تونۇش ۋە تەبىئىي تىل بىر تەرەپ قىلىش.
          </li>
        </ul>
      </section>

      {/* Challenges & Tools */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>4. قىيىنچىلىقلار ۋە ھەل قىلىش يوللىرى</h2>
        <p style={{ fontSize: '18px', marginBottom: '15px' }}>
          <strong>قىيىنچىلىقلار:</strong> كۋانت ھالىتىنىڭ مۇھىت تەرىپىدىن تەسىرگە ئۇچرايدىغان كۋانت دېكوگېرېنسىيەسى، ھازىرقى كۋانت كومپيۇتېرلىرىنىڭ كىچىك كۆلەملىك ۋە تۆۋەن شاۋقۇنغا چىدامچانلىقى سەۋەبىدىن قاتتىق دېتال چەكلىمىلىرى ۋە ئالگورىزىملارنىڭ پىشىپ يېتىلمىگەنلىكى قاتارلىقلارنى ئۆز ئىچىگە ئالىدۇ.
        </p>
        <p style={{ fontSize: '18px' }}>
          <strong>ھەل قىلىش:</strong> بۇ قىيىنچىلىقلارنى ھەل قىلىش ئۈچۈن، Google نىڭ <span style={styles.highlight}>Cirq</span> ۋە IBM نىڭ <span style={styles.highlight}>Qiskit</span> قاتارلىق قوراللىرى QNN نىڭ تەرەققىياتىنى قوللاش ئۈچۈن تەمىنلەنگەن. ئۆتكۈر ئۆتكۈزگۈچ قۇبىت ۋە ئىئون تۇزاق تېخنىكىسىدىكى ئىلگىرىلەشلەر QNN نىڭ ئەمەلىي قوللىنىلىشىنى تېزلىتىۋاتىدۇ.
        </p>
      </section>

      {/* Algorithms Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>5. مۇناسىۋەتلىك ئالگورىزىملار</h2>
        <p style={{fontSize: '18px', marginBottom: '20px'}}>تۆۋەندە QNN لارنىڭ قۇرۇلۇشى ۋە مەشىقىگە مۇناسىۋەتلىك ئاساسلىق ئالگورىزىملار كۆرسىتىلدى:</p>
        
        <div style={{marginBottom: '15px'}}>
          <strong style={{color: '#2980b9', fontSize: '20px'}}>1. ئۆزگىرىشچان كۋانت توك يولى (VQC)</strong>
          <p>ئومۇمىي چۈشەندۈرۈش: ئۆزگىرىشچان كۋانت توك يولى كۋانت كومپيۇتېرلىرىدا ئەڭ كۆپ ئىشلىتىلىدىغان ئۇسۇللارنىڭ بىرى بولۇپ، كۋانت توك يولى پارامېتىرلىرىنى تەڭشەش ئارقىلىق ئەلالاشتۇرىدۇ. پارامېتىرلار ئەنئەنىۋى كلاسسىك ئەلالاشتۇرۇش ئالگورىزىملىرى (مەسىلەن، گرادىيېنت چۈشۈش) ئارقىلىق يېڭىلىنىدۇ.</p>
        </div>

        <div style={{marginBottom: '15px'}}>
          <strong style={{color: '#2980b9', fontSize: '20px'}}>2. كۋانت يېقىنلىشىش ئەلالاشتۇرۇش ئالگورىزىمى (QAOA)</strong>
          <p>ئومۇمىي چۈشەندۈرۈش: QAOA بىرىكمە ئەلالاشتۇرۇش مەسىلىلىرىنى ھەل قىلىش ئۈچۈن كۋانت ئالگورىزىمى، ئەمما ئۇ QNN لارغىمۇ قوللىنىلغان. كۋانت توك يولىنىڭ چوڭقۇرلۇقىنى كونترول قىلىش ھېسابلاش توغرىلىقى ۋە تەننەرخىنى تەڭشەشكە يول قويىدۇ.</p>
        </div>

        <div style={{marginBottom: '15px'}}>
          <strong style={{color: '#2980b9', fontSize: '20px'}}>3. كۋانت ئاساسلىق تەركىب ئانالىزى (QPCA)</strong>
          <p>ئومۇمىي چۈشەندۈرۈش: QPCA كۋانت ھالىتىنىڭ ئاساسلىق تەركىبلىرىنى چىقىرىش ئۇسۇلى. ئۇ يۇقىرى ئۆلچەملىك سانلىق مەلۇماتلارنىڭ ئۆلچەمنى ئازايتىش ۋە ئالاھىدىلىكلىرىنى چىقىرىش ئۈچۈن ئىشلىتىلىدۇ ھەمدە QNN لار ئۈچۈن ئالدىن بىر تەرەپ قىلىش باسقۇچى سۈپىتىدە قوللىنىلىشى مۇمكىن.</p>
        </div>

        <div style={{marginBottom: '15px'}}>
          <strong style={{color: '#2980b9', fontSize: '20px'}}>4. كۋانت بولتزمان ماشىنىلىرى (QBM)</strong>
          <p>ئومۇمىي چۈشەندۈرۈش: كلاسسىك بولتزمان ماشىنىلىرىنىڭ كۋانتلاشتۇرۇلغان نۇسخىسى. ئېنېرگىيە ھالىتىنى ئەلالاشتۇرۇش ئۈچۈن كۋانت چىرمىشىش ۋە كۋانت تونېل ئېففېكتلىرىنى ئىشلىتىدۇ.</p>
        </div>

        <div style={{marginBottom: '15px'}}>
          <strong style={{color: '#2980b9', fontSize: '20px'}}>5. كۋانت قوللاش ۋېكتور ماشىنىسى (QSVM)</strong>
          <p>ئومۇمىي چۈشەندۈرۈش: قوللاش ۋېكتور ماشىنىسىنىڭ (SVM) كۋانت ئىجراسى. كۋانت توك يولى يادرو فۇنكسىيەلىرىنى ئۈنۈملۈك ھېسابلاش ئۈچۈن ئىشلىتىلىدۇ، بۇ يۇقىرى ئۆلچەملىك بوشلۇقلاردا تۈرگە ئايرىش ئىقتىدارىنى ياخشىلايدۇ.</p>
        </div>

        <div style={{marginBottom: '15px'}}>
          <strong style={{color: '#2980b9', fontSize: '20px'}}>6. كۋانت يەتكۈزۈش نېرۋا تورى (QFNN)</strong>
          <p>ئومۇمىي ئەھۋال: ئادەتتىكى يەتكۈزۈش نېرۋا تورىنىڭ كۋانتلاشتۇرۇلغان نۇسخىسى. كىرگۈزۈش سانلىق مەلۇماتلىرى كۋانت ھالىتى سۈپىتىدە كودلىنىدۇ، چىقىرىش مىقدارى كۋانت توك يولى ئارقىلىق ھېسابلىنىدۇ.</p>
        </div>

        <div style={{marginBottom: '15px'}}>
          <strong style={{color: '#2980b9', fontSize: '20px'}}>7. كۋانت ئارقا تارقىلىش ئالگورىزىمى</strong>
          <p>ئومۇمىي ئەھۋال: ئادەتتىكى ئارقا تارقىلىشنى كۋانت مۇھىتىغا ماسلاشتۇرىدىغان ئالگورىزىم. كۋانت توك يولى ئارقىلىق گرادىيېنت ھېسابلاشلىرىنى ئۈنۈملۈك ئېلىپ بېرىش ئۈچۈن تەتقىقات ئېلىپ بېرىلىۋاتىدۇ.</p>
        </div>

        <div style={{marginBottom: '15px'}}>
          <strong style={{color: '#2980b9', fontSize: '20px'}}>8. ئامپلىتۇدا كۈچەيتىش</strong>
          <p>ئومۇمىي ئەھۋال: گروۋېرنىڭ ئالگورىزىمىغا ئاساسلانغان، ئالاھىدە ھالەتلەرنىڭ ئامپلىتۇدىسىنى تەكىتلەيدىغان تېخنىكا. بۇنى نېرۋا تورىنىڭ ئاكتىپلاشتۇرۇش فۇنكسىيەسى ۋە تۈگۈن تاللاشقا قوللىنىشقا بولىدۇ.</p>
        </div>

        <div style={{marginBottom: '15px'}}>
          <strong style={{color: '#2980b9', fontSize: '20px'}}>9. كۋانت كۈچەيتىش ئۆگىنىشى</strong>
          <p>ئومۇمىي ئەھۋال: كۈچەيتىش ئۆگىنىش ئۇقۇمىنى مىقدارلاشتۇرىدۇ ۋە ۋاكالەتچىنىڭ ھەرىكەت سىياسىتىنى كۋانت ھالىتى سۈپىتىدە ئىپادىلەيدۇ. QNN ۋاكالەتچىنىڭ قىممەت ئىقتىدارى ۋە سىياسەت ئىقتىدارى سۈپىتىدە ئىشلىتىلىدۇ.</p>
        </div>

        <div style={{marginBottom: '15px'}}>
          <strong style={{color: '#2980b9', fontSize: '20px'}}>10. كۋانت قېتىشما نېرۋا تورى (QCNN)</strong>
          <p>ئومۇمىي ئەھۋال: قېتىشما نېرۋا تورىنىڭ (CNN) كۋانت نۇسخىسى. سانلىق مەلۇماتلارنىڭ يەرلىك ئالاھىدىلىكلىرىنى كۋانت ھالىتى سۈپىتىدە خاتىرىلەيدۇ.</p>
        </div>
      </section>

      {/* Implementation Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>6. ئىجرا قىلىش مىسالى (Code Examples)</h2>
        <p style={{fontSize: '18px', marginBottom: '20px'}}>تۆۋەندە كۋانت نېرۋا تورى (QNN) نىڭ مىسال ئىجرا قىلىنىشى كۆرسىتىلدى. بىز سىزگە Google نىڭ Cirq ۋە IBM نىڭ Qiskit قاتارلىق ئاساسلىق كۋانت ھېسابلاش كۈتۈپخانىلىرىنى قانداق ئىشلىتىشنى كۆرسىتىپ بېرىمىز.</p>

        <h3 style={{fontSize: '22px', color: '#d35400', marginTop: '30px'}}>1. Qiskit ئارقىلىق QNN نى يولغا قويۇش</h3>
        <p>بۇ مىسالدا، ئىككى سىنىپلىق تۈرگە ئايرىش مەسىلىسىنى ھەل قىلىش ئۈچۈن ۋارىئاتسىئونال كۋانت توك يولى (VQC) نى ئىشلىتىدىغان QNN نى قۇرىمىز.</p>
        
        <div style={{backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '4px', marginBottom: '10px'}}>
          <code>pip install qiskit qiskit-machine-learning numpy</code>
        </div>

        <pre style={styles.codeBlock}>
{`import numpy as np
from qiskit import Aer
from qiskit.circuit.library import RealAmplitudes
from qiskit.utils import algorithm_globals
from qiskit_machine_learning.algorithms import VQC
from qiskit_machine_learning.kernels import FidelityQuantumKernel
from qiskit_machine_learning.neural_networks import SamplerQNN
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import accuracy_score

# تاسادىپىي ئۇرۇقنى تەڭشەش
algorithm_globals.random_seed = 42

# سانلىق مەلۇمات توپلىمى ھاسىل قىلىش
X, y = make_classification(n_samples=100, n_features=2, n_classes=2, random_state=42)
X = MinMaxScaler().fit_transform(X) # ئىقتىدارلارنى [0, 1] غا ماسلاشتۇرۇش
y = 2 * y - 1 # بەلگىلەرنى {-1, 1} غا ئۆزگەرتىش

# تەربىيەلەش ۋە سىناقنى بۆلۈش
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# كۋانت توك يولى لايىھىلەش
quantum_circuit = RealAmplitudes(num_qubits=2, reps=3)

# QNN قۇرۇش
backend = Aer.get_backend('statevector_simulator')
qnn = SamplerQNN(
circuit=quantum_circuit,
input_params=quantum_circuit.parameters[:2],
weight_params=quantum_circuit.parameters[2:]
)

# VQC ئالگورىزىمىنى باشلاش
vqc = VQC(
neural_network=qnn,
optimizer='COBYLA',
initial_point=np.random.rand(quantum_circuit.num_parameters),
feature_map=quantum_circuit,
var_form=quantum_circuit
)

# مەشىق
vqc.fit(X_train, y_train)

# سىناق
y_pred = vqc.predict(X_test)
accuracy = accuracy_score(y_test, y_pred)
print(f"Test accuracy: {accuracy:.2f}")`}
        </pre>

        <h3 style={{fontSize: '22px', color: '#d35400', marginTop: '30px'}}>2. Cirq ئارقىلىق كۋانت ماشىنا ئۆگىنىشىنى يولغا قويۇش</h3>
        <p>ئاددىي كۋانت تۈرگە ئايرىغۇچنى قۇرۇش مىسالى Cirq.</p>

        <div style={{backgroundColor: '#f1f1f1', padding: '10px', borderRadius: '4px', marginBottom: '10px'}}>
          <code>pip install cirq numpy</code>
        </div>

        <pre style={styles.codeBlock}>
{`import numpy as np
import cirq
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import accuracy_score

# سانلىق مەلۇمات توپلىمى قۇرۇش
X, y = make_classification(n_samples=100, n_features=1, n_classes=2, random_state=42)
X = MinMaxScaler().fit_transform(X) # ئىقتىدارلارنى [0, 1] غا ماسلاشتۇرۇش
y = 2 * y - 1 # بەلگىلەرنى {-1, 1} غا ئايلاندۇرۇش

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# qubit نى تەييارلاڭ
qubit = cirq.GridQubit(0, 0)

# كۋانت توك يولىنى لايىھىلەڭ
def create_circuit(x, theta):
    circuit = cirq.Circuit()
    circuit.append(cirq.ry(2 * np.pi * x).on(qubit))
    circuit.append(cirq.rx(2 * np.pi * theta).on(qubit))
    return circuit

# مودېلنى ئېنىقلاڭ
def predict(X, theta):
    predictions = []
    simulator = cirq.Simulator()
    for x in X:
        circuit = create_circuit(x[0], theta)
        result = simulator.simulate(circuit)
        prob = np.abs(result.final_state_vector[0]) ** 2
        predictions.append(1 if prob > 0.5 else -1)
    return np.array(predictions)

# ئەلالاشتۇرۇش
theta = 0.5 # باشلانغۇچ قىممەت
learning_rate = 0.1
for epoch in range(10):
    y_pred = predict(X_train, theta)
    error = y_train - y_pred
    gradient = -np.dot(error, X_train[:, 0])
    theta -= learning_rate * gradient

# سىناق
y_pred_test = predict(X_test, theta)
accuracy = accuracy_score(y_test, y_pred_test)
print(f"Test accuracy: {accuracy:.2f}")`}
        </pre>
      </section>

      {/* Implementation Tips */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>7. ئىجرا قىلىش نۇقتىلىرى</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>ئۈسكۈنىلەرنى تاللاش:</strong> ئەگەر ھەقىقىي كۋانت كومپيۇتېر ئىشلەتسىڭىز، IBM Quantum ياكى Google Quantum سۇپىسىنى ئىشلەتسىڭىز بولىدۇ.
          </li>
          <li style={styles.listItem}>
            <strong>سانلىق مەلۇماتلارنى ئالدىن بىر تەرەپ قىلىش:</strong> كۋانت كومپيۇتېرى بىر تەرەپ قىلالايدىغان سانلىق مەلۇماتلار ئادەتتە نورماللاشتۇرۇلغان قىممەتلەرگە ماسلاشتۇرۇلۇشى كېرەك ([0, 1]).
          </li>
          <li style={styles.listItem}>
            <strong>كۋانت توك يولى لايىھىسى:</strong> كۋانت توك يولىنىڭ قۇرۇلمىسى (دەرۋازا مەشغۇلاتى) ۋەزىپىگە ماس كېلىدىغان قىلىپ لايىھەلەنگەن.
          </li>
        </ul>
      </section>

      <footer style={styles.footer}>
        <p>© 2026 KeLBiL ئۇيغۇر كىۋانىت تېخنىكا تەتقىقاتى   | KeLBiL </p>
      </footer>
    </div>
  );
};

export default Blog128;