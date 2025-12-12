export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 prose prose-invert">
      <h1>GlintX Ultra — Shareable Score Cards for Farcaster</h1>

      <p>
        GlintX Ultra converts public Farcaster identities into beautiful, shareable 16:9 cards.
        Enter a Farcaster FID and GlintX will fetch public profile data, compute a transparent
        influence score, and render a premium card you can download and post on Farcaster or elsewhere.
      </p>

      <h2>Why GlintX?</h2>
      <p>
        We focus on speed, privacy, and visual quality. Cards are generated in real-time (no accounts,
        no database), and use high-quality artwork from Unsplash/Pexels/Pixabay. The watermark ensures
        every card is identifiable.
      </p>

      <h2>How it works</h2>
      <ol>
        <li>Enter a Farcaster FID on the Score page.</li>
        <li>GlintX fetches profile data from Neynar.</li>
        <li>We compute a score and render a 16:9 card with a unique background image.</li>
        <li>Download the PNG and share.</li>
      </ol>

      <p>
        Help us grow: donate on the Donate page — 20% of donations go to homelessness charities.
      </p>
    </main>
  );
}
