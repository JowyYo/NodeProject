"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = __importStar(require("express"));
const estudiante_repository_1 = require("../repositories/estudiante.repository");
class EstudianteController {
    constructor() {
        this.router = express.Router();
        this.path = '/estudiantes';
        this.getAll = (req, res) => {
            this.estudianteRepo.getAll()
                .then(response => res.send(response));
        };
        this.getByName = (req, res) => {
            this.estudianteRepo.getByName(req.params.name)
                .then(response => {
                res.send(response);
            });
        };
        this.create = (req, res) => {
            this.estudianteRepo.create(req.body)
                .then(response => res.send(response));
        };
        this.añadirCurso = (req, res) => {
            this.estudianteRepo.añadirCurso(req.params.estudianteId, req.body.nombre)
                .then(response => res.send(response))
                .catch(error => {
                if (error.message === 'bad request')
                    res.status(400).send('El estudiante ya esta matriculado en este curso');
                else
                    res.sendStatus(500);
            });
        };
        this.eliminarCurso = (req, res) => {
            this.estudianteRepo.eliminarCurso(req.params.estudianteId, req.body.nombre)
                .then(response => res.send(response));
        };
        this.router.get(this.path, this.getAll);
        this.router.get(this.path + '/:name', this.getByName);
        this.router.post(this.path, this.create);
        this.router.put(this.path + '/anadirCurso/:estudianteId', this.añadirCurso);
        this.router.put(this.path + '/deleteCurso/:estudianteId', this.eliminarCurso);
        this.estudianteRepo = new estudiante_repository_1.EstudianteRepository();
    }
}
exports.EstudianteController = EstudianteController;
//# sourceMappingURL=estudiante.controller.js.map