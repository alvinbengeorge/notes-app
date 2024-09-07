import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen font-body bg-[#00000]">
      <Header />
      <div className="flex flex-1">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default App;
