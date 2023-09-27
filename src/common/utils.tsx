import JSEncrypt from "jsencrypt";
import { store } from "../redux/store";
import moment from 'jalali-moment';




export function encryptRSA(str: any) {
  let publicKey = store.getState().user.key;
  var rsaEncrypt = new JSEncrypt();
  rsaEncrypt.setPublicKey(publicKey);
  let rsaEncrypted = rsaEncrypt.encrypt(str);
  return rsaEncrypted;
}

export const sepreteNumber3 = (num: any) => {
  if (num) {

    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  } else {
    return num
  }
}
export const sepreteNumber4 = (num: any) => {
  if (num) {

    return num.toString().replace(/\B(?=(\d{4})+(?!\d))/g, " ")
  } else {
    return num
  }
}

export const dateStampToShamsi = (date: any, type?: any) => {
  let str = date ?
    moment(new Date(date)).locale("fa").format("YYYY/MM/DD H:m") : "-"
  return str
}