// Blog59.jsx - كۋانت ماشىنا ئۆگىنىشىنىڭ كەلگۈسى
import React, { useState, useMemo } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
  Box, Typography, Container, Paper, Grid, Card, CardContent,
  List, ListItem, ListItemText, Divider, Chip, IconButton,
  Drawer, AppBar, Toolbar, useTheme, useMediaQuery,
  Tabs, Tab, Stepper, Step, StepLabel,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Collapse, CardActions, Button, Avatar, Stack, Tooltip,
  Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScienceIcon from '@mui/icons-material/Science';
import MemoryIcon from '@mui/icons-material/Memory';
import TimelineIcon from '@mui/icons-material/Timeline';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import CalculateIcon from '@mui/icons-material/Calculate';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CompareIcon from '@mui/icons-material/Compare';
import DownloadIcon from '@mui/icons-material/Download';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';

// ============ كۋانت سىمۇلىيەت قىلىش كومپونېنتى ============
const QuantumCircuitSimulator = () => {
  const [qubits] = useState(3);
  const [gates] = useState(['H', 'CNOT', 'X', 'Y', 'Z', 'RX', 'RY', 'RZ']);
  const [circuit, setCircuit] = useState([]);

  return (
    <Paper sx={{ p: 3, my: 3, borderRadius: 3, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
      <Typography variant="h6" gutterBottom>
        كۋانت توك يولى سىمۇلاتورى
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
        {gates.map((gate, idx) => (
          <Chip
            key={idx}
            label={gate}
            onClick={() => setCircuit([...circuit, { gate, qubit: idx % qubits }])}
            variant="outlined"
            sx={{ cursor: 'pointer' }}
          />
        ))}
      </Box>
      <Box sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 2,
        p: 2,
        minHeight: 200
      }}>
        {circuit.length === 0 ? (
          <Typography color="text.secondary" align="center">
            كۋانت دەرۋازىلىرىنى سۆزۈش ئارقىلىق توك يول قۇرۇڭ
          </Typography>
        ) : (
          circuit.map((op, idx) => (
            <Chip
              key={idx}
              label={`${op.gate} → Q${op.qubit}`}
              onDelete={() => setCircuit(circuit.filter((_, i) => i !== idx))}
              sx={{ m: 0.5 }}
            />
          ))
        )}
      </Box>
    </Paper>
  );
};

// ============ كود بۆلەك كۆرسىتىش كومپونېنتى ============
const CodeBlock = ({ code, language, darkMode }) => (
  <Box sx={{
    my: 2,
    borderRadius: 2,
    overflow: 'hidden',
    border: `1px solid ${darkMode ? '#333' : '#e0e0e0'}`,
    fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
  }}>
    <Box sx={{
      p: 1,
      bgcolor: darkMode ? '#1e1e1e' : '#f5f5f5',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${darkMode ? '#333' : '#e0e0e0'}`,
      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
    }}>
      <Typography variant="caption" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
        {language}
      </Typography>
      <IconButton size="small" onClick={() => navigator.clipboard.writeText(code)}>
        <DownloadIcon fontSize="small" />
      </IconButton>
    </Box>
    <SyntaxHighlighter
      language={language}
      style={darkMode ? vscDarkPlus : vs}
      showLineNumbers
      customStyle={{
        margin: 0,
        padding: '16px',
        fontSize: '0.85rem',
        fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
      }}
    >
      {code}
    </SyntaxHighlighter>
  </Box>
);

// ============ ئاساسىي Blog59 كومپونېنتى ============
const Blog59 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState(0);

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#7b1fa2' : '#9c27b0',
        light: darkMode ? '#ae52d4' : '#ce93d8',
        dark: darkMode ? '#4a0072' : '#6a1b9a'
      },
      secondary: {
        main: darkMode ? '#00bcd4' : '#00acc1',
        light: darkMode ? '#62eeff' : '#80deea',
        dark: darkMode ? '#008ba3' : '#00838f'
      },
      background: {
        default: darkMode ? '#0a0a1a' : '#f5f5f7',
        paper: darkMode ? '#12122a' : '#ffffff',
      },
      quantum: {
        superposition: darkMode ? '#bb86fc' : '#6200ee',
        entanglement: darkMode ? '#03dac6' : '#018786',
        interference: darkMode ? '#cf6679' : '#b00020'
      }
    },
    typography: {
      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
      h1: {
        fontWeight: 800,
        fontSize: '3.2rem',
        background: darkMode
          ? 'linear-gradient(45deg, #7b1fa2 30%, #00bcd4 90%)'
          : 'linear-gradient(45deg, #9c27b0 30%, #00acc1 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '1rem'
      },
      h4: {
        fontWeight: 700,
        margin: '1.5rem 0',
        color: darkMode ? '#bb86fc' : '#6200ee',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-8px',
          left: 0,
          width: '60px',
          height: '4px',
          background: darkMode ? '#bb86fc' : '#6200ee',
          borderRadius: '2px'
        }
      },
      h5: {
        fontWeight: 600,
        margin: '1.2rem 0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }
    },
    shape: {
      borderRadius: 16
    }
  }), [darkMode]);

  const drawerWidth = 320;
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  // ============ كۋانت تېخنىكىلىرىنىڭ تەرەققىيات باسقۇچلىرى ============
  const quantumTimeline = [
    { year: '1980', event: 'كۋانت ھېسابلاش تۇشۇنچىسى پەيدا بولدى', icon: '💡' },
    { year: '1994', event: 'شور ئالگورىزىمى', icon: '🔐' },
    { year: '1998', event: 'كۋانت خاتالىقىنى تۈزىتىش', icon: '⚙️' },
    { year: '2011', event: 'D-Wave 1-كۋانت كومپيۇتېرى', icon: '💻' },
    { year: '2016', event: 'IBM كۋانت تورى', icon: '🌐' },
    { year: '2019', event: 'كۋانت ئۈستۈنلۈكى ئېلىپ بېرىلدى', icon: '📈' },
    { year: '2023', event: '1000+ كۋانتلىق سىستېمىلار', icon: '⚛️' },
    { year: '2030+', event: 'خاتالىققا چىداملىق كۋانت كومپيۇتېرلىرى', icon: '🚀' }
  ];

  // ============ ئاساسىي بۆلەكلەر ============
  const sections = [
    {
      id: 0,
      title: 'كۋانت ماشىنا ئۆگىنىشى نېمە؟',
      icon: <ScienceIcon />,
      content: `كۋانت ماشىنا ئۆگىنىشى (QML) كۋانت ھېسابلاش ۋە ماشىنا ئۆگىنىش ئىدىيەلىرىنىڭ ئۆزئارا تەسىرلىشىشىنى تەتقىق قىلىدىغان يېڭى تەتقىقات ساھەسى.

بۇ ساھە ئىككى تەرەپلىمە:
1. كۋانت كومپيۇتېرلىرى ماشىنا ئۆگىنىش مودېللىرىنى تەربىيەلەش ياكى باھالاش ۋاقىتىنى تېزلەتەلەمدۇ؟
2. ماشىنا ئۆگىنىش تېخنىكىلىرى كۋانت خاتالىقىنى تۈزىتىش كودلىرىنى بايقاشقا، كۋانت سىستېمىلىرىنىڭ خۇسۇسىيەتلىرىنى مۆلچەرلەشكە ياكى يېڭى كۋانت ئالگورىزىملىرىنى تەرەققىي قىلدۇرۇشقا ياردەم بېرەلەمدۇ؟`,
      image: 'https://static-cdn.spinq.cn/official/articlefile/e99db628-673b-419c-a5a9-7d759ccac80f//1756899812562_spinq-gemini-mini-quantum-computers-used-in-a-classroom.jpg',
      code: `# PennyLane بىلەن ئاددىي كۋانت ماشىنا ئۆگىنىش
import pennylane as qml
import numpy as np

# كۋانت توك يولى قۇرۇش
dev = qml.device("default.qubit", wires=2)

@qml.qnode(dev)
def quantum_circuit(params):
    qml.RY(params[0], wires=0)
    qml.CNOT(wires=[0, 1])
    qml.RY(params[1], wires=1)
    return qml.expval(qml.PauliZ(0))

# تەربىيەلەش پارامېتىرلىرى
params = np.array([0.1, 0.2])
print("كۋانت توك يولى چىقىرىشى:", quantum_circuit(params))`
    },
    {
      id: 1,
      title: 'كۋانت كومپيۇتېرلىرى سۈنئىي ئەقىل تېزلەتكۈچى',
      icon: <MemoryIcon />,
      content: `ماشىنا ئۆگىنىشنىڭ چەكلىمىسى ھەمىشە ئالگورىزىملىرىمىزنى ئىجرا قىلىدىغان كومپيۇتېر ئۈسكۈنىلىرى بىلەن بەلگىلىنىپ كەلگەن. زامانىۋى چوڭقۇر ئۆگىنىشنىڭ مۇۋەپپەقىيىتى پاراللېل GPU توپلىرى تەرىپىدىن ئەمەلگە ئاشۇرۇلىدۇ.

كۋانت ماشىنا ئۆگىنىشى پۈتۈنلەي يېڭى تىپتىكى ھېسابلاش ئۈسكۈنىسى - كۋانت كومپيۇتېرى ئارقىلىق ماشىنا ئۆگىنىش ئۈسكۈنىلىرىنى كېڭەيتىدۇ. كۋانت كومپيۇتېرلىرى بىلەن ئۇچۇر بىر تەرەپ قىلىش كۋانت نەزەرىيىسى دەپ ئاتىلىدىغان فىزىكىنىڭ ئاساسەن ئوخشىمىغان قانۇنلىرىغا تايىنىدۇ.`,
      image: 'https://static-cdn.spinq.cn/official/articlefile/e99db628-673b-419c-a5a9-7d759ccac80f//1756899812562_spinq-gemini-mini-quantum-computers-used-in-a-classroom.jpg',
      features: [
        'سۇپەرپوزىتسىيە (Superposition)',
        'ئارىلىشىش (Entanglement)',
        'كۋانت ئارىلاشمىسى (Quantum Interference)',
        'كۋانت پاراللېللىقى'
      ]
    },
    {
      id: 2,
      title: 'يېقىن مۇددەتلىك كۋانت ئۈسكۈنىلىرىدە ماشىنا ئۆگىنىش',
      icon: <TimelineIcon />,
      content: `كۋانت كومپيۇتېرلىرى بۈگۈنكى كۈندە ئىشلىتىشكە بولىدۇ، ئەمما ئۇلار شاۋقۇنلۇق (Noisy). بۇ شاۋقۇنلۇق ئوتتۇرا دەرىجىلىك كۋانت (NISQ) دەۋرى دەپ ئاتىلىدۇ.

بۇ ئۈسكۈنىلەرنى ئالاھىدە مەقسەتلىك ئۈسكۈنىلەر دەپ چۈشىنەلەيمىز (ASIC ۋە FPGA قاتارلىقلار)، بۇ ئۈسكۈنىلەرنىڭ ئىقتىدارى تېخىمۇ چەكلىك.

يېقىن مۇددەتلىك ئۈسكۈنىلەر بىلەن بىر ۋاقىتتا، ئىدىئال، ئۇنىۋېرسال كۋانت كومپيۇتېرلىرى ("خاتالىققا چىداملىق كۋانت كومپيۇتېرلىرى ياكى FTQC") ئارقىلىق QML نى تەتقىق قىلىشقا قىزىقىشمۇ بار.`,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800'
    },
    {
      id: 3,
      title: 'كۋانت كومپيۇتېرلىرىنى نېرۋا تورىغا ئوخشاش ئىشلىتىش',
      icon: <PsychologyIcon />,
      content: `زامانىۋى نۇقتىدىن قارىغاندا، كۋانت كومپيۇتېرلىرىنى نېرۋا تورىغا ئوخشاش ئىشلىتىشكە ۋە تەربىيەلەشكە بولىدۇ. بىز فىزىكىلىق كونترول پارامېتىرلىرىنى (ئېلېكترو ماگنىت مەيدانى كۋچلۈكلۈكى ياكى لازېر ئىمپۇلس چاستوتىسى قاتارلىق) سىستېمىق ھالدا ماسلاشتۇرالايمىز.

مەسىلەن، تەربىيەلەنگەن توك يولى رەسىمنىڭ مەزمۇنىنى تۈرگە ئايرىش ئۈچۈن ئىشلىتىلىشى مۇمكىن، بۇ ئارقىلىق رەسىمنى ئۈسكۈنىنىڭ فىزىكىلىق ھالىتىگە كودلاپ، ئۆلچەش ئېلىپ بېرىلىدۇ.`,
      image: 'https://static-cdn.spinq.cn/official/articlefile/e99db628-673b-419c-a5a9-7d759ccac80f//1756899812562_spinq-gemini-mini-quantum-computers-used-in-a-classroom.jpg'
    },
    {
      id: 4,
      title: 'چوڭ رەسىم: پەرقلەندۈرگىلى بولىدىغان پروگرامما تۈزۈش',
      icon: <DeveloperModeIcon />,
      content: `كۋانت توك يولى پەرقلەندۈرگىلى بولىدۇ، كۋانت كومپيۇتېرىنىڭ ئۆزى مەلۇم بىر ۋەزىپىنى ياخشىراق ئورۇنداش ئۈچۈن لازىم بولغان كونترول پارامېتىرلىرىنىڭ ئۆزگىرىشىنى ھېسابلىيالايدۇ.

پەرقلەندۈرگىلى بولىدىغان پروگرامما تۈزۈش چوڭقۇر ئۆگىنىشنىڭ ئاساسى بولۇپ، TensorFlow ۋە PyTorch قاتارلىق كۇتۇپخانىلاردا يولغا قويۇلىدۇ. پەرقلەندۈرگىلى بولىدىغان پروگرامما تۈزۈش چوڭقۇر ئۆگىنىشتىنمۇ كۆپ: ئۇ ئالگورىزىملار قولدا كودلانمايدىغان، بەلكى ئۆگىنىلىدىغان پروگرامما تۈزۈش پارادىگمىسى.

شۇنىڭغا ئوخشاش، كۋانت كومپيۇتېرلىرىنى تەربىيەلەش ئىدىيەسى كۋانت ماشىنا ئۆگىنىشىدىنمۇ چوڭ. تەربىيەلىگىلى بولىدىغان كۋانت توك يولى كۋانت خىمىيەسى ياكى كۋانت ئەلالاشتۇرۇش قاتارلىق باشقا ساھەلەردە ئىشلىتىلىشى مۇمكىن.`,
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800'
    },
    {
      id: 5,
      title: 'كۋانت پەرقلەندۈرگىلى بولىدىغان پروگرامما تۈزۈش ئۈچۈن PennyLane',
      icon: <ElectricBoltIcon />,
      content: `PennyLane كۋانت پروگرامما تۈزۈش ئۈچۈن ئوچۇق كودلۇق يۇمشاق دېتال رامكىسى بولۇپ، كۋانت پەرقلەندۈرگىلى بولىدىغان پروگرامما تۈزۈشنى ئەسلىدىنلا قوللايدۇ. ئۇ كلاسسىك ماشىنا ئۆگىنىش كۇتۇپخانىلىرىنى كۋانت سىمۇلياتورلىرى ۋە ئۈسكۈنىلەر بىلەن مۇكەممەل بىرلەشتۈرۈپ، ئىشلەتكۈچىلەرگە كۋانت توك يولىنى مەشىق قىلدۇرۇش ئىقتىدارىنى بېرىدۇ.`,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800',
      code: `import pennylane as qml
import numpy as np
import torch

# توك يولى
dev = qml.device("default.qubit", wires=2)

@qml.qnode(dev)
def quantum_neural_net(params, x=None):
    # كۋانت فىچەرلەر كىرگۈزۈش
    qml.AngleEmbedding(x, wires=range(2))
    
    # كۋانت نېرۋا تورى قۇرۇلمىسى
    for i in range(3):
        qml.BasicEntanglerLayers(params[i], wires=range(2))
    
    return qml.expval(qml.PauliZ(0))

# پارامېتىرلارنى تەربىيەلەش
params = torch.randn(3, 1, 2, requires_grad=True)
x = torch.tensor([0.5, 0.3])

# پەرقلىق ھېسابلاش
output = quantum_neural_net(params, x)
output.backward()
print("گرادىيېنت:", params.grad)`
    }
  ];

  // ============ كۋانت vs كلاسسىك سېلىشتۇرۇش ============
  const comparisonTable = [
    {
      category: 'سۇپەرپوزىتسىيە',
      quantum: 'بار - بىر ۋاقىتتا ھەر خىل ھالەتلەردە بولۇش',
      classical: 'يوق - بىر ۋاقىتتا پەقەت بىر ھالەتتە',
      advantage: '2ⁿ پاراللېللىق'
    },
    {
      category: 'ئارىلىشىش',
      quantum: 'بار - بىرىكتۈرۈلگەن ھالەتلەر',
      classical: 'چەكلىك - پەقەت ئايرىم ئۆزگەرگۈچىلەر',
      advantage: 'تېز ئۇچۇر يۆتكەش'
    },
    {
      category: 'خاتالىق',
      quantum: 'ھەسساس - كۋانت خاتالىقى ۋە ئايرىلىش',
      classical: 'مۇقىم - رەت قىلىش ئاسان',
      advantage: 'كلاسسىك ئۈستۈنلۈك'
    },
    {
      category: 'ھېسابلاش چىدامچانلىق',
      quantum: 'چەكلىك - NISQ دەۋرى',
      classical: 'يۇقىرى - تېخنىكا پىشىپ يېتىلدى',
      advantage: 'كلاسسىك ئۈستۈنلۈك'
    },
    {
      category: 'ئالگورىزىم سۇپىتى',
      quantum: 'تېز - ھەسسىباب چوڭ سانلار، سانلىق مەلۇمات ئايرىش',
      classical: 'تېز - ماشىنا ئۆگىنىش، گرافىك بىر تەرەپ قىلىش',
      advantage: 'ئالاھىدە'
    }
  ];

  // ============ كومپونېنت رەندەر قىلىش ============
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        display: 'flex',
        marginTop: "30px",
        bgcolor: 'background.default',
        minHeight: '100vh',
        fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
      }}>
        {/* ئۈستى ناۋىگاتسىيە بالداق */}
        {/* <AppBar position="fixed" sx={{
          zIndex: theme.zIndex.drawer + 1,
          background: alpha(theme.palette.primary.main, 0.9),
          fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
        }}>
          <Toolbar sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
            {isMobile && (
              <IconButton color="inherit" onClick={() => setMobileOpen(!mobileOpen)}>
                <MenuIcon />
              </IconButton>
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexGrow: 1 }}>
              <CalculateIcon />
              <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                كۋانت ماشىنا ئۆگىنىشى
              </Typography> */}
            {/* </Box>
            <Chip label="ئىلمىي تەتقىقات" color="secondary" size="small" sx={{ mr: 2 }} />
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar> */}

        {/* يان ناۋىگاتسىيە */}
        {!isMobile && (
          <Drawer
            variant="permanent"
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                marginTop: '64px',
                background: alpha(theme.palette.background.paper, 0.95),
                fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
              }
            }}
          >
            <Toolbar />
            <Box sx={{ overflow: 'auto', p: 3, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
              <Typography variant="h6" gutterBottom sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
              }}>
                <ScienceIcon /> تەپسىلاتلار
              </Typography>
              <List sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                {sections.map((section) => (
                  <ListItem
                    key={section.id}
                    button
                    sx={{
                      mb: 1,
                      borderRadius: 2,
                      backgroundColor: expandedSection === section.id ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                    }}
                    onClick={() => setExpandedSection(section.id)}
                  >
                    <ListItemText
                      primary={
                        <Box sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                          <Typography variant="subtitle2" fontWeight={600} sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                            {section.title}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 3 }} />

              <QuantumCircuitSimulator />
            </Box>
          </Drawer>
        )}

        {/* ئاساسىي مەزمۇن رايونى */}
        <Box component="main" sx={{
          flexGrow: 1,
          p: { xs: 2, md: 4 },
          mt: 8,
          fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
        }}>
          <Container maxWidth="xl" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
            {/* باش ئۇنۋان رايونى */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, md: 6 },
                mb: 6,
                borderRadius: 4,
                background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
                color: 'white',
                position: 'relative',
                overflow: 'hidden',
                fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
              }}
            >
              <Box sx={{ position: 'relative', zIndex: 1, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                <Typography variant="h1" gutterBottom sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                  كۋانت ماشىنا ئۆگىنىشى
                </Typography>
                <Typography variant="h5" sx={{ mb: 3, opacity: 0.9, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                  كۋانت ھېسابلاش ۋە سۈنئىي ئەقىلنىڭ كەسپىي ئۇچرىشىشى
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 4, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                  {['كۋانت فىزىكىسى', 'ماشىنا ئۆگىنىش', 'يۇقىرى ھېسابلاش', 'تېز ئالگورىزىملار'].map((tag) => (
                    <Chip
                      key={tag}
                      label={tag}
                      sx={{
                        background: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        fontWeight: 600,
                        fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                      }}
                    />
                  ))}
                </Stack>
              </Box>
            </Paper>

            {/* تەرەققىيات بالداقى */}
            <Paper elevation={2} sx={{
              p: 4,
              mb: 6,
              borderRadius: 4,
              fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
            }}>
              <Typography variant="h4" gutterBottom sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
              }}>
                <TimelineIcon /> كۋانت تېخنىكىلىرىنىڭ تەرەققىيات تارىخى
              </Typography>
              <Stepper alternativeLabel sx={{ mt: 4, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                {quantumTimeline.map((item, index) => (
                  <Step key={index}>
                    <StepLabel
                      icon={
                        <Avatar sx={{
                          bgcolor: theme.palette.primary.main,
                          color: 'white',
                          fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                        }}>
                          {item.icon}
                        </Avatar>
                      }
                    >
                      <Typography variant="subtitle2" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>{item.year}</Typography>
                      <Typography variant="caption" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>{item.event}</Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Paper>

            {/* سېلىشتۇرۇش جەدۋىلى */}
            <Paper elevation={2} sx={{
              p: 4,
              mb: 6,
              borderRadius: 4,
              fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
            }}>
              <Typography variant="h4" gutterBottom sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
              }}>
                <CompareIcon /> كۋانت ھېسابلاش vs كلاسسىك ھېسابلاش
              </Typography>
              <TableContainer sx={{
                mt: 3,
                borderRadius: 2,
                fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
              }}>
                <Table>
                  <TableHead>
                    <TableRow sx={{
                      bgcolor: alpha(theme.palette.primary.main, 0.1),
                      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                    }}>
                      <TableCell sx={{ fontWeight: 700, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>كاتېگورىيە</TableCell>
                      <TableCell sx={{ fontWeight: 700, color: theme.palette.quantum.superposition, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>كۋانت</TableCell>
                      <TableCell sx={{ fontWeight: 700, color: theme.palette.secondary.main, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>كلاسسىك</TableCell>
                      <TableCell sx={{ fontWeight: 700, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>ئەۋزەللىك</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {comparisonTable.map((row, index) => (
                      <TableRow key={index} hover>
                        <TableCell sx={{
                          fontWeight: 600,
                          fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                        }}>{row.category}</TableCell>
                        <TableCell>
                          <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                          }}>
                            {row.quantum.includes('بار') ? '✅' : '❌'}
                            {row.quantum}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1,
                            fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                          }}>
                            {row.classical.includes('يوق') ? '❌' : '✅'}
                            {row.classical}
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={row.advantage}
                            size="small"
                            color={row.advantage.includes('كۋانت') ? 'primary' : 'secondary'}
                            variant="outlined"
                            sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>

            {/* تەپسىلى بۆلەكلەر */}
            {sections.map((section) => (
              <Box key={section.id} sx={{ mb: 6 }}>
                <Accordion
                  expanded={expandedSection === section.id}
                  onChange={() => setExpandedSection(expandedSection === section.id ? -1 : section.id)}
                  elevation={2}
                  sx={{
                    borderRadius: 3,
                    fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                  }}
                >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      width: '100%',
                      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                    }}>
                      {section.icon}
                      <Typography variant="h5" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>{section.title}</Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Grid container spacing={4}>
                      <Grid item xs={12} md={6}>
                        <Typography variant="body1" paragraph sx={{
                          lineHeight: 1.8,
                          fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
                          textAlign: 'justify'
                        }}>
                          {section.content}
                        </Typography>

                        {section.features && (
                          <Box sx={{ mt: 3 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                              ئاساسىي ئالاھىدىلىكلەر:
                            </Typography>
                            <Grid container spacing={2}>
                              {section.features.map((feature, idx) => (
                                <Grid item xs={12} sm={6} key={idx}>
                                  <Card variant="outlined" sx={{ p: 2 }}>
                                    <Typography variant="body2" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                                      {feature}
                                    </Typography>
                                  </Card>
                                </Grid>
                              ))}
                            </Grid>
                          </Box>
                        )}

                        {section.code && (
                          <Box sx={{ mt: 3 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                              كود ئۈلگىسى:
                            </Typography>
                            <CodeBlock code={section.code} language="python" darkMode={darkMode} />
                          </Box>
                        )}
                      </Grid>

                      <Grid item xs={12} md={6}>
                        <Paper
                          sx={{
                            height: '100%',
                            minHeight: 300,
                            background: `url(${section.image}) center/cover`,
                            borderRadius: 2,
                            position: 'relative'
                          }}
                        >
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: 0,
                              left: 0,
                              right: 0,
                              p: 2,
                              background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                              color: 'white',
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8
                            }}
                          >
                            <Typography variant="caption" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                              كۋانت ماشىنا ئۆگىنىشىنىڭ قوللىنىش ساھەسى
                            </Typography>
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}

            {/* كۋانت ئالگورىزىم ئۈلگىلىرى */}
            <Paper elevation={2} sx={{
              p: 4,
              my: 6,
              borderRadius: 4,
              fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
            }}>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                كۋانت ئالگورىزىم ئۈلگىلىرى
              </Typography>
              <Grid container spacing={4} sx={{ mt: 2 }}>
                {[
                  {
                    name: 'شور ئالگورىزىمى',
                    description: 'چوڭ سانلارنى ئايرىش',
                    complexity: 'O(log N)',
                    icon: '🔢'
                  },
                  {
                    name: 'گرۆۋەر ئالگورىزىمى',
                    description: 'ئىزدەشنى تېزلەش',
                    complexity: 'O(√N)',
                    icon: '🔍'
                  },
                  {
                    name: 'كۋانت نېرۋا تورى',
                    description: 'ماشىنا ئۆگىنىش',
                    complexity: 'كۋانت پەرقلىق',
                    icon: '🧠'
                  },
                  {
                    name: 'كۋانت خەن ئىشلەش',
                    description: 'يۇمشاق ھەسسىباب',
                    complexity: 'VQE/QAOA',
                    icon: '⚛️'
                  }
                ].map((algo, idx) => (
                  <Grid item xs={12} sm={6} md={3} key={idx}>
                    <Card sx={{
                      height: '100%',
                      transition: 'transform 0.2s',
                      '&:hover': { transform: 'translateY(-4px)' },
                      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                    }}>
                      <CardContent sx={{ textAlign: 'center' }}>
                        <Typography variant="h2" sx={{ mb: 2 }}>{algo.icon}</Typography>
                        <Typography variant="h6" gutterBottom sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                          {algo.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" paragraph sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                          {algo.description}
                        </Typography>
                        <Chip label={algo.complexity} size="small" color="primary" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }} />
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>

            {/* ئاخىرقى خۇلاسە */}
            <Paper
              elevation={2}
              sx={{
                p: 5,
                my: 6,
                borderRadius: 4,
                background: alpha(theme.palette.primary.main, 0.05),
                border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
                fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
              }}
            >
              <Typography variant="h4" gutterBottom sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                خۇلاسە
              </Typography>
              <Typography variant="body1" paragraph sx={{
                mb: 3,
                fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
                textAlign: 'justify'
              }}>
                كۋانت ماشىنا ئۆگىنىشى ھەر ئىككى تەرەپنىڭ ئەڭ ياخشى تەرەپلىرىنى بىرلەشتۈرىدىغان كۆڭۈلدىكىدىن كۆرۈنەرلىك بىر ساھە:
              </Typography>
              <List sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                {[
                  'كۋانت كومپيۇتېرلىرى كۋانت پاراللېللىقى ۋە سۇپەرپوزىتسىيە قاتارلىق ئالاھىدىلىكلەرنى تەمىنلەيدۇ',
                  'ماشىنا ئۆگىنىش ئۆگىنىش ۋە مۆلچەرلەش جەريانلىرىنى تەمىنلەيدۇ',
                  'PennyLane ۋە TensorFlow Quantum قاتارلىق قوراللار بۇ ئىككى ساھەنى بىرلەشتۈرۈشنى ئاسانلاشتۇرىدۇ',
                  'يېقىن مۇددەتلىك نىشانلارغا NISQ ئالگورىزىملىرى كىرىدۇ، ئۇزۇن مۇددەتلىك نىشانلارغا خاتالىققا چىداملىق كۋانت كومپيۇتېرلىرى كىرىدۇ',
                  'بۇ ساھە فىزىكا، كومپيۇتېر ئىلمى ۋە ئىستاتىستىكا قاتارلىق كۆپ ساھەلەرنى قاپلايدۇ'
                ].map((point, idx) => (
                  <ListItem key={idx} sx={{ display: 'list-item', fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                    <ListItemText
                      primary={point}
                      sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}
                    />
                  </ListItem>
                ))}
              </List>
              <Box sx={{ mt: 4, pt: 3, borderTop: `1px solid ${theme.palette.divider}` }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                  <strong>ئەسكەرتىش:</strong> كۋانت ماشىنا ئۆگىنىشى تېخى تەرەققىياتنىڭ ئەرلىك باسقۇچىدا تۇرماقتا. كۆپلىگەن تەتقىقاتلار ئېنىق پايدىلارنى كۆرسىتىش ئۈچۈن داۋاملىشىۋاتىدۇ.
                </Typography>
              </Box>
            </Paper>

            {/* ئىشەنچلىك مەنبەلەر */}
            <Paper elevation={1} sx={{
              p: 3,
              mb: 6,
              borderRadius: 3,
              fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
            }}>
              <Typography variant="h6" gutterBottom sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                ئىشەنچلىك مەنبەلەر:
              </Typography>
              <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                {[
                  'PennyLane ھۆججەتلىرى',
                  'Nature Quantum Machine Learning',
                  'IBM Quantum Experience',
                  'Google Quantum AI',
                  'Microsoft Quantum Development Kit'
                ].map((source, idx) => (
                  <Chip
                    key={idx}
                    label={source}
                    variant="outlined"
                    size="small"
                    sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}
                  />
                ))}
              </Stack>
            </Paper>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Blog59;