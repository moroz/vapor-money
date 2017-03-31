class RecordFormContainer extends React.Component {
  constructor (props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.valid = this.valid.bind(this);
  }

  valid () {
    let r = this.props.new_record
    return r.date && r.description && r.amount;
  }

  onChange (e) {
    var obj = this.props.new_record;
    obj[e.target.name] = e.target.value;
    this.props.handleChange({
      new_record: obj
    });
  }

  render () {
    return <RecordForm
      onChange={this.onChange}
      disabled={!this.valid()}
      new_record={this.props.new_record}
      handleFormSubmit={this.props.handleFormSubmit}
    />;
  }
}

let Types = React.PropTypes;
RecordFormContainer.propTypes = {
  handleChange: Types.func.isRequired,
  new_record: Types.object.isRequired,
  handleFormSubmit: Types.func.isRequired
}
