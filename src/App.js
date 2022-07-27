import React from "react";
import Footer from "./Components/Footer";
import ColorSchemesExample from "./Components/Header";
import Section from "./Components/Section";

const users = [
  { id: 1, name: "Anna", lastName: "Shaman", age: 13 },
  { id: 2, name: "Shizui", lastName: "Takidzava", age: 26 },
  { id: 4, name: "Yoma", lastName: "Sukihira", age: 18 },
  { id: 5, name: "Naruto", lastName: "Udzumaki", age: 32 },
  { id: 6, name: "Kazuha", lastName: "Lishimiya", age: 18 },
  { id: 7, name: "Nikita", lastName: "Hrushew", age: 62 },
];

const App = () => {
  return (
    <div>
      <ColorSchemesExample />
      <Section users={users} />
      <Footer />
    </div>
  );
};

export default App;
