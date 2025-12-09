"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [step, setStep] = useState("input");

  const processUsername = () => {
    let cleaned = input
      .toLowerCase()
      .replace(/@/g, "")
      .replace(/\s+/g, "")
      .replace(/dot/gi, ".");

    setResult(cleaned);
    setStep("result");
  };

  return (
    <main style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: 400,
      margin: "60px auto",
      padding: 20,
      textAlign: "center",
      border: "1px solid #ddd",
      borderRadius: 12
    }}>
      
      {step === "input" && (
        <>
          <h2>Enter your username</h2>
          <p>We’ll clean it for you automatically.</p>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="@UsernameDotCom"
            style={{
              width: "100%",
              padding: 10,
              marginTop: 10,
              borderRadius: 8,
              border: "1px solid #aaa"
            }}
          />
          <button
            onClick={processUsername}
            style={{
              marginTop: 15,
              width: "100%",
              padding: "10px 15px",
              borderRadius: 8,
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
              background: "#000",
              color: "#fff"
            }}
          >
            Run
          </button>
        </>
      )}

      {step === "result" && (
        <>
          <h3>🎉 Nice to meet you!</h3>
          <p>Your cleaned username:</p>
          <div style={{
            background: "#f4f4f4",
            padding: "10px 15px",
            borderRadius: 6,
            fontWeight: "bold",
            overflowWrap: "break-word"
          }}>
            {result}
          </div>

          <p style={{ marginTop: 20 }}>
            Would you like to follow @DeHyperCoder?
          </p>

          <button
            onClick={() =>
              window.open(
                "https://x.com/intent/follow?screen_name=DeHyperCoder",
                "_blank"
              )
            }
            style={{
              marginTop: 10,
              width: "100%",
              padding: "10px 15px",
              borderRadius: 8,
              border: "none",
              fontWeight: 600,
              cursor: "pointer",
              background: "#1d9bf0",
              color: "#fff"
            }}
          >
            Yes, let’s go 🚀
          </button>

          <a
            href="https://x.com/home"
            target="_blank"
            style={{ display: "block", marginTop: 10 }}
          >
            Maybe later
          </a>

          <p style={{ marginTop: 25, fontSize: 13 }}>
            ⭐ Don’t forget to star & fork this repo:  
            <br />
            <a
              href="https://github.com/dehypercoder/ConnectApp"
              target="_blank"
            >
              github.com/dehypercoder/ConnectApp
            </a>
          </p>
        </>
      )}
    </main>
  );
}
