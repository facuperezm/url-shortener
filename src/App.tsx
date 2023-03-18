import React from "react";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Link from "./components/Link";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";
interface ShortenResponse {
  ok: boolean;
  result: {
    code: string;
    full_short_link: string;
    full_short_link2: string;
    original_link: string;
    short_link: string;
    short_link2: string;
    share_link: string;
    share_link2: string;
    warning: string;
  };
}

type Links = ShortenResponse["result"][];

export default function App() {
  const [links, setLinks] = React.useState<Links>([]);
  const [link, setLink] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Send API request to shorten the link
      const url = "https://api.shrtco.de/v2/shorten?url=" + link;
      const response = await fetch(url);
      const data = await response.json();

      // Update the links array with the new shortened link
      setLinks((links) => [...links, data.result]);

      // Update the response object with the new API response
      setLink("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="font-sans">
      <Navbar />
      <Hero />
      <Link handleSubmit={handleSubmit} link={link} setLink={setLink} />
      <Stats links={links} />
      <Boost />
      <Footer />
    </main>
  );
}
