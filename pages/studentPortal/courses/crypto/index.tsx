import moment from "moment";
import React, { useEffect, useState } from "react";
import UnitView from "../../../../components/studentPortal/lessons/UnitView";
import PageHeader from "../../../../components/ui/PageHeader";
import { useAuth } from "../../../../lib/authContext";
import { cryptoUnits } from "../../../api/studentPortal/courses/crypto";
import { Unit } from "../../../api/studentPortal/units";
export default function CryptoCoursePage() {
  const { user } = useAuth();
  const [units, setUnits] = useState<Unit[]>([]);

  useEffect(() => {
    setUnits(cryptoUnits);
  }, []);

  return (
    <div className="flex flex-col w-full px-4 pb-4 sm:px-8 sm:pb-8 ">
      <PageHeader
        title={`Let's start learning, ${user.displayName}`}
        description={moment().format("MMM Do YYYY")}
      />

      <div className="grid grid-cols-1 gap-4">
        {units.map((it, index) => (
          <UnitView key={index} data={it} course="crypto" />
        ))}
      </div>
    </div>
  );
}

CryptoCoursePage.auth = true;
CryptoCoursePage.premium = true;
