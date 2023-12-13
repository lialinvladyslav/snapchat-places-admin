import _ from "lodash";

export interface Language {
  name: string;
  code: string;
}

const fakers = {
  fakeLanguages() {
    const languages: Array<Language> = [
      { name: "English", code: "en" },
      { name: "Spanish", code: "es" },
      { name: "French", code: "fr" },
      { name: "German", code: "de" },
      { name: "Chinese", code: "zh" },
    ];

    return _.shuffle(languages);
  },
};

export default fakers;
