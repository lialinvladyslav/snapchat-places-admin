import Lucide from "../../base-components/Lucide";
import TinySlider from "../../base-components/TinySlider";
import { getColor } from "../../utils/colors";
import ReportLineChart from "../../components/ReportLineChart";
import ReportDonutChart3 from "../../components/ReportDonutChart3";
import { useState, useEffect } from "react";
import firebase from "../../../firebase-config";
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";

const functions = getFunctions(firebase);

function Main() {
  interface Response {
    usersNumber?: number,
    storiesNumber?: number,
    placesNumber?: number,
    reportsNumber?: number,
    reportsUsersNumber?: number,
  }
  const [data, setData] = useState<Response>({
    usersNumber: 0,
    storiesNumber: 0,
    placesNumber: 0,
    reportsNumber: 0,
    reportsUsersNumber: 0,
  });
  useEffect(() => {
    const getStatistics = httpsCallable(functions, 'getStatistics');
    getStatistics().then(
      result => {
        const typedResult = result.data as Response;
        setData(typedResult);
      }
    ).catch(err => {
      // Getting the error code
      console.error(`Error code: ${err.code}`);
      console.error(`Error message: ${err.message}`);
    });
  }, [])
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Statistics
          </div>
        </div>
        <div className="grid grid-cols-12 gap-5 mt-3.5">
          <div className="col-span-12 p-1 md:col-span-6 2xl:col-span-3 box box--stacked">
            <div className="-mx-1 overflow-hidden h-[244px] [&_.tns-nav]:bottom-auto [&_.tns-nav]:w-auto [&_.tns-nav]:ml-5 [&_.tns-nav]:mt-5 [&_.tns-nav_button]:w-2 [&_.tns-nav_button]:h-2 [&_.tns-nav_button.tns-nav-active]:w-5 [&_.tns-nav_button]:mx-0.5 [&_.tns-nav_button]:bg-white/40 [&_.tns-nav_button.tns-nav-active]:bg-white/70">
              <TinySlider options={{ mode: "gallery", nav: true }}>
                <div className="px-1">
                  <div className="overflow-hidden relative flex flex-col w-full h-full p-5 rounded-[0.5rem] bg-gradient-to-b from-theme-2/90 to-theme-1/[0.85]">
                    <Lucide
                      icon="Medal"
                      className="absolute top-0 right-0 w-36 h-36 -mt-5 -mr-5 text-white/20 fill-white/[0.03] transform rotate-[-10deg] stroke-[0.3]"
                    />
                    <div className="mt-12 mb-9">
                      <div className="text-2xl font-medium leading-snug text-white">
                        New feature
                        <br />
                        unlocked!
                      </div>
                      <div className="mt-1.5 text-lg text-white/70">
                        Boost your performance!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <div className="overflow-hidden relative flex flex-col w-full h-full p-5 rounded-[0.5rem] bg-gradient-to-b from-theme-2/90 to-theme-1/90">
                    <Lucide
                      icon="Database"
                      className="absolute top-0 right-0 w-36 h-36 -mt-5 -mr-5 text-white/20 fill-white/[0.03] transform rotate-[-10deg] stroke-[0.3]"
                    />
                    <div className="mt-12 mb-9">
                      <div className="text-2xl font-medium leading-snug text-white">
                        Stay ahead
                        <br />
                        with upgrades
                      </div>
                      <div className="mt-1.5 text-lg text-white/70">
                        New features and updates!
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-1">
                  <div className="overflow-hidden relative flex flex-col w-full h-full p-5 rounded-[0.5rem] bg-gradient-to-b from-theme-2/90 to-theme-1/90">
                    <Lucide
                      icon="Gauge"
                      className="absolute top-0 right-0 w-36 h-36 -mt-5 -mr-5 text-white/20 fill-white/[0.03] transform rotate-[-10deg] stroke-[0.3]"
                    />
                    <div className="mt-12 mb-9">
                      <div className="text-2xl font-medium leading-snug text-white">
                        Supercharge
                        <br />
                        your workflow
                      </div>
                      <div className="mt-1.5 text-lg text-white/70">
                        Boost performance!
                      </div>
                    </div>
                  </div>
                </div>
              </TinySlider>
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 2xl:col-span-3 box box--stacked">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                <Lucide
                  icon="UserSquare"
                  className="w-6 h-6 text-primary fill-primary/10"
                />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium">{data.usersNumber} Users Joined</div>
                <div className="text-slate-500 mt-0.5">Till now</div>
              </div>
            </div>
            <div className="relative mt-5 mb-6 overflow-hidden">
              <div className="absolute inset-0 h-px my-auto tracking-widest text-slate-400/60 whitespace-nowrap leading-[0] text-xs">
                .......................................................................
              </div>
              <ReportLineChart
                className="relative z-10 -ml-1.5"
                height={100}
                index={2}
                borderColor={getColor("primary")}
                backgroundColor={getColor("primary", 0.3)}
              />
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 2xl:col-span-3 box box--stacked">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-success/10 bg-success/10">
                <Lucide
                  icon="Files"
                  className="w-6 h-6 text-success fill-success/10"
                />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium">
                  {data.storiesNumber} Stories Added
                </div>
                <div className="text-slate-500 mt-0.5">
                  Across {data.placesNumber} places
                </div>
              </div>
            </div>
            <div className="relative mt-5 mb-6 overflow-hidden">
              <div className="absolute inset-0 h-px my-auto tracking-widest text-slate-400/60 whitespace-nowrap leading-[0] text-xs">
                .......................................................................
              </div>
              <ReportLineChart
                className="relative z-10 -ml-1.5"
                height={100}
                index={0}
                borderColor={getColor("success")}
                backgroundColor={getColor("success", 0.3)}
              />
            </div>
          </div>
          <div className="flex flex-col col-span-12 p-5 md:col-span-6 2xl:col-span-3 box box--stacked">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-12 h-12 border rounded-full border-primary/10 bg-primary/10">
                <Lucide
                  icon="Zap"
                  className="w-6 h-6 text-primary fill-primary/10"
                />
              </div>
              <div className="ml-4">
                <div className="text-base font-medium">
                  {data.reportsNumber} Stories Reported
                </div>
                <div className="text-slate-500 mt-0.5">From {data.reportsUsersNumber} users</div>
              </div>
            </div>
            <div className="relative mt-5 mb-6">
              <ReportDonutChart3 className="relative z-10" height={100} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
