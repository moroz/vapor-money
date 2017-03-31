function ErrorCallout (props) {
  let msg = Object.keys(props.errors).map(key => (
    <li key={key}>
      { key.capitalize() + ' ' + props.errors[key] }
    </li>
  ));
  return (
    <div className="callout alert">
      <h3>Errors:</h3>
      {msg}
    </div>
  );
}
