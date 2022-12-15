import { API_BASE_URL } from "./constants";

export async function getMovieDetails(id) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    );

    return response.json();
  } catch (error) {
    return error;
  }
}
