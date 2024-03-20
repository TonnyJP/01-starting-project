import  reactImg from "./assets/react-core-concepts.png" ;
import { CORE_CONCEPTS as CoreConceptsData, EXAMPLES } from "./data";
import { CoreConcept, Header, TabButton } from "./components";
import React from "react";

function App() {
  console.log("testing, ", EXAMPLES)
  const [selectedTopic, setSelectedTopic] = React.useState("components");

  const onCklickHandler = (e) => {
    console.log(e)
    setSelectedTopic(e);
  }

  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic){
    tabContent = <><h3>{EXAMPLES[selectedTopic].title}</h3>
    <p>{EXAMPLES[selectedTopic].description}</p>
    <pre>
      <code>
      {EXAMPLES[selectedTopic].code}
      </code>
    </pre>
   </>
  }
  
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CoreConceptsData.map((element, index) => {
               return <CoreConcept key={index} {...element}/>
            })}
          </ul>
        </section>
        <section id="examples">
           <h2>Examples</h2>
           <menu>
            <TabButton isSelected={selectedTopic === "components"} onClick={() => onCklickHandler("components")}> Component </TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => onCklickHandler("jsx")}> JSX </TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => onCklickHandler("props")}> Props </TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => onCklickHandler("state")}> State </TabButton>
           </menu>
           <div id="tab-content">
            {tabContent}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
