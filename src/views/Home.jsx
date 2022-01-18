import './home.css'
import Book from "../components/Book";

function Home({ books, getList }) {

    function prepareBookPageFunc(id, title, author, publisher, year, pages, plot, audience, color) {
        let prepareBookPage = [];
        prepareBookPage.push(id);
        prepareBookPage.push(title);
        prepareBookPage.push(author);
        prepareBookPage.push(publisher);
        prepareBookPage.push(year);
        prepareBookPage.push(pages);
        prepareBookPage.push(plot);
        prepareBookPage.push(audience);
        prepareBookPage.push(color);

        getList(prepareBookPage);
    }

    return (
        <div><h1>Classic children's books</h1>
            <div className='parent'>
                {books.map((book) => {
                    return <div className='book-menu' key={book.id}>
                        <Book id={book.id} title={book.title} author={book.author} color={book.color} publisher={book.publisher} year={book.year} pages={book.pages} plot={book.plot} audience={book.audience} prepareBookPage={prepareBookPageFunc} />
                    </div>
                })}
            </div>
        </div>

    );
}

export default Home;