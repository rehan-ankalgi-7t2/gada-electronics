import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@email.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "JethaLal Champaklal Gada",
    email: "jetha@gadaelectronics.com",
    password: bcrypt.hashSync("jalebifafda", 10),
    isAdmin: true,
  },
  {
    name: "Natwarlal Prabhashankar Undhaiwala",
    email: "NattuKaka@gadaelectronics.com",
    password: bcrypt.hashSync("baghaboy", 10),
    isAdmin: true,
  },
  {
    name: "Bagheshwar Dadu Undhaiwala",
    email: "Bagha@gadaelectronics.com",
    password: bcrypt.hashSync("Bawriji", 10),
  },
  {
    name: "Magan",
    email: "Magan@gadaelectronics.com",
    password: bcrypt.hashSync("Sethji", 10),
  },
];

export default users;
