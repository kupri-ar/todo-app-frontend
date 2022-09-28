import {useDispatch, useSelector} from "react-redux";
import {setData, setPage, setSortCol, setSortDesc, setPageCount} from "../../store/Todo.reducer";
import api from "../../services/api";
import {useEffect} from "react";
import ReactPaginate from 'react-paginate';
import MainPageComponent from "./MainPage.component";
import {useAddTodoModal} from "./MainPage.hooks";
import './MainPage.css';
import Select from "react-select";
import Button from "../../components/Button/Button.component";


const MainPage = () => {
  const sortOptions = [
    { value: 'name', label: 'Name' },
    { value: 'email', label: 'Email' },
    { value: 'is_checked', label: 'Done' }
  ]
  const { data, page, sortCol, sortDesc, pageCount } = useSelector((state) => state.todoList)
  const dispatch = useDispatch();

  const [ addTodoModal, openAddTodoModal, setCurrentItem ] = useAddTodoModal();

  useEffect(() => {
    api.getTodos(page, sortCol, !!sortDesc).then((resp) => {
      dispatch(setData(resp.data));
      dispatch(setPageCount(resp.headers['x-pagination-page-count']));
    });
  }, [page, sortCol, sortDesc]);

  const handleSortColChange = (col) => dispatch(setSortCol(col.value));
  const handleSortDirChange = () => dispatch(setSortDesc(!sortDesc));
  const handlePageChange = (newPage) => dispatch(setPage(newPage.selected + 1));

  return (
    <div className='flex w-full justify-center'>

      {data.length > 0 ? (
          <div className='flex flex-col p-3 w-[500px] max-w-[750px]'>

            <div className='flex justify-end px-4'>
              <Select
                className='w-[200px]'
                options={sortOptions}
                onChange={handleSortColChange}
              />
              <button className='ml-2' onClick={handleSortDirChange}>⇅</button>
            </div>

            <MainPageComponent
              items={data}
              openAddTodoModal={openAddTodoModal}
              setCurrentItem={setCurrentItem}
            />

            <div >
              <ReactPaginate
                className='pagination'
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageChange}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
              />
            </div>

          </div>
        )
        :
        (
          <div className='p-10'>No items yet</div>
        )
      }

      <Button
        onClick={() => openAddTodoModal(null)}
        className='w-[60px] h-[60px] bg-amber-200 rounded-[50%] absolute bottom-5 right-5 text-[30px]'
      >
        +
      </Button>

      {addTodoModal}
    </div>
  );
}

export default MainPage;
