// Blog64.jsx - سىزىقلىق ئالگېبرا ئاساسى (دەرىجىلىك دەرسلىك)
import React, { useState, useEffect, useMemo } from 'react';
import {
  Box, Typography, Container, Paper, List, ListItem, ListItemButton,
  ListItemText, Divider, Chip, IconButton, AppBar, Toolbar, useTheme,
  useMediaQuery, Drawer, Accordion, AccordionSummary, AccordionDetails,
  Grid, TextField, Button, Stack, Tooltip
} from '@mui/material';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SchoolIcon from '@mui/icons-material/School';
import CalculateIcon from '@mui/icons-material/Calculate';
import CopyIcon from '@mui/icons-material/FileCopy';
import ScienceIcon from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';

// ============ ۋېكتور ھېسابلىغۇچ ============
const VectorCalculator = () => {
  const [a1, setA1] = useState(2);
  const [a2, setA2] = useState(5);
  const [b1, setB1] = useState(-1);
  const [b2, setB2] = useState(3);
  const [result, setResult] = useState('');

  const calculate = () => {
    const x = parseFloat(a1) + parseFloat(b1);
    const y = parseFloat(a2) + parseFloat(b2);
    setResult(`𝒂 + 𝒃 = (${x.toFixed(2)}, ${y.toFixed(2)})`);
  };

  return (
    <Paper sx={{ p: 2.5, mb: 3, bgcolor: 'warning.50', border: '1px solid', borderColor: 'warning.200', borderRadius: 2 }}>
      <Typography variant="h6" sx={{ mb: 2, color: 'warning.800', display: 'flex', alignItems: 'center', gap: 1 }}>
        <CalculateIcon /> كىچىك ۋېكتور قۇشۇش ھېسابلىغۇچى
      </Typography>
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>𝒂 = (x₁, y₁)</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <TextField
              size="small"
              type="number"
              value={a1}
              onChange={(e) => setA1(e.target.value)}
              sx={{ width: '90px' }}
            />
            <Typography>,</Typography>
            <TextField
              size="small"
              type="number"
              value={a2}
              onChange={(e) => setA2(e.target.value)}
              sx={{ width: '90px' }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body2" sx={{ mb: 1, fontWeight: 600 }}>𝒃 = (x₂, y₂)</Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <TextField
              size="small"
              type="number"
              value={b1}
              onChange={(e) => setB1(e.target.value)}
              sx={{ width: '90px' }}
            />
            <Typography>,</Typography>
            <TextField
              size="small"
              type="number"
              value={b2}
              onChange={(e) => setB2(e.target.value)}
              sx={{ width: '90px' }}
            />
          </Stack>
        </Grid>
      </Grid>
      <Button variant="contained" color="primary" onClick={calculate} sx={{ mr: 1 }}>
        قۇشۇش
      </Button>
      {result && (
        <Box sx={{ mt: 2, p: 1.5, bgcolor: 'white', borderRadius: 1, fontWeight: 'bold', fontFamily: 'monospace' }}>
          {result}
        </Box>
      )}
    </Paper>
  );
};

// ============ دەرىجە كومپونېنتى ============
const Lesson = ({ title, id, children, icon }) => {
  const [expanded, setExpanded] = useState(false);
  const theme = useTheme();

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      elevation={1}
      sx={{
        mb: 2,
        borderRadius: 2,
        border: `1px solid ${theme.palette.divider}`,
        '&:before': { display: 'none' }
      }}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, width: '100%' }}>
          {icon}
          <Typography variant="h6" sx={{ fontWeight: 600, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
            {title}
          </Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ pt: 1, pb: 2 }}>
          {children}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

// ============ ئاساسىي كومپونېنت ============
const Blog64 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // تېما تۈزۈش
  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#5d8aa8' : '#1a3a6c',
        light: darkMode ? '#87b0d0' : '#2c5aa0',
        dark: darkMode ? '#2c4e6e' : '#112647'
      },
      secondary: {
        main: darkMode ? '#ffd700' : '#ffd700',
        contrastText: '#000'
      },
      background: {
        default: darkMode ? '#0d1b2a' : '#f5f7fa',
        paper: darkMode ? '#1b263b' : '#ffffff'
      }
    },
    typography: {
      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", "Noto Nastaliq Urdu", "Scheherazade", sans-serif',
      h1: {
        fontWeight: 800,
        fontSize: '2.4rem',
        color: darkMode ? '#e0e0ff' : '#1a3a6c'
      },
      h2: {
        fontWeight: 700,
        fontSize: '2rem',
        color: darkMode ? '#bbdefb' : '#1a3a6c'
      },
      h3: {
        fontWeight: 600,
        fontSize: '1.4rem',
        color: darkMode ? '#90caf9' : '#2c5aa0'
      },
      body1: {
        fontSize: '1.1rem',
        lineHeight: 1.8
      }
    },
    direction: 'rtl'
  }), [darkMode]);

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const drawerWidth = 280;

  // كودنى كۆچۈرۈش
  const copyCode = () => {
    navigator.clipboard.writeText(document.documentElement.outerHTML)
      .then(() => alert('كود مۇۋەپپەقىيەتلىك كۆچۈرۈلدى!'))
      .catch(() => alert('كۆچۈرۈش مەغلۇب بولدى.'));
  };

  // دەرىجىلەر رويخەتى
  const lessons = [
    { id: 'lesson2', title: 'دەرىجە 2: سىزىقلىق ۋېكتور (1)', icon: <ScienceIcon /> },
    { id: 'lesson3', title: 'دەرىجە 3: ئاساس (بېزىس)', icon: <SchoolIcon /> },
    { id: 'lesson4', title: 'دەرىجە 4: ماترىتسا (1)', icon: <CalculateIcon /> },
    { id: 'lesson5', title: 'دەرىجە 5: ماترىتسا (2)', icon: <CalculateIcon /> },
    { id: 'lesson6', title: 'دەرىجە 6: ماترىتسا دېتېرمىنانتى (1)', icon: <CalculateIcon /> },
    { id: 'lesson7', title: 'دەرىجە 7: ماترىتسا دېتېرمىنانتى (2)', icon: <CalculateIcon /> },
    { id: 'lesson8', title: 'دەرىجە 8: ماترىتسا دېتېرمىنانتى (3)', icon: <CalculateIcon /> },
    { id: 'lesson9', title: 'دەرىجە 9: ماترىتسىنىڭ رانكى (1)', icon: <CalculateIcon /> },
    { id: 'lesson10', title: 'دەرىجە 10: ماترىتسىنىڭ رانكى (2)', icon: <CalculateIcon /> },
    { id: 'lesson11', title: 'دەرىجە 11: تەتۈر ماترىتسا (ئىنۋېرس ماترىتسا)', icon: <CalculateIcon /> },
    { id: 'lesson12', title: 'دەرىجە 12: خاس قىممەت ۋە خاس ۋېكتور', icon: <ScienceIcon /> },
    { id: 'lesson13', title: 'دەرىجە 13: دىئاگونال (چايتۇرۇش)', icon: <ScienceIcon /> }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* ئۈستى بالداق */}
        {/* <AppBar position="fixed" sx={{
          zIndex: theme.zIndex.drawer + 1,
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${alpha(theme.palette.primary.light, 0.8)})`,
        }}>
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={() => setMobileOpen(!mobileOpen)}
                sx={{ mr: 2 }}
              >
                <SchoolIcon />
              </IconButton>
            )}
            <Typography variant="h6" sx={{ fontWeight: 700, flexGrow: 1, textAlign: 'center' }}>
              سىزىقلىق ئالگېبرا ئاساسلىرى
            </Typography>
            <Tooltip title="تېما ئالماشتۇرۇش">
              <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar> */}

        {/* يان بالداق */}
        <Drawer
          variant={isMobile ? 'temporary' : 'permanent'}
          open={!isMobile || mobileOpen}
          onClose={() => setMobileOpen(false)}
          ModalProps={{ keepMounted: true }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
              bgcolor: darkMode ? '#121826' : '#ffffff',
              mt: '64px',
              fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
            }
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <SchoolIcon /> دەرىجىلەر
            </Typography>
            <List>
              {lessons.map((lesson) => (
                <ListItem key={lesson.id} disablePadding>
                  <ListItemButton
                    onClick={() => {
                      const el = document.getElementById(lesson.id);
                      if (el) {
                        window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
                        if (isMobile) setMobileOpen(false);
                      }
                    }}
                    sx={{
                      borderRadius: 1,
                      mb: 0.5,
                      '&:hover': { bgcolor: alpha(theme.palette.primary.main, 0.1) }
                    }}
                  >
                    <ListItemText primary={lesson.title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>

        {/* ئاساسىي مەزمۇن */}
        <Box component="main" sx={{ flexGrow: 1, p: { xs: 2, md: 3 }, mt: 8 }}>
          <Container maxWidth="lg">
            {/* باش ئۇنۋان */}
            <Paper
              elevation={0}
              sx={{
                p: { xs: 2, md: 4 },
                mb: 4,
                borderRadius: 3,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
                color: 'white',
                textAlign: 'center'
              }}
            >
              <Typography variant="h2" gutterBottom>
                سىزىقلىق ئالگېبرا ئاساسلىرى
              </Typography>
              <Typography variant="h6" sx={{ opacity: 0.9 }}>
                ئۇيغۇر تىلىدا تولۇق دەرىجىلىك دەرسلىك — بىلىم ئالۇشنىڭ ئاسان يولى
              </Typography>
            </Paper>

            {/* دەرىجىلەر */}
            <Lesson title="دەرىجە 2: سىزىقلىق ۋېكتور (1)" id="lesson2" icon={<ScienceIcon />}>
              <Typography variant="h3" sx={{ mb: 2 }}>نىمە دېگەن ۋېكتور؟</Typography>
              <Typography paragraph>
                ۋېكتور دېگەنلىك — ئۇزۇنلۇقى (چوڭلۇقى) ۋە يۆنىلىشى بار بولغان چىزىق. مەسىلەن: سۈرئەت، كۈچ، تېزلىنىش قاتارلىق چوڭلۇقلار ۋېكتورلار بولۇپ ھېساپلىنىدۇ.
              </Typography>
              <Typography paragraph>
                ئادەتتە، <code style={{ backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>𝐯 = (𝑣₁, 𝑣₂, ..., 𝑣ₙ)</code> كۆرۈنۈشىدە يېزىلىدۇ. مەسىلەن، <code style={{ backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>𝐯 = (3, -1, 2)</code> 3 ئۆلچەملىك ۋېكتور.
              </Typography>

              <Paper sx={{ p: 2, my: 2, bgcolor: alpha(theme.palette.primary.light, 0.1), borderLeft: '4px solid', borderColor: 'primary.main' }}>
                <Typography variant="h4" sx={{ mb: 1 }}>مىسال:</Typography>
                <Typography paragraph>
                  ۋېكتور <code style={{ backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>𝐚 = (2, 5)</code> ۋە <code style={{ backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>𝐛 = (-1, 3)</code> بولسا:
                </Typography>
                <ul>
                  <li>قۇشۇش: <code style={{ backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>𝐚 + 𝐛 = (2 + (-1), 5 + 3) = (1, 8)</code></li>
                  <li>سەل چوڭايتىش (سەل): <code style={{ backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>3𝐚 = (6, 15)</code></li>
                </ul>
              </Paper>

              <VectorCalculator />
            </Lesson>

            <Lesson title="دەرىجە 3: ئاساس (بېزىس)" id="lesson3" icon={<SchoolIcon />}>
              <Typography variant="h3" sx={{ mb: 2 }}>ئاساس (بېزىس) نىمە؟</Typography>
              <Typography paragraph>
                بىر سىزىقلىق فازادا، بارلىق ۋېكتورلارنى سەل چوڭايتىپ قۇشۇش ئارقىلىق ئىپادىلەشكە بولىدىغان، سىزىقىي مۇستەقىل ۋېكتورلارنىڭ «ئەڭ ئاز» توپلىمى ئاساس دەپ ئاتىلىدۇ.
              </Typography>
              <Typography paragraph>
                مەسىلەن، 2-ئۆلچەملىك سىزىقلىق فازا <code style={{ backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>ℝ²</code> نىڭ ئاساسى:  
                <code style={{ backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>𝐞₁ = (1, 0)</code> ۋە <code style={{ backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>𝐞₂ = (0, 1)</code>.
              </Typography>
              <Paper sx={{ p: 2, my: 2, bgcolor: alpha(theme.palette.primary.light, 0.1), borderLeft: '4px solid', borderColor: 'primary.main' }}>
                <Typography variant="h4" sx={{ mb: 1 }}>مىسال:</Typography>
                <Typography paragraph>
                  ھەر قانداق ۋېكتور <code style={{ backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>𝐯 = (𝑥, 𝑦)</code> نى تۆۋەندىكىدەك كۆرسىتەلەيدۇ:
                </Typography>
                <Typography>
                  <code style={{ backgroundColor: '#eee', padding: '2px 6px', borderRadius: '4px', fontFamily: 'monospace' }}>𝐯 = 𝑥⋅𝐞₁ + 𝑦⋅𝐞₂ = 𝑥(1,0) + 𝑦(0,1)</code>
                </Typography>
              </Paper>
            </Lesson>

            {/* قىسقىچە دەرىجىلەر */}
            {[
              { id: 'lesson4', title: 'دەرىجە 4: ماترىتسا (1)', content: 'ماترىتسا — سانلارنى تۆر شەكلىدە جايلاشتۇرۇش. مەسىلەن: A = ⎡1 2⎤\n                                      ⎣3 4⎦. ماترىتسىنىڭ قۇتۇرۇ (row) ۋە ئۇستۇن (column) بولۇشى، قوشۇش، سەل چوڭايتىش، كۆپەيتىش قاتارلىق ئاساسىي ئەمەللىرى بار.' },
              { id: 'lesson5', title: 'دەرىجە 5: ماترىتسا (2)', content: 'ماترىتسا كۆپەيتىشىنىڭ قانۇنى: C = A⋅B بولۇشى ئۈچۈن، A نىڭ ئۇستۇن سانى = B نىڭ قۇتۇر سانى بولۇشى كېرەك.' },
              { id: 'lesson6', title: 'دەرىجە 6: ماترىتسا دېتېرمىنانتى (1)', content: '2×2 ماترىتسىنىڭ دېتېرمىنانتى: det⎡a b⎤ = 𝑎𝑑 − 𝑏𝑐\n                                           ⎣c d⎦' },
              { id: 'lesson7', title: 'دەرىجە 7: ماترىتسا دېتېرمىنانتى (2)', content: '3×3 ماترىتسىنىڭ دېتېرمىنانتىنى «لاپلاس كېڭەيتىش» ئۇسۇلى بىلەن ھېسابلايدۇ.' },
              { id: 'lesson8', title: 'دەرىجە 8: ماترىتسا دېتېرمىنانتى (3)', content: 'دىتېرمىنانتنىڭ خاسلىقى:\n- ئەگەر ماترىتسىنىڭ بىر قۇتۇرى ياكى ئۇستۇنى نۆل بولسا، دېتېرمىنانت = 0\n- ئەگەر ئىككى قۇتۇر ياكى ئۇستۇن ئوخشاش بولسا، دېتېرمىنانت = 0' },
              { id: 'lesson9', title: 'دەرىجە 9: ماترىتسىنىڭ رانكى (1)', content: 'ماترىتسىنىڭ «رانكى» دېگەنلىك — ئۇنىڭ سىزىقىي مۇستەقىل قۇتۇر ياكى ئۇستۇنلىرىنىڭ ئەڭ كۆپ سانى.' },
              { id: 'lesson10', title: 'دەرىجە 10: ماترىتسىنىڭ رانكى (2)', content: 'رانكنى ھېسابلاش ئۈچۈن: ماترىتسىنى «ئۈستۈن سەل شەكىل»گە (Row Echelon Form) كەلتۈرۈش كېرەك.' },
              { id: 'lesson11', title: 'دەرىجە 11: تەتۈر ماترىتسا (ئىنۋېرس ماترىتسا)', content: 'ئەگەر A⋅A⁻¹ = I (بىرلىك ماترىتسا) بولسا، A⁻¹ نى A نىڭ تەتۈر ماترىتسىسى دەيمىز. شەرت: det(A) ≠ 0 بولۇشى شەرت.' },
              { id: 'lesson12', title: 'دەرىجە 12: خاس قىممەت ۋە خاس ۋېكتور', content: 'A𝐯 = λ𝐯 بولسا، λ نى «خاس قىممەت»، 𝐯 نى «خاس ۋېكتور» دەيمىز. خاس قىممەتلەرنى det(A − λI) = 0 تېڭلىمىسىدىن تاپىمىز.' },
              { id: 'lesson13', title: 'دەرىجە 13: دىئاگونال (چايتۇرۇش)', content: 'ئەگەر ماترىتسا A نى تۆۋەندىكىدەك يېزىش مۇمكىن بولسا: A = PDP⁻¹ (بۇ يەردە D چايتۇر ماترىتسا)، بۇنداق ھالدا A «دىئاگوناللىنىدۇ» دەيمىز.' }
            ].map((lesson, idx) => (
              <Lesson key={idx} id={lesson.id} title={lesson.title} icon={<CalculateIcon />}>
                <pre style={{
                  whiteSpace: 'pre-wrap',
                  backgroundColor: '#f9f9f9',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #eee',
                  direction: 'ltr',
                  textAlign: 'left',
                  fontFamily: 'monospace'
                }}>
                  {lesson.content}
                </pre>
              </Lesson>
            ))}
          </Container>
        </Box>

        {/* تۆۋەن بالداق */}
        <Box component="footer" sx={{
          textAlign: 'center',
          p: 2,
          mt: 4,
          color: 'text.secondary',
          borderTop: `1px solid ${theme.palette.divider}`,
          bgcolor: darkMode ? '#121826' : '#f9fafb'
        }}>
          <Typography variant="body2">
            دەرىجىلىك دەرسلىك — سىزىقلىق ئالگېبرا ⓒ 2026 | تەييارلىغۇچى: KeLBiL ⚡{' '}
            <IconButton size="small" onClick={copyCode}>
              <CopyIcon fontSize="small" />
            </IconButton>
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Blog64;