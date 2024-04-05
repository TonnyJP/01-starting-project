import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS as CoreConceptsData, EXAMPLES } from "./data";
import { CoreConcepts, Examples, Header, TabButton } from "./components";
import React from "react";

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </div>
  );
}

export default App;
