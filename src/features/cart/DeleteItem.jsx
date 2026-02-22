import { useDispatch } from 'react-redux';
import { deleteItems } from './cartSlice';
import Button from '../../ui/Button';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(deleteItems(pizzaId))}>
      Delete
    </Button>
  );
}

export default DeleteItem;
