import styles from "./Navbar.module.scss";
import Image from "next/image";
import logoFiap from "../../../assets/logo-fiap.svg";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Image
          src={logoFiap}
          alt="Logo FIAP"
          className={styles.logoImg}
          width={48}
          height={16}
        />
      </div>
    </nav>
  );
}
export default Navbar;
