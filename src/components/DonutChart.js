import * as React from "react";
import Card from "react-bootstrap/Card";
import {
  Chart,
  PieSeries,
  Title,
} from "@devexpress/dx-react-chart-material-ui";
import { Animation } from "@devexpress/dx-react-chart";
import { Legend } from '@devexpress/dx-react-chart-material-ui';

const data = [
  { type: "Tourist", num: 130 },
  { type: "Tour Guide", num: 12 },
];

export default class DonutChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;

    return (
      <Card style={{ margin: 10, padding: 20, width: "30rem", paddingBottom: 0 }}>
        <Chart data={chartData} palette="Ocean">
          <PieSeries valueField="num" argumentField="type" innerRadius={0.6} />
          <Legend position="bottom"/>
          <Title text="User Composition" />
          <Animation />          
        </Chart>
      </Card>
    );
  }
}
