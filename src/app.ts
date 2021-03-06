import Express, {Application} from 'express';
import errorMiddleware from './middlewares/error.middleware';
import indexRouter from "./routers/index";

class App {
    public app: Application;

    constructor() {
        this.app = Express();
        this.initExpress();
        this.routes();
        this.initErrorHandling();
    }

    public listen(port: number): void {
        this.app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    }

    private initExpress(): void {
        this.app.use(Express.json());
        this.app.use(Express.urlencoded({ extended: false }));
    }

    private routes(): void {
        this.app.use('/', indexRouter);
    }

    private initErrorHandling(): void {
        this.app.use(errorMiddleware);
    }

}

export default App
