import API from "./API";

function generateToken() {
  return Math.random().toString(36).substring(3);
}
const users = [
  {
    name: "Mario Speedwagon",
    email: "",
    picture: "https://randomuser.me/api/portraits/men/81.jpg",
  },
  {
    name: "Paul Molive",
    email: "",
    picture: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Anna Rexia",
    email: "",
    picture: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Walter Melon",
    email: "",
    picture: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Maya Didas",
    email: "",
    picture: "https://randomuser.me/api/portraits/women/85.jpg",
  },
  {
    name: "Anna Sthesia",
    email: "",
    picture: "https://randomuser.me/api/portraits/women/85.jpg",
  },
  {
    name: "Pete Sariya",
    email: "",
    picture: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Greta Life",
    email: "",
    picture: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    name: "Robin Banks",
    email: "",
    picture: "https://randomuser.me/api/portraits/men/72.jpg",
  },
  {
    name: "Maya Didas",
    email: "",
    picture: "https://randomuser.me/api/portraits/women/24.jpg",
  },
];

export default function () {
  for (let i = 0; i < users.length; i++) {
    API.register({
      username: generateToken(),
      password: "xyz",
      name: users[i].name,
      email: users[i].name.replace(/\s/g, "") + "@email.com",
      picture: users[i].picture,
      role: "student",
    });
  }
}
