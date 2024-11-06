import Image from 'next/image';
import styles from './User.module.css';
import Card from './Card';

type UserProps = {
  user: {
    id: number;
    name: string;
    username: string;
    imageUrl: string;
    email: string;
    password: string;
  };
};
export default function User({ user }: UserProps) {
    return (
      <Card  className={styles.userItem}>
        <Image className={styles.userImg}
          src={} 
          alt={} 
          width={100} 
          height={100}
          priority
        />
        <div  className={styles.userInfo}>
          <h2>Name: {}</h2>
          <p>Username: {}</p>
          <p>Email: {}</p>
        </div>
      </Card>
    );
  }
  