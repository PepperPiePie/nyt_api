import React, {Component} from 'react';

import BookList from './BookList';
import GenreList from './GenreList';
import Welcome from './Welcome';

class Page extends Component {

    render() {

        return (
            <div className="container">
                <GenreList list={this.props.list} setGenre={this.props.setGenre} search={this.props.search} updateSearch={this.props.updateSearch}/>
                {this.props.welcome
                    ? <Welcome/>
                    : <BookList books={this.props.books} subtitle={this.props.subtitle} genre={this.props.genre}/>
                }
                <div className="visited">Page has been visited {this.props.visited} times</div>
            </div>
        );
    }
}

export default Page;
