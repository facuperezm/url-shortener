import React from "react";
import LinkItem from "./LinkItem";

interface Link {
  original_link: string;
  full_short_link: string;
}

interface Props {
  links: Link[];
}

export default function LinkUrl({ links }: Props) {
  return (
    <div className="md:container mx-auto md:max-w-4xl px-2 flex w-full">
      {links?.map((link, index) => {
        return <LinkItem link={link} key={index} />;
      })}
    </div>
  );
}
