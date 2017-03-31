function InputField (props) {
  return (
    <div className="large-3 columns">
      <input
        type="text"
        name={props.name}
        {...props}
      />
    </div>
  );
}
