import React from "react";
import { FC } from "react";

interface HeaderProps {
  image: { src: string; alt: string };
  children: React.ReactNode;
}

const Header: FC<HeaderProps> = (props) => {
  const { image, children } = props;

  return (
    <header>
      <img {...image} />
      {children}
    </header>
  );
};

export default Header;
