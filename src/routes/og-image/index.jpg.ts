import fs from 'fs'

export const get = async () => {
  const img = fs.readFileSync('./static/favicon.png')
  fs.writeFileSync('./tmp/og-image.jpg', img)
  return {
    headers: {
      'Content-Type': 'image/jpg',
      'Cache-Control':
        'public,immutable,no-transform,s-max-age=21600,max-age=21600',
    },
    body: img,
  }
}
