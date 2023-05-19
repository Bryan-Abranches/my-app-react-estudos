import React from "react";

function Menu(props) {
  const listLink = props.links.map((link, index) => {
    return <li key={index}>{link}</li>;
  })
  
    return (
    <ul>
      {listLink}
    </ul>
  );
}

export default Menu;
