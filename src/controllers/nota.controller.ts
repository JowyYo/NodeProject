import { NotaRepository } from "../repositories/nota.repository";

export class NotaController {
    private notaRepo: NotaRepository

    constructor() {
        this.notaRepo = new NotaRepository();
    }

    getAllByCurso = (req, res) => {

    }

    getAllByEstudiante = (req, res) => {
        
    }
}