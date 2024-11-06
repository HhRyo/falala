import User from './User';

type UsersProps = {
  users: {
    id: number;
    name: string;
    username: string;
    imageUrl: string;
    email: string;
    password: string;
  }[];
};

export default function Users({ users }: UsersProps) {
  // Maps each user to a User component - Requirement: 15 pts
  return (
    <div>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </div>
  );
}
