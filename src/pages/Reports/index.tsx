import Lucide from "../../base-components/Lucide";
import Pagination from "../../base-components/Pagination";
import { FormSelect } from "../../base-components/Form";
import _ from "lodash";
import firebase from "../../../firebase-config";
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";
import { useEffect, useState } from "react";
import LoadingIcon from "../../base-components/LoadingIcon";

const functions = getFunctions(firebase);

function Main() {
  interface Response {
    reportKey?: string;
    storyKey?: string;
    placeDisplayName?: string;
    formattedAddress?: string;
    url?: string;
    reporter?: string;
    reporterAvatar?: string;
    contentType?: string;
  }

  interface ResultData {
    reportsInfo: Response[];
  }

  const [reportsData, setReportsData] = useState<Array<Response>>([]);
  const [pageSize, setPageSize] = useState(4);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);


  const renderPageButtons = () => {
    const pageButtons = [] as any;
    const startPage = Math.min(Math.max(1, currentPage - 1), totalPages - 2);


    [startPage, startPage + 1, startPage + 2].forEach((pageNum, index) => {
      if (pageNum > 0 && pageNum <= totalPages) {
        pageButtons.push(<div key={index} onClick={() => setCurrentPage(pageNum)}><Pagination.Link active={pageNum == currentPage}>{pageNum}</Pagination.Link></div>)
      }
    })
    return pageButtons;
  }


  useEffect(() => {
    const getAllReports = httpsCallable(functions, 'getAllReports');
    getAllReports().then(
      result => {
        const typedResult = result.data as ResultData;
        setReportsData(typedResult.reportsInfo);
        setTotalPages(Math.ceil(typedResult.reportsInfo.length / pageSize));
        setCurrentPage(1);
      }
    ).catch(err => {
      // Getting the error code
      console.error(`Error code: ${err.code}`);
      console.error(`Error message: ${err.message}`);
    });
  }, [])
  const handlePageSize = (e: any) => {
    setPageSize(e.target.value);
    setTotalPages(Math.ceil(reportsData.length / e.target.value))
    setCurrentPage(1);
  }
  const handleReports = (reportKey?: string, storyKey?: string, action?: string) => {
    const handleReport = httpsCallable(functions, 'handleReport');
    handleReport({ reportKey: reportKey, storyKey: storyKey, action: action }).then(
      result => {
        const filteredReports = reportsData.filter((report) => report.reportKey !== reportKey);
        setReportsData(filteredReports);
      }
    ).catch(err => {
      // Getting the error code
      console.error(`Error code: ${err.code}`);
      console.error(`Error message: ${err.message}`);
    });
  }
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Reports
          </div>
        </div>
        <div className="mt-3.5">
          <div className="flex flex-col box box--stacked">
            <div className="overflow-hidden">
              {
                reportsData.length == 0 &&
                <div className="items-center mx-auto w-[21%] my-24">
                  <LoadingIcon icon="circles" className="w-8 h-8" />
                  <div className="mt-2 text-xs text-center">
                    Loading Data
                  </div>
                </div>
              }
              <div className="grid grid-cols-12 px-5 -mx-5 border-dashed border-y">
                {
                  reportsData.slice((currentPage - 1) * pageSize, currentPage * pageSize).map((report, index) => (
                    <div
                      key={report.reportKey}
                      className="col-span-12 sm:col-span-6 xl:col-span-3 border-dashed border-slate-300/80 [&:nth-child(4n)]:border-r-0 px-5 py-5 [&:nth-last-child(-n+4)]:border-b-0 border-r border-b flex flex-col"
                    >
                      <div className="overflow-hidden rounded-lg h-72 image-fit before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 before:from-slate-900/90 before:to-black/20">
                        {report.contentType == "image/jpeg"
                          ? <img
                            alt="Snapchat Admin"
                            className="rounded-md"
                            src={report.url}
                          />
                          : <video controls className="w-full h-full rounded-md">
                            <source src={report.url} type="video/mp4" />
                          </video>
                        }
                      </div>
                      <div className="pt-5">
                        <div className="flex flex-col gap-3.5 mb-5 pb-5 mt-auto border-b border-dashed border-slate-300/70">
                          <div className="flex items-center">
                            <div className="text-slate-500">Business:</div>
                            <div className="ml-auto">
                              <div className="flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-1.5 py-px">
                                <span className="-mt-px">
                                  {report.placeDisplayName}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="text-slate-500">Address:</div>
                            <div className="ml-auto">
                              <div className="flex items-center text-xs font-medium px-1.5 py-px">
                                <span className="-mt-px text-right">
                                  {report.formattedAddress}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <div className="text-slate-500">Reporter:</div>
                            <div className="ml-auto">
                              <div className="flex justify-center items-center">
                                <div className="w-9 h-9 image-fit">
                                  <img className="cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" alt="Tailwise - Admin Dashboard Template" src={report.reporterAvatar} />
                                </div>
                                <div className="ml-3.5">
                                  <div className="font-medium">${report.reporter}</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div
                            onClick={() => { handleReports(report.reportKey, report.storyKey, "accept") }}
                            className="flex items-center mr-auto text-primary cursor-pointer"
                          >
                            <Lucide
                              icon="KanbanSquare"
                              className="w-4 h-4 stroke-[1.3] mr-1.5"
                            />{" "}
                            Accept
                          </div>
                          <div
                            onClick={() => { handleReports(report.reportKey, report.storyKey, "decline") }}
                            className="flex items-center text-danger cursor-pointer"
                          >
                            <Lucide
                              icon="Trash2"
                              className="w-4 h-4 stroke-[1.3] mr-1.5"
                            />{" "}
                            Decline
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="flex flex-col-reverse flex-wrap items-center p-5 flex-reverse gap-y-2 sm:flex-row">
              <Pagination className="flex-1 w-full mr-auto sm:w-auto">
                <div onClick={() => setCurrentPage(1)}>
                  <Pagination.Link>
                    <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                  </Pagination.Link>
                </div>
                {
                  <div onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}>
                    <Pagination.Link>
                      <Lucide icon="ChevronLeft" className="w-4 h-4" />
                    </Pagination.Link>
                  </div>
                }
                {(Math.min(Math.max(1, currentPage - 1), totalPages - 2)) > 1 && <Pagination.Link>...</Pagination.Link>}
                {renderPageButtons()}
                {(Math.max(Math.min(totalPages, currentPage + 1), 3)) < totalPages && <Pagination.Link>...</Pagination.Link>}
                {
                  <div onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}>
                    <Pagination.Link>
                      <Lucide icon="ChevronRight" className="w-4 h-4" />
                    </Pagination.Link>
                  </div>
                }
                <div onClick={() => setCurrentPage(totalPages)}>
                  <Pagination.Link>
                    <Lucide icon="ChevronsRight" className="w-4 h-4" />
                  </Pagination.Link>
                </div>
              </Pagination>
              <FormSelect value={pageSize} onChange={(e) => { handlePageSize(e) }} className="sm:w-20 rounded-[0.5rem]">
                <option>4</option>
                <option>8</option>
                <option>16</option>
              </FormSelect>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
