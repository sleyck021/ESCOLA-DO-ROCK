import AulasModel from "../../Models/AulasModel.js";
import TurmasModel from "../../Models/TurmasModel.js";

export default async (request, response) => {

    const HTTP_STATUS = CONSTANTS.HTTP;

    const limit = parseInt(request.query.limit) || 100;
    const offset = parseInt(request.query.offset) || 0;


    if (limit > CONSTANTS.MAX_GET_LIMIT) {
        return response.status(HTTP_STATUS.BAD_REQUEST).json({ error: `Limit máximo: ${CONSTANTS.MAX_GET_LIMIT}.` });
    }

    try {
    
            const data = await AulasModel.findAll({
                limit: limit + 1,
                offset: offset,
                order: [["id_aula", "asc"]],
                include: [
                    {
                        model: TurmasModel,
                        as: "turmas"
                    }
                ]
            });
    
            const hasMore = (data.length > limit);
    
            const rows = (hasMore) ? (data.slice(0, limit)) : (data);
            const next = (hasMore) ? (offset + limit) : (null);
    
            return response.status(HTTP_STATUS.SUCCESS).json({
                rows: rows,
                limit: limit,
                next: next
            });
    
        } catch (error) {
            return response.status(HTTP_STATUS.SERVER_ERROR).json({ error: 'Error de servidor.' })
        }
};