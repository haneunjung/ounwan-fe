import type { NextPage } from 'next';
import PostCard from '@components/PostCard';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>오운완~</h1>
      <PostCard />
    </div>
  );
};

export default Home;
