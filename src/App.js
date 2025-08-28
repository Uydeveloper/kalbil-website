// src/App.jsx
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserProvider } from './context/UserContext';

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import ViewPage from "./pages/ViewPage";
import ViewRegistration from "./pages/ViewRegistration";
import CourseOutline from "./pages/CourseOutline";
import TopicDetails from "./pages/TopicDetails";
import MyCourses from "./pages/MyCourses";
import CourseDetails from "./pages/CourseDetails";
import Profile from "./pages/Profile";
import CourseStart from "./pages/CourseStart";
import MessagesPage from "./pages/MessagesPage";
import MessageDetail from "./pages/MessageDetail";
import AdminRoute from "./routes/AdminRoute";
import TopicDetail from "./pages/TopicDetail";
import AdminMessages from './pages/AdminMessages';
import EditMessagePage from './pages/EditMessagePage';
import CourseDetailWrapper from "./pages/CourseDetailWrapper";
import { ToastContainer } from 'react-toastify';
import QuantumMachineLearning from "./pages/QuantumMachineLearning";
import TopicSlides from "./pages/TopicSlides";
import ScrollToTop from "./components/ScrollToTop";
import AddCourse from "./pages/AddCourse";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Enroll from "./pages/Enroll";
import StudentList from "./components/StudentList";
import "./index.css";
import JoinClass from "./components/JoinClass";
import LectureDetail from "./components/LectureDetail";
import { LanguageProvider } from "./context/LanguageContext";
import  Students from "./components/StudentDetail";  
import StudentInfo from "./pages/students/Students"   


function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
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
          <Route path="/course/:id" element={<CourseDetails />} />
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
          <Route path="/course/:id" element={<CourseDetailWrapper />} />
          <Route path="/quantummachinelearning" element={<QuantumMachineLearning />} />
          <Route path="/qml/:topicId" element={<TopicSlides />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/students-list" element={<StudentList />} />
          <Route path="/join-class" element={<JoinClass />} />
          <Route path="/lecture/:id" element={<LectureDetail />} />
          <Route path="/students/:id" element={<Students />} />
          <Route path="studntsinfo" element={<StudentInfo />} />
         
          
          
          
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
  );
}

export default App;