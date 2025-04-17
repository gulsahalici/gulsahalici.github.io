const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

// dist klasörünü statik olarak sun
app.use(express.static(path.join(__dirname, 'dist')))

// history mode kullanıyorsa tüm rotaları index.html'e yönlendir
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

app.listen(port, () => {
  console.log(`Vue app çalışıyor: http://localhost:${port}`)
})
