//style
import '../css/item.css'

export default function Item(props) {
    const info = props.item;
    return (
        <div className="item">
            <button className="item-btn item-close"><img src="./img/close.png" alt="img"/></button>
            <button className="item-btn item-like"><img src="./img/like.png" alt="img"/></button>
            <div className="item-img"><img src={info.image} alt="img"/></div>
            <h2 className="item-title">{info.title}</h2>
            <h3 className="item-producer">{info.producer}</h3>
            <h4 className="item-date">{info.release_date}</h4>
        </div>
    );
}