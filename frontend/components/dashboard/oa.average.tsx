import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Chip,
  CardFooter,
  CircularProgress,
  Divider,
} from "@nextui-org/react";
import OAaverageColumn from "./chart/oa.average.column";
import { MoonFilledIcon, SunFilledIcon } from "../icons";
import ColumnChartRechart from "./chart/column.chart";

interface IProps {
  width: string;
}

const OAaverage: React.FC<IProps> = ({ width }) => {
  return (
    <Card className="p-4  bg-default-50 rounded-xl shadow-md " style={{}}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-small uppercase font-bold">OA Average%</p>
        <small className="text-default-500">17 - 22 June 2024</small>
      </CardHeader>
      <div className="flex w-auto">
        <div className="overflow-visible py-2 flex flex-col gap-4" style={{}}>
          <Card
            className="border-none bg-gradient-to-r from-blue-800 to-indigo-900"
            style={{ width: "15rem", height: "15rem" }}
          >
            <CardBody
              className="justify-center items-center pb-0"
              style={{ width: "15rem" }}
            >
              <CircularProgress
                classNames={{
                  svg: "w-36 h-36 drop-shadow-md",
                  indicator: "stroke-white",
                  track: "stroke-white/10",
                  value: "text-3xl font-semibold text-white",
                }}
                value={77.91}
                strokeWidth={4}
                showValueLabel={true}
              />
            </CardBody>
            <CardFooter className="justify-center items-center pt-0">
              <Chip
                classNames={{
                  base: "border-1 border-white/30",
                  content: "text-white/90 text-small font-semibold",
                }}
                variant="bordered"
              >
                AVERAGE
              </Chip>
            </CardFooter>
          </Card>

          <Card
            className="p-4 gap-2 flex justfy-center items-center"
            style={{ width: "15rem" }}
          >
            <Chip
              variant="flat"
              color="primary"
              style={{ height: "2rem" }}
              startContent={<MoonFilledIcon size={18} />}
              radius="sm"
            >
              Night Shift Performance
            </Chip>
            <div style={{ flex: "1" }} className="flex gap-6">
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col">
                  <span className="text-center font-bold">85%</span>
                  <span className="text-center text-xs">17 June</span>
                </div>
                <small className="text-default-500">BEST</small>
              </div>
              <Divider orientation="vertical" />
              <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col">
                  <span className="text-center font-bold">77%</span>
                  <span className="text-center text-xs">20 June</span>
                </div>
                <small className="text-default-500">WORST</small>
              </div>
            </div>
          </Card>
          <Card
            className="p-4 gap-2 flex justfy-center items-center "
            style={{ width: "15rem" }}
          >
            <Chip
              variant="flat"
              color="warning"
              style={{ height: "2rem" }}
              startContent={<SunFilledIcon size={18} />}
              radius="sm"
            >
              Day Shift Performace
            </Chip>
            <div style={{ flex: "1" }} className="flex gap-6">
              <div
                className="flex flex-col justify-center items-center"
                style={{ width: "49.5%" }}
              >
                <div className="flex flex-col">
                  <span className="text-center font-bold">81%</span>
                  <span className="text-center text-xs">17 June</span>
                </div>
                <small className="text-default-500">BEST</small>
              </div>
              <Divider orientation="vertical" />
              <div
                className="flex flex-col justify-center items-center"
                style={{ width: "49.5%" }}
              >
                <div className="flex flex-col">
                  <span className="text-center font-bold">69%</span>
                  <span className="text-center text-xs">18 June</span>
                </div>
                <small className="text-default-500">WORST</small>
              </div>
            </div>
          </Card>
        </div>
        <div style={{}} className="flex justify-center item-center">
          <div>
            {/* <OAaverageColumn /> */}
            <ColumnChartRechart />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OAaverage;
