const express = require('express')
const app = express()

//settings (ajustes)
//pedimos que revise si el sistema operativo tiene un puerto caso contrario mande 3000
app.set('port', process.env.PORT || 3000)


//app.listen(app.get('port') obtengo el puerto que nos da app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'))
})