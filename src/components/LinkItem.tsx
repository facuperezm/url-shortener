import React from "react";

interface Link {
  original_link: string;
  full_short_link: string;
}

interface Props {
  link: Link;
}

export default function LinkItem({ link }: Props) {
  const [copy, setCopy] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false);
      }, 2000);
    }
  }, [copy]);

  const handleCopy = (link: string): void => {
    navigator.clipboard.writeText(link);
    setCopy(true);
  };

  return (
    <div className="bg-white rounded-md flex flex-col mx-6 px-4 truncate py-3 mb-2">
      <p className="font-semibold text-md pb-2">{link.original_link}</p>
      <div className="h-[0.5px] bg-neutral-grayish-violet w-[90%] opacity-30"></div>
      <p className="text-primary-cyan text-md py-2 font-semibold">
        {link.full_short_link}
      </p>
      <button
        onClick={() => handleCopy(link.full_short_link)}
        className={`transition-all ease-in-out duration-200 ${
          copy ? "bg-red-900" : "bg-primary-cyan"
        } text-white font-bold py-2 rounded-md`}
      >
        {copy ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
