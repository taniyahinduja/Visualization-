import './BarPlot.css'
import React from "react";
import Chart from '../Chart/Chart';



export default function BarPlot() {

    return (
        <div>
            <div style={{ marginLeft: "40px", display: "flex" }}>
                <div style={{ height: "15px", borderLeft: "4px solid #0088FE", marginTop: "70px", paddingBottom: "25px", paddingLeft: "5px", marginLeft: "20px" }}>
                    0-17y/o
                </div>
                <div style={{ height: "15px", borderLeft: "4px solid #00C49F", marginTop: "70px", paddingBottom: "25px", paddingLeft: "5px", marginLeft: "20px" }}>
                    0-17y/o
                </div>
                <div style={{ height: "15px", borderLeft: "4px solid #FFBB28", marginTop: "70px", paddingBottom: "25px", paddingLeft: "5px", marginLeft: "20px" }}>
                    0-17y/o
                </div>
                <div style={{ height: "15px", borderLeft: "4px solid #FF8042", marginTop: "70px", paddingBottom: "25px", paddingLeft: "5px", marginLeft: "20px" }}>
                    0-17y/o
                </div>
                <div style={{ height: "15px", borderLeft: "4px solid red", marginTop: "70px", paddingBottom: "25px", paddingLeft: "5px", marginLeft: "20px" }}>
                    0-17y/o
                </div>
            </div>
            <div class="container">
                <Chart />
                <Chart />
                <Chart />
                <Chart />
                <Chart />
                <Chart />
                <Chart />
                <Chart />
                <Chart />
                <Chart />
            </div>
        </div>

    );
}