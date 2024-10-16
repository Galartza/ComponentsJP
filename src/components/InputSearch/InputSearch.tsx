'use client'
import React, { FC, useRef } from 'react';
import Style from './InputSearch.module.css';
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

const InputSearch: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      inputRef.current.value = '';  // Limpiar el input
      inputRef.current.blur();      // Forzar la pérdida de foco
    }
  };

  return (
      <form className={Style.form}>
        <button type="submit">
          <CiSearch className={Style.icon}/>
        </button>
        <input 
          ref={inputRef} 
          className={Style.input} 
          type="text" 
          placeholder="Escribe tu texto" 
          required 
        />
        <button className={Style.reset} type="button" onClick={handleReset}>
          <RxCross2 className={Style.icon}/>
        </button>
      </form>
  );
};

export default InputSearch;
