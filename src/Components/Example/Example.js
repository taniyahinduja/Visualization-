import "./Example.css";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: 'Grand Indonesia',
        uv: 1,
        pv: 2,
        amt: 2.5,
        x: 3,
        y: 3.8
    },
    {
        name: 'Central Park',
        uv: 3,
        pv: 1.3,
        amt: 2.2,
        x: 3,
        y: 4
    },
    {
        name: 'Ambasador Mall',
        uv: 2.000,
        pv: 1.800,
        amt: 2.290,
        x: 3.000,
        y: .000
    },
    {
        name: 'Lippo Plaza',
        uv: 2.780,
        pv: 3.908,
        amt: 2.000,
        x: 1.000,
        y: 3.500
    },
    {
        name: 'Pondok Indah',
        uv: 1.890,
        pv: 3.800,
        amt: 2.181,
        x: 2.500,
        y: 1.050
    },
    {
        name: 'Plaza Indonesia',
        uv: 2.390,
        pv: 3.800,
        amt: 2.500,
        x: 3.000,
        y: 1.480
    },
    {
        name: 'Blok M Plaza',
        uv: 3.490,
        pv: 1.300,
        amt: 2.100,
        x: 2.000,
        y: 1.000
    },
    {
        name: 'Pacific Place',
        uv: 4.000,
        pv: 2.400,
        amt: 2.400,
        x: 2.000,
        y: 1.000
    },
    {
        name: 'Lotte Shopping',
        uv: 3.000,
        pv: 1.398,
        amt: 2.210,
        x: 3.000,
        y: 2.000
    },
    {
        name: 'Ciputra World',
        uv: 2.000,
        pv: 3.800,
        amt: 2.290,
        x: 3.000,
        y: 4.000
    },

];

export default function Example() {
    return (
        <div class="container">
            <BarChart
                width={1210}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 10,
                    left: 10,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="2 4" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="aqua" />
                <Bar dataKey="uv" fill="#adff2f" />
                <Bar dataKey="amt" fill="#e9e98e" />
                <Bar dataKey="x" fill="orange" />
                <Bar dataKey="y" fill="red" />
            </BarChart>
        </div>

    );
}