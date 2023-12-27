import { gql } from "@apollo/client";

export const GET_REPOSITORY = gql`
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      fullName
      id
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      name
      ownerName
      ownerAvatarUrl
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
