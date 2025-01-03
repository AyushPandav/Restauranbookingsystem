import React from "react";
import "./Menu.css";

const Menu = () => {
  const menuItems = [
    {
      name: "Fried Chicken",
      price: 500,
      description:
        "Crispy, golden-brown chicken pieces coated in a flavorful batter, deep-fried to perfection. This delicious dish is juicy on the inside and crunchy on the outside, making it a favorite snack or main course.",
      imageUrl:
        "https://images.unsplash.com/photo-1626074353765-517a681e40be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    },
    {
      name: "Ramen",
      price: 100,
      description:
        "A flavorful Japanese noodle soup made with rich broth, tender noodles, and a variety of toppings such as soft-boiled eggs, sliced pork, green onions, and nori. It's a warm and comforting dish that satisfies with every slurp.",
      imageUrl:
        "https://images.unsplash.com/photo-1593179241557-bce1eb92e47e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
    {
      name: "Pav Bhaji",
      price: 80,
      description:
        "A popular Indian street food made with mashed vegetables cooked in a spicy, tangy sauce, served with buttered pav (soft bread rolls). It’s a hearty and flavorful dish, often enjoyed with a squeeze of lemon and topped with onions and fresh coriander.",
      imageUrl:
        "https://images.unsplash.com/photo-1606491956689-2ea866880c84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1921&q=80",
    },
    {
      name: "Pizza",
      price: 160,
      description:
        "A universally loved dish made with a crispy dough base topped with tomato sauce, melted cheese, and a variety of toppings such as pepperoni, mushrooms, olives, and more. It's baked until golden and bubbling, offering a delicious combination of flavors.",
      imageUrl:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      name: "Burger",
      price: 150,
      description:
        " A classic American fast food dish consisting of a juicy beef patty (or other protein options) served on a soft bun, typically garnished with lettuce, tomatoes, onions, cheese, and condiments like ketchup and mustard. It's a satisfying and customizable meal.",
      imageUrl:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1899&q=80",
    },
    {
      name: "Butter Chicken",
      price: 340,
      description:
        "A rich and creamy North Indian curry made with tender chicken pieces cooked in a flavorful tomato-based gravy, infused with butter and cream. It's mildly spiced and has a smooth, velvety texture that pairs wonderfully with naan or rice.",
      imageUrl:
        "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <div id="menu">
      <div className="heading">
        <br />
        <h1>Menu</h1>
        <h3>Today's Special</h3>
      </div>
      {menuItems.map((item, index) => (
        <div key={index} className="card">
          <img src={item.imageUrl} alt={item.name} />
          <div className="details">
            <div className="details-sub">
              <h5>{item.name}</h5>
              <h5 className="price">₹{item.price}</h5>
            </div>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;

