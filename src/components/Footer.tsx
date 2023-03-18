import { useState } from "react";
import { footer } from "./data/Data";
import logo from "../assets/logo.svg";

const Footer = () => {
  const [footerLink, setFooterLink] = useState(footer);
  return (
    <>
      <footer className="text-center md:text-left md:flex md:flex-row md:justify-around px-10 lg:py-10 bg-neutral-very-dark-violet text-white">
        <div>
          <img
            src={logo}
            alt=""
            className="mx-auto py-14 md:mx-0 fill-white stoke-white"
          />
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-40 md:pr-10 pb-12 ">
          {footerLink.map(({ id, title, links }) => (
            <ul key={id}>
              <h4 className="mt-10 mb-5 text-lg font-bold">{title}</h4>
              {links.map((link) => (
                <li
                  className="text-md py-0.5 text-neutral-gray cursor-pointer"
                  key={link}
                >
                  {link}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </footer>
    </>
  );
};
export default Footer;
