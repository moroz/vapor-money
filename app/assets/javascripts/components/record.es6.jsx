class Record extends React.Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete (e) {
    e.preventDefault();
    axios.request({
      method: 'delete',
      url: '/records/' + this.props.record.id,
      headers: CSRF.getHeaders()
    }).then(() => {
      this.props.handleDeleteRecord(this)
    });
  }

  render () {
    return (
      <tr>
        <td>{this.props.record.date}</td>
        <td>{this.props.record.description}</td>
        <td>{amountFormat(this.props.record.amount)}</td>
        <td>
          <button
            className="button alert"
            onClick={this.handleDelete}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
