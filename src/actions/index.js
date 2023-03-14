export const GET_LIST_PLACEHOLDER_PROCESS = 'GET_LIST_PLACEHOLDER_PROCESS';
export const GET_LIST_PLACEHOLDER_SUCCESS = 'GET_LIST_PLACEHOLDER_SUCCESS';
export const GET_LIST_PLACEHOLDER_ERROR = 'GET_LIST_PLACEHOLDER_ERROR';

export function getListPlaceholder(data) {
  return {
    type: GET_LIST_PLACEHOLDER_PROCESS,
    page: data.page
  };
}
