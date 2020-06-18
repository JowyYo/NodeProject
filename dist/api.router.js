"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const curso_controller_1 = require("./controllers/curso.controller");
const estudiante_controller_1 = require("./controllers/estudiante.controller");
class ApiRouter {
    constructor() {
        this.init();
    }
    init() {
        this.router = express_1.Router();
        const estudiantePath = '/estudiantes';
        this.curso = new curso_controller_1.CursoController();
        this.router.route('/cursos')
            .get(this.curso.getAll)
            .post(this.curso.crearCurso);
        this.estudiante = new estudiante_controller_1.EstudianteController();
        this.router.route(estudiantePath)
            .get(this.estudiante.getAll)
            .post(this.estudiante.create);
        this.router.route(estudiantePath + '/:name')
            .get(this.estudiante.getByName);
        this.router.route(estudiantePath + '/:estudianteId/curso')
            .post(this.estudiante.añadirCurso)
            .delete(this.estudiante.eliminarCurso);
        this.router.route(estudiantePath + '/:estudianteId/cursos')
            .post(this.estudiante.añadirCursos);
    }
    getRouter() {
        return this.router;
    }
}
exports.apiRouter = new ApiRouter();
//# sourceMappingURL=api.router.js.map