import React from "react";
import { useParams } from "react-router-dom";
import { topicData } from "../data/topicData";

export default function TopicDetail() {
  const { id } = useParams();
  const topic = topicData[id];

  if (!topic) {
    return <p className="text-red-500">⚠️ تېما تېپىلمىدى.</p>;
  }

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{topic.title}</h2>
        <p className="italic text-indigo-600 mb-6">{topic.slogan}</p>
        <img src={topic.img} alt={topic.title} className="w-full rounded-lg shadow mb-6" />
        <p className="text-gray-700 whitespace-pre-line">{topic.description}</p>
        <div className="mt-6">
          <iframe
            src={topic.video}
            title={topic.title}
            className="w-full h-96 rounded-lg shadow"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
