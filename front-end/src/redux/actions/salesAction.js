/* define user actions to handel sales routes  */
import axios from '../../axiosconfig';

/* addsles action */
export const addSale = (saleData) => async (dispatch) => {
  try {
    await axios.post('/addsaleentry', saleData);
    /* dispatch to the sales reducer */
    dispatch({ type: 'ADD_SALE_SUCCESS' });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'ADD_SALE_FAILURE', payload: 'Failed to add sale' });
  }
};

/* get top sales action */
export const gettopsales = () => async (dispatch) => {
  try {
    const resp = await axios.get('/topfivesales');
    const data = resp.data;
    /* dispatch to the sales reducer with payload */
    dispatch({ type: 'GETTOPSALES_SUCCESS', payload: data });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'GETTOPSALES_FAILURE', payload: 'Failed to fatch sales' });
  }
};

/* get total revenue action */
export const getrevenue = () => async (dispatch) => {
  try {
    const resp = await axios.get('/revenue');
    const data = resp.data.totalrevenue;
    /* dispatch to the sales reducer with payload */
    dispatch({ type: 'REVENUE_SUCCESS', payload: data });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'REVENUE_FAILURE', payload: 'Failed to fatch revenue' });
  }
};

/* get sales of perticular user action */
export const getUserSales = (userId) => async (dispatch) => {
  try {
    const resp = await axios.get(`/usersales/${userId}`);
    const data = resp.data;
    /* dispatch to the sales reducer with payload */
    dispatch({ type: 'USERSALES_SUCCESS', payload: data });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'USERSALES_FAILURE', payload: 'Failed to fatch user sales' });
  }
};

/* get total revenue of perticular user action */
export const getuserrevenue = (userId) => async (dispatch) => {
  try {
    const resp = await axios.get(`/userrevenue/${userId}`);
    const data = resp.data;
    /* dispatch to the sales reducer with payload */
    dispatch({ type: 'USERREVENUE_SUCCESS', payload: data });
  } catch (error) {
    console.error(error);
    dispatch({ type: 'USERREVENUE_FAILURE', payload: 'Failed to fatch revenue' });
  }
};


