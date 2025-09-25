import { getEnv } from "../utils"

export default {
    PORT: getEnv<number>("PORT", 3000)
}
