import { CursoRepository } from '../repositories/curso.repository'

export class CursoController {
    private cursoRepo

    constructor() {
        this.cursoRepo = new CursoRepository()
    }

    getAll = (req, res) => {
        this.cursoRepo.getAll()
            .then(response => res.send(response))
    }

    crearCurso = (req, res) => {
        this.cursoRepo.create(req.body)
            .then(response => res.send(response))
    }
}