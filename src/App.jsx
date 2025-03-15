import React, { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>{!isLoading && <LoadingScreen onComplete={() => setIsLoading(true)} />}</>
  );
};

export default App;
