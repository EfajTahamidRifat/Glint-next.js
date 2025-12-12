"use client";

import { useState, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";

export default function ScorePage() {
  const [fid, setFid] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);

  async function handleGenerate() {
    try {
      setLoading(true);
      setResult(null);
      const res = await axios.post("/api/score", { fid });
      setResult(res.data);
    } catch (e) {
      alert("Failed to fetch score. Check the FID and your API key.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  async function downloadCard() {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current, { scale: 2 });
    const url = canvas.toDataURL("image/png");
    const a = document.createElement("a");
    a.href = url;
    a.download = `${fid || "glintx-card"}.png`;
    a.click();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Generate a Score Card</h1>

      <div className="flex gap-3 mb-4">
        <input
          className="flex-1 p-3 rounded bg-white/5 outline-none"
          placeholder="Enter Farcaster FID (e.g. 1234)"
          value={fid}
          onChange={(e) => setFid(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          className="bg-accent px-4 py-2 rounded font-semibold"
          disabled={loading || !fid}
        >
          {loading ? "Loading..." : "Generate"}
        </button>
      </div>

      {result && (
        <div>
          <div
            ref={cardRef}
            className="relative rounded-xl overflow-hidden shadow-2xl"
            style={{
              width: "100%",
              aspectRatio: "16/9",
              backgroundImage: `url(${result.bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/65"></div>

            <div className="absolute left-6 top-6 text-white">
              <h2 className="text-3xl font-bold">{result.user?.display_name || result.user?.username}</h2>
              <p className="opacity-80 mt-1">@{result.user?.username}</p>
            </div>

            <div className="absolute left-6 bottom-6 text-white">
              <p className="text-xl">Followers: {result.user?.follower_count ?? 0}</p>
              <p className="text-xl">Following: {result.user?.following_count ?? 0}</p>
              <p className="mt-3 text-4xl font-extrabold">SCORE: {result.score}</p>
            </div>

            <img
              src={process.env.NEXT_PUBLIC_GLINTX_LOGO ?? process.env.GLINTX_LOGO}
              alt="logo"
              className="absolute right-6 bottom-4 w-24 opacity-80"
            />
          </div>

          <div className="flex gap-3 mt-4">
            <button onClick={downloadCard} className="bg-green-600 px-4 py-2 rounded font-semibold">
              Download 16:9 PNG
            </button>
            <button
              onClick={() => {
                // create share text for a cast (copyable)
                const text = `Check my GlintX score: ${result.score} — https://farcaster.xyz/miniapps (generate yours)`;
                navigator.clipboard.writeText(text);
                alert("Share text copied to clipboard (paste into a cast).");
              }}
              className="bg-white/10 px-4 py-2 rounded"
            >
              Copy Share Text
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
