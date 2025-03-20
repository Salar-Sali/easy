import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { styled } from "styled-components";
import { logoColorDark } from "~/bootstrap/helper/global-styles";

interface Props {
  chartData: {
    date: string;
    count: number;
  }[];
  yAxisTitle: string;
}

const OffersPerDayChart = ({ chartData, yAxisTitle }: Props) => {
  return (
    <ChartContainer>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date">
            <Label value="Day" offset={-8} position="insideBottom" />
          </XAxis>

          <YAxis allowDecimals={false}>
            <Label
              value={yAxisTitle}
              angle={-90}
              offset={5}
              position="insideLeft"
              style={{ textAnchor: "middle" }}
            />
          </YAxis>
          <Tooltip />
          <Area
            type="monotone"
            dataKey="count"
            stroke={logoColorDark}
            strokeWidth={2}
            fill={`${logoColorDark}30`}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
};

export default OffersPerDayChart;

const ChartContainer = styled.div`
  width: 100%;
  flex-shrink: 0;
`;
