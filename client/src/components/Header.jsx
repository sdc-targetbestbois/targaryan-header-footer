import React from "react";

function Header(props) {

  return (
    <header className="brian-header">
        <h3>{props.header}</h3>
    </header>
  )
}

export default Header;
