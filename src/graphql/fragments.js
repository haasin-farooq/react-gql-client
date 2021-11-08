import { gql } from "@apollo/client";

export const BASE_USER_FRAGMENT = gql`
  fragment BaseUserFragment on User {
    id
    firstName
    lastName
    email
    password
    role
  }
`;

export const BASE_PROJECT_FRAGMENT = gql`
  fragment BaseProjectFragment on Project {
    name
    hoursPerWeek
  }
`;
