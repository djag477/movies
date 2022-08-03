import AuthContextProvider from "./context/AuthContext";
import AppRouter from "./Router/Router";

// https://www.themoviedb.org/documentation/api

// e0b9951e5fe48edf31a9ce1daa561f52 API Key

// https://api.themoviedb.org/3/movie/550?api_key=e0b9951e5fe48edf31a9ce1daa561f52 example API request

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGI5OTUxZTVmZTQ4ZWRmMzFhOWNlMWRhYTU2MWY1MiIsInN1YiI6IjYyZTdlODFkMzU3YzAwMDA2MGJkZmUxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ohk2ims6qz-5cPvixGJa00GYQwFemirbWVUqPV79nII

function App() {
  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
