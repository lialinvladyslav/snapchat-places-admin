import _ from "lodash";

export interface User {
  name: string;
  position: string;
  photo: string;
  email: string;
  phone: string;
  department: string;
  location: string;
  joinedDate: string;
  manager: string;
  addressLine1: string;
  addressLine2: string;
  isActive: boolean;
}

const imageAssets = import.meta.glob<{
  default: string;
}>("/src/assets/images/users/*.{jpg,jpeg,png,svg}", { eager: true });

const fakers = {
  fakeUsers() {
    const users: Array<User> = [
      {
        name: "Tom Hanks",
        position: "Sales Manager",
        photo: imageAssets["/src/assets/images/users/user1-50x50.jpg"].default,
        email: "tom.hanks@left4code.com",
        phone: "+1 (123) 456-7890",
        department: "Sales Department",
        location: "New York, USA",
        joinedDate: "January 15, 2010",
        manager: "John Smith",
        addressLine1: "123 Main Street",
        addressLine2: "Suite 456",
        isActive: true,
      },
      {
        name: "Meryl Streep",
        position: "Marketing Coordinator",
        photo: imageAssets["/src/assets/images/users/user2-50x50.jpg"].default,
        email: "meryl.streep@left4code.com",
        phone: "+1 (234) 567-8901",
        department: "Marketing Department",
        location: "Los Angeles, USA",
        joinedDate: "March 22, 2015",
        manager: "Alice Johnson",
        addressLine1: "456 Elm Avenue",
        addressLine2: "Floor 3B",
        isActive: false,
      },
      {
        name: "Leonardo DiCaprio",
        position: "Support Specialist",
        photo: imageAssets["/src/assets/images/users/user3-50x50.jpg"].default,
        email: "leonardo.dicaprio@left4code.com",
        phone: "+1 (345) 678-9012",
        department: "Support Team",
        location: "Chicago, USA",
        joinedDate: "May 5, 2018",
        manager: "Emily Davis",
        addressLine1: "789 Oak Street",
        addressLine2: "Apt 102",
        isActive: true,
      },
      {
        name: "Angelina Jolie",
        position: "Account Executive",
        photo: imageAssets["/src/assets/images/users/user4-50x50.jpg"].default,
        email: "angelina.jolie@left4code.com",
        phone: "+1 (456) 789-0123",
        department: "Account Management",
        location: "San Francisco, USA",
        joinedDate: "July 10, 2012",
        manager: "Michael Brown",
        addressLine1: "567 Pine Road",
        addressLine2: "Suite 200",
        isActive: false,
      },
      {
        name: "Brad Pitt",
        position: "Data Analyst",
        photo: imageAssets["/src/assets/images/users/user5-50x50.jpg"].default,
        email: "brad.pitt@left4code.com",
        phone: "+1 (567) 890-1234",
        department: "Data Analytics",
        location: "Seattle, USA",
        joinedDate: "September 3, 2016",
        manager: "Sarah Wilson",
        addressLine1: "890 Cedar Avenue",
        addressLine2: "Unit 501",
        isActive: true,
      },
      {
        name: "Jennifer Lawrence",
        position: "CRM Administrator",
        photo: imageAssets["/src/assets/images/users/user6-50x50.jpg"].default,
        email: "jennifer.lawrence@left4code.com",
        phone: "+1 (678) 901-2345",
        department: "CRM Team",
        location: "Miami, USA",
        joinedDate: "February 18, 2019",
        manager: "David Miller",
        addressLine1: "234 Birch Street",
        addressLine2: "Apt 301",
        isActive: false,
      },
      {
        name: "Johnny Depp",
        position: "Product Manager",
        photo: imageAssets["/src/assets/images/users/user7-50x50.jpg"].default,
        email: "johnny.depp@left4code.com",
        phone: "+1 (789) 012-3456",
        department: "Product Management",
        location: "Denver, USA",
        joinedDate: "October 7, 2013",
        manager: "Linda White",
        addressLine1: "345 Willow Avenue",
        addressLine2: "Suite 401",
        isActive: true,
      },
      {
        name: "Cate Blanchett",
        position: "Project Manager",
        photo: imageAssets["/src/assets/images/users/user8-50x50.jpg"].default,
        email: "cate.blanchett@left4code.com",
        phone: "+1 (890) 123-4567",
        department: "Project Management",
        location: "Houston, USA",
        joinedDate: "June 12, 2017",
        manager: "Robert Green",
        addressLine1: "678 Maple Road",
        addressLine2: "Floor 2A",
        isActive: false,
      },
      {
        name: "Denzel Washington",
        position: "HR Director",
        photo: imageAssets["/src/assets/images/users/user9-50x50.jpg"].default,
        email: "denzel.washington@left4code.com",
        phone: "+1 (901) 234-5678",
        department: "Human Resources",
        location: "Atlanta, USA",
        joinedDate: "April 25, 2011",
        manager: "Susan Taylor",
        addressLine1: "901 Pine Street",
        addressLine2: "Floor 4C",
        isActive: true,
      },
      {
        name: "Julia Roberts",
        position: "Software Engineer",
        photo: imageAssets["/src/assets/images/users/user10-50x50.jpg"].default,
        email: "julia.roberts@left4code.com",
        phone: "+1 (234) 567-8901",
        department: "Engineering",
        location: "Austin, USA",
        joinedDate: "August 9, 2014",
        manager: "Michael Scott",
        addressLine1: "123 Oak Avenue",
        addressLine2: "Suite 601",
        isActive: false,
      },
    ];

    return _.shuffle(users);
  },
};

export default fakers;
