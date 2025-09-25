import express from 'express'
import apiRouter from './routes/api.route'

export function createApp() {
    const app = express();

    app.use("/api", apiRouter);

    return app
}
