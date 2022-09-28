import {useDispatch, useSelector} from "react-redux";
import {setData, setPage, setSortCol, setSortDir, setTotalCount} from "./MainPage.reducer";
import api from "../../services/api";
import {useEffect} from "react";
import ReactPaginate from 'react-paginate';
import {useMapData} from "./MainPage.hooks";

const MainPage = () => {
  const { data, page, sortCol, sortDir, totalCount } = useSelector((state) => state.todoList)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('test')
    api.getTodos(page, sortCol, !!sortDir).then((resp) => {
      dispatch(setData(resp.data));
      dispatch(setTotalCount(resp.headers.page));
    });
  }, [page, sortCol, sortDir]);

  const mappedData = useMapData(data);

  const handleSortColChange = (col) => dispatch(setSortCol(col));
  const handleSortDirChange = (direction) => dispatch(setSortDir(direction));
  const handlePageChange = (newPage) => dispatch(setPage(newPage));

  return (
    <div className='p-3'>
      <TodoListTable
        data={mappedData}
        columns={TODO_LIST_COLUMNS}
        setSortCol={handleSortColChange}
        setSortDir={handleSortDirChange}
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
  );
}

export default MainPage;
