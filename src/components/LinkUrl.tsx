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
    <div className="mx-6 md:mx-48">
      {links?.map((link, index) => {
        return <LinkItem link={link} key={index} />;
      })}
    </div>
  );
}
