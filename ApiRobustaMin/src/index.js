import app from './app'
import './database'

const port = process.env.PORT | 3000;

app.listen(port, () => {
    console.log(`Api listening at http://localhost:${port}`)
});

//arraque aplicacion