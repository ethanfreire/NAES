import{DirectoryContainer} from "./directory.styles.jsx";
import DirectoryItem from "../directory-item/directory-item.component";

const categories = [
  {
    id: 1,
    title: "Desktop",
    imageUrl: "https://freerangestock.com/sample/40611/desktop-computer.jpg",
    route:'shop/hats'
  },
  {
    id: 2,
    title: "Laptop",
    imageUrl:
      "https://image.shutterstock.com/image-photo/laptop-blank-screen-on-table-260nw-340152863.jpg",
    route:'shop/jackets'
  },
  {
    id: 3,
    title: "Tablet",
    imageUrl:
      "https://freerangestock.com/sample/39891/tablet-computer-on-desk.jpg",
    route:'shop/sneakers'
    },
  {
    id: 4,
    title: "Phones",
    imageUrl:
      "https://thumbs.dreamstime.com/b/woman-s-hands-smartphone-texting-woman-s-hands-typing-smartphone-beach-texting-playing-games-working-105437348.jpg",
    route:'shop/womens'
    },
  {
    id: 5,
    title: "Accessories",
    imageUrl:
      "https://thumbs.dreamstime.com/z/technology-travel-blogger-hi-tech-gadget-accessories-95191717.jpg",
    route:'shop/mens'
    },
];




const Directory = () => {

  
  return (
    <DirectoryContainer>
      {categories.map((category) => {
        return (
          <DirectoryItem key={category.id} category={category}></DirectoryItem>
        );
      })}
    </DirectoryContainer>
  );
};
export default Directory;
