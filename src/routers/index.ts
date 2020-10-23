import Router, {Request, Response, NextFunction} from 'express';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction): any => {
    res.json('Hello im Node.js & TypeScript starter!');
});

export default router;
