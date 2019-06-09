import React, {Component} from 'react';
import BookDetail from './BookDetail';

class BookList extends Component {

    render() {
        let booklist = [];
        this.props.books.forEach((elm) => {
            booklist.push(
                <li key={elm.primary_isbn13}>
                    <div className="book-rank">{elm.rank}.</div>
                    <div className="book-main">
                        <div className="book-title">{elm.title}</div>
                        <div className="book-author">by {elm.author}</div>
                    </div>
                    <BookDetail book={elm}/>
                </li>)
        });
        return (
            <div className="booklist">
                <ul>
                    {booklist}
                </ul>
            </div>
        );
    }
}

export default BookList;
