import api_key from "../api_key";

const baseURL = "https://api.themoviedb.org/3/";

const fetchMovies = async (e, movieName, setMovies) => {
  e.preventDefault();

  try {
    const response = await fetch(
      `${baseURL}search/movie?api_key=${api_key}&query=${movieName}&language=en-US&include_adult=false`
    );

    // if (!response.ok) throw new Error(response.status);

    const data = await response.json();
    setMovies(data.results);
    return data.results; // return for testing
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchMovies;
