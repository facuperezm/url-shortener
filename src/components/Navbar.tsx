import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <nav className="flex flex-row w-full items-center justify-between text-neutral-grayish-violet text-sm font-bold">
      <div className="flex flex-row items-center py-10  ">
        <div>
          <img src={logo} className="w-[110px] h-[30px] cursor-pointer" />
        </div>
        <a href="#" className="px-2 ml-6">
          Features
        </a>
        <a href="#" className="px-2">
          Pricing
        </a>
        <a href="#" className="px-2">
          Resources
        </a>
      </div>
      <div className="flex flex-row items-center gap-6">
        <a href="#">Login</a>
        <a
          href="#"
          className="bg-primary-cyan rounded-3xl px-5 py-2 font-bold text-white"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
}
