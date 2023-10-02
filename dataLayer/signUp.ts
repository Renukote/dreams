import axios from 'axios';
import { API } from '../configs/network';

type signUpUserArgs = {
  name: string;
  email: string;
  password: string;
};

export const signUpUser = async (userData: signUpUserArgs) => {
  try {
    const response = await axios.post(API.signup, userData);

    return response.data.status === '201' || false;
  } catch (error) {
    console.warn(error);
    return false;
  }
};
