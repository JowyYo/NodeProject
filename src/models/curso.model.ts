import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, Unique, OneToMany } from "typeorm";
import { Estudiante } from "./estudiante.model";
import { Nota } from "./nota.model";

@Entity()
@Unique(["nombre"])
export class Curso {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'varchar',
        nullable: false
    })
    nombre: string

    @ManyToMany(type => Estudiante, estudiante => estudiante.cursos)
    estudiantes: Estudiante[]

    @OneToMany(type => Nota, nota => nota.curso)
    notas: Nota[]
}