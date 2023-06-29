import { useState } from "react";

function App() {
  const [pepperoniIsChecked, setPepperoniIsChecked] = useState(false);

  const togglePepperoni = (e) => setPepperoniIsChecked(e.target.checked);

  return (
    <div>
      <h1>Place an Order</h1>
      <form>
        <div>
          <h3>Toppings</h3>
          <input
            type="checkbox"
            id="pepperoni"
            checked={pepperoniIsChecked}
            aria-checked={pepperoniIsChecked}
            onChange={togglePepperoni}
          />
          <label htmlFor="pepperoni">Add pepperoni</label>
        </div>
      </form>
    </div>
  );
}

export default App;
