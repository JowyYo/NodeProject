import { Entity, PrimaryGeneratedColumn, Column, ManyToMany } from "typeorm";
import { Estudiante } from "./estudiante.model";

@Entity()
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
}