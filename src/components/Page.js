import React, {Component} from 'react';

import BookList from './BookList';
import GenreList from './GenreList';

class Page extends Component {

    render() {

        return (
            <div className="container">
                <GenreList list={this.props.list} setGenre={this.props.setGenre}/>
                <BookList books={this.props.books} subtitle={this.props.subtitle}/>
            </div>
        );
    }
}

export default Page;
