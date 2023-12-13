import Lucide from "../../base-components/Lucide";
import { Menu, Popover } from "../../base-components/Headless";
import Pagination from "../../base-components/Pagination";
import { FormInput, FormSelect, FormCheck } from "../../base-components/Form";
import Tippy from "../../base-components/Tippy";
import departments from "../../fakers/departments";
import Button from "../../base-components/Button";
import { Tab } from "../../base-components/Headless";
import Table from "../../base-components/Table";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <Tab.Group>
          <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
            <div className="text-base font-medium group-[.mode--light]:text-white">
              Departments
            </div>
            <Tab.List
              variant="boxed-tabs"
              className="w-auto md:ml-auto bg-white box rounded-[0.6rem] border-slate-200 group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!border-transparent"
            >
              <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current group-[.mode--light]:bg-transparent group-[.mode--light]:[&[aria-selected='true']_button]:bg-white/[0.12] group-[.mode--light]:[&[aria-selected='true']_button]:border-transparent">
                <Tab.Button
                  className="w-24 text-slate-500 whitespace-nowrap rounded-[0.6rem] group-[.mode--light]:text-slate-200"
                  as="button"
                >
                  Daily
                </Tab.Button>
              </Tab>
              <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current group-[.mode--light]:bg-transparent group-[.mode--light]:[&[aria-selected='true']_button]:bg-white/[0.12] group-[.mode--light]:[&[aria-selected='true']_button]:border-transparent">
                <Tab.Button
                  className="w-24 text-slate-500 whitespace-nowrap rounded-[0.6rem] group-[.mode--light]:text-slate-200"
                  as="button"
                >
                  Monthly
                </Tab.Button>
              </Tab>
              <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current group-[.mode--light]:bg-transparent group-[.mode--light]:[&[aria-selected='true']_button]:bg-white/[0.12] group-[.mode--light]:[&[aria-selected='true']_button]:border-transparent">
                <Tab.Button
                  className="w-24 text-slate-500 whitespace-nowrap rounded-[0.6rem] group-[.mode--light]:text-slate-200"
                  as="button"
                >
                  Yearly
                </Tab.Button>
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels className="mt-3.5 box flex flex-col box--stacked">
            <Tab.Panel>
              <div className="flex flex-col p-5 sm:items-center sm:flex-row gap-y-2">
                <div>
                  <div className="relative">
                    <Lucide
                      icon="Search"
                      className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                    />
                    <FormInput
                      type="text"
                      placeholder="Search departments..."
                      className="pl-9 sm:w-64 rounded-[0.5rem]"
                    />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 sm:ml-auto">
                  <Menu>
                    <Menu.Button
                      as={Button}
                      variant="outline-secondary"
                      className="w-full sm:w-auto"
                    >
                      <Lucide
                        icon="Download"
                        className="stroke-[1.3] w-4 h-4 mr-2"
                      />
                      Export
                      <Lucide
                        icon="ChevronDown"
                        className="stroke-[1.3] w-4 h-4 ml-2"
                      />
                    </Menu.Button>
                    <Menu.Items className="w-40">
                      <Menu.Item>
                        <Lucide icon="FileBarChart" className="w-4 h-4 mr-2" />{" "}
                        PDF
                      </Menu.Item>
                      <Menu.Item>
                        <Lucide icon="FileBarChart" className="w-4 h-4 mr-2" />
                        CSV
                      </Menu.Item>
                    </Menu.Items>
                  </Menu>
                  <Popover className="inline-block">
                    {({ close }) => (
                      <>
                        <Popover.Button
                          as={Button}
                          variant="outline-secondary"
                          className="w-full sm:w-auto"
                        >
                          <Lucide
                            icon="ArrowDownWideNarrow"
                            className="stroke-[1.3] w-4 h-4 mr-2"
                          />
                          Filter
                          <div className="flex items-center justify-center h-5 px-1.5 ml-2 text-xs font-medium border rounded-full bg-slate-100">
                            3
                          </div>
                        </Popover.Button>
                        <Popover.Panel placement="bottom-end">
                          <div className="p-2">
                            <div>
                              <div className="text-left text-slate-500">
                                Location
                              </div>
                              <FormSelect className="flex-1 mt-2">
                                {_.take(departments.fakeDepartments(), 5).map(
                                  (faker, fakerKey) => (
                                    <option
                                      key={fakerKey}
                                      value={faker.location.image}
                                    >
                                      {faker.location.name}
                                    </option>
                                  )
                                )}
                              </FormSelect>
                            </div>
                            <div className="mt-3">
                              <div className="text-left text-slate-500">
                                Employees
                              </div>
                              <FormSelect className="flex-1 mt-2">
                                <option value="1 - 50">1 - 50</option>
                                <option value="51 - 100">50 - 100</option>
                                <option value="> 100">&gt; 100</option>
                              </FormSelect>
                            </div>
                            <div className="flex items-center mt-4">
                              <Button
                                variant="secondary"
                                onClick={() => {
                                  close();
                                }}
                                className="w-32 ml-auto"
                              >
                                Close
                              </Button>
                              <Button variant="primary" className="w-32 ml-2">
                                Apply
                              </Button>
                            </div>
                          </div>
                        </Popover.Panel>
                      </>
                    )}
                  </Popover>
                </div>
              </div>
              <div className="overflow-auto xl:overflow-visible">
                <Table className="border-b border-slate-200/60">
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Td className="w-5 py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                        <FormCheck.Input type="checkbox" />
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                        Department
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                        Location
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                        Employees
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                        Budget
                      </Table.Td>
                      <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                        Review Rate
                      </Table.Td>
                      <Table.Td className="w-20 py-4 font-medium text-center border-t bg-slate-50 border-slate-200/60 text-slate-500">
                        Action
                      </Table.Td>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {_.take(departments.fakeDepartments(), 10).map(
                      (faker, fakerKey) => (
                        <Table.Tr
                          key={fakerKey}
                          className="[&_td]:last:border-b-0"
                        >
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <FormCheck.Input type="checkbox" />
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <a
                              href=""
                              className="font-medium whitespace-nowrap"
                            >
                              {faker.name}
                            </a>
                            <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                              {faker.head}
                            </div>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <div className="whitespace-nowrap">
                              <div className="flex items-center gap-2.5">
                                <div className="w-[22px] h-[22px] overflow-hidden rounded-full border-2 image-fit zoom-in border-slate-200/70 box">
                                  <Tippy
                                    as="img"
                                    alt="Tailwise - Admin Dashboard Template"
                                    src={faker.location.image}
                                    content={faker.location.name}
                                  />
                                </div>
                                <a href="">{faker.location.name}</a>
                              </div>
                            </div>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <div className="whitespace-nowrap">
                              {faker.employees}
                            </div>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <div className="whitespace-nowrap">
                              <div className="flex items-center">
                                <div>{faker.budget}</div>
                                <div
                                  className={clsx([
                                    "flex items-center text-xs ml-2",
                                    ["text-success", "text-danger"][
                                      _.random(0, 1)
                                    ],
                                  ])}
                                >
                                  <span className="-mt-px">
                                    {_.random(1, 5)}%
                                  </span>
                                  <Lucide
                                    icon="ChevronUp"
                                    className="w-4 h-4 ml-px -mr-1"
                                  />
                                </div>
                              </div>
                            </div>
                          </Table.Td>
                          <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                            <div className="flex items-center">
                              <div className="flex items-center">
                                <Lucide
                                  icon="Star"
                                  className="w-3.5 h-3.5 mr-1 text-pending fill-pending/30"
                                />
                                <Lucide
                                  icon="Star"
                                  className="w-3.5 h-3.5 mr-1 text-pending fill-pending/30"
                                />
                                <Lucide
                                  icon="Star"
                                  className="w-3.5 h-3.5 mr-1 text-pending fill-pending/30"
                                />
                                <Lucide
                                  icon="Star"
                                  className="w-3.5 h-3.5 mr-1 text-pending fill-pending/30"
                                />
                                <Lucide
                                  icon="Star"
                                  className="w-3.5 h-3.5 mr-1 text-slate-400 fill-slate/30"
                                />
                              </div>
                              <div className="ml-1 text-xs text-slate-500">
                                ({_.random(3, 4)}.{_.random(1, 5)}+)
                              </div>
                            </div>
                          </Table.Td>
                          <Table.Td className="relative py-4 border-dashed dark:bg-darkmode-600">
                            <div className="flex items-center justify-center">
                              <Menu className="h-5">
                                <Menu.Button className="w-5 h-5 text-slate-500">
                                  <Lucide
                                    icon="MoreVertical"
                                    className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                                  />
                                </Menu.Button>
                                <Menu.Items className="w-40">
                                  <Menu.Item>
                                    <Lucide
                                      icon="CheckSquare"
                                      className="w-4 h-4 mr-2"
                                    />{" "}
                                    Edit
                                  </Menu.Item>
                                  <Menu.Item className="text-danger">
                                    <Lucide
                                      icon="Trash2"
                                      className="w-4 h-4 mr-2"
                                    />
                                    Delete
                                  </Menu.Item>
                                </Menu.Items>
                              </Menu>
                            </div>
                          </Table.Td>
                        </Table.Tr>
                      )
                    )}
                  </Table.Tbody>
                </Table>
              </div>
              <div className="flex flex-col-reverse flex-wrap items-center p-5 flex-reverse gap-y-2 sm:flex-row">
                <Pagination className="flex-1 w-full mr-auto sm:w-auto">
                  <Pagination.Link>
                    <Lucide icon="ChevronsLeft" className="w-4 h-4" />
                  </Pagination.Link>
                  <Pagination.Link>
                    <Lucide icon="ChevronLeft" className="w-4 h-4" />
                  </Pagination.Link>
                  <Pagination.Link>...</Pagination.Link>
                  <Pagination.Link>1</Pagination.Link>
                  <Pagination.Link active>2</Pagination.Link>
                  <Pagination.Link>3</Pagination.Link>
                  <Pagination.Link>...</Pagination.Link>
                  <Pagination.Link>
                    <Lucide icon="ChevronRight" className="w-4 h-4" />
                  </Pagination.Link>
                  <Pagination.Link>
                    <Lucide icon="ChevronsRight" className="w-4 h-4" />
                  </Pagination.Link>
                </Pagination>
                <FormSelect className="sm:w-20 rounded-[0.5rem]">
                  <option>10</option>
                  <option>25</option>
                  <option>35</option>
                  <option>50</option>
                </FormSelect>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Main;
