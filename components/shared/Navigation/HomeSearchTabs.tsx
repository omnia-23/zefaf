"use client";
import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HomeSearchTabs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <Card
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
        className="w-full max-w-md"
      >
        <CardBody
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
          className="text-right"
          dir="rtl"
        >
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="h2"
            color="blue-gray"
            className="mb-4"
          >
            إبعد الأن
          </Typography>
          <Typography
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
            variant="h3"
            color="blue-gray"
            className="mb-6"
          >
            خطط لزفاضك
          </Typography>

          <div className="mb-6">
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="h5"
              color="blue-gray"
              className="mb-2"
            >
              ما الذي تبحث عنه؟
            </Typography>

            <div className="flex items-center gap-2">
              <Input
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                label="ابحث هنا..."
                className="text-right"
                containerProps={{ className: "min-w-0" }}
                crossOrigin={undefined}
              />
              <Button
                placeholder=""
                onPointerEnterCapture={() => {}}
                onPointerLeaveCapture={() => {}}
                className="flex items-center gap-2"
                color="blue"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
                بحث
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              variant="h5"
              color="blue-gray"
              className="mb-2"
            >
              العملية
            </Typography>
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              color="gray"
              className="font-normal"
            >
              قنادق، قصور اقراطي......
            </Typography>
          </div>

          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              المدن
            </Typography>
            <Typography
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
              color="gray"
              className="font-normal"
            >
              الرياض، جدة، مكة......
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default HomeSearchTabs;
