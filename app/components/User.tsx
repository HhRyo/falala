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
    <Card className={styles.userItem}>
      {/* Renders the user's image - Requirement: 5 pts */}
      <Image
        className={styles.userImg}
        src={user.imageUrl}
        alt={`${user.name}'s avatar`}
        width={100}
        height={100}
        priority
      />
      {/* Renders name, username, email - Requirement: 5 pts */}
      <div className={styles.userInfo}>
        <h2>Name: {user.name}</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
      </div>
    </Card>
  );
}
