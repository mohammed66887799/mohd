import React from "react";

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 40 }}>
      <h1>🌱 AgroDetect AI</h1>
      <p>Your Vercel deployment is working 🎉</p>
      <p>Gemini API Key loaded: {import.meta.env.VITE_GEMINI_API_KEY ? "YES" : "NO"}</p>
    </div>
  );
};

export default App;
