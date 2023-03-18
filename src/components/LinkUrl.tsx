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
  const [copy, setCopy] = React.useState(false);

  React.useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy(false);
      }, 2000);
    }
  }, [copy]);

  const handleCopy = (link: string) => {
    navigator.clipboard.writeText(link);
    setCopy(true);
  };

  console.log(links);
  return (
    <>
      {links?.map((link, index) => {
        return <LinkItem link={link} key={index} />;
      })}
    </>
  );
}
