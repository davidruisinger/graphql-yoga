// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createYoga, createSchema } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'

// Docs: https://vercel.com/docs/concepts/functions/serverless-functions

export const config = {
  api: {
    // Disable body parsing (required for file uploads)
    bodyParser: false,
  },
}

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}>({
  graphqlEndpoint: '/api/graphql',
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        greetings: String
      }
    `,
    resolvers: {
      Query: {
        greetings: () =>
          'This is the `greetings` field of the root `Query` type',
      },
    },
  }),
})
