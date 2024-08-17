import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Greeting from "./components/Greetings";
import Footer from "./components/Footer";

// App.js is the root component that houses all other components
// App.js is the root/main component that wraps the other components

function App() {
  return (
    <div>
      <Greeting />
      <Header />
      <About />
      <Footer />
      <p className="App">This is our first react app</p>
    </div>
  );
}

export default App;

//After defining a function, you also have to "export default"

//1/ export default function or
//2/ function
//   export default -(means close a function, already declared)

//___________________________________________________________

//You have to import/render the components created to show it on the browser. By adding "import..."
