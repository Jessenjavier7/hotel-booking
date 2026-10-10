import React from "react";
import DashboadCards from "@/app/components/admin/dashboard-cards";
import { Metadata } from "next";
import { Suspense } from "react";
import ReservationList from "@/app/components/admin/reservation-list";

export const metadata: Metadata = {
  title: "Dashboard",
};

const DashboardPage = () => {
  return (
    <div className="max-w-screen-xl px-4 py-16 mt-10 mx-auto">
      <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
      <Suspense fallback={<p>Loading Cards...</p>}>
        <DashboadCards />
      </Suspense>
      <Suspense fallback={<p>Loading Reservation...</p>}>
        <ReservationList />
      </Suspense>
    </div>
  );
};

export default DashboardPage;
