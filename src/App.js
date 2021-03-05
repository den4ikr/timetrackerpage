import "./App.css";
import { Header } from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <List />
      </div>
    </div>
  );
}

export default App;
