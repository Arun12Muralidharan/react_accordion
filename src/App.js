import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [openNum, setOpenNum] = useState(null);

  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          title={item.title}
          openNum={openNum}
          setOpenNum={setOpenNum}
          num={index + 1}
          key={index}
        >
          {item.text}
        </AccordionItem>
      ))}
      <AccordionItem
        title={"test question 1"}
        openNum={openNum}
        setOpenNum={setOpenNum}
        num={23}
        key={22}
      >
        <p>
          test answer
          <ul>
            <li>list item 1</li>
            <li>list item 2</li>
            <li>list item 3</li>
          </ul>
        </p>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ num, title, openNum, setOpenNum, children }) {
  const visible = num === openNum;

  function handleOpen() {
    setOpenNum(visible ? null : num);
  }

  return (
    <div className={`item ${visible ? "open" : ""}`} onClick={handleOpen}>
      <p className="number">{num < 10 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{!visible ? `+` : `-`}</p>
      {visible && <div className="content-box">{children}</div>}
    </div>
  );
}
