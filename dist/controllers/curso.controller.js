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
const curso_repository_1 = require("../repositories/curso.repository");
class CursoController {
    constructor() {
        this.router = express.Router();
        this.path = '/cursos';
        this.cursoRepo = new curso_repository_1.CursoRepository();
        this.getAll = (req, res) => {
            this.cursoRepo.getAll()
                .then(response => res.send(response));
        };
        this.crearCurso = (req, res) => {
            this.cursoRepo.create(req.body)
                .then(response => res.send(response));
        };
        this.router.get(this.path, this.getAll);
        this.router.post(this.path, this.crearCurso);
    }
}
exports.CursoController = CursoController;
//# sourceMappingURL=curso.controller.js.map