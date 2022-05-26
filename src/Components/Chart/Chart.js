
import React from "react";
import { BarChart, Bar, Cell } from "recharts";



export default function Chart() {
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
    const data = [
        { y: 1},
        { y: 2},
        { y: 3 },
        { y: 4},
        { y: 1.4},
    
      ];
    return (
       
            <div style={{margin:"20px",  justifyItems:"center"}}>
               
                <BarChart width={75} height={200} data={data} barCategoryGap={0} margin={0}>
                        <Bar dataKey="y" data={data} fill="none" >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
            </div>
        
    );
}