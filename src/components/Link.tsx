import React from "react";

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  link: string;
  setLink: React.Dispatch<React.SetStateAction<string>>;
}

export default function Link({ handleSubmit, link, setLink }: Props) {
  return (
    <div className="flex flex-col">
      <div className="bg-primary-dark-violet bg-[url('./assets/bg-shorten-desktop.svg')] bg-cover py-8 px-10 rounded-md relative overflow-hidden mx-6 md:mx-48 translate-y-[50%]">
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
    </div>
  );
}
