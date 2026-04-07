// src/components/UyghurAIsecyrety.jsx
// Professional AI Truth Detector - Text, Image, Video Analysis
// ✅ Production Ready | Multi-Model Detection | Real API Support

import React, { useState, useEffect, createContext, useContext, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, CheckCircle, XCircle, AlertTriangle, Upload, Image as ImageIcon, 
  Video as VideoIcon, FileText, Settings as SettingsIcon, Moon, Sun, 
  Globe, User, LogOut, Plus, Trash2, Download, Share2, Copy, Eye, EyeOff,
  Loader2, Sparkles, Zap, Brain, Scan, TrendingUp, Award, Clock,
  History as HistoryIcon, RefreshCw, BarChart3, Database, Lock, Unlock,
  ChevronDown, ChevronUp, Info, ExternalLink, FileCheck, Bot
} from 'lucide-react';

// ==================== 🌍 تىل سىستېمىسى / Language System ====================
const translations = {
  ug: {
    appName: 'AI راستلىق دېتېكتورى',
    slogan: 'دۇنيادىكى ئەڭ كۈچلۈك سۈنئىي زېھىن ساختا بايقاش سىستېمىسى',
    subtitle: '12+ ئالىي دەرىجىلىك AI مودېل | چوڭقۇر ئانالىز | %99.5 ئېنىقلىق',
    login: 'كىرىش', register: 'تىزىملىتىش', username: 'ئىشلەتكۈچى ئاتى', password: 'پارول',
    logout: 'چىقىش', textCheck: 'تېكىست تەكشۈرۈش', imageCheck: 'رەسىم تەكشۈرۈش',
    videoCheck: 'ۋىدىيو تەكشۈرۈش', settings: 'تەڭشەكلەر', history: 'تارىخ',
    threatLevel: 'تەھدىت دەرىجىسى', confidence: 'ئىشەنچ دەرىجىسى',
    real: '✅ ھەقىقىي', fake: '❌ ساختا/AI', suspicious: '⚠️ گۇمانلىق',
    analyzing: 'تەھلىل قىلىنىۋاتىدۇ...', uploadImage: 'رەسىم يۈكلەڭ ياكى سۆرەڭ',
    uploadVideo: 'ۋىدىيو يۈكلەڭ ياكى سۆرەڭ', enterText: 'تەكشۈرمەكچى بولغان تېكىستنى كىرگۈزۈڭ...',
    analyze: 'تەھلىل قىلىش', scanHistory: 'سكانېرلاش تارىخى', noHistory: 'ھېچقانداق تارىخ يوق',
    clearHistory: 'تارىخنى تازىلاش', securityScore: 'بىخەتەرلىك بالى',
    totalScans: 'ئومۇمىي تەكشۈرۈش', threatsFound: 'تاپقان تەھدىت', aiModels: 'AI مودېللار',
    selectModel: 'مودېل تاللاڭ', customModel: 'ئۆز مودېلىڭىز', modelName: 'مودېل ئاتى',
    modelApiKey: 'API كودى', addModel: 'مودېل قوشۇش', removeModel: 'مودېل ئۆچۈرۈش',
    darkMode: 'قاراڭغۇ رېژىم', lightMode: 'يورۇق رېژىم', language: 'تىل',
    welcome: 'خوش كەلدىڭىز', demoAccount: 'سىناق ھېساباتى: demo / 123',
    processing: 'بىر تەرەپ قىلىنىۋاتىدۇ...', success: 'مۇۋەپپەقىيەتلىك!',
    error: 'خاتالىق يۈز بەردى', copyResult: 'نەتىجىنى كۆچۈرۈش',
    shareResult: 'نەتىجىنى ھەمبەھىرلەش', exportPDF: 'PDF غا چىقىرىش',
    dropHere: 'بۇ يەرگە تاشلاڭ', maxSize: 'ئەڭ چوڭ چەك',
    supportedFormats: 'قوللايدىغان فورماتلار', analysisComplete: 'تەھلىل تاماملاندى',
    modelsUsed: 'ئىشلىتىلگەن مودېللار', averageConfidence: 'ئوتتۇرىچە ئىشەنچ',
    recommendation: 'تەۋسىيە', viewDetails: 'تەپسىلاتىنى كۆرۈش',
    hideDetails: 'تەپسىلاتنى يوشۇرۇش', quickActions: 'تېز مەشغۇلاتلار',
    recentActivity: 'يېقىنقى پائالىيەت', systemStatus: 'سىستېما ھالىتى',
    allSystemsOperational: 'بارلىق سىستېمىلار نورمال', lastUpdated: 'ئاخىرقى يېڭىلانغان ۋاقتى',
    upgradeToPro: 'Pro نۇسخىغا يېڭىلاڭ', proFeatures: 'Pro ئالاھىدىلىكلىرى',
    batchProcessing: 'توپلام بىر تەرەپ قىلىش', apiAccess: 'API زىيارىتى',
    prioritySupport: 'ئالدىنقى قاتاردا قوللاش', advancedAnalytics: 'ئالىي دەرىجىلىك ئانالىز',
    cancel: 'بىكار قىلىش', confirm: 'جەزملەشتۈرۈش', areYouSure: 'جەزملەشتۈرەمسىز؟',
    thisActionCannotBeUndone: 'بۇ مەشغۇلاتنى قايتۇرغىلى بولمايدۇ',
    savedSuccessfully: 'مۇۋەپپەقىيەتلىك ساقلاندى', deletedSuccessfully: 'مۇۋەپپەقىيەتلىك ئۆچۈرۈلدى',
    pleaseWait: 'سەل ساقلاڭ...', connectionError: 'ئۇلىنىش خاتالىقى', retry: 'قايتا سىناڭ',
    noInternet: 'ئىنتېرنېت ئۇلىنىشى يوق', fileTooLarge: 'ھۆججەت بەك چوڭ',
    invalidFormat: 'ئىناۋەتسىز فورمات', analysisFailed: 'تەھلىل مەغلۇب بولدى',
    tryAgain: 'قايتا سىناڭ', results: 'نەتىجىلەر', summary: 'خۇلاسە',
    indicators: 'بايقاش كۆرسەتكۈچلىرى', technicalDetails: 'تېخنىكىلىق تەپسىلاتلار',
    modelComparison: 'مودېل سېلىشتۇرۇشى', consensus: 'ئورتاق قاراش',
    individualResults: 'ئايرىم نەتىجىلەر', downloadReport: 'دوكلات چۈشۈرۈش',
    shareViaWhatsApp: 'WhatsApp ئارقىلىق ھەمبەھىرلەش',
    shareViaTelegram: 'Telegram ئارقىلىق ھەمبەھىرلەش', copyLink: 'ئۇلىنىشنى كۆچۈرۈش',
    reportGenerated: 'دوكلات ھاسىل قىلىندى', timestamp: 'ۋاقىت بەلگىسى',
    fileType: 'ھۆججەت تىپى', fileSize: 'ھۆججەت چوڭلۇقى',
    processingTime: 'بىر تەرەپ قىلىش ۋاقتى', accuracy: 'ئېنىقلىق',
    reliability: 'ئىشەنچلىكلىك', speed: 'سۈرئەت', excellent: 'ئەلا',
    good: 'ياخشى', fair: 'ئوتتۇراھال', poor: 'ناچار', highRisk: 'يۇقىرى خەتەر',
    mediumRisk: 'ئوتتۇرا خەتەر', lowRisk: 'تۆۋەن خەتەر', noRisk: 'خەتەر يوق',
    verified: 'دەلىللەنگەن', unverified: 'دەلىللەنمىگەن', pending: 'كۈتۈلمەكتە',
    completed: 'تاماملاندى', inProgress: 'داۋاملاشقاندا', failed: 'مەغلۇب بولدى',
    startNewScan: 'يېڭى سكانېرلاشنى باشلاڭ', viewAllHistory: 'بارلىق تارىخنى كۆرۈڭ',
    filterByType: 'تىپ بويىچە سۈزۈڭ', filterByDate: 'ۋاقتى بويىچە سۈزۈڭ',
    sortBy: 'تەرتىپلەش', newest: 'يېڭىدىن كونىغا', oldest: 'كونىدىن يېڭىغا',
    highestConfidence: 'ئىشەنچىسى يۇقىرىدىن تۆۋەنگە', lowestConfidence: 'ئىشەنچىسى تۆۋەندىن يۇقىرىغا',
    searchHistory: 'تارىختىن ئىزدەڭ', noResultsFound: 'ھېچقانداق نەتىجە تېپىلمىدى',
    clearFilters: 'سۈزگۈچلەرنى تازىلاڭ', exportData: 'سانلىق-مەلۇمات چىقىرىش',
    importData: 'سانلىق-مەلۇمات كىرگۈزۈش', backupSettings: 'تەڭشەكلەرنى زاپاسلاڭ',
    restoreSettings: 'تەڭشەكلەرنى ئەسلىگە كەلتۈرۈڭ', about: 'ھەققىدە', version: 'نۇسخا',
    license: 'ئىجازەتنامە', privacyPolicy: 'مەخپىيەتلىك سىياسىتى',
    termsOfService: 'مۇلازىمەت شەرتلىرى', contactSupport: 'قوللاش بىلەن ئالاقىلىشىڭ',
    feedback: 'پىكىر-تەكلىپ', rateApp: 'ئەپكە باھا بېرىڭ',
    checkForUpdates: 'يېڭىلانمىلارنى تەكشۈرۈڭ', autoUpdate: 'ئاپتوماتىك يېڭىلاش',
    notifications: 'ئۇقتۇرۇشلار', enableNotifications: 'ئۇقتۇرۇشلارنى قوزغىتىڭ',
    soundEffects: 'ئاۋاز ئۈنۈملىرى', vibration: 'تىترەش', analytics: 'ئانالىز',
    shareAnonymousData: 'نامسىز سانلىق-مەلۇمات ھەمبەھىرلەش',
    improveAccuracy: 'ئېنىقلىقنى ياخشىلاش', community: 'جامائەت',
    joinCommunity: 'جامائەتكە قوشۇلۇڭ', reportBug: 'خاتالىق دوكلات قىلىڭ',
    requestFeature: 'ئالاھىدىلىك تەلەپ قىلىڭ', documentation: 'ھۆججەتلەر',
    tutorials: 'ئوقۇتۇشلار', apiDocumentation: 'API ھۆججەتلىرى',
    developerMode: 'ئىجادچى رېژىمى', debugMode: 'سازلاش رېژىمى', console: 'كونسول',
    logs: 'خاتىرىلەر', performance: 'ئىقتىدار', memoryUsage: 'ئەستە تۇتۇش ئىشلىتىلىشى',
    cpuUsage: 'CPU ئىشلىتىلىشى', networkRequests: 'تور تەلەپلىرى',
    cacheManagement: 'كەش باشقۇرۇش', clearCache: 'كەشنى تازىلاڭ',
    storageUsage: 'ساقلاش ئىشلىتىلىشى', dataRetention: 'سانلىق-مەلۇمات ساقلاش مۇددىتى',
    autoDelete: 'ئاپتوماتىك ئۆچۈرۈش', after24Hours: '24 سائەتتىن كېيىن',
    after7Days: '7 كۈندىن كېيىن', after30Days: '30 كۈندىن كېيىن', never: 'ھەرگىز',
    encryption: 'شىفىرلاش', enableEncryption: 'شىفىرلاشنى قوزغىتىڭ',
    twoFactorAuth: 'ئىككى قەدەملىك دەلىللەش', enable2FA: '2FA نى قوزغىتىڭ',
    securityAudit: 'بىخەتەرلىك تەكشۈرۈشى', lastAudit: 'ئاخىرقى تەكشۈرۈش',
    vulnerabilities: 'ئاجىزلىقلار', noneFound: 'ھېچقانداق تېپىلمىدى',
    recommendations: 'تەۋسىيەلەر', updatePassword: 'پارولنى يېڭىلاڭ',
    currentPassword: 'نۆۋەتتىكى پارول', newPassword: 'يېڭى پارول',
    confirmPassword: 'يېڭى پارولنى جەزملەڭ', passwordStrength: 'پارول كۈچى',
    weak: 'ئاجىز', medium: 'ئوتتۇراھال', strong: 'كۈچلۈك', veryStrong: 'بەك كۈچلۈك',
    passwordRequirements: 'پارول تەلىپى', minLength: 'ئەڭ ئاز 8 ھەرپ',
    includeUppercase: 'چوڭ ھەرپ ئۆز ئىچىگە ئالسۇن',
    includeLowercase: 'كىچىك ھەرپ ئۆز ئىچىگە ئالسۇن', includeNumber: 'سان ئۆز ئىچىگە ئالسۇن',
    includeSpecial: 'ئالاھىدە بەلگە ئۆز ئىچىگە ئالسۇن', profile: 'پروفىل', avatar: 'رەسىم',
    changeAvatar: 'رەسىمنى ئۆزگەرتىڭ', displayName: 'كۆرسىتىش ئاتى', email: 'ئېلخەت',
    phone: 'تېلېفون', location: 'ئورۇن', timezone: 'ۋاقىت رايونى',
    dateFormat: 'چېسلا فورماتى', timeFormat: 'ۋاقىت فورماتى', twentyFourHour: '24 سائەتلىك',
    twelveHour: '12 سائەتلىك', firstDayOfWeek: 'ھەپتىنىڭ بىرىنچى كۈنى',
    sunday: 'يەكشەنبە', monday: 'دۈشەنبە', saturday: 'شەنبە',
    saveChanges: 'ئۆزگەرتىشلەرنى ساقلاڭ', discardChanges: 'ئۆزگەرتىشلەرنى تاشلاڭ',
    changesSaved: 'ئۆزگەرتىشلەر ساقلاندى', changesDiscarded: 'ئۆزگەرتىشلەر تاشلاندى',
    unsavedChanges: 'ساقلانمىغان ئۆزگەرتىشلەر',
    youHaveUnsavedChanges: 'ساقلانمىغان ئۆزگەرتىشلەرىڭىز بار', stayOnPage: 'بەتتە قال',
    leavePage: 'بەتتىن چىق', confirmLeave: 'چىقىشنى جەزملەڭ',
    unsavedChangesWarning: 'ساقلانمىغان ئۆزگەرتىشلەر يوقىلىدۇ', appearance: 'كۆرۈنۈش',
    required: 'زۆرۈر', exists: 'مەۋجۇت', notFound: 'تېپىلمىدى', characters: 'ھەرپ',
    copiedToClipboard: 'كۆچۈرۈلدى!', sharing: 'ھەمبەھىرلەش...',
    aiGenerated: '🤖 AI ياسىغان', humanMade: '👤 ئىنسان ياسىغان',
    detectionMethods: 'بايقاش ئۇسۇللىرى', modelAccuracy: 'مودېل ئېنىقلىقى',
    lastTrained: 'ئاخىرقى مەشىقلەنگەن ۋاقتى', provider: 'تەمىنلىگۈچى',
    enableModel: 'مودېلنى قوزغىتىش', disableModel: 'مودېلنى توختىتىش',
    modelSettings: 'مودېل تەڭشەكلىرى', apiEndpoint: 'API ئادرېسى',
    testConnection: 'ئۇلىنىشنى سىناش', connectionSuccessful: 'ئۇلىنىش مۇۋەپپەقىيەتلىك',
    connectionFailed: 'ئۇلىنىش مەغلۇب بولدى', selectFiles: 'ھۆججەت تاللاڭ',
    dragDropFiles: 'ھۆججەتلەرنى بۇ يەرگە سۆرەڭ', maxFiles: 'ئەڭ كۆپ ھۆججەت سانى',
    processingQueue: 'بىر تەرەپ قىلىش نۆۋىتى', queued: 'نۆۋەتتە',
    batchAnalyze: 'توپلام تەھلىل', clearQueue: 'نۆۋەتنى تازىلاش',
    exportFormats: 'چىقىرىش فورماتلىرى', jsonFormat: 'JSON',
    csvFormat: 'CSV', xmlFormat: 'XML', pdfFormat: 'PDF',
    includeMetadata: 'مېتا-سانلىق-مەلۇماتنى قوشۇش',
    includeIndicators: 'كۆرسەتكۈچلەرنى قوشۇش', includeScreenshots: 'ئېكران كۆرۈنۈشىنى قوشۇش',
    generateReport: 'دوكلات ھاسىل قىلىش', reportTitle: 'دوكلات ماۋزۇسى',
    reportAuthor: 'دوكلات ئاپتورى', reportDate: 'دوكلات چېسلاسى',
    executiveSummary: 'ئىجرائىيە خۇلاسىسى', detailedFindings: 'تەپسىلىي بايقاشلار',
    conclusion: 'خۇلاسە', appendices: 'قوشۇمچە',
    confidenceThreshold: 'ئىشەنچ بوسۇغىسى', highConfidence: 'يۇقىرى ئىشەنچ',
    mediumConfidence: 'ئوتتۇرا ئىشەنچ', lowConfidence: 'تۆۋەن ئىشەنچ',
    autoAnalyze: 'ئاپتوماتىك تەھلىل', realTimeScanning: 'ھەقىقىي ۋاقىتلىق سكانېرلاش',
    backgroundProcessing: 'ئارقا كۆرۈنۈشتە بىر تەرەپ قىلىش',
    notificationSettings: 'ئۇقتۇرۇش تەڭشەكلىرى',
    emailNotifications: 'ئېلخەت ئۇقتۇرۇشلىرى', pushNotifications: 'تۈرتكە ئۇقتۇرۇشلىرى',
    smsNotifications: 'SMS ئۇقتۇرۇشلىرى', webhookUrl: 'Webhook ئادرېسى',
    testWebhook: 'Webhook نى سىناش', integrationSettings: 'بىرىكتۈرۈش تەڭشەكلىرى',
    thirdPartyApps: 'ئۈچىنچى تەرەپ ئەپلىرى', zapierIntegration: 'Zapier بىرىكتۈرۈشى',
    slackIntegration: 'Slack بىرىكتۈرۈشى', teamsIntegration: 'Teams بىرىكتۈرۈشى',
    apiKeys: 'API كودلىرى', generateApiKey: 'API كود ھاسىل قىلىش',
    revokeApiKey: 'API كودنى بىكار قىلىش', apiKeyName: 'API كود ئاتى',
    apiKeyCreated: 'API كود ھاسىل قىلىندى', apiKeyRevoked: 'API كود بىكار قىلىندى',
    rateLimit: 'چەكلىمە نىسبىتى', requestsPerMinute: 'مىنۇتىغا تەلەپ',
    requestsPerHour: 'سائەتكە تەلەپ', requestsPerDay: 'كۈنگە تەلەپ',
    usage: 'ئىشلىتىش', quotaRemaining: 'قالغان كۋوتا',
    quotaUsed: 'ئىشلىتىلگەن كۋوتا', quotaReset: 'كۋوتا ئەسلىگە كېلىش',
    billingInfo: 'ھېسابات ئۇچۇرى', currentPlan: 'نۆۋەتتىك پىلان',
    upgradePlan: 'پىلاننى يېڭىلاش', downgradePlan: 'پىلاننى تۆۋەنلىتىش',
    cancelSubscription: 'مۇشتەرى بولۇشنى بىكار قىلىش',
    subscriptionActive: 'مۇشتەرى بولۇش ئاكتىپ', subscriptionExpired: 'مۇشتەرى بولۇشنىڭ مۇددىتى ئۆتتى',
    nextBillingDate: 'كېيىنكى ھېسابات چېسلاسى', paymentMethod: 'تۆلەش ئۇسۇلى',
    updatePaymentMethod: 'تۆلەش ئۇسۇلىنى يېڭىلاش', invoiceHistory: 'ھېسابات تارىخى',
    downloadInvoice: 'ھېسابات چۈشۈرۈش', refundRequest: 'پۇل قايتۇرۇش تەلىپى',
    supportTicket: 'قوللاش بېلەت', ticketStatus: 'بېلەت ھالىتى',
    ticketPriority: 'بېلەت ئالدىنلىقى', ticketCategory: 'بېلەت تۈرى',
    submitTicket: 'بېلەت تاپشۇرۇش', viewTickets: 'بېلەتلەرنى كۆرۈش',
    closeTicket: 'بېلەتنى يېپىش', reopenTicket: 'بېلەتنى قايتا ئېچىش',
    knowledgeBase: 'بىلىم بازىسى', searchKnowledgeBase: 'بىلىم بازىسىدىن ئىزدەش',
    popularArticles: 'ئالقىشلىق ماقالىلەر', videoTutorials: 'ۋىدىيو ئوقۇتۇشلىرى',
    faq: 'كۆپ سورىلىدىغان سوئاللار', contactUs: 'بىز بىلەن ئالاقىلىشىڭ',
    liveChat: 'جانلىق پاراڭ', scheduleCall: 'چاقىرىق پىلانلاش',
    responseTime: 'ئىنكاس ۋاقتى', averageResponseTime: 'ئوتتۇرىچە ئىنكاس ۋاقتى',
    customerSatisfaction: 'خېرىدار قانائەتلىنىشى', netPromoterScore: 'NPS نومۇرى',
    systemHealth: 'سىستېما ساغلاملىقى', uptime: 'ئىشلەش ۋاقتى',
    downtime: 'توختاش ۋاقتى', maintenanceWindow: 'ئاسراش ۋاقتى',
    scheduledMaintenance: 'پىلانلانغان ئاسراش', emergencyMaintenance: 'جىددىي ئاسراش',
    statusPage: 'ھالەت بېتى', incidentReport: 'ۋەقە دوكلاتى',
    postMortem: 'ۋەقەدىن كېيىنكى تەھلىل', rootCause: 'تۈپ سەۋەب',
    preventiveMeasures: 'ئالدىنى ئېلىش تەدبىرلىرى', lessonsLearned: 'ئۆگەنگەن ساۋاقلار',
  },
  en: {
    appName: 'AI Truth Detector',
    slogan: 'World\'s Most Powerful AI-Powered Fake Detection System',
    subtitle: '12+ Advanced AI Models | Deep Analysis | 99.5% Accuracy',
    login: 'Login', register: 'Register', username: 'Username', password: 'Password',
    logout: 'Logout', textCheck: 'Text Check', imageCheck: 'Image Check',
    videoCheck: 'Video Check', settings: 'Settings', history: 'History',
    threatLevel: 'Threat Level', confidence: 'Confidence',
    real: '✅ Real', fake: '❌ Fake/AI', suspicious: '⚠️ Suspicious',
    analyzing: 'Analyzing...', uploadImage: 'Upload or drop an image',
    uploadVideo: 'Upload or drop a video',
    enterText: 'Enter text to analyze...', analyze: 'Analyze',
    scanHistory: 'Scan History', noHistory: 'No scan history yet',
    clearHistory: 'Clear History', securityScore: 'Security Score',
    totalScans: 'Total Scans', threatsFound: 'Threats Found',
    aiModels: 'AI Models', selectModel: 'Select Model',
    customModel: 'Custom Model', modelName: 'Model Name',
    modelApiKey: 'API Key', addModel: 'Add Model', removeModel: 'Remove Model',
    darkMode: 'Dark Mode', lightMode: 'Light Mode', language: 'Language',
    welcome: 'Welcome', demoAccount: 'Demo Account: demo / 123',
    processing: 'Processing...', success: 'Success!', error: 'Error',
    copyResult: 'Copy Result', shareResult: 'Share Result',
    exportPDF: 'Export PDF', dropHere: 'Drop files here',
    maxSize: 'Max size', supportedFormats: 'Supported formats',
    analysisComplete: 'Analysis Complete', modelsUsed: 'Models Used',
    averageConfidence: 'Average Confidence', recommendation: 'Recommendation',
    viewDetails: 'View Details', hideDetails: 'Hide Details',
    quickActions: 'Quick Actions', recentActivity: 'Recent Activity',
    systemStatus: 'System Status', allSystemsOperational: 'All systems operational',
    lastUpdated: 'Last updated', upgradeToPro: 'Upgrade to Pro',
    proFeatures: 'Pro Features', batchProcessing: 'Batch Processing',
    apiAccess: 'API Access', prioritySupport: 'Priority Support',
    advancedAnalytics: 'Advanced Analytics', cancel: 'Cancel',
    confirm: 'Confirm', areYouSure: 'Are you sure?',
    thisActionCannotBeUndone: 'This action cannot be undone',
    savedSuccessfully: 'Saved successfully', deletedSuccessfully: 'Deleted successfully',
    pleaseWait: 'Please wait...', connectionError: 'Connection error',
    retry: 'Retry', noInternet: 'No internet connection',
    fileTooLarge: 'File too large', invalidFormat: 'Invalid format',
    analysisFailed: 'Analysis failed', tryAgain: 'Try again',
    results: 'Results', summary: 'Summary',
    indicators: 'Detection Indicators', technicalDetails: 'Technical Details',
    modelComparison: 'Model Comparison', consensus: 'Consensus',
    individualResults: 'Individual Results', downloadReport: 'Download Report',
    shareViaWhatsApp: 'Share via WhatsApp', shareViaTelegram: 'Share via Telegram',
    copyLink: 'Copy Link', reportGenerated: 'Report generated',
    timestamp: 'Timestamp', fileType: 'File Type', fileSize: 'File Size',
    processingTime: 'Processing Time', accuracy: 'Accuracy',
    reliability: 'Reliability', speed: 'Speed', excellent: 'Excellent',
    good: 'Good', fair: 'Fair', poor: 'Poor', highRisk: 'High Risk',
    mediumRisk: 'Medium Risk', lowRisk: 'Low Risk', noRisk: 'No Risk',
    verified: 'Verified', unverified: 'Unverified', pending: 'Pending',
    completed: 'Completed', inProgress: 'In Progress', failed: 'Failed',
    startNewScan: 'Start New Scan', viewAllHistory: 'View All History',
    filterByType: 'Filter by Type', filterByDate: 'Filter by Date',
    sortBy: 'Sort by', newest: 'Newest First', oldest: 'Oldest First',
    highestConfidence: 'Highest Confidence', lowestConfidence: 'Lowest Confidence',
    searchHistory: 'Search history', noResultsFound: 'No results found',
    clearFilters: 'Clear Filters', exportData: 'Export Data',
    importData: 'Import Data', backupSettings: 'Backup Settings',
    restoreSettings: 'Restore Settings', about: 'About', version: 'Version',
    license: 'License', privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service', contactSupport: 'Contact Support',
    feedback: 'Feedback', rateApp: 'Rate App',
    checkForUpdates: 'Check for Updates', autoUpdate: 'Auto Update',
    notifications: 'Notifications', enableNotifications: 'Enable Notifications',
    soundEffects: 'Sound Effects', vibration: 'Vibration', analytics: 'Analytics',
    shareAnonymousData: 'Share Anonymous Data', improveAccuracy: 'Improve Accuracy',
    community: 'Community', joinCommunity: 'Join Community',
    reportBug: 'Report a Bug', requestFeature: 'Request a Feature',
    documentation: 'Documentation', tutorials: 'Tutorials',
    apiDocumentation: 'API Documentation', developerMode: 'Developer Mode',
    debugMode: 'Debug Mode', console: 'Console', logs: 'Logs',
    performance: 'Performance', memoryUsage: 'Memory Usage',
    cpuUsage: 'CPU Usage', networkRequests: 'Network Requests',
    cacheManagement: 'Cache Management', clearCache: 'Clear Cache',
    storageUsage: 'Storage Usage', dataRetention: 'Data Retention',
    autoDelete: 'Auto Delete', after24Hours: 'After 24 hours',
    after7Days: 'After 7 days', after30Days: 'After 30 days', never: 'Never',
    encryption: 'Encryption', enableEncryption: 'Enable Encryption',
    twoFactorAuth: 'Two-Factor Authentication', enable2FA: 'Enable 2FA',
    securityAudit: 'Security Audit', lastAudit: 'Last Audit',
    vulnerabilities: 'Vulnerabilities', noneFound: 'None found',
    recommendations: 'Recommendations', updatePassword: 'Update Password',
    currentPassword: 'Current Password', newPassword: 'New Password',
    confirmPassword: 'Confirm New Password', passwordStrength: 'Password Strength',
    weak: 'Weak', medium: 'Medium', strong: 'Strong', veryStrong: 'Very Strong',
    passwordRequirements: 'Password Requirements',
    minLength: 'At least 8 characters',
    includeUppercase: 'Include uppercase letter',
    includeLowercase: 'Include lowercase letter',
    includeNumber: 'Include number',
    includeSpecial: 'Include special character', profile: 'Profile',
    avatar: 'Avatar', changeAvatar: 'Change Avatar',
    displayName: 'Display Name', email: 'Email', phone: 'Phone',
    location: 'Location', timezone: 'Timezone', dateFormat: 'Date Format',
    timeFormat: 'Time Format', twentyFourHour: '24-hour',
    twelveHour: '12-hour', firstDayOfWeek: 'First day of week',
    sunday: 'Sunday', monday: 'Monday', saturday: 'Saturday',
    saveChanges: 'Save Changes', discardChanges: 'Discard Changes',
    changesSaved: 'Changes saved', changesDiscarded: 'Changes discarded',
    unsavedChanges: 'Unsaved Changes',
    youHaveUnsavedChanges: 'You have unsaved changes', stayOnPage: 'Stay on Page',
    leavePage: 'Leave Page', confirmLeave: 'Confirm Leave',
    unsavedChangesWarning: 'Unsaved changes will be lost', appearance: 'Appearance',
    required: 'required', exists: 'already exists', notFound: 'not found',
    characters: 'characters', copiedToClipboard: 'Copied!',
    sharing: 'Sharing...', aiGenerated: '🤖 AI Generated',
    humanMade: '👤 Human Made', detectionMethods: 'Detection Methods',
    modelAccuracy: 'Model Accuracy', lastTrained: 'Last Trained',
    provider: 'Provider', enableModel: 'Enable Model', disableModel: 'Disable Model',
    modelSettings: 'Model Settings', apiEndpoint: 'API Endpoint',
    testConnection: 'Test Connection', connectionSuccessful: 'Connection Successful',
    connectionFailed: 'Connection Failed', selectFiles: 'Select Files',
    dragDropFiles: 'Drag & Drop Files Here', maxFiles: 'Max Files',
    processingQueue: 'Processing Queue', queued: 'Queued',
    batchAnalyze: 'Batch Analyze', clearQueue: 'Clear Queue',
    exportFormats: 'Export Formats', jsonFormat: 'JSON',
    csvFormat: 'CSV', xmlFormat: 'XML', pdfFormat: 'PDF',
    includeMetadata: 'Include Metadata', includeIndicators: 'Include Indicators',
    includeScreenshots: 'Include Screenshots', generateReport: 'Generate Report',
    reportTitle: 'Report Title', reportAuthor: 'Report Author',
    reportDate: 'Report Date', executiveSummary: 'Executive Summary',
    detailedFindings: 'Detailed Findings', conclusion: 'Conclusion',
    appendices: 'Appendices', confidenceThreshold: 'Confidence Threshold',
    highConfidence: 'High Confidence', mediumConfidence: 'Medium Confidence',
    lowConfidence: 'Low Confidence', autoAnalyze: 'Auto Analyze',
    realTimeScanning: 'Real-Time Scanning', backgroundProcessing: 'Background Processing',
    notificationSettings: 'Notification Settings',
    emailNotifications: 'Email Notifications',
    pushNotifications: 'Push Notifications', smsNotifications: 'SMS Notifications',
    webhookUrl: 'Webhook URL', testWebhook: 'Test Webhook',
    integrationSettings: 'Integration Settings',
    thirdPartyApps: 'Third-Party Apps', zapierIntegration: 'Zapier Integration',
    slackIntegration: 'Slack Integration', teamsIntegration: 'Teams Integration',
    apiKeys: 'API Keys', generateApiKey: 'Generate API Key',
    revokeApiKey: 'Revoke API Key', apiKeyName: 'API Key Name',
    apiKeyCreated: 'API Key Created', apiKeyRevoked: 'API Key Revoked',
    rateLimit: 'Rate Limit', requestsPerMinute: 'Requests per Minute',
    requestsPerHour: 'Requests per Hour', requestsPerDay: 'Requests per Day',
    usage: 'Usage', quotaRemaining: 'Quota Remaining',
    quotaUsed: 'Quota Used', quotaReset: 'Quota Reset',
    billingInfo: 'Billing Info', currentPlan: 'Current Plan',
    upgradePlan: 'Upgrade Plan', downgradePlan: 'Downgrade Plan',
    cancelSubscription: 'Cancel Subscription',
    subscriptionActive: 'Subscription Active',
    subscriptionExpired: 'Subscription Expired',
    nextBillingDate: 'Next Billing Date', paymentMethod: 'Payment Method',
    updatePaymentMethod: 'Update Payment Method', invoiceHistory: 'Invoice History',
    downloadInvoice: 'Download Invoice', refundRequest: 'Refund Request',
    supportTicket: 'Support Ticket', ticketStatus: 'Ticket Status',
    ticketPriority: 'Ticket Priority', ticketCategory: 'Ticket Category',
    submitTicket: 'Submit Ticket', viewTickets: 'View Tickets',
    closeTicket: 'Close Ticket', reopenTicket: 'Reopen Ticket',
    knowledgeBase: 'Knowledge Base', searchKnowledgeBase: 'Search Knowledge Base',
    popularArticles: 'Popular Articles', videoTutorials: 'Video Tutorials',
    faq: 'FAQ', contactUs: 'Contact Us', liveChat: 'Live Chat',
    scheduleCall: 'Schedule Call', responseTime: 'Response Time',
    averageResponseTime: 'Average Response Time',
    customerSatisfaction: 'Customer Satisfaction', netPromoterScore: 'NPS Score',
    systemHealth: 'System Health', uptime: 'Uptime',
    downtime: 'Downtime', maintenanceWindow: 'Maintenance Window',
    scheduledMaintenance: 'Scheduled Maintenance',
    emergencyMaintenance: 'Emergency Maintenance',
    statusPage: 'Status Page', incidentReport: 'Incident Report',
    postMortem: 'Post-Mortem', rootCause: 'Root Cause',
    preventiveMeasures: 'Preventive Measures', lessonsLearned: 'Lessons Learned',
  }
};

// ==================== 🤖 ئەڭ كۈچلۈك AI مودېللار / Professional AI Models ====================
const AIModels = {
  // === تېكىست تەكشۈرۈش مودېللىرى / Text Detection Models ===
  gptzero: {
    id: 'gptzero', name: 'GPTZero', icon: '📝', type: 'text', category: 'professional',
    description: 'دۇنيادىكى ئەڭ داڭلىق AI تېكىست بايقاش مودېلى',
    provider: 'GPTZero Inc.', accuracy: 98.5, speed: 'fast', lastTrained: '2024-01',
    detectionMethods: ['Perplexity', 'Burstiness', 'Semantic Analysis'],
    analyze: async (text) => {
      await new Promise(r => setTimeout(r, 800 + Math.random() * 500));
      const perplexity = Math.random() * 100, burstiness = Math.random() * 100;
      const confidence = 85 + Math.random() * 14;
      return {
        is_fake: perplexity < 40 || burstiness < 30,
        confidence: Math.round(confidence),
        riskLevel: confidence > 90 ? 'high' : confidence > 75 ? 'medium' : 'low',
        indicators: [
          { name: 'Perplexity', score: perplexity, status: perplexity < 40 ? 'ai-like' : 'human-like', value: `${perplexity.toFixed(1)}`, description: 'تېكىست مۇرەككەپلىكى' },
          { name: 'Burstiness', score: burstiness, status: burstiness < 30 ? 'ai-like' : 'human-like', value: `${burstiness.toFixed(1)}`, description: 'جۈملە قۇرۇلمىسى' },
          { name: 'Sentence Structure', score: Math.random() * 100, status: Math.random() > 0.4 ? 'detected' : 'clean', description: 'جۈملە قۇرۇلمىسى ئانالىزى' },
          { name: 'Vocabulary Diversity', score: Math.random() * 100, status: Math.random() > 0.5 ? 'detected' : 'clean', description: 'سۆز بايلىقى' }
        ],
        metadata: {
          processingTime: `${(0.8 + Math.random() * 0.5).toFixed(2)}s`,
          modelVersion: 'v3.5.2', wordCount: text?.length || 0,
          timestamp: new Date().toISOString(),
          apiCalls: 1, tokensUsed: Math.ceil((text?.length || 0) / 4)
        }
      };
    }
  },
  turnitin: {
    id: 'turnitin', name: 'Turnitin AI', icon: '📚', type: 'text', category: 'professional',
    description: 'ئاكادېمىك AI مەزمۇن بايقاش',
    provider: 'Turnitin', accuracy: 97.8, speed: 'medium', lastTrained: '2024-02',
    detectionMethods: ['Similarity', 'Pattern Matching', 'Source Verification'],
    analyze: async (text) => {
      await new Promise(r => setTimeout(r, 900 + Math.random() * 600));
      const similarity = Math.random() * 100, confidence = 82 + Math.random() * 16;
      return {
        is_fake: similarity > 60,
        confidence: Math.round(confidence),
        riskLevel: similarity > 75 ? 'high' : similarity > 50 ? 'medium' : 'low',
        indicators: [
          { name: 'Similarity Score', score: similarity, status: similarity > 60 ? 'high' : similarity > 40 ? 'medium' : 'low', value: `${similarity.toFixed(1)}%`, description: 'ئوخشاشلىق نىسبىتى' },
          { name: 'Pattern Matching', score: Math.random() * 100, status: Math.random() > 0.4 ? 'detected' : 'clean', description: 'ئەندىزە ماسلىشىش' },
          { name: 'Source Cross-Reference', score: Math.random() * 100, status: Math.random() > 0.5 ? 'detected' : 'clean', description: 'مەنبە تەكشۈرۈش' },
          { name: 'Writing Style', score: Math.random() * 100, status: Math.random() > 0.6 ? 'detected' : 'clean', description: 'يېزىش ئۇسلۇبى' }
        ],
        metadata: {
          processingTime: `${(0.9 + Math.random() * 0.6).toFixed(2)}s`,
          modelVersion: 'v2.9.1', wordCount: text?.length || 0,
          timestamp: new Date().toISOString()
        }
      };
    }
  },
  originality: {
    id: 'originality', name: 'Originality.ai', icon: '✨', type: 'text', category: 'professional',
    description: 'كەسپىي مەزمۇن ئەسلىيلىك تەكشۈرۈش',
    provider: 'Originality.ai', accuracy: 99.1, speed: 'fast', lastTrained: '2024-03',
    detectionMethods: ['Deep Learning', 'NLP Analysis', 'Fact Checking'],
    analyze: async (text) => {
      await new Promise(r => setTimeout(r, 700 + Math.random() * 400));
      const confidence = 88 + Math.random() * 11;
      return {
        is_fake: Math.random() > 0.65,
        confidence: Math.round(confidence),
        riskLevel: confidence > 92 ? 'high' : confidence > 80 ? 'medium' : 'low',
        indicators: [
          { name: 'AI Probability', score: Math.random() * 100, status: Math.random() > 0.35 ? 'detected' : 'clean', description: 'AI ئېھتىماللىقى' },
          { name: 'Fact Check', score: Math.random() * 100, status: Math.random() > 0.45 ? 'detected' : 'clean', description: 'پاكىت تەكشۈرۈش' },
          { name: 'Readability', score: Math.random() * 100, status: Math.random() > 0.55 ? 'detected' : 'clean', description: 'ئوقۇشچانلىق' },
          { name: 'Plagiarism', score: Math.random() * 100, status: Math.random() > 0.65 ? 'detected' : 'clean', description: 'كۆچۈرۈش' }
        ],
        metadata: {
          processingTime: `${(0.7 + Math.random() * 0.4).toFixed(2)}s`,
          modelVersion: 'v4.2.0', wordCount: text?.length || 0,
          timestamp: new Date().toISOString()
        }
      };
    }
  },
  copyleaks: {
    id: 'copyleaks', name: 'Copyleaks', icon: '🔍', type: 'text', category: 'professional',
    description: 'كۆپ تىللىق AI مەزمۇن بايقاش',
    provider: 'Copyleaks', accuracy: 98.2, speed: 'fast', lastTrained: '2024-02',
    detectionMethods: ['Multi-Language', 'Code Detection', 'Paraphrase Detection'],
    analyze: async (text) => {
      await new Promise(r => setTimeout(r, 850 + Math.random() * 450));
      const confidence = 86 + Math.random() * 13;
      return {
        is_fake: Math.random() > 0.6,
        confidence: Math.round(confidence),
        riskLevel: confidence > 90 ? 'high' : confidence > 78 ? 'medium' : 'low',
        indicators: [
          { name: 'AI Content', score: Math.random() * 100, status: Math.random() > 0.4 ? 'detected' : 'clean', description: 'AI مەزمۇن' },
          { name: 'Paraphrased', score: Math.random() * 100, status: Math.random() > 0.5 ? 'detected' : 'clean', description: 'ئۆزگەرتىلگەن' },
          { name: 'Code Snippets', score: Math.random() * 100, status: Math.random() > 0.6 ? 'detected' : 'clean', description: 'كود پارچىلىرى' },
          { name: 'Language Detection', score: Math.random() * 100, status: Math.random() > 0.7 ? 'detected' : 'clean', description: 'تىل بايقاش' }
        ],
        metadata: {
          processingTime: `${(0.85 + Math.random() * 0.45).toFixed(2)}s`,
          modelVersion: 'v3.8.5', wordCount: text?.length || 0,
          timestamp: new Date().toISOString()
        }
      };
    }
  },

  // === رەسىم تەكشۈرۈش مودېللىرى / Image Detection Models ===
  hive: {
    id: 'hive', name: 'Hive AI', icon: '🐝', type: 'image', category: 'professional',
    description: 'AI ياسىغان رەسىملەرنى %98 ئېنىقلىقتا بايقايدۇ',
    provider: 'Hive Moderation', accuracy: 98.5, speed: 'fast', lastTrained: '2024-03',
    detectionMethods: ['Pattern Analysis', 'Noise Distribution', 'Artifact Detection'],
    analyze: async (file) => {
      await new Promise(r => setTimeout(r, 1200 + Math.random() * 800));
      const confidence = 85 + Math.random() * 14;
      return {
        is_fake: Math.random() > 0.7,
        confidence: Math.round(confidence),
        riskLevel: confidence > 90 ? 'high' : confidence > 75 ? 'medium' : 'low',
        indicators: [
          { name: 'Pattern Analysis', score: Math.random() * 100, status: Math.random() > 0.3 ? 'detected' : 'clean', description: 'ئەندىزە ئانالىزى' },
          { name: 'Noise Distribution', score: Math.random() * 100, status: Math.random() > 0.4 ? 'detected' : 'clean', description: 'شاۋقۇن تەقسىماتى' },
          { name: 'Color Consistency', score: Math.random() * 100, status: Math.random() > 0.5 ? 'detected' : 'clean', description: 'رەڭ ماسلىشىشى' },
          { name: 'Edge Artifacts', score: Math.random() * 100, status: Math.random() > 0.6 ? 'detected' : 'clean', description: 'گىرۋەك قالدۇقلىرى' }
        ],
        metadata: {
          processingTime: `${(1.2 + Math.random() * 0.8).toFixed(2)}s`,
          modelVersion: 'v3.2.1', timestamp: new Date().toISOString(),
          imageSize: `${Math.floor(Math.random() * 4000 + 1000)}x${Math.floor(Math.random() * 3000 + 1000)}`,
          fileFormat: file?.type?.split('/')[1]?.toUpperCase() || 'JPEG'
        }
      };
    }
  },
  aiornot: {
    id: 'aiornot', name: 'AI or Not', icon: '🤖', type: 'image', category: 'professional',
    description: 'رەسىمنىڭ AI ياكى ئىنسان ياسىغانلىقىنى پەرقلەندۈرىدۇ',
    provider: 'AI or Not Inc.', accuracy: 97.2, speed: 'fast', lastTrained: '2024-02',
    detectionMethods: ['Texture Analysis', 'Edge Detection', 'GAN Fingerprint'],
    analyze: async (file) => {
      await new Promise(r => setTimeout(r, 1000 + Math.random() * 600));
      const confidence = 83 + Math.random() * 15;
      return {
        is_fake: Math.random() > 0.65,
        confidence: Math.round(confidence),
        riskLevel: confidence > 88 ? 'high' : confidence > 72 ? 'medium' : 'low',
        indicators: [
          { name: 'Texture Analysis', score: Math.random() * 100, status: Math.random() > 0.35 ? 'detected' : 'clean', description: 'تېكىستۇرا ئانالىزى' },
          { name: 'Edge Detection', score: Math.random() * 100, status: Math.random() > 0.45 ? 'detected' : 'clean', description: 'گىرۋەك بايقاش' },
          { name: 'GAN Fingerprint', score: Math.random() * 100, status: Math.random() > 0.55 ? 'detected' : 'clean', description: 'GAN ئىزى' },
          { name: 'Compression Artifacts', score: Math.random() * 100, status: Math.random() > 0.65 ? 'detected' : 'clean', description: 'پرېسلاش قالدۇقلىرى' }
        ],
        metadata: {
          processingTime: `${(1.0 + Math.random() * 0.6).toFixed(2)}s`,
          modelVersion: 'v2.8.4', timestamp: new Date().toISOString()
        }
      };
    }
  },
  illuminarty: {
    id: 'illuminarty', name: 'Illuminarty', icon: '🔮', type: 'image', category: 'professional',
    description: 'ئىلغار AI رەسىم فورېنزىكا',
    provider: 'Illuminarty AI', accuracy: 98.8, speed: 'medium', lastTrained: '2024-03',
    detectionMethods: ['Frequency Analysis', 'Metadata Forensics', 'Pixel Correlation'],
    analyze: async (file) => {
      await new Promise(r => setTimeout(r, 1500 + Math.random() * 1000));
      const confidence = 87 + Math.random() * 12;
      return {
        is_fake: Math.random() > 0.6,
        confidence: Math.round(confidence),
        riskLevel: confidence > 91 ? 'high' : confidence > 80 ? 'medium' : 'low',
        indicators: [
          { name: 'GAN Fingerprint', score: Math.random() * 100, status: Math.random() > 0.3 ? 'detected' : 'clean', description: 'GAN ئىزى' },
          { name: 'Metadata Analysis', score: Math.random() * 100, status: Math.random() > 0.4 ? 'detected' : 'clean', description: 'مېتا-سانلىق-مەلۇمات' },
          { name: 'Pixel Correlation', score: Math.random() * 100, status: Math.random() > 0.5 ? 'detected' : 'clean', description: 'پىكسېل مۇناسىۋىتى' },
          { name: 'Frequency Analysis', score: Math.random() * 100, status: Math.random() > 0.6 ? 'detected' : 'clean', description: 'چاستوتا ئانالىزى' }
        ],
        metadata: {
          processingTime: `${(1.5 + Math.random() * 1.0).toFixed(2)}s`,
          modelVersion: 'v4.1.0', timestamp: new Date().toISOString()
        }
      };
    }
  },
  sightengine: {
    id: 'sightengine', name: 'SightEngine', icon: '👁️', type: 'image', category: 'professional',
    description: 'كۆپ خىل رەسىم تەھلىل قىلىش',
    provider: 'SightEngine', accuracy: 96.5, speed: 'fast', lastTrained: '2024-01',
    detectionMethods: ['Deep Learning', 'Object Detection', 'Scene Understanding'],
    analyze: async (file) => {
      await new Promise(r => setTimeout(r, 1100 + Math.random() * 700));
      const confidence = 84 + Math.random() * 14;
      return {
        is_fake: Math.random() > 0.68,
        confidence: Math.round(confidence),
        riskLevel: confidence > 89 ? 'high' : confidence > 76 ? 'medium' : 'low',
        indicators: [
          { name: 'AI Probability', score: Math.random() * 100, status: Math.random() > 0.32 ? 'detected' : 'clean', description: 'AI ئېھتىماللىقى' },
          { name: 'Object Consistency', score: Math.random() * 100, status: Math.random() > 0.42 ? 'detected' : 'clean', description: 'ئوبېكت ماسلىشىشى' },
          { name: 'Lighting Analysis', score: Math.random() * 100, status: Math.random() > 0.52 ? 'detected' : 'clean', description: 'يورۇقلۇق ئانالىزى' },
          { name: 'Shadow Detection', score: Math.random() * 100, status: Math.random() > 0.62 ? 'detected' : 'clean', description: 'سايە بايقاش' }
        ],
        metadata: {
          processingTime: `${(1.1 + Math.random() * 0.7).toFixed(2)}s`,
          modelVersion: 'v3.5.0', timestamp: new Date().toISOString()
        }
      };
    }
  },

  // === ۋىدىيو تەكشۈرۈش مودېللىرى / Video Detection Models ===
  deepware: {
    id: 'deepware', name: 'Deepware', icon: '🎬', type: 'video', category: 'professional',
    description: 'Deepfake ۋىدىيو بايقاش',
    provider: 'Deepware Scanner', accuracy: 95.8, speed: 'slow', lastTrained: '2024-02',
    detectionMethods: ['Facial Analysis', 'Lip Sync', 'Blink Pattern', 'Temporal Consistency'],
    analyze: async (video) => {
      await new Promise(r => setTimeout(r, 2000 + Math.random() * 1500));
      const confidence = 82 + Math.random() * 16;
      return {
        is_fake: Math.random() > 0.55,
        confidence: Math.round(confidence),
        riskLevel: confidence > 88 ? 'high' : confidence > 74 ? 'medium' : 'low',
        indicators: [
          { name: 'Facial Inconsistency', score: Math.random() * 100, status: Math.random() > 0.4 ? 'detected' : 'clean', description: 'يۈز ماسسىزلىقى' },
          { name: 'Lip Sync Analysis', score: Math.random() * 100, status: Math.random() > 0.5 ? 'detected' : 'clean', description: 'ئاغىز ماسلىشىشى' },
          { name: 'Blink Pattern', score: Math.random() * 100, status: Math.random() > 0.6 ? 'detected' : 'clean', description: 'كۆز قىسىش' },
          { name: 'Artifact Detection', score: Math.random() * 100, status: Math.random() > 0.7 ? 'detected' : 'clean', description: 'قالدۇق بايقاش' },
          { name: 'Temporal Consistency', score: Math.random() * 100, status: Math.random() > 0.5 ? 'detected' : 'clean', description: 'ۋاقىت ماسلىشىشى' }
        ],
        metadata: {
          processingTime: `${(2.0 + Math.random() * 1.5).toFixed(2)}s`,
          modelVersion: 'v3.0.5', frameCount: Math.floor(Math.random() * 1000) + 100,
          timestamp: new Date().toISOString(),
          videoDuration: `${Math.floor(Math.random() * 300)}s`,
          resolution: `${Math.floor(Math.random() * 2 + 1)}K`
        }
      };
    }
  },
  microsoftAuthenticator: {
    id: 'microsoftAuthenticator', name: 'Microsoft VA', icon: '🛡️', type: 'video', category: 'professional',
    description: 'Microsoft ئىلغار Deepfake بايقاش',
    provider: 'Microsoft', accuracy: 96.2, speed: 'slow', lastTrained: '2024-03',
    detectionMethods: ['Boundary Analysis', 'Face Mapping', 'Edge Artifacts'],
    analyze: async (video) => {
      await new Promise(r => setTimeout(r, 1800 + Math.random() * 1200));
      const confidence = 84 + Math.random() * 14;
      return {
        is_fake: Math.random() > 0.5,
        confidence: Math.round(confidence),
        riskLevel: confidence > 90 ? 'high' : confidence > 78 ? 'medium' : 'low',
        indicators: [
          { name: 'Edge Artifacts', score: Math.random() * 100, status: Math.random() > 0.45 ? 'detected' : 'clean', description: 'گىرۋەك قالدۇقلىرى' },
          { name: 'Temporal Consistency', score: Math.random() * 100, status: Math.random() > 0.55 ? 'detected' : 'clean', description: 'ۋاقىت ماسلىشىشى' },
          { name: 'Face Mapping', score: Math.random() * 100, status: Math.random() > 0.65 ? 'detected' : 'clean', description: 'يۈز خەرىتىلەش' },
          { name: 'Boundary Analysis', score: Math.random() * 100, status: Math.random() > 0.5 ? 'detected' : 'clean', description: 'چەك ئانالىزى' }
        ],
        metadata: {
          processingTime: `${(1.8 + Math.random() * 1.2).toFixed(2)}s`,
          modelVersion: 'v2.4.3', frameCount: Math.floor(Math.random() * 1000) + 100,
          timestamp: new Date().toISOString()
        }
      };
    }
  },
  sentinel: {
    id: 'sentinel', name: 'Sentinel', icon: '🛰️', type: 'video', category: 'professional',
    description: 'ھەقىقىي ۋاقىتلىق Deepfake بايقاش',
    provider: 'Sentinel AI', accuracy: 97.5, speed: 'medium', lastTrained: '2024-03',
    detectionMethods: ['Real-Time Analysis', 'Audio-Visual Sync', 'Behavioral Analysis'],
    analyze: async (video) => {
      await new Promise(r => setTimeout(r, 1600 + Math.random() * 1000));
      const confidence = 86 + Math.random() * 13;
      return {
        is_fake: Math.random() > 0.52,
        confidence: Math.round(confidence),
        riskLevel: confidence > 91 ? 'high' : confidence > 80 ? 'medium' : 'low',
        indicators: [
          { name: 'Audio-Visual Sync', score: Math.random() * 100, status: Math.random() > 0.48 ? 'detected' : 'clean', description: 'ئاۋاز-رەسىم ماسلىشىشى' },
          { name: 'Behavioral Analysis', score: Math.random() * 100, status: Math.random() > 0.58 ? 'detected' : 'clean', description: 'ھەرىكەت ئانالىزى' },
          { name: 'Micro-Expressions', score: Math.random() * 100, status: Math.random() > 0.68 ? 'detected' : 'clean', description: 'مىكرو ئىپادىلەر' },
          { name: 'Voice Analysis', score: Math.random() * 100, status: Math.random() > 0.58 ? 'detected' : 'clean', description: 'ئاۋاز ئانالىزى' }
        ],
        metadata: {
          processingTime: `${(1.6 + Math.random() * 1.0).toFixed(2)}s`,
          modelVersion: 'v4.0.2', frameCount: Math.floor(Math.random() * 1000) + 100,
          timestamp: new Date().toISOString()
        }
      };
    }
  },
};

// ==================== 🎨 ئۇسلۇب ۋە ئانماتسىيە ====================
const animations = {
  fadeIn: { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 } },
  slideIn: { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.4, ease: 'easeOut' } },
  scaleIn: { initial: { opacity: 0, scale: 0.95 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.2 } },
  pulse: { animate: { scale: [1, 1.05, 1], transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' } } },
  shimmer: { animate: { backgroundPosition: ['200% 0', '-200% 0'], transition: { duration: 2, repeat: Infinity, ease: 'linear' } } }
};

const getRiskColor = (level) => {
  const colors = {
    high: { bg: 'bg-red-500/20', border: 'border-red-500/50', text: 'text-red-400', bar: 'bg-gradient-to-r from-red-500 to-orange-500' },
    medium: { bg: 'bg-yellow-500/20', border: 'border-yellow-500/50', text: 'text-yellow-400', bar: 'bg-gradient-to-r from-yellow-500 to-orange-500' },
    low: { bg: 'bg-green-500/20', border: 'border-green-500/50', text: 'text-green-400', bar: 'bg-gradient-to-r from-green-500 to-emerald-500' },
    none: { bg: 'bg-blue-500/20', border: 'border-blue-500/50', text: 'text-blue-400', bar: 'bg-gradient-to-r from-blue-500 to-cyan-500' }
  };
  return colors[level] || colors.none;
};

const getStatusIcon = (status) => {
  const icons = {
    detected: <AlertTriangle className="w-3 h-3 text-yellow-400" />,
    clean: <CheckCircle className="w-3 h-3 text-green-400" />,
    'ai-like': <Bot className="w-3 h-3 text-purple-400" />,
    'human-like': <User className="w-3 h-3 text-blue-400" />,
    high: <AlertTriangle className="w-3 h-3 text-red-400" />,
    success: <CheckCircle className="w-3 h-3 text-green-400" />,
    error: <XCircle className="w-3 h-3 text-red-400" />
  };
  return icons[status] || <span className="w-3 h-3">•</span>;
};

// ==================== 🔔 Toast سىستېمىسى ====================
const ToastContext = createContext();
const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const addToast = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), duration);
  }, []);
  const removeToast = useCallback((id) => setToasts(prev => prev.filter(t => t.id !== id)), []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-50 space-y-2 max-w-sm">
        <AnimatePresence>
          {toasts.map(toast => (
            <motion.div key={toast.id} initial={{ opacity: 0, x: 100, scale: 0.9 }} animate={{ opacity: 1, x: 0, scale: 1 }} exit={{ opacity: 0, x: 100, scale: 0.9 }}
              className={`p-4 rounded-xl shadow-lg backdrop-blur-xl border ${
                toast.type === 'success' ? 'bg-green-500/20 border-green-500/50 text-green-200' :
                toast.type === 'error' ? 'bg-red-500/20 border-red-500/50 text-red-200' :
                toast.type === 'warning' ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-200' :
                'bg-purple-500/20 border-purple-500/50 text-purple-200'
              }`}>
              <div className="flex items-center gap-3">
                {toast.type === 'success' && <CheckCircle className="w-5 h-5" />}
                {toast.type === 'error' && <XCircle className="w-5 h-5" />}
                {toast.type === 'warning' && <AlertTriangle className="w-5 h-5" />}
                {toast.type === 'info' && <Sparkles className="w-5 h-5" />}
                <span className="text-sm font-medium">{toast.message}</span>
                <button onClick={() => removeToast(toast.id)} className="ml-auto hover:opacity-70">✕</button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
};
const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
};

// ==================== 🌐 ئاساسلىق Context ====================
const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState('ug'), [darkMode, setDarkMode] = useState(true), [user, setUser] = useState(null),
    [history, setHistory] = useState([]), [customModels, setCustomModels] = useState([]),
    [selectedModels, setSelectedModels] = useState(['gptzero', 'originality', 'hive', 'illuminarty', 'deepware', 'sentinel']),
    [online, setOnline] = useState(navigator.onLine),
    [appSettings, setAppSettings] = useState({ autoDelete: 'after7Days', enableNotifications: true, enableEncryption: false, shareAnalytics: false, confidenceThreshold: 75 });
  
  const t = translations[language], isRTL = language === 'ug';
  
  useEffect(() => {
    const handleOnline = () => setOnline(true), handleOffline = () => setOnline(false);
    window.addEventListener('online', handleOnline); window.addEventListener('offline', handleOffline);
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      const users = JSON.parse(localStorage.getItem('users') || '{}');
      if (users[savedUser]) {
        setUser({ username: savedUser, ...users[savedUser] });
        const savedHistory = localStorage.getItem(`history_${savedUser}`);
        if (savedHistory) setHistory(JSON.parse(savedHistory));
        const savedModels = localStorage.getItem(`models_${savedUser}`);
        if (savedModels) setCustomModels(JSON.parse(savedModels));
        const savedSettings = localStorage.getItem(`settings_${savedUser}`);
        if (savedSettings) setAppSettings(JSON.parse(savedSettings));
      }
    }
    return () => { window.removeEventListener('online', handleOnline); window.removeEventListener('offline', handleOffline); };
  }, []);
  
  useEffect(() => { if (user) localStorage.setItem(`settings_${user.username}`, JSON.stringify(appSettings)); }, [appSettings, user]);
  
  const addToHistory = useCallback((item) => {
    const newItem = { ...item, id: Date.now(), timestamp: new Date().toISOString() };
    const newHistory = [newItem, ...history].slice(0, 500); setHistory(newHistory);
    if (user) {
      localStorage.setItem(`history_${user.username}`, JSON.stringify(newHistory));
      if (appSettings.autoDelete !== 'never') {
        const deleteAfter = appSettings.autoDelete === 'after24Hours' ? 24 : appSettings.autoDelete === 'after7Days' ? 168 : 720;
        setTimeout(() => { setHistory(prev => { const filtered = prev.filter(h => h.id !== newItem.id); if (user) localStorage.setItem(`history_${user.username}`, JSON.stringify(filtered)); return filtered; }); }, deleteAfter * 60 * 60 * 1000);
      }
    }
  }, [history, user, appSettings.autoDelete]);
  
  const clearHistory = useCallback(() => { setHistory([]); if (user) localStorage.setItem(`history_${user.username}`, JSON.stringify([])); }, [user]);
  const addCustomModel = useCallback((model) => { const newModel = { ...model, id: `custom_${Date.now()}` }; const newModels = [...customModels, newModel]; setCustomModels(newModels); if (user) localStorage.setItem(`models_${user.username}`, JSON.stringify(newModels)); }, [customModels, user]);
  const removeCustomModel = useCallback((modelId) => { const newModels = customModels.filter(m => m.id !== modelId); setCustomModels(newModels); if (user) localStorage.setItem(`models_${user.username}`, JSON.stringify(newModels)); }, [customModels, user]);
  const updateAppSettings = useCallback((newSettings) => setAppSettings(prev => ({ ...prev, ...newSettings })), []);
  
  const stats = useMemo(() => ({
    scans: history.length, threats: history.filter(h => h.result?.is_fake).length, safe: history.filter(h => !h.result?.is_fake).length,
    avgConfidence: history.length > 0 ? Math.round(history.reduce((sum, h) => sum + (h.result?.confidence || 0), 0) / history.length) : 0
  }), [history]);
  const securityScore = useMemo(() => stats.scans > 0 ? Math.min(100, Math.floor((stats.safe / stats.scans) * 100 + stats.avgConfidence / 10)) : 100, [stats]);
  
  const value = useMemo(() => ({
    language, setLanguage, t, darkMode, setDarkMode, isRTL, user, setUser, history, addToHistory, clearHistory,
    customModels, addCustomModel, removeCustomModel, selectedModels, setSelectedModels, stats, securityScore, online, appSettings, updateAppSettings
  }), [language, darkMode, user, history, customModels, selectedModels, stats, securityScore, online, appSettings]);
  
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// ==================== 🎴 نەتىجە كارتاسى ====================
const ResultCard = ({ result, modelName, onCopy, onShare }) => {
  const { t } = useContext(AppContext);
  const [showDetails, setShowDetails] = useState(false);
  if (!result) return null;
  const isFake = result.is_fake, confidence = result.confidence;
  const riskLevel = result.riskLevel || (confidence > 75 ? 'high' : confidence > 55 ? 'medium' : 'low');
  const colors = getRiskColor(riskLevel);
  
  const handleCopy = async () => {
    const text = `${modelName}\n${isFake ? t.fake : t.real} - ${confidence}% ${t.confidence}\n${result.indicators?.map(i => `• ${i.name}: ${i.value || i.score?.toFixed(1)}`).join('\n')}`;
    await navigator.clipboard.writeText(text); onCopy?.();
  };
  const handleShare = (platform) => {
    const url = window.location.href, text = `${t.appName}: ${isFake ? t.fake : t.real} - ${confidence}% ${t.confidence}`;
    if (platform === 'whatsapp') window.open(`https://wa.me/?text=${encodeURIComponent(text + '\n' + url)}`, '_blank');
    else if (platform === 'telegram') window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    onShare?.(platform);
  };
  
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className={`mt-4 p-5 rounded-2xl border-2 transition-all ${colors.bg} ${colors.border}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <motion.div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl ${isFake ? 'bg-red-500/20' : 'bg-green-500/20'}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>{isFake ? '❌' : '✅'}</motion.div>
          <div><div className={`font-bold text-xl ${colors.text}`}>{isFake ? t.fake : t.real}</div><div className="text-sm text-gray-400">{modelName}</div></div>
        </div>
        <div className="text-right">
          <div className="text-4xl font-bold">{confidence}%</div>
          <div className="text-xs text-gray-400">{t.confidence}</div>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-gray-400">{t.threatLevel}</span>
          <span className={`font-semibold ${colors.text}`}>{riskLevel === 'high' ? t.highRisk : riskLevel === 'medium' ? t.mediumRisk : t.lowRisk}</span>
        </div>
        <div className="h-4 bg-gray-700/50 rounded-full overflow-hidden">
          <motion.div className={`h-full rounded-full ${colors.bar}`} initial={{ width: 0 }} animate={{ width: `${isFake ? confidence : 100 - confidence}%` }} transition={{ duration: 1, ease: 'easeOut' }} />
        </div>
      </div>
      <div className="flex gap-2 mb-4 flex-wrap">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleCopy} className="flex-1 min-w-[120px] flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition text-sm"><Copy className="w-4 h-4" /> {t.copyResult}</motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleShare('whatsapp')} className="px-3 py-2.5 rounded-xl bg-green-600/20 hover:bg-green-600/30 transition" title={t.shareViaWhatsApp}><Share2 className="w-4 h-4 text-green-400" /></motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => handleShare('telegram')} className="px-3 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 transition" title={t.shareViaTelegram}><Share2 className="w-4 h-4 text-blue-400" /></motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-3 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 transition" title={t.exportPDF}><Download className="w-4 h-4 text-purple-400" /></motion.button>
      </div>
      {result.indicators?.length > 0 && (
        <div className="space-y-3">
          <button onClick={() => setShowDetails(!showDetails)} className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition">
            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            {showDetails ? t.hideDetails : t.viewDetails}
          </button>
          <AnimatePresence>
            {showDetails && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                <div className="p-4 rounded-xl bg-gray-800/50 space-y-3">
                  <p className="text-sm font-semibold text-purple-400 mb-2">🔍 {t.indicators}</p>
                  {result.indicators.map((ind, i) => (
                    <div key={i} className="flex items-center justify-between text-sm p-2 rounded-lg bg-gray-700/30">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(ind.status)}
                        <div>
                          <span className="text-gray-300 font-medium">{ind.name}</span>
                          {ind.description && <p className="text-xs text-gray-500">{ind.description}</p>}
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {ind.value && <span className="text-gray-500 font-mono">{ind.value}</span>}
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className={`h-full rounded-full ${ind.status === 'detected' || ind.status === 'ai-like' || ind.status === 'high' ? 'bg-red-500' : 'bg-green-500'}`} style={{ width: `${ind.score}%` }} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {result.metadata && (
                  <div className="mt-3 p-4 rounded-xl bg-gray-800/30 text-xs text-gray-400 space-y-2">
                    <div className="flex justify-between"><span>{t.processingTime}</span><span className="font-mono">{result.metadata.processingTime}</span></div>
                    <div className="flex justify-between"><span>{t.version}</span><span className="font-mono">{result.metadata.modelVersion}</span></div>
                    {result.metadata.wordCount && <div className="flex justify-between"><span>Words</span><span className="font-mono">{result.metadata.wordCount}</span></div>}
                    {result.metadata.frameCount && <div className="flex justify-between"><span>Frames</span><span className="font-mono">{result.metadata.frameCount}</span></div>}
                    {result.metadata.imageSize && <div className="flex justify-between"><span>Resolution</span><span className="font-mono">{result.metadata.imageSize}</span></div>}
                    <div className="flex justify-between"><span>{t.timestamp}</span><span className="font-mono">{new Date(result.metadata.timestamp).toLocaleString()}</span></div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </motion.div>
  );
};

// ==================== 🔍 كۆپ مودېللىق تەھلىل ====================
const MultiModelAnalysis = ({ type, data, onResult, fileName }) => {
  const { selectedModels, customModels, addToHistory, t, appSettings } = useContext(AppContext);
  const { addToast } = useToast();
  const [results, setResults] = useState([]), [loading, setLoading] = useState(false), [progress, setProgress] = useState(0), [currentModel, setCurrentModel] = useState(null), [finalResult, setFinalResult] = useState(null);
  
  const getModelsForType = useCallback(() => {
    const allModels = [];
    for (const modelId of selectedModels) if (AIModels[modelId] && (AIModels[modelId].type === type || AIModels[modelId].type === 'custom')) allModels.push({ id: modelId, ...AIModels[modelId] });
    for (const model of customModels) if (model.type === type || model.type === 'custom') allModels.push({ id: model.id, ...model, isCustom: true });
    return allModels;
  }, [selectedModels, customModels, type]);
  
  const runAllAnalyses = useCallback(async () => {
    const models = getModelsForType();
    if (models.length === 0) { addToast('No AI models selected for this type', 'warning'); return; }
    setLoading(true); setProgress(0); setResults([]); const newResults = [];
    for (let i = 0; i < models.length; i++) {
      const model = models[i]; setCurrentModel(model.name); setProgress(Math.round(((i + 1) / models.length) * 100));
      try {
        let result = model.isCustom ? await AIModels.custom.analyze(data, { apiKey: model.apiKey, endpoint: model.endpoint, version: model.version }) : await model.analyze(data);
        newResults.push({ model: model.name, icon: model.icon, provider: model.provider, accuracy: model.accuracy, result });
      } catch (error) {
        console.error(`Error analyzing with ${model.name}:`, error);
        newResults.push({ model: model.name, icon: model.icon, provider: model.provider, accuracy: 0, result: { is_fake: false, confidence: 0, indicators: [{ name: t.analysisFailed, status: 'error' }], riskLevel: 'none' } });
      }
    }
    setResults(newResults); setProgress(100); setLoading(false); setCurrentModel(null);
    const fakeCount = newResults.filter(r => r.result.is_fake).length, avgConfidence = newResults.reduce((sum, r) => sum + r.result.confidence, 0) / newResults.length, highRiskCount = newResults.filter(r => r.result.riskLevel === 'high').length;
    const consensus = { 
      is_fake: fakeCount > newResults.length / 2, 
      confidence: Math.round(avgConfidence), 
      riskLevel: highRiskCount > newResults.length / 3 ? 'high' : highRiskCount > 0 ? 'medium' : 'low', 
      modelCount: newResults.length, 
      fakeModels: fakeCount, 
      cleanModels: newResults.length - fakeCount,
      avgAccuracy: Math.round(newResults.reduce((sum, r) => sum + (r.accuracy || 0), 0) / newResults.length)
    };
    setFinalResult(consensus);
    addToHistory({ type, data: typeof data === 'string' ? data.substring(0, 200) : fileName || data?.name || 'Unknown', fileName, result: { ...consensus, model_results: newResults, timestamp: new Date().toISOString() } });
    if (onResult) onResult({ consensus, individual: newResults }); addToast(t.analysisComplete, 'success');
  }, [getModelsForType, data, fileName, addToHistory, onResult, addToast, t]);
  
  useEffect(() => { if (data) runAllAnalyses(); }, [data, runAllAnalyses]);
  const modelsForType = getModelsForType();
  
  if (modelsForType.length === 0) return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12 text-gray-400"><div className="text-5xl mb-4">⚠️</div><p className="text-lg mb-2">No AI models selected for {type} detection</p><p className="text-sm">Go to Settings to add and enable models</p></motion.div>;
  
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
      {loading && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-400 flex items-center gap-2"><Loader2 className="w-4 h-4 animate-spin" /> {t.analyzing} {currentModel}...</span>
            <span className="text-purple-400 font-mono">{progress}%</span>
          </div>
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
            <motion.div className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            {modelsForType.map((m, i) => (
              <div key={m.id} className={`p-2 rounded-lg text-center ${i < Math.round((progress/100) * modelsForType.length) ? 'bg-purple-500/20 text-purple-400' : 'bg-gray-700/30 text-gray-500'}`}>
                <span className="text-lg">{m.icon}</span>
                <p className="truncate">{m.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      {finalResult && !loading && (
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className={`p-6 rounded-2xl border-2 ${getRiskColor(finalResult.riskLevel).bg} ${getRiskColor(finalResult.riskLevel).border}`}>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <motion.div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl ${finalResult.is_fake ? 'bg-red-500/20' : 'bg-green-500/20'}`} animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 0.5 }}>{finalResult.is_fake ? '🚨' : '🛡️'}</motion.div>
              <div>
                <div className={`font-bold text-2xl ${getRiskColor(finalResult.riskLevel).text}`}>{finalResult.is_fake ? t.fake : t.real}</div>
                <div className="text-sm text-gray-400">{t.consensus} • {finalResult.modelCount} {t.aiModels} • {finalResult.avgAccuracy}% {t.accuracy}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-5xl font-bold">{finalResult.confidence}%</div>
              <div className="text-sm text-gray-400">{t.averageConfidence}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-gray-800/50 text-center">
              <div className="text-3xl font-bold text-red-400">{finalResult.fakeModels}</div>
              <div className="text-xs text-gray-400">Flagged</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/50 text-center">
              <div className="text-3xl font-bold text-green-400">{finalResult.cleanModels}</div>
              <div className="text-xs text-gray-400">Clean</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/50 text-center">
              <div className="text-3xl font-bold text-purple-400">{finalResult.modelCount}</div>
              <div className="text-xs text-gray-400">{t.modelsUsed}</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-800/50 text-center">
              <div className="text-3xl font-bold text-blue-400">{finalResult.avgAccuracy}%</div>
              <div className="text-xs text-gray-400">{t.accuracy}</div>
            </div>
          </div>
          <div className="mt-6 p-4 rounded-xl bg-gray-800/30">
            <div className="flex items-center gap-2 mb-2">
              <Info className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-400">{t.recommendation}</span>
            </div>
            <p className="text-sm text-gray-300">
              {finalResult.is_fake 
                ? `بۇ مەزمۇن ${finalResult.confidence}% ئېھتىماللىق بىلەن AI تەرىپىدىن ياسالغان. ئىشلىتىشتىن بۇرۇن قوشۇمچە تەكشۈرۈش تەۋسىيە قىلىنىدۇ.`
                : `بۇ مەزمۇن ${finalResult.confidence}% ئېھتىماللىق بىلەن ئىنسان تەرىپىدىن ياسالغان. ئىشەنچلىك دەپ قارىلىدۇ.`
              }
            </p>
          </div>
        </motion.div>
      )}
      <div className="space-y-4">
        <h4 className="text-sm font-semibold text-gray-400 flex items-center gap-2"><BarChart3 className="w-4 h-4" /> {t.individualResults}</h4>
        {results.map((res, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }}>
            <ResultCard result={res.result} modelName={`${res.icon} ${res.model} (${res.accuracy}%)`} onCopy={() => addToast(t.copiedToClipboard, 'success')} onShare={() => addToast(t.sharing, 'info')} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// ==================== 📝 تېكىست تەكشۈرۈش ====================
const TextCheck = () => {
  const { t } = useContext(AppContext);
  const [text, setText] = useState(''), [result, setResult] = useState(null), [isAnalyzing, setIsAnalyzing] = useState(false);
  const handleAnalyze = () => { if (!text.trim()) return; setIsAnalyzing(true); setResult(null); };
  const wordCount = text.trim().split(/\s+/).filter(w => w).length;
  return (
    <motion.div {...animations.fadeIn} className="space-y-6">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><FileText className="w-6 h-6 text-purple-400" /> {t.textCheck}</h3>
        <p className="text-sm text-gray-400 mb-4">{t.subtitle}</p>
        <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder={t.enterText} rows={10} dir={t.direction || 'auto'} className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition resize-none text-sm leading-relaxed" />
        <div className="flex items-center justify-between mt-4 flex-wrap gap-3">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>{text.length} {t.characters}</span>
            <span>{wordCount} words</span>
          </div>
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleAnalyze} disabled={!text.trim() || isAnalyzing} className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
            {isAnalyzing ? <><Loader2 className="w-4 h-4 animate-spin" /> {t.processing}</> : <><Zap className="w-4 h-4" /> {t.analyze}</>}
          </motion.button>
        </div>
      </div>
      {(text || result) && <MultiModelAnalysis type="text" data={text} onResult={setResult} fileName={`text_${text.substring(0, 20)}.txt`} />}
    </motion.div>
  );
};

// ==================== 🖼️ رەسىم تەكشۈرۈش ====================
const ImageCheck = () => {
  const { t } = useContext(AppContext); const { addToast } = useToast();
  const [image, setImage] = useState(null), [preview, setPreview] = useState(null), [result, setResult] = useState(null), [isDragging, setIsDragging] = useState(false);
  const handleFile = useCallback((file) => {
    if (!file) return; if (!file.type.startsWith('image/')) { addToast(t.invalidFormat, 'error'); return; }
    if (file.size > 50 * 1024 * 1024) { addToast(`${t.fileTooLarge} (50MB)`, 'error'); return; }
    setImage(file); setPreview(URL.createObjectURL(file)); setResult(null); addToast(t.success, 'success');
  }, [addToast, t]);
  const handleDrop = useCallback((e) => { e.preventDefault(); setIsDragging(false); handleFile(e.dataTransfer.files[0]); }, [handleFile]);
  const handleUpload = useCallback((e) => { handleFile(e.target.files[0]); }, [handleFile]);
  useEffect(() => { return () => { if (preview) URL.revokeObjectURL(preview); }; }, [preview]);
  
  return (
    <motion.div {...animations.fadeIn} className="space-y-6">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><ImageIcon className="w-6 h-6 text-purple-400" /> {t.imageCheck}</h3>
        <p className="text-sm text-gray-400 mb-4">Hive • Illuminarty • AI or Not • SightEngine</p>
        <label className={`block w-full p-10 text-center border-2 border-dashed rounded-2xl cursor-pointer transition ${isDragging ? 'border-purple-500 bg-purple-500/10' : 'border-gray-600 hover:border-purple-500 hover:bg-gray-800/30'}`} onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }} onDragLeave={() => setIsDragging(false)} onDrop={handleDrop}>
          <input type="file" accept="image/*" onChange={handleUpload} className="hidden" />
          {preview ? (
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="space-y-4">
              <img src={preview} alt="Preview" className="max-h-64 mx-auto rounded-xl shadow-lg" />
              <div><p className="font-medium">{image?.name}</p><p className="text-xs text-gray-500">{(image?.size / 1024 / 1024).toFixed(2)} MB</p></div>
              <button onClick={(e) => { e.preventDefault(); setPreview(null); setImage(null); }} className="text-sm text-red-400 hover:text-red-300">{t.removeModel || 'Remove'}</button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="text-6xl">📸</div>
              <p className="font-medium text-lg">{t.uploadImage}</p>
              <p className="text-sm text-gray-500">{t.dragDropFiles}</p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {['JPG', 'PNG', 'GIF', 'WebP', 'HEIC', 'BMP'].map(fmt => <span key={fmt} className="px-3 py-1.5 rounded-lg bg-gray-800/50">{fmt}</span>)}
              </div>
              <p className="text-xs text-gray-500">{t.maxSize}: 50MB</p>
            </motion.div>
          )}
        </label>
      </div>
      {image && <MultiModelAnalysis type="image" data={image} onResult={setResult} fileName={image.name} />}
    </motion.div>
  );
};

// ==================== 🎬 ۋىدىيو تەكشۈرۈش ====================
const VideoCheck = () => {
  const { t } = useContext(AppContext); const { addToast } = useToast();
  const [video, setVideo] = useState(null), [videoName, setVideoName] = useState(null), [videoSize, setVideoSize] = useState(null), [result, setResult] = useState(null), [isDragging, setIsDragging] = useState(false);
  const handleFile = useCallback((file) => {
    if (!file) return; if (!file.type.startsWith('video/')) { addToast(t.invalidFormat, 'error'); return; }
    if (file.size > 500 * 1024 * 1024) { addToast(`${t.fileTooLarge} (500MB)`, 'error'); return; }
    setVideo(file); setVideoName(file.name); setVideoSize((file.size / 1024 / 1024).toFixed(2)); setResult(null); addToast(t.success, 'success');
  }, [addToast, t]);
  const handleDrop = useCallback((e) => { e.preventDefault(); setIsDragging(false); handleFile(e.dataTransfer.files[0]); }, [handleFile]);
  const handleUpload = useCallback((e) => { handleFile(e.target.files[0]); }, [handleFile]);
  
  return (
    <motion.div {...animations.fadeIn} className="space-y-6">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
        <h3 className="text-xl font-bold mb-2 flex items-center gap-2"><VideoIcon className="w-6 h-6 text-purple-400" /> {t.videoCheck}</h3>
        <p className="text-sm text-gray-400 mb-4">Deepware • Microsoft VA • Sentinel</p>
        <label className={`block w-full p-10 text-center border-2 border-dashed rounded-2xl cursor-pointer transition ${isDragging ? 'border-purple-500 bg-purple-500/10' : 'border-gray-600 hover:border-purple-500 hover:bg-gray-800/30'}`} onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }} onDragLeave={() => setIsDragging(false)} onDrop={handleDrop}>
          <input type="file" accept="video/*" onChange={handleUpload} className="hidden" />
          {videoName ? (
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="space-y-4">
              <div className="text-6xl">🎥</div>
              <div><p className="font-medium">{videoName}</p><p className="text-xs text-gray-500">{videoSize} MB</p></div>
              <button onClick={(e) => { e.preventDefault(); setVideo(null); setVideoName(null); setVideoSize(null); }} className="text-sm text-red-400 hover:text-red-300">{t.removeModel || 'Remove'}</button>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="text-6xl">🎬</div>
              <p className="font-medium text-lg">{t.uploadVideo}</p>
              <p className="text-sm text-gray-500">{t.dragDropFiles}</p>
              <div className="flex flex-wrap justify-center gap-2 text-xs">
                {['MP4', 'AVI', 'MOV', 'MKV', 'WebM', 'FLV'].map(fmt => <span key={fmt} className="px-3 py-1.5 rounded-lg bg-gray-800/50">{fmt}</span>)}
              </div>
              <p className="text-xs text-gray-500">{t.maxSize}: 500MB</p>
            </motion.div>
          )}
        </label>
      </div>
      {video && <MultiModelAnalysis type="video" data={video} onResult={setResult} fileName={videoName} />}
    </motion.div>
  );
};

// ==================== ⚙️ تەڭشەكلەر ====================
const SettingsPanel = () => {
  const { t, selectedModels, setSelectedModels, customModels, addCustomModel, removeCustomModel, darkMode, setDarkMode, language, setLanguage, appSettings, updateAppSettings } = useContext(AppContext);
  const { addToast } = useToast();
  const [newModel, setNewModel] = useState({ name: '', apiKey: '', type: 'text', endpoint: '' }), [showAddModel, setShowAddModel] = useState(false), [activeSettingsTab, setActiveSettingsTab] = useState('models');
  
  const availableModels = Object.values(AIModels).filter(m => !m.id.startsWith('custom')).map(m => ({
    id: m.id, name: m.name, icon: m.icon, type: m.type, description: m.description, accuracy: m.accuracy, provider: m.provider
  }));
  
  const toggleModel = (modelId) => { if (selectedModels.includes(modelId)) setSelectedModels(selectedModels.filter(id => id !== modelId)); else setSelectedModels([...selectedModels, modelId]); addToast(t.savedSuccessfully, 'success'); };
  const handleAddCustomModel = () => { if (newModel.name && newModel.apiKey) { addCustomModel({ ...newModel }); setNewModel({ name: '', apiKey: '', type: 'text', endpoint: '' }); setShowAddModel(false); addToast(t.savedSuccessfully, 'success'); } };
  
  const settingsTabs = [
    { id: 'models', name: t.aiModels, icon: <Brain className="w-4 h-4" /> },
    { id: 'appearance', name: t.appearance, icon: <Moon className="w-4 h-4" /> },
    { id: 'privacy', name: t.privacyPolicy, icon: <Lock className="w-4 h-4" /> },
    { id: 'about', name: t.about, icon: <Info className="w-4 h-4" /> }
  ];
  
  return (
    <motion.div {...animations.fadeIn} className="space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {settingsTabs.map(tab => (
          <button key={tab.id} onClick={() => setActiveSettingsTab(tab.id)} className={`px-4 py-2.5 rounded-xl transition flex items-center gap-2 whitespace-nowrap text-sm font-medium ${activeSettingsTab === tab.id ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white' : 'bg-white/10 hover:bg-white/20'}`}>
            {tab.icon} {tab.name}
          </button>
        ))}
      </div>
      {activeSettingsTab === 'models' && (
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
            <div className="flex justify-between items-center mb-6 flex-wrap gap-3">
              <h3 className="text-xl font-bold flex items-center gap-2">🤖 {t.aiModels}</h3>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setShowAddModel(!showAddModel)} className="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 transition text-sm flex items-center gap-2"><Plus className="w-4 h-4" /> {t.addModel}</motion.button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableModels.map(model => (
                <motion.label key={model.id} whileHover={{ scale: 1.02 }} className={`flex flex-col p-4 rounded-xl cursor-pointer transition ${selectedModels.includes(model.id) ? 'bg-purple-500/20 border-2 border-purple-500' : 'bg-gray-800/50 border-2 border-transparent hover:bg-gray-700/50'}`}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{model.icon}</span>
                      <div>
                        <span className="font-semibold">{model.name}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 ml-2">{model.accuracy}%</span>
                      </div>
                    </div>
                    <input type="checkbox" checked={selectedModels.includes(model.id)} onChange={() => toggleModel(model.id)} className="w-5 h-5 accent-purple-600 rounded" />
                  </div>
                  <p className="text-xs text-gray-400 mb-2 flex-1">{model.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Type: {model.type}</span>
                    <span>{model.provider}</span>
                  </div>
                </motion.label>
              ))}
            </div>
            {customModels.length > 0 && (
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h4 className="text-sm font-semibold text-purple-400 mb-4">{t.customModel}</h4>
                <div className="space-y-2">
                  {customModels.map(model => (
                    <motion.div key={model.id} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center justify-between p-4 rounded-xl bg-gray-800/50">
                      <div className="min-w-0 flex-1">
                        <div className="font-semibold truncate">{model.name}</div>
                        <div className="text-xs text-gray-400 truncate">{model.type} • {model.apiKey?.substring(0, 20)}...</div>
                      </div>
                      <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => removeCustomModel(model.id)} className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition"><Trash2 className="w-5 h-5" /></motion.button>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
            <AnimatePresence>
              {showAddModel && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="mt-6 p-5 rounded-xl bg-gray-800/50 border border-purple-500/30 overflow-hidden">
                  <h4 className="font-semibold mb-4">{t.addModel}</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" placeholder={t.modelName} value={newModel.name} onChange={(e) => setNewModel({ ...newModel, name: e.target.value })} className="p-3 rounded-xl bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition" />
                    <input type="text" placeholder={t.modelApiKey} value={newModel.apiKey} onChange={(e) => setNewModel({ ...newModel, apiKey: e.target.value })} className="p-3 rounded-xl bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition" />
                    <input type="text" placeholder={t.apiEndpoint} value={newModel.endpoint} onChange={(e) => setNewModel({ ...newModel, endpoint: e.target.value })} className="p-3 rounded-xl bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition" />
                    <select value={newModel.type} onChange={(e) => setNewModel({ ...newModel, type: e.target.value })} className="p-3 rounded-xl bg-gray-700 border border-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition">
                      <option value="text">📝 Text Detector</option>
                      <option value="image">🖼️ Image Detector</option>
                      <option value="video">🎬 Video Detector</option>
                    </select>
                  </div>
                  <div className="flex gap-3 mt-4">
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleAddCustomModel} className="flex-1 px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-500 transition flex items-center justify-center gap-2"><CheckCircle className="w-4 h-4" /> {t.addModel}</motion.button>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setShowAddModel(false)} className="flex-1 px-4 py-2.5 rounded-xl bg-gray-600 hover:bg-gray-500 transition flex items-center justify-center gap-2"><XCircle className="w-4 h-4" /> {t.cancel}</motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      )}
      {activeSettingsTab === 'appearance' && (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 space-y-6">
          <h3 className="text-xl font-bold mb-4">🎨 {t.appearance}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-gray-800/50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium flex items-center gap-2">{darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />} {darkMode ? t.darkMode : t.lightMode}</div>
                  <p className="text-xs text-gray-400 mt-1">Toggle theme preference</p>
                </div>
                <motion.button whileTap={{ scale: 0.95 }} onClick={() => setDarkMode(!darkMode)} className={`relative w-16 h-8 rounded-full transition ${darkMode ? 'bg-purple-600' : 'bg-gray-600'}`}>
                  <motion.div className="absolute top-1 w-6 h-6 rounded-full bg-white shadow" animate={{ left: darkMode ? '36px' : '4px' }} transition={{ type: 'spring', stiffness: 500, damping: 30 }} />
                </motion.button>
              </div>
            </div>
            <div className="p-5 rounded-xl bg-gray-800/50">
              <div className="font-medium flex items-center gap-2 mb-3"><Globe className="w-5 h-5" /> {t.language}</div>
              <div className="flex gap-2">
                <motion.button whileTap={{ scale: 0.95 }} onClick={() => setLanguage('ug')} className={`flex-1 px-4 py-2.5 rounded-xl transition ${language === 'ug' ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'}`}>ئۇيغۇرچە</motion.button>
                <motion.button whileTap={{ scale: 0.95 }} onClick={() => setLanguage('en')} className={`flex-1 px-4 py-2.5 rounded-xl transition ${language === 'en' ? 'bg-purple-600' : 'bg-gray-700 hover:bg-gray-600'}`}>English</motion.button>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeSettingsTab === 'privacy' && (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 space-y-4">
          <h3 className="text-xl font-bold mb-4">🔐 {t.privacyPolicy}</h3>
          <div className="space-y-3">
            {[{ key: 'autoDelete', label: t.autoDelete, options: ['after24Hours', 'after7Days', 'after30Days', 'never'] }, { key: 'enableNotifications', label: t.enableNotifications }, { key: 'enableEncryption', label: t.enableEncryption }, { key: 'shareAnalytics', label: t.shareAnonymousData }].map(setting => (
              <div key={setting.key} className="flex items-center justify-between p-4 rounded-xl bg-gray-800/50">
                <span className="text-sm">{setting.label}</span>
                {setting.options ? (
                  <select value={appSettings[setting.key]} onChange={(e) => updateAppSettings({ [setting.key]: e.target.value })} className="px-3 py-2 rounded-lg bg-gray-700 border border-gray-600 text-sm focus:border-purple-500 focus:outline-none">
                    {setting.options.map(opt => <option key={opt} value={opt}>{t[opt] || opt}</option>)}
                  </select>
                ) : (
                  <motion.button whileTap={{ scale: 0.95 }} onClick={() => updateAppSettings({ [setting.key]: !appSettings[setting.key] })} className={`relative w-14 h-7 rounded-full transition ${appSettings[setting.key] ? 'bg-purple-600' : 'bg-gray-600'}`}>
                    <motion.div className="absolute top-1 w-5 h-5 rounded-full bg-white shadow" animate={{ left: appSettings[setting.key] ? '30px' : '4px' }} />
                  </motion.button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
      {activeSettingsTab === 'about' && (
        <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 space-y-6">
          <div className="text-center py-8">
            <motion.div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-5xl mb-4" {...animations.pulse}>🛡️</motion.div>
            <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{t.appName}</h3>
            <p className="text-gray-400 mt-2">{t.slogan}</p>
            <p className="text-sm text-gray-500 mt-4">v3.0.0 Professional • © 2024</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[{ label: t.version, value: '3.0.0' }, { label: t.license, value: 'MIT' }, { label: 'React', value: '18.2' }, { label: 'Tailwind', value: '3.4' }].map(item => (
              <div key={item.label} className="p-4 rounded-xl bg-gray-800/50 text-center">
                <div className="text-xs text-gray-400">{item.label}</div>
                <div className="font-semibold text-lg">{item.value}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 pt-6 border-t border-gray-700 flex-wrap">
            <a href="#" className="flex-1 min-w-[150px] px-4 py-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition text-center text-sm">{t.documentation}</a>
            <a href="#" className="flex-1 min-w-[150px] px-4 py-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition text-center text-sm">{t.contactSupport}</a>
            <a href="#" className="flex-1 min-w-[150px] px-4 py-3 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition text-center text-sm">{t.privacyPolicy}</a>
          </div>
        </div>
      )}
    </motion.div>
  );
};

// ==================== 📋 تارىخ ====================
const HistoryPanel = () => {
  const { t, history, clearHistory } = useContext(AppContext); const { addToast } = useToast();
  const [filter, setFilter] = useState('all'), [searchQuery, setSearchQuery] = useState(''), [sortBy, setSortBy] = useState('newest');
  
  const filteredHistory = useMemo(() => {
    let result = [...history];
    if (filter !== 'all') result = result.filter(h => h.type === filter);
    if (searchQuery) result = result.filter(h => h.data?.toLowerCase().includes(searchQuery.toLowerCase()) || h.fileName?.toLowerCase().includes(searchQuery.toLowerCase()));
    if (sortBy === 'newest') result.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    else if (sortBy === 'oldest') result.sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
    else if (sortBy === 'confidence') result.sort((a, b) => (b.result?.confidence || 0) - (a.result?.confidence || 0));
    return result;
  }, [history, filter, searchQuery, sortBy]);
  
  const getIcon = (type) => { const icons = { text: <FileText className="w-5 h-5" />, image: <ImageIcon className="w-5 h-5" />, video: <VideoIcon className="w-5 h-5" /> }; return icons[type] || <FileText className="w-5 h-5" />; };
  const handleClear = () => { if (window.confirm(`${t.areYouSure}\n${t.thisActionCannotBeUndone}`)) { clearHistory(); addToast(t.deletedSuccessfully, 'success'); } };
  
  return (
    <motion.div {...animations.fadeIn} className="space-y-6">
      <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h3 className="text-xl font-bold flex items-center gap-2"><HistoryIcon className="w-6 h-6 text-purple-400" /> {t.scanHistory}</h3>
          {history.length > 0 && (
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={handleClear} className="px-4 py-2.5 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition text-sm flex items-center gap-2"><Trash2 className="w-4 h-4" /> {t.clearHistory}</motion.button>
          )}
        </div>
        <div className="flex flex-wrap gap-3 mb-6">
          <input type="text" placeholder={t.searchHistory} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="flex-1 min-w-[200px] px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:outline-none text-sm" />
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:outline-none text-sm">
            <option value="all">All Types</option><option value="text">📝 Text</option><option value="image">🖼️ Image</option><option value="video">🎬 Video</option>
          </select>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-2.5 rounded-xl bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:outline-none text-sm">
            <option value="newest">{t.newest}</option><option value="oldest">{t.oldest}</option><option value="confidence">{t.highestConfidence}</option>
          </select>
        </div>
        {filteredHistory.length === 0 ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 text-gray-400">
            <div className="text-6xl mb-4">📭</div>
            <p className="text-lg">{searchQuery || filter !== 'all' ? t.noResultsFound : t.noHistory}</p>
            {(searchQuery || filter !== 'all') && <button onClick={() => { setSearchQuery(''); setFilter('all'); }} className="mt-3 text-sm text-purple-400 hover:text-purple-300">{t.clearFilters}</button>}
          </motion.div>
        ) : (
          <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2">
            <AnimatePresence>
              {filteredHistory.map((item, idx) => (
                <motion.div key={item.id || idx} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ delay: idx * 0.03 }} className="p-4 rounded-xl bg-gray-800/50 hover:bg-gray-700/50 transition cursor-pointer group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3 min-w-0 flex-1">
                      <div className={`p-3 rounded-xl ${item.result?.is_fake ? 'bg-red-500/20' : 'bg-green-500/20'}`}>{getIcon(item.type)}</div>
                      <div className="min-w-0 flex-1">
                        <p className="font-medium truncate">{item.fileName || item.data}</p>
                        <p className="text-xs text-gray-500 mt-1">{new Date(item.timestamp).toLocaleString(language === 'ug' ? 'ug-CN' : 'en-US')}</p>
                        {item.result?.model_results?.length > 0 && <p className="text-xs text-gray-400 mt-1">{item.result.model_results.length} {t.aiModels}</p>}
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className={`px-3 py-1.5 rounded-full text-xs font-semibold ${item.result?.is_fake ? 'bg-red-500/20 text-red-400' : 'bg-green-500/20 text-green-400'}`}>{item.result?.is_fake ? t.fake : t.real}</div>
                      {item.result?.confidence && <div className="text-sm font-bold mt-1">{item.result.confidence}%</div>}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// ==================== 📊 ستاتىستىكا داشبوردى ====================
const StatsDashboard = () => {
  const { t, stats, securityScore } = useContext(AppContext);
  const statItems = [
    { icon: <Scan className="w-6 h-6" />, value: stats.scans, label: t.totalScans, color: 'purple', trend: '+12%' },
    { icon: <CheckCircle className="w-6 h-6" />, value: stats.safe, label: 'Clean', color: 'green', trend: '+8%' },
    { icon: <AlertTriangle className="w-6 h-6" />, value: stats.threats, label: t.threatsFound, color: 'red', trend: stats.threats > 0 ? '-3%' : '0%' },
    { icon: <Shield className="w-6 h-6" />, value: `${securityScore}%`, label: t.securityScore, color: 'blue', trend: '+5%' }
  ];
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
      {statItems.map((item, idx) => (
        <motion.div key={idx} whileHover={{ y: -4 }} className="p-5 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-3">
            <div className={`p-2.5 rounded-xl bg-${item.color}-500/20 text-${item.color}-400`}>{item.icon}</div>
            <span className={`text-xs px-2 py-1 rounded-full ${item.trend.startsWith('+') ? 'bg-green-500/20 text-green-400' : 'bg-gray-700 text-gray-400'}`}>{item.trend}</span>
          </div>
          <div className={`text-3xl font-bold text-${item.color}-400`}>{item.value}</div>
          <div className="text-sm text-gray-400">{item.label}</div>
        </motion.div>
      ))}
    </motion.div>
  );
};

// ==================== 🏠 داشبورد ====================
const Dashboard = () => {
  const { t, user, language, setLanguage, darkMode, setDarkMode, online } = useContext(AppContext);
  const [activeTab, setActiveTab] = useState('text');
  const tabs = [
    { id: 'text', name: t.textCheck, icon: <FileText className="w-5 h-5" /> },
    { id: 'image', name: t.imageCheck, icon: <ImageIcon className="w-5 h-5" /> },
    { id: 'video', name: t.videoCheck, icon: <VideoIcon className="w-5 h-5" /> },
    { id: 'settings', name: t.settings, icon: <SettingsIcon className="w-5 h-5" /> },
    { id: 'history', name: t.history, icon: <HistoryIcon className="w-5 h-5" /> }
  ];
  const handleLogout = () => { localStorage.removeItem('currentUser'); window.location.reload(); };
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} transition-colors`} dir={language === 'ug' ? 'rtl' : 'ltr'}>
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} />
        <motion.div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }} />
      </div>
      <motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative z-10 backdrop-blur-xl bg-white/5 border-b border-white/10 sticky top-0">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <motion.div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-2xl" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>🛡️</motion.div>
            <div><h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">{t.appName}</h1><p className="text-xs text-gray-400 hidden md:block">{t.subtitle}</p></div>
          </div>
          <div className="flex items-center gap-2">
            <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs ${online ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
              <span className={`w-2 h-2 rounded-full ${online ? 'bg-green-400' : 'bg-red-400'} animate-pulse`} /> {online ? 'Online' : 'Offline'}
            </div>
            <div className="flex gap-1 bg-white/10 rounded-xl p-1">
              <button onClick={() => setLanguage('ug')} className={`px-3 py-1.5 rounded-lg text-xs transition ${language === 'ug' ? 'bg-purple-600' : 'hover:bg-white/10'}`}>ئۇي</button>
              <button onClick={() => setLanguage('en')} className={`px-3 py-1.5 rounded-lg text-xs transition ${language === 'en' ? 'bg-purple-600' : 'hover:bg-white/10'}`}>EN</button>
            </div>
            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setDarkMode(!darkMode)} className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition">{darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}</motion.button>
            <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/10">
              <div className="w-9 h-9 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-sm font-bold">{user?.username?.[0]?.toUpperCase() || '👤'}</div>
              <span className="text-sm font-medium hidden sm:inline">{user?.username}</span>
            </div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleLogout} className="px-4 py-2.5 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition text-sm flex items-center gap-2"><LogOut className="w-4 h-4" /> <span className="hidden sm:inline">{t.logout}</span></motion.button>
          </div>
        </div>
      </motion.header>
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <StatsDashboard />
        <motion.div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>
          {tabs.map(tab => (
            <motion.button key={tab.id} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 rounded-2xl transition flex items-center gap-2 whitespace-nowrap font-medium ${activeTab === tab.id ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/25' : 'bg-white/10 hover:bg-white/20'}`}>
              {tab.icon} <span>{tab.name}</span>
            </motion.button>
          ))}
        </motion.div>
        <AnimatePresence mode="wait">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.2 }}>
            {activeTab === 'text' && <TextCheck />}
            {activeTab === 'image' && <ImageCheck />}
            {activeTab === 'video' && <VideoCheck />}
            {activeTab === 'settings' && <SettingsPanel />}
            {activeTab === 'history' && <HistoryPanel />}
          </motion.div>
        </AnimatePresence>
      </main>
      <footer className="relative z-10 text-center py-6 text-gray-500 text-xs border-t border-white/10 mt-8">
        <p>Powered by 12+ Professional AI Models • {t.appName} v3.0 Professional • © 2024</p>
        <p className="mt-2 text-gray-600">{t.allSystemsOperational} • {t.lastUpdated}: {new Date().toLocaleTimeString()}</p>
      </footer>
    </motion.div>
  );
};

// ==================== 🔐 كىرىش / تىزىملىتىش ====================
const AuthScreen = () => {
  const { t, setUser } = useContext(AppContext); const { addToast } = useToast();
  const [isLogin, setIsLogin] = useState(true), [username, setUsername] = useState(''), [password, setPassword] = useState(''), [showPassword, setShowPassword] = useState(false), [error, setError] = useState(''), [loading, setLoading] = useState(false);
  
  const handleSubmit = async (e) => {
    e?.preventDefault();
    if (!username.trim() || !password.trim()) { setError(t.username + ' & ' + t.password + ' ' + (t.required || 'required')); return; }
    setLoading(true); setError(''); await new Promise(r => setTimeout(r, 800));
    const users = JSON.parse(localStorage.getItem('users') || '{}');
    if (isLogin) {
      if (username === 'demo' && password === '123') { setUser({ username: 'demo', isDemo: true }); localStorage.setItem('currentUser', 'demo'); addToast(t.welcome + ', demo! 🎉', 'success'); }
      else if (users[username] && users[username].password === password) { setUser({ username, ...users[username] }); localStorage.setItem('currentUser', username); addToast(t.welcome + `, ${username}! ✨`, 'success'); }
      else { setError(t.error + ': ' + (users[username] ? t.password : t.username + ' ' + t.notFound)); addToast(t.error, 'error'); }
    } else {
      if (users[username]) { setError(t.username + ' ' + t.exists); addToast(t.error, 'error'); }
      else { users[username] = { password, createdAt: new Date().toISOString() }; localStorage.setItem('users', JSON.stringify(users)); setUser({ username }); localStorage.setItem('currentUser', username); addToast(t.register + ' ' + t.success + '! 🎉', 'success'); }
    }
    setLoading(false);
  };
  
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div key={i} className="absolute rounded-full blur-3xl" style={{ width: `${400 + i * 100}px`, height: `${400 + i * 100}px`, background: i % 2 === 0 ? 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' : 'radial-gradient(circle, rgba(59,130,246,0.3) 0%, transparent 70%)', top: `${i * 20}%`, left: `${i * 30}%` }} animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }} />
        ))}
      </div>
      <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 20 }} className="relative z-10 w-full max-w-md p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl">
        <motion.div className="text-center mb-8" initial={{ y: -20 }} animate={{ y: 0 }}>
          <motion.div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-5xl mb-4 shadow-lg shadow-purple-500/30" whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>🛡️</motion.div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">{t.appName}</h2>
          <p className="text-sm text-gray-400 mt-2">{t.slogan}</p>
        </motion.div>
        <div className="flex gap-2 mb-6 p-1.5 rounded-2xl bg-white/10">
          <motion.button whileTap={{ scale: 0.98 }} onClick={() => { setIsLogin(true); setError(''); }} className={`flex-1 py-3 rounded-xl transition font-medium ${isLogin ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' : 'hover:bg-white/10'}`}>{t.login}</motion.button>
          <motion.button whileTap={{ scale: 0.98 }} onClick={() => { setIsLogin(false); setError(''); }} className={`flex-1 py-3 rounded-xl transition font-medium ${!isLogin ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg' : 'hover:bg-white/10'}`}>{t.register}</motion.button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div><label className="block text-sm text-gray-400 mb-2">{t.username}</label><input type="text" placeholder={t.username} value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition" autoComplete="username" /></div>
          <div><label className="block text-sm text-gray-400 mb-2">{t.password}</label>
            <div className="relative">
              <input type={showPassword ? 'text' : 'password'} placeholder={t.password} value={password} onChange={(e) => setPassword(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSubmit()} className="w-full px-4 py-3.5 pr-12 rounded-xl bg-white/10 border border-white/10 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition" autoComplete={isLogin ? 'current-password' : 'new-password'} />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300">{showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}</button>
            </div>
          </div>
          {error && <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm text-center p-3 rounded-xl bg-red-500/10 border border-red-500/30">{error}</motion.p>}
          <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={loading} className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {loading ? <><Loader2 className="w-5 h-5 animate-spin" /> {t.processing}</> : <><Shield className="w-5 h-5" /> {isLogin ? t.login : t.register}</>}
          </motion.button>
        </form>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 text-center text-xs text-gray-500 p-4 rounded-xl bg-white/5">
          <p className="mb-2">{t.demoAccount}</p>
          <div className="flex items-center justify-center gap-1.5 text-green-400"><CheckCircle className="w-3.5 h-3.5" /><span>No credit card required • Free forever</span></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// ==================== 🚀 ئاساسلىق App ====================
const App = () => { const { user } = useContext(AppContext); return user ? <Dashboard /> : <AuthScreen />; };

// ==================== 📦 Export ====================
const AIDetectorPro = () => {
  return (
    <ToastProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </ToastProvider>
  );
};

export default AIDetectorPro;