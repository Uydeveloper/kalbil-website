// src/App.jsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer } from 'react-toastify';

// Context
import { UserProvider } from './context/UserContext';
import { LanguageProvider } from "./context/LanguageContext";

// Components & Layouts
import Posts from './components/Posts';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";
import StudentList from "./components/StudentList";
import JoinClass from "./components/JoinClass";
import UyghurAI from "./components/UyghurAI";
import CarCoursePage from './components/CarCoursePage';

// Pages
import Home from "./pages/Home";
import Courses from "./components/courese/CoursesNew";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import ViewPage from "./pages/ViewPage";
import ViewRegistration from "./pages/ViewRegistration";
import CourseOutline from "./pages/CourseOutline";
import TopicDetails from "./pages/TopicDetails";
import MyCourses from "./pages/MyCourses";
import Profile from "./pages/Profile";
import CourseStart from "./pages/CourseStart";
import MessagesPage from "./pages/MessagesPage";
import MessageDetail from "./pages/MessageDetail";
import TopicDetail from "./pages/TopicDetail";
import AdminMessages from './pages/AdminMessages';
import EditMessagePage from './pages/EditMessagePage';
import CourseDetailWrapper from "./pages/CourseDetailWrapper";
import QuantumMachineLearning from "./pages/QuantumMachineLearning";
import TopicSlides from "./pages/TopicSlides";
import AddCourse from "./pages/AddCourse";
import Enroll from "./pages/Enroll";
import LectureDetail from "./components/LectureDetail";
import Students from "./components/StudentDetail";  
import StudentInfo from "./pages/students/Students"; 
import Studentinfosys from "./pages/students/studentinfosystem";  
import NewCourses from "./pages/NewCourses";
import MyBlog from './pages/MyBlog';
import StudentInfoPage from './pages/StudentInfo';

// Routes
import AdminRoute from "./routes/AdminRoute";

import "./index.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [students, setStudents] = useState([]);
  const API_BASE_URL = "http://localhost:5000/api"; 

  // Backend دىن مەلۇمات ئوقۇش (خاتالىق تۇتۇش قوشۇلدى)
  useEffect(() => {
    axios.get(`${API_BASE_URL}/students`)
      .then(response => {
        if (Array.isArray(response.data)) {
          setStudents(response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching students:', error);
        // ئەگەر تور ئۈزۈلگەن بولسا سىستېما جىم تۇرىدۇ، Crash بولمايدۇ
      });
  }, []);

  return (
    <>
      <LanguageProvider>
        <UserProvider>
          <Router>
            <ToastContainer />

            {/* ✅ Navbar + Login Modal */}
            <Navbar onLoginClick={() => setShowLogin(true)} />
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

            <ScrollToTop />

            {/* ✅ Route قۇرۇلماسى */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              
              {/* بىرلا ئوخشاش ئادرېس قالدۇرۇلدى */}
              <Route path="/course/:id" element={<CourseDetailWrapper />} /> 
              
              <Route path="/courses/:id/topic/:topicId" element={<TopicDetails />} />
              <Route path="/outline/:id" element={<CourseOutline />} />
              <Route path="/my-courses" element={<MyCourses />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/view" element={<ViewPage />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/courses/:id/start" element={<CourseStart />} />
              <Route path="/topic/:id" element={<TopicDetail />} />
              <Route path="/add-course" element={<AddCourse />} />
              <Route path="/messages" element={<MessagesPage />} />
              <Route path="/messages/:id" element={<MessageDetail />} />
              <Route path="/admin/messages" element={<AdminMessages />} />
              <Route path="/messages/edit/:id" element={<EditMessagePage />} />
              <Route path="/quantummachinelearning" element={<QuantumMachineLearning />} />
              <Route path="/qml/:topicId" element={<TopicSlides />} />
              <Route path="/enroll" element={<Enroll />} />
              <Route path="/students-list" element={<StudentList />} />
              <Route path="/join-class" element={<JoinClass />} />
              <Route path="/lecture/:id" element={<LectureDetail />} />
              <Route path="/students/:id" element={<Students />} />
              <Route path="/studentsinfo" element={<StudentInfo />} /> {/* ئىملا تۈزىتىلدى */}
              <Route path="/studentinfosys" element={<Studentinfosys/>} />
              <Route path="/newcourses" element={<NewCourses/>} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/UyghurAI" element={<UyghurAI />} />
              <Route path="/courses/quantum-car-2026" element={<CarCoursePage />} />
              <Route path="/MyBlog" element={<MyBlog />} />  
              <Route path="/student-info" element={<StudentInfoPage />} />   
              
              {/* ✅ پەقەت admin role بولغانلارلا */}
              <Route
                path="/view-registration"
                element={
                  <AdminRoute>
                    <ViewRegistration />
                  </AdminRoute>
                }
              />
            </Routes>

            {/* ✅ Scroll to Top Button */}
            <ScrollToTopButton />

            {/* ✅ Footer */}
            <Footer />
          </Router>
        </UserProvider>
      </LanguageProvider>
      <FontAwesomeIcon icon={faCoffee} />
    </>
  );
}

export default App;