import "./globals.css";

export const metadata = {
  title: "Farid Ullah - Portfolio",
  description: "Modern Portfolio with Next.js & Animations",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
