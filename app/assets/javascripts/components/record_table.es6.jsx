class RecordTable extends React.Component {
  render () {
    return (
      <table className="unstriped">
        <thead>
          <tr>
            <td>Date</td>
            <td>Description</td>
            <td>Amount</td>
            <td>Actions</td>
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
            <td />
          </tr>
        </tfoot>
      </table>
    );
  }
}
