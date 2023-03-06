import { OK, UNEXPECTED_ERROR } from '../constants'
import nofifyStore from '../store/notify'

export const fetchGet = async <T>(url = ''): Promise<T> => {
    return fetch(url, { cache: 'no-cache' })
      .then((resp: Response) => {
        return resp.json();
    })
      .then((resp: T) => {
        return resp
      })
      .catch((err) => {
        return new Promise((_, reject) => {
          nofifyStore.setMessageAndShow(UNEXPECTED_ERROR)
          console.error(err)
          reject(err);
        })
      })
}
