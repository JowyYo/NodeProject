"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const curso_model_1 = require("../models/curso.model");
const typeorm_1 = require("typeorm");
class CursoRepository {
    getAll() {
        return typeorm_1.getManager().getRepository(curso_model_1.Curso)
            .createQueryBuilder("curso")
            .leftJoinAndSelect('curso.estudiantes', 'estudiante')
            .getMany();
    }
    create(curso) {
        return typeorm_1.getManager().getRepository(curso_model_1.Curso).save(curso);
    }
}
exports.CursoRepository = CursoRepository;
//# sourceMappingURL=curso.repository.js.map