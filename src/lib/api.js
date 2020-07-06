// This is MY API WRAPPER for MY SERVER API CALLS

const API_URL = 'http://localhost:9000/';

export async function fetchServerStatus() {
  const data = await fetch(API_URL);

  return await data.json();
}

export async function fetchPublishedPosts() {
  const data = await fetch(`${API_URL}posts/published/`);

  return await data.json();
}

export async function fetchPostWithId(id) {
  const data = await fetch(`${API_URL}posts/${id}/`);

  return await data.json();
}

export async function fetchPostCommentsWithId(id) {
  const data = await fetch(`${API_URL}posts/${id}/comments/`);

  return await data.json();
}

export async function postPostCommentWithId(id, data) {
  // TODO
}
