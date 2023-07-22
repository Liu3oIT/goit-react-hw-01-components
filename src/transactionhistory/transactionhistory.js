import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <thead className="freezz-head">
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className="info-for-type">
        {transactions.map(info => (
          <tr key={info.id}>
            <td className="info-type">{info.type}</td>
            <td className="info-type">{info.amount}</td>
            <td className="info-type">{info.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  data: PropTypes.array,
};
