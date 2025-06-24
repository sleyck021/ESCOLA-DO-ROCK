import TurmaModel from "../../Models/TurmasModel.js";

export default async(request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const id_turma = request.params.id;

    try {

        const row = await TurmaModel.findByPk(id_turma);
        
                if(row === null) {
                    return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Turma com id ${id} não existe` });
                }
        
                return response.status(HTTP_STATUS.SUCCESS).json(row);
    } catch(error) {
        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });
    }
}