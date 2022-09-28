import {memo} from "react";
import classnames from "classnames";
import {useSelector} from "react-redux";

const Card = ({
  id,
  name,
  email,
  content,
  isEdited,
  isDone,
  setDone,
  editCard,
}) => {
  const currentUser =  useSelector((state) => state.userData)

  return (
    <div className={classnames('flex flex-col p-3 m-3', {
      'bg-amber-200': !isDone,
      'bg-gray-200': isDone,
    })}>

      <div className='flex justify-between m-2'>
        <div className='font-semibold'>{name}</div>

        {currentUser.user && (
          <div>
            <button
              className='ml-2'
              onClick={() => editCard(id)}
            >
              🖊️
            </button>
            {!isDone && (
              <button
                className='ml-2'
                onClick={() => setDone(id)}
              >
                ✔️
            </button>
            )}
          </div>
        )}
      </div>

      <div className='flex justify-between m-2'>
        <div className='font-semibold'>{email}</div>
      </div>

      <div className='flex m-2'>
        <div className=''>{content}</div>
      </div>

      <div className='flex justify-end'>
      {isEdited && (
          <div className='text-gray-400 px-1'>edited</div>
      )}
      {isDone && (
          <div className='text-gray-400 px-1'>done</div>
      )}
      </div>

    </div>
  );
}

export default memo(Card);
