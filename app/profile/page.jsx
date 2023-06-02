"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
  const [prompts, setPrompts] = useState([]);
  const { data: session } = useSession();
  const router = useRouter();
  const handleEdit = async () => {};
  const handleDelete = async () => {};

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await fetch(`/api/users/${session?.user?.id}/posts`);
        const data = await response.json();
        setPrompts(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (session?.user?.id) fetchPrompts();
  }, []);
  return (
    <Profile
      name="My"
      desc="Welcome to your profile"
      data={prompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
