import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Cell,
  Legend,
  Label
} from "recharts";

const ScatterPlot = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  // Sample data
  const data = [
    { x: 1000, y: 1, z: 500 },
    { x: 1200, y: 2, z: 100 },
    { x: 2070, y: 3, z: 300 },
    { x: 3400, y: 4, z: 800 },
    { x: 1050, y: 1.4, z: 900 },
    { x: 4000, y: 2.4, z: 700 }
  ];

  return (
    <div>
      <div style={{ marginLeft: "40px", display: "flex" }}>
        
       <div style={{display:"flex"}}>
         <div style={{marginTop: "70px",height:"25px",  width:"25px", background:"#0088FE", borderRadius:"50%"}}>
         </div>
          <div style={{ height: "15px", marginTop: "70px", paddingBottom: "25px", paddingLeft: "5px", marginLeft: "5px", borderRadius:"50%", display: "inline-block"}}>
          Grand Indonesia
        </div>
       </div>


       <div style={{display:"flex"}}>
         <div style={{marginTop: "70px",height:"25px",  width:"25px", background:"#00C49F", borderRadius:"50%", marginLeft: "30px"}}>
         </div>
          <div style={{ height: "15px", marginTop: "70px", paddingBottom: "25px", paddingLeft: "5px", marginLeft: "5px", borderRadius:"50%", display: "inline-block"}}>
          Central Park
        </div>
       </div>

       <div style={{display:"flex"}}>
         <div style={{marginTop: "70px",height:"25px",  width:"25px", background:"#FFBB28", borderRadius:"50%", marginLeft: "30px"}}>
         </div>
          <div style={{ height: "15px", marginTop: "70px", paddingBottom: "25px", paddingLeft: "5px", marginLeft: "5px", borderRadius:"50%", display: "inline-block"}}>
          Ambasador Mall
        </div>
       </div>

       <div style={{display:"flex"}}>
         <div style={{marginTop: "70px",height:"25px",  width:"25px", background:"#FF8042", borderRadius:"50%", marginLeft: "30px"}}>
         </div>
          <div style={{ height: "15px", marginTop: "70px", paddingBottom: "25px", paddingLeft: "5px", marginLeft: "5px", borderRadius:"50%", display: "inline-block"}}>
          Lippo Plaza
        </div>
       </div>


       <div style={{display:"flex"}}>
         <div style={{marginTop: "70px",height:"25px",  width:"25px", background:"red", borderRadius:"50%", marginLeft: "30px"}}>
         </div>
          <div style={{ height: "15px", marginTop: "70px", paddingBottom: "25px", paddingLeft: "5px", marginLeft: "5px", borderRadius:"50%", display: "inline-block"}}>
          Pondok Indah Mall
        </div>
       </div>

       <div style={{display:"flex"}}>
         <div style={{marginTop: "70px",height:"25px",  width:"25px", background:"pink", borderRadius:"50%", marginLeft: "30px"}}>
         </div>
          <div style={{ height: "15px", marginTop: "70px", paddingBottom: "25px", paddingLeft: "5px", marginLeft: "5px", borderRadius:"50%", display: "inline-block"}}>
          Plaza Indonesia
        </div>
       </div>

      </div>
      <div>
        <ScatterChart
          width={1000}
          height={600}
          margin={{
            top: 100,
            right: 20,
            bottom: 0,
            left: 30
          }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey="x" name="stature" unit="" ticks={[0, 2000, 4000]} domain={[0, 4000]} >
            <Label value="Total Visitors" offset={0} position="bottom" />
          </XAxis>


          <YAxis type="number" dataKey="y" name="weight" unit="times" ticks={[0, 2, 4]} domain={[0, 4]}>
            <Label value="Visit Frequency/Visitors" offset={10} position="left" angle={-90} />
          </YAxis>
          <Tooltip cursor={{ strokeDasharray: "0 3" }} />
          <Legend />
          <Scatter data={data} fill="none">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Scatter>
        </ScatterChart>
      </div>
    </div>

  );
}

export default ScatterPlot;