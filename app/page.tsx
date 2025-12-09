"use client";

import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [cleaned, setCleaned] = useState<string | null>(null);

  const cleanUsername = () => {
    const lower = input.toLowerCase();
    const noAtOrSpaces = lower.replace(/@|\s+/g, "");
    const formatted = noAtOrSpaces.replace(/dot/gi, ".");
    setCleaned(formatted);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-2xl font-bold mb-4">
        Enter Your Username
      </h1>

      {!cleaned ? (
        <>
          <input
            type="text"
            className="w-full max-w-md p-3 rounded bg-gray-900 border border-gray-600 text-white mb-3"
            placeholder="@PizzaCompanyDotCom"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button
            onClick={cleanUsername}
            className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded font-semibold"
          >
            Run
          </button>
        </>
      ) : (
        <div className="text-center">
          <p className="text-lg mb-4">
            🎉 Nice to meet you, <strong>{cleaned}</strong>!
          </p>

          <button
            onClick={() =>
              window.open(
                "https://x.com/intent/follow?screen_name=DeHyperCoder",
                "_blank"
              )
            }
            className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded font-semibold mb-3 block"
          >
            Yes, I’ll follow!
          </button>

          <button
            onClick={() => setCleaned(null)}
            className="bg-gray-700 hover:bg-gray-800 px-5 py-2 rounded font-semibold"
          >
            Maybe later
          </button>

          <p className="text-sm mt-6 opacity-70">
            ⭐ Don’t forget to follow, star & fork this repo:<br />
            @dehypercoder/ConnectApp
          </p>
        </div>
      )}
    </main>
  );
}
