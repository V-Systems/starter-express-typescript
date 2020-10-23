import App from './app';

const port: number = Number(process.env.PORT || 3000);

const server = new App();

server.listen(port);
