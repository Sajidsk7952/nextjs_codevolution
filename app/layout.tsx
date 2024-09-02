import Header from "@/components/Header";
import Footer from "@/components/Footer";
import '@/app/globals.css';

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
