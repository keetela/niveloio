import { Router } from 'express';
import blogRouters from './api/blog';
import userRouters from './api/users';

const routers = Router();

routers.use(blogRouters, userRouters);

export default routers;
