export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 prose prose-invert">
      <h1>About GlintX Ultra</h1>

      <p>
        GlintX Ultra was created to enable beautiful, shareable social identity
        cards for Farcaster. The project focuses on readability, aesthetics,
        and privacy. Profiles are fetched from Neynar (public data), cards are
        generated in your browser for privacy and speed.
      </p>

      <h2>Design Philosophy</h2>
      <p>
        We believe social identity deserves better design — not endless follower counts
        but meaningful visual badges people can share. Each card is intentionally crafted
        to be visually striking at 16:9 (great for feeds and social previews).
      </p>

      <h2>Open & Transparent</h2>
      <p>
        The scoring algorithm is intentionally simple and transparent: followers, followings,
        and any Neynar score are combined into a single index. This is a starting point — builders
        are encouraged to fork and experiment.
      </p>
    </div>
  );
}
