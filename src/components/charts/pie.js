import React from "react";
import { ResponsivePie } from "@nivo/pie";

const Pie = (props) => (
    <div style={{ height: 350}}>
    <ResponsivePie
      data={props.data}
      margin={{ top: 20, right: 80, bottom: 0, left: 80 }}
      innerRadius={0.5}
      padAngle={0.9}
      cornerRadius={15}
      colors={{ scheme: 'accent' }}
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
    <hr style={{marginBottom: '10px'}} />
  </div>
);

export default Pie;
