import firstcomp from "../assets/icon-brand-recognition.svg";
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

export default function Stats({ response }: { response: Response }) {
  return (
    <>
      <div className="flex flex-col justify-center pt-24 bg-primary-cyan bg-opacity-10 w-full">
        {response.ok && <LinkUrl response={response} />}
        <div className="flex flex-col justify-start pt-8">
          <h1 className="text-3xl font-extrabold text-neutral-very-dark-blue text-center ">
            Advanced Statistics
          </h1>
          <p className="text-neutral-grayish-violet pt-2 line-clamp-2 lg:px-40 py-20 text-center">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className="grid grid-flow-row lg:grid-cols-3 gap-6 px-6 md:px-36 pb-40">
          <div className="bg-white rounded-md p-6">
            <div className="bg-primary-dark-violet rounded-full absolute p-4 -translate-y-16 right-[50%] translate-x-[50%] md:right-auto md:-translate-x-0 ">
              <img src={firstcomp} alt="" />
            </div>
            <h2 className="text-neutral-very-dark-violet font-bold text-lg pt-8 pb-4">
              Brand Recognition
            </h2>
            <p className="text-neutral-gray text-sm">
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="bg-white rounded-md p-6 translate-y-8">
            <div className="bg-primary-dark-violet rounded-full absolute p-4 -translate-y-16 right-[50%] translate-x-[50%] md:right-auto md:-translate-x-0 ">
              <img src={firstcomp} alt="" />
            </div>
            <h2 className="text-neutral-very-dark-violet font-bold text-lg pt-8 pb-4">
              Detailed Records
            </h2>
            <p className="text-neutral-gray text-sm">
              Gain insights into who is clicking your links. Knowing when and
              where
            </p>
          </div>
          <div className="bg-white rounded-md p-6 translate-y-16">
            <div className="bg-primary-dark-violet rounded-full absolute p-4 -translate-y-16 right-[50%] translate-x-[50%] md:right-auto md:-translate-x-0 ">
              <img src={firstcomp} alt="" />
            </div>
            <h2 className="text-neutral-very-dark-violet font-bold text-lg pt-8 pb-4">
              Fully Customizable
            </h2>
            <p className="text-neutral-gray text-sm">
              Improve brand awareness and content discoverability through
              customizable discoverability through customizable links,
              supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
