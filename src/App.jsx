import  reactImg from "./assets/react-core-concepts.png" ;
import { CORE_CONCEPTS as CoreConceptsData, EXAMPLES } from "./data";
import { CoreConcept, Header, TabButton } from "./components";
import React from "react";

function App() {
  console.log("testing, ", EXAMPLES)
  const [selectedTopic, setSelectedTopic] = React.useState();

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
            <CoreConcept {...CoreConceptsData[0]}/>
            <CoreConcept { ...CoreConceptsData[1]}/>
            <CoreConcept { ...CoreConceptsData[2]}/>
            <CoreConcept title={CoreConceptsData[3].title} description={CoreConceptsData[3].description} image={CoreConceptsData[3].image }/>
          </ul>
        </section>
        <section id="examples">
           <h2>Examples</h2>
           <menu>
            <TabButton onClick={() => onCklickHandler("components")}> Component </TabButton>
            <TabButton onClick={() => onCklickHandler("jsx")}> JSX </TabButton>
            <TabButton onClick={() => onCklickHandler("props")}> Props </TabButton>
            <TabButton onClick={() => onCklickHandler("state")}> State </TabButton>
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
