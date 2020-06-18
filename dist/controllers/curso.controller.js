"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curso_repository_1 = require("../repositories/curso.repository");
class CursoController {
    constructor() {
        this.getAll = (req, res) => {
            this.cursoRepo.getAll()
                .then(response => res.send(response));
        };
        this.crearCurso = (req, res) => {
            this.cursoRepo.create(req.body)
                .then(response => res.send(response))
                .catch(() => {
                res.status(400).send('El curso ya existe');
            });
        };
        this.cursoRepo = new curso_repository_1.CursoRepository();
    }
}
exports.CursoController = CursoController;
//# sourceMappingURL=curso.controller.js.map