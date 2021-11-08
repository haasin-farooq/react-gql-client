import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation CreateUser(
    $firstName: String!
    $lastName: String!
    $role: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      role: $role
      email: $email
      password: $password
    ) {
      id
      firstName
      lastName
      email
      password
      role
      currentProject {
        name
        hoursPerWeek
      }
    }
  }
`;
