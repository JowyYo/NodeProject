import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { Curso } from "./curso.model";
import { Nota } from "./nota.model";

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
    
    @OneToMany(type => Nota, nota => nota.estudiante)
    notas: Nota[]
}