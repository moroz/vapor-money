class Record extends React.Component {
  constructor (props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleDetails = this.toggleDetails.bind(this);
    this.state = {
      isEdited: false,
      details: false
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

  toggleDetails () {
    this.setState({
      details: !this.state.details
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
      url: '/records/' + this.props.record.data.id,
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
    let actions;
    if (this.state.details) {
      return (
        <RecordDetails
          handleDelete={this.handleDelete}
          toggleEdit={this.toggleEdit}
          record={record}
        />
      );
    }
    return (
      <tr>
        <td onClick={this.toggleDetails} className='record__date'>{record.date}</td>
        <td className='record__description'>{record.description}</td>
        <td className='record__amount'>{amountFormat(record.amount)}</td>
      </tr>
    );
  }
}
