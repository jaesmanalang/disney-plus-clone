import { API_BASE_URL } from "./constants";

export async function getMovieDetails(id) {
  try {
    const response = await fetch(
      `${API_BASE_URL}/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US&append_to_response=images&include_image_language=en,null`
    );

    return response.json();
  } catch (error) {
    return error;
  }
}
