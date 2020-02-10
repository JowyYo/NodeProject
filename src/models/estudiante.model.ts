import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from "typeorm";
import { Curso } from "./curso.model";

@Entity()
export class Estudiante {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'varchar',
        nullable: false
    })
    nombre: string

    @Column({
        type: 'varchar',
        nullable: false
    })
    apellido: string

    @ManyToMany(type => Curso, curso => curso.estudiantes)
    @JoinTable()
    cursos: Curso[]
}