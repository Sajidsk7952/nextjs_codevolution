"use client"
// import { Metadata } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const authLinks = [
  {
    title: "login",
    href: "/login",
  },
  { title: "signup", href: "/signup" },
];
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [input,setInput] = useState("");
  return (
    <section>
      <div>
        <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
      </div>
      <nav className="flex gap-3 items-center">
        {authLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return(
            <Link href={link.href} key={link.title} className={isActive ? "text-blue-700 font-bold" : "text-blue-400"}>
            {link.title}
          </Link>
          )
})}
      </nav>
      {children}
    </section>
  );
}
