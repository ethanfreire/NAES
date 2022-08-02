import "./categories.styles.scss";

const App = () => {
  const categories = [
    {
      id: 1,
      title: "Desktop",
    },
    {
      id: 2,
      title: "Laptop",
    },
    {
      id: 3,
      title: "Tablet",
    },
    {
      id: 4,
      title: "Phones",
    },
    {
      id: 5,
      title: "Accessories",
    },
  ];

  return (
    <div className="categories-container">
      {categories.map(({ title, id }) => {
        return (
          <div className="category-container" key={id}>
            <div className="background-image"></div>
            <div className="category-body-container">
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default App;
