// import AlunoModel from "../../Models/AlunoModel.js";
// import TurmaModel from "../../Models/TurmaModel.js";
import { AlunoModel, TurmaModel } from '../../../config/sequelize_relations.js';

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const limit = parseInt(request.query.limit) || 100;
    const offset = parseInt(request.query.offset) || 0;

    if (limit > CONSTANTS.MAX_GET_LIMIT) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: `Limit máximo: ${CONSTANTS.MAX_GET_LIMIT}.` });
    }

    //try {

        // Lembrem-se do algoritmo de paginação limit + 1

        const alunoscomturma = await AlunoModel.findAll({
            include: [
                {
                    model: TurmaModel,
                    as: "turma"
                }
            ]
        });

        const hasMore = (alunoscomturma.length > limit);

        // .slice para remover o último elemento de limit + 1, ficando somente limit

        const rows = (hasMore) ? (alunoscomturma.slice(0, limit)) : (alunoscomturma);
        const next = (hasMore) ? (offset + limit) : (null);

        return response.status(HTTP_STATUS.SUCCESS).json({
            rows: rows,
            limit: limit,
            next: next
        });

    //}catch (error) {
        //return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' })
   // }
};
