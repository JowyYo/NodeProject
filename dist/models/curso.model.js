"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const estudiante_model_1 = require("./estudiante.model");
let Curso = class Curso {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid')
], Curso.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({
        type: 'varchar',
        nullable: false
    })
], Curso.prototype, "nombre", void 0);
__decorate([
    typeorm_1.ManyToMany(type => estudiante_model_1.Estudiante, estudiante => estudiante.cursos)
], Curso.prototype, "estudiantes", void 0);
Curso = __decorate([
    typeorm_1.Entity()
], Curso);
exports.Curso = Curso;
//# sourceMappingURL=curso.model.js.map