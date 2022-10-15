import { useRouter } from "next/router";
import React from "react";
import styles from "../styles/User.module.css";
import { deleteData } from "../utils/fetch";

const User = (props) => {
  const router = useRouter();
  const { id, username, password, name, address, email, phone } = props.data;

  const deleteHandler = () => {
    deleteData(`/users/${id}`)
      .then((res) => {
        console.log("success deleted");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.id}>ID: {id}</p>
      <h2>{`${name.firstname} ${name.lastname}`}</h2>
      <div className={styles.detail}>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Address: {`${address.street}, ${address.city}`}</p>
        <p>Phone: {phone}</p>
      </div>
      <button
        className={styles.edit}
        onClick={() => {
          router.push(`/edit/${id}`);
        }}
      >
        edit
      </button>
      <button className={styles.delete} onClick={deleteHandler}>
        delete
      </button>
    </div>
  );
};

export default User;
