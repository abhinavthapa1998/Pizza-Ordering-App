import styles from "../styles/Navbar.module.css";
// import Image from "next/image";
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <img
            src="https://www.pngitem.com/pimgs/b/177-1777154_phone-symbol-png.png"
            alt="telephone"
            height={32}
            width={32}
            layout="fill"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>012-345-678</div>
        </div>
      </div>
      <div className={styles.item}>Center</div>
      <div className={styles.item}>Right</div>
    </div>
  );
};

export default Navbar;
