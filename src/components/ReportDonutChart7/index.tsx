import Chart from "../../base-components/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { getColor } from "../../utils/colors";
import { selectColorScheme } from "../../stores/colorSchemeSlice";
import { selectDarkMode } from "../../stores/darkModeSlice";
import { useAppSelector } from "../../stores/hooks";
import { useMemo } from "react";

interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
  width: number;
  height: number;
}

function Main(props: MainProps) {
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const chartData = [75, 25];
  const data: ChartData = useMemo(() => {
    return {
      labels: ["31 - 50 Years old", ">= 50 Years old"],
      datasets: [
        {
          data: chartData,
          backgroundColor: colorScheme
            ? [getColor("primary", 0.5), getColor("slate.300")]
            : "",
          hoverBackgroundColor: colorScheme
            ? [getColor("primary", 0.5), getColor("slate.300")]
            : "",
          borderWidth: 1,
          borderColor: colorScheme
            ? [getColor("primary", 0.5), getColor("slate.400", 0.4)]
            : "",
        },
      ],
    };
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      cutout: "78%",
    };
  }, [colorScheme, darkMode]);

  return (
    <Chart
      type="doughnut"
      width={props.width}
      height={props.height}
      data={data}
      options={options}
      className={props.className}
    />
  );
}

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
};

export default Main;
