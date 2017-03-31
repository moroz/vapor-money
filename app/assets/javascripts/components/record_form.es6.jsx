class RecordForm extends React.Component {
  render () {
    return (
      <form onSubmit={this.props.handleFormSubmit} >
        <div className="row">
          <InputField
            name="date"
            value={this.props.new_record.date}
            onChange={this.props.onChange}
            placeholder="Date"
          />
          <InputField
            name="description"
            value={this.props.new_record.description}
            onChange={this.props.onChange}
            placeholder="Description"
          />
          <InputField
            name="amount"
            value={this.props.new_record.amount}
            onChange={this.props.onChange}
            placeholder="Amount"
          />
          <div className="large-3 columns">
            <input
              type="submit"
              value="Create record"
              className="button expanded"
              disabled={this.props.disabled}
            />
          </div>
        </div>
      </form>
    );
  }
}

let Types = React.PropTypes;
RecordForm.propTypes = {
  onChange: Types.func.isRequired,
  new_record: Types.object.isRequired,
  handleFormSubmit: Types.func.isRequired
}
