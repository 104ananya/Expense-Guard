import React from "react";

// 50% time boolean 1 or rest of the time 1
const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style = {{textAlign: 'center', padding: '0 10%'}}>
      Example: <br />
      Add {isIncome ? "income " : "expense "}
      of {isIncome ? "₹100 " : "₹50 "}
      in category {isIncome ? "Salary " : "House "}
      for {isIncome ? "Monday " : "Tuesday "}
    </div>
  );
};

export default InfoCard;
