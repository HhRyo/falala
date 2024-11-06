"use client";
import { useState } from 'react';
import Users from './components/Users';
import Signup from './components/Signup';

type User = {
  id: number;
  name: string;
  username: string;
  imageUrl: string;
  email: string;
  password: string;
};

const USERS_INIT: User[] = [
  {
    id: 1,
    name: 'Buzz Lightyear',
    username: 'blightyear',
    email: 'buzz.lightyear@gmail.com',
    password: 'password',
    imageUrl: 'https://example.com/image.png',
  },
];

export default function Home() {
  const [users, setUsers] = useState<User[]>(USERS_INIT);

  const addUser = (user: Omit<User, 'id'>) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
      {/* Passes users as a prop to Users */}
      <Users users={users} />
      {/* Passes addUser as onAddUser to Signup */}
      <Signup onAddUser={addUser} />
    </div>
  );
}
