import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeadTemplate from "../components/HeadTemplate";
import NavBar from "../components/NavBar";
import styles from "../styles/Users.module.css";

const Add: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    if (!getToken) {
      router.push("/");
    }
  }, [router]);

  useEffect(() => {}, []);

  return (
    <>
      <HeadTemplate title="Add User" />
      <NavBar />
      <div className={styles.wrapper}></div>
    </>
  );
};

export default Add;
