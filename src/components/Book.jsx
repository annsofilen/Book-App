
import { Link } from "react-router-dom";

import './book.css'
import bookShape from '../assets/book-shape.svg';



function Book({ id, title, author, publisher, year, pages, plot, audience, color, prepareBookPage }) {
    function handleClick() {
        prepareBookPage(id, title, author, publisher, year, pages, plot, audience, color);
        console.log(`'${title}' clicked!`)
    }

    return (
        <Link to="/bookpage" style={{ textDecoration: 'none' }}>
            <svg src={bookShape}></svg>
            <div className="book" id={`b${id}`} style={{ backgroundColor: color }} onClick={handleClick} >
                <h3 className="book-text" >{title}</h3>
                <h4 className="book-text"> {author} </h4>
            </div>
        </Link>

    )
}

export default Book;