import { gql } from "@apollo/client";
import { BASE_USER_FRAGMENT, BASE_PROJECT_FRAGMENT } from "./fragments";

export const GET_ALL_USERS_QUERY = gql`
  query GetAllUsers {
    getAllUsers {
      ...BaseUserFragment
      currentProject {
        ...BaseProjectFragment
      }
    }
  }
  ${BASE_USER_FRAGMENT}
  ${BASE_PROJECT_FRAGMENT}
`;
