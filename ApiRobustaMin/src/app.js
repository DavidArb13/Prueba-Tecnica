import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';

import { createRoles } from "./libs/initialSetup";

import productsRoutes from './routes/products.routes';
import authRoutes from './routes/auth.routes';
import usersRoutes from "./routes/user.routes";

import cors from "cors";

const app = express();
createRoles();

app.set('pkg', pkg);
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// var whitelist = ['http://localhost:8080', 'http://localhost:3000']
// var corsOptions = { 
//     origin: (origin, callback) => {
//         if(whitelist.indexOf(origin) !== -1){
//             callback(null, true);
//         } else {
//             callback(new Error('Not allowed by CORS'));
//         }
//     }
//     cors(corsOptions),
// }

app.get('/', (req, res) =>{
    res.json({
        name: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
});

app.use('/api/products',productsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);

export default app;

//configurar la aplicacion de express