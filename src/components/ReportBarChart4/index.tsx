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

  const data: ChartData = useMemo(() => {
    const configData = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          barPercentage: 0.38,
          borderRadius: 2,
          data: [4, 7, 5, 4, 9, 7, 5],
          borderWidth: 1,
          borderColor: colorScheme ? getColor("theme.1", 0.7) : "",
          backgroundColor: colorScheme ? getColor("theme.1", 0.3) : "",
        },
      ],
    };

    return darkMode ? configData : configData;
  }, [colorScheme, darkMode]);

  const options: ChartOptions = useMemo(() => {
    return {
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        x: {
          ticks: {
            color: getColor("slate.500", 0.8),
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            display: false,
            beginAtZero: true,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
    };
  }, [colorScheme, darkMode]);

  return (
    <Chart
      type="bar"
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
