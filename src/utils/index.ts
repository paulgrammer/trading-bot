export function getEnv<T>(key: string, fallback?: T): T {
    return (process.env[key] || fallback) as T
}
