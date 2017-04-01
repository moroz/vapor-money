class Record extends React.Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.state = {
      isEdited: false
    };
  }

  handleDelete (e) {
    e.preventDefault();
    axios.request({
      method: 'delete',
      url: '/records/' + this.props.record.data.id,
      headers: CSRF.getHeaders()
    }).then(() => {
      this.props.handleDeleteRecord(this)
    });
  }

  toggleEdit () {
    this.setState({
      isEdited: !this.state.isEdited
    });
  }

  handleEdit (e) {
    e.preventDefault();
    console.log(this);
    var data = {
      description: this.refs.edit_form.refs.description.value,
      date: this.refs.edit_form.refs.date.value,
      amount: this.refs.edit_form.refs.amount.value,
    };
    axios.request({
      method: 'put',
      data: {
        record: data
      },
      url: '/records/' + this.props.record.id,
      headers: CSRF.getHeaders()
    }).then((res) => {
      this.toggleEdit();
      this.props.updateRecord(this.props.record, res.data);
    }).catch(err => {
      this.props.handleError (err.response.data)
    });
  }

  render () {
    var record = this.props.record.data.attributes;
    record['id'] = this.props.record.data.id;
    if (this.state.isEdited) {
      return (
        <EditRecordForm
          record={record}
          handleEdit={this.handleEdit}
          toggleEdit={this.toggleEdit}
          ref="edit_form"
        />
      );
    }
    return (
      <tr>
        <td>{record.date}</td>
        <td>{record.description}</td>
        <td>{amountFormat(record.amount)}</td>
        <td>
          <button className="button alert" onClick={this.handleDelete} > Delete </button>
          <button className="button primary" onClick={this.toggleEdit} > Edit </button>
        </td>
      </tr>
    );
  }
}
