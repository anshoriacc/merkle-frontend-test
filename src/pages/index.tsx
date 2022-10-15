import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeadTemplate from "../components/HeadTemplate";
import styles from "../styles/Home.module.css";
import { postData } from "../utils/fetch";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home: NextPage = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    setToken(getToken);

    if (token) {
      router.push("/users");
    }
  }, [router, token]);

  const changeHandler = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const loginHandler = (e) => {
    e.preventDefault();

    const data = {
      username: values.username,
      password: values.password,
    };

    postData("/auth/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setToken(res.data.token);
        toast.success("Login success");
      })
      .catch((err) => toast.error("Wrong username/password!"));
  };

  return (
    <div className={styles.container}>
      <HeadTemplate title="Login" />
      <h1>Login</h1>
      <div className={styles["login-wrapper"]}>
        <form onSubmit={loginHandler} className={styles["login-form"]}>
          <input
            type="username"
            name="username"
            placeholder="Username"
            value={values.username}
            onChange={changeHandler}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={changeHandler}
          />
          <button type="submit" className={styles["button"]}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
