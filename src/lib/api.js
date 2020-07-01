// This is MY API WRAPPER for MY SERVER API CALLS

const API_URL = 'http://localhost:9000/';

export async function fetchPublishedPosts() {
  const data = await fetch(`${API_URL}posts/published/`);

  return await data.json();
}
