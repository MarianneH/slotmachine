import React from "react";

function SlotMachine() {
  const [fruits, setFruits] = React.useState(["🍎", "🍑", "🥦"]);
  const [message, setMessage] = React.useState("We'll see if you win!");

  function randomNumber(slots) {
    const randIndex = Math.floor(Math.random() * slots.length);
    return randIndex;
  }

  function randomFruits() {
    let slots = ["🍎", "🍑", "🥦"];
    let slotResult = [
      slots[randomNumber(slots)],
      slots[randomNumber(slots)],
      slots[randomNumber(slots)],
    ];

    if (slotResult[0] === slotResult[1] && slotResult[1] === slotResult[2]) {
      setMessage(() => "YOU WIN! 🎉");
    } else {
      setMessage(() => "YOU LOOSE! 💩");
    }

    console.log(slotResult);
    return slotResult;
  }

  return (
    <>
      <h3>{message}</h3>
      <div id="fruits">{fruits}</div>
      <button onClick={() => setFruits(randomFruits())}>Try your luck!</button>
    </>
  );
}

export default SlotMachine;
