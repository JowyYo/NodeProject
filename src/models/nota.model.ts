import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Estudiante } from "./estudiante.model";
import { Curso } from "./curso.model";

@Entity()
export class Nota {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: 'varchar',
        nullable: false
    })
    valor: string

    @ManyToOne(type => Estudiante, estudiante => estudiante.notas)
    estudiante: Estudiante

    @ManyToOne(type => Curso, curso => curso.notas)
    curso: Curso
}