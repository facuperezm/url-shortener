import working from "../assets/illustration-working.svg";

export default function () {
  return (
    <div className="flex flex-col items-center justify-center md:pt-10 px-6 md:px-48">
      <div className="flex flex-col-reverse md:flex-row justify-start items-center">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-5xl font-extrabold  text-neutral-very-dark-violet text-center md:text-left">
            More than just shorter links
          </h1>
          <p className="text-neutral-grayish-violet pt-2 text-center md:text-left">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <a
            href="#"
            className="bg-primary-cyan focus:opacity-50 rounded-3xl px-5 py-2 font-bold text-white mt-4 -mb-4 hover:bg-primary-cyan/[0.9]"
          >
            Get Started
          </a>
        </div>
        <div className="relative">
          <img
            src={working}
            alt="ilustration of a person working"
            className="w-full h-full md:translate-x-20 mb-10 md:mb-0 "
          />
        </div>
      </div>
    </div>
  );
}
