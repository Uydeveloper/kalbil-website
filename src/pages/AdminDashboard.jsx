import { Link } from "react-router-dom";
import "./AdminDashboard.css"; // خالىسىڭىز style قوشالايمەن

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">
      <h2>👩‍💼 باشقۇرغۇچى باش بىتى</h2>
      <ul>
        <li><Link to="/view-registration">📋 تىزىملىكنى كۆرۈش</Link></li>
        <li><Link to="/admin/messages">✉️ ئۇچۇر باشقۇرۇش</Link></li>
        <li><Link to="/students">🎓 ئوقۇغۇچىلار تىزىمى</Link></li>
      </ul>
    </div>
  );
}