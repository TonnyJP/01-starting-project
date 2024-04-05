import { CoreConcept } from "./CoreConcept";
import { CORE_CONCEPTS as coreConceptsData } from "../../data";

export const CoreConcepts = () => {
  //const fesse = "grosse";
  const tesz = "auto";
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {coreConceptsData.map((element, index) => {
          return <CoreConcept key={index} {...element} />;
        })}
      </ul>
    </section>
  );
};
