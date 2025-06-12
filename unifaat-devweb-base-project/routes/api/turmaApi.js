import { Router } from 'express';
import ListTurmaController from '../../app/Controllers/TurmaModel/ListTurmaController.js';

export default (function () {

    const router = Router();

    router.get('/api/turma', ListTurmaController);

    return router;

})();