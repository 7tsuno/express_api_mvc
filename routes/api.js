import express from 'express';
import UserController from '../controllers/userController';
import Auth from '../middlewares/auth';

export default app => {

    const router = express.Router();

    router.get('/users', Auth.checkAdmin, UserController.show);

    app.use('/api', router);
};
