import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

//Redux Actions
import { asyncGetDataAction } from './store/asyncActions/asyncGetDataAction';

//Components
import Item from "./components/Item";

//Style
import './css/global.css';

function App() {
  const films = useSelector(state => state.films);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetDataAction());
  }, []);
  return (
    <div>
      <div className="container">
        {films.allItems.map((item, index) => 
          <Item key={index} item={item} />
        )}
      </div>
    </div>
  );
}

export default App;
