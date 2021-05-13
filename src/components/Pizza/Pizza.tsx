import React from "react";
import Sizer from "./Sizer";
import usePizzaHook from "./usePizzaHook";
import { maxOrderValue, minOrderValue, calculatePrize } from "./utils";
import { PizzaIcon, AdultIcon, ChildrenIcon } from "../Icons";
import './pizza.scss'

function Pizza() {
  const {
    pizzaOrderData: { pizzaCount, customerCount } = {},
    updateCustomerCount,
    updatePizzaCount
  } = usePizzaHook();

  const onUpdatePizzaCount = (key: string, value: number) => {
    const newData: any = {
      small: pizzaCount?.small,
      medium: pizzaCount?.medium,
      large: pizzaCount?.large
    };
    newData[key] = value;
    updatePizzaCount(newData);
  };

  const onUpdateCustomerCount = (key: string, value: number) => {
    const newData: any = {
      adults: customerCount?.adults,
      children: customerCount?.children
    };
    newData[key] = value;
    updateCustomerCount(newData);
  };

  const totalPrice = calculatePrize(pizzaCount, customerCount);

  const maximunErrorMessage =
    totalPrice > maxOrderValue
      ? `Maximum order limit should be ${maxOrderValue}.`
      : "";

    const minimumErrorMessage = 
        totalPrice < minOrderValue ? `Minimum order limit should be ${minOrderValue}` : ''

  return (
    <>
        <div className="header-title">Order <h3 className="title-sub">Pizza</h3></div>
        <div className="order-wrapper">
            <div className="pizza-count">
                <Sizer
                name="small"
                title="SMALL"
                value={pizzaCount.small}
                onChange={onUpdatePizzaCount}
                icon= {<PizzaIcon width={'18px'} height={'18px'}/>}
                />
                <Sizer
                name="medium"
                title="MEDIUM"
                value={pizzaCount.medium}
                onChange={onUpdatePizzaCount}
                icon= {<PizzaIcon width={'20px'} height={'20px'}/>}
                />
                <Sizer
                name="large"
                title="LARGE"
                value={pizzaCount.large}
                onChange={onUpdatePizzaCount}
                icon= {<PizzaIcon width={'24px'} height={'24px'}/>}
                />
            </div>
        <hr/>
            <div className="customer-count">
                <Sizer
                name="adults"
                title="ADULTS"
                value={customerCount.adults}
                onChange={onUpdateCustomerCount}
                icon= {<AdultIcon/>}
                />
                <hr/>
                <Sizer
                name="children"
                title="CHILDREN"
                value={customerCount.children}
                onChange={onUpdateCustomerCount}
                icon= {<ChildrenIcon/>}
                />
            </div>
        </div>
        <div className="order-total">
            <div className="header-title">Order <h3 className="title-sub">Total</h3></div>
            <h3>{totalPrice}</h3>            
        </div>
        <p style={{ color: "red" }}>{ maximunErrorMessage || minimumErrorMessage }</p>
    </>
  );
}

export { Pizza };
export default Pizza;
