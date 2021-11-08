import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_USER_MUTATION } from "../graphql/mutations";

const CreateUserForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { loading: createUserLoading, error: createUserError }] =
    useMutation(CREATE_USER_MUTATION);

  const submitCreateUserForm = async () => {
    const { data: createUserData } = await createUser({
      variables: {
        firstName: firstName,
        lastName: lastName,
        role: role,
        email: email,
        password: password,
      },
    });
    if (createUserLoading) {
      console.log("Creating user...");
    }
    if (createUserError) {
      console.log("Error creating user:", createUserError);
      return;
    }
    console.log("createUserData:", createUserData);
  };

  return (
    <div className="form">
      <input
        className="form-input"
        type="text"
        placeholder="First Name"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Last Name"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Role"
        onChange={(e) => {
          setRole(e.target.value);
        }}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="form-input"
        type="text"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        className="form-input"
        onClick={submitCreateUserForm}
        disabled={createUserLoading}
      >
        {createUserLoading ? "Creating User..." : "Create User"}
      </button>
    </div>
  );
};

export default CreateUserForm;
