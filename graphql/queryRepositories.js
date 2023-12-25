import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories {
    repositories {
      edges {
        node {
          fullName
          id
          description
          language
          forksCount
          stargazersCount
          ratingAverage
          reviewCount
          ownerAvatarUrl
        }
      }
    }
  }
`;
