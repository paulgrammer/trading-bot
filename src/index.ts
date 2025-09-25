import { createApp } from "./app";
import constants from "./constants";

const app = createApp()

app.listen(constants.PORT, () => {
    console.log(`App running on port: ${constants.PORT}`)
})
