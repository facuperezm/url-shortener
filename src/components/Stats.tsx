import firstcomp from "../assets/icon-brand-recognition.svg";

export default function Stats() {
  return (
    <div className="flex flex-col items-center justify-center pt-10 bg-primary-cyan bg-opacity-10 w-full">
      <div className="flex flex-col justify-start items-center pt-16">
        <h1 className="text-3xl font-extrabold text-neutral-very-dark-blue text-center">
          Advanced Statistics
        </h1>
        <p className="text-neutral-grayish-violet pt-2 line-clamp-2 px-40 py-20 text-center">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 px-6 md:px-36 pb-40">
        <div className="bg-white rounded-md p-6">
          <div className="bg-primary-dark-violet rounded-full absolute p-4 -translate-y-16">
            <img src={firstcomp} alt="" />
          </div>
          <h2 className="text-neutral-very-dark-violet font-bold text-lg pt-8 pb-4">
            Brand Recognition
          </h2>
          <p className="text-neutral-gray text-sm">
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="bg-white rounded-md p-6 translate-y-8">
          <div className="flex bg-primary-dark-violet rounded-full absolute p-4 -translate-y-16 items-center align-center">
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
          <div className="bg-primary-dark-violet rounded-full absolute p-4 -translate-y-16">
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
  );
}
