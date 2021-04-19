import React from "react";

const TodoItem = (props) => {
  const [value, setValue] = React.useState(props.completed);

  const handleChange = (event) => {
    setValue(event.target.checked);
  };

  const labelClassname = value ? "item-label checked" : "item-label";

  return (
    <li className="item-container">
      <label htmlFor={props.id} className={labelClassname}>
        <input
          type="checkbox"
          className="item-checkbox"
          id={props.id}
          checked={Boolean(value)}
          onChange={handleChange}
        />
        {props.title}
      </label>
    </li>
  );
};

export default TodoItem;
