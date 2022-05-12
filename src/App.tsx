import React from "react";
import MainPage from "./components/MainPage/MainPage";
import { defaultProjectId, projects } from "./projectsData";

function App() {
  return (
    <div className="App">
      <MainPage projects={projects} defaultProjectId={defaultProjectId} />
    </div>
  );
}

export default App;
