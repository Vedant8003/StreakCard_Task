import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import moment from "moment";
import { LineChart } from "@mui/x-charts/LineChart";
import "./Styling.css";

const Chart = () => {
  const todate = moment().format("YYYY-MM-DD");
  const [fromDate, setFromDate] = useState(
    moment().subtract(5, "days").format("YYYY-MM-DD")
  ); // Default to 5 days ago
  const [symbol, setSymbol] = useState(["AAPL", "META", "GOLD"]);
  const [data, setData] = useState([]);
  const [time, setTime] = useState("5 Day"); // Default to 5 Day
  const [ticker, setTicker] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [x, setX] = useState([]); // State to hold x-axis data (timestamps)
  const [y, setY] = useState([]); // State to hold y-axis data (closing prices)

  const updateFromDate = (timePeriod) => {
    let newFromDate;
    switch (timePeriod) {
      case "5 Day":
        newFromDate = moment().subtract(5, "days").format("YYYY-MM-DD");
        break;
      case "1 Month":
        newFromDate = moment().subtract(1, "months").format("YYYY-MM-DD");
        break;
      case "6 Months":
        newFromDate = moment().subtract(6, "months").format("YYYY-MM-DD");
        break;
      case "1 Year":
        newFromDate = moment().subtract(1, "years").format("YYYY-MM-DD");
        break;
      default:
        newFromDate = moment().subtract(5, "days").format("YYYY-MM-DD"); // Default to 5 days ago
    }
    setFromDate(newFromDate);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = symbol.map(async (symbol) => {
          const response = await fetch(
            `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?apikey=Jd6yZ0LURoJDgR50OQ4bXtgx7iODzLx7&from=${fromDate}&to=${todate}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
          if (response.ok) {
            return response.json();
          } else {
            throw new Error(`Failed to fetch data for ${symbol}`);
          }
        });

        const results = await Promise.all(promises);

        setData(results);
      } catch (error) {
        toast.error("Something went wrong while fetching data");
      }
    };

    fetchData();
  }, [symbol, fromDate, todate]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleTimeChange = (timePeriod) => {
    setTime(timePeriod);
    updateFromDate(timePeriod);
  };

  useEffect(() => {
    if (data.length > 0) {
      const filteredStock = data.filter((item) => item.symbol === ticker);
      if (filteredStock.length > 0) {
        setFilteredData(filteredStock[0].historical);
      }
    }
  }, [ticker, data]);

  useEffect(() => {
    const chartDataStock = filteredData.map((item) => ({
      x: moment(item.date).valueOf(), // Convert date to timestamp (number)
      y: item.close,
    }));
    setChartData(chartDataStock);
  }, [filteredData]);

  useEffect(() => {
    const xaxis = chartData.map((item) => item.x);
    const yaxis = chartData.map((item) => item.y);
    setX(xaxis);
    setY(yaxis);
  }, [chartData]);

  return (
    <>
      <Toaster />
      <div className="rounded-[8px] h-auto w-auto bg-[#262424] p-[20px] flex items-center gap-[20px] max-md:flex-col max-md:items-center max-md:p-[10px]" style={{maxWidth:'-webkit-fill-available'}}>
        <div className="w-[50%] flex flex-col gap-[15px]">
          {data.length > 0 ? (
            data.map((item, index) => (
              <span
                key={index}
                className="flex justify-between items-center cursor-pointer p-[8px] rounded-xl"
                style={
                  ticker === item.symbol ? { backgroundColor: "black" } : null
                }
                onClick={() => setTicker(item.symbol)}
              >
                <p>{item?.symbol}</p>
                <p>
                  {item.historical && item.historical[0]
                    ? item.historical[0].close
                    : "loading"}
                </p>
                <p
                  className="Percentage_change"
                  style={
                    item.historical &&
                    item.historical[0] &&
                    String(item.historical[0].changePercent).slice(0, 1) ===
                      "-"
                      ? { color: "red" }
                      : { color: "green" }
                  }
                >
                  {item.historical && item.historical[0]
                    ? String(item.historical[0].changePercent).slice(0, 5)
                    : "loading"}
                </p>
              </span>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
        <div className="w-auto flex flex-col items-center">
          <div className="flex gap-[5px]">
            <button
              className="text-[white] bg-black px-[8px] py-[2px] rounded-xl"
              style={
                time === "5 Day"
                  ? { backgroundColor: "white", color: "black" }
                  : null
              }
              onClick={() => handleTimeChange("5 Day")}
            >
              5 Day
            </button>
            <button
              className="text-[white] bg-black px-[8px] py-[2px] rounded-xl"
              style={
                time === "1 Month"
                  ? { backgroundColor: "white", color: "black" }
                  : null
              }
              onClick={() => handleTimeChange("1 Month")}
            >
              1 Month
            </button>
            <button
              className="text-[white] bg-black px-[8px] py-[2px] rounded-xl"
              style={
                time === "6 Months"
                  ? { backgroundColor: "white", color: "black" }
                  : null
              }
              onClick={() => handleTimeChange("6 Months")}
            >
              6 Months
            </button>
            <button
              className="text-[white] bg-black px-[8px] py-[2px] rounded-xl"
              style={
                time === "1 Year"
                  ? { backgroundColor: "white", color: "black" }
                  : null
              }
              onClick={() => handleTimeChange("1 Year")}
            >
              1 Year
            </button>
          </div>
          <LineChart
            className="LineChartBoxes"
            xAxis={[{ data: x }]}
            series={[
              {
                data: y,
              },
            ]}
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default Chart;
