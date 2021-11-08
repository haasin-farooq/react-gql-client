import React from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_ALL_USERS_QUERY } from "../graphql/queries";

const GetUsers = () => {
  //   const {
  //     data: usersData,
  //     loading: usersDataLoading,
  //     error: usersDataError,
  //   } = useQuery(GET_ALL_USERS_QUERY);
  //   const users = usersData?.getAllUsers;

  //   if (usersDataLoading) {
  //     console.log("Users are loading...");
  //   }
  //   if (usersDataError) {
  //     console.log("Error fetching users!");
  //     return;
  //   }
  //   console.log("users:", users);

  const [getAllUsers, getAllUsersData] = useLazyQuery(GET_ALL_USERS_QUERY);

  if (getAllUsersData.loading) {
    console.log("Users are loading...");
  }
  if (getAllUsersData.error) {
    console.log("Error loading users!");
  }
  if (getAllUsersData.data) {
    console.log("getAllUsersData:", getAllUsersData.data);
  }

  return (
    <div>
      <button type="button" onClick={getAllUsers}>
        Get Users
      </button>
    </div>
  );
};

export default GetUsers;
