import { useState } from "react";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept/CoreConcept.jsx";
import TabButton from "./components/TabButtons/TabButton.jsx";

export default function App() {
  //bruger array destructuring til at hente useState funktionen og dens returnerede værdi
  //I useState er dens input parametre dens default værdi
  //I dette tilfælde er variablen selectedTopic og funktionen setSelectedTopic
  const [selectedTopic, setSelectedTopic] = useState();

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <div>
      <NavigationBar />
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {/* Dynamisk måde at skrive nedenstående på */}
            {/* Key bliver brugt til at identificere et element med unik identifier*/}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}

            {/* Længere måde at skrive ovenstående på 
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />

           Kortere måde at skrive ovenstående på 
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
            */}
          </ul>
        </section>

        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            {" "}
            {/* hvis clickHandler ikke har input parametre skal den ikke afsluttes med () */}
            <TabButton
              isSelected={selectedTopic === "components"}
              onClick={() => clickHandler("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onClick={() => clickHandler("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onClick={() => clickHandler("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onClick={() => clickHandler("state")}
            >
              State
            </TabButton>
          </menu>
          {/*Hvis selectedTopic er falsy så(?) vises teksten ellers(:) vises intet */}
          {!selectedTopic ? <p>Please select a topic</p> : null}
          {selectedTopic ? (
            <div id='tab-content'>
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null}
        </section>
      </main>
    </div>
  );
}
