import AvaliacoesModel from "../../Models/AvaliacoesModel.js";

export default async(request, response) => {
    
    const HTTP_STATUS = CONSTANTS.HTTP;

    const id_avaliacao = request.params.id;

    try{
        const row = await AvaliacoesModel.findByPk(id_avaliacao);
        
        if(row === null) {
            return response.status(HTTP_STATUS.NOT_FOUND).json({ error: `Avaliação com id ${id_avaliacao} não existe` });
        }
        
        return response.status(HTTP_STATUS.SUCCESS).json(row);

    } catch (error) {

        return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' });

    }
}