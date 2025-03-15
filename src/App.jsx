import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";
import MobileMenu from "./components/MobileMenu";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isLoading ? "opacity-0" : "opacity-100"
        } bg-black text-gray-100`}
      >
        <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </>
  );
};

export default App;
