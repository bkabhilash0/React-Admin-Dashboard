import React from "react";
import "../../../node_modules/react-vis/dist/style.css";
import {
  XYPlot,
  LineSeries,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
} from "react-vis";
import { data } from "../../data/chartData";

const Chart = () => {
  const chart = (
    <XYPlot height={300} width={500}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <LineSeries data={data[0]} color="red" />
      <LineSeries data={data[1]} color="purple" />
      {/* <LineSeries data={data[2]} color='yellow'/> */}
    </XYPlot>
  );
  return <div style={{ marginTop: "15px" }}>
    {chart}
  </div>;
};

export default Chart;
