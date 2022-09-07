import React from "react";
import {Bar} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import { width } from "@mui/system";

export default function Composition({chartData}) {
    return (
        <Bar data={chartData} style={{height: "20rem", width:"18rem"}}/>
    );
}