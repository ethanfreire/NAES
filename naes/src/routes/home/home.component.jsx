import Directory from "../../components/directory/directory.component";
import { Outlet } from "react-router-dom";


const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Desktop",
      imageUrl: "https://freerangestock.com/sample/40611/desktop-computer.jpg",
    },
    {
      id: 2,
      title: "Laptop",
      imageUrl:
        "https://image.shutterstock.com/image-photo/laptop-blank-screen-on-table-260nw-340152863.jpg",
    },
    {
      id: 3,
      title: "Tablet",
      imageUrl:
        "https://freerangestock.com/sample/39891/tablet-computer-on-desk.jpg",
    },
    {
      id: 4,
      title: "Phones",
      imageUrl:
        "https://thumbs.dreamstime.com/b/woman-s-hands-smartphone-texting-woman-s-hands-typing-smartphone-beach-texting-playing-games-working-105437348.jpg",
    },
    {
      id: 5,
      title: "Accessories",
      imageUrl:
        "https://thumbs.dreamstime.com/z/technology-travel-blogger-hi-tech-gadget-accessories-95191717.jpg",
    },
  ];
  return (
  <div>
    <Outlet></Outlet>
  <Directory categories={categories}></Directory>

  </div>
  );
};

export default Home;
