import SideBar from "@/components/sidebar";

import Nodata from "@/components/nodata.summary";
import { Button } from "@nextui-org/button";
import Dashboard from "@/components/dashboard/dashboard";

export default function BlogPage() {
  return (
    <div className="flex" style={{ width: "100%" }}>
      <SideBar></SideBar>
      <div style={{ width: "85%", minHeight: "100%" }} className="pt-6 px-6">
        {/* <Nodata></Nodata> */}
        <Dashboard />
      </div>
    </div>
  );
}
