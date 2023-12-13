import Lucide from "../../base-components/Lucide";
import { Menu, Popover } from "../../base-components/Headless";
import Pagination from "../../base-components/Pagination";
import { FormCheck, FormInput, FormSelect } from "../../base-components/Form";
import Tippy from "../../base-components/Tippy";
import users from "../../fakers/users";
import Button from "../../base-components/Button";
import Table from "../../base-components/Table";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="flex flex-col md:h-10 gap-y-3 md:items-center md:flex-row">
          <div className="text-base font-medium group-[.mode--light]:text-white">
            Users
          </div>
          <div className="flex flex-col sm:flex-row gap-x-3 gap-y-2 md:ml-auto">
            <Button
              variant="primary"
              className="group-[.mode--light]:!bg-white/[0.12] group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-transparent"
            >
              <Lucide icon="PenLine" className="stroke-[1.3] w-4 h-4 mr-2" />{" "}
              Add New User
            </Button>
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-3.5">
          <div className="flex flex-col p-5 box box--stacked">
            <div className="grid grid-cols-4 gap-5">
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">Registered Users</div>
                <div className="mt-1.5 text-2xl font-medium">457,204</div>
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                  <div className="flex items-center border border-danger/10 bg-danger/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-danger">
                    3%
                    <Lucide
                      icon="ChevronDown"
                      className="w-4 h-4 ml-px stroke-[1.5]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">Active Users</div>
                <div className="mt-1.5 text-2xl font-medium">122,721</div>
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                  <div className="flex items-center border border-success/10 bg-success/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-success">
                    2%
                    <Lucide
                      icon="ChevronUp"
                      className="w-4 h-4 ml-px stroke-[1.5]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">New Users</div>
                <div className="mt-1.5 text-2xl font-mediumm">489,223</div>
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                  <div className="flex items-center border border-danger/10 bg-danger/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-danger">
                    3%
                    <Lucide
                      icon="ChevronDown"
                      className="w-4 h-4 ml-px stroke-[1.5]"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-4 md:col-span-2 xl:col-span-1 p-5 border border-dashed rounded-[0.6rem] border-slate-300/80 box shadow-sm">
                <div className="text-base text-slate-500">Login Activity</div>
                <div className="mt-1.5 text-2xl font-mediumm">411,259</div>
                <div className="absolute inset-y-0 right-0 flex flex-col justify-center mr-5">
                  <div className="flex items-center border border-success/10 bg-success/10 rounded-full pl-[7px] pr-1 py-[2px] text-xs font-medium text-success">
                    8%
                    <Lucide
                      icon="ChevronUp"
                      className="w-4 h-4 ml-px stroke-[1.5]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col box box--stacked">
            <div className="flex flex-col p-5 sm:items-center sm:flex-row gap-y-2">
              <div>
                <div className="relative">
                  <Lucide
                    icon="Search"
                    className="absolute inset-y-0 left-0 z-10 w-4 h-4 my-auto ml-3 stroke-[1.3] text-slate-500"
                  />
                  <FormInput
                    type="text"
                    placeholder="Search users..."
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
                              Position
                            </div>
                            <FormSelect className="flex-1 mt-2">
                              {_.take(users.fakeUsers(), 5).map(
                                (faker, fakerKey) => (
                                  <option key={fakerKey} value={faker.position}>
                                    {faker.position}
                                  </option>
                                )
                              )}
                            </FormSelect>
                          </div>
                          <div className="mt-3">
                            <div className="text-left text-slate-500">
                              Department
                            </div>
                            <FormSelect className="flex-1 mt-2">
                              {_.take(users.fakeUsers(), 5).map(
                                (faker, fakerKey) => (
                                  <option
                                    key={fakerKey}
                                    value={faker.department}
                                  >
                                    {faker.department}
                                  </option>
                                )
                              )}
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
                      Name
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                      Position
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t w-52 bg-slate-50 border-slate-200/60 text-slate-500">
                      Profile Completeness
                    </Table.Td>
                    <Table.Td className="py-4 font-medium text-center border-t bg-slate-50 border-slate-200/60 text-slate-500">
                      Status
                    </Table.Td>
                    <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                      Joined Date
                    </Table.Td>
                    <Table.Td className="w-20 py-4 font-medium text-center border-t bg-slate-50 border-slate-200/60 text-slate-500">
                      Action
                    </Table.Td>
                  </Table.Tr>
                </Table.Thead>
                <Table.Tbody>
                  {_.take(users.fakeUsers(), 10).map((faker, fakerKey) => (
                    <Table.Tr key={fakerKey} className="[&_td]:last:border-b-0">
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <FormCheck.Input type="checkbox" />
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed w-80 dark:bg-darkmode-600">
                        <div className="flex items-center">
                          <div className="w-9 h-9 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="Tailwise - Admin Dashboard Template"
                              className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                              src={faker.photo}
                              content={faker.name}
                            />
                          </div>
                          <div className="ml-3.5">
                            <a
                              href=""
                              className="font-medium whitespace-nowrap"
                            >
                              {faker.name}
                            </a>
                            <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                              {faker.email}
                            </div>
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <a href="" className="font-medium whitespace-nowrap">
                          {faker.position}
                        </a>
                        <div className="text-slate-500 text-xs whitespace-nowrap mt-0.5">
                          {faker.department}
                        </div>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <div className="w-40">
                          <div className="text-xs text-slate-500">
                            {_.random(50, 100)}%
                          </div>
                          <div className="flex h-1 border rounded-sm bg-slate-50 mt-1.5">
                            <div
                              className={clsx([
                                "first:rounded-l-sm last:rounded-r-sm border border-primary/20 -m-px bg-primary/40",
                                [
                                  "w-[35%]",
                                  "w-[45%]",
                                  "w-[55%]",
                                  "w-[65%]",
                                  "w-[75%]",
                                ][_.random(0, 4)],
                              ])}
                            ></div>
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <div
                          className={clsx([
                            "flex items-center justify-center",
                            ["text-success", "text-danger"][_.random(0, 1)],
                          ])}
                        >
                          <Lucide
                            icon="Database"
                            className="w-3.5 h-3.5 stroke-[1.7]"
                          />
                          <div className="ml-1.5 whitespace-nowrap">
                            {_.random(0, 1) ? "Active" : "Inactive"}
                          </div>
                        </div>
                      </Table.Td>
                      <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                        <div className="whitespace-nowrap">
                          {faker.joinedDate}
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
                  ))}
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
