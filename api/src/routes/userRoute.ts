import { Router } from 'express';
import UserController from '../controllers/userController';

const router: Router = Router();
const controller = new UserController();

router.post('/', (req, res) => controller.registerUser(req, res));
router.patch("/:id",(req, res) => controller.patchUser(req, res));

export default router;