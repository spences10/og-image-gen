import { getScreenshot } from './chromium'
import { writeTempFile } from './file'
import { parseReqs } from './parser'
import { getHtml } from './template-html'

export default async function handler(req, res) {
  try {
    const parsedReqs = parseReqs(req)
    const html = getHtml(parsedReqs)

    // === Use this to get Jpeg output ===
    const isDev = process.env.NOW_REGION === 'dev1'
    const { title, author } = parsedReqs
    const filename = [title, author].join('-')
    const filePath = await writeTempFile(filename, html)
    const fileUrl = `file://${filePath}`

    const file = await getScreenshot(fileUrl, isDev)

    res.statusCode = 200
    res.setHeader('Content-Type', 'image/jpeg')
    res.setHeader(
      'Cache-Control',
      'public,immutable,no-transform,s-max-age=21600,max-age=21600'
    )
    res.end(file)

    // === Use this to get HTML output ===
    // res.statusCode = 200
    // res.setHeader('Content-Type', 'text/html')
    // res.end(html)
  } catch (e) {
    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Internal Error</h1><p>Sorry, an error. I derp!</p>')
    console.log(e)
  }
}
