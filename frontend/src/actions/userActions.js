import axios from 'axios';
const baseUrl = 'http://localhost:5000';

export const userLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: 'USER_LOGIN_REQUEST'
    });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    console.log(email, password);
    const { data } = await axios.post(
      `${baseUrl}/api/users/login`,
      { email, password },
      config
    );

    dispatch({
      type: 'USER_LOGIN_SUCCESS',
      payload: data
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    console.log(error);
    dispatch({
      type: 'USER_LOGIN_FAIL',
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
