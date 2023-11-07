import { IGift } from "./types";

export  const gifts:IGift[]= [
  {
    id: 1,
    title: "Macboock",
    count: 1,
    url: require("../assets/images/macbook.png")
  },
  {
    id: 2,
    title: "Iphone",
    count: 3,
    url: require("../assets/images/iphone.png")
  },
  {
    id: 3,
    title: "AirPods",
    count: 10,
    url: require("../assets/images/airPods.png")
  }
]