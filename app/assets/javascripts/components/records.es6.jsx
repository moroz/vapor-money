class Records extends React.Component {
  constructor (props) {
    super (props);
    this.state = this.initialState();
    this.state.records = this.props.data;
    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDeleteRecord = this.handleDeleteRecord.bind(this);
    //this.addNewRecord = this.addNewRecord.bind(this);
  }

  initialState () {
    return {
      new_record: {
        description: '',
        date: '',
        amount: ''
      },
      errors: null
    };
  }

  handleChange (obj) {
    this.setState(obj);
  }

  addNewRecord (record) {
    var records = React.addons.update(
      this.state.records,
      { $push: [record] });
    this.setState({
      records: records
    });
  }

  handleDeleteRecord (record) {
    var records = this.state.records.slice();
    var index = records.indexOf(record);
    records.splice(index, 1);
    this.setState({
      records: records
    });
  }

  handleError (err) {
    this.setState({
      errors: err
    });
  }

  handleFormSubmit (e) {
    e.preventDefault();
    axios.request({
      method: 'post',
      url: '/records',
      data: {
        record: this.state.new_record
      },
      headers: CSRF.getHeaders()
    }).then(res => {
      this.addNewRecord(res.data);
      this.setState(this.initialState());
    }).catch(res => {
      this.handleError(res.response.data);
    });
  }

  getBalance () {
    return sum(this.state.records);
  }

  getCredits () {
    var credits = this.state.records.filter(val => (val.amount >= 0));
    return sum(credits);
  }

  getDebits () {
    var debits = this.state.records.filter(val => (val.amount < 0));
    return sum(debits);
  }

  render () {
    return <div className="records">
      <div className="row">
        <AmountBox
          text="Balance"
          amount={this.getBalance()}
          className="primary"
        />
        <AmountBox
          text="Credits"
          amount={this.getCredits()}
          className="success"
        />
        <AmountBox
          text="Debits"
          amount={this.getDebits()}
          className="alert"
        />
      </div>
      <h2 className="description">
        Records
      </h2>
      {this.state.errors ? <ErrorCallout errors={this.state.errors} /> : '' }
      <RecordForm
        handleChange={this.handleChange}
        new_record={this.state.new_record}
        handleFormSubmit={this.handleFormSubmit}
      />
      <RecordTable
        records={this.state.records}
        balance={this.getBalance()}
        handleDeleteRecord={this.handleDeleteRecord}
      />
    </div>;
  }
}

Records.defaultProps = {
  data: []
}
