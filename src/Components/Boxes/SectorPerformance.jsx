import React, { useEffect, useState } from "react";
import { useContext } from "react";
import storeContext from "../../Auth/Store";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import './Styling.css'
const SectorPerformance = () => {
  const key = useContext(storeContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://financialmodelingprep.com/api/v3/sectors-performance?apikey=I8ksM4QThIgbMjf1x4WBqQytcjJGFtAx`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);

          localStorage.setItem(
            "sectorsPerformanceData",
            JSON.stringify(responseData)
          );
        } else {
          toast.error("Failed to fetch data");
        }
      } catch (error) {
        toast.error("Failed to fetch data");
      }
    };

    const storedData = localStorage.getItem("sectorsPerformanceData");
    if (!storedData) {
      fetchData();
    } else {
      setData(JSON.parse(storedData));
    }
  }, []);
  return (
    <>
      <Toaster />
      <div className="rounded-[8px] h-auto w-[600px] bg-[#262424] p-[20px] flex flex-col gap-[20px]">
        <div>
          <p className="text-[16px] w-max ">
            Sector Performance
          </p>
        </div>
        <div className="flex gap-[15px]">
            <div className="w-[50%] flex flex-col gap-[15px]">
                {data.slice(0,5).map((item,index)=>(
                    <span className="flex justify-between items-center">
                    <p>{item.sector}</p>
                    <p className="Percentage_change font-semibold text-[14px]" style={item.changesPercentage.slice(0,1) === "-" ? {color:'red'}: {color:'green'}}>{item.changesPercentage.slice(0,5)}</p>
                </span>
                ))}
                
            </div>
            <div className="w-[50%] flex flex-col gap-[15px]">
            {data.slice(5,10).map((item,index)=>(
                    <span className="flex justify-between items-center">
                    <p>{item.sector}</p>
                    <p className="Percentage_change font-semibold text-[14px]"style={item.changesPercentage.slice(0,1) === "-" ? {color:'red'}: {color:'green'}}>{item.changesPercentage.slice(0,5)}</p>
                </span>
                ))}
            </div>
        </div>
      </div>
    </>
  );
};

export default SectorPerformance;
