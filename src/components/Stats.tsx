import firstcomp from "../assets/.svg";

export default function () {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="flex flex-row justify-start items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-extrabold text-neutral-very-dark-blue text-center">
            Advanced Statistics
          </h1>
          <p className="text-neutral-grayish-violet pt-2 line-clamp-2 p-36 text-center">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div>
          <div>
            <img src={firstcomp} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
