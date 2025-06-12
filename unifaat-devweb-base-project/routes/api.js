import { Router } from 'express';
import alunoApi from './api/alunoApi.js';
import turmaApi from './api/turmaApi.js';

export default (function () {

    const router = Router();

    router.use('/', alunoApi);
    
    router.use('/', turmaApi);

    return router;

})();