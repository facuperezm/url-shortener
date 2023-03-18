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
    <>
      {links?.map((link, index) => {
        return <LinkItem link={link} key={index} />;
      })}
    </>
  );
}
