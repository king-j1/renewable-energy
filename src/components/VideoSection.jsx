import { motion } from "framer-motion";

export default function VideoSection({
  video,
  title,
  subtitle,
  height = "100vh",
}) {
  return (
    <section className="video-section" style={{ minHeight: height }}>
      <div className="hero-media">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={video} type="video/mp4" />
        </video>
      </div>

      <div className="container hero-content">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}