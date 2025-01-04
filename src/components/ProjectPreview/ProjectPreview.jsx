import { useState } from "react";
import TabButton from "../TabButtons/TabButton.jsx";
import { EXAMPLES } from "./../../data.js";
import "./ProjectPreview.css";

export default function ProjectPreview() {
  const [selectedTopic, setSelectedTopic] = useState();
  const TabButtons = ["components", "jsx", "props", "state"];

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <section id='examples-container' className="section-container">
      <div id='projects-container'>
        <h2>Examples</h2>
        <menu>
          {TabButtons.map((tabButton) => (
            <TabButton key={tabButton} 
              isSelected={selectedTopic === tabButton}
              onClick={() => clickHandler(tabButton)}
              > {tabButton} </TabButton>
          ))}
        </menu>

        {/*Hvis selectedTopic er falsy så(?) vises teksten ellers(:) vises intet */}
        {!selectedTopic ? null : null}
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
