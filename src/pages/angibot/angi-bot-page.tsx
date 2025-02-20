import { useRef, useState } from "react";
import generatePDF from "react-to-pdf";
import styled from "styled-components";
import TodoApp, { Todo } from "~/pages/angibot/angibot-items";

export const DetailsBookingCardDiv = styled.div`
  width: calc(50% - 20px);
  border-radius: 16px;
  height: fit-content;
  padding: 24px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
`;

export const AngiBotPage = () => {
  const targetRef = useRef(null);
  const [items, setItems] = useState<Todo[]>([]);
  const [name, setName] = useState<string>("");
  const [total, setTotal] = useState(0);

  console.log("first");

  return (
    <div>
      <div>
        <span> Enter your name:</span>
        <input onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <span>Enter total cost:</span>
        <input
          onChange={(e) => setTotal(e.target.value as unknown as number)}
        />
      </div>

      <TodoApp setTodos={setItems} todos={items} />

      <div ref={targetRef} style={{ padding: "16px" }}>
        <h2>Fast transport company</h2>
        <p>
          Thank you for dealing with fast transport company, we are so happy to
          work with you, you can see more of our work at our website:
          https://umzug-fasttransport.com/
        </p>
        {/* name */}
        <div>Dear: {name}</div>
        {/* list */}
        {items.map((item, index) => (
          <div>
            {index + 1}. {item.text}
          </div>
        ))}

        {/* total */}
        <div>Total: {total}</div>
      </div>
      <button onClick={() => generatePDF(targetRef, { filename: "page.pdf" })}>
        Download PDF
      </button>
    </div>
  );
};
