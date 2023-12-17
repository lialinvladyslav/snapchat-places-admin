import Button from "../../base-components/Button";
import {
  FormInline,
  FormInput,
  FormLabel,
  FormSelect,
} from "../../base-components/Form";
import { useEffect, useRef, createRef, useState } from "react";
import { createIcons, icons } from "lucide";
import { TabulatorFull as Tabulator } from "tabulator-tables";
import { Dialog } from "../../base-components/Headless";
import Notification from "../../base-components/Notification";
import { NotificationElement } from "../../base-components/Notification";
import Lucide from "../../base-components/Lucide";
import firebase from "../../../firebase-config";
import { getFunctions, httpsCallable, connectFunctionsEmulator } from "firebase/functions";
import TinySlider from "../../base-components/TinySlider";
import logoImage from "../../assets/images/logo/logo_white.png";

const functions = getFunctions(firebase);

interface Response {
  id?: string;
  name?: string;
  formattedAddress?: string;
  primaryType?: string;
  followings?: number;
  lat?: string;
  lng?: string;
  url?: string;
}

interface ResultData {
  places: Response[];
}

interface Story {
  storyKey: string;
  userName: string;
  userAvatar: string;
  url: string;
  contentType: string;
}

interface StoriesData {
  stories: Story[];
}

function Main() {
  const tableRef = createRef<HTMLDivElement>();
  const tabulator = useRef<Tabulator>();
  const [filter, setFilter] = useState({
    field: "name",
    type: "like",
    value: "",
  });
  const [placesData, setPlacesData] = useState<Array<Response>>([])
  const [storiesData, setStoriesData] = useState<Array<Story>>([])
  const [showImages, setShowImages] = useState(false);


  const successNotification = useRef<NotificationElement>();
  const successNotificationToggle = () => {
    // Show notification
    successNotification.current?.showToast();
  };
  const showImageModal = (placeId?: string) => {
    const getPlaceStories = httpsCallable(functions, 'getPlaceStories');
    getPlaceStories({ placeId: placeId }).then(
      result => {
        const typedResult = result.data as StoriesData;
        setStoriesData(typedResult.stories);
        setShowImages(true);
      }
    ).catch(err => {
      // Getting the error code
      console.error(`Error code: ${err.code}`);
      console.error(`Error message: ${err.message}`);
    });
  }

  const deleteStory = (storyKey: string) => {

    const deleteStory = httpsCallable(functions, 'deleteStory');
    deleteStory({ storyKey: storyKey }).then(
      result => {
        setShowImages(false);
        successNotificationToggle();
      }
    ).catch(err => {
      // Getting the error code
      console.error(`Error code: ${err.code}`);
      console.error(`Error message: ${err.message}`);
    });
  }


  useEffect(() => {
    const getAllPlaces = httpsCallable(functions, 'getAllPlaces');
    getAllPlaces().then(
      result => {
        const typedResult = result.data as ResultData;
        if (tabulator.current) {
          setPlacesData(typedResult.places);
        }
      }
    ).catch(err => {
      // Getting the error code
      console.error(`Error code: ${err.code}`);
      console.error(`Error message: ${err.message}`);
    });
  }, [])

  useEffect(() => {
    if (tabulator.current) {
      tabulator.current.setData(placesData);
    }
  }, [placesData])

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
        pagination: true,
        paginationSize: 3,
        paginationSizeSelector: [3, 6, 9, 12],
        layout: "fitColumns",
        responsiveLayout: "collapse",
        placeholder: "Loading Data",
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
            title: "Business Name",
            minWidth: 200,
            responsive: 0,
            field: "name",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return `<div class="flex items-center">
                <div class="w-9 h-9 image-fit">
                  <img 
                    class="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)]" 
                    alt="Snapchat" 
                    src=${response.url != "" ? response.url : logoImage}>
                </div>
                  <div class="ml-3.5">
                  <div class="font-medium" style="white-space:normal;">${response.name}</div>
                </div>
              </div>`;
            },
          },
          {
            title: "Address",
            minWidth: 250,
            field: "formattedAddress",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return `<div class="flex items-center">
                <div>
                  <div class="font-medium" style="white-space:normal;">${response.formattedAddress}</div>
                </div>
              </div>`;
            },
          },
          {
            title: "Business Type",
            minWidth: 150,
            field: "primaryType",
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
            field: "followings",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return `<div class="flex items-center">
                <div>
                  <div class="font-medium whitespace-nowrap">${response.followings}</div>
                </div>
              </div>`;
            },
          },
          {
            title: "Location",
            minWidth: 250,
            field: "lat",
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            print: false,
            download: false,
            formatter(cell) {
              const response: Response = cell.getData();
              return `<div>
                <div class="font-medium whitespace-nowrap">${response.lat}</div>
                <div class="font-medium whitespace-nowrap mt-1">${response.lng}</div>
              </div>`;
            },
          },
          {
            title: "Stories",
            minWidth: 100,
            field: "stories",
            responsive: 1,
            hozAlign: "center",
            headerHozAlign: "center",
            vertAlign: "middle",
            headerSort: false,
            cellClick: function (e, cell) {
              const response: Response = cell.getData();
              showImageModal(response.id);
            },
            formatter(cell) {
              const response: Response = cell.getData();
              return `<div class="flex items-center lg:justify-center">
                  <a class="flex items-center  "text-black"}" href="javascript:;">
                    <i data-lucide="image" class="w-3.5 h-3.5 stroke-[1.7] mr-1.5"></i>
                  </a>
                </div>`;
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
      <Notification getRef={(el) => {
        successNotification.current = el;
      }}
        className="flex"
      >
        <Lucide icon="CheckCircle" className="text-success" />
        <div className="ml-4 mr-4">
          <div className="font-medium">Success</div>
          <div className="mt-1 text-slate-500">
            The story has deleted sussessfully
          </div>
        </div>
      </Notification>
      <Dialog size="xl" open={showImages} onClose={() => {
        setShowImages(false);
      }}
      >
        <Dialog.Panel className="p-10 mt-24">
          <div className="mx-6">
            <TinySlider options={{
              mode: 'gallery',
              controls: true,
              nav: true,
              autoplay: false,
              items: 1,
              responsive: {
                960: {
                  items: 3,
                },
                600: {
                  items: 2,
                },
              },
            }}>
              {storiesData.map((story, index) => {
                return (
                  <div className=" px-2" key={index}>
                    <div className="h-64 overflow-hidden rounded-md image-fit">
                      {
                        story.contentType == "image/jpeg"
                          ? <img alt="Story" src={story.url} />
                          : <video controls className="h-full aspect-[1]"> <source src={story.url} type="video/mp4" /> </video>
                      }
                    </div>
                    <div className="flex items-center justify-center mt-5">
                      <div className="w-9 h-9 image-fit">
                        <img
                          className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)]"
                          alt="userAvatar" src={story.userAvatar} />
                      </div>
                      <div className="ml-3.5">
                        <div className="font-medium">{story.userName}</div>
                      </div>
                    </div>
                    <div className="flex items-center text-danger justify-center mt-3 cursor-pointer">
                      <Lucide icon="Trash2" className="w-3.5 h-3.5 stroke-[1.7] mr-1.5" />
                      <div onClick={() => { deleteStory(story.storyKey) }} className="ml-1.5 whitespace-nowrap">Delete</div>
                    </div>

                  </div>
                );
              })}
            </TinySlider>
          </div>
        </Dialog.Panel>
      </Dialog>
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Places
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
                    <option value="formattedAddress">Address</option>
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
