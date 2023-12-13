import Chart, { ChartElement } from "../../base-components/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { selectColorScheme } from "../../stores/colorSchemeSlice";
import { selectDarkMode } from "../../stores/darkModeSlice";
import { useAppSelector } from "../../stores/hooks";
import { useMemo, useRef } from "react";
import { getColor } from "../../utils/colors";
import _ from "lodash";

interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
  width: number;
  height: number;
}

function Main(props: MainProps) {
  const reportLineChartRef = useRef<ChartElement | null>();
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const getBackground = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const gradient = ctx?.createLinearGradient(0, 0, 0, 90);
    gradient?.addColorStop(0, getColor("success", 0.4));
    gradient?.addColorStop(1, darkMode ? "#28344e00" : "#ffffff01");
    return gradient;
  };

  const data: ChartData = useMemo(() => {
    const data = [
      [
        0, 5, 35, 65, 70, 75, 80, 79, 109, 114, 144, 174, 179, 173, 178, 208,
        202, 196, 190, 220, 250, 255, 260, 259, 264, 258, 233, 208, 202, 177,
        207, 182, 157, 132, 162, 192, 186, 180, 181, 182, 183, 184, 178, 153,
        128, 158, 188, 163, 138, 132, 137, 142, 136, 141, 135, 140, 134, 139,
        133, 163, 168, 173, 172, 202, 207, 201, 231, 261, 291, 290, 284, 289,
        283, 282, 276,
      ],
      [
        0, -1, 4, -2, -8, -9, -15, 15, 20, 25, 30, 35, 65, 59, 64, 58, 63, 68,
        73, 67, 97, 96, 126, 131, 136, 166, 196, 190, 220, 214, 189, 183, 213,
        188, 163, 138, 139, 114, 89, 119, 120, 150, 180, 155, 185, 215, 209,
        203, 233, 263, 257, 262, 256, 250, 255, 249, 254, 259, 264, 269, 274,
        304, 334, 339, 333, 327, 321, 351, 345, 375, 380, 385, 379, 384, 389,
      ],
    ];

    return {
      labels: data[0],
      datasets: [
        {
          data: data[0],
          borderWidth: 1.3,
          borderColor: colorScheme ? getColor("success", 0.7) : "",
          pointRadius: 0,
          tension: 0.3,
          backgroundColor: getBackground(),
          fill: true,
        },
        {
          data: data[1],
          borderWidth: 1.2,
          borderColor: colorScheme ? getColor("slate.500", 0.5) : "",
          pointRadius: 0,
          tension: 0.3,
          borderDash: [3, 2],
          backgroundColor: "transparent",
          fill: true,
        },
      ],
    };
  }, [reportLineChartRef.current, colorScheme, darkMode]);

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
            display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
          },
        },
      },
    };
  }, [reportLineChartRef.current, colorScheme, darkMode]);

  return (
    <>
      <Chart
        type="line"
        width={props.width}
        height={props.height}
        data={data}
        options={options}
        className={props.className}
        getRef={(el) => {
          reportLineChartRef.current = el;
        }}
      />
    </>
  );
}

Main.defaultProps = {
  width: "auto",
  height: "auto",
  className: "",
  index: 0,
};

export default Main;
