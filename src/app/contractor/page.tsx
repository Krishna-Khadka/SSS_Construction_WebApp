"use client"

import { useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";

import SubContractorInfo from '@/pages/subcontractor/SubContractorInfo'
import Loader from "@/components/loader/Loader";


const page = () => {
  const { user } = useContext(AuthContext); // Get the current user context
  const router = useRouter();

  useEffect(() => {
    // If no user is logged in, redirect to the login page
    if (!user) {
      router.push("/login"); // Redirect to login page
    }
  }, [user, router]);

  if (!user) {
    return <Loader />
  }
  return (
    <div><SubContractorInfo /></div>
  )
}

export default page