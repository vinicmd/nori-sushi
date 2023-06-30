export const mongoUrl = (): string => {
  return process.env.DEVELOPMENT_MODE
    ? 'mongodb://localhost:27017'
    : `${process.env.MONGO_URL}`
}
