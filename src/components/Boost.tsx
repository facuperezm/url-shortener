import bg from "../assets/bg-boost-desktop.svg";

export default function Boost() {
  return (
    <div className="flex flex-col items-center justify-center relative bg-primary-dark-violet overflow-hidden py-8">
      <img src={bg} alt="" className="absolute min-w-full" />
      <div className="flex flex-col justify-center align-center space-y-3 z-10">
        <h1 className="font-bold text-2xl text-white">
          Boost your links today
        </h1>
        <button className="bg-primary-cyan rounded-3xl px-6 py-2 font-bold text-white text-center mx-auto text-sm">
          Get Started
        </button>
      </div>
    </div>
  );
}
