export const mongoUrl = (): string => {
  const url = process.env.DEVELOPMENT_MODE
    ? 'mongodb://localhost:27017'
    : `${process.env.MONGO_URL}`
  return url
}
