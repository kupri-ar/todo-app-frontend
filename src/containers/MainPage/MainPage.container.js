import {useDispatch, useSelector} from "react-redux";
import {setData, setPage, setSortCol, setSortDir, setTotalCount} from "./MainPage.reducer";
import api from "../../services/api";
import {useEffect} from "react";
import ReactPaginate from 'react-paginate';
import MainPageComponent from "./MainPage.component";
import {useAddTodoModal} from "./MainPage.hooks";
import './MainPage.css';

const MainPage = () => {
  const { data, page, sortCol, sortDir, totalCount } = useSelector((state) => state.todoList)
  const dispatch = useDispatch();

  const [ addTodoModal, openAddTodoModal ] = useAddTodoModal();

  useEffect(() => {
    console.log('test')
    api.getTodos(page, sortCol, !!sortDir).then((resp) => {
      dispatch(setData(resp.data));
      dispatch(setTotalCount(resp.headers.page));
    });
  }, [page, sortCol, sortDir]);

  const handleSortColChange = (col) => dispatch(setSortCol(col));
  const handleSortDirChange = (direction) => dispatch(setSortDir(direction));
  const handlePageChange = (newPage) => dispatch(setPage(newPage));

  return (
    <div className='flex w-full justify-center'>
      <div className='flex flex-col p-3 w-[500px] max-w-[750px]'>
        {/*<Select/>*/}

        <MainPageComponent
          items={data}
        />

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageChange}
          pageRangeDisplayed={5}
          pageCount={totalCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>

      <button
        onClick={openAddTodoModal}
        className='w-[60px] h-[60px] bg-amber-200 rounded-[50%] absolute bottom-5 right-5 text-[30px]'
      >
        +
      </button>

      {addTodoModal}
    </div>
  );
}

export default MainPage;
