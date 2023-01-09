// import { useQuery } from '@apollo/client'
// import { GET_REPOSITORIES } from 'graphqlService/queries'
import { useState, useEffect } from 'react'

export interface Repo {
  id: string
  name: string
  ownerName: string
  createdAt: string
  fullName: string
  reviewCount: number
  ratingAverage: number
  forksCount: number
  stargazersCount: number
  description: string
  language: string
  ownerAvatarUrl: string
}

interface Edge {
  node: Repo
  cursor: string
}

export const useRepositories = () => {
  const [repositories, setRepositories] = useState<Edge[] | null>(null)

  // TODO error al usar graphql
  //   const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES)
  //   const { repositories }: { repositories: Edge[] } = data

  const fetchRepositories = async () => {
    try {
      const response = await global.fetch('http://192.168.8.102:5000/api/repositories', {
        headers: { 'Content-type': 'application/json' }
      })
      const dataJson = await response.json()

      setRepositories(dataJson.edges)
    } catch (error) {
      console.log({ error })
    }
  }
  useEffect(() => {
    fetchRepositories()
  }, [])

  const repositoriesNodes = repositories ? repositories.map((edge) => edge.node) : []

  return { repositories: repositoriesNodes }
}
