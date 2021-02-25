import { Injectable } from "@angular/core";

@Injectable()
export class MyDataService {
  users = [
    {
      name: "Mai",
      gender: "female",
      city: "New York",
      cityCode: "NY",
      salary: 1400,
      allowance: 2000,
      dob: new Date("05/14/1978")
    },

    {
      name: "Emily",
      gender: "female",
      city: "California",
      cityCode: "CA",
      salary: 12000,
      allowance: 2000,
      dob: new Date("12/10/1986")
    },

    {
      name: "Olivia",
      gender: "female",
      city: "New York",
      cityCode: "NY",
      salary: 1500,
      allowance: 2000,
      dob: new Date("11/18/1982")
    },
    {
      name: "Ava",
      gender: "female",
      city: "California",
      cityCode: "CA",
      salary: 14009,
      allowance: 2000,
      dob: new Date("01/23/1989")
    },
    {
      name: "Abigail",
      gender: "male",
      city: "California",
      cityCode: "CA",
      salary: 1500,
      allowance: 2000,
      dob: new Date("01/18/1972")
    },
    {
      name: "Madison",
      gender: "Male",
      city: "New York",
      cityCode: "NY",
      salary: 1500,
      allowance: 2000,
      dob: new Date("11/10/1978")
    }
  ];
  constructor() {}
}
