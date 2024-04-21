import { useState } from "react";
import { InputFieldType } from "../../shared/types/Fields";

const InputBox = ({
  disable,
  icon,
  id,
  name,
  placeholder,
  type,
  value,
}: InputFieldType) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  return (
    <div className="relative w-[100%] mb-4">
      <input
        type={
          type === "password" ? (passwordVisible ? " text" : "password") : type
        }
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        id={id}
        disabled={disable}
        className="input-box"
      />
      <i className={"fi " + icon + " input-icon"}></i>

      {type === "password" ? (
        <i
          className={
            "fi fi-rr-eye" +
            (!passwordVisible ? "-crossed" : "") +
            " input-icon left-[auto] right-4 cursor-pointer"
          }
          onClick={() => setPasswordVisible((curr) => !curr)}
        ></i>
      ) : null}
    </div>
  );
};

export default InputBox;
