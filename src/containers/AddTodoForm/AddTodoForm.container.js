import { memo } from "react";
import classnames from "classnames";

const Card = ({
  id,
  name,
  email,
  content,
  isEdited,
  isDone,
  setDone,
}) => {
  const isAdmin = false;

  return (
    <div className={classnames('flex flex-col p-3 m-3', {
      'bg-amber-200': isAdmin,
      'bg-gray-200': !isAdmin,
    })}>

      <div className='flex justify-between m-2'>
        <div className='font-semibold'>{name}</div>
        <div>
          <span className='ml-2'>edit</span>
          {!isDone && (
            <span
              className='ml-2'
              onClick={() => setDone(id)}
            >
            done
          </span>
          )}
        </div>
      </div>

      <div className='flex justify-between m-2'>
        <div className='font-semibold'>{email}</div>
      </div>

      <div className='flex m-2'>
        <div className=''>{content}</div>
      </div>

      {isEdited && (
        <div className='flex justify-end'>
          <div className='text-gray-400'>edited</div>
        </div>
      )}

    </div>
  );
}

export default memo(Card);
