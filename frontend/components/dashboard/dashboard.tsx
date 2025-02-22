import React from "react";
import { Button } from "@nextui-org/button";
import IconSettings from "@/components/icon";
import DashboardContent from "./dashboard.content";

const Dashboard = () => {
  return (
    <div
      className="flex flex-col"
      style={{height: "100%" }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">
            Summary Dashboard (17 June - 22June 2024)
          </span>
          <span className="text-l text-bold">
            This dashboard show the data of oa average please change option on
            left side to explor more.
          </span>
        </div>
        <div>
          <Button startContent={<IconSettings />} size="sm">
            Setting Parameter
          </Button>
        </div>
      </div>
      <DashboardContent />
    </div>
  );
};

export default Dashboard;
