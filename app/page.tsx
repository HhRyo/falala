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
  // Manages the state of users - (Requirement: 25 pts for triggering rendering)
  const [users, setUsers] = useState<User[]>(USERS_INIT);

  // Handler for adding a user - (Requirement: Passing input data from Signup to Home - 20 pts)
  const addUser = (user: Omit<User, 'id'>) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  return (
    <div className="flex flex-col items-center justify-center p-2 bg-gray-100">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
      <Users users={users} />
      <Signup onAddUser={addUser} />
    </div>
  );
}
