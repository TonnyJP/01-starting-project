import  reactImg from "./assets/react-core-concepts.png" ;
import { CORE_CONCEPTS as CoreConceptsData } from "./data";
import { CoreConcept, Header, TabButton } from "./components";

function App() {
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
        <section id="example">
           <h2>Examples</h2>
           <menu>
            <TabButton> Component </TabButton>
            <TabButton> JSX </TabButton>
            <TabButton> Props </TabButton>
            <TabButton> State </TabButton>
           </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
