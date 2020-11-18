import Api from "../config/Api";
import { getFizzBuzzUrl } from '../config/Api';

export const fetchFizzBuzzValues = (count) =>
  new Promise(async (resolve, reject) => {
    const url = getFizzBuzzUrl(count);
    try {
      const { data } = await Api.get(url);
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });