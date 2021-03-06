"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const estudiante_model_1 = require("../models/estudiante.model");
const typeorm_1 = require("typeorm");
const curso_model_1 = require("../models/curso.model");
class EstudianteRepository {
    getAll() {
        return typeorm_1.getManager().getRepository(estudiante_model_1.Estudiante)
            .createQueryBuilder("estudiante")
            .leftJoinAndSelect("estudiante.cursos", "curso")
            .getMany();
    }
    getByName(name) {
        return typeorm_1.getManager().getRepository(estudiante_model_1.Estudiante)
            .find({
            relations: ['cursos'],
            where: [{ nombre: name },
                { apellido: name }]
        });
    }
    create(estudiante) {
        return __awaiter(this, void 0, void 0, function* () {
            return typeorm_1.getManager().getRepository(estudiante_model_1.Estudiante)
                .save(estudiante);
        });
    }
    añadirCurso(estudianteID, nombreCurso) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(estudianteID, nombreCurso);
            const cursoRepo = yield typeorm_1.getManager().getRepository(curso_model_1.Curso);
            const curso = yield cursoRepo.findOne({
                where: { nombre: nombreCurso }
            });
            const estudianteRepo = yield typeorm_1.getManager().getRepository(estudiante_model_1.Estudiante);
            const estudiante = yield estudianteRepo.findOne({
                relations: ['cursos'],
                where: { id: estudianteID }
            });
            if (estudiante.cursos.some(c => c.id === curso.id))
                throw new Error('bad request');
            estudiante.cursos.push(curso);
            return yield estudianteRepo.save(estudiante);
        });
    }
    añadirCursos(estudianteID, nombreCursos) {
        return __awaiter(this, void 0, void 0, function* () {
            const cursoRepo = yield typeorm_1.getManager().getRepository(curso_model_1.Curso);
            const cursos = yield cursoRepo
                .createQueryBuilder("curso")
                .where("curso.nombre IN (:cursos)", { cursos: nombreCursos })
                .getMany();
            console.log(cursos);
            const estudianteRepo = yield typeorm_1.getManager().getRepository(estudiante_model_1.Estudiante);
            const estudiante = yield estudianteRepo.findOne({
                relations: ['cursos'],
                where: { id: estudianteID }
            });
            estudiante.cursos.push(...cursos);
            return yield estudianteRepo.save(estudiante);
        });
    }
    eliminarCurso(estudianteID, nombreCurso) {
        return __awaiter(this, void 0, void 0, function* () {
            const curso = yield typeorm_1.getManager().getRepository(curso_model_1.Curso).findOne({
                where: { nombre: nombreCurso }
            });
            const estudianteRepo = yield typeorm_1.getManager().getRepository(estudiante_model_1.Estudiante);
            const estudiante = yield estudianteRepo.findOne({
                relations: ['cursos'],
                where: { id: estudianteID }
            });
            estudiante.cursos.splice(estudiante.cursos.findIndex(c => c.id === curso.id), 1);
            return yield estudianteRepo.save(estudiante);
        });
    }
}
exports.EstudianteRepository = EstudianteRepository;
//# sourceMappingURL=estudiante.repository.js.map