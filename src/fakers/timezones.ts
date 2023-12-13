import _ from "lodash";

export interface Timezone {
  name: string;
  offset: string;
}

const fakers = {
  fakeTimezones() {
    const timezones: Array<Timezone> = [
      { name: "UTC", offset: "+00:00" },
      { name: "Eastern Standard Time (EST)", offset: "-05:00" },
      { name: "Pacific Standard Time (PST)", offset: "-08:00" },
      { name: "Central European Time (CET)", offset: "+01:00" },
    ];

    return _.shuffle(timezones);
  },
};

export default fakers;
