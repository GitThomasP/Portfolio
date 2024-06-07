import { useState } from "react";
import TabButton from "../TabButtons/TabButton.jsx";
import { EXAMPLES } from "./../../data.js";
import "./ProjectPreview.css";

export default function ProjectPreview() {
  const [selectedTopic, setSelectedTopic] = useState();

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id='examples-container'>
      <div id='projects-container'>
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
      </div>
    </section>
  );
}
