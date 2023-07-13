import "./App.css";
import { Search } from "./components/Search/Search";

const App = () => {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange}></Search>
    </div>
  );
};

export default App;
