import Lucide from "../../base-components/Lucide";
import { Menu, Popover } from "../../base-components/Headless";
import { FormCheck, FormInput } from "../../base-components/Form";
import FileIcon from "../../base-components/FileIcon";
import Tippy from "../../base-components/Tippy";
import activities from "../../fakers/activities";
import users from "../../fakers/users";
import messages from "../../fakers/messages";
import events from "../../fakers/events";
import projectDetails from "../../fakers/project-details";
import achievements from "../../fakers/achievements";
import Button from "../../base-components/Button";
import Table from "../../base-components/Table";
import { Tab } from "../../base-components/Headless";
import ImageZoom from "../../base-components/ImageZoom";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (queryParams.get("page") == "events") {
      setSelectedIndex(1);
    } else if (queryParams.get("page") == "achievements") {
      setSelectedIndex(2);
    } else if (queryParams.get("page") == "contacts") {
      setSelectedIndex(3);
    } else if (queryParams.get("page") == "default") {
      setSelectedIndex(4);
    } else {
      setSelectedIndex(0);
    }
  }, [search]);

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12">
        <div className="p-1.5 box flex flex-col box--stacked">
          <div className="h-48 relative w-full rounded-[0.6rem] bg-gradient-to-b from-theme-1/95 to-theme-2/95">
            <div
              className={clsx([
                "w-full h-full relative overflow-hidden",
                "before:content-[''] before:absolute before:inset-0 before:bg-texture-white before:-mt-[50rem]",
                "after:content-[''] after:absolute after:inset-0 after:bg-texture-white after:-mt-[50rem]",
              ])}
            ></div>
            <div className="absolute inset-x-0 top-0 w-32 h-32 mx-auto mt-24">
              <div className="w-full h-full overflow-hidden border-[6px] box border-white rounded-full image-fit">
                <img
                  alt="Tailwise - Admin Dashboard Template"
                  src={users.fakeUsers()[0].photo}
                />
              </div>
              <div className="absolute bottom-0 right-0 w-5 h-5 mb-2.5 mr-2.5 border-2 border-white rounded-full bg-success box"></div>
            </div>
          </div>
          <div className="rounded-[0.6rem] bg-slate-50 pt-12 pb-6">
            <div className="flex items-center justify-center text-xl font-medium">
              {users.fakeUsers()[0].name}
              <Lucide
                icon="BadgeCheck"
                className="w-5 h-5 ml-2 text-blue-500 fill-blue-500/30"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-y-2 gap-x-5 mt-2.5">
              <div className="flex items-center text-slate-500">
                <Lucide
                  icon="Briefcase"
                  className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                />
                {users.fakeUsers()[0].department}
              </div>
              <div className="flex items-center text-slate-500">
                <Lucide
                  icon="MountainSnow"
                  className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                />
                <a href="">{users.fakeUsers()[0].location}</a>
              </div>
              <div className="flex items-center text-slate-500">
                <Lucide
                  icon="Signal"
                  className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                />
                {users.fakeUsers()[0].phone}
              </div>
            </div>
          </div>
        </div>
        <Tab.Group
          className="mt-10"
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <div className="flex flex-col 2xl:items-center 2xl:flex-row gap-y-3">
            <Tab.List
              variant="boxed-tabs"
              className="flex-col sm:flex-row w-full 2xl:w-auto mr-auto bg-white box rounded-[0.6rem] border-slate-200"
            >
              <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current">
                <Tab.Button
                  className="w-full xl:w-40 py-2.5 text-slate-500 whitespace-nowrap rounded-[0.6rem] flex items-center justify-center text-[0.94rem]"
                  as="button"
                >
                  Profile
                </Tab.Button>
              </Tab>
              <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current">
                <Tab.Button
                  className="w-full xl:w-40 py-2.5 text-slate-500 whitespace-nowrap rounded-[0.6rem] flex items-center justify-center text-[0.94rem]"
                  as="button"
                >
                  Events
                  <div className="flex items-center justify-center h-5 px-1.5 ml-2 text-xs font-medium border rounded-full text-theme-1/70 bg-theme-1/10 border-theme-1/10">
                    7
                  </div>
                </Tab.Button>
              </Tab>
              <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current">
                <Tab.Button
                  className="w-full xl:w-40 py-2.5 text-slate-500 whitespace-nowrap rounded-[0.6rem] flex items-center justify-center text-[0.94rem]"
                  as="button"
                >
                  Achievements
                </Tab.Button>
              </Tab>
              <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current">
                <Tab.Button
                  className="w-full xl:w-40 py-2.5 text-slate-500 whitespace-nowrap rounded-[0.6rem] flex items-center justify-center text-[0.94rem]"
                  as="button"
                >
                  Contacts
                  <div className="flex items-center justify-center h-5 px-1.5 ml-2 text-xs font-medium border rounded-full text-theme-1/70 bg-theme-1/10 border-theme-1/10">
                    5
                  </div>
                </Tab.Button>
              </Tab>
              <Tab className="bg-slate-50 first:rounded-l-[0.6rem] last:rounded-r-[0.6rem] [&[aria-selected='true']_button]:text-current">
                <Tab.Button
                  className="w-full xl:w-40 py-2.5 text-slate-500 whitespace-nowrap rounded-[0.6rem] flex items-center justify-center text-[0.94rem]"
                  as="button"
                >
                  Default
                </Tab.Button>
              </Tab>
            </Tab.List>
            <div className="flex items-center gap-3 2xl:ml-auto">
              <Menu className="mr-auto 2xl:mr-0">
                <Menu.Button
                  as={Button}
                  variant="secondary"
                  className="rounded-[0.6rem] bg-white py-3"
                >
                  <Lucide
                    icon="Download"
                    className="stroke-[1.3] w-4 h-4 mr-2"
                  />
                  <span className="truncate max-w-[3.8rem] sm:max-w-none">
                    Share Profile
                  </span>
                  <Lucide
                    icon="ChevronDown"
                    className="stroke-[1.3] w-4 h-4 ml-2"
                  />
                </Menu.Button>
                <Menu.Items className="w-48">
                  <Menu.Item>
                    <Lucide icon="Linkedin" className="w-4 h-4 mr-2" /> Share to
                    Linkedin
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Facebook" className="w-4 h-4 mr-2" />
                    Share to Facebook
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Twitter" className="w-4 h-4 mr-2" />
                    Share to Twitter
                  </Menu.Item>
                </Menu.Items>
              </Menu>
              <Popover className="inline-block">
                {({ close }) => (
                  <>
                    <Popover.Button
                      as={Button}
                      variant="outline-secondary"
                      className="rounded-[0.6rem] bg-white py-3"
                    >
                      <Lucide
                        icon="ArrowDownWideNarrow"
                        className="stroke-[1.3] w-4 h-4 mr-2"
                      />
                      Teams
                      <div className="flex items-center justify-center h-5 px-1.5 ml-2 text-xs font-medium border rounded-full bg-slate-100">
                        42
                      </div>
                    </Popover.Button>
                    <Popover.Panel placement="bottom-end">
                      <div className="p-2">
                        <div>
                          <div className="text-left">Invite by Email</div>
                          <FormInput
                            className="flex-1 mt-2"
                            placeholder={users.fakeUsers()[1].email}
                            type="text"
                          />
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
                            Search
                          </Button>
                        </div>
                      </div>
                    </Popover.Panel>
                  </>
                )}
              </Popover>
              <Menu>
                <Menu.Button
                  as={Button}
                  variant="secondary"
                  className="rounded-[0.6rem] bg-white py-3 text-[0.94rem]"
                >
                  <div className="flex items-center justify-center w-5 h-5">
                    <Lucide
                      icon="MoreVertical"
                      className="stroke-[1.3] w-4 h-4"
                    />
                  </div>
                </Menu.Button>
                <Menu.Items className="w-44">
                  <Menu.Item>
                    <Lucide icon="Settings" className="w-4 h-4 mr-2" /> Settings
                  </Menu.Item>
                  <Menu.Item>
                    <Lucide icon="Contact" className="w-4 h-4 mr-2" /> Contacts
                  </Menu.Item>
                  <Menu.Item className="text-danger">
                    <Lucide icon="Lock" className="w-4 h-4 mr-2" />
                    Lock Account
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
          <Tab.Panels>
            <Tab.Panel>
              <div className="grid grid-cols-12 gap-y-7 gap-x-6 mt-3.5">
                <div className="col-span-12 xl:col-span-8">
                  <div className="flex flex-col gap-y-7">
                    <div className="flex flex-col p-5 box box--stacked">
                      <div className="pb-5 mb-5 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                        Activity Feed
                      </div>
                      <div className="-my-3">
                        <div className="relative overflow-hidden before:content-[''] before:absolute before:w-px before:bg-slate-200/60 before:left-0 before:inset-y-0 before:dark:bg-darkmode-400 before:ml-[14px]">
                          {_.take(activities.fakeActivities(), 5).map(
                            (faker, fakerKey) => (
                              <div
                                className={clsx([
                                  "mb-3 last:mb-0 relative",
                                  "first:before:content-[''] first:before:h-1/2 first:before:w-5 first:before:bg-white first:before:absolute",
                                  "last:after:content-[''] last:after:h-1/2 last:after:w-5 last:after:bg-white last:after:absolute last:after:bottom-0",
                                ])}
                                key={fakerKey}
                              >
                                <div
                                  className={clsx([
                                    "px-4 py-3 ml-8",
                                    "before:content-[''] before:ml-1 before:absolute before:w-5 before:h-5 before:bg-slate-200 before:rounded-full before:inset-y-0 before:my-auto before:left-0 before:dark:bg-darkmode-300 before:z-10",
                                    "after:content-[''] after:absolute after:w-1.5 after:h-1.5 after:bg-slate-500 after:rounded-full after:inset-y-0 after:my-auto after:left-0 after:ml-[11px] after:dark:bg-darkmode-200 after:z-10",
                                  ])}
                                >
                                  <a
                                    href=""
                                    className="font-medium text-primary"
                                  >
                                    {faker.activity}
                                  </a>
                                  <div className="flex flex-col sm:flex-row sm:items-center gap-y-1.5 mt-1.5 leading-relaxed text-slate-500 text-[0.8rem]">
                                    {faker.activityDetails}
                                    <span
                                      className={clsx([
                                        "group flex items-center text-xs font-medium rounded-md sm:ml-2 border px-1.5 py-px mr-auto sm:mr-0",
                                        "[&.primary]:text-primary [&.primary]:bg-primary/10 [&.primary]:border-primary/10",
                                        "[&.success]:text-success [&.success]:bg-success/10 [&.success]:border-success/10",
                                        "[&.warning]:text-warning [&.warning]:bg-warning/10 [&.warning]:border-warning/10",
                                        "[&.info]:text-info [&.info]:bg-info/10 [&.info]:border-info/10",
                                        [
                                          "primary",
                                          "success",
                                          "warning",
                                          "info",
                                        ][_.random(0, 3)],
                                      ])}
                                    >
                                      <span className="w-1.5 h-1.5 mr-1.5 rounded-full group-[.success]:bg-success/80 group-[.primary]:bg-primary/80 group-[.warning]:bg-warning/80 group-[.info]:bg-info/80"></span>
                                      <span className="-mt-px">
                                        {faker.statusBadge}
                                      </span>
                                    </span>
                                  </div>
                                  {faker.uploadedFiles && (
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-3.5">
                                      {faker.uploadedFiles.map(
                                        (faker, fakerKey) => (
                                          <div
                                            key={fakerKey}
                                            className="flex items-center pl-5 pr-2.5 py-4 border rounded-[0.6rem] border-slate-200/80 bg-slate-50/70"
                                          >
                                            <FileIcon
                                              className="w-10"
                                              variant="directory"
                                            />
                                            <div className="ml-3.5 mr-auto">
                                              <div className="max-w-[8rem] font-medium truncate text-primary">
                                                {faker.filename}
                                              </div>
                                              <div className="mt-1 text-xs text-slate-500">
                                                {faker.size}
                                              </div>
                                            </div>
                                            <Menu>
                                              <Menu.Button className="w-5 h-5 text-slate-500">
                                                <Lucide
                                                  icon="MoreVertical"
                                                  className="w-4 h-4"
                                                />
                                              </Menu.Button>
                                              <Menu.Items className="w-40">
                                                <Menu.Item>
                                                  <Lucide
                                                    icon="Copy"
                                                    className="w-4 h-4 mr-2"
                                                  />{" "}
                                                  Copy Link
                                                </Menu.Item>
                                                <Menu.Item>
                                                  <Lucide
                                                    icon="Trash"
                                                    className="w-4 h-4 mr-2"
                                                  />
                                                  Delete
                                                </Menu.Item>
                                              </Menu.Items>
                                            </Menu>
                                          </div>
                                        )
                                      )}
                                    </div>
                                  )}
                                  {faker.images && (
                                    <div className="sm:w-1/2 my-3.5 p-1 border rounded-[0.6rem] bg-slate-50/80">
                                      <div className="grid grid-cols-1 md:grid-cols-3 overflow-hidden rounded-[0.6rem]">
                                        <div className="h-24 overflow-hidden border image-fit border-slate-100 saturate-[.6] hover:saturate-100 cursor-pointer">
                                          <ImageZoom
                                            alt="Tailwise - Admin Dashboard Template"
                                            src={faker.images[0]}
                                          />
                                        </div>
                                        <div className="h-24 overflow-hidden border image-fit border-slate-100 saturate-[.6] hover:saturate-100 cursor-pointer">
                                          <ImageZoom
                                            alt="Tailwise - Admin Dashboard Template"
                                            src={faker.images[1]}
                                          />
                                        </div>
                                        <div className="h-24 overflow-hidden border image-fit border-slate-100 saturate-[.6] hover:saturate-100 cursor-pointer">
                                          <ImageZoom
                                            alt="Tailwise - Admin Dashboard Template"
                                            src={faker.images[2]}
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  )}
                                  <div className="mt-1.5 text-xs text-slate-500">
                                    {faker.date}
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 gap-x-6">
                      <div className="flex flex-col p-5 box box--stacked">
                        <div className="pb-5 mb-5 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                          Recent Messages
                        </div>
                        <div className="flex flex-col gap-5">
                          {_.take(messages.fakeMessages(), 5).map(
                            (faker, fakerKey) => (
                              <div className="flex items-center" key={fakerKey}>
                                <div className="relative w-12 h-12">
                                  <div className="w-full h-full overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                                    <img
                                      alt="Tailwise - Admin Dashboard Template"
                                      src={faker.sender.photo}
                                    />
                                  </div>
                                  <div className="absolute bottom-0 right-0 w-2.5 h-2.5 mb-1 mr-1 border border-white rounded-full bg-success box"></div>
                                </div>
                                <div className="ml-3.5">
                                  <div className="font-medium">
                                    {faker.sender.name}
                                  </div>
                                  <div className="text-xs text-slate-500 mt-0.5">
                                    {faker.content}
                                  </div>
                                </div>
                                <div className="relative ml-auto w-7 h-7">
                                  <FormCheck.Input
                                    type="checkbox"
                                    value="checked"
                                    className="absolute z-10 w-full h-full opacity-0 peer"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center m-auto text-white transition-all border rounded-full opacity-0 w-7 h-7 bg-theme-1/80 border-theme-1 peer-checked:opacity-100">
                                    <Lucide
                                      icon="MailCheck"
                                      className="stroke-[1.5] w-3 h-3"
                                    />
                                  </div>
                                  <div className="absolute inset-0 flex items-center justify-center m-auto transition-all border rounded-full w-7 h-7 peer-hover:rotate-180 text-primary border-theme-1/20 bg-theme-1/5 peer-checked:opacity-0 peer-hover:bg-theme-1/10">
                                    <Lucide
                                      icon="MailPlus"
                                      className="stroke-[1.5] w-3 h-3"
                                    />
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                        <Button
                          variant="primary"
                          className="w-full mt-5 bg-white border-dashed text-primary border-primary/20 hover:bg-primary/20"
                        >
                          View All Messages
                          <Lucide
                            icon="ArrowRight"
                            className="stroke-[1.3] w-4 h-4 ml-2"
                          />
                        </Button>
                      </div>
                      <div className="flex flex-col p-5 box box--stacked">
                        <div className="pb-5 mb-5 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                          Upcoming Events
                        </div>
                        <div className="flex flex-col gap-5">
                          {_.take(events.fakeEvents(), 5).map(
                            (faker, fakerKey) => (
                              <div className="flex items-center" key={fakerKey}>
                                <div className="relative w-12 h-12">
                                  <div className="flex items-center justify-center w-full h-full overflow-hidden border-2 rounded-full border-slate-200/40 bg-theme-1/5">
                                    <Lucide
                                      icon={faker.icon}
                                      className="w-4 h-4 text-theme-1 fill-theme-1/10"
                                    />
                                  </div>
                                </div>
                                <div className="ml-3.5">
                                  <div className="font-medium">
                                    {faker.title}
                                  </div>
                                  <div className="text-xs text-slate-500 mt-0.5">
                                    {faker.location}
                                  </div>
                                </div>
                                <div className="relative ml-auto w-7 h-7">
                                  <FormCheck.Input
                                    type="checkbox"
                                    value="checked"
                                    className="absolute z-10 w-full h-full opacity-0 peer"
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center m-auto text-white transition-all border rounded-full opacity-0 w-7 h-7 bg-theme-1/80 border-theme-1 peer-checked:opacity-100">
                                    <Lucide
                                      icon="Check"
                                      className="stroke-[1.5] w-3 h-3"
                                    />
                                  </div>
                                  <div className="absolute inset-0 flex items-center justify-center m-auto transition-all border rounded-full w-7 h-7 peer-hover:rotate-180 text-primary border-theme-1/20 bg-theme-1/5 peer-checked:opacity-0 peer-hover:bg-theme-1/10">
                                    <Lucide
                                      icon="Plus"
                                      className="stroke-[1.5] w-3 h-3"
                                    />
                                  </div>
                                </div>
                              </div>
                            )
                          )}
                        </div>
                        <Button
                          variant="primary"
                          className="w-full mt-5 bg-white border-dashed text-primary border-primary/20 hover:bg-primary/20"
                        >
                          View All Events
                          <Lucide
                            icon="ArrowRight"
                            className="stroke-[1.3] w-4 h-4 ml-2"
                          />
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col box box--stacked">
                      <div className="p-5 font-medium">Projects</div>
                      <div className="overflow-auto xl:overflow-visible">
                        <Table className="border-b border-dashed border-slate-200/80">
                          <Table.Thead>
                            <Table.Tr>
                              <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                                Title
                              </Table.Td>
                              <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                                Progress
                              </Table.Td>
                              <Table.Td className="py-4 font-medium border-t bg-slate-50 border-slate-200/60 text-slate-500">
                                Contributors
                              </Table.Td>
                            </Table.Tr>
                          </Table.Thead>
                          <Table.Tbody>
                            {_.take(projectDetails.fakeProjectDetails(), 5).map(
                              (faker, fakerKey) => (
                                <Table.Tr
                                  key={fakerKey}
                                  className="[&_td]:last:border-b-0"
                                >
                                  <Table.Td className="py-4 border-dashed dark:bg-darkmode-600">
                                    <div className="flex items-center">
                                      <div className="w-9 h-9 image-fit zoom-in">
                                        <Tippy
                                          as="img"
                                          alt="Tailwise - Admin Dashboard Template"
                                          className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                          src={faker.image}
                                          content={faker.title}
                                        />
                                      </div>
                                      <div className="ml-3.5">
                                        <a
                                          href=""
                                          className="font-medium whitespace-nowrap"
                                        >
                                          {faker.title}
                                        </a>
                                        <a
                                          href=""
                                          className="block text-slate-500 text-xs whitespace-nowrap mt-0.5"
                                        >
                                          {faker.link}
                                        </a>
                                      </div>
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
                                    <div className="whitespace-nowrap">
                                      <div className="flex items-center justify-center mt-4 sm:justify-start">
                                        <div className="flex">
                                          <div className="w-6 h-6 image-fit zoom-in">
                                            <Tippy
                                              as="img"
                                              alt="Tailwise - Admin Dashboard Template"
                                              className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                              src={faker.contributors[0].photo}
                                              content={
                                                faker.contributors[0].name
                                              }
                                            />
                                          </div>
                                          <div className="w-6 h-6 -ml-2.5 image-fit zoom-in">
                                            <Tippy
                                              as="img"
                                              alt="Tailwise - Admin Dashboard Template"
                                              className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                              src={faker.contributors[1].photo}
                                              content={
                                                faker.contributors[1].name
                                              }
                                            />
                                          </div>
                                          <div className="w-6 h-6 -ml-2.5 image-fit zoom-in">
                                            <Tippy
                                              as="img"
                                              alt="Tailwise - Admin Dashboard Template"
                                              className="rounded-full shadow-[0px_0px_0px_2px_#fff,_1px_1px_5px_rgba(0,0,0,0.32)] dark:shadow-[0px_0px_0px_2px_#3f4865,_1px_1px_5px_rgba(0,0,0,0.32)]"
                                              src={faker.contributors[2].photo}
                                              content={
                                                faker.contributors[2].name
                                              }
                                            />
                                          </div>
                                        </div>
                                        <div className="ml-3 text-xs text-slate-500">
                                          4+ Members
                                        </div>
                                      </div>
                                    </div>
                                  </Table.Td>
                                </Table.Tr>
                              )
                            )}
                          </Table.Tbody>
                        </Table>
                      </div>
                      <div className="p-5">
                        <Button
                          variant="primary"
                          className="w-full bg-white border-dashed text-primary border-primary/20 hover:bg-primary/20"
                        >
                          View All Projects
                          <Lucide
                            icon="ArrowRight"
                            className="stroke-[1.3] w-4 h-4 ml-2"
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative col-span-12 row-start-1 xl:col-start-9 xl:col-span-4">
                  <div className="sticky flex flex-col top-[6.2rem] gap-y-7">
                    <div className="flex flex-col p-5 box box--stacked">
                      <div>Complete your profile (83%)</div>
                      <div className="flex h-2 mt-3.5">
                        <div className="h-full first:rounded-l last:rounded-r border border-primary/50 bg-primary/50 w-[60%]"></div>
                        <div className="h-full first:rounded-l last:rounded-r border border-slate-300 bg-slate-100 w-[40%]"></div>
                      </div>
                      <Button
                        variant="primary"
                        className="w-full mt-5 bg-white text-primary border-primary/20 hover:bg-primary/20"
                      >
                        <Lucide
                          icon="Inbox"
                          className="stroke-[1.3] w-4 h-4 mr-2"
                        />{" "}
                        Profile Settings
                      </Button>
                    </div>
                    <div className="flex flex-col p-5 box box--stacked">
                      <div className="pb-5 mb-5 font-medium border-b border-dashed border-slate-300/70 text-[0.94rem]">
                        Profile
                      </div>
                      <div className="flex flex-col gap-8">
                        <div>
                          <div className="text-xs uppercase text-slate-500">
                            Personal Data
                          </div>
                          <div className="mt-3.5">
                            <div className="flex items-center">
                              <Lucide
                                icon="Clipboard"
                                className="w-4 h-4 mr-2 stroke-[1.3] text-slate-500"
                              />
                              Department: {users.fakeUsers()[0].department}
                            </div>
                            <div className="flex items-center mt-3">
                              <Lucide
                                icon="Calendar"
                                className="w-4 h-4 mr-2 stroke-[1.3] text-slate-500"
                              />
                              Location: {users.fakeUsers()[0].location}
                            </div>
                            <div className="flex items-center mt-3">
                              <Lucide
                                icon="Clock"
                                className="w-4 h-4 mr-2 stroke-[1.3] text-slate-500"
                              />
                              Manager:
                              <div className="flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-1.5 py-px ml-1">
                                <span className="-mt-px">
                                  {users.fakeUsers()[0].manager}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center mt-3">
                              <Lucide
                                icon="Map"
                                className="w-4 h-4 mr-2 stroke-[1.3] text-slate-500"
                              />
                              Position: {users.fakeUsers()[0].position}
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs uppercase text-slate-500">
                            Contacts
                          </div>
                          <div className="mt-3.5">
                            <div className="flex items-center">
                              <Lucide
                                icon="Clipboard"
                                className="w-4 h-4 mr-2 stroke-[1.3] text-slate-500"
                              />
                              Email:{" "}
                              <a
                                href=""
                                className="ml-1 text-primary whitespace-nowrap underline decoration-dotted decoration-primary/30 underline-offset-[3px]"
                              >
                                {users.fakeUsers()[0].email}
                              </a>
                            </div>
                            <div className="flex items-center mt-3">
                              <Lucide
                                icon="Calendar"
                                className="w-4 h-4 mr-2 stroke-[1.3] text-slate-500"
                              />
                              Phone Number:{" "}
                              <a
                                href=""
                                className="ml-1 text-primary whitespace-nowrap underline decoration-dotted decoration-primary/30 underline-offset-[3px]"
                              >
                                {users.fakeUsers()[0].phone}
                              </a>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="text-xs uppercase text-slate-500">
                            Statistics
                          </div>
                          <div className="mt-3.5">
                            <div className="flex items-center mt-3">
                              <Lucide
                                icon="Clock"
                                className="w-4 h-4 mr-2 stroke-[1.3] text-slate-500"
                              />
                              Teams:
                              <div className="flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-1.5 py-px ml-1">
                                <span className="-mt-px">5 Members</span>
                              </div>
                            </div>
                            <div className="flex items-center mt-3">
                              <Lucide
                                icon="Map"
                                className="w-4 h-4 mr-2 stroke-[1.3] text-slate-500"
                              />
                              Projects:
                              <a
                                href=""
                                className="ml-1 underline decoration-dotted decoration-primary/30 underline-offset-[3px]"
                              >
                                {projectDetails.fakeProjectDetails()[0].title}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-12 gap-y-10 gap-x-6 mt-3.5">
                {_.take(events.fakeEvents(), 9).map((faker, fakerKey) => (
                  <div
                    className="flex flex-col col-span-12 p-5 md:col-span-6 xl:col-span-4 box box--stacked"
                    key={fakerKey}
                  >
                    <a
                      className="font-medium text-primary text-[0.94rem]"
                      href=""
                    >
                      {faker.title}
                    </a>
                    <div className="mt-1 mb-5 leading-relaxed text-slate-500">
                      {faker.description}
                    </div>
                    <Menu className="absolute top-0 right-0 mt-5 mr-5">
                      <Menu.Button className="w-5 h-5 text-slate-500">
                        <Lucide
                          icon="MoreVertical"
                          className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                        />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                          Link
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                          Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                    <div className="flex flex-col gap-3 pt-5 mt-auto border-t border-dashed border-slate-300/70">
                      <div className="flex items-center">
                        <div className="text-slate-500">Organizer:</div>
                        <div className="ml-auto">
                          <div className="flex items-center text-xs rounded-md text-success bg-success/10 border border-success/10 px-1.5 py-px">
                            <span className="-mt-px">{faker.organizer}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-slate-500">Available Seats:</div>
                        <div className="ml-auto">
                          <div className="flex items-center">
                            <Lucide
                              icon="Armchair"
                              className={clsx([
                                "w-5 h-5 mr-1 text-slate-400 fill-slate-100 [&.active]:text-pending/80 [&.active]:fill-pending/10",
                                { active: faker.availableSeats >= 1 },
                              ])}
                            />
                            <Lucide
                              icon="Armchair"
                              className={clsx([
                                "w-5 h-5 mr-1 text-slate-400 fill-slate-100 [&.active]:text-pending/80 [&.active]:fill-pending/10",
                                { active: faker.availableSeats >= 2 },
                              ])}
                            />
                            <Lucide
                              icon="Armchair"
                              className={clsx([
                                "w-5 h-5 mr-1 text-slate-400 fill-slate-100 [&.active]:text-pending/80 [&.active]:fill-pending/10",
                                { active: faker.availableSeats >= 3 },
                              ])}
                            />
                            <Lucide
                              icon="Armchair"
                              className={clsx([
                                "w-5 h-5 mr-1 text-slate-400 fill-slate-100 [&.active]:text-pending/80 [&.active]:fill-pending/10",
                                { active: faker.availableSeats >= 4 },
                              ])}
                            />
                            <Lucide
                              icon="Armchair"
                              className={clsx([
                                "w-5 h-5 mr-1 text-slate-400 fill-slate-100 [&.active]:text-pending/80 [&.active]:fill-pending/10",
                                { active: faker.availableSeats >= 5 },
                              ])}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-slate-500">Time:</div>
                        <div className="ml-auto text-slate-500">
                          {faker.time}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-slate-500">Attendees:</div>
                        <div className="ml-auto">
                          <div className="flex items-center justify-center">
                            <div className="w-6 h-6 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Tailwise - Admin Dashboard Template"
                                className="border-2 border-white rounded-full"
                                src={faker.attendees[0].photo}
                                content={`Uploaded at ${faker.attendees[0].name}`}
                              />
                            </div>
                            <div className="w-6 h-6 -ml-2 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Tailwise - Admin Dashboard Template"
                                className="border-2 border-white rounded-full"
                                src={faker.attendees[1].photo}
                                content={`Uploaded at ${faker.attendees[1].name}`}
                              />
                            </div>
                            <div className="w-6 h-6 -ml-2 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Tailwise - Admin Dashboard Template"
                                className="border-2 border-white rounded-full"
                                src={faker.attendees[2].photo}
                                content={`Uploaded at ${faker.attendees[2].name}`}
                              />
                            </div>
                            <div className="w-6 h-6 -ml-2 image-fit zoom-in">
                              <Tippy
                                as="img"
                                alt="Tailwise - Admin Dashboard Template"
                                className="border-2 border-white rounded-full"
                                src={faker.attendees[3].photo}
                                content={`Uploaded at ${faker.attendees[3].name}`}
                              />
                            </div>
                            <div className="ml-1 text-slate-500">
                              ({_.random(20, 100)}+)
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="text-slate-500">Registration Link:</div>
                        <div className="ml-auto">
                          <a
                            href=""
                            className="text-slate-500 whitespace-nowrap underline decoration-dotted decoration-slate-500/30 underline-offset-[3px] truncate w-40 md:w-52 block text-right"
                          >
                            {faker.registrationLink}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-12 gap-y-10 gap-x-6 mt-3.5">
                {_.take(achievements.fakeAchievements(), 9).map(
                  (faker, fakerKey) => (
                    <div
                      className="flex flex-col col-span-12 md:col-span-6 xl:col-span-4 box box--stacked"
                      key={fakerKey}
                    >
                      <div className="flex mt-5 ml-5">
                        <span className="flex items-center text-xs font-medium rounded-md text-success bg-success/10 border border-success/10 px-2 py-0.5 mr-auto">
                          <span className="-mt-px">{faker.category}</span>
                        </span>
                      </div>
                      <Menu className="absolute top-0 right-0 mt-5 mr-5">
                        <Menu.Button className="w-5 h-5 text-slate-500">
                          <Lucide
                            icon="MoreVertical"
                            className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                          />
                        </Menu.Button>
                        <Menu.Items className="w-40">
                          <Menu.Item>
                            <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                            Link
                          </Menu.Item>
                          <Menu.Item>
                            <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                            Delete
                          </Menu.Item>
                        </Menu.Items>
                      </Menu>
                      <div className="flex flex-col items-center px-5 pb-10 mt-5">
                        <div className="relative w-[72px] h-[72px]">
                          <div className="flex items-center justify-center w-full h-full overflow-hidden border rounded-full border-slate-200/70 bg-theme-1/5">
                            <Lucide
                              icon={faker.event.icon}
                              className="w-6 h-6 text-theme-1 fill-theme-1/10 stroke-[0.7]"
                            />
                          </div>
                        </div>
                        <div className="mt-3 font-medium text-primary text-[0.94rem]">
                          {faker.title}
                        </div>
                        <div className="mt-1.5 text-center text-slate-500">
                          {faker.description}
                        </div>
                        <div className="mt-5 text-xs uppercase text-slate-400">
                          Collaborators
                        </div>
                        <div className="flex justify-center mt-3">
                          <div className="w-10 h-10 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="Tailwise - Admin Dashboard Template"
                              className="border-2 border-white rounded-full"
                              src={faker.collaborators[0].photo}
                              content={faker.collaborators[0].name}
                            />
                          </div>
                          <div className="w-10 h-10 -ml-3 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="Tailwise - Admin Dashboard Template"
                              className="border-2 border-white rounded-full"
                              src={faker.collaborators[1].photo}
                              content={faker.collaborators[1].name}
                            />
                          </div>
                          <div className="w-10 h-10 -ml-3 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="Tailwise - Admin Dashboard Template"
                              className="border-2 border-white rounded-full"
                              src={faker.collaborators[2].photo}
                              content={faker.collaborators[2].name}
                            />
                          </div>
                          <div className="w-10 h-10 -ml-3 image-fit zoom-in">
                            <Tippy
                              as="img"
                              alt="Tailwise - Admin Dashboard Template"
                              className="border-2 border-white rounded-full"
                              src={faker.collaborators[3].photo}
                              content={faker.collaborators[3].name}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex border-t border-slate-200/80">
                        <div className="flex flex-col items-center flex-1 py-3">
                          <div className="text-base font-medium">
                            {faker.level}
                          </div>
                          <div className="text-slate-500">Level</div>
                        </div>
                        <div className="flex flex-col items-center flex-1 py-3 border-x border-slate-200/80">
                          <div className="text-base font-medium">
                            {faker.duration}
                          </div>
                          <div className="text-slate-500">Duration</div>
                        </div>
                        <div className="flex flex-col items-center flex-1 py-3">
                          <div className="text-base font-medium">
                            {faker.score}
                          </div>
                          <div className="text-slate-500">Score</div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="grid grid-cols-12 gap-y-10 gap-x-6 mt-3.5">
                {_.take(users.fakeUsers(), 9).map((faker, fakerKey) => (
                  <div
                    className="flex flex-col col-span-12 md:col-span-6 xl:col-span-4 box box--stacked"
                    key={fakerKey}
                  >
                    <Menu className="absolute top-0 right-0 mt-5 mr-5">
                      <Menu.Button className="w-5 h-5 text-slate-500">
                        <Lucide
                          icon="MoreVertical"
                          className="w-5 h-5 stroke-slate-400/70 fill-slate-400/70"
                        />
                      </Menu.Button>
                      <Menu.Items className="w-40">
                        <Menu.Item>
                          <Lucide icon="Copy" className="w-4 h-4 mr-2" /> Copy
                          Link
                        </Menu.Item>
                        <Menu.Item>
                          <Lucide icon="Trash" className="w-4 h-4 mr-2" />
                          Delete
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                    <div className="flex flex-col items-center px-5 pb-10 mt-10">
                      <div className="w-[72px] h-[72px] overflow-hidden rounded-full image-fit border-[3px] border-slate-200/70">
                        <img
                          alt="Tailwise - Admin Dashboard Template"
                          src={faker.photo}
                        />
                      </div>
                      <div className="mt-3 font-medium text-primary text-[0.94rem]">
                        {faker.name}
                      </div>
                      <div className="flex items-center justify-center gap-3 mt-2">
                        <div className="flex items-center text-slate-500">
                          <Lucide
                            icon="Hotel"
                            className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                          />
                          {faker.location}
                        </div>
                        <div className="flex items-center text-slate-500">
                          <Lucide
                            icon="Calendar"
                            className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                          />
                          {faker.joinedDate}
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center justify-center gap-2 mt-5 sm:flex-row">
                        <span className="flex items-center text-xs font-medium rounded-md text-primary bg-primary/10 border border-primary/10 px-2 py-0.5">
                          <span className="-mt-px truncate">
                            {faker.department}
                          </span>
                        </span>
                        <span className="flex items-center text-xs font-medium rounded-md text-primary bg-primary/10 border border-primary/10 px-2 py-0.5">
                          <span className="-mt-px truncate">
                            {faker.position}
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center px-5 py-4 border-t border-slate-200/80">
                      <div className="text-slate-500">
                        {_.random(20, 100)}+ Connections
                      </div>
                      {_.random(0, 1) ? (
                        <Button
                          variant="outline-primary"
                          className="px-4 ml-auto border-primary/50"
                        >
                          <Lucide
                            icon="UserPlus"
                            className="stroke-[1.3] w-4 h-4 -ml-0.5 mr-2"
                          />
                          Connect
                        </Button>
                      ) : (
                        <Button variant="primary" className="px-4 ml-auto">
                          <Lucide
                            icon="Check"
                            className="stroke-[1.3] w-4 h-4 -ml-0.5 mr-2"
                          />
                          Connected
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="flex flex-col items-center py-14 box box--stacked mt-3.5">
                <Lucide
                  icon="FileLock2"
                  className="stroke-[0.3] w-24 h-24 text-primary/70 fill-primary/5"
                />
                <div className="mt-5 text-base font-medium">
                  Two-Factor Authentication (2FA)
                </div>
                <div className="px-10 mt-1 text-center text-slate-500">
                  Enhance your account security by enabling Two-Factor
                  Authentication in the settings.
                </div>
                <Button variant="primary" className="mt-6">
                  <Lucide
                    icon="Lock"
                    className="stroke-[1.3] w-4 h-4 mr-2 -ml-0.5"
                  />
                  Enable Now
                </Button>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default Main;
