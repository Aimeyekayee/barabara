"use client";
import React from "react";
import OAaverage from "./oa.average";
import TwoLineCompareOAaverage from "./chart/twoline.compare";
import { Progress, Select, SelectItem, SelectSection } from "@nextui-org/react";

const DashboardContent = () => {
  const animals = [
    { key: "recovery", label: "Recovery Time" },
    { key: "count", label: "Alarm Count" },
  ];
  return (
    <div
      className="flex flex-col pt-6 w-full"
      style={{ width: "100%", flex: "1" }}
    >
      <div className="flex">
        <OAaverage width="30%" />
        <TwoLineCompareOAaverage />
      </div>
      <div className="flex justify-end py-6" style={{ flex: "1" }}>
        <div className="flex flex-col gap-4 " style={{ height: "100%" }}>
          <div
            className="flex flex-col gap-2 rounded-medium bg-content1 p-6 shadow-small flex-1"
            style={{ width: "30rem" }}
          >
            <div className="flex items-center justify-between">
              <span className="text-large font-semibold">
                Critical&nbsp;Alarm
              </span>
              <div>
                <Select
                  className=""
                  defaultSelectedKeys={["recovery"]}
                  size="sm"
                  style={{ width: "9rem" }}
                >
                  <SelectSection>
                    {animals.map((animal) => (
                      <SelectItem key={animal.key}>{animal.label}</SelectItem>
                    ))}
                  </SelectSection>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Progress
                label="Slip Ring Run Out Check"
                size="sm"
                value={555}
                maxValue={1286}
                color="warning"
                // formatOptions={{ style: "currency", currency: "ARS" }}
                showValueLabel={true}
                className="max-w-md"
              />
              <Progress
                label="Robot Loader Emergency"
                size="sm"
                value={343}
                maxValue={1286}
                color="warning"
                // formatOptions={{ style: "currency", currency: "ARS" }}
                showValueLabel={true}
                className="max-w-md"
              />
              <Progress
                label="Work None Process"
                size="sm"
                value={208}
                maxValue={1286}
                color="warning"
                // formatOptions={{ style: "currency", currency: "ARS" }}
                showValueLabel={true}
                className="max-w-md"
              />
              <Progress
                label="Air Source Decreased"
                size="sm"
                value={180}
                maxValue={1286}
                color="warning"
                // formatOptions={{ style: "currency", currency: "ARS" }}
                showValueLabel={true}
                className="max-w-md"
              />
            </div>
            <div className="mt-4 flex w-full flex-col gap-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
