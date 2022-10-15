import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeadTemplate from "../components/HeadTemplate";
import NavBar from "../components/NavBar";
import User from "../components/User";
import styles from "../styles/Users.module.css";
import { getData } from "../utils/fetch";

const Users: NextPage = () => {
  const router = useRouter();
  const [listUsers, setListUsers] = useState([]);

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    if (!getToken) {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {
    getData("/users")
      .then((res) => {
        setListUsers(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
    return;
  }, []);

  return (
    <>
      <HeadTemplate title="List Users" />
      <NavBar />
      <div className={styles.wrapper}>
        {listUsers?.map((item, index) => {
          return <User key={index} data={item} />;
        })}
      </div>
    </>
  );
};

export default Users;
