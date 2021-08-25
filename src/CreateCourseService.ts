/**
 * name - string
 * duration(weeks) - number
 * educator - string
 */

//interface serve também para passar os parâmetros das rotas sem uma ordem especifica
interface Course {
    name: string;
    //A interrogração antes dos dois pontos é para definir que aquele parâmetro é opcional
    duration?: number;
    educator: string;
}

class CreateCourseService {
    //O sinal de iguall após passar o parâmetro é para definir um valor default caso ele esteja vazio
    execute({duration = 8, educator, name}: Course) {
        console.log(name, duration, educator);
    }
}

//Com o export, é possivel importar essa classe para outros, ou seja, vira um modulo
export default new CreateCourseService();