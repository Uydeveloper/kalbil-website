import { motion } from "framer-motion";

const missionLines = [
  "بىز بىلىمنى نۇر دەپ قارىيمىز — ئۇ قەلبىمىزنى، زېھىنىمىزنى يورۇتىدۇ.",
  "تېخنىكا بولسا قانىتىمىز — ئۇ بىزنى ئۇچۇرغا، ئالەمگە ئېلىپ چىقىدۇ.",
  "KalBiL نىڭ نىشانى — ئۇيغۇرلارغا بىلىم بىلەن كۈچ بېغىشلاش.",
  "ھەر بىر دەرس، ھەر بىر تېما — كەلگۈسىگە قەدەم.",
  "بىز ئۆز قىممىتىمىزنى بىلىم ئارقىلىق قۇرالايمىز.",
  "تېخنىكا — پەقەت قورال ئەمەس، بەلكى بىزنىڭ ئىپتىخارىمۇ.",
  "ئۇيغۇر تىلىدا، ئۇيغۇر روھى بىلەن — بىلىمگە يول ئېچىمىز.",
  "KalBiL — بىلىمگە قىزغىن، تېخنىكىغا قەدەم باسقان بىر جەمئىيەت.",
  "بىز بىرلىكتە ئۆگىنىمىز، بىرىمىزگە كۈچ بېرىمىز.",
  "كەلگۈسىمىز — بىلىم بىلەن يورۇقلۇق، تېخنىكا بىلەن ئۇچقۇن."
];

export default function MissionBlock() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, delay: 0.3 }}
      className="mt-12 space-y-4 text-center max-w-3xl mx-auto"
    >
      {missionLines.map((line, idx) => (
        <p
          key={idx}
          className="text-xl text-gray-800 dark:text-gray-200 font-[Uyghurche] tracking-wide leading-relaxed"
        >
          {line}
        </p>
      ))}
    </motion.div>
  );
}