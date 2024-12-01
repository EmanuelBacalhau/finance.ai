import 'dotenv/config'

import { z } from 'zod'

const EnvSchema = z.object({
  PORT: z.coerce.number().default(3333),
  DATABASE_URL: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
  BASE_URL: z.string(),
  JWT_SECRET: z.string(),
})

const { success, data, error } = EnvSchema.safeParse(process.env)

if (!success) {
  console.log(error.flatten().fieldErrors)
  throw new Error(`❌ Invalid environment variables: ${error.message}`)
}

export const env = data
