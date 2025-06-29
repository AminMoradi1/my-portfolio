import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Divar Clone 📦",
      desc: "A classified ads site with full auth and role access",
      url: "https://github.com/AminMoradi1/divar-site",
      image: "https://logoyab.com/wp-content/uploads/2024/05/DivarLogo.png",
    },
    {
      title: "Shop Store 🛒",
      desc: "Dynamic shopping cart using Redux",
      url: "https://github.com/AminMoradi1/shopStore",
      image:
        "https://static.vecteezy.com/system/resources/previews/000/360/109/original/vector-modern-flat-web-page-design-template-concept-of-online-shopping.jpg",
    },
    {
      title: "Crypto App💹",
      desc: "Real-time crypto tracker using CoinGecko API",
      url: "https://github.com/AminMoradi1/crypto-app",
      image:
        "https://thumbs.dreamstime.com/b/trading-financial-vector-logo-candlestick-trading-trading-stock-symbol-market-chart-sign-trading-financial-vector-logo-candlestick-217852198.jpg",
    },
    {
      title: "Quiz App❓",
      desc: "Interactive quiz with vanilla JS",
      url: "https://github.com/AminMoradi1/quiz-app",
      image:
        "https://png.pngtree.com/png-clipart/20230207/original/pngtree-quiz-logo-with-speech-bubble-symbols-png-image_8947100.png",
    },
    {
      title: "Book App📚",
      desc: "Book listing and filtering app using React",
      url: "https://github.com/AminMoradi1/book-app",
      image:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/book-store-or-book-app-icon-logo-design-template-da3ff319832ce9f54aa7df503624427e_screen.jpg?ts=1585146773",
    },
  ];

  return (
    <div className="container">
      <h1 className="projects-header">🚀 My Projects</h1>
      <div className="grid grid-2 mt-2" style={{ marginTop: "2rem" }}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="card fancy-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {p.image && (
              <img src={p.image} alt={p.title} className="card-thumb" />
            )}
            <h2>{p.title} </h2>
            <p>{p.desc}</p>
            <a
              className="btn"
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
