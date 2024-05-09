import React, { useState } from "react";
import { useTodoContext } from "./TodoContext";

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);
  const { todos, setIsMainContentClicked, isMainContentClicked } = useTodoContext();

  const handleImgClick = () => {
    setIsClicked(!isClicked);
    setIsMainContentClicked(!isMainContentClicked);
  };

  const countCompletedTodos = todos.filter((todo) => todo.complete).length;
  const countIncompleteTodos = todos.filter((todo) => !todo.complete).length;

  return (
    <header
      className={`headerContainer ${isClicked ? "darkblueBackground" : ""}`}
    >
      <div className="result">
        <h2
          style={{
            color: isMainContentClicked
              ? "white"
              : setIsMainContentClicked
              ? "darkblue"
              : "white",
          }}
        >
          Всего: {todos.length}
        </h2>
        <h2
          style={{
            color: "red",
            textDecoration: countIncompleteTodos > 0 ? "underline" : "none",
          }}
        >
          Невыполненные: {countIncompleteTodos}
        </h2>
        <h2
          style={{
            color: "rgb(0, 184, 0)",
            textDecoration: countCompletedTodos > 0 ? "underline" : "none",
          }}
        >
          Выполненные: {countCompletedTodos}
        </h2>
      </div>
      <img
        src={
          isClicked
            ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACjUlEQVR4nO2Zy2oUURCGD7lgDBNEScSFujfmFYwYN4KgIvEhkjDeNuJGXMW9PoG3BzGzFKITxcu4cSe6EQ3e0U8K/4GZY5yZc7r7TEf6h4bhTFfV//eprqlT41yFChWGCuAB8NBtdyC47Q4qISVD6XYE2ANMpBICjAO7Q+0GEfEJaAIzRQsBZoBHwAdgVzDhHo53AI/FaSNEDNAA1gJFbCiWxRyPJj5AgOfAvlwD/B3jWRExCheTTESPrQ8uAD7MR2zq5iHGAn/2gwIjwDxwU+3JG+CtPt8Cjtg9ns1e4It8phHhPcVpb+0osE5/2D3znu10HrubGcBV4JeIWpk+D8wCk7pmtdZOS7v3iisTgOsi9xVY8lNni9RbBr7J5porA4CTerom4liA3YLE/AROFMuyD4Ax4KWe7FKE/UpHKR9zwwKw2FEyRyLsR4En8nG2GJaDEbkvEvUMPi7Kx+182YWRaInEoQw+DsvHizyJ1YDXPep/w7t/U+u1DDGn5ONjLI8YIV1drAXX+lRiIWux8f5Fol2xZjP4mMs9tTK87Bcy+LgsH3fcsACcEwkroaOR5fepfCwWw3Lwc/UrEVmOsK/LtpX7STAUwBmRsXZjIcDuuGysvTnlygDgRoeYlV5ppnSqdzSNq64s4E9H2xaD8v6SKlJN15zW2u+E7cRqTGtTRMM46a2d7vi174WWn0429iH1e6Kjrp3y3vmnOhUAaybvqavd1GUDhbv6rouwdux90qOuN3xYz6P9lngbyKUZPhQ5skkxN0s2d6JoMRoeNGO2PvQfK7rFWMyd0cS3cH4A+JF4iN0EvgP7gwn3cX4w8d8KExbTlQWxQkqHSkjZ8D/tSCP3M3aFChVcKH4DW1NFx8NweQsAAAAASUVORK5CYII"
            : "https://cdn-icons-png.flaticon.com/512/37/37857.png"
        }
        alt="icon"
        className="dayIcon"
        onClick={handleImgClick}
      />
    </header>
  );
};

export default Header;
