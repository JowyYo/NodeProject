import * as express from 'express'
import { EstudianteRepository } from '../repositories/estudiante.repository'

export class EstudianteController {
    private estudianteRepo: EstudianteRepository

    constructor() {
        this.estudianteRepo = new EstudianteRepository();
    }

    getAll = (req, res) => {
        this.estudianteRepo.getAll()
            .then(response => res.send(response))
    }

    getByName = (req, res) => {
    this.estudianteRepo.getByName(req.params.name)
        .then(response => {
            res.send(response)
        })
    }

    create = (req, res) => {
        this.estudianteRepo.create(req.body)
            .then(response => res.send(response))
    }

    añadirCursos = (req, res) => {
        this.estudianteRepo.añadirCursos(req.params.estudianteId, req.body.map(curso => curso.nombre))
            .then(response => res.send(response))
            .catch(error => {
                if (error.message === 'bad request') res.status(400).send('El estudiante ya esta matriculado en este curso')
                else res.sendStatus(500)
            })
    }

    eliminarCurso = (req, res) => {
        this.estudianteRepo.eliminarCurso(req.params.estudianteId, req.body.nombre)
            .then(response => res.send(response))
    }
}
