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
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Homepage</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <img
            src="https://cdn-icons-png.flaticon.com/512/685/685352.png"
            alt="logo"
            width={160}
            height={69}
          />
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
            alt="logo"
            width={30}
            height={30}
          />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
