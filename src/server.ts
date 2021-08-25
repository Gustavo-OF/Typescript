//Importar a biblioteca e os tipos dela.
//Node não entende essa nomenclatura, então é necessario instalar outras dependencias. (typescript)
import express from 'express';
import { CreateCourse } from './routes';

const app = express();

app.get("/",CreateCourse)

app.listen(3333);