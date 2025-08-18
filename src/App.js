import React, { useEffect, useState } from "react";
import "./App.css";

// A small set of quotes (basic is fine for FCC tests)
const quotesData = [
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "Arise, awake, and stop not till the goal is reached.", author: "Swami Vivekananda" },
  { text: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa" },
  { text: "The best way to find yourself is to lose yourself in the service of others.", author: "Mahatma Gandhi" },
  { text: "Success is not in what you have, but who you are.", author: "Baba Amte" },
  { text: "Happiness depends upon ourselves.", author: "Aristotle" },
  { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
  { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "What you think, you become. What you feel, you attract. What you imagine, you create.", author: "Buddha" },
  { text: "Our life is what our thoughts make it.", author: "Marcus Aurelius" }
];

const gradients = [
  {
    background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    colors: ["#f093fb", "#f5576c"]
  },
  {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    colors: ["#667eea", "#764ba2"]
  },
  {
    background: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    colors: ["#30cfd0", "#330867"]
  },
  {
    background: "linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)",
    colors: ["#ff6a00", "#ee0979"]
  },
  {
    background: "linear-gradient(135deg, #43cea2 0%, #185a9d 100%)",
    colors: ["#43cea2", "#185a9d"]
  },
  {
    background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    colors: ["#11998e", "#38ef7d"]   // fresh green tones
  },
  
  {
    background: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
    colors: ["#ff416c", "#ff4b2b"]   // stronger pink-red
  },
  {
    background: "linear-gradient(135deg, #373b44 0%, #4286f4 100%)",
    colors: ["#373b44", "#4286f4"]   // dark gray-blue with vibrant blue
  },
  {
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  colors: ["#667eea", "#764ba2"]   // violet → purple (calm, readable)
  },
  {
    background: "linear-gradient(135deg, #ff6a00 0%, #ee0979 100%)",
    colors: ["#ff6a00", "#ee0979"]   // orange → magenta (bold, energetic)
  }
];


export default function App() {
  const [quote, setQuote] = useState({ text:"", author:""});
  const [background, setBackground] = useState(gradients[0].background);
  const [themeColor, setThemeColor] = useState(gradients[0].colors[0]);

  
  useEffect(() => {
    nextQuote();
  }, []);

  function nextQuote() {
    const q = quotesData[Math.floor(Math.random() * quotesData.length)];
    const g = gradients[Math.floor(Math.random() * gradients.length)];

    // pick one of the gradient’s two colors
    const chosenColor = g.colors[Math.floor(Math.random() * g.colors.length)];

    setQuote(q);
    setBackground(g.background);
    setThemeColor(chosenColor);
  }


  const tweetHref = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`
  )}`;

  return (
    <div className="app" style={{ background: background, backgroundSize: "cover" }}>
      <div id="quote-box" className="quote-box">
        <p id="text" className="quote-text" style={{ color: themeColor }}>
          “{quote.text}”
        </p>

        <p id="author" className="quote-author" style={{ color: themeColor }}>
          — {quote.author}
        </p>

        <div className="buttons">
          <a 
            id="tweet-quote"
            className="btn"
            href={tweetHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Tweet this quote"
            style={{ backgroundColor: themeColor }}
          >
            {/* SVG stays same */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 2h3l-7 9 8 11h-7l-5-7-5 7H3l7-9L2 2h7l4.5 6L18 2z"/>
            </svg>
          </a>

          <button 
            id="new-quote" 
            className="btn" 
            onClick={nextQuote}
            style={{ backgroundColor: themeColor }}
          >
            New Quote
          </button>
        </div>
      </div>

      <p className="footer">© 2025 Raj Ugale — All rights reserved</p>
    </div>

  );
}
