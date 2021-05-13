import { useState } from "react";
import { handleCustomerCountChange, handlePizzaCountChange } from "./utils";

function usePizzaHook() {
  const [pizzaOrderData, setPizzaOrderData]: any = useState({
    pizzaCount: {
      small: 0,
      medium: 1,
      large: 0
    },
    customerCount: {
      adults: 1,
      children: 0
    }
  });

  const updateCustomerCount = (data: any) => {
    const updatedData = handleCustomerCountChange(data);
    setPizzaOrderData({ ...updatedData });
  };

  const updatePizzaCount = (data: any) => {
    const updatedData = handlePizzaCountChange(data);
    setPizzaOrderData({ ...updatedData });
  };

  return {
    pizzaOrderData,
    updateCustomerCount,
    updatePizzaCount
  };
}

export default usePizzaHook;
