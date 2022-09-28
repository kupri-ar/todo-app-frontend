import {Card} from "../../components/Card";

const MainPageComponent = ({ items }) => {
  const handleSetDone = (id) => {

  }

  return (
    <div className='flex flex-col w-full justify-center'>
      {items.map(item => (
        <Card
          id={item.id}
          name={item.name}
          email={item.email}
          content={item.content}
          isEdited={item.isEdited}
          isDone={item.isDone}
          setDone={() => handleSetDone(item.id)}
        />
      ))}
    </div>
  );
}

export default MainPageComponent;
