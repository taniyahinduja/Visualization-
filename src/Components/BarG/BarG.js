import "./BarG.css";
import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const now1=36
const now2=71
const now3=28
const now4=49
const data = [
    {
        name: "6am",
        visitors: 5
    },
    {
        name: "7am",
        visitors: 10
    },
    {
        name: "8am",
        visitors: 60
    },
    {
        name: "9am",
        visitors: 60
    },
    {
        name: "10am",
        visitors: 30
    },
    {
        name: "11am",
        visitors: 75
    },
    {
        name: "12pm",
        visitors: 80
    },
    {
        name: "1pm",
        visitors: 90
    },
    {
        name: "2pm",
        visitors: 45
    },
    {
        name: "3pm",
        visitors: 30
    },
    {
        name: "4pm",
        visitors: 50
    },
    {
        name: "5pm",
        visitors: 85
    },
    {
        name: "6pm",
        visitors: 100
    }
];

export default function BarG() {
    return (
        <div>
            <div>
                <BarChart
                    width={1000}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                    barSize={20}
                >
                    <XAxis dataKey="name" padding={{ left: 10, right: 10 }} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Bar dataKey="visitors" fill="grey" background={{ fill: "none" }} />
                </BarChart>
            </div>
            <div class="pBar">

                <span class="amenities">Amenities</span>

                <div style={{display:"flex", height:"60px", paddingTop:"20px", borderBottom:"1px dashed grey"}}>
                    <div style={{paddingRight:"10px", width:"110px"}}>Coffee Shops</div>
                    <div style={{width:"70%", marginTop:"5px"}}> <ProgressBar now={now1} label={`${now1}%`} variant="secondary" /></div>
                </div>

                <div style={{display:"flex", height:"60px", paddingTop:"20px", borderBottom:"1px dashed grey"}}>
                    <div style={{paddingRight:"10px", width:"110px"}}>Shopping</div>
                    <div style={{width:"70%", marginTop:"5px"}}> <ProgressBar now={now2} label={`${now2}%`} variant="secondary" /></div>
                </div>
                
                <div style={{display:"flex", height:"60px", paddingTop:"20px", borderBottom:"1px dashed grey"}}>
                    <div style={{paddingRight:"10px", width:"110px"}}>Restaurant</div>
                    <div style={{width:"70%", marginTop:"5px"}}> <ProgressBar now={now3} label={`${now3}%`} variant="secondary" /></div>
                </div>

                <div style={{display:"flex", height:"60px", paddingTop:"20px", borderBottom:"1px dashed grey"}}>
                    <div style={{paddingRight:"10px", width:"110px"}}>Nightlife</div>
                    <div style={{width:"70%", marginTop:"5px"}}> <ProgressBar now={now4} label={`${now4}%`} variant="secondary" /></div>
                </div>
            </div>
        </div>

    );
}
