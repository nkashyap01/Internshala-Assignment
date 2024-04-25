import React from "react";
import Header from "./components/Header";
import Path from "./components/Path";
import Main from "./components/Main";
import SubSection from "./components/CreateFlashcard";
import FAQ from "./components/FAQ";
import CreateFlashcard from "./components/CreateFlashcard";

const App = () => {
  return (
    <div className="px-20 pb-20 sm:px-4 md:px-6 lg:mx-10">
      <Header />
      <Path />
      <Main />
      <CreateFlashcard />
      <FAQ />
    </div>
  );
};

export default App;
