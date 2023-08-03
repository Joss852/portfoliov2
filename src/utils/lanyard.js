import { LANYARD_URL } from 'src/config'

export const getLanyardInfo = async id => {
  try {
    const res = await fetch(`${LANYARD_URL}/${id}`)
    const data = await res.json()
    return data
  } catch (error) {
    throw new Error(error.message)
  }
}
