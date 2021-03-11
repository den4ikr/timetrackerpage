import { Route } from "react-router";
import "./App.css";
import { Header } from "./components/Header";
import List from "./components/List";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Route path="timetrackerpage" render = {() => <List  />} />
      </div>
    </div>
  );
}

export default App;
