// src/components/learn-modules/GitGithubModule.jsx
import React, { useState } from 'react';
import { 
  GitBranch, 
  Code, 
  Users, 
  Cloud, 
  Terminal, 
  History,
  GitCommit,
  GitPullRequest,
  GitMerge,
  GitCompare,
  FolderGit,
  Copy,
  CheckCircle,
  AlertCircle,
  Star,
  Eye,
  Fork,
  TrendingUp,
  Download,
  Upload,
  Settings,
  Lock,
  Unlock,
  Link,
  FileCode,
  Shield,
  Globe,
  Zap,
  Cpu,
  Database,
  Server,
  BarChart,
  BookOpen,
  Coffee,
  Rocket,
  Sparkles
} from 'lucide-react';

// تىل سەپلىمىسى
const languageOptions = {
  uy: {
    title: "گىت ۋە گىتخاب - پروگرامماچىلارنىڭ كوللابوراتسىيە سىستېمىسى",
    description: "گىت كود باشقۇرۇش سىستېمىسى بولۇپ، پروگرامماچىلارنىڭ كودنى ساقلاش، تارىخىنى كۆزىتىش، ۋە بىرلىكتە ئىشلىشىگە ياردەم بېرىدۇ. گىتخاب بولسا گىتنى ئاساس قىلغان تور بېكەت بولۇپ، پروگرامماچىلار ئارىسىدىكى ھەمكارلىشىشنى ئاسانلاشتۇرىدۇ.",
    nav: {
      basics: "ئاساسىي چۈشەنچىلەر",
      commands: "كوماندىلار",
      workflow: "ئىش جەريانى",
      collaboration: "ھەمكارلىشىش",
      advanced: "ئالىي تېمىلار"
    },
    sections: {
      gitDefinition: {
        title: "گىت نىمە؟",
        content: "گىت بىر پارچىلانغان (distributed) ۋەرسىيە باشقۇرۇش سىستېمىسى (Version Control System). ئۇ پروگرامماچىلارغا كودنىڭ ئۆزگىرىش تارىخىنى كۆزىتىش، يېڭى ئىقتىدارلارنى بۇتاقلاردا سىناش، ۋە كودنى بىرلىكتە باشقۇرۇشقا ياردەم بېرىدۇ."
      },
      githubDefinition: {
        title: "گىتخاب نىمە؟",
        content: "گىتخاب بولسا گىت ئاساسىدىكى كوللابوراتسىيە پىلاتفورمىسى. ئۇ پروگرامماچىلارغا كودنى ساقلاش، بىرلىكتە ئىشلەش، ۋە پروژىكتلىرىنى باشقۇرۇشقا ياردەم بېرىدۇ. گىتخابنىڭ ئەڭ مۇھىم ئىقتىدارلىرىدىن بىرى Pull Request سىستېمىسى بولۇپ، ئۇ ئارقىلىق كود تەكشۈرۈش (code review) قىلىش مۇمكىن."
      }
    }
  },
  en: {
    title: "Git & GitHub - Collaboration System for Developers",
    description: "Git is a version control system that helps developers store, track history, and collaborate on code. GitHub is a web-based platform built on Git that facilitates collaboration among developers.",
    nav: {
      basics: "Basic Concepts",
      commands: "Commands",
      workflow: "Workflow",
      collaboration: "Collaboration",
      advanced: "Advanced Topics"
    },
    sections: {
      gitDefinition: {
        title: "What is Git?",
        content: "Git is a distributed version control system (VCS). It helps developers track changes in their code, test new features in branches, and manage code collaboratively."
      },
      githubDefinition: {
        title: "What is GitHub?",
        content: "GitHub is a collaboration platform based on Git. It helps developers store code, work together, and manage projects. One of GitHub's most important features is the Pull Request system, which enables code review."
      }
    }
  }
};

const GitGithubModule = () => {
  const [activeTab, setActiveTab] = useState('basics');
  const [language, setLanguage] = useState('uy');
  const [copiedCommand, setCopiedCommand] = useState(null);
  
  const t = languageOptions[language];
  
  // ئەسلىدىن كۆچۈرۈش
  const copyToClipboard = (command) => {
    navigator.clipboard.writeText(command);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(null), 2000);
  };
  
  // ئاساسىي گىت كوماندىلىرى
  const basicCommands = [
    { 
      command: 'git init', 
      description: language === 'uy' ? 'يېڭى گىت خەزىنىسى قۇرۇش' : 'Initialize a new Git repository',
      icon: FolderGit,
      explanation: language === 'uy' ? 'بۇ كوماند بىر يېڭى گىت خەزىنىسىنى قۇرىدۇ. ھۆججەت قىسقۇچىڭىزدا .git قىسقۇچى ھاسىل بولىدۇ. بۇ خەزىنە بارلىق كود تارىخىنىڭ ساقلانش جايى.' : 'This command initializes a new Git repository. A .git folder is created in your directory, which stores all the code history.',
      example: 'مىسال: تۈرلۈك پروژىكتلارنى باشقۇرۇش ئۈچۈن'
    },
    { 
      command: 'git add .', 
      description: language === 'uy' ? 'بارلىق ئۆزگەرتىشلەرنى قوشۇش' : 'Stage all changes',
      icon: Upload,
      explanation: language === 'uy' ? 'بارلىق ئۆزگەرتىلگەن ھۆججەتلەرنى ئالدىنقى سەھىپىگە (staging area) قوشىدۇ. بۇ كوماند ئۆزگەرتىشلەرنى تىزىملىككە كىرگۈزۈش (commit) ئالدىدىكى قەدەم.' : 'Adds all changed files to the staging area. This is the step before committing changes to history.',
      example: 'مىسال: ھەممە يېڭى ھۆججەتلەرنى خەزىنىگە قوشۇش'
    },
    { 
      command: 'git commit -m "ئەسكەرتىش"', 
      description: language === 'uy' ? 'ئۆزگەرتىشلەرنى تىزىملىككە كىرگۈزۈش' : 'Commit changes with a message',
      icon: GitCommit,
      explanation: language === 'uy' ? 'ئالدىنقى سەھىپىدىكى ئۆزگەرتىشلەرنى مەڭگۈلۈك خاتىرىگە ئېلىپ، بىر ئەسكەرتىش بىلەن تىزىملىككە كىرگۈزىدۇ. ھەر بىر تىزىملىك بىر ئايرىم كود ۋەرسىيىسىنىڭ سۈرىتىدۇر.' : 'Takes the staged changes and permanently records them in history with a descriptive message. Each commit is like a snapshot of your code at that point.',
      example: 'مىسال: git commit -m "Login page UI completed"'
    },
    { 
      command: 'git push', 
      description: language === 'uy' ? 'ئۆزگەرتىشلەرنى يۇقىرىغا يوللاش' : 'Push changes to remote',
      icon: Cloud,
      explanation: language === 'uy' ? 'لوكال خەزىنىدىكى تىزىملىكلەرنى تور خەزىنىسىگە (GitHub, GitLab قاتارلىقلارغا) يوللايدۇ. بۇ ئارقىلىق باشقا پروگرامماچىلار سىزنىڭ كودىڭىزنى كۆرەلەيدۇ.' : 'Uploads your local commits to a remote repository (like GitHub, GitLab). This allows other developers to see your code.',
      example: 'مىسال: GitHub خەزىنىسىڭىزغا كودنى يوللاش'
    }
  ];
  
  // بۇتاق باشقۇرۇش كوماندىلىرى
  const branchCommands = [
    { 
      command: 'git branch', 
      description: language === 'uy' ? 'بارلىق بۇتاقلارنى كۆرسىتىش' : 'List all branches',
      explanation: language === 'uy' ? 'بارلىق بار بۇتاقلارنى كۆرسىتىدۇ. ئۇلارنىڭ ئىچىدە ھازىرقى بۇتاق * بەلگىسى بىلەن كۆرسىتىلىدۇ.' : 'Shows all existing branches. The current branch is marked with an asterisk (*).',
      useCase: language === 'uy' ? 'قايسى بۇتاقتا ئىكەنلىكىڭىزنى كۆرۈش' : 'Check which branch you are on'
    },
    { 
      command: 'git branch <name>', 
      description: language === 'uy' ? 'يېڭى بۇتاق يارىتىش' : 'Create a new branch',
      explanation: language === 'uy' ? 'بەرلەنگەن ئات بىلەن يېڭى بۇتاق يارىتىدۇ. يېڭى بۇتاق ھازىرقى بۇتاقنىڭ ئەھۋالىدىن باشلىنىدۇ.' : 'Creates a new branch with the given name. The new branch starts from the current branch state.',
      useCase: language === 'uy' ? 'يېڭى ئىقتىدار ياكى خاتالىق تۈزىتىش ئۈچۈن بۇتاق قۇرۇش' : 'Create branch for new feature or bug fix'
    },
    { 
      command: 'git checkout <branch>', 
      description: language === 'uy' ? 'بۇتاق ئالماشتۇرۇش' : 'Switch to another branch',
      explanation: language === 'uy' ? 'بەلگىلەنگەن بۇتاققا ئالماشتۇرىدۇ. ئەگەر بۇ بۇتاق يوق بولسا، ئۇنى يارىتىپ ئالماشتۇرىدۇ.' : 'Switches to the specified branch. If branch doesn\'t exist, creates it first.',
      useCase: language === 'uy' ? 'باشقا بۇتاققا ئۆتۈش' : 'Move to another branch'
    },
    { 
      command: 'git merge <branch>', 
      description: language === 'uy' ? 'بۇتاقلارنى بىرلەشتۈرۈش' : 'Merge branches',
      explanation: language === 'uy' ? 'بەلگىلەنگەن بۇتاقنى ھازىرقى بۇتاق بىلەن بىرلەشتۈرىدۇ. بۇ ئارقىلىق ئايرىم بۇتاقلاردا قىلىنغان ئۆزگەرتىشلەر بىر بۇتاققا قوشۇلىدۇ.' : 'Merges the specified branch into the current branch. This combines changes from different branches.',
      useCase: language === 'uy' ? 'ئىقتىدار بۇتاقىنى ئاساسىي بۇتاققا قوشۇش' : 'Merge feature branch into main branch'
    }
  ];
  
  // 2. githubFeatures تىزىملىكىدە:
const githubFeatures = [
  {
    icon: GitPullRequest,
    title: language === 'uy' ? 'تارتۇپ تەلەپ قىلىش (Pull Request)' : 'Pull Request',
    description: language === 'uy' ? 'كودنى باشقىلارغا تەكشۈرۈش ئۈچۈن تەكلىپ قىلىش' : 'Request code review from others',
    details: language === 'uy' ? 'يېڭى بۇتاقتىكى كودنى ئاساسىي بۇتاققا قوشۇش ئالدىدا باشقا پروگرامماچىلارنىڭ تەكشۈرۈشىنى تەلەپ قىلىدۇ.' : 'Requests review from other developers before merging new branch code into the main branch.',
    benefits: ['كود سۈپىتى', language === 'uy' ? 'بىرلىكتە ئىشلەش' : 'Collaboration', 'ئۆگىنىش']
  },
  {
    icon: Eye,
    title: language === 'uy' ? 'كودنى كۆرۈش (Code Review)' : 'Code Review',
    description: language === 'uy' ? 'باشقىلارنىڭ كودىنى تەكشۈرۈش ۋە باھا بېرىش' : 'Review and evaluate others\' code',
    details: language === 'uy' ? 'باشقىلارنىڭ كودىنى تەكشۈرۈپ، خاتالىقلارنى بايقاش، ياخشىلاش تەكلىپلىرى بېرىش.' : 'Review others\' code to find bugs and suggest improvements.',
    benefits: ['خاتالىق ئاز', language === 'uy' ? 'ئۆگىنىش' : 'Learning', 'سۈپەت']
  },
  {
    icon: GitBranch, // Fork ئورنىغا GitBranch ئىشلىتىڭ
    title: language === 'uy' ? 'پىشقاق (Fork)' : 'Fork',
    description: language === 'uy' ? 'باشقىلارنىڭ پروژىتىنى كۆچۈرۈپ ئۆز ئەمەلىيىتىڭىزگە ئېلىش' : 'Copy others\' project to your account',
    details: language === 'uy' ? 'باشقىلارنىڭ پروژىتىنى ئۆز گىتخاب ھېسابىڭىزغا كۆچۈرۈپ، ئۆزگەرتىشلەر قىلالايدۇ.' : 'Copy someone else\'s project to your GitHub account to make changes.',
    benefits: ['ئۆزگەرتىش', 'تەجرىبە', language === 'uy' ? 'تۆھپە قوشۇش' : 'Contribution']
  },
  {
    icon: AlertCircle, // Issues ئورنىغا AlertCircle ئىشلىتىڭ
    title: language === 'uy' ? 'مەسىلىلەر (Issues)' : 'Issues',
    description: language === 'uy' ? 'پروژىكت مەسىلىلىرىنى بايان قىلىش ۋە تەڭشەش' : 'Describe and track project issues',
    details: language === 'uy' ? 'پروژىكتىتىڭىزدىكى خاتالىق، يېڭى ئىقتىدار تەلىپلىرى ۋە باشقا مەسىلىلەرنى بەلگىلەپ، ئۇلارنى تەڭشەيدۇ.' : 'Mark bugs, new feature requests, and other issues in your project and track them.',
    benefits: [language === 'uy' ? 'ئورۇنلاشتۇرۇش' : 'Organization', 'ئىز قوغلاش', 'ھەل قىلىش']
  }
];
  
  // گىت ئىش جەريانى
  const gitWorkflow = [
    {
      step: 1,
      title: language === 'uy' ? 'خەزىنە قۇرۇش' : 'Initialize Repository',
      description: language === 'uy' ? 'پروژىكتىڭىزنى گىت بىلەن باشقۇرۇشقا باشلىش' : 'Start managing your project with Git',
      command: 'git init',
      icon: FolderGit
    },
    {
      step: 2,
      title: language === 'uy' ? 'ئۆزگەرتىشلەرنى قوشۇش' : 'Stage Changes',
      description: language === 'uy' ? 'ئۆزگەرتىلگەن ھۆججەتلەرنى ئالدىنقى سەھىپىگە قوشۇش' : 'Add changed files to staging area',
      command: 'git add .',
      icon: Upload
    },
    {
      step: 3,
      title: language === 'uy' ? 'تىزىملىككە كىرگۈزۈش' : 'Commit Changes',
      description: language === 'uy' ? 'ئۆزگەرتىشلەرنى تىزىملىككە كىرگۈزۈپ، بىر ۋەرسىيە ھاسىل قىلىش' : 'Commit changes to create a version',
      command: 'git commit -m "message"',
      icon: GitCommit
    },
    {
      step: 4,
      title: language === 'uy' ? 'بۇتاق يارىتىش' : 'Create Branch',
      description: language === 'uy' ? 'يېڭى ئىقتىدار ئۈچۈن بۇتاق قۇرۇش' : 'Create branch for new feature',
      command: 'git branch feature-branch',
      icon: GitBranch
    },
    {
      step: 5,
      title: language === 'uy' ? 'يۇقىرىغا يوللاش' : 'Push to Remote',
      description: language === 'uy' ? 'تىزىملىكلەرنى تور خەزىنىسىگە يوللاش' : 'Push commits to remote repository',
      command: 'git push origin main',
      icon: Cloud
    }
  ];
  
  // گىتخاب ئاممىۋى پروژىلىرى
  const popularProjects = [
    {
      name: "React",
      url: "https://github.com/facebook/react",
      stars: "223k",
      description: language === 'uy' ? 'Facebook تەرەپتىن ئىشلەنگەن JavaScript كۇتۇپخانىسى' : 'JavaScript library by Facebook',
      language: "JavaScript",
      icon: <Sparkles className="w-4 h-4 text-yellow-500" />
    },
    {
      name: "TensorFlow",
      url: "https://github.com/tensorflow/tensorflow",
      stars: "180k",
      description: language === 'uy' ? 'Google تەرەپتىن ئىشلەنگەن ماشىنا ئۆگىنىش كۇتۇپخانىسى' : 'Machine learning library by Google',
      language: "Python",
      icon: <Cpu className="w-4 h-4 text-green-500" />
    },
    {
      name: "VS Code",
      url: "https://github.com/microsoft/vscode",
      stars: "157k",
      description: language === 'uy' ? 'Microsoft تەرەپتىن ئىشلەنگەن تەھرىرلىگۈچ' : 'Code editor by Microsoft',
      language: "TypeScript",
      icon: <Code className="w-4 h-4 text-blue-500" />
    },
    {
      name: "Linux Kernel",
      url: "https://github.com/torvalds/linux",
      stars: "163k",
      description: language === 'uy' ? 'Linus Torvalds تەرەپتىن باشقۇرۇلىدىغان Linux يادرو پروژىتى' : 'Linux kernel project managed by Linus Torvalds',
      language: "C",
      icon: <Terminal className="w-4 h-4 text-purple-500" />
    }
  ];
  
  // ئالىي گىت تېمىلىرى
  const advancedTopics = [
    {
      title: language === 'uy' ? 'Git Rebase' : 'Git Rebase',
      description: language === 'uy' ? 'بۇتاق تارىخىنى قايتا قۇرۇش' : 'Rebuild branch history',
      useCase: language === 'uy' ? 'بۇتاق تارىخىنى سىلىق قىلىش' : 'Clean up branch history',
      command: 'git rebase main',
      difficulty: language === 'uy' ? 'ئوتتۇرا' : 'Medium'
    },
    {
      title: language === 'uy' ? 'Git Cherry-pick' : 'Git Cherry-pick',
      description: language === 'uy' ? 'ئايرىم تىزىملىكلارنى تاللاپ قوبۇل قىلىش' : 'Selectively apply commits',
      useCase: language === 'uy' ? 'مۇئەييەن تىزىملىكنى باشقا بۇتاققا كۆچۈرۈش' : 'Copy specific commit to another branch',
      command: 'git cherry-pick <commit-hash>',
      difficulty: language === 'uy' ? 'ئوتتۇرا' : 'Medium'
    },
    {
      title: language === 'uy' ? 'Git Stash' : 'Git Stash',
      description: language === 'uy' ? 'ئۆزگەرتىشلەرنى ۋاقىتلىق ساقلاش' : 'Temporarily store changes',
      useCase: language === 'uy' ? 'ئۆزگەرتىشلەرنى ساقلاپ، باشقا بۇتاققا ئۆتۈش' : 'Save changes and switch branches',
      command: 'git stash',
      difficulty: language === 'uy' ? 'ئاسان' : 'Easy'
    },
    {
      title: language === 'uy' ? 'Git Hooks' : 'Git Hooks',
      description: language === 'uy' ? 'گىت ۋەقەلىرىگە باشلانغۇچ سكرىپتلار قوشۇش' : 'Add scripts to Git events',
      useCase: language === 'uy' ? 'تىزىملىككە كىرگۈزۈشتىن ئاۋۋال كودنى تەكشۈرۈش' : 'Check code before commit',
      command: '.git/hooks/pre-commit',
      difficulty: language === 'uy' ? 'مۇرەككەپ' : 'Advanced'
    }
  ];

  // ئىشلىتىش مىسالى
  const practicalExample = {
    scenario: language === 'uy' ? "Login سەھىپىسىنى يېڭىلاپ قىلىش" : "Redesign Login Page",
    steps: [
      { step: 1, action: language === 'uy' ? 'يېڭى بۇتاق قۇرۇش' : 'Create new branch', command: 'git branch login-redesign' },
      { step: 2, action: language === 'uy' ? 'بۇتاققا ئۆتۈش' : 'Switch to branch', command: 'git checkout login-redesign' },
      { step: 3, action: language === 'uy' ? 'كودنى ئۆزگەرتەش' : 'Make code changes', command: '// CSS ۋە HTML ئۆزگەرتىش' },
      { step: 4, action: language === 'uy' ? 'ئۆزگەرتىشلەرنى قوشۇش' : 'Stage changes', command: 'git add .' },
      { step: 5, action: language === 'uy' ? 'تىزىملىككە كىرگۈزۈش' : 'Commit changes', command: 'git commit -m "Login page redesign"' },
      { step: 6, action: language === 'uy' ? 'تور خەزىنىسىگە يوللاش' : 'Push to remote', command: 'git push origin login-redesign' },
      { step: 7, action: language === 'uy' ? 'Pull Request قۇرۇش' : 'Create Pull Request', command: 'GitHub: New Pull Request' }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* تىل تاللاش */}
        <div className="flex justify-end mb-6">
          <div className="bg-white rounded-lg border border-orange-200 p-1 flex">
            <button
              onClick={() => setLanguage('uy')}
              className={`px-4 py-2 rounded-md transition-all ${language === 'uy' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-orange-50'}`}
            >
              ئۇيغۇرچە
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-4 py-2 rounded-md transition-all ${language === 'en' ? 'bg-orange-500 text-white' : 'text-gray-600 hover:bg-orange-50'}`}
            >
              English
            </button>
          </div>
        </div>

        {/* ماۋزۇ */}
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-xl">
            <GitBranch className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{t.title}</h1>
            <p className="text-gray-600 mt-2">{t.description}</p>
          </div>
        </div>

        {/* ناۋىگاتسىيە تاللىرى */}
        <div className="bg-white rounded-2xl shadow-lg border border-orange-100 p-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {Object.entries(t.nav).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                  activeTab === key
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {key === 'basics' && <BookOpen className="w-5 h-5" />}
                {key === 'commands' && <Terminal className="w-5 h-5" />}
                {key === 'workflow' && <GitMerge className="w-5 h-5" />}
                {key === 'collaboration' && <Users className="w-5 h-5" />}
                {key === 'advanced' && <Zap className="w-5 h-5" />}
                <span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ئاساسىي چۈشەنچىلەر */}
        {activeTab === 'basics' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <GitBranch className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{t.sections.gitDefinition.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{t.sections.gitDefinition.content}</p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">
                    {language === 'uy' ? 'گىتنىڭ ئاساسىي پرىنسىپلىرى:' : 'Basic Principles of Git:'}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>{language === 'uy' ? 'پارچىلانغان' : 'Distributed'}:</strong> {language === 'uy' ? 'ھەر بىر پروگرامماچىنىڭ تولۇق خەزىنىسى بار' : 'Every developer has a full copy of the repository'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>{language === 'uy' ? 'بۇتاقلاش' : 'Branching'}:</strong> {language === 'uy' ? 'ئايرىم ئىقتىدارلارنى ئايرىم بۇتاقلاردا تەرەققىي قىلدۇرۇش' : 'Develop separate features in separate branches'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>{language === 'uy' ? 'تىزىملىك' : 'Commit'}:</strong> {language === 'uy' ? 'ھەر بىر ئۆزگەرتىشنى مەڭگۈلۈك خاتىرىلەش' : 'Permanently record each change'}</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Cloud className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{t.sections.githubDefinition.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{t.sections.githubDefinition.content}</p>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">
                    {language === 'uy' ? 'گىتخابنىڭ ئەھمىيىتى:' : 'Importance of GitHub:'}
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <span><strong>{language === 'uy' ? 'ئاممىۋى پروژىلار' : 'Open Source Projects'}:</strong> {language === 'uy' ? 'دۇنياۋى پروگرامماچىلارنىڭ ھەمكارلىشىش پىلاتفورمىسى' : 'Platform for global developer collaboration'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>{language === 'uy' ? 'كوللابوراتسىيە' : 'Collaboration'}:</strong> {language === 'uy' ? 'تۆھپە قوشقۇچىلارنى ئورۇنلاشتۇرۇش ۋە باشقۇرۇش' : 'Organize and manage contributors'}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <BarChart className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>{language === 'uy' ? 'پورتفولىئو' : 'Portfolio'}:</strong> {language === 'uy' ? 'پروگرامماچىلارنىڭ كاسپىي تەجرىبىسىنى كۆرسىتىش' : 'Showcase developers\' professional experience'}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* گىت بۇتاق مېخانىزمى */}
            <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <GitBranch className="w-6 h-6 text-orange-600" />
                {language === 'uy' ? 'گىت بۇتاق مېخانىزمى (Git Branching)' : 'Git Branching Mechanism'}
              </h3>
              
              <div className="relative h-80 bg-gradient-to-b from-orange-50 to-white rounded-xl border-2 border-dashed border-orange-200 p-6 mb-6">
                <div className="absolute left-1/4 top-8">
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-semibold text-gray-700 mb-2 bg-white px-3 py-1 rounded-full border border-orange-200">
                      {language === 'uy' ? 'main بۇتاقى' : 'main branch'}
                    </div>
                    <div className="w-40 h-10 bg-gradient-to-r from-green-100 to-green-200 rounded-lg border border-green-300 flex items-center justify-center shadow-sm">
                      <span className="text-sm font-mono">C1 → C2 → C3</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/4 top-24">
                  <div className="w-1 h-16 bg-gradient-to-b from-orange-300 to-orange-400 mx-auto"></div>
                </div>
                
                <div className="absolute left-1/4 top-40">
                  <div className="flex space-x-12">
                    <div className="flex flex-col items-center">
                      <div className="text-sm font-semibold text-gray-700 mb-2 bg-white px-3 py-1 rounded-full border border-blue-200">
                        {language === 'uy' ? 'feature/login بۇتاقى' : 'feature/login branch'}
                      </div>
                      <div className="w-36 h-10 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg border border-blue-300 flex items-center justify-center shadow-sm">
                        <span className="text-sm font-mono">C4 → C5</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">{language === 'uy' ? 'يېڭى ئىقتىدار' : 'New feature'}</div>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="text-sm font-semibold text-gray-700 mb-2 bg-white px-3 py-1 rounded-full border border-red-200">
                        {language === 'uy' ? 'hotfix/bug بۇتاقى' : 'hotfix/bug branch'}
                      </div>
                      <div className="w-36 h-10 bg-gradient-to-r from-red-100 to-red-200 rounded-lg border border-red-300 flex items-center justify-center shadow-sm">
                        <span className="text-sm font-mono">C6</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">{language === 'uy' ? 'خاتالىق تۈزىتىش' : 'Bug fix'}</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-1/4 top-60">
                  <div className="w-1 h-16 bg-gradient-to-b from-orange-300 to-orange-400 mx-auto"></div>
                </div>
                
                <div className="absolute left-1/4 top-76">
                  <div className="flex flex-col items-center">
                    <div className="text-sm font-semibold text-gray-700 mb-2 bg-white px-3 py-1 rounded-full border border-purple-200">
                      {language === 'uy' ? 'main بۇتاقى (بىرلەشتۈرۈلگەن)' : 'main branch (merged)'}
                    </div>
                    <div className="w-48 h-10 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg border border-purple-300 flex items-center justify-center shadow-sm">
                      <span className="text-sm font-mono">C1 → C2 → C3 → C4 → C5 → C6</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">{language === 'uy' ? 'بارلىق ئۆزگەرتىشلەر بىرلەشتۈرۈلدى' : 'All changes merged'}</div>
                  </div>
                </div>
                
                <div className="absolute top-28 right-1/4">
                  <div className="flex items-center gap-2 bg-orange-100 px-3 py-1 rounded-lg border border-orange-300">
                    <GitBranch className="w-4 h-4 text-orange-600" />
                    <span className="text-sm text-gray-700">{language === 'uy' ? 'بۇتاق يارىتىش' : 'Create branch'}</span>
                  </div>
                </div>
                
                <div className="absolute top-68 right-1/4">
                  <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-lg border border-green-300">
                    <GitMerge className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-gray-700">{language === 'uy' ? 'بىرلەشتۈرۈش' : 'Merge'}</span>
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                  <div className="text-orange-700 font-semibold mb-2">{language === 'uy' ? 'بۇتاق يارىتىش' : 'Create Branch'}</div>
                  <code className="text-sm text-gray-700 bg-white px-2 py-1 rounded">git branch &lt;name&gt;</code>
                  <div className="text-xs text-gray-600 mt-2">{language === 'uy' ? 'يېڭى بۇتاق قۇرۇش' : 'Create new branch'}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                  <div className="text-blue-700 font-semibold mb-2">{language === 'uy' ? 'بۇتاق ئالماشتۇرۇش' : 'Switch Branch'}</div>
                  <code className="text-sm text-gray-700 bg-white px-2 py-1 rounded">git checkout &lt;branch&gt;</code>
                  <div className="text-xs text-gray-600 mt-2">{language === 'uy' ? 'باشقا بۇتاققا ئۆتۈش' : 'Switch to another branch'}</div>
                </div>
                <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                  <div className="text-green-700 font-semibold mb-2">{language === 'uy' ? 'بىرلەشتۈرۈش' : 'Merge'}</div>
                  <code className="text-sm text-gray-700 bg-white px-2 py-1 rounded">git merge &lt;branch&gt;</code>
                  <div className="text-xs text-gray-600 mt-2">{language === 'uy' ? 'بۇتاقلارنى بىرلەشتۈرۈش' : 'Merge branches'}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* كوماندىلار */}
        {activeTab === 'commands' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="w-6 h-6 text-orange-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {language === 'uy' ? 'گىتنىڭ ئاساسىي كوماندىلىرى' : 'Basic Git Commands'}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {basicCommands.map((cmd, index) => {
                  const Icon = cmd.icon;
                  return (
                    <div key={index} className="bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-orange-300 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="bg-orange-100 p-1.5 rounded">
                            <Icon className="w-4 h-4 text-orange-600" />
                          </div>
                          <code className="text-sm font-mono bg-white px-3 py-1 rounded border">{cmd.command}</code>
                        </div>
                        <button
                          onClick={() => copyToClipboard(cmd.command)}
                          className="text-gray-500 hover:text-orange-600 transition-colors"
                          title={language === 'uy' ? 'كۆچۈرۈش' : 'Copy'}
                        >
                          {copiedCommand === cmd.command ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <Copy className="w-5 h-5" />
                          )}
                        </button>
                      </div>
                      
                      <p className="text-gray-700 font-medium mb-2">{cmd.description}</p>
                      <p className="text-sm text-gray-600 mb-2">{cmd.explanation}</p>
                      <div className="text-xs text-gray-500 bg-white px-2 py-1 rounded border">
                        {cmd.example}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* بۇتاق باشقۇرۇش كوماندىلىرى */}
            <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <GitBranch className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {language === 'uy' ? 'بۇتاق باشقۇرۇش كوماندىلىرى' : 'Branch Management Commands'}
                </h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">{language === 'uy' ? 'كوماند' : 'Command'}</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">{language === 'uy' ? 'چۈشەندۈرۈش' : 'Description'}</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">{language === 'uy' ? 'قانداق ئىشلىتىلىدۇ؟' : 'How it works?'}</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">{language === 'uy' ? 'ئىشلىتىش' : 'Use Case'}</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {branchCommands.map((cmd, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-4 py-3">
                          <div className="flex items-center justify-between">
                            <code className="text-sm font-mono bg-gray-100 px-3 py-1 rounded">{cmd.command}</code>
                            <button
                              onClick={() => copyToClipboard(cmd.command)}
                              className="text-gray-400 hover:text-orange-600"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">{cmd.description}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{cmd.explanation}</td>
                        <td className="px-4 py-3 text-sm text-gray-500">{cmd.useCase}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ئىش جەريانى */}
        {activeTab === 'workflow' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {language === 'uy' ? 'گىت ئىش جەريانى (Git Workflow)' : 'Git Workflow'}
              </h3>
              
              <div className="relative">
                <div className="absolute left-0 right-0 top-10 h-1 bg-gradient-to-r from-orange-300 via-blue-300 to-green-300 z-0"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
                  {gitWorkflow.map((step) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.step} className="bg-white p-4 rounded-xl border-2 border-orange-200 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                            {step.step}
                          </div>
                          <Icon className="w-6 h-6 text-orange-600" />
                        </div>
                        
                        <h4 className="font-semibold text-gray-800 mb-2">{step.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                        
                        <div className="bg-gray-50 p-2 rounded border">
                          <code className="text-xs font-mono text-gray-700">{step.command}</code>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ئەمەلىي مىسال */}
            <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Rocket className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {language === 'uy' ? 'ئەمەلىي مىسال: Login سەھىپىسىنى يېڭىلاش' : 'Practical Example: Redesign Login Page'}
                </h3>
              </div>
              
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-xl mb-6 border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">
                  {language === 'uy' ? 'سنارىيە:' : 'Scenario:'}
                </h4>
                <p className="text-gray-700">{practicalExample.scenario}</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">#</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">{language === 'uy' ? 'ھەرىكەت' : 'Action'}</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">{language === 'uy' ? 'كوماند' : 'Command'}</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">{language === 'uy' ? 'چۈشەندۈرۈش' : 'Explanation'}</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {practicalExample.steps.map((item) => (
                      <tr key={item.step} className="hover:bg-gray-50">
                        <td className="px-4 py-3">
                          <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center text-orange-700 font-bold">
                            {item.step}
                          </div>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-700">{item.action}</td>
                        <td className="px-4 py-3">
                          <code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded">{item.command}</code>
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {item.step === 1 && (language === 'uy' ? 'يېڭى ئىقتىدار ئۈچۈن بۇتاق قۇرۇش' : 'Create branch for new feature')}
                          {item.step === 2 && (language === 'uy' ? 'يېڭى بۇتاققا ئۆتۈش' : 'Switch to new branch')}
                          {item.step === 3 && (language === 'uy' ? 'كودنى ئۆزگەرتەش' : 'Make code changes')}
                          {item.step === 4 && (language === 'uy' ? 'ئۆزگەرتىشلەرنى قوشۇش' : 'Add changes to staging')}
                          {item.step === 5 && (language === 'uy' ? 'تىزىملىككە كىرگۈزۈش' : 'Commit with message')}
                          {item.step === 6 && (language === 'uy' ? 'تور خەزىنىسىگە يوللاش' : 'Push to remote repository')}
                          {item.step === 7 && (language === 'uy' ? 'تەكشۈرۈش ئۈچۈن تەكلىپ قىلىش' : 'Request review from team')}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ھەمكارلىشىش */}
        {activeTab === 'collaboration' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {language === 'uy' ? 'گىتخاب ھەمكارلىشىش ئىقتىدارلىرى' : 'GitHub Collaboration Features'}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {githubFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-5 rounded-xl border border-gray-200 hover:border-orange-300 transition-all hover:shadow-md">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="bg-gradient-to-r from-orange-100 to-red-100 p-2 rounded-lg">
                          <Icon className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800 text-lg">{feature.title}</h4>
                          <p className="text-gray-600">{feature.description}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 mb-4">{feature.details}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, i) => (
                          <span key={i} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-xs font-medium">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ئاممىۋى پروژىلار */}
            <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="w-6 h-6 text-green-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {language === 'uy' ? 'گىتخابتىكى مەشھۇر ئاممىۋى پروژىلار' : 'Popular Open Source Projects on GitHub'}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {popularProjects.map((project, index) => (
                  <a
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-4 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all group"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg group-hover:text-orange-600 transition-colors">
                          {project.name}
                        </h4>
                        <p className="text-sm text-gray-600">{project.description}</p>
                      </div>
                      {project.icon}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-700">{project.stars}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FileCode className="w-4 h-4 text-blue-500" />
                          <span className="text-sm text-gray-700">{project.language}</span>
                        </div>
                      </div>
                      <span className="text-xs text-orange-600 font-medium px-2 py-1 bg-orange-50 rounded">
                        {language === 'uy' ? 'كۆرۈش' : 'View'}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                <p className="text-sm text-gray-700">
                  {language === 'uy' ? 
                    'بۇ پروژىلار گىتخابتا ئاممىۋى ھالەتتە تارقىتىلغان بولۇپ، ھەر كىم ئۆزگەرتىش تەكلىپى قىلالايدۇ. بۇ ئارقىلىق يېڭىدىن باشلاپ ئۆگىنەلەيسىز ۋە تۆھپە قوشالايسىز.' :
                    'These projects are publicly available on GitHub, and anyone can contribute. You can learn and contribute to them.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ئالىي تېمىلار */}
        {activeTab === 'advanced' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <Zap className="w-6 h-6 text-purple-600" />
                <h3 className="text-xl font-bold text-gray-900">
                  {language === 'uy' ? 'ئالىي گىت تېمىلىرى' : 'Advanced Git Topics'}
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {advancedTopics.map((topic, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-4 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">{topic.title}</h4>
                    <p className="text-gray-700 mb-3">{topic.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs text-gray-500 mb-1">{language === 'uy' ? 'ئىشلىتىش:' : 'Use Case:'}</div>
                        <div className="text-sm text-gray-700">{topic.useCase}</div>
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 mb-1">{language === 'uy' ? 'مۇرەككەپلىك:' : 'Difficulty:'}</div>
                        <div className={`text-sm px-2 py-1 rounded ${
                          topic.difficulty.includes('ئاسان') || topic.difficulty === 'Easy' ? 'bg-green-100 text-green-700' :
                          topic.difficulty.includes('ئوتتۇرا') || topic.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>
                          {topic.difficulty}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-3">
                      <div className="text-xs text-gray-500 mb-1">{language === 'uy' ? 'كوماند:' : 'Command:'}</div>
                      <code className="text-xs font-mono bg-gray-100 px-2 py-1 rounded block">{topic.command}</code>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* گىت بىلەن باشقا قوراللارنىڭ بىرلەشمىسى */}
            <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                {language === 'uy' ? 'گىت بىلەن باشقا قوراللارنىڭ بىرلەشمىسى' : 'Git Integration with Other Tools'}
              </h3>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl border border-blue-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Server className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-800">CI/CD</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {language === 'uy' ? 
                      'GitHub Actions, Jenkins قاتارلىقلار بىلەن ئاپتوماتىك تەستىقلاش ۋە تارقىتىش' :
                      'Automated testing and deployment with GitHub Actions, Jenkins etc.'}
                  </p>
                  <span className="text-xs text-blue-600 font-medium">Jenkins, GitHub Actions</span>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Database className="w-5 h-5 text-green-600" />
                    <h4 className="font-semibold text-gray-800">{language === 'uy' ? 'كود تەكشۈرۈش' : 'Code Review'}</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {language === 'uy' ? 
                      'Pull Request + Code Review قوراللىرى بىلەن كود سۈپىتىنى كاپالەتلەندۈرۈش' :
                      'Ensure code quality with Pull Request and code review tools'}
                  </p>
                  <span className="text-xs text-green-600 font-medium">GitHub PR, GitLab MR</span>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-purple-600" />
                    <h4 className="font-semibold text-gray-800">خەۋپسىزلىك</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    {language === 'uy' ? 
                      'ئاچقۇچلارنى ئىشلىتىپ، كودنى خەۋپسىز ساقلاش ۋە يوللاش' :
                      'Securely store and deploy code using keys'}
                  </p>
                  <span className="text-xs text-purple-600 font-medium">SSH Keys, GPG</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* تۆھپە قاتناشتىكى پايدىلار */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 p-8 rounded-2xl text-white mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                {language === 'uy' ? 'گىتخابتا تۆھپە قوشۇڭ!' : 'Contribute on GitHub!'}
              </h3>
              <p className="text-orange-100">
                {language === 'uy' ? 
                  'ئاممىۋى پروژىلارغا تۆھپە قوشۇپ، كاسپىي تەجرىبە يېتىپ ۋە پروگرامماچىلار جەمئىيىتىگە قاتنىشىڭ.' :
                  'Contribute to open source projects, gain professional experience, and join the developer community.'}
              </p>
            </div>
            <button className="px-6 py-3 bg-white text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors shadow-lg">
              {language === 'uy' ? 'ھۆججەتلەرنى كۆرۈش' : 'View Documentation'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// ئىشلەتمىگەن ئىكونلارنى تەمىنلەش
const Issues = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
  </svg>
);

export default GitGithubModule;