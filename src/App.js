// src/App.jsx

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

// Context Providers
import { UserProvider } from "./context/UserContext";
import { AuthProvider } from "./context/AuthContext";
import { CourseProvider } from "./context/CourseContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import ScrollToTop from "./components/ScrollToTop";
import ScrollToTopButton from "./components/ScrollToTopButton";

import Home from "./pages/Home";
import Courses from "./pages/Courses";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import ViewPage from "./pages/ViewPage";
import ViewRegistration from "./pages/ViewRegistration";
import CourseDetails from "./pages/CourseOutline";
import TopicDetails from "./pages/TopicDetails";
import MyCourses from "./pages/MyCourses";
import CourseOutline from "./pages/CourseDetails";
import Profile from "./pages/Profile";
import CourseStart from "./pages/CourseStart";
import MessagesPage from "./pages/MessagesPage";
import MessageDetail from "./pages/MessageDetail";
import AdminMessages from "./pages/AdminMessages";
import EditMessagePage from "./pages/EditMessagePage";
import CourseDetailWrapper from "./pages/CourseDetailWrapper";
import QuantumMachineLearning from "./pages/QuantumMachineLearning";
import AddCourse from "./pages/AddCourse";
import Enroll from "./pages/Enroll";
import CourseTopics from "./pages/CourseTopics";
import TopicDetail from "./pages/TopicDetail";
import StudentList from './components/StudentList';
import StudentPage from './components/StudentPage';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopicSlides from "./pages/TopicSlides";
import AdminRoute from "./routes/AdminRoute";
import AdminDashboard from "./pages/AdminDashboard";
import StudentDetail from "./components/StudentDetail";

import "./index.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <AuthProvider>
      <UserProvider>
        <CourseProvider>
          

          <Router>
            <ToastContainer position="top-right" autoClose={3000} />

            <Navbar onLoginClick={() => setShowLogin(true)} />
            {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

            <ScrollToTop />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/course/:id/details" element={<CourseDetails />} />
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
              <Route path="/messages/edit/:id" element={<EditMessagePage />} />
              <Route path="/quantummachinelearning" element={<QuantumMachineLearning />} />
              <Route path="/qml/:id" element={<TopicSlides />} />
              <Route path="/enroll" element={<Enroll />} />
              <Route path="/CourseTopics" element={<CourseTopics />} />
              <Route path="/students" element={<StudentList />} />
              <Route path="/student/:name" element={<StudentPage />} />
              <Route path="/students" element={<StudentList />} />
              <Route path="/students/:id" element={<StudentDetail />} />

              {/* ✅ Admin-only routes */}
              <Route
                path="/admin"
                element={
                  <AdminRoute>
                    <AdminMessages />
                  </AdminRoute>
                }
              />
              <Route
                path="/view-registration"
                element={
                  <AdminRoute>
                    <ViewRegistration />
                    <AdminDashboard />

                  </AdminRoute>
                }
              />
            </Routes>

            <ScrollToTopButton />
            <Footer />
          </Router>
        </CourseProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;