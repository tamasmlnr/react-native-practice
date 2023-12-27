import { gql } from "@apollo/client";

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      userId
      user {
        id
        username
      }
      text
      repositoryId
      repository {
        fullName
        id
      }
      rating
      id
      createdAt
    }
  }
`;
