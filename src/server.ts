// Third-party requirements
import Fastify, { FastifyInstance } from "fastify";

// CONSTANTS
export const fakeDatabase = [
  { name: "Restaurant" },
  { name: "FastFood" },
  { name: "Chineese"}
]

// Function
export function buildServer(options = {}): FastifyInstance{
  const server = Fastify(options)
  // Routes
  server.get('/restaurants', getAllRestaurants)

  return server
}

async function getAllRestaurants(): Promise<Restaurant[]>{
  return fakeDatabase
}

// Type definition
interface Restaurant {
  name: string
}
