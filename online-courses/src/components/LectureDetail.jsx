import React, { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faEnvelope,
  faDoorOpen,
  faCheck,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function LectureDetail() {
  const { state } = useLocation();
  const { id } = useParams();
  const navigate = useNavigate();
  const [lecture, setLecture] = useState(state);

  useEffect(() => {
    if (!state) {
      const saved = JSON.parse(localStorage.getItem("kalbil-lectures") || "[]");
      const found = saved.find((l) => l.id === id);
      setLecture(found);
    }
  }, [state, id]);

  if (!lecture) return <p className="text-center text-red-600 mt-10">🚫 لىكسيە ئۇچۇرى تېپىلمىدى</p>;

  const getLinkLabel = (link) => {
    if (!link) return null;
    if (link.includes("zoom.us"))
      return (
        <>
          <FontAwesomeIcon icon={faVideo} className="mr-2" />
          Zoom لىكسيەگە قاتنىشىش
        </>
      );
    if (link.includes("meet.google.com"))
      return (
        <>
          <FontAwesomeIcon icon={faVideo} className="mr-2" />
          Google Meet لىكسيەگە قاتنىشىش
        </>
      );
    if (link.startsWith("mailto:"))
      return (
        <>
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          Email ئارقىلىق ئالاقىلىشىش
        </>
      );
    if (link.startsWith("kalbil://"))
      return (
        <>
          <FontAwesomeIcon icon={faDoorOpen} className="mr-2" />
          KelBiL ئارقىلىق قاتنىشىش
        </>
      );
    return (
      <>
        <FontAwesomeIcon icon={faCheck} className="mr-2" />
        لىكسيەگە قاتنىشىش
      </>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-gray-900 rounded shadow">
      <h2 className="text-3xl font-bold text-indigo-700 dark:text-indigo-300 mb-4">{lecture.title}</h2>
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">👤 {lecture.speaker}</p>
      <p className="text-gray-800 dark:text-gray-400 mb-4">{lecture.description}</p>

      {lecture.image && (
        <img
          src={lecture.image}
          alt={lecture.title}
          className="mb-4 rounded shadow w-full h-64 object-cover"
        />
      )}

      {lecture.video && (
        <video controls className="w-full rounded mb-4">
          <source src={lecture.video} type="video/mp4" />
          بۇ ۋىدېئو بروزېرىڭىزدا قۇلايلىشىشمىدى.
        </video>
      )}

      <div className="flex flex-wrap gap-4 mt-4">
        {lecture.link && (
          <a
            href={lecture.link}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2"
          >
            {getLinkLabel(lecture.link)}
          </a>
        )}

        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          قايتىش
        </button>
      </div>
    </div>
  );
}