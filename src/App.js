import "./App.css";
import MoviesList from "./components/MoviesList";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <MoviesList />
    </div>
  );
}

export default App;
