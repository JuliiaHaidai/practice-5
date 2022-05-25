export const DELETE_ERROR = 'DELETE_ERROR';

export const deleteError = (id) => {
  return {
    type: DELETE_ERROR,
    id
  }
};
