import Chart, { ChartElement } from "../../base-components/Chart";
import { ChartData, ChartOptions } from "chart.js/auto";
import { selectColorScheme } from "../../stores/colorSchemeSlice";
import { selectDarkMode } from "../../stores/darkModeSlice";
import { useAppSelector } from "../../stores/hooks";
import { useMemo, useRef } from "react";
import { getColor } from "../../utils/colors";

interface MainProps extends React.ComponentPropsWithoutRef<"canvas"> {
  width: number;
  height: number;
  index: number;
  borderColor: string;
  backgroundColor: string;
}

function Main(props: MainProps) {
  const reportLineChartRef = useRef<ChartElement | null>();
  const colorScheme = useAppSelector(selectColorScheme);
  const darkMode = useAppSelector(selectDarkMode);

  const getBackground = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const gradient = ctx?.createLinearGradient(0, 0, 0, 100);
    gradient?.addColorStop(0, props.backgroundColor);
    gradient?.addColorStop(1, darkMode ? "#28344e00" : "#ffffff01");
    return gradient;
  };

  const getSecondaryBackground = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const gradient = ctx?.createLinearGradient(0, 0, 0, 100);
    gradient?.addColorStop(0, getColor("slate.50"));
    gradient?.addColorStop(1, darkMode ? "#28344e00" : "#ffffff01");
    return gradient;
  };

  const data: ChartData = useMemo(() => {
    const data = [
      [
        [
          0, 5, 35, 40, 39, 33, 32, 37, 36, 30, 24, 18, 48, 53, 52, 82, 112,
          106, 136, 141, 140, 139, 138, 143, 173, 203, 233, 263, 257, 258, 233,
          208, 183, 177, 171, 201, 231, 206, 207, 237, 231, 206, 207, 182, 212,
          206, 181, 211, 186, 161, 191, 190, 195, 200, 194, 199, 193, 223, 253,
          247, 252, 257, 262, 256, 261, 266, 296, 295, 300, 305, 310, 309, 303,
          308, 313,
        ],
        [
          141, 111, 106, 76, 71, 66, 72, 42, 48, 43, 38, 44, 50, 51, 46, 16, 17,
          -13, -18, -17, -22, -27, -21, -51, -56, -50, -25, -55, -30, -5, 20,
          45, 70, 69, 94, 119, 118, 124, 94, 100, 99, 98, 68, 74, 80, 86, 111,
          110, 80, 86, 111, 106, 112, 107, 108, 109, 104, 99, 105, 100, 70, 71,
          66, 61, 67, 37, 32, 27, 33, 28, -2, 4, 10, 5, 0,
        ],
      ],
      [
        [
          0, 30, 35, 65, 70, 64, 94, 99, 104, 98, 92, 122, 116, 121, 115, 109,
          103, 108, 138, 132, 126, 120, 150, 180, 210, 211, 186, 161, 155, 130,
          160, 135, 110, 140, 115, 145, 139, 133, 108, 109, 84, 85, 60, 35, 36,
          11, 5, -20, -26, -51, -21, -27, -33, -28, -23, -29, 1, 6, 11, 5, 10,
          40, 45, 50, 55, 49, 54, 84, 89, 119, 124, 129, 134, 139, 169,
        ],
        [
          113, 108, 78, 48, 18, 24, 25, -5, -10, -15, -9, -3, -8, -38, -43, -48,
          -53, -83, -113, -107, -101, -131, -136, -166, -196, -190, -165, -195,
          -170, -145, -146, -121, -96, -71, -46, -21, -15, 10, 35, 5, -25, 0, 6,
          31, 56, 26, 51, 50, 75, 100, 125, 131, 137, 107, 77, 83, 53, 54, 60,
          61, 62, 63, 33, 39, 9, 4, 10, 16, 22, 28, -2, 4, 10, 5, 0,
        ],
      ],
      [
        [
          0, -1, 4, -2, -8, -9, -15, 15, 20, 25, 30, 35, 65, 59, 64, 58, 63, 68,
          73, 67, 97, 96, 126, 131, 136, 166, 196, 190, 220, 214, 189, 183, 213,
          188, 163, 138, 139, 114, 89, 119, 120, 150, 180, 155, 185, 215, 209,
          203, 233, 263, 257, 262, 256, 250, 255, 249, 254, 259, 264, 269, 274,
          304, 334, 339, 333, 327, 321, 351, 345, 375, 380, 385, 379, 384, 389,
        ],
        [
          324, 319, 314, 284, 279, 274, 244, 250, 251, 257, 263, 258, 253, 223,
          218, 213, 183, 178, 179, 174, 175, 176, 171, 177, 147, 117, 142, 167,
          137, 162, 168, 167, 192, 217, 216, 186, 211, 217, 242, 241, 247, 246,
          271, 277, 247, 253, 278, 277, 302, 272, 242, 237, 232, 238, 244, 214,
          209, 179, 185, 180, 175, 145, 140, 135, 136, 106, 76, 82, 52, 47, 17,
          23, 29, 30, 0,
        ],
      ],
      [
        [
          302, 272, 242, 212, 207, 177, 172, 167, 173, 168, 169, 170, 176, 171,
          141, 142, 148, 154, 149, 150, 120, 90, 85, 80, 50, 20, -10, 15, -15,
          -16, -46, -40, -41, -35, -29, -4, -34, -9, -39, -14, 11, 36, 42, 41,
          47, 72, 97, 122, 147, 172, 197, 198, 193, 188, 158, 159, 165, 171,
          177, 172, 142, 137, 107, 77, 72, 78, 73, 68, 63, 33, 34, 4, 10, 5, 0,
        ],
        [
          0, 5, 35, 65, 70, 75, 80, 79, 109, 114, 144, 174, 179, 173, 178, 208,
          202, 196, 190, 220, 250, 255, 260, 259, 264, 258, 233, 208, 202, 177,
          207, 182, 157, 132, 162, 192, 186, 180, 181, 182, 183, 184, 178, 153,
          128, 158, 188, 163, 138, 132, 137, 142, 136, 141, 135, 140, 134, 139,
          133, 163, 168, 173, 172, 202, 207, 201, 231, 261, 291, 290, 284, 289,
          283, 282, 276,
        ],
      ],
    ];

    return {
      labels: data[props.index][0],
      datasets: [
        {
          data: data[props.index][0],
          borderWidth: 1.1,
          borderColor: colorScheme ? props.borderColor : "",
          pointRadius: 0,
          backgroundColor: getBackground(),
          tension: 0.3,
          fill: true,
        },
        {
          data: data[props.index][1],
          borderWidth: 1.1,
          borderColor: colorScheme ? getColor("slate.400") : "",
          pointRadius: 0,
          borderDash: [1, 1],
          backgroundColor: getSecondaryBackground(),
          tension: 0.3,
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
