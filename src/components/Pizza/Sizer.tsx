import React from "react";
import { MinusIcon, PlusIcon, DisableMinusIcon } from '../Icons'
import './sizer.scss'

function Sizer(props:any) {
  const {
    name,
    title,
    value = 0,
    minValue = 0,
    onChange = () => {} ,
    icon 
  } = props;

  const onIncrement = () => {
    onChange(name, value + 1);
  };

  const onDecrement = () => {
    if (value > minValue) {
      onChange(name, value - 1);
    }
  };

  return (
    <>
      <div className="sizer-container">
        <div className="sizer-type">
            {icon}
            <p className="pizza-type">{title}</p>
        </div>
        <div className="counter-wrap">
         {value === minValue ? <DisableMinusIcon/> : <span onClick={onDecrement}><MinusIcon/></span> }
          <div className="count-value">{value}</div>         
          <span onClick={onIncrement}><PlusIcon/></span> 
        </div>
      </div>

    </>
  );
}

export { Sizer };
export default Sizer;
