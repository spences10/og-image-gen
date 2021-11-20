// import img from '../../../static/favicon.png'
import fs from 'fs'

export const get = async () => {
  const img = fs.readFileSync('./static/favicon.png')
  return {
    headers: { 'Content-Type': 'image/png' },
    body: img,
  }
}
