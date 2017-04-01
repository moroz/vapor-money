class RecordTable extends React.Component {
  render () {
    return (
      <table className="unstriped hover">
        <thead>
          <tr>
            <td className="record__date">Date</td>
            <td className="record__description">Description</td>
            <td className="record__amount">Amount</td>
          </tr>
        </thead>
        <tbody>
          {this.props.records.map(rec => (
            <Record
              record={rec}
              key={rec.data.id}
              handleDeleteRecord={this.props.handleDeleteRecord}
              updateRecord={this.props.updateRecord}
              handleError={this.props.handleError}
            />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Balance:</td>
            <td>{amountFormat(this.props.balance)}</td>
          </tr>
        </tfoot>
      </table>
    );
  }
}
