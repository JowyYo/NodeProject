import * as express from 'express'
import { CursoRepository } from '../repositories/curso.repository'

export class CursoController {
    public router = express.Router()
    private path = '/cursos'
    private cursoRepo = new CursoRepository()

    constructor() {
        this.router.get(this.path, this.getAll)
        this.router.post(this.path, this.crearCurso)
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