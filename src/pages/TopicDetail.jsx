import { useParams, Link } from "react-router-dom";
import { topicData } from "../data/topicData";

// رېسپانسۋ iframe wrapper (Tailwindسىز خالىغان جايدا ئىشلىتىلىدۇ)
const Video = ({ src, title }) => (
  <div style={{ position: "relative", width: "100%", paddingBottom: "56.25%" }}>
    <iframe
      src={src}
      title={title}
      allowFullScreen
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
    />
  </div>
);

export default function TopicDetail() {
  const { id } = useParams();
  const topic = topicData[id];

  if (!topic) {
    return (
      <section className="p-8 min-h-screen flex items-center justify-center">
        <p className="text-center text-gray-700 dark:text-gray-300">بۇ تېما تېپىلمىدى</p>
      </section>
    );
  }

  return (
    <section className="p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline mb-6 inline-block">&larr; قايتىش</Link>

        {/* Uyghur Slogan */}
        <p className="text-center text-xl sm:text-2xl font-bold text-green-700 dark:text-green-400 mb-4 italic">
          {topic.slogan}
        </p>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-800 dark:text-white mb-6">
          {topic.title}
        </h1>

        <img src={topic.img} alt={topic.title} className="rounded-2xl shadow-lg mb-6 w-full object-cover" />

        {topic.video && (
          <div className="mb-8">
            <Video src={topic.video} title={topic.title} />
          </div>
        )}

        <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-bold prose-p:leading-relaxed">
          {topic.description.split("\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
      </div>
    </section>
  );
}