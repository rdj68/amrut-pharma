const navItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  {
    title: "Courses",
    url: "/courses",
    submenu: [
      { title: "D. Pharma", url: "/d-pharma" },
      { title: "B. Pharma", url: "/b-pharma" },
      { title: "M. Pharma", url: "/m-pharma" },
      { title: "Pharma D", url: "/pharma-d" },
      { title: "Ph. D.", url: "/phd" },
    ],
  },
  { title: "Academics", url: "/academics" },
  { title: "R&D", url: "/rd" },
  {
    title: "IIC",
    url: "/iic",
  },
  { title: "Students", url: "/students" },
  { title: "Training and Placement", url: "/training-placement" },
  { title: "Events", url: "/events" },
  { title: "Workshop", url: "/workshop" },
  { title: "E Journal", url: "/e-journal" },
  { title: "NAAC", url: "/naac" },
];
export default navItems;
