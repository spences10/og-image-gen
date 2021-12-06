// import img from '../../../static/favicon.png'
import { createCanvas, loadImage } from 'canvas'

// https://flaviocopes.com/canvas-node-generate-image/

export const get = async (req, _res) => {
  const searchParams = req.query
  const title = searchParams.get('title')
  const author = searchParams.get('author')
  const website = searchParams.get('website')

  const width = 1200
  const height = 630

  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')

  // gradient
  const gradient = context.createLinearGradient(0, 0, 525, 250)
  gradient.addColorStop(0, 'rgb(102, 51, 153)')
  gradient.addColorStop(1, 'rgb(170, 127, 212)')
  context.fillStyle = gradient
  context.fillRect(0, 0, width, height)

  // title
  // const title = 'Hello, World!'
  context.font = 'bold 80pt consolas'
  context.fillStyle = '#fff'
  const maxWidth = canvas.width
  const textWidth = context.measureText(title).width
  const splitTitle = title.split(` `)

  splitTitle.forEach(word => {
    let smoo = []
    if (context.measureText(smoo.join(` `)).width < width) {
      smoo.push(word)
      console.log('=====================')
      console.log(smoo)
      console.log('=====================')
    }
    // context.fillText(title, 20, 150)
    // context.fillText(title, 20, 300)
  })

  // author
  context.fillStyle = '#fff'
  context.font = 'bold 30pt consolas'
  context.fillText(author, 100, 600)

  // image
  await loadImage('./static/favicon.png').then(image => {
    context.drawImage(image, 20, 550, 70, 70)
  })

  // website
  context.fillStyle = '#fff'
  context.font = 'bold 30pt consolas'
  context.fillText(website, 810, 600)

  // const img = fs.readFileSync('./static/favicon.png')
  return {
    // headers: { 'Content-Type': 'image/png' },
    body: canvas.toBuffer(),
  }
}
