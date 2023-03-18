import React from "react";

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

export default function LinkUrl({ response }: { response: Response }) {
  const [copy, setCopy] = React.useState(false);

  React.useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false);
      }, 2000);
    }
  }, [copy]);

  const handleCopy = () => {
    navigator.clipboard.writeText(response.result.full_short_link);
    setCopy(true);
  };

  return (
    <>
      {response.result && (
        <div className="bg-white rounded-md flex flex-col mx-6 px-4 truncate py-2">
          <p className="font-semibold text-md py-2">
            {response.result.original_link}
          </p>
          <div className="h-[0.5px] bg-neutral-grayish-violet w-[90%] opacity-30"></div>
          <p className="text-primary-cyan text-md py-2 font-semibold">
            {response.result.full_short_link}
          </p>
          <button
            onClick={() => handleCopy()}
            className={`transition-all ease-in-out duration-200 ${
              copy ? "bg-red-900" : "bg-primary-cyan"
            } text-white font-bold py-2 rounded-md`}
          >
            {copy ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </>
  );
}
