"use client";
import { PageHeader } from "@/components/common/PageHeader";
import { getProfileDetails } from "@/services/user.service";
import { useEffect } from "react";

export default function ProfilePage() {
  useEffect(() => {
    (async () => {
      try {
        const response = await getProfileDetails();
        console.log(response);
      } catch (error: any) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div className="w-full">
      <PageHeader
        title="My Profile"
        color="#ff550c"
        breadcrumb="Home // Profile"
      />
    </div>
  );
}
