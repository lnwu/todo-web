import React from "react";
import { useConfig } from "../hooks/useConfig";

const Header = () => {
  const config = useConfig();

  return <h2 className="header">当前环境: {config.env}</h2>;
};

export default Header;
