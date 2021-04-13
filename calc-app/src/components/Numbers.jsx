import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
const NUMBERS = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const renderButtons = (onClickNumbers) => {
  return NUMBERS.map((number) => {
    return (
      <Button
        key={number}
        text={number.toString()}
        clickHandler={onClickNumbers}
      ></Button>
    );
  });
};
const Numbers = ({ onClickNumbers }) => (
  <section className="numbers">{renderButtons(onClickNumbers)}</section>
);
Numbers.propTypes = {
  onClickNumbers: PropTypes.func.isRequired,
};
export default Numbers;
