import working from "../assets/illustration-working.svg";

export default function () {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="flex flex-row justify-start items-center">
        <div className="flex flex-col">
          <h1 className="text-5xl font-extrabold">
            More than just shorter links
          </h1>
          <p className="text-neutral-grayish-violet pt-2">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <a
            href="#"
            className="bg-primary-cyan rounded-3xl px-5 py-2 font-bold text-white mr-auto mt-3"
          >
            Get Started
          </a>
        </div>
        <div className="relative">
          <img
            src={working}
            alt="ilustration of a person working"
            className="w-full h-full translate-x-20 "
          />
        </div>
      </div>
    </div>
  );
}
