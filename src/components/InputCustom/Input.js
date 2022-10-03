function InputCustom({ placeholder, type, children }) {
  return (
    <>
      <input type={type} class="form-control" placeholder={placeholder} />
      {children}
    </>
  );
}

export default InputCustom;
