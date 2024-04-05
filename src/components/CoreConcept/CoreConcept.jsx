import React from "react";

export function CoreConcept(props) {
  const [test, setTest] = React.useState("");
  return (
    <li>
      <img src={props.image.src} alt={props.image.alt} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}
