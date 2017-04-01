function ErrorCallout (props) {
  let msg;
  if (typeof props.errors === 'string') {
    msg = props.errors.slice(0,500);
  } else if (Array.isArray(props.errors)) {
    msg = Object.keys(props.errors).map(key => (
      <li key={key}>
        { key.capitalize() + ' ' + props.errors[key] }
      </li>))
  } else {
    msg = '';
  }
  return (
    <div className="callout alert">
      <h3>Errors:</h3>
      {msg}
    </div>
  );
}
