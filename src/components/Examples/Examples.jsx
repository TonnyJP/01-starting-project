import React from "react";
import { EXAMPLES } from "../../data";
import { TabButton } from "../TabButton/TabButton";

export const Examples = () => {
  const [selectedTopic, setSelectedTopic] = React.useState("components");
  const test = "toi";
  const onCklickHandler = (e) => {
    setSelectedTopic(e);
  };

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <>
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </>
    );
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        <TabButton
          isSelected={selectedTopic === "components"}
          onClick={() => onCklickHandler("components")}
        >
          {" "}
          Component{" "}
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          onClick={() => onCklickHandler("jsx")}
        >
          {" "}
          JSX{" "}
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          onClick={() => onCklickHandler("props")}
        >
          {" "}
          Props{" "}
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          onClick={() => onCklickHandler("state")}
        >
          {" "}
          State{" "}
        </TabButton>
      </menu>
      <div id="tab-content">{tabContent}</div>
    </section>
  );
};
