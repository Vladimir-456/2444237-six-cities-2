
export const getMongoUri = (username: string, password: string, host: string, port: string, db: string) => `mongodb://${username}:${password}@${host}:${port}/${db}?authSource=admin`;
