import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavigationMenu from "./components/NavigationMenu";
import AllRoutes from "./routes/AllRoutes";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <NavigationMenu />
      <div className="xl:px-36 mx-auto w-full">
        <AllRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;
