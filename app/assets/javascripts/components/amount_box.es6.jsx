function AmountBox (props) {
  return (
    <div className="large-4 columns">
      <div className={"panel callout" + ' ' + String(props.className)}>
        <h4>{props.text}</h4>
        {amountFormat(props.amount)}
      </div>
    </div>
  );
}
