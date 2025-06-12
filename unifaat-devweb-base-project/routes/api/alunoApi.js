import { Router } from 'express';
import ListAlunoController from '../../app/Controllers/AlunoModel/ListAlunoController.js';

export default (function () {

    const router = Router();

    router.get('/api/alunos', ListAlunoController);

    return router;
    
})();