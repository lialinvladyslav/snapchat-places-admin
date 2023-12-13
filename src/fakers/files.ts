import _ from "lodash";

export interface File {
  fileName: string;
  size: string;
  type:
    | "MP4"
    | "Empty Folder"
    | "Folder"
    | "Image"
    | "TXT"
    | "PPT"
    | "PDF"
    | "XLSX"
    | "ZIP"
    | "MP3"
    | "DOCX";
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/products/*.{jpg,jpeg,png,svg}", { eager: true });

const filteredImages = Object.keys(imageAssets).filter(
  (file) => file.search("100x100") !== -1
);

const fakers = {
  fakeFiles() {
    const files: Array<File> = [
      {
        fileName: "Annual-Report-2023.pdf",
        size: "2.5 MB",
        type: "PDF",
      },
      {
        fileName: "Dota 2",
        type: "Folder",
        size: "112 GB",
      },
      {
        fileName: "Financial-Statements.xlsx",
        size: "1.8 MB",
        type: "XLSX",
      },
      {
        fileName: "Laravel 10",
        type: "Empty Folder",
        size: "120 MB",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "750 KB",
        type: "Image",
      },
      {
        fileName: "Sales-Presentation.pptx",
        size: "3.2 MB",
        type: "PPT",
      },
      {
        fileName: "Meeting-Minutes.txt",
        size: "320 KB",
        type: "TXT",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "150 KB",
        type: "Image",
      },
      {
        fileName: "Product_Demo.mp4",
        size: "15.4 MB",
        type: "MP4",
      },
      { fileName: "Repository", type: "Folder", size: "20 KB" },
      {
        fileName: "Project-Documents.zip",
        size: "6.7 MB",
        type: "ZIP",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "30 KB",
        type: "Image",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "550 KB",
        type: "Image",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "150 KB",
        type: "Image",
      },
      {
        fileName: "Background-Music.mp3",
        size: "5.2 MB",
        type: "MP3",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "1.1 MB",
        type: "Image",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "20 KB",
        type: "Image",
      },
      {
        fileName:
          imageAssets[filteredImages[_.random(0, filteredImages.length - 1)]]
            .default,
        size: "50 KB",
        type: "Image",
      },
      {
        fileName: "Marketing-Plan.docx",
        size: "1.9 MB",
        type: "DOCX",
      },
      {
        fileName: "Documentation",
        type: "Empty Folder",
        size: "4 MB",
      },
    ];

    return _.shuffle(files);
  },
};

export default fakers;
