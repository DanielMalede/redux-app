import "./App.css";
import Home from "./components/pages/Home/Home";
function App() {
  let a = {age:18};
  let b = a;
  console.log(b.age);
  return (
    <div className="App">
      <Home />
    </div>
  );
}
export default App;
