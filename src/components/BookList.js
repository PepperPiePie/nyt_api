import React, {Component} from 'react';

class BookList extends Component {

    render() {
        let subtitle = this.props.subtitle;
        let booklist = [];
        this.props.books.forEach((elm) => {
            booklist.push(
                <li key={elm.title}>
                    <div className="book-rank">{elm.rank}.</div>
                    <div className="book-title">{elm.title}</div>
                    <div className="book-author">by {elm.author}</div>
                </li>)
        });
        return (
            <div className="booklist">
                <div className="subtitle">{subtitle}</div>
                <ul>
                    {booklist}
                </ul>
            </div>
        );
    }
}

export default BookList;
