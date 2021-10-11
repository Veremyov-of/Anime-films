import { useDispatch } from 'react-redux';
//style
import '../css/item.css'

//Actions
import { likeAction } from '../store/filmsReducer';
import { deleteAction } from './../store/filmsReducer';

export default function Item(props) {
    const dispatch = useDispatch();
    const info = props.item;
    const index = props.index;

    // const handleLike = () => {
    //     dispatch(likeAction(index));
    // }

    const handleLike = () => {
        dispatch(likeAction(info.title));
    }

    const handleDelete = () => {
        dispatch(deleteAction(index))
    }
    return (
        <div className="item">
            <button onClick={handleDelete} className="item-btn item-close"><img src="./img/close.png" alt="img"/></button>
            <button onClick={handleLike} className={`item-btn item-like ${info.like ? 'like-active' : ''}`}><img src="./img/like.png" alt="img"/></button>
            <div className="item-img"><img src={info.image} alt="img"/></div>
            <h2 className="item-title">{info.title}</h2>
            <h3 className="item-producer">{info.producer}</h3>
            <h4 className="item-date">{info.release_date}</h4>
        </div>
    );
}