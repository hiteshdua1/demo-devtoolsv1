import React, { useState } from "react";
import styles from "./LiveExpressionExample.module.css";

const LiveExpressionExample: React.FC = () => {
  const [count, setCount] = useState(0);

  // copy and conditional breakpoint example
  const mockData = generateDummyJson();

  for (let i = 0; i < mockData.length; i++) {
    // do some processing
    mockData[i].company = "saxo";
    // process for specific _id like 60a5eaac3031427cc8b7c5bf
  }

  return (
    <div className={styles.LiveExpressionComponent}>
      <h2>Live expression Example</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Increment Me</button>
    </div>
  );
};

export default LiveExpressionExample;

function generateDummyJson() {
  return [
    {
      _id: "60a5eaac1e8a39bfb0eddf80",
      index: 0,
      guid: "4669ff47-88c0-4f07-85ec-658ea4729be3",
      isActive: true,
      balance: "$3,167.32",
      picture: "http://placehold.it/32x32",
      age: 35,
      eyeColor: "blue",
      name: {
        first: "Shelton",
        last: "Maddox",
      },
      company: "GOKO",
      email: "shelton.maddox@goko.biz",
      phone: "+1 (919) 547-2336",
      address: "479 Tiffany Place, Canby, Montana, 6829",
      about:
        "Enim nisi in enim cupidatat commodo sit dolor exercitation veniam ullamco sunt. In eu in do eu veniam fugiat voluptate Lorem culpa duis veniam laborum do. Cupidatat et occaecat exercitation do qui voluptate sint duis deserunt amet. Culpa quis aliquip laborum officia cillum esse cillum eiusmod sit proident excepteur. Anim elit mollit non in id eiusmod adipisicing aliqua non quis consectetur officia enim.",
      registered: "Monday, May 7, 2018 10:38 AM",
      latitude: "-21.376732",
      longitude: "66.194508",
      tags: ["qui", "proident", "non", "occaecat", "laborum"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Hale Douglas",
        },
        {
          id: 1,
          name: "Conway Fleming",
        },
        {
          id: 2,
          name: "Sabrina Blair",
        },
      ],
      greeting: "Hello, Shelton! You have 7 unread messages.",
      favoriteFruit: "apple",
    },
    {
      _id: "60a5eaac5dd790656657b60b",
      index: 1,
      guid: "20060e22-368d-45f4-b63d-6b98d8a42349",
      isActive: true,
      balance: "$3,930.24",
      picture: "http://placehold.it/32x32",
      age: 36,
      eyeColor: "brown",
      name: {
        first: "Kimberly",
        last: "Elliott",
      },
      company: "TWIGGERY",
      email: "kimberly.elliott@twiggery.me",
      phone: "+1 (925) 560-3248",
      address: "596 Degraw Street, Staples, Wyoming, 8941",
      about:
        "Consectetur laboris proident non ad. Non in ullamco fugiat nostrud elit culpa. Aliquip Lorem pariatur duis occaecat velit nostrud veniam eu in ad aliqua.",
      registered: "Tuesday, October 31, 2017 4:14 PM",
      latitude: "-9.504912",
      longitude: "-7.968196",
      tags: ["incididunt", "excepteur", "aliqua", "anim", "nostrud"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Erma Mullins",
        },
        {
          id: 1,
          name: "Bowman Barry",
        },
        {
          id: 2,
          name: "Denise Wyatt",
        },
      ],
      greeting: "Hello, Kimberly! You have 7 unread messages.",
      favoriteFruit: "banana",
    },
    {
      _id: "60a5eaac167da6654bfa9333",
      index: 2,
      guid: "23ba0239-628d-440d-83d8-651523c6f356",
      isActive: true,
      balance: "$3,968.93",
      picture: "http://placehold.it/32x32",
      age: 26,
      eyeColor: "green",
      name: {
        first: "Harris",
        last: "Steele",
      },
      company: "ECRATER",
      email: "harris.steele@ecrater.name",
      phone: "+1 (921) 561-2380",
      address: "601 Railroad Avenue, Kapowsin, Marshall Islands, 8886",
      about:
        "Eu officia irure ex id adipisicing duis fugiat laboris enim velit adipisicing ex. Aliqua aliquip deserunt quis incididunt minim. Et fugiat occaecat nulla velit voluptate anim qui duis officia laboris aute.",
      registered: "Sunday, March 22, 2020 7:03 PM",
      latitude: "-33.824833",
      longitude: "105.478548",
      tags: ["mollit", "elit", "ea", "eu", "aute"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Evangelina Jackson",
        },
        {
          id: 1,
          name: "Celeste Watson",
        },
        {
          id: 2,
          name: "Dona Nixon",
        },
      ],
      greeting: "Hello, Harris! You have 5 unread messages.",
      favoriteFruit: "apple",
    },
    {
      _id: "60a5eaac6815547ce127e724",
      index: 3,
      guid: "8a21b679-c9b0-43cb-8b35-5539ea526842",
      isActive: true,
      balance: "$1,749.60",
      picture: "http://placehold.it/32x32",
      age: 32,
      eyeColor: "green",
      name: {
        first: "Blackburn",
        last: "Scott",
      },
      company: "NSPIRE",
      email: "blackburn.scott@nspire.co.uk",
      phone: "+1 (918) 498-2278",
      address: "205 Stockton Street, Carbonville, Texas, 9314",
      about:
        "Veniam in eiusmod laborum reprehenderit eu ipsum incididunt. Sunt exercitation est ea dolore anim mollit ipsum et. Fugiat est veniam consectetur sint velit ipsum est. Anim consequat tempor esse amet commodo fugiat officia mollit aliquip quis duis eiusmod. Cupidatat excepteur ipsum labore velit occaecat. Reprehenderit fugiat sunt fugiat tempor nisi aliqua qui laboris dolore amet amet anim sint.",
      registered: "Sunday, December 25, 2016 3:17 AM",
      latitude: "81.475992",
      longitude: "-167.161341",
      tags: ["laborum", "nulla", "duis", "reprehenderit", "incididunt"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Fulton Delaney",
        },
        {
          id: 1,
          name: "Foster Randall",
        },
        {
          id: 2,
          name: "Mckay Mcdaniel",
        },
      ],
      greeting: "Hello, Blackburn! You have 7 unread messages.",
      favoriteFruit: "apple",
    },
    {
      _id: "60a5eaac3031427cc8b7c5bf",
      index: 4,
      guid: "0300d0ac-ac10-4db6-9842-73347a98ba1a",
      isActive: false,
      balance: "$1,968.24",
      picture: "http://placehold.it/32x32",
      age: 40,
      eyeColor: "green",
      name: {
        first: "Stanton",
        last: "Schneider",
      },
      company: "PANZENT",
      email: "stanton.schneider@panzent.ca",
      phone: "+1 (888) 559-2925",
      address: "593 Rock Street, Emerald, New Mexico, 4306",
      about:
        "Culpa dolore ea qui esse est ipsum eiusmod pariatur ut eu eu laboris. Sint ut nisi reprehenderit cupidatat non. Sint ex ullamco ipsum Lorem labore nisi commodo aliquip non. Eu velit ipsum ipsum irure anim qui est tempor fugiat cupidatat.",
      registered: "Sunday, July 22, 2018 2:03 AM",
      latitude: "-22.795536",
      longitude: "72.459331",
      tags: ["ea", "Lorem", "excepteur", "reprehenderit", "enim"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Williamson Bishop",
        },
        {
          id: 1,
          name: "Cannon Mcintyre",
        },
        {
          id: 2,
          name: "Janell Yang",
        },
      ],
      greeting: "Hello, Stanton! You have 6 unread messages.",
      favoriteFruit: "banana",
    },
    {
      _id: "60a5eaacc5cf1155e083ca75",
      index: 5,
      guid: "651c719f-11b6-421b-92de-da7871c29de7",
      isActive: false,
      balance: "$3,535.38",
      picture: "http://placehold.it/32x32",
      age: 26,
      eyeColor: "green",
      name: {
        first: "Carmen",
        last: "Briggs",
      },
      company: "TELLIFLY",
      email: "carmen.briggs@tellifly.tv",
      phone: "+1 (911) 418-2757",
      address: "593 Engert Avenue, Brecon, Virginia, 9720",
      about:
        "Dolor ut sint amet nostrud commodo anim. Ullamco aliquip non ullamco sit. Quis cillum dolore adipisicing excepteur sunt. Consectetur exercitation nulla anim duis ex eu consectetur laboris. Deserunt nisi aliquip laboris commodo qui nisi esse sint. Pariatur irure dolor exercitation labore fugiat irure ullamco fugiat. Magna occaecat nulla dolore dolor adipisicing nulla exercitation in cupidatat tempor eu dolor.",
      registered: "Saturday, April 17, 2021 12:15 AM",
      latitude: "43.013899",
      longitude: "-132.704883",
      tags: ["ea", "labore", "fugiat", "cupidatat", "irure"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Taylor Singleton",
        },
        {
          id: 1,
          name: "Nita Lara",
        },
        {
          id: 2,
          name: "Hurley Barr",
        },
      ],
      greeting: "Hello, Carmen! You have 10 unread messages.",
      favoriteFruit: "strawberry",
    },
    {
      _id: "60a5eaacb83f9645049509cb",
      index: 6,
      guid: "25c8188e-f904-4c75-8ac1-d7901c83916c",
      isActive: false,
      balance: "$1,394.88",
      picture: "http://placehold.it/32x32",
      age: 24,
      eyeColor: "green",
      name: {
        first: "Elnora",
        last: "Howell",
      },
      company: "NEBULEAN",
      email: "elnora.howell@nebulean.us",
      phone: "+1 (897) 459-3522",
      address: "882 Kenmore Terrace, Wintersburg, Arizona, 326",
      about:
        "Mollit ad dolore aliqua et et velit enim. Elit non reprehenderit veniam amet pariatur esse commodo cillum ipsum adipisicing et ex. Non sunt sunt amet reprehenderit id ea cupidatat irure ea.",
      registered: "Sunday, August 25, 2019 1:23 PM",
      latitude: "-44.126358",
      longitude: "27.569864",
      tags: ["laboris", "amet", "dolor", "esse", "proident"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Sharpe Wilkins",
        },
        {
          id: 1,
          name: "Durham Kelley",
        },
        {
          id: 2,
          name: "Washington Oconnor",
        },
      ],
      greeting: "Hello, Elnora! You have 7 unread messages.",
      favoriteFruit: "banana",
    },
    {
      _id: "60a5eaaceb29db0989c8b28e",
      index: 7,
      guid: "e56e183b-4a74-48d1-80a1-756c6ee06caf",
      isActive: false,
      balance: "$2,392.19",
      picture: "http://placehold.it/32x32",
      age: 38,
      eyeColor: "green",
      name: {
        first: "Walls",
        last: "Raymond",
      },
      company: "CONFERIA",
      email: "walls.raymond@conferia.com",
      phone: "+1 (974) 421-3761",
      address: "964 Tabor Court, Soham, Florida, 5547",
      about:
        "Occaecat excepteur minim anim fugiat. Magna voluptate in laboris dolor voluptate ex veniam laboris ut ut qui aliqua dolore. Elit ipsum laborum elit fugiat id mollit ullamco ea ex anim dolor incididunt excepteur elit. Minim officia exercitation nostrud velit commodo commodo excepteur cillum amet. Esse proident proident esse incididunt labore officia cupidatat sint eiusmod ex nisi. Non minim ut sint sit incididunt.",
      registered: "Sunday, May 18, 2014 4:48 PM",
      latitude: "-10.017727",
      longitude: "-78.13988",
      tags: ["aute", "non", "ad", "in", "deserunt"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Berger Morales",
        },
        {
          id: 1,
          name: "Beverley Simpson",
        },
        {
          id: 2,
          name: "Sybil Holden",
        },
      ],
      greeting: "Hello, Walls! You have 7 unread messages.",
      favoriteFruit: "banana",
    },
    {
      _id: "60a5eaac5ffefc65bdac697d",
      index: 8,
      guid: "23d802b4-6b1a-40c7-bc46-6d6a5c8b50de",
      isActive: false,
      balance: "$1,461.07",
      picture: "http://placehold.it/32x32",
      age: 21,
      eyeColor: "brown",
      name: {
        first: "Brenda",
        last: "Chang",
      },
      company: "GAZAK",
      email: "brenda.chang@gazak.biz",
      phone: "+1 (820) 526-3822",
      address: "464 Bergen Street, Dunnavant, Louisiana, 5843",
      about:
        "Mollit eiusmod aute sint exercitation pariatur commodo sunt. Quis officia laboris est pariatur adipisicing tempor proident amet cupidatat commodo. Anim minim do amet ut enim officia laboris. Officia nostrud duis incididunt ad adipisicing aliquip et nostrud reprehenderit do ullamco adipisicing. Amet eu proident aute eiusmod occaecat veniam velit excepteur laborum cillum. Quis elit adipisicing enim ex irure ex voluptate est quis consequat dolor quis occaecat.",
      registered: "Saturday, December 24, 2016 12:44 PM",
      latitude: "14.720757",
      longitude: "28.021288",
      tags: ["mollit", "ullamco", "amet", "cillum", "proident"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Jeannine Holloway",
        },
        {
          id: 1,
          name: "Valdez Franklin",
        },
        {
          id: 2,
          name: "Gonzales Todd",
        },
      ],
      greeting: "Hello, Brenda! You have 10 unread messages.",
      favoriteFruit: "banana",
    },
    {
      _id: "60a5eaac049463b13de525d8",
      index: 9,
      guid: "36945cd0-9e15-4418-ac98-22a5aacd0a51",
      isActive: true,
      balance: "$3,321.03",
      picture: "http://placehold.it/32x32",
      age: 40,
      eyeColor: "blue",
      name: {
        first: "Jenna",
        last: "Harris",
      },
      company: "DREAMIA",
      email: "jenna.harris@dreamia.net",
      phone: "+1 (869) 594-2502",
      address: "362 Cove Lane, Stonybrook, Wisconsin, 9622",
      about:
        "Aliqua sint dolor laboris enim pariatur id in quis culpa cupidatat reprehenderit sunt voluptate. Do adipisicing exercitation ipsum voluptate et pariatur dolore aute. Occaecat ex enim est enim anim fugiat labore duis laboris officia. Sint adipisicing magna labore amet sunt. Id dolore irure sint est eu mollit laborum do officia eu.",
      registered: "Thursday, August 18, 2016 4:37 AM",
      latitude: "40.434874",
      longitude: "141.67439",
      tags: ["in", "nulla", "adipisicing", "incididunt", "minim"],
      range: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      friends: [
        {
          id: 0,
          name: "Deleon Parker",
        },
        {
          id: 1,
          name: "Amanda Key",
        },
        {
          id: 2,
          name: "Louisa Rowe",
        },
      ],
      greeting: "Hello, Jenna! You have 6 unread messages.",
      favoriteFruit: "banana",
    },
  ];
}
