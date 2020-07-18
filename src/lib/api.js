// This is MY API WRAPPER for MY SERVER API CALLS

const API_URL = 'http://localhost:9000/';

export async function fetchServerStatus() {
  try {
    const data = await fetch(API_URL);
    return await data.json();
  } catch (error) {
    return { error };
  }
}

export async function fetchPublishedPosts() {
  try {
    const data = await fetch(`${API_URL}posts/published/`);

    return await data.json();
  } catch (error) {
    return { error };
  }
}

export async function fetchPostWithId(id) {
  try {
    const data = await fetch(`${API_URL}posts/${id}/`);

    return await data.json();
  } catch (error) {
    return { error };
  }
}

export async function fetchPostCommentsWithId(id) {
  try {
    const data = await fetch(`${API_URL}posts/${id}/comments/`);

    return await data.json();
  } catch (error) {
    return { error };
  }
}

export async function postComment(data) {
  await fetch(`${API_URL}posts/${data.post}/comments/new/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
}
