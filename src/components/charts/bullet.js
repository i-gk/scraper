import React from "react";
import { ResponsiveBullet } from "@nivo/bullet";

const Bullet = (props) => (
    <div style={{ height: 330}}>
    <ResponsiveBullet
      data={props.data}
      margin={{ top: 10, right: 80, bottom: 20, left: 80 }}
      layout="vertical"
      animate={true}
      motionStiffness={90}
      motionDamping={15}
      titleAlign='middle'
      titleOffsetX={0}
      titleOffsetY={-20}
    />
    <div className="Title">Deceased meter</div>
    <hr />
  </div>
);

export default Bullet;