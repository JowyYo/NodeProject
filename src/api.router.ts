import { Router } from 'express'
import { CursoController } from './controllers/curso.controller'
import { EstudianteController } from './controllers/estudiante.controller'
import { NotaController } from './controllers/nota.controller'

class ApiRouter {

    router: Router
    curso: CursoController
    estudiante: EstudianteController
    nota: NotaController

    constructor() {
        this.init()
    }

    private init() {
        this.router = Router()
        const estudiantePath = '/estudiantes'
        const notaPath = '/notas'

        this.curso = new CursoController()
        this.router.route('/cursos')
            .get(this.curso.getAll)
            .post(this.curso.crearCurso)

        this.estudiante = new EstudianteController()
        this.router.route(estudiantePath)
            .get(this.estudiante.getAll)
            .post(this.estudiante.create)
        this.router.route(estudiantePath + '/:name')
            .get(this.estudiante.getByName)
        this.router.route(estudiantePath + '/:estudianteId/curso')
            .delete(this.estudiante.eliminarCurso)
        this.router.route(estudiantePath + '/:estudianteId/cursos')
            .post(this.estudiante.añadirCursos)

        this.nota = new NotaController()
        this.router.route(notaPath + '/curso/:cursoId')
            .get(this.nota.getAllByCurso)
        this.router.route(notaPath + '/estudiante/:estudianteId')
            .get(this.nota.getAllByEstudiante)
    }

    public getRouter(){
        return this.router
    }
}

export const apiRouter = new ApiRouter()