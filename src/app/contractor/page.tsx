"use client";

import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/providers/AuthProvider";

import SubContractorInfo from "@/pages/subcontractor/SubContractorInfo";
import Loader from "@/components/loader/Loader";
import Insight from "@/components/insight/Insight";

const Page = () => {
  const { user } = useContext(AuthContext); // Get the current user context
  const router = useRouter();
  const [subcontractorId, setSubcontractorId] = useState<string | null>(null);

  useEffect(() => {
    // If no user is logged in, redirect to the login page
    if (!user) {
      router.push("/login"); // Redirect to login page
    } else {
      // Check if subcontractor_id exists in localStorage
      const storedSubcontractorId = localStorage.getItem("subcontractor_id");
      setSubcontractorId(storedSubcontractorId);
    }
  }, [user, router]);

  if (!user) {
    return <Loader />;
  }

  return (
    <>
      {subcontractorId ? (
        // If subcontractor_id exists in localStorage, show SubContractorInfo
        <div>
          <SubContractorInfo />
        </div>
      ) : (
        // If subcontractor_id doesn't exist, show Insight with the button to register
        <Insight />
      )}
    </>
  );
};

export default Page;
