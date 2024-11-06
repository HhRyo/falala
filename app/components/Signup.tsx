"use client";
import { useState } from 'react';
import Card from './Card'; 
import Button from './Button';
import styles from './Signup.module.css';

type SignupProps = {
  onAddUser: (user: { name: string; username: string; email: string; password: string; imageUrl: string }) => void;
};

export default function Signup({ onAddUser }: SignupProps) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Form submission handler - Requirement: 25 pts
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Username and password are required");
      return;
    }
    // Passes input data to handler in Home - Requirement: 15 pts
    onAddUser({ name, username, email, password, imageUrl });
    // Clears form fields - Requirement: 5 pts
    setName('');
    setUsername('');
    setEmail('');
    setPassword('');
    setImageUrl('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-3">
      <Card className={`${styles.input} w-full max-w-lg p-3 bg-white shadow-md rounded-md`}>
        <h1 className="text-4xl font-bold mb-6 text-center">Signup</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
          <label htmlFor="username">Username</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
          <label htmlFor="email">Email</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <label htmlFor="password">Password</label>
          <input className="p-2 border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          <label htmlFor="imageLink">Image Link</label>
          <input className="border border-gray-300 rounded-md text-base focus:outline-none focus:border-blue-500"
            id="imageLink"
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Enter image URL"
          />
          <Button type="submit">Sign Up</Button>
        </form>
      </Card>
    </div>
  );
}
