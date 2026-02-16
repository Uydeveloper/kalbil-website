// src/components/learn-modules/BigDataModule.jsx
import React, { useState } from 'react';
import { 
  Cloud, 
  Database, 
  Server, 
  BarChart3, 
  Zap, 
  Globe,
  Cpu,
  HardDrive,
  Network,
  Layers,
  GitBranch,
  TrendingUp,
  BarChart,
  LineChart,
  PieChart,
  Filter,
  Search,
  Download,
  Upload,
  RefreshCw,
  Shield,
  Lock,
  Unlock,
  Users,
  MessageSquare,
  ShoppingCart,
  Smartphone,
  Wifi,
  Activity,
  Target,
  Award,
  BookOpen,
  ChevronRight,
  ChevronDown,
  Home,
  XCircle,
  CheckCircle,
  AlertCircle,
  Clock,
  Calendar,
  MapPin,
  Navigation,
  FileText,
  Code,
  Terminal,
  Coffee,
  Rocket,
  Sparkles
} from 'lucide-react';

// Big Data Level Components
const BigDataLevel1 = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">1-دەرىجە: چوڭ سانلىق مەلۇماتنىڭ ئاساسى</h3>
      <p className="text-gray-700 mb-4">
        چوڭ سانلىق مەلۇماتنىڭ ئاساسىي چۈشەنچىلىرى، 5V پرىنسىپى ۋە ئاساسىي تېخنىكىلار.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئۆگىنىش نۇقتىلىرى</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">چوڭ سانلىق مەلۇماتنىڭ تەرىپى ۋە ئىلمىي دائىرىسى</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">5V پرىنسىپى: Volume, Velocity, Variety, Veracity, Value</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">سانلىق مەلۇمات تىپلىرى: Structured, Semi-structured, Unstructured</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ئاساسىي تېخنىكىلار: Hadoop, HDFS, MapReduce</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">چوڭ سانلىق مەلۇماتنىڭ قوللىنىش ساھەلىرى</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئەمەلىي مىسال</h4>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-700 mb-2">ئىجتىمائىي تاراتقۇ مىسالى:</h5>
            <p className="text-gray-600">Twitter دا ھەر كۈنى ئىشلەنگەن سانلىق مەلۇمات</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600">تۋىت سانى</div>
              <div className="text-lg font-bold text-blue-600">500M+</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600">سانلىق مەلۇمات ھەجىمى</div>
              <div className="text-lg font-bold text-green-600">1TB+</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-sm text-gray-600">ئىشلەتكۈچى سانى</div>
              <div className="text-lg font-bold text-purple-600">330M+</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="text-sm text-gray-600">ۋاقىت</div>
              <div className="text-lg font-bold text-orange-600">24/7</div>
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
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">15 سائەت</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-700">5V پرىنسىپى</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">20 سائەت</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">ئاساسىي تېخنىكىلار</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">10 سائەت</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const BigDataLevel2 = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">2-دەرىجە: تېخنىكىلىق قوراللار</h3>
      <p className="text-gray-700 mb-4">
        چوڭ سانلىق مەلۇمات بىر تەرەپ قىلىش تېخنىكىلىق قوراللىرى ۋە ئۇلارنىڭ قوللىنىشى.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئۆگىنىش نۇقتىلىرى</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Hadoop ئارخىتېكتورىسى ۋە HDFS (Hadoop Distributed File System)</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">MapReduce پروگرامما مودېلى ۋە ئۇنىڭ قوللىنىشى</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Apache Spark: تېز ھېسابلاش ماتورى ۋە RDD</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">NoSQL سانلىق مەلۇمات بازىلىرى: MongoDB, Cassandra, HBase</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">سانلىق مەلۇمات ئېقىم تېخنىكىسى: Kafka, Storm</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">تېخنىكىلىق سېلىشتۇرۇش</h4>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-700 mb-2">ھېسابلاش سېلىشتۇرۇش:</h5>
            <p className="text-gray-600">1TB سانلىق مەلۇماتنى تەھلىل قىلىش</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600">تەقلۇسىي قورال</div>
              <div className="text-lg font-bold text-green-600">72 سائەت</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600">Hadoop</div>
              <div className="text-lg font-bold text-blue-600">3.6 سائەت</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-sm text-gray-600">Spark</div>
              <div className="text-lg font-bold text-purple-600">1.2 سائەت</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="text-sm text-gray-600">GPU قاتارلاش</div>
              <div className="text-lg font-bold text-orange-600">0.8 سائەت</div>
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
              <td className="px-4 py-3 text-sm text-gray-700">Hadoop ئارخىتېكتورىسى</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">25 سائەت</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-700">Spark ۋە RDD</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">20 سائەت</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">NoSQL سانلىق مەلۇمات بازىسى</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">15 سائەت</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

const BigDataLevel3 = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">3-دەرىجە: مۇرەككەپ تەھلىل</h3>
      <p className="text-gray-700 mb-4">
        چوڭ سانلىق مەلۇماتنىڭ مۇرەككەپ تەھلىل ئۇسۇللىرى ۋە ماشىنا ئۆگىنىشى بىلەن باغلىنىشى.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئۆگىنىش نۇقتىلىرى</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ماشىنا ئۆگىنىشى ئالگورىتىملىرىنى چوڭ سانلىق مەلۇماتقا قوللىنىش</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ئىلگىرى سۈزۈش (Predictive Analytics) ۋە پىششىقلاپ بېرىش</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">سانلىق مەلۇمات سىتاتىستىكىسى ۋە چوڭ سانلىق مەلۇمات ئۆلچەملىرى</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">سانلىق مەلۇمات كۆرسىتىش (Data Visualization) ۋە تەھلىل نەتىجىسى</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">ئۇچۇر خەۋپسىزلىكى ۋە مەخپىيەتلىك (Data Privacy & Security)</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئەمەلىي مىسال</h4>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-700 mb-2">تېببىي چوڭ سانلىق مەلۇمات:</h5>
            <p className="text-gray-600">100,000 بىمارنىڭ تېببىي خاتىرىسى</p>
            <p className="text-gray-600">ماشىنا ئۆگىنىشى ئارقىلىق كېسەل ئالدىن بېكىتىش</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-sm text-gray-600">مودېل دەقىقىلىقى</div>
              <div className="text-lg font-bold text-purple-600">94.7%</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600">ئىلگىرى سۈزۈش ۋاقتى</div>
              <div className="text-lg font-bold text-blue-600">0.3 سېكۇنت</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600">سانلىق مەلۇمات ھەجىمى</div>
              <div className="text-lg font-bold text-green-600">2.5TB</div>
            </div>
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="text-sm text-gray-600">ئۆزگەرگۈچى سانى</div>
              <div className="text-lg font-bold text-orange-600">1,200+</div>
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
              <td className="px-4 py-3 text-sm text-gray-700">ماشىنا ئۆگىنىشى قوشۇلۇشى</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">30 سائەت</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-700">ئىلگىرى سۈزۈش تەھلىلى</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">25 سائەت</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">سانلىق مەلۇمات خەۋپسىزلىكى</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '35%' }}></div>
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

const BigDataLevel4 = () => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
      <h3 className="text-xl font-bold text-gray-800 mb-4">4-دەرىجە: ئىلگىرى سۈزۈش ۋە ئىلمىي تەتقىقات</h3>
      <p className="text-gray-700 mb-4">
        چوڭ سانلىق مەلۇماتنى ئىلمىي تەتقىقات ۋە ئىلگىرى سۈزۈش مەقسەتلىرىگە قوللىنىش.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئۆگىنىش نۇقتىلىرى</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">تەپسىلاتلىق چوڭ سانلىق مەلۇمات تەتقىقات لايىھىلەش</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">Deep Learning ۋە Neural Network لارنى چوڭ سانلىق مەلۇماتقا قوللىنىش</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">سۇنئىي ئەقىل (AI) بىلەن چوڭ سانلىق مەلۇماتنىڭ بىرلەشمىسى</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">چوڭ سانلىق مەلۇمات ئارخىتېكتورىسى لايىھىلەش</span>
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">چوڭ سانلىق مەلۇمات پىروژىكتلىرىنى باشقۇرۇش ۋە ئورۇنلاشتۇرۇش</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h4 className="font-bold text-gray-800 mb-4">ئەمەلىي مىسال</h4>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h5 className="font-semibold text-gray-700 mb-2">كىرىپتو پۇل باھاسىنى ئىلگىرى سۈزۈش:</h5>
            <p className="text-gray-600">ئارقا سانلىق مەلۇمات: 5 يىللىق كۈندىلىك باھا</p>
            <p className="text-gray-600">مودېل: Deep Learning + Time Series Analysis</p>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-orange-50 rounded-lg">
              <div className="text-sm text-gray-600">پىششىقلاپ بېرىش دەقىقىلىقى</div>
              <div className="text-lg font-bold text-orange-600">95.8%</div>
            </div>
            <div className="p-3 bg-purple-50 rounded-lg">
              <div className="text-sm text-gray-600">مۇرەككەپ مودېل</div>
              <div className="text-lg font-bold text-purple-600">LSTM + GRU</div>
            </div>
            <div className="p-3 bg-blue-50 rounded-lg">
              <div className="text-sm text-gray-600">ھېسابلاش ۋاقتى</div>
              <div className="text-lg font-bold text-blue-600">2.5 سائەت</div>
            </div>
            <div className="p-3 bg-green-50 rounded-lg">
              <div className="text-sm text-gray-600">سانلىق مەلۇمات ھەجىمى</div>
              <div className="text-lg font-bold text-green-600">8.3TB</div>
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
              <td className="px-4 py-3 text-sm text-gray-700">Deep Learning قوشۇلۇشى</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '50%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">35 سائەت</td>
            </tr>
            <tr className="bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-700">ئارخىتېكتورىلا لايىھىلەش</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">30 سائەت</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-gray-700">پىروژېكت باشقۇرۇش</td>
              <td className="px-4 py-3">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-orange-600 h-2 rounded-full" style={{ width: '40%' }}></div>
                </div>
              </td>
              <td className="px-4 py-3 text-sm text-gray-700">25 سائەت</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

// All Content Components for each menu item
const contentMap = {
  // 1. چوڭ سانلىق مەلۇماتنىڭ ئاساسى
  'basics': {
    title: 'چوڭ سانلىق مەلۇماتنىڭ ئاساسى',
    icon: Cloud,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">چوڭ سانلىق مەلۇمات نىمە؟</h4>
          <p className="text-gray-700 mb-4">
            چوڭ سانلىق مەلۇمات ئىنتايىن كەڭ، تېز ۋە كۆپ خىل سانلىق مەلۇمات توپلىمى بولۇپ،
            ئەنئەنىۋى سانلىق مەلۇمات بىر تەرەپ قىلىش قوراللىرى بىلەن بىر تەرەپ قىلىشقا تېگىشلىك بولمايدۇ.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">5V پرىنسىپى</h5>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-medium text-blue-700 mb-1">ھەجىم (Volume)</div>
                <p className="text-sm text-gray-600">ئىنتايىن كۆپ مىقداردىكى سانلىق مەلۇمات</p>
                <div className="mt-2 text-xs text-blue-600">مىسال: پېترابايت (PB) دەرىجىسىدىكى سانلىق مەلۇمات</div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-medium text-green-700 mb-1">سۈرئەت (Velocity)</div>
                <p className="text-sm text-gray-600">تېز ۋاقىتتا توپلىنىدىغان سانلىق مەلۇمات</p>
                <div className="mt-2 text-xs text-green-600">مىسال: ھەقىقىي ۋاقىت سانلىق مەلۇمات ئېقىمى</div>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="font-medium text-purple-700 mb-1">خىللىق (Variety)</div>
                <p className="text-sm text-gray-600">كۆپ خىل فورماتتىكى سانلىق مەلۇمات</p>
                <div className="mt-2 text-xs text-purple-600">مىسال: تېكىست، رەسىم، ئاۋاز، ۋىدىئو</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">قوشۇمچە V لار</h5>
            <div className="space-y-4">
              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="font-medium text-orange-700 mb-1">ھەقىقىيلىك (Veracity)</div>
                <p className="text-sm text-gray-600">سانلىق مەلۇماتنىڭ ئىشەنچلىكلىكى ۋە دەقىقىلىكى</p>
                <div className="mt-2 text-xs text-orange-600">مىسال: سانلىق مەلۇماتنىڭ ئىشەنچ دەرىجىسى</div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <div className="font-medium text-red-700 mb-1">قىممەت (Value)</div>
                <p className="text-sm text-gray-600">سانلىق مەلۇماتنىڭ پايدىلىقلىق دەرىجىسى</p>
                <div className="mt-2 text-xs text-red-600">مىسال: سانلىق مەلۇماتتىن چىقىرىلغان قىممەت</div>
              </div>

              <div className="bg-teal-50 p-4 rounded-lg">
                <div className="font-medium text-teal-700 mb-1">ئۆزگەرگۈچىلىك (Variability)</div>
                <p className="text-sm text-gray-600">سانلىق مەلۇماتنىڭ ۋاقىت ئۆتۈش بىلەن ئۆزگىرىشى</p>
                <div className="mt-2 text-xs text-teal-600">مىسال: مەۋسۇملىق ئۆزگىرىشلەر</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">سانلىق مەلۇمات تىپلىرى</h5>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
              <div className="font-medium text-blue-700 mb-2">Structured</div>
              <p className="text-sm text-gray-600">تەرتىپلىك ۋە ئېنىق قۇرۇلمىلىق سانلىق مەلۇمات</p>
              <ul className="mt-2 text-xs text-gray-500">
                <li>• SQL سانلىق مەلۇمات بازىسى</li>
                <li>• Excel جەدۋەللىرى</li>
                <li>• CSV فورماتى</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
              <div className="font-medium text-green-700 mb-2">Semi-structured</div>
              <p className="text-sm text-gray-600">قىسمنچە تەرتىپلىك سانلىق مەلۇمات</p>
              <ul className="mt-2 text-xs text-gray-500">
                <li>• JSON</li>
                <li>• XML</li>
                <li>• NoSQL سانلىق مەلۇمات بازىسى</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
              <div className="font-medium text-purple-700 mb-2">Unstructured</div>
              <p className="text-sm text-gray-600">تەرتىپسىز ۋە قۇرۇلمىسىز سانلىق مەلۇمات</p>
              <ul className="mt-2 text-xs text-gray-500">
                <li>• تېكىست ھۆججەتلىرى</li>
                <li>• رەسىم ۋە ۋىدىئو</li>
                <li>• ئاۋاز ھۆججەتلىرى</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // 2. تېخنىكىلىق قوراللار
  'tools': {
    title: 'تېخنىكىلىق قوراللار',
    icon: Server,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">تېخنىكىلىق قوراللار</h4>
          <p className="text-gray-700 mb-4">
            چوڭ سانلىق مەلۇمات بىر تەرەپ قىلىش تېخنىكىلىق قوراللىرى ۋە ئۇلارنىڭ قوللىنىشى.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">H</span>
              </div>
              <h5 className="font-semibold text-gray-800">Hadoop</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              تارقىتىلغان ھېسابلاش سىستېمىسى. HDFS ۋە MapReduce.
            </p>
            <div className="bg-yellow-50 p-2 rounded">
              <code className="text-xs text-yellow-600">Apache Hadoop</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">S</span>
              </div>
              <h5 className="font-semibold text-gray-800">Spark</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              تېز ھېسابلاش ماتورى. RDD ۋە DataFrames.
            </p>
            <div className="bg-red-50 p-2 rounded">
              <code className="text-xs text-red-600">Apache Spark</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">K</span>
              </div>
              <h5 className="font-semibold text-gray-800">Kafka</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              ھەقىقىي ۋاقىت سانلىق مەلۇمات ئېقىم سىستېمىسى.
            </p>
            <div className="bg-green-50 p-2 rounded">
              <code className="text-xs text-green-600">Apache Kafka</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <h5 className="font-semibold text-gray-800">MongoDB</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              NoSQL سانلىق مەلۇمات بازىسى. Document-based.
            </p>
            <div className="bg-blue-50 p-2 rounded">
              <code className="text-xs text-blue-600">MongoDB</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">H</span>
              </div>
              <h5 className="font-semibold text-gray-800">Hive</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              SQL ئوخشاش سوئال سوراش. Hadoop ئۈستىدە ئىشلەيدۇ.
            </p>
            <div className="bg-purple-50 p-2 rounded">
              <code className="text-xs text-purple-600">Apache Hive</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-indigo-500 to-violet-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <h5 className="font-semibold text-gray-800">Flink</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              ھەقىقىي ۋاقىت ھېسابلاش ماتورى. Stream Processing.
            </p>
            <div className="bg-indigo-50 p-2 rounded">
              <code className="text-xs text-indigo-600">Apache Flink</code>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">تېخنىكىلىق سېلىشتۇرۇش</h5>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">تېخنىكا</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئاساسىي ئىقتىدارى</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئىشلىتىش</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئاۋاتلاش</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Hadoop</td>
                  <td className="px-4 py-3 text-sm text-gray-700">تارقىتىلغان ساقلاش ۋە ھېسابلاش</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Batch Processing</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">ئوتتۇرا</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Spark</td>
                  <td className="px-4 py-3 text-sm text-gray-700">تېز ھېسابلاش ۋە In-memory</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Batch + Stream Processing</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">يۇقىرى</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Kafka</td>
                  <td className="px-4 py-3 text-sm text-gray-700">سانلىق مەلۇمات ئېقىمى ۋە مەسىلە قويۇش</td>
                  <td className="px-4 py-3 text-sm text-gray-700">Real-time Streaming</td>
                  <td className="px-4 py-3 text-sm text-purple-600 font-medium">يۇقىرى</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },

  // 3. ئارخىتېكتورىلار
  'architectures': {
    title: 'ئارخىتېكتورىلار',
    icon: Layers,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">ئارخىتېكتورىلار</h4>
          <p className="text-gray-700 mb-4">
            چوڭ سانلىق مەلۇمات سىستېمىلىرىنىڭ ئارخىتېكتورىلىرى ۋە لايىھىلەش ئۇسۇللىرى.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">Lambda Architecture</h5>
            <div className="space-y-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <div className="font-medium text-purple-700 mb-2">ئاساسىي قاتلاملار</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Batch Layer (ھەجىملىك بىر تەرەپ قىلىش)</li>
                  <li>• Speed Layer (تېز بىر تەرەپ قىلىش)</li>
                  <li>• Serving Layer (خىزمەت قاتلامى)</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-medium text-blue-700 mb-1">ئەۋزەللىكلىرى</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Fault-tolerant (خاتالىققا چىداملىق)</li>
                  <li>• Scalable (كېڭەيتىشچان)</li>
                  <li>• Low-latency (تۆۋەن كېچىكىش)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">Kappa Architecture</h5>
            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <div className="font-medium text-green-700 mb-2">ئاساسىي قاتلاملار</div>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Single Layer (يەككە قاتلام)</li>
                  <li>• Stream Processing Only (پەقەت ئېقىم بىر تەرەپ قىلىش)</li>
                  <li>• Event Sourcing (ۋەقەلەرنى ساقلاش)</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg">
                <div className="font-medium text-orange-700 mb-1">ئەۋزەللىكلىرى</div>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Simple (ئاددىي)</li>
                  <li>• Real-time Processing (ھەقىقىي ۋاقىت بىر تەرەپ قىلىش)</li>
                  <li>• Easy to Maintain (ئاسان ساقلاش)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">ئارخىتېكتورىلارنى سېلىشتۇرۇش</h5>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئارخىتېكتورىا</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئەڭ ياخشى ئىشلىتىش</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">مۇرەككەپلىك</th>
                  <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئىجرا ۋاقتى</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Lambda</td>
                  <td className="px-4 py-3 text-sm text-gray-700">ھەجىملىك ھېسابلاش + ھەقىقىي ۋاقىت</td>
                  <td className="px-4 py-3 text-sm text-blue-600 font-medium">يۇقىرى</td>
                  <td className="px-4 py-3 text-sm text-gray-700">ھەجىملىك: تۆۋەن، ھەقىقىي ۋاقىت: يۇقىرى</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Kappa</td>
                  <td className="px-4 py-3 text-sm text-gray-700">ھەقىقىي ۋاقىت بىر تەرەپ قىلىش</td>
                  <td className="px-4 py-3 text-sm text-green-600 font-medium">تۆۋەن</td>
                  <td className="px-4 py-3 text-sm text-gray-700">ھەممىسى: يۇقىرى</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Microservices</td>
                  <td className="px-4 py-3 text-sm text-gray-700">مۇستەقىل مۇلازىمەتلەر</td>
                  <td className="px-4 py-3 text-sm text-purple-600 font-medium">ئوتتۇرا</td>
                  <td className="px-4 py-3 text-sm text-gray-700">ھەر بىر مۇلازىمەت: ئوخشاش</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  },

  // 4. ھەقىقىي ۋاقىت بىر تەرەپ قىلىش
  'realtime': {
    title: 'ھەقىقىي ۋاقىت بىر تەرەپ قىلىش',
    icon: Zap,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">ھەقىقىي ۋاقىت بىر تەرەپ قىلىش</h4>
          <p className="text-gray-700 mb-4">
            سانلىق مەلۇمات ھاسىل بولۇش بىلەن بىر ۋاقىتتا بىر تەرەپ قىلىش ۋە تەھلىل قىلىش.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">ھەقىقىي ۋاقىت تېخنىكىلىرى</h5>
            <div className="space-y-4">
              <div className="bg-yellow-50 p-4 rounded-lg">
                <div className="font-medium text-yellow-700 mb-1">Apache Kafka</div>
                <p className="text-sm text-gray-600">
                  يۇقىرى ئۈنۈملۈك، تارقىتىلغان مەسىلە قويۇش سىستېمىسى.
                  Producer-Consumer مودېلى.
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <div className="font-medium text-red-700 mb-1">Apache Storm</div>
                <p className="text-sm text-gray-600">
                  تارقىتىلغان، fault-tolerant ھەقىقىي ۋاقىت ھېسابلاش سىستېمىسى.
                  Spout-Bolt مودېلى.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="font-medium text-blue-700 mb-1">Apache Flink</div>
                <p className="text-sm text-gray-600">
                  يۇقىرى ئۈنۈملۈك، دەلىللەنگەن ھەقىقىي ۋاقىت ھېسابلاش ماتورى.
                  Exactly-once semantics.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h5 className="font-semibold text-gray-800 mb-4">ئىشلىتىش مىساللىرى</h5>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="font-medium text-green-700">مالىيە بازىرى</div>
                <p className="text-sm text-gray-600">ھەقىقىي ۋاقىت باھا ئۆزگىرىشى ۋە ئىلگىرى سۈزۈش</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <div className="font-medium text-purple-700">ئىجتىمائىي تاراتقۇ</div>
                <p className="text-sm text-gray-600">ھەقىقىي ۋاقىت تۋىت ۋە يورۇقلۇق تەھلىلى</p>
              </div>
              <div className="p-3 bg-cyan-50 rounded-lg">
                <div className="font-medium text-cyan-700">ئۇچۇر بىخەتەرلىكى</div>
                <p className="text-sm text-gray-600">ھەقىقىي ۋاقىت ھۇجۇم بايقاش ۋە ئالدىنى ئېلىش</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="font-medium text-orange-700">سانلىق مەلۇمات ئېقىمى</div>
                <p className="text-sm text-gray-600">ئىشلەپچىقىرىش سۇپىسىدىكى ھەقىقىي ۋاقىت مۇلازىمەت</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">ھەقىقىي ۋاقىت بىر تەرەپ قىلىش جەريانى</h5>
          <div className="relative">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <div className="text-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h5 className="font-semibold text-gray-700">سانلىق مەلۇمات توپلاش</h5>
                <p className="text-sm text-gray-600">ھەقىقىي ۋاقىت مەنبەلەردىن توپلاش</p>
              </div>
              
              <div className="hidden md:block w-16 h-1 bg-gray-300"></div>
              
              <div className="text-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h5 className="font-semibold text-gray-700">سانلىق مەلۇمات ئېقىمى</h5>
                <p className="text-sm text-gray-600">Kafka ئارقىلىق ئېقىم قۇرۇش</p>
              </div>
              
              <div className="hidden md:block w-16 h-1 bg-gray-300"></div>
              
              <div className="text-center mb-4 md:mb-0">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-yellow-600 font-bold">3</span>
                </div>
                <h5 className="font-semibold text-gray-700">بىر تەرەپ قىلىش</h5>
                <p className="text-sm text-gray-600">Flink/Storm بىلەن بىر تەرەپ قىلىش</p>
              </div>
              
              <div className="hidden md:block w-16 h-1 bg-gray-300"></div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <h5 className="font-semibold text-gray-700">نەتىجە چىقىرىش</h5>
                <p className="text-sm text-gray-600">ھەقىقىي ۋاقىت نەتىجىلەرنى كۆرسىتىش</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // 5. NoSQL سانلىق مەلۇمات بازىلىرى
  'nosql': {
    title: 'NoSQL سانلىق مەلۇمات بازىلىرى',
    icon: Database,
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-indigo-50 to-violet-50 p-6 rounded-xl border border-indigo-100">
          <h4 className="font-bold text-gray-800 mb-3 text-lg">NoSQL سانلىق مەلۇمات بازىلىرى</h4>
          <p className="text-gray-700 mb-4">
            نۇقتىلىق كېڭەيىشچان، يۇقىرى ئىجرا ۋە يۇمشاق قۇرۇلمىلىق سانلىق مەلۇمات بازىلىرى.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">D</span>
              </div>
              <h5 className="font-semibold text-gray-800">Document</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              JSON ئوخشاش ھۆججەتلەرنى ساقلايدۇ. يۇمشاق قۇرۇلمىلىق.
            </p>
            <div className="bg-green-50 p-2 rounded">
              <code className="text-xs text-green-600">MongoDB, CouchDB</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">K-V</span>
              </div>
              <h5 className="font-semibold text-gray-800">Key-Value</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              كۇنۇپكا-قىممەت جۈپلىرىنى ساقلايدۇ. تېز ئوقۇش/يېزىش.
            </p>
            <div className="bg-blue-50 p-2 rounded">
              <code className="text-xs text-blue-600">Redis, DynamoDB</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">C</span>
              </div>
              <h5 className="font-semibold text-gray-800">Column</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              بەلگە-قۇر قۇرۇلمىسى. يۇقىرى كېڭەيتىشچانلىق.
            </p>
            <div className="bg-purple-50 p-2 rounded">
              <code className="text-xs text-purple-600">Cassandra, HBase</code>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <h5 className="font-semibold text-gray-800">Graph</h5>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              تۈگۈن-چېت قۇرۇلمىسى. مۇناسىۋەت تەھلىلى.
            </p>
            <div className="bg-orange-50 p-2 rounded">
              <code className="text-xs text-orange-600">Neo4j, ArangoDB</code>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <h5 className="font-semibold text-gray-800 mb-4">NoSQL vs SQL سېلىشتۇرۇش</h5>
          <div className="overflow-x-auto">
            // تاماملانغان NoSQL vs SQL سېلىشتۇرۇش جەدۋىلى
<table className="min-w-full divide-y divide-gray-200">
  <thead className="bg-gray-50">
    <tr>
      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">خۇسۇسىيەت</th>
      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">SQL</th>
      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">NoSQL</th>
      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-700">ئەڭ ياخشى ئىشلىتىش</th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-gray-200">
    <tr>
      <td className="px-4 py-3 text-sm text-gray-700">سۇپىنىڭ قۇرۇلمىسى</td>
      <td className="px-4 py-3 text-sm text-gray-700">قاتتىق قۇرۇلمىلىق (Structured)</td>
      <td className="px-4 py-3 text-sm text-gray-700">يۇمشاق قۇرۇلمىلىق (Flexible)</td>
      <td className="px-4 py-3 text-sm text-blue-600 font-medium">قۇرۇلمىغا قاراپ</td>
    </tr>
    <tr className="bg-gray-50">
      <td className="px-4 py-3 text-sm text-gray-700">كېڭەيتىشچانلىق</td>
      <td className="px-4 py-3 text-sm text-gray-700">تىك كېڭەيىش (Vertical)</td>
      <td className="px-4 py-3 text-sm text-gray-700">توغرىسىغا كېڭەيىش (Horizontal)</td>
      <td className="px-4 py-3 text-sm text-green-600 font-medium">NoSQL</td>
    </tr>
    <tr>
      <td className="px-4 py-3 text-sm text-gray-700">سوئال تىلى</td>
      <td className="px-4 py-3 text-sm text-gray-700">SQL (ستاندارت)</td>
      <td className="px-4 py-3 text-sm text-gray-700">تۈرلۈك (API-based)</td>
      <td className="px-4 py-3 text-sm text-blue-600 font-medium">SQL</td>
    </tr>
    <tr className="bg-gray-50">
      <td className="px-4 py-3 text-sm text-gray-700">ئىجرا سۈرئىتى</td>
      <td className="px-4 py-3 text-sm text-gray-700">چوڭقۇر ئۇچۇرلار ئۈچۈن تېز</td>
      <td className="px-4 py-3 text-sm text-gray-700">يۇقىرى يازما/ئوقۇم ئۈچۈن تېز</td>
      <td className="px-4 py-3 text-sm text-green-600 font-medium">ئىشلىتىشكە قاراپ</td>
    </tr>
    <tr>
      <td className="px-4 py-3 text-sm text-gray-700">مۇقىملىق (Consistency)</td>
      <td className="px-4 py-3 text-sm text-gray-700">ACID پرىنسىپى</td>
      <td className="px-4 py-3 text-sm text-gray-700">BASE پرىنسىپى</td>
      <td className="px-4 py-3 text-sm text-purple-600 font-medium">ئېھتىياجغا قاراپ</td>
    </tr>
    <tr className="bg-gray-50">
      <td className="px-4 py-3 text-sm text-gray-700">مىساللار</td>
      <td className="px-4 py-3 text-sm text-gray-700">MySQL, PostgreSQL, Oracle</td>
      <td className="px-4 py-3 text-sm text-gray-700">MongoDB, Cassandra, Redis</td>
      <td className="px-4 py-3 text-sm text-gray-700">-</td>
    </tr>
  </tbody>
</table>
</div>
</div>
</div>

)
},

};

// Main BigDataModule Component
const BigDataModule = () => {
  const [selectedTab, setSelectedTab] = useState('levels');
  const [expandedLevel, setExpandedLevel] = useState(1);
  const [selectedMenuItem, setSelectedMenuItem] = useState('basics');

  const menuItems = [
    { id: 'basics', label: 'چوڭ سانلىق مەلۇماتنىڭ ئاساسى', icon: Cloud },
    { id: 'tools', label: 'تېخنىكىلىق قوراللار', icon: Server },
    { id: 'architectures', label: 'ئارخىتېكتورىلار', icon: Layers },
    { id: 'realtime', label: 'ھەقىقىي ۋاقىت بىر تەرەپ قىلىش', icon: Zap },
    { id: 'nosql', label: 'NoSQL سانلىق مەلۇمات بازىلىرى', icon: Database },
    { id: 'analytics', label: 'تەھلىل ۋە ماشىنا ئۆگىنىشى', icon: BarChart3 },
    { id: 'visualization', label: 'سانلىق مەلۇمات كۆرسىتىش', icon: TrendingUp },
    { id: 'security', label: 'خەۋپسىزلىك ۋە مەخپىيەتلىك', icon: Shield },
    { id: 'applications', label: 'قوللىنىش ساھەلىرى', icon: Globe },
    { id: 'research', label: 'ئىلمىي تەتقىقات', icon: BookOpen }
  ];

  const renderContent = () => {
    if (selectedTab === 'levels') {
      switch (expandedLevel) {
        case 1: return <BigDataLevel1 />;
        case 2: return <BigDataLevel2 />;
        case 3: return <BigDataLevel3 />;
        case 4: return <BigDataLevel4 />;
        default: return <BigDataLevel1 />;
      }
    } else {
      const item = contentMap[selectedMenuItem] || contentMap.basics;
      return item.content;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">چوڭ سانلىق مەلۇمات (Big Data)</h1>
              <p className="text-gray-600 mt-2">
                كەڭ، تېز ۋە كۆپ خىل سانلىق مەلۇماتلارنى بىر تەرەپ قىلىش تېخنىكىلىرى
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700">4 دەرىجە</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">80+ سائەت</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 mb-6">
            <button
              onClick={() => setSelectedTab('levels')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedTab === 'levels'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5" />
                <span>دەرىجىلەر</span>
              </div>
            </button>
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                selectedTab === 'all'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>ھەممە مەزمۇن</span>
              </div>
            </button>
          </div>

          {selectedTab === 'levels' ? (
            /* Levels View */
            <div className="space-y-6">
              {/* Level Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[1, 2, 3, 4].map((level) => (
                  <button
                    key={level}
                    onClick={() => setExpandedLevel(level)}
                    className={`p-6 rounded-xl border-2 transition-all ${
                      expandedLevel === level
                        ? 'border-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50'
                        : 'border-gray-200 bg-white hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        level === 1 ? 'bg-blue-100' :
                        level === 2 ? 'bg-green-100' :
                        level === 3 ? 'bg-purple-100' : 'bg-orange-100'
                      }`}>
                        <span className={`text-xl font-bold ${
                          level === 1 ? 'text-blue-600' :
                          level === 2 ? 'text-green-600' :
                          level === 3 ? 'text-purple-600' : 'text-orange-600'
                        }`}>
                          {level}
                        </span>
                      </div>
                      {expandedLevel === level ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <ChevronRight className="w-6 h-6 text-gray-400" />
                      )}
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{level}-دەرىجە</h3>
                    <p className="text-sm text-gray-600">
                      {level === 1 && 'ئاساسىي چۈشەنچىلەر'}
                      {level === 2 && 'تېخنىكىلىق قوراللار'}
                      {level === 3 && 'مۇرەككەپ تەھلىل'}
                      {level === 4 && 'ئىلمىي تەتقىقات'}
                    </p>
                  </button>
                ))}
              </div>

              {/* Level Content */}
              <div className="mt-8">
                {renderContent()}
              </div>
            </div>
          ) : (
            /* All Content View */
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar Menu */}
              <div className="lg:col-span-1">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h3 className="font-bold text-gray-800 mb-4 text-lg">مەزمۇن خاتىرىسى</h3>
                  <div className="space-y-2">
                    {menuItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => setSelectedMenuItem(item.id)}
                          className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all ${
                            selectedMenuItem === item.id
                              ? 'bg-blue-100 text-blue-700 border-r-4 border-blue-600'
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          <Icon className="w-5 h-5 flex-shrink-0" />
                          <span className="text-right flex-1">{item.label}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${
                            selectedMenuItem === item.id ? 'rotate-90' : ''
                          }`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Progress Stats */}
                <div className="bg-white rounded-xl p-6 mt-6 border border-gray-200">
                  <h4 className="font-bold text-gray-800 mb-4">ئۆگىنىش ئىلگىرىلىشى</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">تاماملانغان</span>
                        <span className="text-sm font-medium text-blue-600">35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">سېلىشتۇرما</span>
                        <span className="text-sm font-medium text-green-600">8/12</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '66%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Content Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 border-b border-gray-200">
                    <div className="flex items-center gap-3 mb-2">
                      {(() => {
                        const Icon = contentMap[selectedMenuItem]?.icon || Cloud;
                        return <Icon className="w-8 h-8 text-blue-600" />;
                      })()}
                      <h2 className="text-2xl font-bold text-gray-800">
                        {contentMap[selectedMenuItem]?.title || 'چوڭ سانلىق مەلۇماتنىڭ ئاساسى'}
                      </h2>
                    </div>
                    <p className="text-gray-600">
                      تاللىغان مەزمۇننىڭ تەپسىلاتلىق چۈشەندۈرۈلۈشى
                    </p>
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    {renderContent()}
                  </div>

                  {/* Navigation */}
                  <div className="border-t border-gray-200 p-6">
                    <div className="flex justify-between">
                      <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                        <div className="flex items-center gap-2">
                          <ChevronRight className="w-4 h-4 rotate-180" />
                          <span>ئالدىنقى</span>
                        </div>
                      </button>
                      <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        <div className="flex items-center gap-2">
                          <span>كىيىنكى</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <div className="text-gray-600">دەرىجە</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-green-600 mb-2">80+</div>
              <div className="text-gray-600">ئۆگىنىش سائەتلىرى</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-purple-600 mb-2">10</div>
              <div className="text-gray-600">مۇھىم تېما</div>
            </div>
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-orange-600 mb-2">24</div>
              <div className="text-gray-600">ئەمەلىي مىسال</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigDataModule;