"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const [userPrompts, setUserPrompts] = useState([]);
  const searchParams = useSearchParams();
  const username = searchParams.get("name");

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await fetch(`/api/users/${params?.id}/posts`);
        const data = await response.json();
        setUserPrompts(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (params?.id) fetchPrompts();
  }, []);
  return (
    <Profile
      name={username}
      desc={`Welcome to ${username}'s personalized profile`}
      data={userPrompts}
    />
  );
};

export default UserProfile;
