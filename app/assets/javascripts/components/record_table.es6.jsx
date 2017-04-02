class RecordTable extends React.Component {
  constructor(props) {
    super (props);
    this.state = {
      showDetails: false
    }
  }

  render () {
    let recordRows = [];
    this.props.records.forEach(rec => {
      recordRows.push(<Record
        record={rec}
        key={rec.data.id}
        handleDeleteRecord={this.props.handleDeleteRecord}
        updateRecord={this.props.updateRecord}
        handleError={this.props.handleError}
      />);
      if (this.state.showDetails == rec.data.id) {
        recordRows.push(<RecordDetails
          record={rec}
          key={rec.data.id + "_details"}
        />);
      }
    });

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
            {recordRows}
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
