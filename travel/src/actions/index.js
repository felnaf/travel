import {
  encrypt,
  getData,
  postData,
  validatePassword,
} from '../service';

export const getPackageData = () => async (dispatch) => {
  const { data } = await getData('package');
  dispatch({
    type: 'GET_DATA',
    payload: data,
  });
};



export const viewPackageData = (id) => async (dispatch) => {
  const { data } = await getData(`package/${id}`);
  // console.log(data);
  dispatch({
    type: 'VIEW_PACKAGE',
    payload: data,
  });
};



// offer

export const getOfferData = () => async (dispatch) => {
  const { data } = await getData('offer');
  dispatch({
    type: 'GET_OFFER',
    payload: data,
  });
};

export const viewOfferData = (id) => async (dispatch) => {
  const { data } = await getData(`offer/${id}`);
  dispatch({
    type: 'VIEW_OFFER',
    payload: data,
  });
};

// checkout

export const getCheckoutData = () => async (dispatch) => {
  const { data } = getData('checkout');
  dispatch({
    type: 'GET_CHECKOUT_DATA',
    payload: data,
  });
};

export const postCheckoutData = (data) => async (dispatch) => {
  await postData('checkout', data);
  dispatch(getCheckoutData());
};

// signup & login
export const signUpAction = (credentials, navigate) => async (dispatch) => {
  const { data: login } = await getData('users');

  const user = login.find(({ email }) => email === credentials.email);

  if (user) {
    alert('User already Exists');
  } else {
    let { phoneNumber, ...restValues } = credentials;
    phoneNumber = encrypt(phoneNumber);
    restValues = { ...restValues, phoneNumber };

    postData('users', restValues);
    navigate();
  }
};

export const loginInAction = (credentials, navigate) => async (dispatch) => {
  const { data } = await getData('users');
  const user = data.find(({ email }) => email === credentials.email);
  if (!user) {
    alert("User doesn't Exist");
  } else {
    if (validatePassword(user.phoneNumber, credentials.phoneNumber)) {
      sessionStorage.setItem(
        'user',
        JSON.stringify({ user: user.email, status: true })
      );
      dispatch({ type: 'LOGIN', payload: { user: user.email, status: true } });
      navigate();
    } else {
      alert('Password is Wrong');
    }
  }
};

export const logOutAction = () => async (dispatch) => {
  await sessionStorage.removeItem('user');
  dispatch({ type: 'LOGIN', payload: null });
};
