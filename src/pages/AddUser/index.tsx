import Lucide from "../../base-components/Lucide";
import users from "../../fakers/users";
import Button from "../../base-components/Button";
import Litepicker from "../../base-components/Litepicker";
import { FormInput, FormSelect, FormCheck } from "../../base-components/Form";
import { useState } from "react";
import clsx from "clsx";
import _ from "lodash";

function Main() {
  const [dateOfBirth, setDateOfBirth] = useState<string>();

  return (
    <div className="grid grid-cols-12 gap-y-10 gap-x-6">
      <div className="col-span-12 sm:col-span-10 sm:col-start-2">
        <div className="flex flex-col lg:items-center lg:flex-row gap-y-2">
          <div
            className={clsx([
              "flex items-center lg:justify-center flex-1 lg:first:justify-start lg:last:justify-end group active",
              "after:hidden before:hidden after:lg:block before:lg:block",
              "first:after:content-[''] first:after:w-full first:after:bg-slate-300/60 first:after:h-[2px] first:after:ml-5 group-[.mode--light]:first:after:bg-slate-300/20",
              "last:before:content-[''] last:before:w-full last:before:bg-slate-300/60 last:before:h-[2px] last:before:mr-5 group-[.mode--light]:last:before:bg-slate-300/20",
              "last:after:hidden after:content-[''] after:w-full after:bg-slate-300/60 after:h-[2px] after:ml-5 group-[.mode--light]:after:bg-slate-300/20",
              "first:before:hidden before:content-[''] before:w-full before:bg-slate-300/60 before:h-[2px] before:mr-5 group-[.mode--light]:before:bg-slate-300/20",
            ])}
          >
            <div className="flex items-center">
              <div className="bg-white border rounded-full group-[.mode--light]:!bg-transparent group-[.active]:bg-primary group-[.active]:text-white group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-white/[0.25] [.group.mode--light_.group.active_&]:!bg-white/[0.12] [.group.mode--light_.group.active_&]:!border-white/[0.15]">
                <div className="flex items-center justify-center w-10 h-10">
                  1
                </div>
              </div>
              <div className="ml-3.5 group-[.mode--light]:!text-slate-300 font-medium whitespace-nowrap text-slate-500 group-[.active]:text-current [.group.mode--light_.group.active_&]:!text-slate-100">
                Personal Information
              </div>
            </div>
          </div>
          <div
            className={clsx([
              "flex items-center lg:justify-center flex-1 lg:first:justify-start lg:last:justify-end group",
              "after:hidden before:hidden after:lg:block before:lg:block",
              "first:after:content-[''] first:after:w-full first:after:bg-slate-300/60 first:after:h-[2px] first:after:ml-5 group-[.mode--light]:first:after:bg-slate-300/20",
              "last:before:content-[''] last:before:w-full last:before:bg-slate-300/60 last:before:h-[2px] last:before:mr-5 group-[.mode--light]:last:before:bg-slate-300/20",
              "last:after:hidden after:content-[''] after:w-full after:bg-slate-300/60 after:h-[2px] after:ml-5 group-[.mode--light]:after:bg-slate-300/20",
              "first:before:hidden before:content-[''] before:w-full before:bg-slate-300/60 before:h-[2px] before:mr-5 group-[.mode--light]:before:bg-slate-300/20",
            ])}
          >
            <div className="flex items-center">
              <div className="bg-white border rounded-full group-[.mode--light]:!bg-transparent group-[.active]:bg-primary group-[.active]:text-white group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-white/[0.25] [.group.mode--light_.group.active_&]:!bg-white/[0.12] [.group.mode--light_.group.active_&]:!border-white/[0.15]">
                <div className="flex items-center justify-center w-10 h-10">
                  2
                </div>
              </div>
              <div className="ml-3.5 group-[.mode--light]:!text-slate-300 font-medium whitespace-nowrap text-slate-500 group-[.active]:text-current [.group.mode--light_.group.active_&]:!text-slate-100">
                Account Setup
              </div>
            </div>
          </div>
          <div
            className={clsx([
              "flex items-center lg:justify-center flex-1 lg:first:justify-start lg:last:justify-end group",
              "after:hidden before:hidden after:lg:block before:lg:block",
              "first:after:content-[''] first:after:w-full first:after:bg-slate-300/60 first:after:h-[2px] first:after:ml-5 group-[.mode--light]:first:after:bg-slate-300/20",
              "last:before:content-[''] last:before:w-full last:before:bg-slate-300/60 last:before:h-[2px] last:before:mr-5 group-[.mode--light]:last:before:bg-slate-300/20",
              "last:after:hidden after:content-[''] after:w-full after:bg-slate-300/60 after:h-[2px] after:ml-5 group-[.mode--light]:after:bg-slate-300/20",
              "first:before:hidden before:content-[''] before:w-full before:bg-slate-300/60 before:h-[2px] before:mr-5 group-[.mode--light]:before:bg-slate-300/20",
            ])}
          >
            <div className="flex items-center">
              <div className="bg-white border rounded-full group-[.mode--light]:!bg-transparent group-[.active]:bg-primary group-[.active]:text-white group-[.mode--light]:!text-slate-200 group-[.mode--light]:!border-white/[0.25] [.group.mode--light_.group.active_&]:!bg-white/[0.12] [.group.mode--light_.group.active_&]:!border-white/[0.15]">
                <div className="flex items-center justify-center w-10 h-10">
                  3
                </div>
              </div>
              <div className="ml-3.5 group-[.mode--light]:!text-slate-300 font-medium whitespace-nowrap text-slate-500 group-[.active]:text-current [.group.mode--light_.group.active_&]:!text-slate-100">
                Additional Details
              </div>
            </div>
          </div>
        </div>
        <div className="mt-7">
          <div className="flex flex-col box box--stacked">
            <div className="p-7">
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Profile Photo</div>
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                      Upload a clear and recent profile photo.
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <div className="flex items-center">
                    <div className="relative flex items-center justify-center w-24 h-24 border rounded-full bg-primary/5 border-primary/10">
                      <Lucide
                        icon="User"
                        className="w-[65%] h-[65%] fill-slate-300/70 -mt-1.5 stroke-[0.5] stroke-slate-400/50"
                      />
                      <a
                        href=""
                        className="absolute bottom-0 right-0 flex items-center justify-center rounded-full box w-7 h-7"
                      >
                        <Lucide
                          icon="Pencil"
                          className="w-3.5 h-3.5 stroke-[1.3] text-slate-500"
                        />
                      </a>
                    </div>
                    <Button
                      variant="outline-secondary"
                      size="sm"
                      className="pl-3.5 pr-4 mr-2 h-8 ml-8"
                    >
                      <Lucide
                        icon="Trash2"
                        className="w-3.5 h-3.5 mr-1.5 stroke-[1.3]"
                      />{" "}
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Full Name</div>
                      <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                        Required
                      </div>
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                      Enter your full legal name as it appears on your official
                      identification.
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <div className="flex flex-col items-center md:flex-row">
                    <FormInput
                      type="text"
                      className="first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10"
                      placeholder={users.fakeUsers()[0].name.split(" ")[0]}
                    />
                    <FormInput
                      type="text"
                      className="first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10"
                      placeholder={users.fakeUsers()[0].name.split(" ")[1]}
                    />
                  </div>
                </div>
              </div>
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Date of Birth</div>
                      <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                        Required
                      </div>
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                      This information is required to verify your age and
                      provide age-appropriate services.
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <Litepicker
                    value={dateOfBirth}
                    onChange={setDateOfBirth}
                    options={{
                      autoApply: false,
                      dropdowns: {
                        minYear: 1990,
                        maxYear: null,
                        months: true,
                        years: true,
                      },
                    }}
                  />
                </div>
              </div>
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Gender</div>
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                      Select your gender from the options.
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <div className="flex flex-col items-center md:flex-row">
                    <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                      <FormCheck>
                        <FormCheck.Input
                          id="checkbox-switch-1"
                          type="radio"
                          value=""
                        />
                        <FormCheck.Label htmlFor="checkbox-switch-1">
                          Male
                        </FormCheck.Label>
                      </FormCheck>
                    </div>
                    <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                      <FormCheck>
                        <FormCheck.Input
                          id="checkbox-switch-2"
                          type="radio"
                          value=""
                        />
                        <FormCheck.Label htmlFor="checkbox-switch-2">
                          Female
                        </FormCheck.Label>
                      </FormCheck>
                    </div>
                    <div className="bg-white w-full px-3 py-2 border rounded-md shadow-sm border-slate-300/60 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                      <FormCheck>
                        <FormCheck.Input
                          id="checkbox-switch-3"
                          type="radio"
                          value=""
                        />
                        <FormCheck.Label htmlFor="checkbox-switch-3">
                          Prefer Not to Say
                        </FormCheck.Label>
                      </FormCheck>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Email</div>
                      <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                        Required
                      </div>
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                      Please provide a valid email address that you have access
                      to.
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <FormInput
                    type="text"
                    placeholder={users.fakeUsers()[0].email}
                  />
                </div>
              </div>
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Phone Number</div>
                      <div className="ml-2.5 px-2 py-0.5 bg-slate-100 text-slate-500 dark:bg-darkmode-300 dark:text-slate-400 text-xs rounded-md border border-slate-200">
                        Required
                      </div>
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                      Please provide a valid phone number where we can reach you
                      if needed.
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <div className="flex flex-col items-center md:flex-row">
                    <FormInput
                      type="text"
                      className="first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10"
                      placeholder={users.fakeUsers()[0].phone}
                    />
                    <FormSelect className="md:w-36 first:rounded-b-none first:md:rounded-bl-md first:md:rounded-r-none [&:not(:first-child):not(:last-child)]:-mt-px [&:not(:first-child):not(:last-child)]:md:mt-0 [&:not(:first-child):not(:last-child)]:md:-ml-px [&:not(:first-child):not(:last-child)]:rounded-none last:rounded-t-none last:md:rounded-l-none last:md:rounded-tr-md last:-mt-px last:md:mt-0 last:md:-ml-px focus:z-10">
                      <option value="office">Office</option>
                      <option value="home">Home</option>
                    </FormSelect>
                  </div>
                  <a
                    className="flex items-center mt-3.5 -mb-1 font-medium text-primary"
                    href=""
                  >
                    <Lucide className="w-4 h-4 stroke-[1.3] mr-1" icon="Plus" />
                    Add phone
                  </a>
                </div>
              </div>
              <div className="flex-col block pt-5 mt-5 xl:items-center sm:flex xl:flex-row first:mt-0 first:pt-0">
                <label className="inline-block mb-2 sm:mb-0 sm:mr-5 sm:text-right xl:w-60 xl:mr-14">
                  <div className="text-left">
                    <div className="flex items-center">
                      <div className="font-medium">Department</div>
                    </div>
                    <div className="mt-1.5 xl:mt-3 text-xs leading-relaxed text-slate-500/80">
                      Choose your department or division from the list of
                      available options.
                    </div>
                  </div>
                </label>
                <div className="flex-1 w-full mt-3 xl:mt-0">
                  <FormSelect>
                    {_.take(users.fakeUsers(), 5).map((faker, fakerKey) => (
                      <option key={fakerKey} value={faker.department}>
                        {faker.department}
                      </option>
                    ))}
                  </FormSelect>
                </div>
              </div>
            </div>
            <div className="flex py-5 border-t md:justify-end px-7 border-slate-200/80">
              <Button
                variant="outline-primary"
                className="w-full px-10 md:w-auto border-primary/50"
              >
                <Lucide
                  icon="Pocket"
                  className="stroke-[1.3] w-4 h-4 mr-2 -ml-2"
                />
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
