import { OK, UNEXPECTED_ERROR } from '../constants'
import nofifyStore from '../store/notify'

export const fetchGet = async (url = ''): Promise<any> => {
  try {
    const response = await fetch(url, { cache: 'no-cache' })
    if (response.status === OK) {
      const data = await response.json()
      return data
    }
  } catch (error) {
    nofifyStore.setMessageAndShow(UNEXPECTED_ERROR)
    console.error(error)
    throw error
  }
}
