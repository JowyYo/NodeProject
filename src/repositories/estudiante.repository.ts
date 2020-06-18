import { Estudiante } from "../models/estudiante.model";
import { getManager } from "typeorm";
import { Curso } from "../models/curso.model";

export class EstudianteRepository {
    getAll(): Promise<Estudiante[]> {
        return getManager().getRepository(Estudiante)
            .createQueryBuilder("estudiante")
            .leftJoinAndSelect("estudiante.cursos", "curso")
            .getMany();
    }

    getByName(name: string): Promise<Estudiante[]> {
        return getManager().getRepository(Estudiante)
            .find({
                relations: ['cursos'],
                where: [{ nombre: name },
                        { apellido: name }]
            })
    }

    async create(estudiante: Estudiante): Promise<Estudiante> {
        return getManager().getRepository(Estudiante)
            .save(estudiante)
    }

    async añadirCursos(estudianteID: string, nombreCursos: string[]): Promise<Estudiante> {
        const cursoRepo = await getManager().getRepository(Curso)
        const cursos = await cursoRepo
            .createQueryBuilder("curso")
            .where("curso.nombre IN (:cursos)", { cursos: nombreCursos })
            .getMany();

        const estudianteRepo = await getManager().getRepository(Estudiante)
        const estudiante = await estudianteRepo.findOne({
            relations: ['cursos'],
            where: { id: estudianteID }
        })

        estudiante.cursos.push(...cursos)

        return await estudianteRepo.save(estudiante)
    }

    async eliminarCurso(estudianteID: string, nombreCurso: string): Promise<Estudiante> {
        const curso = await getManager().getRepository(Curso).findOne({
            where: { nombre: nombreCurso }
        })
        const estudianteRepo = await getManager().getRepository(Estudiante)
        const estudiante = await estudianteRepo.findOne({
            relations: ['cursos'],
            where: { id: estudianteID }
        })

        estudiante.cursos.splice(estudiante.cursos.findIndex(c => c.id === curso.id), 1)
        return await estudianteRepo.save(estudiante)
    }
}