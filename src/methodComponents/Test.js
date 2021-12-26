import react, { useState, useEffect, useRef } from "react";

const Test = (props) => {
  const [inputValue, setInputValue] = useState({
      username: '',
      password: ''
  });
  const previousInputValue = useRef("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);

  const inputHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      setInputValue(values => ({...inputValue, [name]:value}))
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(inputValue);
  };
  return (
    <div className="main">
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>Usename:</legend>
          <input
            value={inputValue.username}
            name='username'
            onChange={inputHandler}
          />
        </fieldset>
        <fieldset>
          <legend>Password:</legend>
          <input
            type='password'
            value={inputValue.password}
            name='password'
            onChange={inputHandler}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;
