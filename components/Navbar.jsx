import styles from "../styles/Navbar.module.css";
import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <img
            src="https://i.pinimg.com/736x/26/82/ba/2682ba37e946260bff3e6a8ee091bc06.jpg"
            alt="telephone"
            height={100}
            width={100}
            layout="fill"
          />
        </div>
      </div>
      <div className={styles.item}></div>
      <div className={styles.item}></div>
    </div>
  );
};

export default Navbar;
