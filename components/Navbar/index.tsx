import type { NextPage } from 'next';
import Link from 'next/link';
import styles from './index.module.scss';
import { navs } from './config';

const Navbar: NextPage = () => {
  return (
    <div className={styles.navbar}>
      <section className={styles.logArea}> BLOG_C</section>
      <section className={styles.linkArea}>{}</section>
    </div>
  );
};

export default Navbar;
