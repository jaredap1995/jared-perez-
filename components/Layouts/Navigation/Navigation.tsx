import React from 'react';
import styles from './Navigation.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const LOGO = '/images/jp_logo.png';

const Navigation = () => {
  const router = useRouter();

  const resumeLink = router.pathname === '/' ? "#resume" : '/#resume';
  const projectsLink = router.pathname == '/' ? '#projects' : '/#projects'

  return (
    <nav className={styles.navigation}>
      <Link passHref={true} href="/">
        <Image
          className={styles.icon}
          src={LOGO}
          height="100"
          width="100"
          alt="Jared Perez The Logo"
        />
      </Link>
      <ul>
        <li>
          <Link href = {resumeLink}>
            <a className={styles.navLink}>Resume</a>
          </Link>
        </li>
        <li>
          <Link href={projectsLink}>
            <a className={styles.navLink}>Projects</a>
          </Link>
        </li>
        {/* <li>
          <Link href="/blog">
            <a className={styles.navLink}>Blog</a>
          </Link>
        </li> */}
        <li>
          <Link href = "/research_papers">
            <a className={styles.navLink}>Papers</a>
          </Link>
        </li>
        <li>
          <Link href = '/my_story'>
            <a className={styles.navLink}> My Story</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
