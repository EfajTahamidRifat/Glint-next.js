import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-opacity-60 bg-black/60 backdrop-blur-sm border-b border-white/5 fixed top-0 left-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <img src={process.env.NEXT_PUBLIC_GLINTX_LOGO ?? process.env.GLINTX_LOGO} alt="GlintX" className="w-10 h-10 rounded-md"/>
          <span className="text-xl font-bold tracking-wider">GlintX</span>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/score">Score</Link>
          <Link href="/about">About</Link>
          <Link href="/faqs">FAQs</Link>
          <Link href="/developer">Developer</Link>
          <Link href="/donate">Donate</Link>
        </div>
      </div>
    </nav>
  );
}
