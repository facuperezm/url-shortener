import logo from "../assets/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { Menu } from "@headlessui/react";

export default function Navbar() {
  return (
    <header className="flex flex-row w-full px-6 md:px-48 items-center justify-between text-neutral-grayish-violet text-sm font-bold">
      <nav className="flex flex-row items-center py-10">
        <div>
          <img src={logo} className="w-[110px] h-[30px] cursor-pointer" />
        </div>
        <a href="#" className="px-2 ml-6 hidden md:block">
          Features
        </a>
        <a href="#" className="px-2 hidden md:block">
          Pricing
        </a>
        <a href="#" className="px-2 hidden md:block">
          Resources
        </a>
      </nav>
      <div className="md:flex flex-row items-center gap-6 hidden">
        <a href="#">Login</a>
        <a
          href="#"
          className="bg-primary-cyan rounded-3xl px-5 py-2 font-bold text-white"
        >
          Sign Up
        </a>
      </div>
      <div className="md:hidden">
        <Menu>
          <Menu.Button>
            <RxHamburgerMenu />
          </Menu.Button>
          <Menu.Items className="flex flex-col justify-center items-center border-mx font-bold m-auto absolute z-10 pb-6 left-[50%] transform -translate-x-[50%] top-10 w-[50%] bg-primary-dark-violet space-y-4 rounded-xl px-5">
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`text-white py-2 pt-6 ${active && "bg-blue-500"}`}
                  href="/"
                >
                  Features
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`text-white py-2 ${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Pricing
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`text-white py-2 pb-6 ${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Resources
                </a>
              )}
            </Menu.Item>
            <div className="h-[0.5px] bg-neutral-grayish-violet w-[90%] opacity-30"></div>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`text-white py-2 pt-2 ${active && "bg-blue-500"}`}
                  href="/account-settings"
                >
                  Login
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={`text-white bg-primary-cyan rounded-full text-center w-full py-2  ${
                    active && "bg-blue-500"
                  }`}
                  href="/account-settings"
                >
                  Sign Up
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
}
