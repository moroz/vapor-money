function Record (props) {
  return (
    <tr>
      <td>{props.record.date}</td>
      <td>{props.record.description}</td>
      <td>{amountFormat(props.record.amount)}</td>
    </tr>
  );
}
