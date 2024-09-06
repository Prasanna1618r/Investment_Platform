// actions.js
export const FETCH_USER_PROFILE_REQUEST = 'FETCH_USER_PROFILE_REQUEST';
export const FETCH_USER_PROFILE_SUCCESS = 'FETCH_USER_PROFILE_SUCCESS';
export const FETCH_USER_PROFILE_FAILURE = 'FETCH_USER_PROFILE_FAILURE';

export const fetchUserProfile = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_USER_PROFILE_REQUEST });

    // Replace this with your actual API call to fetch the user profile data
    fetch('your-api-endpoint')
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_USER_PROFILE_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_USER_PROFILE_FAILURE, payload: error });
      });
  };
};
