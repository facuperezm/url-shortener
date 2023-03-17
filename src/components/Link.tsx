import React from "react";
import Url from "./LinkUrl";
import LinkUrl from "./LinkUrl";

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

export default function Link() {
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
      <div className="bg-primary-dark-violet bg-[url('./assets/bg-shorten-desktop.svg')] bg-cover py-8 px-10 rounded-md relative overflow-hidden mx-6 md:mx-36 translate-y-[50%]">
        <form
          className="flex flex-col lg-flex-row gap-3"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            placeholder="Shorten a link here..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="p-2 flex-1 relative rounded-md placeholder:px-3 placeholder:text-sm placeholder:font-medium placeholder:text-bold text-neutral-grayish-violet z-20"
          />
          <button
            type="submit"
            className="bg-primary-cyan rounded-md px-6 py-2 font-bold text-sm text-white z-20"
          >
            Shorten It!
          </button>
        </form>
      </div>
    </>
  );
}
