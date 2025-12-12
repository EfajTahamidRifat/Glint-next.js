import "@/app/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "GlintX Ultra",
  description: "GlintX — generate premium 16:9 Farcaster score cards"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  );
}
