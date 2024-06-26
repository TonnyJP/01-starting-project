import reactImg from "../../assets/react-core-concepts.png";
// eslint-disable-next-line prettier/prettier
import "./Header";
const reactDescriptions = ["Fundamental ", "Crucial ", "Core "];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export const Header = () => {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} Fundamental React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
};
