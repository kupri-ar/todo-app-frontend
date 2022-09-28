import {Card} from "../../components/Card";
import api from "../../services/api";
import {updateTodo} from "../../store/Todo.reducer";
import {useDispatch} from "react-redux";

const MainPageComponent = ({ items, openAddTodoModal }) => {
  const dispatch = useDispatch();
  const handleSetDone = async(id) => {
    try {
      await api.updateTodo({id: id, is_checked: true}).then(resp => {
        dispatch(updateTodo(resp.data))
      });

    } catch (err) {
        console.log(err)
      }
    }

    const handleEditCard = (item) => {
      openAddTodoModal(item);
    }

  return (
    <div className='flex flex-col w-full justify-center'>
      {items.map(item => (
        <Card
          id={item.id}
          name={item.name}
          email={item.email}
          content={item.content}
          isEdited={item.edited_by_admin}
          isDone={item.is_checked}
          setDone={() => handleSetDone(item.id)}
          editCard={() => handleEditCard(item)}
        />
      ))}
    </div>
  );
}

export default MainPageComponent;
