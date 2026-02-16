// Blog61.jsx - Python سانلىق مەلۇمات كۆرسىتىش ماستىرلىق دەرسلىكى
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
  Accordion, AccordionSummary, AccordionDetails,
  LinearProgress, Alert as MuiAlert
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ScienceIcon from '@mui/icons-material/Science';
import MemoryIcon from '@mui/icons-material/Memory';
import TimelineIcon from '@mui/icons-material/Timeline';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import TableChartIcon from '@mui/icons-material/TableChart';
import StatsIcon from '@mui/icons-material/QueryStats';
import MapIcon from '@mui/icons-material/Map';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { createTheme, ThemeProvider, alpha } from '@mui/material/styles';

// ============ كود بۆلەكى كومپونېنتى ============
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

// ============ باش Blog61 كومپونېنتى ============
const Blog57 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState(1);
  const [bookmarked, setBookmarked] = useState([]);

  const theme = useMemo(() => createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#1976d2' : '#1565c0',
        light: darkMode ? '#bbdefb' : '#e3f2fd',
        dark: darkMode ? '#0d47a1' : '#0d47a1'
      },
      secondary: {
        main: darkMode ? '#dc004e' : '#f50057',
        light: darkMode ? '#f8bbd9' : '#fce4ec',
        dark: darkMode ? '#880e4f' : '#c51162'
      },
      background: {
        default: darkMode ? '#121212' : '#f8f9fa',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      }
    },
    typography: {
      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif',
      h1: {
        fontWeight: 800,
        fontSize: '3.2rem',
        background: darkMode
          ? 'linear-gradient(45deg, #2196f3 30%, #f50057 90%)'
          : 'linear-gradient(45deg, #1976d2 30%, #dc004e 90%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '1rem'
      },
      h4: {
        fontWeight: 700,
        margin: '1.5rem 0',
        color: darkMode ? '#90caf9' : '#1976d2',
        position: 'relative',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-8px',
          left: 0,
          width: '60px',
          height: '4px',
          background: darkMode ? '#90caf9' : '#1976d2',
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

  // ============ دەرس بابلىرى ============
  const chapters = [
    {
      id: 1,
      title: 'سانلىق مەلۇمات كۆرسىتىش كۈتۈپخانىلىرىغا كىرىش',
      icon: <ScienceIcon />,
      description: 'Python كۆرسىتىش مۇھىتىنىڭ ئومۇمىي چۈشەندۈرۈشى',
      content: `سانلىق مەلۇمات تەھلىلى ۋە ماشىنا ئۆگىنىشىدە، سانلىق مەلۇمات كۆرسىتىش مۇھىم رول ئوينايدۇ. Python سانلىق مەلۇمات كۆرسىتىش ئۈچۈن بىر قانچە كۈچلۈك كۈتۈپخانىلارنى تەمىنلەيدۇ.

بۇ دەرسلىكتە بىز سانلىق مەلۇمات كۆرسىتىش تېخنىكىلىرىنى ئىگىلەش ئۈچۈن ئۈچ خاس مەشھۇر كۈتۈپخانىلارغا دىققەت قىلىمىز: Seaborn, Pandas ۋە Matplotlib.`,
      code: `import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# نۇمۇنىلۇق سانلىق مەلۇمات قۇرۇش
np.random.seed(0)
data = {
    'يېشى': np.random.randint(20, 60, 50),
    'بويى': np.random.normal(170, 10, 50),
    'ئېغىرلىقى': np.random.normal(65, 15, 50),
    'كەلبىياتى': np.random.exponential(50000, 50),
    'قانائەتلىنىش': np.random.choice(['تۆۋەن', 'ئوتتۇرا', 'يۇقىرى'], 50)
}
df = pd.DataFrame(data)`
    },
    {
      id: 2,
      title: 'Pandas بىلەن ئاساسىي سانلىق مەلۇمات ھەرىكەتلىرى',
      icon: <TableChartIcon />,
      description: 'سانلىق مەلۇمات بىر تەرەپ قىلىش ۋە تەكشۈرۈش تېخنىكىلىرى',
      content: `Pandas سانلىق مەلۇمات تەھلىلى ئۈچۈن كۈچلۈك كۈتۈپخانا. ئۇ ئىككى ئۆلچەملىك سانلىق مەلۇمات قۇرۇلۇشى بولغان DataFrame نى تەمىنلەيدۇ، بۇ ئاسانلىق بىلەن تۈرلۈك سانلىق مەلۇمات ھەرىكەتلىرىنى قوزغىتىدۇ. Pandas head(), describe() ۋە info() قاتارلىق ئۇسۇللار بىلەن سانلىق مەلۇماتنىڭ ئومۇمىي كۆرۈنۈشىنى ئاسان چۈشىنىشىڭىزنى يول قويىدۇ.`,
      code: `# ئالدىنقى 5 قۇرنى كۆرسىتىش
print(df.head())

# ئاساسىي ستاتىستىكا
print(df.describe())

# DataFrame ئۇچۇرى
print(df.info())

# كاتېگورىيەلىك ئۈچۈن قىممەت سانى
print(df['قانائەتلىنىش'].value_counts())`
    },
    {
      id: 3,
      title: 'Matplotlib بىلەن ئاساسىي گرافىك قۇرۇش',
      icon: <TimelineIcon />,
      description: 'Matplotlib بىلەن ئاساسىي سىزىش',
      content: `Matplotlib Python دىكى ئەڭ كەڭ قوللىنىلىدىغان كۆرسىتىش كۈتۈپخانىسى. ئۇ تۈرلۈك گرافىكلارنى قۇرۇشتا ئەركىنلىكى بىلەن ئالاھىدىلىنىدۇ. Matplotlib plt.scatter() بىلەن تارقالما گرافىك ۋە plt.bar() بىلەن ستولبىكا گرافىكىنى ئاسان قۇرۇشىڭىزنى يول قويىدۇ.`,
      code: `# ياپونچە تېكست ئۈچۈن خەت سەپلىمىسى
plt.rcParams['font.family'] = 'Meiryo'

# تارقالما گرافىك قۇرۇش
plt.figure(figsize=(10, 6))
plt.scatter(df['بويى'], df['ئېغىرلىقى'])
plt.title('بويى ۋە ئېغىرلىقى مۇناسىۋىتى')
plt.xlabel('بويى (سم)')
plt.ylabel('ئېغىرلىقى (كگ)')
plt.show()

# ستولبىكا گرافىكى قۇرۇش
قانائەت_سانلىرى = df['قانائەتلىنىش'].value_counts()
plt.figure(figsize=(8, 6))
plt.bar(قانائەت_سانلىرى.index, قانائەت_سانلىرى.values)
plt.title('قانائەتلىنىش تارقىلىشى')
plt.xlabel('قانائەتلىنىش')
plt.ylabel('سانى')
plt.show()`
    },
    {
      id: 4,
      title: 'Seaborn بىلەن ستاتىستىكىلىق كۆرسىتىش',
      icon: <StatsIcon />,
      description: 'ئىلغار ستاتىستىكىلىق گرافىكلار',
      content: `Seaborn Matplotlib ئۈستىدە قۇرۇلغان ستاتىستىكىلىق سانلىق مەلۇمات كۆرسىتىش كۈتۈپخانىسى. ئۇ گۈزەل سەككىزلىك ئۇسلۇبلار ۋە ستاتىستىكىلىق گرافىكلارنى ئاسان قۇرۇش ئالاھىدىلىكلىرىگە ئىگە. Seaborn نىڭ scatterplot() فۇنكسىيىسى كاتېگورىيەلىك ئۆزگەرگۈچىلەر تەرىپىدىن رەڭ بىلەن بەلگىلەنگەن تارقالما گرافىكلارنى قۇرۇشىڭىزنى يول قويىدۇ، ھەمدە boxplot() سانلىق مەلۇمات تارقىلىشىنى كۆز ئارقىلىق چۈشىنىش ئۈچۈن قوتۇ گرافىكىنى قۇرىدۇ.`,
      code: `# Seaborn ئۇسلۇب سەپلىمىسى
sns.set(style="whitegrid", font="MS Gothic")

# تارقالما گرافىك قۇرۇش
plt.figure(figsize=(10, 6))
sns.scatterplot(data=df, x='بويى', y='ئېغىرلىقى', hue='قانائەتلىنىش')
plt.title('بويى ۋە ئېغىرلىقى مۇناسىۋىتى (قانائەتلىنىش بويىچە)')
plt.show()

# قوتۇ گرافىكى قۇرۇش
plt.figure(figsize=(10, 6))
sns.boxplot(data=df, x='قانائەتلىنىش', y='كەلبىياتى')
plt.title('قانائەتلىنىش دەرىجىسى بويىچە كەلبىيات تارقىلىشى')
plt.show()`
    },
    {
      id: 5,
      title: 'سانلىق مەلۇمات ئالدىن بىر تەرەپ قىلىش ۋە ئايلاندۇرۇش',
      icon: <DeveloperModeIcon />,
      description: 'سانلىق مەلۇمات تازىلاش ۋە ئالاھىدە ئىنژېنېرلىق',
      content: `كۆرسىتىشتىن بۇرۇن، سانلىق مەلۇمات ئالدىن بىر تەرەپ قىلىش ۋە ئايلاندۇرۇش كۆپىنچە زۆرۈر بولىدۇ. Pandas نى قانداق ئىشلىتىپ سانلىق مەلۇماتنى بىر تەرەپ قىلىشنى ۋە يېڭى ستونلارنى قۇرۇشنى ئۆگىنىمىز. Pandas DataFrames بار بولغان ستونلاردان يېڭى ستونلارنى ئاسان قۇرۇشنى ئىمكان قىلىدۇ، ۋە cut() فۇنكسىيىسى داۋاملىق سانلىق مەلۇماتنى ئايرىم كاتېگورىيىلەرگە تەقسىملەشنىڭ يولىنى قويىدۇ.`,
      code: `# BMI ھېسابلاش ۋە يېڭى ستون قوشۇش
df['BMI'] = df['ئېغىرلىقى'] / ((df['بويى'] / 100) ** 2)

# يېشىنى 10 يىللىققا تەقسىملەش
df['يېشى_گۇرۇپپىسى'] = pd.cut(df['يېشى'], 
                         bins=[0, 30, 40, 50, 60], 
                         labels=['20-29', '30-39', '40-49', '50-59'])

# كەلبىياتنى 3 دەرىجىگە تەقسىملەش
df['كەلبىيات_دەرىجىسى'] = pd.qcut(df['كەلبىياتى'], 
                            q=3, 
                            labels=['تۆۋەن', 'ئوتتۇرا', 'يۇقىرى'])

print(df.head())`
    },
    {
      id: 6,
      title: 'گۇرۇپپىلاش ۋە يىغىش',
      icon: <AnalyticsIcon />,
      description: 'سانلىق مەلۇمات يىغىش تېخنىكىلىرى',
      content: `سانلىق مەلۇمات تەھلىلىدە، گۇرۇپپىلاش ۋە يىغىش سانلىق مەلۇمات يۆنىلىشىنى چۈشىنىشكە ياردەم بېرىدۇ. گۇرۇپپىلاش ۋە يىغىش ئۈچۈن Pandas groupby() ئۇسۇلۇنى ئىشلىتىڭ. بۇ سىزگە مەلۇم ستونلار بويىچە سانلىق مەلۇماتنى گۇرۇپپىلاشقا ۋە ھەر بىر گۇرۇپپىغا يىغىش ھەرىكەتلىرىنى ئېلىپ بېرىشقا يول قويىدۇ.`,
      code: `# يېشى گۇرۇپپىسى بويىچە ئوتتۇرىچە كەلبىيات ھېسابلاش
يېشى_كەلبىياتى = df.groupby('يېشى_گۇرۇپپىسى')['كەلبىياتى'].mean().reset_index()

# قانائەتلىنىش بويىچە ئوتتۇرىچە كەلبىيات ھېسابلاش
قانائەت_كەلبىياتى = df.groupby('قانائەتلىنىش')['كەلبىياتى'].mean().reset_index()

# نەتىجىلەرنى كۆرسىتىش
print("يېشى گۇرۇپپىسى بويىچە ئوتتۇرىچە كەلبىيات:")
print(يېشى_كەلبىياتى)
print("\nقانائەتلىنىش بويىچە ئوتتۇرىچە كەلبىيات:")
print(قانائەت_كەلبىياتى)

# يېشى گۇرۇپپىسى ئوتتۇرىچە كەلبىياتىنى كۆرسىتىش
plt.figure(figsize=(10, 6))
sns.barplot(data=يېشى_كەلبىياتى, x='يېشى_گۇرۇپپىسى', y='كەلبىياتى')
plt.title('يېشى گۇرۇپپىسى بويىچە ئوتتۇرىچە كەلبىيات')
plt.show()`
    },
    {
      id: 7,
      title: 'مۇناسىۋەت تەھلىلى ۋە كۆرسىتىش',
      icon: <StatsIcon />,
      description: 'مۇناسىۋەت ۋە issiqlik خەرىتىسى كۆرسىتىش',
      content: `ئۆزگەرگۈچىلەر ئوتتۇرىسىدىكى مۇناسىۋەتنى چۈشىنىش ئۈچۈن، مۇناسىۋەت تەھلىلى ناھايىتى مۇھىم. مۇناسىۋەت كوئېففىتسېنتلىرىنى ھېسابلاش ئۈچۈن Pandas نى ۋە نەتىجىلەرنى issiqlik خەرىتىسى بىلەن كۆرسىتىش ئۈچۈن Seaborn نى ئىشلىتىڭ. Pandas corr() ئۇسۇلى مۇناسىۋەت كوئېففىتسېنتلىرىنى ھېسابلايدۇ، ۋە Seaborn نىڭ heatmap() فۇنكسىيىسى نەتىجىلەرنى كۆرسىتىدۇ.`,
      code: `# سانلىق سانلىق مەلۇمات ئۈچۈن مۇناسىۋەت كوئېففىتسېنتلىرىنى ھېسابلاش
مۇناسىۋەت = df[['يېشى', 'بويى', 'ئېغىرلىقى', 'كەلبىياتى', 'BMI']].corr()

# مۇناسىۋەت كوئېففىتسېنتلىرى issiqlik خەرىتىسى قۇرۇش
plt.figure(figsize=(10, 8))
sns.heatmap(مۇناسىۋەت, annot=True, cmap='coolwarm', vmin=-1, vmax=1, center=0)
plt.title('ئۆزگەرگۈچىلەر ئوتتۇرىسىدىكى مۇناسىۋەت كوئېففىتسېنتلىرى')
plt.show()`
    },
    {
      id: 8,
      title: 'كۆپ گرافىك كۆرسىتىش',
      icon: <TimelineIcon />,
      description: 'تارماق گرافىكلار ۋە داشبوردلار قۇرۇش',
      content: `بىر نەچچە گرافىكلارنى بىر سۈرەتكە بىرلەشتۈرۈش سىزگە سانلىق مەلۇماتنىڭ تۈرلۈك جەھەتلىرىنى بىرلا ۋاقىتتا ئىپادىلەشنى يول قويىدۇ. بىر نەچچە تارماق گرافىكلارنى قۇرۇش ئۈچۈن Matplotlib نىڭ subplots() فۇنكسىيىسىنى ئىشلىتىڭ.`,
      code: `# 2x2 تارماق گرافىكلار قۇرۇش
fig, axes = plt.subplots(2, 2, figsize=(15, 15))

# تارقالما گرافىك
sns.scatterplot(data=df, x='بويى', y='ئېغىرلىقى', hue='قانائەتلىنىش', ax=axes[0, 0])
axes[0, 0].set_title('بويى ۋە ئېغىرلىقى مۇناسىۋىتى')

# ھىستوگرامما
sns.histplot(data=df, x='يېشى', kde=True, ax=axes[0, 1])
axes[0, 1].set_title('يېشى تارقىلىشى')

# قوتۇ گرافىكى
sns.boxplot(data=df, x='قانائەتلىنىش', y='BMI', ax=axes[1, 0])
axes[1, 0].set_title('قانائەتلىنىش بويىچە BMI تارقىلىشى')

# ۋىيولون گرافىكى
sns.violinplot(data=df, x='يېشى_گۇرۇپپىسى', y='كەلبىياتى', ax=axes[1, 1])
axes[1, 1].set_title('يېشى گۇرۇپپىسى بويىچە كەلبىيات تارقىلىشى')

plt.tight_layout()
plt.show()`
    },
    {
      id: 9,
      title: 'ۋاقىت قاتارى سانلىق مەلۇمات كۆرسىتىش',
      icon: <TimelineIcon />,
      description: 'ۋاقىتلىق سانلىق مەلۇماتنى كۆرسىتىش',
      content: `ۋاقىت قاتارى سانلىق مەلۇمات كۆرسىتىش سانلىق مەلۇماتنىڭ ۋاقىتلىق ئۆزگىرىشىنى چۈشىنىشكە ياردەم بېرىدۇ. بۇ يەردە، نۇمۇنىلۇق ۋاقىت قاتارى سانلىق مەلۇمات قۇرۇڭ ۋە Matplotlib نى ئىشلىتىپ سىزىق گرافىكلارنى سىزىڭ. ۋاقىت قاتارى كۆرسىتىش ئۈچۈن، X ئۆكىدە چېسلا ۋە Y ئۆكىدە كۆزىتىلگەن قىممەتلەرنى سىزىش ئادەتتىكى ئىش.`,
      code: `# ۋاقىت قاتارى سانلىق مەلۇمات قۇرۇش
چېسلار = pd.date_range(start='2023-01-01', periods=50, freq='D')
قىممەتلەر = np.cumsum(np.random.randn(50)) + 100  # تاسادىپىي ماڭغۇچ

ۋاقىت_قاتارى_df = pd.DataFrame({'چېسلا': چېسلار, 'قىممەت': قىممەتلەر})

# سىزىق گرافىك قۇرۇش
plt.figure(figsize=(12, 6))
plt.plot(ۋاقىت_قاتارى_df['چېسلا'], ۋاقىت_قاتارى_df['قىممەت'])
plt.title('ۋاقىت قاتارى سانلىق مەلۇمات يۆنىلىشى')
plt.xlabel('چېسلا')
plt.ylabel('قىممەت')
plt.xticks(rotation=45)
plt.grid(True)
plt.tight_layout()
plt.show()`
    },
    {
      id: 10,
      title: 'كاتېگورىيەلىك سانلىق مەلۇمات كۆرسىتىش',
      icon: <TableChartIcon />,
      description: 'كاتېگورىيەلىك ئۆزگەرگۈچىلەرنى كۆرسىتىش',
      content: `كاتېگورىيەلىك سانلىق مەلۇمات كۆرسىتىش گۇرۇپپا سېلىشتۇرۇش ۋە تارقىلىش چۈشىنىشكە ياردەم بېرىدۇ. كاتېگورىيەلىك ئۆزگەرگۈچىلەرنىڭ يۈزلىنىشىنى كۆرسىتىش ئۈچۈن Seaborn نى ئىشلىتىڭ. Seaborn نىڭ countplot() فۇنكسىيىسى كاتېگورىيەلىك ئۆزگەرگۈچىلەرنىڭ يۈزلىنىشىنى ئاسان كۆرسىتىدۇ، ۋە barplot() كاتېگورىيە بويىچە ئوتتۇرىچە قىممەتلەرنى ئىپادىلەيدۇ.`,
      code: `# سان گرافىكى قۇرۇش
plt.figure(figsize=(10, 6))
sns.countplot(data=df, x='قانائەتلىنىش', hue='يېشى_گۇرۇپپىسى')
plt.title('يېشى گۇرۇپپىسى بويىچە قانائەتلىنىش تارقىلىشى')
plt.show()

# ستولبىكا گرافىكى قۇرۇش (يېشى گۇرۇپپىسى بويىچە ئوتتۇرىچە BMI)
plt.figure(figsize=(10, 6))
sns.barplot(data=df, x='يېشى_گۇرۇپپىسى', y='BMI')
plt.title('يېشى گۇرۇپپىسى بويىچە ئوتتۇرىچە BMI')
plt.show()`
    },
    {
      id: 11,
      title: 'تارقىلىش كۆرسىتىش',
      icon: <StatsIcon />,
      description: 'ھىستوگرامما، KDE، ۋە ۋىيولون گرافىكلار',
      content: `سانلىق مەلۇمات تارقىلىشىنى چۈشىنىش ستاتىستىكىلىق تەھلىلگە ئاساس. ھىستوگرامما، يادرو زىچلىق باھالىش ۋە ۋىيولون گرافىكلارنى ئۆز ئىچىگە ئالغان تۈرلۈك تارقىلىش كۆرسىتىش ئۇسۇللىرىنى سىناش ئۈچۈن Seaborn نى ئىشلىتىڭ. Seaborn نىڭ histplot(), kdeplot() ۋە violinplot() فۇنكسىيىلىرى سىزگە سانلىق مەلۇمات تارقىلىشىنى تۈرلۈك يوللار بىلەن كۆرسىتىشنى يول قويىدۇ.`,
      code: `# ھىستوگرامما ۋە يادرو زىچلىق باھالىش
plt.figure(figsize=(12, 6))
sns.histplot(data=df, x='BMI', kde=True)
plt.title('BMI تارقىلىشى')
plt.show()

# يادرو زىچلىق باھالىش (يېشى گۇرۇپپىسى بويىچە)
plt.figure(figsize=(12, 6))
sns.kdeplot(data=df, x='كەلبىياتى', hue='يېشى_گۇرۇپپىسى', fill=True)
plt.title('يېشى گۇرۇپپىسى بويىچە كەلبىيات تارقىلىشى')
plt.show()

# ۋىيولون گرافىكى
plt.figure(figsize=(12, 6))
sns.violinplot(data=df, x='قانائەتلىنىش', y='BMI')
plt.title('قانائەتلىنىش بويىچە BMI تارقىلىشى')
plt.show()`
    },
    {
      id: 12,
      title: 'رېگرېسسىيە تەھلىلى كۆرسىتىش',
      icon: <AnalyticsIcon />,
      description: 'رېگرېسسىيە مودېللىرىنى كۆرسىتىش',
      content: `رېگرېسسىيە تەھلىلى ئۆزگەرگۈچىلەر ئوتتۇرىسىدىكى مۇناسىۋەتنى چۈشىنىش ئۈچۈن كۈچلۈك قورال. رېگرېسسىيە سىزىقلىرى ۋە ئۇلارنىڭ ئىشەنچ ئارىلىقلىرىنى كۆرسىتىش ئۈچۈن Seaborn نىڭ regplot() ۋە lmplot() فۇنكسىيىلىرىنى ئىشلىتىڭ. بۇ فۇنكسىيىلەر پەقەت سانلىق مەلۇمات نۇقتىلىرىنى سىزىشلا ئەمەس، بەلكى ئاپتوماتىك رېگرېسسىيە سىزىقلىرى ۋە ئۇلارنىڭ 95% ئىشەنچ ئارىلىقلىرىنى سىزىدۇ.`,
      code: `# ئاددىي رېگرېسسىيە گرافىكى
plt.figure(figsize=(10, 6))
sns.regplot(data=df, x='بويى', y='ئېغىرلىقى')
plt.title('بويى ۋە ئېغىرلىقى رېگرېسسىيە تەھلىلى')
plt.show()

# گۇرۇپپىلانغان رېگرېسسىيە گرافىكى
plt.figure(figsize=(12, 8))
sns.lmplot(data=df, x='يېشى', y='كەلبىياتى', hue='قانائەتلىنىش', height=6, aspect=1.5)
plt.title('يېشى ۋە كەلبىيات مۇناسىۋىتى (قانائەتلىنىش بويىچە)')
plt.show()`
    },
    {
      id: 13,
      title: 'ئۆزئارا تەسىر كۆرسىتىش',
      icon: <ScienceIcon />,
      description: 'ئۆزئارا تەسىر گرافىكلار قۇرۇش',
      content: `ستاتىك گرافىكلار پايدىلىق بولسىمۇ، ئۆزئارا تەسىر كۆرسىتىش ئىشلەتكۈچىلەرگە سانلىق مەلۇماتنى تەكشۈرۈشنى ئاسانلاشتۇرىدۇ. بۇ يەردە، Plotly كۈتۈپخانىسىنى ئىشلىتىپ ئۆزئارا تەسىر تارقالما گرافىكلارنى قۇرۇڭ. Plotly چوڭ تىنچ ئارقىلىق تەپسىلىي ئۇچۇرلارنى كۆرسىتىدىغان ئۆزئارا تەسىر گرافىكلارنى ئاسان قۇرۇيدۇ، ۋە كېڭەيتىش ۋە يۆنىلىشنى يول قويىدۇ.`,
      code: `import plotly.express as px

# ئۆزئارا تەسىر تارقالما گرافىك قۇرۇش
fig = px.scatter(df, x='بويى', y='ئېغىرلىقى', color='قانائەتلىنىش', 
                 hover_data=['يېشى', 'BMI'])
fig.update_layout(title='بويى ۋە ئېغىرلىقى مۇناسىۋىتى (ئۆزئارا تەسىر)')
fig.show()`
    },
    {
      id: 14,
      title: 'جۇغراپىيىلىك سانلىق مەلۇمات كۆرسىتىش',
      icon: <MapIcon />,
      description: 'خەرىتە ۋە بوشلۇق سانلىق مەلۇمات',
      content: `جۇغراپىيىلىك سانلىق مەلۇمات كۆرسىتىش جاي-جايغا مۇناسىۋەتلىك ئۇچۇرلارنى ئۈنۈملۈك يەتكۈزۈشكە ياردەم بېرىدۇ. بۇ يەردە، ياپونىيە ئوبلاستلىرى بويىچە ئوخشىتىلغان سانلىق مەلۇمات قۇرۇڭ ۋە Plotly نى ئىشلىتىپ ئاددىي خەرىتە قۇرۇڭ. Plotly نىڭ choropleth_mapbox فۇنكسىيىسى رەڭلەنگەن جۇغراپىيىلىك رايونلار بىلەن خەرىتىلەرنى ئاسان قۇرۇيدۇ.`,
      code: `import plotly.express as px

# ئوبلاستلار بويىچە ئوخشىتىلغان سانلىق مەلۇمات قۇرۇش
ئوبلاستلار = ['Hokkaido', 'Tokyo', 'Osaka', 'Fukuoka', 'Okinawa']  # مىسال: پەقەت 5 ئوبلاست
قىممەتلەر = np.random.randint(100, 1000, 5)
ئوبلاست_سانلىق_مەلۇماتى = pd.DataFrame({'ئوبلاست': ئوبلاستلار, 'قىممەت': قىممەتلەر})

# خەرىتە قۇرۇش
fig = px.choropleth_mapbox(ئوبلاست_سانلىق_مەلۇماتى, 
                           locations='ئوبلاست', 
                           color='قىممەت',
                           center={'lat': 37.5, 'lon': 137},  # ياپونىيە مەركىزىگە يېقىن
                           zoom=4,
                           mapbox_style="carto-positron",
                           color_continuous_scale="Viridis",
                           labels={'قىممەت': 'نۇمۇنىلۇق قىممەت'})

fig.update_layout(title='ئوبلاستلار بويىچە سانلىق مەلۇماتنىڭ خەرىتە كۆرسىتىلىشى')
fig.show()`
    },
    {
      id: 15,
      title: 'سانلىق مەلۇمات كۆرسىتىشتە ئەڭ ياخشى ئەمەلىياتلار',
      icon: <AnalyticsIcon />,
      description: 'لايىھە پىرىنسىپلىرى ۋە ئەڭ ياخشى ئەمەلىياتلار',
      content: `ئاخىرىدا، ئۈنۈملۈك سانلىق مەلۇمات كۆرسىتىش ئۈچۈن ئەڭ ياخشى ئەمەلىياتلارنى ئويلىشىپ باقايلى. مۇناسىۋەتلىك كۆرسىتىش سانلىق مەلۇمات چۈشەنچىلىرىنى ئۈنۈملۈك يەتكۈزۈش ئۈچۈن زۆرۈر.`,
      code: `# ئۈنۈملۈك كۆرسىتىش مىسالى
plt.figure(figsize=(12, 6))
sns.scatterplot(data=df, x='يېشى', y='كەلبىياتى', hue='قانائەتلىنىش', size='BMI', sizes=(20, 200))
plt.title('يېشى، كەلبىيات، قانائەتلىنىش ۋە BMI ئوتتۇرىسىدىكى مۇناسىۋەت')
plt.xlabel('يېشى')
plt.ylabel('كەلبىياتى')
plt.legend(title='قانائەتلىنىش', bbox_to_anchor=(1.05, 1), loc='upper left')
plt.tight_layout()
plt.show()`
    },
    {
      id: 16,
      title: 'Statsmodels بىلەن ستاتىستىكىلىق مودېللاش',
      icon: <StatsIcon />,
      description: 'ئىلغار ستاتىستىكىلىق تەھلىل',
      content: `Statsmodels ستاتىستىكىلىق مودېللاش ۋە ئىقتىساد ئۆلچەش ئۈچۈن كۈچلۈك Python كۈتۈپخانىسى. ئۇ تۈرلۈك ستاتىستىكىلىق مودېللارنى باھالىش ۋە ستاتىستىكىلىق سىناقلار ئېلىپ بېرىش ئۈچۈن تولۇق قوراللارنى تەمىنلەيدۇ. بۇ باب statsmodel بىلەن تەمىنلەنگەن نۇمۇنىلۇق سانلىق مەلۇماتنى ئىشلىتىپ تۈرلۈك تەھلىل ئۇسۇللىرىنى تەتقىق قىلىدۇ.`,
      code: `import statsmodels.api as sm
from statsmodels.formula.api import ols

# ئاددىي سىزىقلىق رېگرېسسىيە
plt.rcParams['font.family'] = 'Meiryo'
X = sm.add_constant(df['بويى'])
y = df['ئېغىرلىقى']

model = sm.OLS(y, X).fit()
print(model.summary())

plt.scatter(df['بويى'], df['ئېغىرلىقى'])
plt.plot(df['بويى'], model.predict(X), color='red')
plt.xlabel('بويى')
plt.ylabel('ئېغىرلىقى')
plt.title('بويى ۋە ئېغىرلىقى مۇناسىۋىتى')
plt.show()

# كۆپ رېگرېسسىيە تەھلىلى
X = sm.add_constant(df[['يېشى', 'بويى', 'ئېغىرلىقى']])
y = df['كەلبىياتى']
model = sm.OLS(y, X).fit()
print(model.summary())

# كاتېگورىيەلىك سېلىشتۇرۇش ئۈچۈن ANOVA
model_anova = ols('ئېغىرلىقى ~ C(قانائەتلىنىش)', data=df).fit()
anova_table = sm.stats.anova_lm(model_anova, typ=2)
print(anova_table)`
    }
  ];

  // ============ قورال سېلىشتۇرۇش جەدۋىلى ============
  const toolComparison = [
    {
      tool: 'Matplotlib',
      strengths: 'يۇقىرى ماھىيەتلىك، ئاساسىي كۈتۈپخانا',
      bestFor: 'ھەممە خىل گرافىكلار، نەشر سۈپىتى',
      ease: 'ئوتتۇرا',
      performance: 'يۇقىرى',
      color: '#1f77b4'
    },
    {
      tool: 'Seaborn',
      strengths: 'گۈزەل ئۇسلۇبلار، ستاتىستىكا دىققەت نۇقتىسى',
      bestFor: 'ستاتىستىكىلىق گرافىكىلار، تېز چۈشەنچە',
      ease: 'ئاسان',
      performance: 'ئوتتۇرا',
      color: '#2ca02c'
    },
    {
      tool: 'Pandas Plot',
      strengths: 'DataFrame بىرلەشتۈرۈش، ئاددىي سىنتاكسىس',
      bestFor: 'تېز سانلىق مەلۇمات تەكشۈرۈش، ئىلگىرىلەش',
      ease: 'بەك ئاسان',
      performance: 'ئوتتۇرا',
      color: '#ff7f0e'
    },
    {
      tool: 'Plotly',
      strengths: 'ئۆزئارا تەسىر، 3D ئىقتىدارى',
      bestFor: 'تور داشبوردلار، ئۆزئارا تەسىر دوكلاتلار',
      ease: 'ئوتتۇرا',
      performance: 'ئوتتۇرا',
      color: '#9467bd'
    }
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ 
        display: 'flex', 
        marginTop: "30px", 
        bgcolor: 'background.default', 
        minHeight: '100vh',
       
        fontFamily: '"UKIJ Tuz", "UKIJ Nasq","text-2xl", "Microsoft Uighur", sans-serif !important'
      }}>
        {/* ناۋىگاتسىيە بالداقسى */}
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
              <AnalyticsIcon />
              <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                Python سانلىق مەلۇمات كۆرسىتىش ماستىرلىق دەرسلىكى
              </Typography>
            </Box>
            <Chip label="16 باب" color="secondary" size="small" sx={{ mr: 2 }} />
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Toolbar>
        </AppBar> */}

        {/* يان پەنچە ناۋىگاتسىيەسى */}
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
                <AnalyticsIcon /> دەرس بابلىرى
              </Typography>
              <List sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                {chapters.map((chapter) => (
                  <ListItem
                    key={chapter.id}
                    button
                    sx={{
                      mb: 1,
                      borderRadius: 2,
                      backgroundColor: expandedChapter === chapter.id ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                      fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                    }}
                    onClick={() => setExpandedChapter(expandedChapter === chapter.id ? -1 : chapter.id)}
                  >
                    <ListItemText
                      primary={
                        <Box sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                          <Typography variant="subtitle2" fontWeight={600} sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                            باب {chapter.id}: {chapter.title}
                          </Typography>
                          <Typography variant="caption" color="text.secondary" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                            {chapter.description}
                          </Typography>
                        </Box>
                      }
                    />
                  </ListItem>
                ))}
              </List>
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
            {/* قەھرىمان بۆلۈمى */}
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
                  Python سانلىق مەلۇمات كۆرسىتىش ماستىرلىق دەرسلىكى
                </Typography>
                <Typography variant="h5" sx={{ mb: 3, opacity: 0.9, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                  Seaborn, Pandas ۋە Matplotlib بىلەن ئەمەلىي سانلىق مەلۇمات تەھلىلى ۋە كۆرسىتىش تېخنىكىلىرى
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mb: 4, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                  {['سانلىق مەلۇمات پەن', 'كۆرسىتىش', 'Python', 'ستاتىستىكا'].map((tag) => (
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

            {/* قورال سېلىشتۇرۇش */}
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
                <AnalyticsIcon /> كۆرسىتىش قورالى سېلىشتۇرۇشى
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
                      <TableCell sx={{ fontWeight: 700, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>قورال</TableCell>
                      <TableCell sx={{ fontWeight: 700, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>كۈچلۈك تەرەپلەر</TableCell>
                      <TableCell sx={{ fontWeight: 700, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>ئەڭ ياخشى ئىشلىتىلىدىغان يەر</TableCell>
                      <TableCell sx={{ fontWeight: 700, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>ئىشلىتىش ئاسانلىقى</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {toolComparison.map((tool, index) => (
                      <TableRow key={index} hover>
                        <TableCell sx={{ 
                          fontWeight: 600,
                          fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
                        }}>{tool.tool}</TableCell>
                        <TableCell>{tool.strengths}</TableCell>
                        <TableCell>{tool.bestFor}</TableCell>
                        <TableCell>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <LinearProgress 
                              variant="determinate" 
                              value={tool.ease === 'بەك ئاسان' ? 90 : tool.ease === 'ئاسان' ? 70 : tool.ease === 'ئوتتۇرا' ? 50 : 30}
                              sx={{ width: 100, height: 8 }}
                            />
                            <Typography variant="caption">{tool.ease}</Typography>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Paper>

            {/* باب مەزمۇنى */}
            {chapters.map((chapter) => (
              <Box key={chapter.id} sx={{ mb: 6 }} id={`chapter-${chapter.id}`}>
                <Accordion
                  expanded={expandedChapter === chapter.id}
                  onChange={() => setExpandedChapter(expandedChapter === chapter.id ? -1 : chapter.id)}
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
                      {chapter.icon}
                      <Typography variant="h5" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                        باب {chapter.id}: {chapter.title}
                      </Typography>
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
                          {chapter.content}
                        </Typography>
                        
                        {chapter.code && (
                          <Box sx={{ mt: 3 }}>
                            <Typography variant="h6" gutterBottom sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                              كود مىسالى:
                            </Typography>
                            <CodeBlock code={chapter.code} language="python" darkMode={darkMode} />
                          </Box>
                        )}
                      </Grid>
                      
                      <Grid item xs={12} md={6}>
                        <Paper
                          sx={{
                            height: '100%',
                            minHeight: 300,
                            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.1)} 0%, ${alpha(theme.palette.secondary.main, 0.1)} 100%)`,
                            borderRadius: 2,
                            position: 'relative',
                            p: 3,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                          <Typography variant="h4" sx={{ mb: 2, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                            باب {chapter.id}
                          </Typography>
                          <Typography variant="body2" sx={{ textAlign: 'center', fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                            {chapter.description}
                          </Typography>
                        </Paper>
                      </Grid>
                    </Grid>
                  </AccordionDetails>
                </Accordion>
              </Box>
            ))}

            {/* ئۆگىنىش يولى */}
            <Paper elevation={2} sx={{ 
              p: 5, 
              my: 6, 
              borderRadius: 4,
              fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif'
            }}>
              <Typography variant="h4" gutterBottom sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                ئۆگىنىش يول خەرىتىسى
              </Typography>
              <Stepper alternativeLabel sx={{ mt: 4, fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                {[
                  { label: 'ئاساسىي بىلىم', description: '1-5-باب' },
                  { label: 'تەھلىل تېخنىكىلىرى', description: '6-10-باب' },
                  { label: 'ئىلغار كۆرسىتىش', description: '11-15-باب' },
                  { label: 'ستاتىستىكىلىق مودېللاش', description: '16-باب' }
                ].map((step, index) => (
                  <Step key={index}>
                    <StepLabel>
                      <Typography variant="subtitle2" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>{step.label}</Typography>
                      <Typography variant="caption" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>{step.description}</Typography>
                    </StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Paper>

            {/* خۇلاسە */}
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
                بۇ تولۇق دەرسلىك Seaborn, Pandas, Matplotlib ۋە Statsmodels نى ئىشلىتىپ سانلىق مەلۇمات كۆرسىتىشنىڭ ئاساسلىرى ۋە قوللىنىشىنى ئۆز ئىچىگە ئالغان. بۇ تېخنىكىلارنى بىرلەشتۈرۈش ئارقىلىق، سىز سانلىق مەلۇماتتىن مەنىلىك چۈشەنچە ئالىلىشىڭىز مۇمكىن. بۇ تېخنىكىلارنى ھەقىقىي سانلىق مەلۇمات توپلىمى بىلەن سىناپ كۆرۈڭ ۋە ئۆز كۆرسىتىش ماھارىتىڭىزنى تەرەققىي قىلدۇرۇڭ.
              </Typography>
              
              <Box sx={{ mt: 4, pt: 3, borderTop: `1px solid ${theme.palette.divider}` }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontFamily: '"UKIJ Tuz", "UKIJ Nasq", "Microsoft Uighur", sans-serif' }}>
                  <strong>ئەسكەرتىش:</strong> بارلىق كود مىسالى ئەركىن ئىشلىتىشكە بولىدۇ. ئاخىرقى يېڭىلانغان: 2026-يىلى 1-ئاينىڭ 4-كۈنى | نەشر قىلىنغان: 2024-يىلى 30-سېنتەبىر
                </Typography>
              </Box>
            </Paper>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Blog57;