import { gql } from "@apollo/client";

export const CREATE_TOKENS = gql`
query createTokens($login:String!, $password:String!) {
  createTokens(login:$login, password:$password) {
      ... on TokenPair {
        __typename
        accessToken
        refreshToken
      }
      ... on ErrorWithFields {
        __typename
        fields
        status
      }
    }
}
`;
export const GET_ME=gql`
query getMe {
  getMe {
    ... on User {
      id
      email
      subscribersCount
      shortDescription
      subscriptionsCount
      phone
      name
      likesCount
      additionalInfo {
        advantage
      }
      address {
        coordinates {
          address
        }
        city
      }
    }
    ... on BaseError {
      __typename
      status
    }
  }
}`