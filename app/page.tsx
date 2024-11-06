"use client";
import { useState } from 'react';
import Users from './components/Users';
import Signup from './components/Signup'; // Adjust path as needed

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
    imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/354028274_877327910424573_1574551018727772204_n.png?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=WrKGYikcYXoQ7kNvgGeB4_x&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=AHKbySkyVuOwGM7c8dVPdUM&oh=00_AYA9v6x3g02rlI75wfbcbePieDyMpZyXGOGMSAV9I_rfIQ&oe=67249BCA',
  },
];

export default function Home() {

  return (
    <div>
    
      <div className="flex flex-col items-center justify-center p-2 bg-gray-100">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Home Page</h1>
        <Users />
      </div>
      <Signup />
    </div>
  );
}
