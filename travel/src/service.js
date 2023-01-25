import instance from './api/instance';
// importing CryptoJS for encryption & decryption
import CryptoJS from 'crypto-js';


export const getData = (url) => instance.get(url);
export const postData = (url, data) => instance.post(url, data);


// ecrypting  & decrypting password
export const encrypt = (password) => {
  var enc = CryptoJS.AES.encrypt(password, 'secretpassphrase');
  return enc.toString();
};

export const validatePassword = (enc, password) => {
  var decryptedPassword = CryptoJS.AES.decrypt(
    enc,
    'secretpassphrase'
  ).toString(CryptoJS.enc.Utf8);
  if (decryptedPassword === password) {
    return true;
  }
  return false;
};
