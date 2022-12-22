export const API_BASE_URL = "https://api.themoviedb.org/3";
export const API_IMAGE_URL = "https://image.tmdb.org/t/p/original";
export const request = {
  latest: `https://api.themoviedb.org/3/movie/latest?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`,
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`,
  nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US`,
  search: `https://api.themoviedb.org/3/search/multi?api_key=${
    import.meta.env.VITE_API_KEY
  }&language=en-US&page=1&include_adult=false`,
};
