import CoreConcepts from "./components/CoreConcept.jsx";
import Header from "./components/Header.jsx";
import { CORE_CONCEPTS, EXAMPLES } from "./js/CORE_CONCEPTS.js";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectTopic, setSelectTopic] =useState('');
  
  function HandleSelet(SelecteButton) {
    setSelectTopic(SelecteButton);
    
  }
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((coreitem)=>(
            <CoreConcepts
            {...coreitem}
          /> 
          ))}
        </ul>
      </section>
      <section id="examples">
        <h2>examples</h2>
        <menu>
          <TabButton onSelect={()=> HandleSelet('components')}>Components</TabButton>
          <TabButton onSelect={()=> HandleSelet('jsx')}>JSX</TabButton>
          <TabButton onSelect={()=> HandleSelet('props')}>Props</TabButton>
          <TabButton onSelect={()=> HandleSelet('state')}>State</TabButton>
        </menu>
        {! selectTopic ? "Please Click Core-Concepts" : 
        (        
          <div className="tab-content">
            <h3>{EXAMPLES[selectTopic].title}</h3>
            <p>{EXAMPLES[selectTopic].description}</p>
            <prev>
              <code>{EXAMPLES[selectTopic].code}</code>
            </prev>
          </div>
        )
        }
      </section>
      </main>
    </div>
  );
}

export default App;
