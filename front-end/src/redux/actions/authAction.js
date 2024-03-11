/* define user actions to handel user routes  */
import axios from '../../axiosconfig';

/* login action */
export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post('/login', userData);
    const resptoken = response.data;
    /* dispatch to the user reducer with payload */
    dispatch({ type: 'LOGIN_SUCCESS', payload: resptoken });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'LOGIN_FAILURE', payload: 'Login failed' });
  }
};

/* register action */
export const register = (userData) => async (dispatch) => {
    try {
      const response = await axios.post('/register', userData);
      const { message } = response.data;
      /* dispatch to the user reducer with payload */
      dispatch({ type: 'REGISTER_SUCCESS', payload: message });
    } catch (error) {
      console.error(error);
      dispatch({ type: 'REGISTER_FAILURE', payload: 'Registration failed' });
    }
  };


/* logout action */
export const logout = () => async (dispatch) => {
  try {
    await axios.post('/logout');
    /* dispatch to the user reducer */
    dispatch({ type: 'LOGOUT_SUCCESS' });
  } catch (error) {
    console.error(error);
  }
};

/* get user details action */
export const userdetails =(id)=> async (dispatch) => {
  try{
    const resp = await axios.get(`/user/${id}`);
    /* dispatch to the user reducer with payload */
    dispatch({type :'USERDETAILS_SUCCESS' , payload:resp.data});
  } catch (error){
    console.error(error);
  }
}
