// src/components/learn-modules/StatisticsModule.jsx
import React, { useState } from 'react';
import { 
  PieChart, 
  BarChart3, 
  TrendingUp, 
  Calculator, 
  Target, 
  LineChart,
  BookOpen,
  Database,
  GitBranch,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronRight,
  ChevronDown,
  Home,
  Layers,
  BarChart,
  ScatterChart,
  Activity,
  Brain,
  Cpu,
  FileText,
  Users,
  Globe,
  Award,
  Zap,
  Filter,
  GitMerge,
  RefreshCw,
  Shield,
  Target as TargetIcon,
  GitCompare,
  Hash,
  Percent,
  Search,
  Book,
  Clipboard,
  Download,
  Upload,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Star,
  Heart,
  ThumbsUp,
  AlertTriangle,
  Info,
  HelpCircle,
  Clock,
  Calendar,
  TrendingDown,
  DollarSign,
  Smartphone,
  Monitor,
  Server,
  Cloud,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Thermometer,
  Droplet,
  Wind,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Umbrella,
  User,
  UserCheck,
  Users as UsersIcon,
  UserPlus,
  UserMinus,
  UserX,
  Mail,
  Phone,
  MapPin,
  Navigation,
  Compass,
  Map,
  Globe as GlobeIcon,
  Flag,
  Settings,
  Tool,
  Wrench,
  Package,
  Box,
  Archive,
  Folder,
  HardDrive,
  Database as DatabaseIcon,
  Server as ServerIcon,
  Cpu as CpuIcon,
  MemoryStick,
  HardDrive as HardDriveIcon,
  Smartphone as SmartphoneIcon,
  Tablet,
  Laptop,
  Monitor as MonitorIcon,
  Printer,
  Camera,
  Video,
  Headphones,
  Speaker,
  Mic,
  Volume2,
  Bell,
  BellOff,
  MessageSquare,
  MessageCircle,
  PhoneCall,
  Video as VideoIcon,
  Mail as MailIcon,
  Inbox,
  Send,
  Paperclip,
  Image,
  Film,
  Music,
  Play,
  Pause,
  StopCircle,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  VolumeX,
  Volume1,
  Volume2 as Volume2Icon
} from 'lucide-react';

// Statistics Level Components
const StatisticsLevel1 = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">1-دەرىجە: ئاساسىي چۈشەنچىلەر</h3>
      <p className="text-gray-700 mb-4">
        ستاتىستىكىنىڭ ئاساسىي چۈشەنچىلىرى، ساددە ھېسابلاش ۋە ئىپادىلەرنى چۈشىنىش.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئۆگىنىش نۇقتىلىرى</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">سانلىق مەلۇمات تۈرلىرى ۋە ئۇلارنىڭ پەرقى</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ئۆرتە قىممەت (Mean)، ئوتتۇرا قىممەت (Median)، ئەڭ كۆپ ئۇچرايدىغان قىممەت (Mode)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ئاددىي گرافىكلار: Bar Chart, Pie Chart, Line Chart</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ئىختىمالنىڭ ئاساسىي چۈشەنچىسى</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">سوراقنامە لايىھىلەش ۋە سانلىق مەلۇمات توپلاش</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئەمەلىي مىسال</h4>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-700 mb-2">10 ئوقۇغۇچىنىڭ ئىمتىھان نومۇرى:</h5>
            <p className="text-gray-600">[85, 92, 78, 88, 90, 76, 95, 82, 89, 84]</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600">ئۆرتە قىممەت</div>
              <div className="text-lg font-bold text-green-600">85.9</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600">ئوتتۇرا قىممەت</div>
              <div className="text-lg font-bold text-blue-600">86.5</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-sm text-gray-600">ئۆزگىرىش دائىرىسى</div>
              <div className="text-lg font-bold text-purple-600">19</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="text-sm text-gray-600">ئەڭ يۇقىرى نومۇر</div>
              <div className="text-lg font-bold text-orange-600">95</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h4 className="font-bold text-gray-800 mb-4">تەكشۈرۈش مەزمۇنلىرى</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">تېما</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">تەكشۈرۈش نىسبىتى</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئاۋاتلانغان ۋاقىت</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">ئاساسىي چۈشەنچىلەر</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">10 سائەت</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-700">ئاساسىي ھېسابلاش</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">15 سائەت</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">گرافىك كۆرسىتىش</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">8 سائەت</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const StatisticsLevel2 = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">2-دەرىجە: ئاساسىي تەھلىل</h3>
      <p className="text-gray-700 mb-4">
        ئاساسىي تەھلىل ئۇسۇللىرى، نورمال تارقىلىش ۋە ئاددىي خەلقارا باھالاش.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئۆگىنىش نۇقتىلىرى</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ستاندارت ساپما (Standard Deviation) ۋە ۋارىياتسىيە (Variance)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">نورمال تارقىلىش (Normal Distribution) ۋە ئۇنىڭ ئالاھىدىلىكلىرى</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ئاددىي خەلقارا باھالاش (Confidence Intervals)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">تەجرىبە لايىھىلەش (Experimental Design)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ئاساسىي پىروگرامما ئىشلىتىش (Excel, Python ئاساسىي)</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئەمەلىي مىسال</h4>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-700 mb-2">مەكتەپ ئوقۇغۇچىلىرىنىڭ ئېگىزلىكى:</h5>
            <p className="text-gray-600">ئوتتۇرىچە: 168cm, ستاندارت ساپما: 6.5cm, نۇمۇنە: 100</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600">95% ئىشەنچ ئارىلىقى</div>
              <div className="text-lg font-bold text-blue-600">166.7 - 169.3cm</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-sm text-gray-600">Z-قىممىتى (±1.96)</div>
              <div className="text-lg font-bold text-purple-600">±1.96</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600">ئۆلچەم خاتالىقى</div>
              <div className="text-lg font-bold text-green-600">±1.27cm</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="text-sm text-gray-600">نورمال تارقىلىش</div>
              <div className="text-lg font-bold text-orange-600">نورمال</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h4 className="font-bold text-gray-800 mb-4">تەكشۈرۈش مەزمۇنلىرى</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">تېما</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">تەكشۈرۈش نىسبىتى</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئاۋاتلانغان ۋاقىت</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">تەرقالما ئۆلچەملىرى</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">20 سائەت</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-700">نورمال تارقىلىش</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '30%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">15 سائەت</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">خەلقارا باھالاش</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">12 سائەت</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const StatisticsLevel3 = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">3-دەرىجە: مۇرەككەپ تەھلىل</h3>
      <p className="text-gray-700 mb-4">
        مۇرەككەپ تەھلىل ئۇسۇللىرى، نەزەرە سىناقلاش ۋە رىگىرېسسىيە تەھلىلى.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئۆگىنىش نۇقتىلىرى</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">تەكشۈرۈش سىناقلىرى (t-test, z-test, ANOVA)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ئىنفېرېنسىيال تەھلىل (Inferential Analysis)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">رىگىرېسسىيە تەھلىلى (Regression Analysis)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">كۆپ ئۆزگەرگۈچىلىك تەھلىل (Multivariate Analysis)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">پىروگرامما ئارقىلىق تەھلىل (Python, R ئىشلىتىش)</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئەمەلىي مىسال</h4>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-700 mb-2">ئىككى گۇرۇپپا ئوقۇغۇچىلىرىنىڭ ئىمتىھان نەتىجىسى:</h5>
            <p className="text-gray-600">گۇرۇپپا A (نۇمۇنە 50): ئوتتۇرىچە 85, SD 8</p>
            <p className="text-gray-600">گۇرۇپپا B (نۇمۇنە 50): ئوتتۇرىچە 82, SD 7</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-sm text-gray-600">t-test نەتىجىسى</div>
              <div className="text-lg font-bold text-purple-600">t = 2.15</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600">p-قىممىتى</div>
              <div className="text-lg font-bold text-blue-600">0.034</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600">ئوخشىمىغانلىق</div>
              <div className="text-lg font-bold text-green-600">مۇھىم</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="text-sm text-gray-600">رىگىرېسسىيە R²</div>
              <div className="text-lg font-bold text-orange-600">0.67</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h4 className="font-bold text-gray-800 mb-4">تەكشۈرۈش مەزمۇنلىرى</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">تېما</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">تەكشۈرۈش نىسبىتى</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئاۋاتلانغان ۋاقىت</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">نەزەرە سىناقلاش</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">25 سائەت</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-700">رىگىرېسسىيە تەھلىلى</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">20 سائەت</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">كۆپ ئۆزگەرگۈچىلىك تەھلىل</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">18 سائەت</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const StatisticsLevel4 = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">4-دەرىجە: ئىلمىي تەتقىقات</h3>
      <p className="text-gray-700 mb-4">
        ئىلمىي تەتقىقات لايىھىلەش، مۇرەككەپ مودېللاشتۇرۇش ۋە ئىلگىرى سۈزۈش تەھلىلى.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئۆگىنىش نۇقتىلىرى</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ئىلمىي تەتقىقات لايىھىلەش (Scientific Research Design)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">مۇرەككەپ مودېللاشتۇرۇش (Complex Modeling)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ئىلگىرى سۈزۈش تەھلىلى (Predictive Analysis)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">دەلىللەش ئۇسۇللىرى (Validation Methods)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">تەتقىقات خاتىرىسى يېزىش (Research Paper Writing)</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئەمەلىي مىسال</h4>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-700 mb-2">كىرىپتو پۇل باھاسىنى ئىلگىرى سۈزۈش:</h5>
            <p className="text-gray-600">ئارقا سانلىق مەلۇمات: 2 يىللىق كۈندىلىك باھا</p>
            <p className="text-gray-600">مودېل: ARIMA + LSTM + XGBoost</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="text-sm text-gray-600">پىششىقلاپ بېرىش دەقىقىلىقى</div>
              <div className="text-lg font-bold text-orange-600">92.3%</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-sm text-gray-600">RMSE (ئۆلچەم خاتالىقى)</div>
              <div className="text-lg font-bold text-purple-600">0.023</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600">ئاۋالىيەت سىنىقى</div>
              <div className="text-lg font-bold text-blue-600">87.5%</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600">مۇھىم ئۆزگەرگۈچىلەر</div>
              <div className="text-lg font-bold text-green-600">15</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white p-6 rounded-xl border border-gray-200">
      <h4 className="font-bold text-gray-800 mb-4">تەكشۈرۈش مەزمۇنلىرى</h4>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">تېما</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">تەكشۈرۈش نىسبىتى</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئاۋاتلانغان ۋاقىت</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">تەتقىقات لايىھىلەش</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">30 سائەت</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-700">مۇرەككەپ مودېللاشتۇرۇش</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">25 سائەت</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">دەلىللەش ئۇسۇللىرى</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">20 سائەت</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// All Content Components for each menu item
const contentMap = {
  // 1. ستاتىستىكا دەرسىگە كىرىش
  'intro': {
    title: 'ستاتىستىكا دەرسىگە كىرىش',
    icon: BookOpen,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">ستاتىستىكا نىمە؟</h4>
          <p className="text-gray-700 mb-4">
            ستاتىستىكا (Statistics) سانلىق مەلۇمات توپلاش، تەھلىل قىلىش، چۈشەندۈرۈش، 
            كۆرسىتىش ۋە قارار چىقىرىش جەريانلىرىنى ئۆز ئىچىگە ئالىدىغان پەندۇر.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="bg-white p-4 rounded-lg border">
              <h5 className="font-semibold text-blue-600 mb-2">دسىكرىپتىۋ ستاتىستىكا</h5>
              <p className="text-sm text-gray-600">
                مەۋجۇت سانلىق مەلۇماتلارنى چۈشەندۈرۈش ۋە ئۇلارنىڭ ئالاھىدىلىكىنى بايان قىلىش
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border">
              <h5 className="font-semibold text-purple-600 mb-2">ئىنپېرېتىتاۋ ستاتىستىكا</h5>
              <p className="text-sm text-gray-600">
                كىچىك نۇمۇنە ئاساسىدا چوڭ جەمئىيەت ھەققىدە خۇلاسە چىقىرىش
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
            <div className="flex items-center gap-2 mb-3">
              <Globe className="w-5 h-5 text-green-600" />
              <h5 className="font-semibold text-gray-800">ئىشلىتىش ساھەلىرى</h5>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• تىببىي تەتقىقات</li>
              <li>• ئىقتىساد ۋە مالىيە</li>
              <li>• سىياسەت ۋە جەمئىيەت</li>
              <li>• پەن-تېخنىكا</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-100">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-orange-600" />
              <h5 className="font-semibold text-gray-800">مەقسەتلىرى</h5>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• سانلىق مەلۇماتلارنى چۈشەندۈرۈش</li>
              <li>• قارار چىقىرىش ئۈچۈن ئۇچۇر بەرۈش</li>
              <li>• ئىستىقبالنى پىششىقلاپ بېرىش</li>
              <li>• تەتقىقات نەتىجىلىرىنى باھالاش</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-purple-600" />
              <h5 className="font-semibold text-gray-800">پايدىلىنىدىغانلار</h5>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• تەتقىقاتچىلار</li>
              <li>• كارخانا باشقۇرغۇچىلار</li>
              <li>• پىروگراممىسازلار</li>
              <li>• ئوقۇتقۇچىلار ۋە ئوقۇغۇچىلار</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  // 2. سانلىق مەلۇمات تۈرى
  'data-types': {
    title: 'سانلىق مەلۇمات تۈرى',
    icon: Database,
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-4 text-lg">سانلىق مەلۇمات تۈرلىرى</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-blue-600 mb-2">سۈپەتلىك (Categorical)</h5>
                <div className="ml-4 space-y-3">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-medium text-blue-700 mb-1">Nominal (ناملىق)</div>
                    <p className="text-sm text-gray-600">تەرتىپسىز كاتېگورىيەلەر. مىسال: جىنسى، رەڭگى</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <div className="font-medium text-blue-700 mb-1">Ordinal (تەرتىپلىك)</div>
                    <p className="text-sm text-gray-600">تەرتىپ بار كاتېگورىيەلەر. مىسال: بەھا (A, B, C), دەرىجە</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-green-600 mb-2">سانلىق (Numerical)</h5>
                <div className="ml-4 space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="font-medium text-green-700 mb-1">Interval (ئارىلىق)</div>
                    <p className="text-sm text-gray-600">نۆل نۇقتىسى ئىختىيارىي. مىسال: تېمپېراتۇرا (℃)</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <div className="font-medium text-green-700 mb-1">Ratio (نىسبەت)</div>
                    <p className="text-sm text-gray-600">ھەقىقىي نۆل نۇقتىسى بار. مىسال: ئېگىزلىك، يېشى، باھا</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-4 text-lg">سانلىق مەلۇمات توپلاش ئۇسۇللىرى</h4>
            
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <FileText className="w-5 h-5 text-purple-600" />
                  <h5 className="font-semibold text-gray-800">سوراقنامە (Survey)</h5>
                </div>
                <p className="text-sm text-gray-600">
                  كەڭ دائىرىلىك ئۇچۇر توپلاش ئۇسۇلى. ئىشلەتكۈچىلەرنىڭ پىكىرلىرىنى تېپىش.
                </p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="w-5 h-5 text-blue-600" />
                  <h5 className="font-semibold text-gray-800">كۆزىتىش (Observation)</h5>
                </div>
                <p className="text-sm text-gray-600">
                  تەبىئىي شارائىتتا كۆزىتىش ئارقىلىق سانلىق مەلۇمات توپلاش.
                </p>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-5 h-5 text-green-600" />
                  <h5 className="font-semibold text-gray-800">تەجرىبە (Experiment)</h5>
                </div>
                <p className="text-sm text-gray-600">
                  كونترول قىلىنغان شارائىتتا سانلىق مەلۇمات توپلاش.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border">
          <h5 className="font-semibold text-gray-800 mb-3">مىسال: ئوقۇغۇچى باھاسى</h5>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">سانلىق مەلۇمات تۈرى</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">مىسال</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">تەھلىل ئۇسۇلى</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Nominal</td>
                  <td className="px-4 py-3 text-sm text-gray-700">پەن تاللاش (رىيازىيات، تىل)</td>
                  <td className="px-4 py-3 text-sm text-purple-600 font-medium">چاستوتا تەھلىلى</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Ordinal</td>
                  <td className="px-4 py-3 text-sm text-gray-700">بەھا (A, B, C, D)</td>
                  <td className="px-4 py-3 text-sm text-purple-600 font-medium">تەرتىپلىك سىناق</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Ratio</td>
                  <td className="px-4 py-3 text-sm text-gray-700">نومۇر (0-100)</td>
                  <td className="px-4 py-3 text-sm text-purple-600 font-medium">سانلىق تەھلىل</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },

  // 3. دسىكرىپتىۋ ستاتىستىكا
  'descriptive': {
    title: 'دسىكرىپتىۋ ستاتىستىكا',
    icon: Layers,
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-100">
            <h5 className="font-semibold text-blue-600 mb-2">مەركىزىي چەكلىك باھالار</h5>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-700">ئۆرتە قىممەت (Mean)</div>
                <div className="text-sm text-gray-600">بارلىق قىممەتلەرنىڭ ئوتتۇرىچە قىممىتى</div>
                <code className="text-xs text-blue-600 mt-1">∑xᵢ / n</code>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-700">ئوتتۇرا قىممەت (Median)</div>
                <div className="text-sm text-gray-600">تەرتىپلەنگەن قىممەتلەرنىڭ ئوتتۇرىسىدىكى قىممەت</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-700">ئەڭ كۆپ ئۇچرايدىغان قىممەت (Mode)</div>
                <div className="text-sm text-gray-600">ئەڭ كۆپ تەكرارلانغان قىممەت</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-100">
            <h5 className="font-semibold text-green-600 mb-2">تەرقالما ئۆلچەملىرى</h5>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-700">ۋارىياتسىيە (Variance)</div>
                <div className="text-sm text-gray-600">ئۆرتە قىممەتتىن پاراڭلىشىش دەرىجىسى</div>
                <code className="text-xs text-green-600 mt-1">∑(xᵢ - μ)² / n</code>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-700">ستاندارت ساپما (SD)</div>
                <div className="text-sm text-gray-600">ۋارىياتسىيەنىڭ يىلتىزى</div>
                <code className="text-xs text-green-600 mt-1">√Variance</code>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-700">ئۆزگىرىش دائىرىسى (Range)</div>
                <div className="text-sm text-gray-600">ئەڭ چوڭ - ئەڭ كىچىك قىممەت</div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-100">
            <h5 className="font-semibold text-purple-600 mb-2">تارقىلىش شەكىللىرى</h5>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-700">نورمال تارقىلىش</div>
                <div className="text-sm text-gray-600">قوغۇچ شەكلىدىكى تارقىلىش</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-700">Skewness</div>
                <div className="text-sm text-gray-600">تارقىلىشنىڭ ئوڭ-سول قىيپاشلىقى</div>
              </div>
              <div className="bg-white p-3 rounded border">
                <div className="font-medium text-gray-700">Kurtosis</div>
                <div className="text-sm text-gray-600">تارقىلىشنىڭ ئېگىز-پەسلىكى</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">ئەمەلىي مىسال: ئوقۇغۇچى باھالىرى</h5>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">سانلىق مەلۇمات:</span>
                  <span className="text-sm font-medium">[85, 92, 78, 88, 90, 76, 95, 82, 89, 84]</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span className="text-gray-700">ئۆرتە قىممەت:</span>
                  <span className="font-bold text-blue-600">85.9</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span className="text-gray-700">ئوتتۇرا قىممەت:</span>
                  <span className="font-bold text-green-600">86.5</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span className="text-gray-700">ئۆزگىرىش دائىرىسى:</span>
                  <span className="font-bold text-purple-600">19</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-orange-50 rounded-lg">
                  <span className="text-gray-700">ستاندارت ساپما:</span>
                  <span className="font-bold text-orange-600">6.2</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h6 className="font-semibold text-gray-700 mb-3">چۈشەندۈرۈش:</h6>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• ئۆرتە قىممەت 85.9: ئوقۇغۇچىلارنىڭ ئوتتۇرىچە نومۇرى</li>
                <li>• ئۆزگىرىش دائىرىسى 19: نومۇرلار 76 دىن 95 غىچە تارقالغان</li>
                <li>• ستاندارت ساپما 6.2: نومۇرلار ئوتتۇرا دەرىجىدە پاراڭلىغان</li>
                <li>• ئوتتۇرا قىممەت 86.5: ئوتتۇرا ئوقۇغۇچىلارنىڭ نومۇرى</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // 4. سۈرەتلەش ئۇسۇلى
  'visualization': {
    title: 'سۈرەتلەش ئۇسۇلى',
    icon: BarChart,
    content: (
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              <h5 className="font-semibold text-gray-800">Histogram</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              سانلىق مەلۇماتنىڭ تارقىلىشىنى كۆرسىتىدۇ. ئوچۇق-تاق كاتېگورىيەلەر ئۈچۈن.
            </p>
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-blue-700">مۇناسىۋەتلىك:</span>
                <span className="text-xs text-blue-700">سانلىق مەلۇمات</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-green-600" />
              <h5 className="font-semibold text-gray-800">Box Plot</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              سانلىق مەلۇماتنىڭ تارقىلىشى، چېتى، چىقىش نۇقتىلىرىنى كۆرسىتىدۇ.
            </p>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-green-700">ئۈنۈمى:</span>
                <span className="text-xs text-green-700">ئوچۇق-تاق سىناقلار</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <BarChart className="w-5 h-5 text-purple-600" />
              <h5 className="font-semibold text-gray-800">Bar Chart</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              كاتېگورىيەلىك سانلىق مەلۇماتنى سېلىشتۇرۇش ئۈچۈن.
            </p>
            <div className="bg-purple-50 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-purple-700">مۇناسىۋەتلىك:</span>
                <span className="text-xs text-purple-700">سۈپەتلىك مەلۇمات</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <PieChart className="w-5 h-5 text-pink-600" />
              <h5 className="font-semibold text-gray-800">Pie Chart</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              بىر پۈتۈننىڭ ئىچىدىكى نىسبەتنى كۆرسىتىدۇ.
            </p>
            <div className="bg-pink-50 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-pink-700">مۇناسىۋەتلىك:</span>
                <span className="text-xs text-pink-700">نىسبەت مەلۇماتى</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <ScatterChart className="w-5 h-5 text-orange-600" />
              <h5 className="font-semibold text-gray-800">Scatter Plot</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              ئىككى ئۆزگەرگۈچى ئوتتۇرىسىدىكى مۇناسىۋەتنى كۆرسىتىدۇ.
            </p>
            <div className="bg-orange-50 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-orange-700">ئۈنۈمى:</span>
                <span className="text-xs text-orange-700">مۇناسىۋەت تەھلىلى</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <LineChart className="w-5 h-5 text-cyan-600" />
              <h5 className="font-semibold text-gray-800">Line Chart</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              ۋاقىت بويىچە ئۆزگىرىشنى كۆرسىتىدۇ.
            </p>
            <div className="bg-cyan-50 p-3 rounded-lg">
              <div className="flex justify-between mb-1">
                <span className="text-xs text-cyan-700">مۇناسىۋەتلىك:</span>
                <span className="text-xs text-cyan-700">ۋاقىت سېرىيىسى</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border">
          <h5 className="font-semibold text-gray-800 mb-4">ئۇسۇل تاللاش كۇنۇپكىسى</h5>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border">
                <h6 className="font-medium text-gray-700 mb-2">سۈپەتلىك مەلۇمات</h6>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Bar Chart (ئەڭ ياخشى)</li>
                  <li>• Pie Chart (نىسبەت كۆرسىتىش)</li>
                  <li>• Stacked Bar Chart (تەپسىلاتلاش)</li>
                </ul>
              </div>
              <div className="p-3 bg-white rounded-lg border">
                <h6 className="font-medium text-gray-700 mb-2">سانلىق مەلۇمات</h6>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Histogram (تارقىلىش)</li>
                  <li>• Box Plot (ئوچۇق-تاق سىناق)</li>
                  <li>• Density Plot (زىچلىق)</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="p-3 bg-white rounded-lg border">
                <h6 className="font-medium text-gray-700 mb-2">مۇناسىۋەت تەھلىلى</h6>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Scatter Plot (ئىككى ئۆزگەرگۈچى)</li>
                  <li>• Line Chart (ۋاقىت سېرىيىسى)</li>
                  <li>• Heatmap (كۆپ ئۆزگەرگۈچى)</li>
                </ul>
              </div>
              <div className="p-3 bg-white rounded-lg border">
                <h6 className="font-medium text-gray-700 mb-2">مۇرەككەپ مەلۇمات</h6>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Pair Plot (ھەممە مۇناسىۋەت)</li>
                  <li>• Violin Plot (تارقىلىش + زىچلىق)</li>
                  <li>• Radar Chart (كۆپ ئۆلچەملىك)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // 5. ئىنپېرېتىتاۋ ستاتىستىكا
  'inferential': {
    title: 'ئىنپېرېتىتاۋ ستاتىستىكا',
    icon: GitBranch,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">ئىنپېرېتىتاۋ ستاتىستىكا</h4>
          <p className="text-gray-700 mb-4">
            كىچىك نۇمۇنە ئاساسىدا چوڭ جەمئىيەت ھەققىدە خۇلاسە چىقىرىش ئىلمى.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">ئاساسىي چۈشەنچىلەر</h5>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-medium text-blue-700 mb-2">Population vs Sample</div>
                <p className="text-sm text-gray-600">
                  Population (ئومۇمىي جەمئىيەت): تەتقىق قىلىنىدىغان بارلىق بىرەرلىك
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Sample (نۇمۇنە): ئومۇمىي جەمئىيەتتىن تاللانغان بىر قىسىم
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-medium text-green-700 mb-2">Parameter vs Statistic</div>
                <p className="text-sm text-gray-600">
                  Parameter (پارامېتىر): ئومۇمىي جەمئىيەتنىڭ كۆرسەتكۈچى
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Statistic (ستاتىستىكا): نۇمۇنەنىڭ كۆرسەتكۈچى
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">ئىشلىتىش ئۇسۇللىرى</h5>
            <div className="space-y-3">
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="font-medium text-purple-700">خەلقارا باھالاش</div>
                <p className="text-sm text-gray-600">ئومۇمىي جەمئىيەتنىڭ قىممىتىنى باھالاش</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="font-medium text-orange-700">نەزەرە سىناقلاش</div>
                <p className="text-sm text-gray-600">نەزەرىلەرنى دەلىللەش يەكى رەت قىلىش</p>
              </div>
              <div className="p-3 bg-cyan-50 rounded-lg">
                <div className="font-medium text-cyan-700">مۇناسىۋەت تەھلىلى</div>
                <p className="text-sm text-gray-600">ئۆزگەرگۈچىلەر ئوتتۇرىسىدىكى مۇناسىۋەتنى تەكشۈرۈش</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">ئەمەلىي مىسال</h5>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">مەسىلە</div>
              <div className="font-medium text-gray-700">مەكتەپ ئوقۇغۇچىلىرىنىڭ ئوتتۇرىچە ئېگىزلىكى</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">نۇمۇنە</div>
              <div className="font-medium text-gray-700">100 ئوقۇغۇچى</div>
              <div className="text-sm text-gray-600">ئوتتۇرىچە: 168cm, SD: 6.5cm</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">نەتىجە</div>
              <div className="font-medium text-gray-700">95% ئىشەنچ ئارىلىقى</div>
              <div className="text-lg font-bold text-purple-600">166.7 - 169.3cm</div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h6 className="font-medium text-gray-700 mb-2">چۈشەندۈرۈش:</h6>
            <p className="text-sm text-gray-600">
              95% ئىشەنچ دەرىجىسىدە، بارلىق مەكتەپ ئوقۇغۇچىلىرىنىڭ ئوتتۇرىچە ئېگىزلىكى 
              166.7cm دىن 169.3cm گىچە بولىدۇ.
            </p>
          </div>
        </div>
      </div>
    )
  },

  // 6. ئىختىمال نازارىيىسى
  'probability': {
    title: 'ئىختىمال نازارىيىسى',
    icon: Calculator,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-xl border border-pink-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">ئىختىمال نازارىيىسى</h4>
          <p className="text-gray-700 mb-4">
            ئىختىمال پەنى ۋاقىتلىق ياكى كۆزىتىلمىگەن ۋەقەلەرنىڭ يۈز بېرىش ئېھتىماللىقىنى ئۆلچەيدۇ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">ئاساسىي چۈشەنچىلەر</h5>
            <div className="space-y-4">
              <div className="bg-pink-50 p-4 rounded-lg">
                <div className="font-medium text-pink-700 mb-2">ئىختىمال قانۇنلىرى</div>
                <p className="text-sm text-gray-600">0 ≤ P(A) ≤ 1</p>
                <p className="text-sm text-gray-600">P(S) = 1 (تولۇق ۋەقەلەر ئىختىماللىقى)</p>
                <p className="text-sm text-gray-600">P(A∪B) = P(A) + P(B) - P(A∩B)</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="font-medium text-purple-700 mb-2">ئىختىمال تۈرلىرى</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Classical (كلاسسىك): ھەممە نەتىجە ئوخشاش ئېھتىماللىق</li>
                  <li>• Empirical (تەجرىبىۋى): تارىخىي سانلىق مەلۇمات</li>
                  <li>• Subjective (سۇبىيېكتىپ): شەخسىي باھالاش</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">ئىختىمال قائىدىلىرى</h5>
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium text-blue-700">Conditional Probability</div>
                <p className="text-sm text-gray-600">P(A|B) = P(A∩B) / P(B)</p>
                <p className="text-xs text-gray-500">B بولغاندا A نىڭ ئىختىماللىقى</p>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="font-medium text-green-700">Bayes Theorem</div>
                <p className="text-sm text-gray-600">P(A|B) = [P(B|A) × P(A)] / P(B)</p>
                <p className="text-xs text-gray-500">ئارقا ئىختىماللىق</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="font-medium text-orange-700">Multiplication Rule</div>
                <p className="text-sm text-gray-600">P(A∩B) = P(A) × P(B|A)</p>
                <p className="text-xs text-gray-500">ئىككى ۋەقەنىڭ بىر ۋاقىتتا يۈز بېرىش ئىختىماللىقى</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">ئەمەلىي مىسال</h5>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">مەسىلە</div>
              <div className="font-medium text-gray-700">تاس ئاتقاندا 6 چىقىش ئىختىماللىقى</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">ھېسابلاش</div>
              <div className="font-medium text-gray-700">P(6) = 1/6</div>
              <div className="text-sm text-gray-600">≈ 16.67%</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">مۇرەككەپ مەسىلە</div>
              <div className="font-medium text-gray-700">ئىككى قېتىم ئاتقاندا 6 چىقىش ئىختىماللىقى</div>
              <div className="text-sm text-gray-600">1 - (5/6)² = 11/36 ≈ 30.56%</div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h6 className="font-medium text-gray-700 mb-2">چۈشەندۈرۈش:</h6>
            <p className="text-sm text-gray-600">
              بىر تاس ئاتقاندا 6 چىقىش ئىختىماللىقى 16.67% بولسا، 
              ئىككى قېتىم ئاتقاندا كەم دېگەندە بىر قېتىم 6 چىقىش ئىختىماللىقى 30.56% بولىدۇ.
            </p>
          </div>
        </div>
      </div>
    )
  },

  // 7. نەزەرە سىناقلاش
  'hypothesis': {
    title: 'نەزەرە سىناقلاش',
    icon: Target,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl border border-red-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">نەزەرە سىناقلاش</h4>
          <p className="text-gray-700 mb-4">
            ئىلمىي تەتقىقاتتا نەزەرىلەرنى دەلىللەش يەكى رەت قىلىش ئۇسۇلى.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">ئاساسىي چۈشەنچىلەر</h5>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <div className="font-medium text-red-700 mb-2">Null Hypothesis (H₀)</div>
                <p className="text-sm text-gray-600">
                  سىناق قىلىنىدىغان ئاساسىي نەزەرە. ئادەتتە «ھېچقانداق پەرق يوق» دېگەن مەنىدە.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-medium text-green-700 mb-2">Alternative Hypothesis (H₁)</div>
                <p className="text-sm text-gray-600">
                  تەتقىقاتچىنىڭ ئىسپاتلىماقچى بولغان نەزەرىسى.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">خاتالىق تۈرلىرى</h5>
            <div className="space-y-3">
              <div className="p-3 bg-red-50 rounded-lg">
                <div className="font-medium text-red-700">Type I Error (α)</div>
                <p className="text-sm text-gray-600">H₀ راست بولسىمۇ، رەت قىلىش</p>
                <p className="text-xs text-gray-500">ئادەتتە 0.05 (5%) قوللىنىلىدۇ</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="font-medium text-orange-700">Type II Error (β)</div>
                <p className="text-sm text-gray-600">H₀ خاتا بولسىمۇ، قوبۇل قىلىش</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-medium text-blue-700">Power (1-β)</div>
                <p className="text-sm text-gray-600">H₁ راست بولغاندا، توغرا قوبۇل قىلىش ئىختىماللىقى</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">سىناق تۈرلىرى</h5>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
              <div className="font-medium text-blue-700 mb-2">t-test</div>
              <p className="text-sm text-gray-600">ئىككى گۇرۇپپا ئوتتۇرىسىدىكى پەرقلەرنى تەكشۈرۈش</p>
              <ul className="mt-2 text-xs text-gray-500">
                <li>• One-sample t-test</li>
                <li>• Two-sample t-test</li>
                <li>• Paired t-test</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
              <div className="font-medium text-purple-700 mb-2">χ² test</div>
              <p className="text-sm text-gray-600">كاتېگورىيەلىك سانلىق مەلۇماتلارنى تەكشۈرۈش</p>
              <ul className="mt-2 text-xs text-gray-500">
                <li>• Goodness of fit</li>
                <li>• Independence test</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
              <div className="font-medium text-green-700 mb-2">ANOVA</div>
              <p className="text-sm text-gray-600">ئۈچ ياكى تېخىمۇ كۆپ گۇرۇپپىلار ئوتتۇرىسىدىكى پەرقلەرنى تەكشۈرۈش</p>
              <ul className="mt-2 text-xs text-gray-500">
                <li>• One-way ANOVA</li>
                <li>• Two-way ANOVA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // 8. رىگىرېسسىيە تەھلىلى
  'regression': {
    title: 'رىگىرېسسىيە تەھلىلى',
    icon: TrendingUp,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-6 rounded-xl border border-teal-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">رىگىرېسسىيە تەھلىلى</h4>
          <p className="text-gray-700 mb-4">
            ئۆزگەرگۈچىلەر ئوتتۇرىسىدىكى مۇناسىۋەتنى مودېللاشتۇرۇش ۋە ئىلگىرى سۈزۈش.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">رىگىرېسسىيە تۈرلىرى</h5>
            <div className="space-y-4">
              <div className="bg-teal-50 p-4 rounded-lg">
                <div className="font-medium text-teal-700 mb-2">Simple Linear Regression</div>
                <p className="text-sm text-gray-600">بىر مۇستەقىل ئۆزگەرگۈچى ۋە بىر تەۋە ئۆزگەرگۈچى</p>
                <code className="text-xs text-teal-600 mt-2 block">y = β₀ + β₁x + ε</code>
              </div>

              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="font-medium text-emerald-700 mb-2">Multiple Regression</div>
                <p className="text-sm text-gray-600">كۆپ مۇستەقىل ئۆزگەرگۈچىلەر ۋە بىر تەۋە ئۆزگەرگۈچى</p>
                <code className="text-xs text-emerald-600 mt-2 block">y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε</code>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">ئىزاھلاش كۈچى (R²)</h5>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-medium text-blue-700 mb-1">R² قىممىتى</div>
                <div className="text-2xl font-bold text-blue-600">0.85</div>
                <p className="text-sm text-gray-600">مودېل ئىزدىگەن ئۆزگىرىشنىڭ 85% نى ئىزاھلىدى</p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="font-medium text-orange-700 mb-2">تەڭشەلگەن R²</div>
                <p className="text-sm text-gray-600">
                  ئۆزگەرگۈچى سانىغا ماس كەلگەن ئىزاھلاش كۈچى. 
                  كۆپ ئۆزگەرگۈچى قوشقاندا R² ئۆسمەيدۇ.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">ئەمەلىي مىسال</h5>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-teal-50 to-emerald-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">مەسىلە</div>
              <div className="font-medium text-gray-700">ئوقۇش ۋاقتى بىلەن ئىمتىھان نومۇرى مۇناسىۋىتى</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">مودېل</div>
              <div className="font-medium text-gray-700">ئىمتىھان = 50 + 2.5 × (ئوقۇش ۋاقتى)</div>
              <div className="text-sm text-gray-600">R² = 0.72</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">چۈشەندۈرۈش</div>
              <div className="font-medium text-gray-700">ھەر بىر سائەت ئوقۇشقا</div>
              <div className="text-lg font-bold text-purple-600">2.5 نومۇر قوشۇلىدۇ</div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h6 className="font-medium text-gray-700 mb-2">تەھلىل:</h6>
            <p className="text-sm text-gray-600">
              ئوقۇش ۋاقتى ئىمتىھان نومۇرىنىڭ 72% نى ئىزاھلىغان. 
              ئوقۇش ۋاقتى 1 سائەت ئاشقاندا، ئىمتىھان نومۇرى ئوتتۇرىچە 2.5 نومۇر ئاشىدۇ.
            </p>
          </div>
        </div>
      </div>
    )
  },

  // 9. ئىختىمال تارقىلىشلىرى
  'distributions': {
    title: 'ئىختىمال تارقىلىشلىرى',
    icon: LineChart,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 p-6 rounded-xl border border-violet-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">ئىختىمال تارقىلىشلىرى</h4>
          <p className="text-gray-700 mb-4">
            ھەر خىل ئىختىمال تارقىلىشلىرى ۋە ئۇلارنىڭ ئالاھىدىلىكلىرى.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">N</span>
              </div>
              <h5 className="font-semibold text-gray-800">Normal Distribution</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              قوغۇچ شەكلىدىكى تارقىلىش. تەبىئىي پەنلەردە كۆپ ئۇچرايدۇ.
            </p>
            <div className="bg-blue-50 p-2 rounded">
              <code className="text-xs text-blue-600">N(μ, σ²)</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">B</span>
              </div>
              <h5 className="font-semibold text-gray-800">Binomial Distribution</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              ئىككى نەتىجىلىك تەجرىبىلەر ئۈچۈن. مۇۋەپپەقىيەت-مەغلۇبىيەت تارقىلىشى.
            </p>
            <div className="bg-green-50 p-2 rounded">
              <code className="text-xs text-green-600">B(n, p)</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">P</span>
              </div>
              <h5 className="font-semibold text-gray-800">Poisson Distribution</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              نادار ۋەقەلەرنىڭ ۋاقىت بىرلىكى ئىچىدىكى يۈز بېرىش سانى.
            </p>
            <div className="bg-purple-50 p-2 rounded">
              <code className="text-xs text-purple-600">P(λ)</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">E</span>
              </div>
              <h5 className="font-semibold text-gray-800">Exponential Distribution</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              ۋاقىت ئارىلىقى تارقىلىشى. نادار ۋەقەلەر ئوتتۇرىسىدىكى ۋاقىت.
            </p>
            <div className="bg-orange-50 p-2 rounded">
              <code className="text-xs text-orange-600">Exp(λ)</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">t</span>
              </div>
              <h5 className="font-semibold text-gray-800">t-Distribution</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              كىچىك نۇمۇنە ئۈچۈن نورمال تارقىلىشنىڭ ئالماشتۇرغۇچىسى.
            </p>
            <div className="bg-red-50 p-2 rounded">
              <code className="text-xs text-red-600">t(df)</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">χ²</span>
              </div>
              <h5 className="font-semibold text-gray-800">Chi-Square Distribution</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              كاتېگورىيەلىك سانلىق مەلۇماتلار ئۈچۈن. ئەركىنلىك دەرىجىسىگە باغلىق.
            </p>
            <div className="bg-cyan-50 p-2 rounded">
              <code className="text-xs text-cyan-600">χ²(df)</code>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">تارقىلىش سېلىشتۇرۇشى</h5>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">تارقىلىش</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">پارامېتىرلار</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئىشلىتىش</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">مىسال</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Normal</td>
                  <td className="px-4 py-3 text-sm text-gray-700">μ, σ</td>
                  <td className="px-4 py-3 text-sm text-gray-700">تەبىئىي پەنلەر</td>
                  <td className="px-4 py-3 text-sm text-gray-700">ئېگىزلىك، ئېقىم دەرىجىسى</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Binomial</td>
                  <td className="px-4 py-3 text-sm text-gray-700">n, p</td>
                  <td className="px-4 py-3 text-sm text-gray-700">مۇۋەپپەقىيەت/مەغلۇبىيەت</td>
                  <td className="px-4 py-3 text-sm text-gray-700">تاس ئېتىش، سىككىرەش</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Poisson</td>
                  <td className="px-4 py-3 text-sm text-gray-700">λ</td>
                  <td className="px-4 py-3 text-sm text-gray-700">نادار ۋەقەلەر</td>
                  <td className="px-4 py-3 text-sm text-gray-700">يۇمۇرتچا سانى، زىيان يەتكۈزۈش</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },

  // 10. ماشىنا ئۆگىنىشى بىلەن ئالاقىسى
  'ml': {
    title: 'ماشىنا ئۆگىنىشى بىلەن ئالاقىسى',
    icon: Brain,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">ماشىنا ئۆگىنىشى بىلەن ئالاقىسى</h4>
          <p className="text-gray-700 mb-4">
            ستاتىستىكا ماشىنا ئۆگىنىشىنىڭ ئانا ئىلىمى. ھەر ئىككىسى سانلىق مەلۇماتلار بىلەن مۇئامىلە قىلىدۇ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">ئورتاق جەھەتلەر</h5>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">سانلىق مەلۇمات تەھلىلى ۋە ئىشلەش</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">مۇناسىۋەت ۋە سەۋەب-نەتىجە تەھلىلى</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">مودېللاشتۇرۇش ۋە پىششىقلاپ بېرىش</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">خاتالىق باھالىمىسى (Loss Functions)</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">مودېل باھالىمىسى (Evaluation Metrics)</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">پەرقلىق جەھەتلەر</h5>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-medium text-blue-700 mb-1">ستاتىستىكا</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• چۈشەندۈرۈشكە ئەھمىيەت بېرىدۇ</li>
                  <li>• كىچىك سانلىق مەلۇمات</li>
                  <li>• سەۋەب-نەتىجە مۇناسىۋىتى</li>
                  <li>• دەلىللەشكە قاتتىق تاۋاپ قىلىدۇ</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="font-medium text-purple-700 mb-1">ماشىنا ئۆگىنىشى</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• پىششىقلاپ بېرىشكە ئەھمىيەت بېرىدۇ</li>
                  <li>• چوڭ سانلىق مەلۇمات</li>
                  <li>• مۇناسىۋەت ۋە ئۇلاش</li>
                  <li>• نەتىجىگە قاتتىق تاۋاپ قىلىدۇ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">ئەمەلىي قوشۇلۇش</h5>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
              <div className="font-medium text-green-700 mb-2">Feature Engineering</div>
              <p className="text-sm text-gray-600">
                ستاتىستىكىلىق تەھلىل ئارقىلىق ئەڭ مۇھىم ئۆزگەرگۈچىلەرنى تاللاش
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
              <div className="font-medium text-blue-700 mb-2">Model Evaluation</div>
              <p className="text-sm text-gray-600">
                ستاتىستىكىلىق ئۆلچەملەر بىلەن مودېل ئىنچىكىلىقىنى باھالاش
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
              <div className="font-medium text-purple-700 mb-2">Hyperparameter Tuning</div>
              <p className="text-sm text-gray-600">
                ستاتىستىكىلىق ئۇسۇللار بىلەن مودېل پارامېتىرلىرىنى تەڭشەش
              </p>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h6 className="font-medium text-gray-700 mb-2">ئۆلچەملەر:</h6>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="text-center p-2 bg-white rounded border">
                <div className="text-sm text-gray-600">Accuracy</div>
                <div className="text-lg font-bold text-blue-600">92.5%</div>
              </div>
              <div className="text-center p-2 bg-white rounded border">
                <div className="text-sm text-gray-600">Precision</div>
                <div className="text-lg font-bold text-green-600">88.3%</div>
              </div>
              <div className="text-center p-2 bg-white rounded border">
                <div className="text-sm text-gray-600">Recall</div>
                <div className="text-lg font-bold text-purple-600">90.1%</div>
              </div>
              <div className="text-center p-2 bg-white rounded border">
                <div className="text-sm text-gray-600">F1-Score</div>
                <div className="text-lg font-bold text-orange-600">89.2%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // 11. Python ئارقىلىق ستاتىستىكا
  'python': {
    title: 'Python ئارقىلىق ستاتىستىكا',
    icon: Cpu,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">Python ئارقىلىق ستاتىستىكا</h4>
          <p className="text-gray-700 mb-4">
            Python دىكى كۈتۈخانىلار ئارقىلىق ستاتىستىكىلىق تەھلىللەرنى ئېلىپ بېرىش.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">مۇھىم كۈتۈخانىلار</h5>
            <div className="space-y-4">
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="font-medium text-amber-700 mb-1">NumPy</div>
                <p className="text-sm text-gray-600">
                  سانلىق ھېسابلاش ئۈچۈن. ماترىتسا ۋە سانلىق مەلۇمات قۇرۇلمىلىرى.
                </p>
                <code className="text-xs text-amber-600 mt-2 block">import numpy as np</code>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-medium text-blue-700 mb-1">Pandas</div>
                <p className="text-sm text-gray-600">
                  سانلىق مەلۇمات تەھلىلى ئۈچۈن. DataFrame ۋە سانلىق مەلۇمات تەھرىرلەش.
                </p>
                <code className="text-xs text-blue-600 mt-2 block">import pandas as pd</code>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-medium text-green-700 mb-1">SciPy</div>
                <p className="text-sm text-gray-600">
                  ئىلمىي ھېسابلاش ۋە ستاتىستىكا ئۈچۈن. t-test, ANOVA, regression.
                </p>
                <code className="text-xs text-green-600 mt-2 block">from scipy import stats</code>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">كۆرسىتىش كۈتۈخانىلىرى</h5>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="font-medium text-purple-700 mb-1">Matplotlib</div>
                <p className="text-sm text-gray-600">
                  ئاساسىي گرافىك كۆرسىتىش. Line plot, bar chart, histogram.
                </p>
                <code className="text-xs text-purple-600 mt-2 block">import matplotlib.pyplot as plt</code>
              </div>

              <div className="bg-pink-50 p-4 rounded-lg">
                <div className="font-medium text-pink-700 mb-1">Seaborn</div>
                <p className="text-sm text-gray-600">
                  ستاتىستىكىلىق گرافىكلار. Heatmap, violin plot, pair plot.
                </p>
                <code className="text-xs text-pink-600 mt-2 block">import seaborn as sns</code>
              </div>

              <div className="bg-cyan-50 p-4 rounded-lg">
                <div className="font-medium text-cyan-700 mb-1">Plotly</div>
                <p className="text-sm text-gray-600">
                  ئىنتېرئاكتىپ گرافىكلار. Interactive visualization.
                </p>
                <code className="text-xs text-cyan-600 mt-2 block">import plotly.express as px</code>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">ئەمەلىي كود مىسالى</h5>
          <div className="bg-gray-800 text-gray-100 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm">
{`import pandas as pd
import numpy as np
from scipy import stats
import matplotlib.pyplot as plt
import seaborn as sns

# 1. سانلىق مەلۇمات يۈكلەش
data = pd.read_csv('student_scores.csv')

# 2. ئاساسىي ستاتىستىكا
print("ئاساسىي ستاتىستىكا:")
print(data.describe())

# 3. ئۆرتە قىممەت ۋە ستاندارت ساپما
mean_score = data['score'].mean()
std_score = data['score'].std()
print(f"ئۆرتە قىممەت: {mean_score:.2f}")
print(f"ستاندارت ساپما: {std_score:.2f}")

# 4. t-test (ئىككى گۇرۇپپا)
group_a = data[data['group'] == 'A']['score']
group_b = data[data['group'] == 'B']['score']
t_stat, p_value = stats.ttest_ind(group_a, group_b)
print(f"t-test نەتىجىسى: t = {t_stat:.3f}, p = {p_value:.3f}")

# 5. گرافىك كۆرسىتىش
plt.figure(figsize=(10, 6))
sns.histplot(data['score'], kde=True)
plt.title('ئوقۇغۇچى نومۇر تارقىلىشى')
plt.xlabel('نومۇر')
plt.ylabel('چاستوتا')
plt.show()`}
            </pre>
          </div>
          
          <div className="mt-4 p-4 bg-amber-50 rounded-lg">
            <h6 className="font-medium text-amber-700 mb-2">كود ئىزاھاتى:</h6>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• pandas: سانلىق مەلۇمات يۈكلەش ۋە تەھلىل</li>
              <li>• scipy.stats: ستاتىستىكىلىق سىناقلار (t-test, ANOVA, correlation)</li>
              <li>• matplotlib/seaborn: گرافىك كۆرسىتىش</li>
              <li>• numpy: سانلىق ھېسابلاش</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  // 12. ئەمەلىي لايىھىلەر
  'projects': {
    title: 'ئەمەلىي لايىھىلەر',
    icon: FileText,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">ئەمەلىي لايىھىلەر</h4>
          <p className="text-gray-700 mb-4">
            ستاتىستىكىلىق بىلىملەرنى ھەقىقىي دۇنيا مەسىلىلىرىگە قوللىنىش.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">لائىھە تۈرلىرى</h5>
            <div className="space-y-4">
              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="font-medium text-emerald-700 mb-2">تەبىئىي پەنلەر</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• تېببىي تەتقىقات سانلىق مەلۇماتلىرى</li>
                  <li>• بىئولوگىيەلىك ئۆلچەملەر</li>
                  <li>• كىلىمات ئۆزگىرىش سانلىق مەلۇماتلىرى</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-medium text-blue-700 mb-2">ئىجتىمائىي پەنلەر</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• سوراقنامە سانلىق مەلۇماتلىرى</li>
                  <li>• ئىقتىسادىي كۆرسەتكۈچلەر</li>
                  <li>• سىياسىي باھالاش سانلىق مەلۇماتلىرى</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">لائىھە قەدەملىرى</h5>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <div>
                  <div className="font-medium text-gray-700">مەسىلە بەلگىلەش</div>
                  <div className="text-sm text-gray-600">تەتقىق قىلىدىغان مەسىلىنى بەلگىلەش</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <div>
                  <div className="font-medium text-gray-700">سانلىق مەلۇمات توپلاش</div>
                  <div className="text-sm text-gray-600">سانلىق مەلۇماتلارنى توپلاش ۋە تەييارلاش</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <div className="font-medium text-gray-700">تەھلىل قىلىش</div>
                  <div className="text-sm text-gray-600">ستاتىستىكىلىق تەھلىللەرنى ئېلىپ بېرىش</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 font-bold">4</span>
                </div>
                <div>
                  <div className="font-medium text-gray-700">خۇلاسە چىقىرىش</div>
                  <div className="text-sm text-gray-600">نەتىجىلەرنى چۈشەندۈرۈپ، خۇلاسە چىقىرىش</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">لائىھە مىساللىرى</h5>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border">
              <div className="font-medium text-blue-700 mb-2">ئوقۇغۇچى نەتىجىسى تەھلىلى</div>
              <p className="text-sm text-gray-600 mb-3">
                مەكتەپ ئوقۇغۇچىلىرىنىڭ ئىمتىھان نەتىجىلىرىنى تەھلىل قىلىش.
              </p>
              <div className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded inline-block">
                ئۆرتە قىممەت • تارقىلىش • t-test
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border">
              <div className="font-medium text-green-700 mb-2">بازار باھاسى تەرقالمىسى</div>
              <p className="text-sm text-gray-600 mb-3">
                بازار باھاسىنىڭ تەرقالما دەرىجىسىنى تەھلىل قىلىش.
              </p>
              <div className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded inline-block">
                ۋارىياتسىيە • SD • نورمال تارقىلىش
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg border">
              <div className="font-medium text-purple-700 mb-2">كىرىپتو پۇل ئۆزگىرىشى</div>
              <p className="text-sm text-gray-600 mb-3">
                كىرىپتو پۇل نادىر ئۆزگىرىشىنى تەھلىل قىلىش.
              </p>
              <div className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded inline-block">
                پىششىقلاپ بېرىش • تارقىلىش • رىگىرېسسىيە
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border">
              <div className="font-medium text-orange-700 mb-2">كورونا سانلىق مەلۇماتى</div>
              <p className="text-sm text-gray-600 mb-3">
                كورونا سانلىق مەلۇماتىنى مۇلاھىزە قىلىش ۋە پىششىقلاپ بېرىش.
              </p>
              <div className="text-xs text-orange-600 bg-orange-100 px-2 py-1 rounded inline-block">
                ۋاقىت سېرىيىسى • پىششىقلاپ بېرىش • تەھلىل
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 p-4 rounded-lg border">
              <div className="font-medium text-red-700 mb-2">تۇرمۇش باھاسى تەھلىلى</div>
              <p className="text-sm text-gray-600 mb-3">
                تۇرمۇش باھاسى ئۆزگىرىشىنى تەھلىل قىلىش.
              </p>
              <div className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded inline-block">
                ئۆزگىرىش • مۇناسىۋەت • پىششىقلاپ بېرىش
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 p-4 rounded-lg border">
              <div className="font-medium text-cyan-700 mb-2">ئىشلەپچىقىرىش تەھلىلى</div>
              <p className="text-sm text-gray-600 mb-3">
                كارخانىلارنىڭ ئىشلەپچىقىرىش كۆرسەتكۈچلىرىنى تەھلىل قىلىش.
              </p>
              <div className="text-xs text-cyan-600 bg-cyan-100 px-2 py-1 rounded inline-block">
                ئوتتۇرىچە • تارقىلىش • خەلقارا باھالاش
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Statistics Levels
  'level1': {
    title: 'ستاتىستىكا سىناق 1-دەرىجە',
    icon: Award,
    content: <StatisticsLevel1 />
  },
  'level2': {
    title: 'ستاتىستىكا سىناق 2-دەرىجە',
    icon: Award,
    content: <StatisticsLevel2 />
  },
  'level3': {
    title: 'ستاتىستىكا سىناق 3-دەرىجە',
    icon: Award,
    content: <StatisticsLevel3 />
  },
  'level4': {
    title: 'ستاتىستىكا سىناق 4-دەرىجە',
    icon: Award,
    content: <StatisticsLevel4 />
  }
};

const StatisticsModule = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeTestLevel, setActiveTestLevel] = useState(null);
  const [selectedContent, setSelectedContent] = useState(null);

  const testLevels = {
    'level1': {
      name: 'ستاتىستىكا سىناق 1-دەرىجە',
      description: 'ئىپادىلەرنى چۈشىنىش ۋە ساددە ھېسابلاش',
      icon: Award,
      color: 'from-green-500 to-emerald-600',
      topics: [
        'سانلىق مەلۇمات تۈرلىرى',
        'ئۆرتە قىممەت، ئوتتۇرا قىممەت، ئەڭ كۆپ ئۇچرايدىغان قىممەت',
        'ئاددىي گرافىكلار',
        'ئىختىمالنىڭ ئاساسى',
        'سوراقنامە لايىھىلەش'
      ]
    },
    'level2': {
      name: 'ستاتىستىكا سىناق 2-دەرىجە',
      description: 'ئاساسىي تەھلىل ۋە چۈشەندۈرۈش',
      icon: Award,
      color: 'from-blue-500 to-cyan-600',
      topics: [
        'ستاندارت ساپما ۋە ۋارىياتسىيە',
        'نورمال تارقىلىش',
        'ئاددىي خەلقارا باھالاش',
        'تەجرىبە لايىھىلەش',
        'ئاساسىي پىروگرامما ئىشلىتىش'
      ]
    },
    'level3': {
      name: 'ستاتىستىكا سىناق 3-دەرىجە',
      description: 'مۇرەككەپ تەھلىل ۋە قوللىنىش',
      icon: Award,
      color: 'from-purple-500 to-violet-600',
      topics: [
        'تەكشۈرۈش سىناقلىرى',
        'ئىنفېرېنسىيال تەھلىل',
        'رىگىرېسسىيە تەھلىلى',
        'كۆپ ئۆزگەرگۈچىلىك تەھلىل',
        'پىروگرامما ئارقىلىق تەھلىل'
      ]
    },
    'level4': {
      name: 'ستاتىستىكا سىناق 4-دەرىجە',
      description: 'ئىلمىي تەتقىقات ۋە ئىلگىرى سۈزۈش',
      icon: Award,
      color: 'from-orange-500 to-amber-600',
      topics: [
        'ئىلمىي تەتقىقات لايىھىلەش',
        'مۇرەككەپ مودېللاشتۇرۇش',
        'ئىلگىرى سۈزۈش تەھلىلى',
        'دەلىللەش ئۇسۇللىرى',
        'تەتقىقات خاتىرىسى يېزىش'
      ]
    }
  };

  const menuItems = [
    { id: 'intro', icon: BookOpen, title: 'ستاتىستىكا دەرسىگە كىرىش' },
    { id: 'data-types', icon: Database, title: 'سانلىق مەلۇمات تۈرى' },
    { id: 'descriptive', icon: Layers, title: 'دسىكرىپتىۋ ستاتىستىكا' },
    { id: 'visualization', icon: BarChart, title: 'سۈرەتلەش ئۇسۇلى' },
    { id: 'inferential', icon: GitBranch, title: 'ئىنپېرېتىتاۋ ستاتىستىكا' },
    { id: 'probability', icon: Calculator, title: 'ئىختىمال نازارىيىسى' },
    { id: 'hypothesis', icon: Target, title: 'نەزەرە سىناقلاش' },
    { id: 'regression', icon: TrendingUp, title: 'رىگىرېسسىيە تەھلىلى' },
    { id: 'distributions', icon: LineChart, title: 'ئىختىمال تارقىلىشلىرى' },
    { id: 'ml', icon: Brain, title: 'ماشىنا ئۆگىنىشى بىلەن ئالاقىسى' },
    { id: 'python', icon: Cpu, title: 'Python ئارقىلىق ستاتىستىكا' },
    { id: 'projects', icon: FileText, title: 'ئەمەلىي لايىھىلەر' }
  ];

  const handleMenuClick = (id) => {
    if (contentMap[id]) {
      setSelectedContent(contentMap[id]);
      setActiveSection(id);
      setActiveTestLevel(null);
    }
  };

  const handleLevelClick = (levelId) => {
    if (contentMap[levelId]) {
      setSelectedContent(contentMap[levelId]);
      setActiveTestLevel(levelId);
      setActiveSection(null);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
              <PieChart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">ئىستاتىستىكا - سانلىق مەلۇمات تەھلىلى</h1>
              <p className="text-gray-600 mt-1">سانلىق مەلۇماتنى چۈشىنىش ۋە قارار چىقىرىش پەنى</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100 mb-6">
            <p className="text-gray-700 text-lg">
              ستاتىستىكا سانلىق مەلۇمات توپلاش، تەھلىل قىلىش، چۈشەندۈرۈش ۋە كۆرسىتىشتەك جەريانلاردۇر. 
              ئۇ تۇرمۇشىمىزنىڭ ھەر ساھەسىدە مۇھىم رول ئوينايدۇ.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Menu */}
          <div className="lg:w-1/4 space-y-6">
            {/* Test Levels */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  ستاتىستىكا دەرىجىلىرى
                </h3>
              </div>
              
              <div className="p-4">
                <div className="space-y-3">
                  {Object.entries(testLevels).map(([key, level]) => (
                    <div key={key} className="relative">
                      <button
                        onClick={() => handleLevelClick(key)}
                        className={`w-full p-3 rounded-lg text-left transition-all ${
                          activeTestLevel === key 
                            ? 'bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200' 
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${level.color} flex items-center justify-center`}>
                              <level.icon className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-800">{level.name}</div>
                              <div className="text-xs text-gray-500">{level.description}</div>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        </div>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Menu */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  مۇندەرىجە
                </h3>
              </div>
              
              <div className="p-2">
                <nav className="space-y-1">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleMenuClick(item.id)}
                      className={`w-full flex items-center gap-3 p-3 rounded-lg text-left transition-all ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200'
                          : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-100 to-cyan-100'
                          : 'bg-gray-100'
                      }`}>
                        <item.icon className={`w-4 h-4 ${
                          activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
                        }`} />
                      </div>
                      <span className={`font-medium ${
                        activeSection === item.id ? 'text-blue-700' : 'text-gray-700'
                      }`}>
                        {item.title}
                      </span>
                      {activeSection === item.id && (
                        <ChevronRight className="w-4 h-4 text-blue-500 ml-auto" />
                      )}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {selectedContent ? (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
                {/* Content Header */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-100 p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                      <selectedContent.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{selectedContent.title}</h2>
                      <p className="text-gray-600 mt-1">ستاتىستىكا دەرىسلىكى</p>
                    </div>
                    <button
                      onClick={() => {
                        setSelectedContent(null);
                        setActiveSection(null);
                        setActiveTestLevel(null);
                      }}
                      className="ml-auto p-2 hover:bg-white rounded-lg transition-colors"
                    >
                      <XCircle className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                    </button>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6">
                  {selectedContent.content}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8">
                <div className="text-center py-12">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mb-6">
                    <Home className="w-12 h-12 text-purple-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-3">
                    ستاتىستىكا دەرىسلىكىگە خۇش كەلدىڭىز!
                  </h2>
                  <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                    سول تەرەپتىكى مۇندەرىجىدىن ئۆگىنمەكچى بولغان تېمىنى تاللاڭ ياكى 
                    ستاتىستىكا دەرىجىلىرىنى كۆرۈپ، ئۆز دەرىجىڭىزنى بەلگىلەڭ.
                  </p>
                  
                  <div className="grid md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                      <div className="font-semibold text-green-700 mb-2">1-دەرىجە</div>
                      <p className="text-sm text-gray-600">ئاساسىي چۈشەنچىلەر</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100">
                      <div className="font-semibold text-blue-700 mb-2">2-دەرىجە</div>
                      <p className="text-sm text-gray-600">ئاساسىي تەھلىل</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-100">
                      <div className="font-semibold text-purple-700 mb-2">3-دەرىجە</div>
                      <p className="text-sm text-gray-600">مۇرەككەپ تەھلىل</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-xl border border-orange-100">
                      <div className="font-semibold text-orange-700 mb-2">4-دەرىجە</div>
                      <p className="text-sm text-gray-600">ئىلمىي تەتقىقات</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsModule;