export default function FAQs() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 prose prose-invert">
      <h1>Frequently Asked Questions</h1>

      <h3>Is GlintX free?</h3>
      <p>Yes — generating and downloading cards is free. Donations are optional.</p>

      <h3>What does the score mean?</h3>
      <p>
        The score is a simple influence index combining followers and followings with any experimental
        Neynar score. It's meant for fun and lightweight comparison, not a definitive reputation system.
      </p>

      <h3>Where do images come from?</h3>
      <p>
        We fetch high-quality background images from Unsplash, Pexels, and Pixabay (fallbacks used when needed).
        Images are used under each provider's terms.
      </p>

      <h3>Do you store user data?</h3>
      <p>No — we do not persist profile data. Each request fetches public profile data from Neynar and generates a card on demand.</p>
    </div>
  );
}
