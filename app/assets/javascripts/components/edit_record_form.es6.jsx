class EditRecordForm extends React.Component {
  render () {
    return (
      <tr>
        <td colSpan={4}>
          <form onSubmit={this.props.handleEdit}>
            <input
              type="text"
              ref="date"
              name="date"
              defaultValue={ this.props.record.date }
            />
            <input
              type="text"
              ref="description"
              name="description"
              defaultValue={this.props.record.description}
            />
            <input
              type="text"
              ref="amount"
              name="amount"
              defaultValue={this.props.record.amount}
            />
            <input
              type="submit"
              className="button primary"
              value="Update" />
            <button
              className="button secondary"
              onClick={ this.props.toggleEdit }
            >
              Cancel
            </button>
          </form>
        </td>
      </tr>
    );
  }
}

let Types = React.PropTypes;
EditRecordForm.propTypes = {
  record: Types.object.isRequired,
  toggleEdit: Types.func.isRequired,
  handleEdit: Types.func.isRequired
}
