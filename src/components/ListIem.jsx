import PropTypes from 'prop-types';

export default function ListItem({ itemData, deleteTodo }) {
  return (
    <li className="p-2 bg-zinc-200 mb-2 rounded flex">
      <span>{itemData.content}</span>
      <button
        onClick={() => deleteTodo(itemData.id)}
        className="ml-auto bg-red-600 w-6 h-6 rounded text-white"
      >
        X
      </button>
    </li>
  );
}

ListItem.propTypes = {
  itemData: PropTypes.shape({
    content: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
};
