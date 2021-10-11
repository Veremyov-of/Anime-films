import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

//Redux Actions
import { asyncGetDataAction } from './store/asyncActions/asyncGetDataAction';

//Components
import Item from "./components/Item";

//Style
import './css/global.css';
import { sortingAction } from "./store/filmsReducer";

function App() {
  const films = useSelector(state => state.films);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetDataAction());
  }, []);

  const handleSorting = () => {
    dispatch(sortingAction())
  }
  return (
    <div>
      <button onClick={handleSorting} className="sorting">{films.switchItems ? 'All' : 'Only Likes'}</button>
      <div className="container">
        {
          films.switchItems ?
           films.allItems.map((item, index) => 
            <Item key={index} index={index} item={item} />): 
          films.likesItems.length === 0 ? 
            <h1>Empty</h1>:
            films.likesItems.map((item, index) =>
            <Item key={index} index={index} item={item} />
          )
       }
      </div>
    </div>
  );
}

export default App;
