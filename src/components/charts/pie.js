import React from "react";
import { ResponsivePie } from "@nivo/pie";

const Pie = (props) => (
    <div style={{ height: 350}}>
    <ResponsivePie
      data={props.data}
      margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      colors={{ scheme: 'accent' }}
      enableRadialLabels={false}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
      slicesLabelsSkipAngle={10}
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      enableRadialLabels={true}
      fit={true}
    />
    <div className="Title">Active vs Recovered</div>
  </div>
);

export default Pie;
