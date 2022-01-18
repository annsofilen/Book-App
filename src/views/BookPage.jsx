import { Link } from "react-router-dom";

import './book-page.css'

function BookPage({ id, title, author, publisher, year, pages, plot, audience, color }) {


    return (
        <div className="main-parent">

            <div className="first-child">
                <div className="book-front" style={{ backgroundColor: color }}>
                    <div className="text-on-book">
                        <h1 className="text">{title}</h1>
                        <p className="text">{author}</p>
                    </div>
                </div>
            </div>

            <div className="second-child">
                <div>
                    <h1 className="text">{title}</h1>
                    <p className="text">{author}</p>
                    <p className="text">{plot}</p>
                </div>


                <div className="inner-parent" >
                    <div className="inner-child-one">
                        <p className="text" >Pages: {pages}</p>
                        <p className="text" >Audience: {audience}</p>
                    </div>

                    <div className="inner-child-two">
                        <p className="text" id="desc-text">First published: {year}</p>
                        <p className="text" id="desc-text">Publisher: {publisher}</p>
                    </div>
                </div>


                <Link to='/home' className="row">
                    <button className="read-button" id="back-btn">Back</button>
                </Link>
            </div>



        </div>
    )
}

export default BookPage;