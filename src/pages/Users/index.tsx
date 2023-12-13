import Lucide from "../../base-components/Lucide";
import { Menu } from "../../base-components/Headless";
import Button from "../../base-components/Button";
import products from "../../fakers/products";
import {
  FormInline,
  FormInput,
  FormLabel,
  FormSelect,
} from "../../base-components/Form";
import * as xlsx from "xlsx";
import { useEffect, useRef, createRef, useState } from "react";
import { createIcons, icons } from "lucide";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import { stringToHTML } from "../../utils/helper";
import { array } from "yup";

interface Response {
  id?: string;
  name?: string;
  category?: string;
  followers?: number;
  followings?: number;
  avatar?: string;
  status?: bool;
  privacy?: bool;
}

function Main() {
  const tableRef = createRef<HTMLDivElement>();
  const tabulator = useRef<Tabulator>();



  const [filter, setFilter] = useState({
    field: "name",
    type: "like",
    value: "",
  });
  useEffect(() => {
    setTimeout(() => {
      if (tabulator.current) {
        tabulator.current.setData([
          {
            "id": "21",
            "name": "Samsungffffffffffffffffff",
            "category": "Electronic",
            "followers": 195,
            "followings": 50,
            "provider": "google",
            "identifier": "hello@gmail.com",
            "status": true,
            "privacy": true,
            "avatar": "/src/assets/images/users/user3-50x50.jpg",
          },
          {
            "id": "22",
            "name": "Samsung",
            "category": "Smartphone & Tablet",
            "followers": 139,
            "followings": 50,
            "provider": "google",
            "identifier": "hello@gmail.com",
            "status": false,
            "privacy": false,
            "avatar": "/src/assets/images/users/user6-50x50.jpg",
          },
          {
            "id": "23",
            "name": "Apple",
            "category": "PC & Laptop",
            "followers": 89,
            "followings": 50,
            "provider": "google",
            "identifier": "hello@gmail.com",
            "status": false,
            "privacy": true,
            "avatar": "/src/assets/images/users/user7-50x50.jpg",
          },
          {
            "id": "24",
            "name": "Sony",
            "category": "Photography",
            "followers": 50,
            "followings": 50,
            "provider": "phone",
            "identifier": "hello@gmail.com",
            "status": false,
            "privacy": true,
            "avatar": "/src/assets/images/users/user4-50x50.jpg",
          },]);
      }

    }, 1000);
  }, [])


  const initTabulator = () => {
    if (tableRef.current) {
      tabulator.current = new Tabulator(tableRef.current, {
        // ajaxURL: "https://dummy-data.left4code.com",
        paginationMode: "local",
        filterMode: "local",
        sortMode: "local",
        printAsHtml: true,
        printStyled: true,
        dataLoader: true,
        dataLoaderLoading: '<div>hello</div>',
        pagination: true,
        paginationSize: 3,
        paginationSizeSelector: [3, 6, 9, 12],
        layout: "fitColumns",
        responsiveLayout: "collapse",
        placeholder: "No matching records found",
        columns: [
          {
            title: "",
            formatter: "responsiveCollapse",
            width: 40,
            minWidth: 30,
            hozAlign: "center",
            resizable: false,
            headerSort: false,
          },

          // For HTML table
          {
            title: "User Name",
            minWidth: 180,
            responsive: 0,
            field: "name",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return `<div class="flex items-center">
                <div class="w-9 h-9 image-fit zoom-in">
                  <img class="cursor-pointer rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]" alt="Tailwise - Admin Dashboard Template" src=${response.avatar}>
                </div>
                  <div class="ml-3.5">
                  <div class="font-medium">${response.name}</div>
                </div>
              </div>`;
            },
          },
          {
            title: "Provider",
            minWidth: 130,
            field: "provider",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
          },
          {
            title: "Identifier",
            minWidth: 150,
            field: "identifier",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            headerSort: false,
          },
          {
            title: "Following",
            minWidth: 150,
            field: "followers",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return `<div class="flex items-center">
                <div>
                  <div class="font-medium whitespace-nowrap">${response.followers}</div>
                </div>
                <div class="ml-3.5">
                  <div class="font-medium whitespace-nowrap">${response.followings}</div>
                </div>
              </div>`;
            },
          },
          {
            title: "Status",
            minWidth: 150,
            field: "status",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return `<div class="flex items-center lg:justify-center ${response.status ? "text-success" : "text-danger"
                }">
                <i data-lucide="check-square" class="w-3.5 h-3.5 stroke-[1.7]"></i>
                  <div class="ml-1.5 whitespace-nowrap">${response.status ? "Active" : "Inactive"
                }</div>
              </div>`;
            },
          },
          {
            title: "Privacy",
            minWidth: 150,
            field: "privacy",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return `<div class="flex items-center lg:justify-center ${response.privacy ? "text-success" : "text-danger"
                }">
                <i data-lucide="check-square" class="w-3.5 h-3.5 stroke-[1.7]"></i>
                  <div class="ml-1.5 whitespace-nowrap">${response.privacy ? "Public" : "Private"
                }</div>
              </div>`;
            },
          },
          {
            title: "Actions",
            minWidth: 200,
            field: "actions",
            responsive: 1,
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            headerSort: false,
            formatter(cell) {
              const response: Response = cell.getData();
              const a =
                stringToHTML(`<div class="flex items-center lg:justify-center">
                  <a class="flex items-center ${!response.status ? "text-black" : "text-danger"
                  }" href="javascript:;">
                    ${response.status ? "Disable" : "Active"}
                  </a>
                </div>`);
              a.addEventListener("click", function () {
                console.log(response.id);
              });
              return a;
            },
          },
        ],
      });
    }

    tabulator.current?.on("renderComplete", () => {
      createIcons({
        icons,
        attrs: {
          "stroke-width": 1.5,
        },
        nameAttr: "data-lucide",
      });
    });
  };

  // Redraw table onresize
  const reInitOnResizeWindow = () => {
    window.addEventListener("resize", () => {
      if (tabulator.current) {
        tabulator.current.redraw();
        createIcons({
          icons,
          attrs: {
            "stroke-width": 1.5,
          },
          nameAttr: "data-lucide",
        });
      }
    });
  };

  // Filter function
  const onFilter = () => {
    if (tabulator.current) {
      tabulator.current.setFilter(filter.field, filter.type, filter.value);
    }
  };

  // On reset filter
  const onResetFilter = () => {
    setFilter({
      ...filter,
      field: "name",
      type: "like",
      value: "",
    });
    onFilter();
  };

  useEffect(() => {
    initTabulator();
    reInitOnResizeWindow();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Users
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-3.5">
          <div className="flex flex-col box box--stacked">
            <div className="flex flex-col p-5 xl:items-center xl:flex-row gap-y-2">
              <form
                id="tabulator-html-filter-form"
                className="flex xl:flex-row flex-col border-dashed gap-x-5 gap-y-2 border border-slate-300/80 xl:border-0 rounded-[0.6rem] p-4 sm:p-5 xl:p-0"
                onSubmit={(e) => {
                  e.preventDefault();
                  onFilter();
                }}
              >
                <FormInline className="flex-col items-start xl:flex-row xl:items-center gap-y-2">
                  <FormLabel className="mr-3 whitespace-nowrap">
                    Search by
                  </FormLabel>
                  <FormSelect
                    id="tabulator-html-filter-field"
                    value={filter.field}
                    onChange={(e) => {
                      setFilter({
                        ...filter,
                        field: e.target.value,
                      });
                    }}
                    className=""
                  >
                    <option value="name">Name</option>
                    <option value="identifier">Identifier</option>
                  </FormSelect>
                </FormInline>
                <FormInline className="flex-col items-start xl:flex-row xl:items-center gap-y-2">
                  <FormLabel className="mr-3 whitespace-nowrap">Type</FormLabel>
                  <FormSelect
                    id="tabulator-html-filter-type"
                    value={filter.type}
                    onChange={(e) => {
                      setFilter({
                        ...filter,
                        type: e.target.value,
                      });
                    }}
                    className=""
                  >
                    <option value="like">like</option>
                    <option value="=">=</option>
                    <option value="<">&lt;</option>
                    <option value="<=">&lt;=</option>
                    <option value=">">&gt;</option>
                    <option value=">=">&gt;=</option>
                    <option value="!=">!=</option>
                  </FormSelect>
                </FormInline>
                <FormInline className="flex-col items-start xl:flex-row xl:items-center gap-y-2">
                  <FormLabel className="mr-3 whitespace-nowrap">
                    Keywords
                  </FormLabel>
                  <FormInput
                    id="tabulator-html-filter-value"
                    value={filter.value}
                    onChange={(e) => {
                      setFilter({
                        ...filter,
                        value: e.target.value,
                      });
                    }}
                    type="text"
                    className=""
                    placeholder="Search..."
                  />
                </FormInline>
                <div className="flex flex-col gap-2 mt-2 sm:flex-row xl:mt-0">
                  <Button
                    id="tabulator-html-filter-go"
                    variant="outline-primary"
                    type="button"
                    className="w-full sm:w-auto bg-primary/5 border-primary/20"
                    onClick={onFilter}
                  >
                    Search
                  </Button>
                  <Button
                    id="tabulator-html-filter-reset"
                    variant="outline-secondary"
                    type="button"
                    className="w-full sm:w-auto bg-slate-50/50"
                    onClick={onResetFilter}
                  >
                    Reset
                  </Button>
                </div>
              </form>
            </div>
            <div className="pb-5">
              <div className="overflow-x-auto scrollbar-hidden">
                <div id="tabulator" ref={tableRef}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
