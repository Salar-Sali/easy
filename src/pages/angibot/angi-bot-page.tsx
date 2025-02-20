import { useRef, useState } from "react";
import generatePDF from "react-to-pdf";
import TodoApp, { Todo } from "~/pages/angibot/angibot-items";

export const AngiBotPage = () => {
  const targetRef = useRef(null);
  const [items, setItems] = useState<Todo[]>([]);
  const [name, setName] = useState<string>("");
  const [total, setTotal] = useState(0);

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
