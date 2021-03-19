export const SET_ERROR = "SET_ERROR";

export const setError = (errorMessage) => {
    return { type: SET_ERROR, payload: errorMessage }
}