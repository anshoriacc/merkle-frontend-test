import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/NavBar.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {
  const router = useRouter();
  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        <Link href="/users">
          <div className={styles.images}>
            <Image
              src="https://fakestoreapi.com/icons/logo.png"
              alt="fakestore logo"
              objectFit="contain"
              layout="fill"
            />
          </div>
        </Link>
        <button
          className={styles.add}
          onClick={() => {
            router.push("/add");
          }}
        >
          Add user
        </button>

        <button
          className={styles.button}
          onClick={() => {
            localStorage.removeItem("token");
            router.push("/");
            toast.success("Logged out!");
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
