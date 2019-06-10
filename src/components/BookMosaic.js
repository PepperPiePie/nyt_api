import React, {Component} from 'react';


class BookMosaic extends Component {

    render() {
        let booklist = [];
        this.props.books.forEach((elm) => {
            booklist.push(
                <li key={elm.primary_isbn13}>
                    <div className="bookmosaic-rank">{elm.rank}.</div>
                    <img className="bookmosaic-img" alt={elm.title} src={elm.book_image}/>
                    <div className="book-title">{elm.title}</div>
                    <div className="book-author">by {elm.author}</div>
                    <p><span className="bookdetail-head">Description </span>{elm.description}</p>
                    <p><span className="bookdetail-head">Publisher </span>{elm.publisher}</p>
                    <a href={elm.amazon_product_url} target="_blank" rel="noopener noreferrer">See on Amazon</a>
                </li>)
        });
        return (
            <div className="bookmosaic">
                <ul>
                    {booklist}
                </ul>
            </div>
        );
    }
}

export default BookMosaic;
