"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import api from "../../service/api.service";

interface SiteProfile {
  about_us: string;
  contact_no: string;
  email: string;
  secondary_email: string;
  location: string;
  facebook_link: string;
  linkedin_link: string;
  whatsapp_link: string;
  youtube_link: string;
}

interface SiteProfileContextType {
  siteProfile: SiteProfile | null;
  loading: boolean;
  error: string | null;
}

const SiteProfileContext = createContext<SiteProfileContextType | undefined>(undefined);

export const SiteProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [siteProfile, setSiteProfile] = useState<SiteProfile | null>(null); // State variable should be `siteProfile`
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    api
      .get("/site-profile") // Fetch site profile data
      .then((response) => {
        setSiteProfile(response.data); // Set the response data to `siteProfile`
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching site profile:", err);
        setError("Failed to load site profile.");
        setLoading(false);
      });
  }, []);

  return (
    <SiteProfileContext.Provider value={{ siteProfile, loading, error }}>
      {children}
    </SiteProfileContext.Provider>
  );
};

// Custom hook to use site profile context
export const useSiteProfile = () => {
  const context = useContext(SiteProfileContext);
  if (!context) {
    throw new Error("useSiteProfile must be used within a SiteProfileProvider");
  }
  return context;
};
