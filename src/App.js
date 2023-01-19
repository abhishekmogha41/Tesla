import "./App.css";
import Header from "./Component/Header/Header";
import Body from "./Component/Body/Body";

function App() {
  const data = [
    {
      name: "Model 3",
      para: "Schedule a Demo Drive",
      leftbtn: "Custom Order",
      rightBtn: "Existing Inventory",
      background: "../../../public/images/model-3.jpg",
      arrow: true,
    },
    {
      name: "Model Y",
      para: "Schedule a Demo Drive",
      leftbtn: "Custom Order",
      rightBtn: "Existing Inventory",
      background: "../../../public/images/model-y.jpg",
    },
    {
      name: "Model S",
      para: "Schedule a Demo Drive",
      leftbtn: "Custom Order",
      rightBtn: "Existing Inventory",
      background: "../../../public/images/model-s.jpg",
    },
    {
      name: "Model X",
      para: "Schedule a Demo Drive",
      leftbtn: "Custom Order",
      rightBtn: "Existing Inventory",
      background: "../../../public/images/model-x.jpg",
    },
    {
      name: "Solar panels",
      para: "Lowest Cost Solar Panels in America",
      leftbtn: "Custom Order",
      rightBtn: "Existing Inventory",
      background: "../../../public/images/solar-panel.jpg",
    },
    {
      name: "Solar Roof",
      para: "Produce Clean Energy From Your Roof",
      leftbtn: "Custom Order",
      rightBtn: "Existing Inventory",
      background: "../../../public/images/solar-roof.jpg",
    },
    {
      name: "Accessories",
      para: "",
      leftbtn: "Custom Order",
      background: "../../../public/images/accessories.jpg",
    },
  ];
  return (
    <>
      <Header />
      <Body
        name={data[0].name}
        para={data[0].para}
        leftbtn={data[0].leftbtn}
        rightBtn={data[0].rightBtn}
        background={data[0].background}
      ></Body>
      <Body
        name={data[1].name}
        para={data[1].para}
        leftbtn={data[1].leftbtn}
        rightBtn={data[1].rightBtn}
        background={data[1].background}
      ></Body>
      <Body
        name={data[2].name}
        para={data[2].para}
        leftbtn={data[2].leftbtn}
        rightBtn={data[2].rightBtn}
        background={data[2].background}
      ></Body>
      <Body
        name={data[3].name}
        para={data[3].para}
        leftbtn={data[3].leftbtn}
        rightBtn={data[3].rightBtn}
        background={data[3].background}
      ></Body>
      <Body
        name={data[4].name}
        para={data[4].para}
        leftbtn={data[4].leftbtn}
        rightBtn={data[4].rightBtn}
        background={data[4].background}
      ></Body>
      <Body
        name={data[5].name}
        para={data[5].para}
        leftbtn={data[5].leftbtn}
        rightBtn={data[5].rightBtn}
        background={data[5].background}
      ></Body>
      <Body
        name={data[6].name}
        para={data[6].para}
        leftbtn={data[6].leftbtn}
        rightBtn={data[6].rightBtn}
        background={data[6].background}
      ></Body>
    </>
  );
}

export default App;
