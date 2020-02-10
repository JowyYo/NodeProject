import { Curso } from "../models/curso.model";
import { getManager } from "typeorm";

export class CursoRepository {
    getAll(): Promise<Curso[]> {
        return getManager().getRepository(Curso)
            .createQueryBuilder("curso")
            .leftJoinAndSelect('curso.estudiantes', 'estudiante')
            .getMany()
    }
    create(curso: Curso) {
        return getManager().getRepository(Curso).save(curso)
    }
}