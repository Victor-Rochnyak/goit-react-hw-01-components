import PropTypes from "prop-types";

// імпорт стилів
import { TransactionsHistory,TabletThead,TabletTitle,TabletBody,TabletRow,TabletType,TabletCallType} from "./Transaction.styled";

export default function TransactionHistory({ items }) {
  return (
    <TransactionsHistory className="transaction-history">
      <TabletThead>
        <tr>
          <TabletTitle>Type</TabletTitle>
          <TabletTitle>Amount</TabletTitle>
          <TabletTitle>Currency</TabletTitle>
        </tr>
      </TabletThead>

      <TabletBody>
        {items.map((transaction) => (
          <TabletRow key={transaction.id}>
            <TabletType>{transaction.type}</TabletType>
            <TabletCallType>{transaction.amount}</TabletCallType>
            <TabletCallType>{transaction.currency}</TabletCallType>
          </TabletRow>
        ))}
      </TabletBody>
    </TransactionsHistory>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
