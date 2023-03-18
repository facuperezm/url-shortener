import React from "react";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Link from "./components/Link";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

interface Response {
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

export default function App() {
  const [link, setLink] = React.useState("");
  const [response, setResponse] = React.useState<Response>({
    ok: false,
    result: {
      code: "",
      full_short_link: "",
      full_short_link2: "",
      original_link: "",
      short_link: "",
      short_link2: "",
      share_link: "",
      share_link2: "",
      warning: "",
    },
  });

  const fetchUrl = async () => {
    const url = "https://api.shrtco.de/v2/shorten?url=" + link;
    const response = await fetch(url);
    const data = await response.json();
    setResponse(data);
    console.log(data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLink("");
    fetchUrl();
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Link handleSubmit={handleSubmit} link={link} setLink={setLink} />
      <Stats response={response} />
      <Boost />
      <Footer />
    </>
  );
}
