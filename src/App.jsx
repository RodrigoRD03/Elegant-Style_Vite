import { Navbar, Home, Catalogue, About, Gallery, Opinions, Contact, LineBuy, LineCaution, ChatBot } from "./components";
import "./App.css"

const App = () => {
  return (
    <div>
      <Navbar />
      <ChatBot />
      <Home />
      <LineBuy id="Catalogue"/>
      <Catalogue />
      <LineCaution id="About"/>
      <About />
      <LineBuy id="Gallery"/>
      <Gallery /> 
      <LineCaution id="Opinion"/>
      <Opinions />
      <Contact />
    </div>
  );
};

export default App
