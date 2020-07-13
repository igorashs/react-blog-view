export function validateUsername(username) {
  if (!username) {
    return 'is required';
  }

  if (username.length > 15) {
    return 'should be less than 15 characters';
  }

  return '';
}

export function validateCommentText(text) {
  if (!text) {
    return 'is required';
  }

  if (text.length > 300) {
    return 'should be less than 300 characters';
  }

  return '';
}
