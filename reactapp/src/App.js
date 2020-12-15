import React, { useState } from "react";
import "./styles.css";
const emojiDatabase = {
  "🍇": "Grapes",
  "🍈": "Melon",
  "🍉": "Watermelon",
  "🍊": "Tangerine",
  "🍋": "Lemon",
  "🍌": "Banana",
  "🍍": "Pineapple",
  "🍎": "Red Apple",
  "🍏": "Green Apple",
  "🍐": "Pear",
  "🍑": "Peach",
  "🍒": "Cherries",
  "🍓": "Strawberry",
  "🥝": "Kiwi Fruit",
  "🍅": "Tomato",
  "🥥": "Coconut",
  "🥑": "Avocado",
  "🍆": "Eggplant",
  "🥔": "Potato",
  "🥕": "Carrot",
  "🌽": "Ear of Corn",
  "🌶️": "Hot Pepper",
  "🥒": "Cucumber",
  "🥦": "Broccoli",
  "🍄": "Mushroom",
  "🥜": "Peanuts",
  "🌰": "Chestnut",
  "🍞": "Bread",
  "🥐": "Croissant",
  "🥖": "Baguette Bread",
  "🥨": "Pretzel",
  "🥞": "Pancakes",
  "🧀": "Cheese Wedge",
  "🍖": "Meat on Bone",
  "🍗": "Poultry Leg",
  "🥩": "Cut of Meat",
  "🥓": "Bacon",
  "🍔": "Hamburger",
  "🍟": "French Fries",
  "🍕": "Pizza",
  "🌭": "Hot Dog",
  "🥪": "Sandwich",
  "🌮": "Taco",
  "🌯": "Burrito",
  "🥙": "Stuffed Flatbread",
  "🥚": "Egg",
  "🍳": "Cooking",
  "🥘": "Shallow Pan of Food",
  "🍲": "Pot of Food",
  "🥣": "Bowl with Spoon",
  "🥗": "Green Salad",
  "🍿": "Popcorn",
  "🥫": "Canned Food",
  "🍱": "Bento Box",
  "🍘": "Rice Cracker",
  "🍙": "Rice Ball",
  "🍚": "Cooked Rice",
  "🍛": "Curry Rice",
  "🍜": "Steaming Bowl",
  "🍝": "Spaghetti",
  "🍠": "Roasted Sweet Potato",
  "🍢": "Oden",
  "🍣": "Sushi",
  "🍤": "Fried Shrimp",
  "🍥": "Fish Cake with Swirl",
  "🍡": "Dango",
  "🥟": "Dumpling",
  "🥠": "Fortune Cookie",
  "🥡": "Takeout Box",
  "🍦": "Soft Ice Cream",
  "🍧": "Shaved Ice",
  "🍨": "Ice Cream",
  "🍩": "Doughnut",
  "🍪": "Cookie",
  "🎂": "Birthday Cake ",
  "🍰": "Shortcake ",
  "🥧": "Pie ",
  "🍫": "Chocolate Bar ",
  "🍬": "Candy ",
  "🍭": "Lollipop ",
  "🍮": "Custard ",
  "🍯": "Honey Pot ",
  "🍼": "Baby Bottle ",
  "🥛": "Glass of Milk ",
  "☕": "Hot Beverage ",
  "🍵": "Teacup Without Handle ",
  "🍶": "Sake ",
  "🍾": "Bottle with Popping Cork ",
  "🍷": "Wine Glass ",
  "🍸": "Cocktail Glass ",
  "🍹": "Tropical Drink ",
  "🍺": "Beer Mug ",
  "🍻": "Clinking Beer Mugs ",
  "🥂": "Clinking Glasses ",
  "🥃": "Tumbler Glass ",
  "🥤": "Cup with Straw ",
  "🥢": "Chopsticks ",
  "🍽️": "Fork and Knife with ",
  "🍴": "Fork and Knife ",
  "🥄": "Spoon "
};
let emojiData = Object.keys(emojiDatabase);
export default function App() {
  const [emoji, setInput] = useState("");
  const [meaning, setMeaning] = useState("emoji meaning will appear here");
  const getInput = (event) => {
    const emojiValue = event.target.value;
    setInput(emojiValue);

    if (emojiValue in emojiDatabase)
      return setMeaning(emojiDatabase[emojiValue]);
    else return "Not Found";
  };

  const cursorClickHandler = (event) => {
    return setMeaning(emojiDatabase[event.target.id]);
  };
  return (
    <div className="App">
      <h1>Emoji</h1>
      <input onChange={getInput} value={emoji} placeholder="Enter the emoji" />
      <h2 id="emoji">{emoji}</h2>
      <h3 id="emojiMeaning">{meaning}</h3>
      <div className="emoji-list">
        {emojiData.map((item) => {
          return (
            <span
              className="emojiMeaning"
              key={item}
              id={item}
              onClick={cursorClickHandler}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
