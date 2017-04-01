class RecordDetails extends React.Component {
  render () {
    return (
      <tr className='record record--is-open'>
        <td colSpan={3}>
          <strong>Date:</strong>
          {' '}
          {this.props.record.date}
          {' '}
          <strong>Description:</strong>
          {' '}
          {this.props.record.description}
          {' '}
          <strong>Amount:</strong>
          {' '}
          {this.props.record.amount}
          </td>
        </tr>
    )
  }
}



