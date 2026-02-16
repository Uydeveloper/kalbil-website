// Blog67.jsx - Python دېتال كۆرۈنۈش ماستەر دەرىجىسى
import React, { useState, useMemo } from 'react';
import {
  Box, Typography, Container, Paper, Grid, List, ListItem, ListItemText,
  Divider, Chip, IconButton, AppBar, Toolbar, useTheme, useMediaQuery,
  Drawer, Accordion, AccordionSummary, AccordionDetails, Tooltip, Stack
} from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScienceIcon from '@mui/icons-material/Science';
import BarChartIcon from '@mui/icons-material/BarChart';
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import MapIcon from '@mui/icons-material/Map';
import DownloadIcon from '@mui/icons-material/Download';

// ============ كود بۆلەك كومپونېنتى ============
const CodeBlock = ({ code, language, darkMode }) => (
  <Box sx={{
    my: 2,
    borderRadius: 2,
    overflow: 'hidden',
    border: `1px solid ${darkMode ? '#333' : '#e0e0e0'}`,
    fontFamily: '"Consolas", "Monaco", monospace'
  }}>
    <Box sx={{
      p: 1,
      bgcolor: darkMode ? '#1e1e1e' : '#f5f5f5',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: `1px solid ${darkMode ? '#333' : '#e0e0e0'}`,
    }}>
      <Typography variant="caption" sx={{ fontFamily: '"Consolas", monospace' }}>
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
        fontFamily: '"Consolas", "Monaco", "Ubuntu Mono", monospace'
      }}
    >
      {code}
    </SyntaxHighlighter>
  </Box>
);

// ============ ئاساسىي كومپونېنت ============
const Blog69 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const toggleAccordion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        primary: {
          main: darkMode ? '#2e7d32' : '#388e3c',
          light: darkMode ? '#60ad5e' : '#81c784',
          dark: darkMode ? '#005005' : '#2e7d32'
        },
        secondary: {
          main: darkMode ? '#ffb300' : '#ffa000'
        },
        background: {
          default: darkMode ? '#0d1b15' : '#f8faf8',
          paper: darkMode ? '#1a2b24' : '#ffffff'
        }
      },
      typography: {
        fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
        h1: {
          fontWeight: 800,
          fontSize: '2.8rem',
          color: darkMode ? '#a5d6a7' : '#2e7d32',
          mb: 2
        },
        h2: {
          fontWeight: 700,
          fontSize: '2rem',
          color: darkMode ? '#81c784' : '#388e3c',
          mb: 1.5
        },
        h3: {
          fontWeight: 600,
          fontSize: '1.4rem',
          color: darkMode ? '#66bb6a' : '#4caf50',
          mb: 1
        },
        body1: {
          lineHeight: 1.8,
          textAlign: 'justify'
        }
      },
      direction: 'rtl',
      shape: { borderRadius: 12 }
    }),
    [darkMode]
  );

  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const drawerWidth = 280;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
        {/* ئۈستى بالداق */}
        {/* <AppBar position="fixed" sx={{
          zIndex: theme.zIndex.drawer + 1,
          background: alpha(theme.palette.primary.main, 0.92),
        }}>
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                edge="start"
                onClick={() => setMobileOpen(!mobileOpen)}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <Typography variant="h6" sx={{ fontWeight: 700, flexGrow: 1, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
              Python دېتال كۆرۈنۈش ماستەر دەرىجىسى
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
              mt: '64px',
              bgcolor: darkMode ? '#121b17' : '#f5f5f5',
              fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
            }
          }}
        >
          <Box sx={{ p: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
              دەرىجىلەر
            </Typography>
            <List>
              {[
                'مەلۇمات ئانالسىت ئۈچۈن كۆرۈنۈش كۈتۈبخانىلىرى',
                'Pandas ئىشلىتىپ مەلۇماتنىڭ ئاساسىي ئەمەللىرى',
                'Matplotlib بىلەن ئاساسىي گرافىك سالىش',
                'Seaborn ئىشلىتىپ ئىستاتىستىك كۆرۈنۈش',
                'دېتالنىڭ باشتىن تەييارلىشى ۋە ئۆزگەرتىشى',
                'گۇرۇپپىلاش ۋە جەملىش',
                'مۇناسىۋەت تەھلىلى ۋە كۆرۈنۈش',
                'كۆپلەتكە گرافىكلارنى بىرلەشتۈرۈش',
                'ۋاقىتلىق سىرىيىلىك دېتال كۆرۈنۈشى',
                'تۈرلەرگە ئايرىلغان دېتالنى كۆرۈش',
                'تارقىلىشنى كۆرۈش',
                'رېگىرېسسىيە تەھلىلىنى كۆرۈش',
                'ئىنتېراكتىپ كۆرۈنۈش',
                'جۇغراپىيىلىك دېتالنى كۆرۈش',
                'دېتال كۆرۈنۈشنىڭ ئەڭ ياخشى ئۇسۇللىرى',
                'Python دىكى statsmodels نى كەڭەيتىش'
              ].map((title, idx) => (
                <ListItem key={idx} disablePadding>
                  <ListItemText primary={title} primaryTypographyProps={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }} />
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
              <Typography variant="h1">Python دېتال كۆرۈنۈش يۇقىرى دەرىجىسى</Typography>
              <Typography variant="h5" sx={{ opacity: 0.9, mb: 2, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                Seaborn، Pandas، Matplotlib ئىشلەتكەن ئەمەلىي دېتال تەھلىل ۋە كۆرۈنۈش تېخنىكىلىرى
              </Typography>
              <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
                {['دېتال ساينس', 'كۆرۈنۈش', 'Python', 'تەھلىل'].map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.2)',
                      color: 'white',
                      fontWeight: 600,
                      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                    }}
                  />
                ))}
              </Stack>
            </Paper>

            {/* دەرىجە 1 */}
            <Accordion expanded={expanded === 1} onChange={toggleAccordion(1)} elevation={1} sx={{ mb: 3 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                  <ScienceIcon />
                  <Typography variant="h3">دېتال ساينسى ئۈچۈن كۆرۈنۈش كۈتۈبخانىلىرى</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography paragraph>
                  دېتال تەھلىل ۋە ماشىنا ئۆگىنىشىدا، دېتالنى كۆرۈش بەك مۇھىم رول ئوينايدۇ. Python دا دېتال كۆرۈش ئۈچۈن بىر قانچە كۈچلۈك كۈتۈبخانىلار بار. بۇ يەردە ئەڭ مەشھۇر Seaborn، Pandas، Matplotlib كۈتۈبخانىلىرىنى ئىشلىتىپ دېتالنى كۆرۈشنى ئۆگىنىمىز.
                </Typography>
                <Typography paragraph>
                  بۇ كۈتۈبخانىلارنىڭ ھەر بىرى ئوخشىمايدىغان ئالاھىدىلىككە ئىگە: Pandas دېتالنى باشقۇرۇش ۋە تەھلىل قىلىش، Matplotlib ئاساسىي گرافىك سىزىش، Seaborn بولسا ئىستاتىستىك دېتال كۆرۈشنى ئۆز ئىگىزىگە ئالغان.
                </Typography>
                <CodeBlock code={`import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Sample data creation
np.random.seed(0)
data = {
    'Age': np.random.randint(20, 60, 50),
    'Height': np.random.normal(170, 10, 50),
    'Weight': np.random.normal(65, 15, 50),
    'Income': np.random.exponential(50000, 50),
    'Satisfaction': np.random.choice(['Low', 'Medium', 'High'], 50)
}
df = pd.DataFrame(data)`} language="python" darkMode={darkMode} />
              </AccordionDetails>
            </Accordion>

            {/* دەرىجە 2 */}
            <Accordion expanded={expanded === 2} onChange={toggleAccordion(2)} elevation={1} sx={{ mb: 3 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <BarChartIcon />
                  <Typography variant="h3">Pandas ئىشلىتىپ دېتالنىڭ ئاساسىي ئەمەللىرى</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography paragraph>
                  Pandas دېتال تەھلىل ئۈچۈن كۈچلۈك كۈتۈبخانا بولۇپ، ئىككى ئۆلچەملىك دېتال قۇرۇلمىسى بار. head()، describe()، info() قاتارلىق ئۇسۇللار بىلەن دېتالنى تېز ھالدا چۈشىنىشكە بولىدۇ.
                </Typography>
                <CodeBlock code={`# Display first 5 rows
print(df.head())

# Show basic statistics
print(df.describe())

# Display dataframe info
print(df.info())

# Count satisfaction levels
print(df['Satisfaction'].value_counts())`} language="python" darkMode={darkMode} />
              </AccordionDetails>
            </Accordion>

            {/* دەرىجە 3 */}
            <Accordion expanded={expanded === 3} onChange={toggleAccordion(3)} elevation={1} sx={{ mb: 3 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <BarChartIcon />
                  <Typography variant="h3">Matplotlib بىلەن ئاساسىي گرافىك سالىش</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography paragraph>
                  Matplotlib Python دىكى ئەڭ كەڭ تارقىلىپ كەتكەن كۆرۈنۈش كۈتۈبخانىسى بولۇپ، تۈرلۈك گرافىكلارنى ياساشقا بولىدۇ.
                </Typography>
                <CodeBlock code={`# Font setup for Japanese (not needed for Uyghur, but standard)
plt.rcParams['font.family'] = 'Meiryo'

# Scatter plot
plt.figure(figsize=(10, 6))
plt.scatter(df['Height'], df['Weight'])
plt.title('Height vs Weight Relationship')
plt.xlabel('Height (cm)')
plt.ylabel('Weight (kg)')
plt.show()

# Bar chart
satisfaction_counts = df['Satisfaction'].value_counts()
plt.figure(figsize=(8, 6))
plt.bar(satisfaction_counts.index, satisfaction_counts.values)
plt.title('Satisfaction Distribution')
plt.xlabel('Satisfaction')
plt.ylabel('Count')
plt.show()`} language="python" darkMode={darkMode} />
              </AccordionDetails>
            </Accordion>

            {/* دەرىجە 4 */}
            <Accordion expanded={expanded === 4} onChange={toggleAccordion(4)} elevation={1} sx={{ mb: 3 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PsychologyIcon />
                  <Typography variant="h3">Seaborn ئىشلىتىپ ئىستاتىستىك كۆرۈنۈش</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography paragraph>
                  Seaborn Matplotlib نىڭ ئۈستىگە قۇرۇلغان كۆرۈنۈش كۈتۈبخانىسى بولۇپ، گۈزەل سۈكۈتتىكى ئۇسلۇب ۋە ئىستاتىستىك گرافىكلارغا ئىگە.
                </Typography>
                <CodeBlock code={`# Set style
sns.set(style="whitegrid", font="MS Gothic")

# Scatter plot with hue
plt.figure(figsize=(10, 6))
sns.scatterplot(data=df, x='Height', y='Weight', hue='Satisfaction')
plt.title('Height vs Weight by Satisfaction')
plt.show()

# Boxplot
plt.figure(figsize=(10, 6))
sns.boxplot(data=df, x='Satisfaction', y='Income')
plt.title('Income Distribution by Satisfaction')
plt.show()`} language="python" darkMode={darkMode} />
              </AccordionDetails>
            </Accordion>

            {/* دەرىجە 5 */}
            <Accordion expanded={expanded === 5} onChange={toggleAccordion(5)} elevation={1} sx={{ mb: 3 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <CodeIcon />
                  <Typography variant="h3">دېتالنىڭ باشتىن تەييارلىشى ۋە ئۆزگەرتىشى</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography paragraph>
                  كۆرۈنۈشتىن بۇرۇن، دېتالنى باشتىن تەييارلاش ياكى يېڭى ئۆزگەرگۈچ قۇرۇش كېرەك بولىدۇ.
                </Typography>
                <CodeBlock code={`# Calculate BMI
df['BMI'] = df['Weight'] / ((df['Height'] / 100) ** 2)

# Categorize age
df['AgeGroup'] = pd.cut(df['Age'], bins=[0, 30, 40, 50, 60], labels=['20s', '30s', '40s', '50s'])

# Income levels
df['IncomeLevel'] = pd.qcut(df['Income'], q=3, labels=['Low', 'Medium', 'High'])

print(df.head())`} language="python" darkMode={darkMode} />
              </AccordionDetails>
            </Accordion>

            {/* دەرىجە 6 */}
            <Accordion expanded={expanded === 6} onChange={toggleAccordion(6)} elevation={1} sx={{ mb: 3 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <BarChartIcon />
                  <Typography variant="h3">گۇرۇپپىلاش ۋە جەملىش</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography paragraph>
                  groupby() ئارقىلىق دېتالنى گۇرۇپپىلاپ، ھەر بىر گۇرۇپپىنىڭ ئوتتۇرىقى نۇمۇرىنى تاپىش مۇمكىن.
                </Typography>
                <CodeBlock code={`# Group by AgeGroup
age_income = df.groupby('AgeGroup')['Income'].mean().reset_index()

# Group by Satisfaction
satisfaction_income = df.groupby('Satisfaction')['Income'].mean().reset_index()

# Plot
plt.figure(figsize=(10, 6))
sns.barplot(data=age_income, x='AgeGroup', y='Income')
plt.title('Average Income by Age Group')
plt.show()`} language="python" darkMode={darkMode} />
              </AccordionDetails>
            </Accordion>

            {/* دەرىجە 7 */}
            <Accordion expanded={expanded === 7} onChange={toggleAccordion(7)} elevation={1} sx={{ mb: 3 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <PsychologyIcon />
                  <Typography variant="h3">مۇناسىۋەت تەھلىلى ۋە كۆرۈنۈش</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Typography paragraph>
                  corr() ئارقىلىق ئۆزئارا باغلىنىشنى ھېسابلاپ، heatmap() بىلەن كۆرۈش مۇمكىن.
                </Typography>
                <CodeBlock code={`# Correlation matrix
correlation = df[['Age', 'Height', 'Weight', 'Income', 'BMI']].corr()

# Heatmap
plt.figure(figsize=(10, 8))
sns.heatmap(correlation, annot=True, cmap='coolwarm', vmin=-1, vmax=1)
plt.title('Correlation Matrix')
plt.show()`} language="python" darkMode={darkMode} />
              </AccordionDetails>
            </Accordion>

            {/* دەرىجە 8 - 16 قىسقىچە */}
            {[8,9,10,11,12,13,14,15,16].map((id) => (
              <Accordion key={id} expanded={expanded === id} onChange={toggleAccordion(id)} elevation={1} sx={{ mb: 3 }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
                    {[<BarChartIcon />, <BarChartIcon />, <BarChartIcon />, <PsychologyIcon />, <PsychologyIcon />, <BarChartIcon />, <MapIcon />, <ScienceIcon />, <CodeIcon />][id - 8]}
                    <Typography variant="h3">
                      {[
                        'كۆپلەتكە گرافىكلارنى بىرلەشتۈرۈش',
                        'ۋاقىتلىق سىرىيىلىك دېتال كۆرۈنۈشى',
                        'تۈرلەرگە ئايرىلغان دېتالنى كۆرۈش',
                        'تارقىلىشنى كۆرۈش',
                        'رېگىرېسسىيە تەھلىلىنى كۆرۈش',
                        'ئىنتېراكتىپ كۆرۈنۈش',
                        'جۇغراپىيىلىك دېتالنى كۆرۈش',
                        'دېتال كۆرۈنۈشنىڭ ئەڭ ياخشى ئۇسۇللىرى',
                        'Python دىكى statsmodels نى كەڭەيتىش'
                      ][id - 8]}
                    </Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography paragraph>
                    بۇ دەرىجىدە ئىشلەتكەن كود: plotly, subplots, regplot, lmplot، ۋە statsmodels قاتارلىق كۈتۈبخانىلار بىلەن دېتالنى تەھلىل قىلىش ۋە كۆرۈش ئۇسۇللىرى ئۆگىتىلىدۇ.
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    مەسىلەن، Plotly بىلەن ئىنتېراكتىپ گرافىك ياساش:
                  </Typography>
                  <CodeBlock code={`import plotly.express as px

fig = px.scatter(df, x='Height', y='Weight', color='Satisfaction', hover_data=['Age', 'BMI'])
fig.update_layout(title='Interactive Height vs Weight')
fig.show()`} language="python" darkMode={darkMode} />
                </AccordionDetails>
              </Accordion>
            ))}

            {/* ============ نەتىجە بۆلەك ============ */}
            <Paper sx={{ p: 3, mt: 4, bgcolor: alpha(theme.palette.primary.light, 0.1), border: `1px solid ${theme.palette.divider}`, borderRadius: 2 }}>
              <Typography variant="h3" gutterBottom sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                نەتىجە
              </Typography>
              <Typography paragraph>
                Seaborn، Pandas، Matplotlib ۋە statsmodels كۈتۈبخانىلىرىنى بىرلەشتۈرۈپ ئىشلىتىش ئارقىلىق، دېتالنىڭ مەنىلىك كۆرۈنۈشىنى قولغا كەلتۈرۈشكە بولىدۇ. بۇ تېخنىكىلارنى سىزنىڭ ئۆز دېتالىڭىزدا سىناپ باقىڭ ۋە ئۆزىڭىزگە مۇناسىپ كۆرۈنۈش ئۇسۇللىرىنى ئىجاد قىلىڭ.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <strong>ئەسكەرتىش:</strong> مودېل شەرتلىرىنى داۋاملىق تەكشۈرۈش ۋە نەتىجىلەرنى ئېھتىياتچىلىك بىلەن چۈشىنىش كېرەك.
              </Typography>
            </Paper>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Blog69;