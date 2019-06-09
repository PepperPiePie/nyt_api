import React, {Component} from 'react';
import BookList from './BookList';
import BookMosaic from './BookMosaic';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';

library.add(faList);
library.add(faThLarge);

class Books extends Component {

    render() {
        let subtitle = this.props.subtitle;

        return (
            <div className="books">
                <div className="books-header">
                    <p className="subtitle">{subtitle}</p>
                    <div className="books-view">
                        <FontAwesomeIcon icon="list" className="books-view-icon" onClick={this.props.setListview}/>
                        <FontAwesomeIcon icon="th-large" className="books-view-icon" onClick={this.props.setMosaicview}/>
                    </div>
                </div>
                {this.props.listview
                    ? <BookList books={this.props.books} subtitle={this.props.subtitle} genre={this.props.genre} listview={this.props.listview}/>
                    : <BookMosaic books={this.props.books} subtitle={this.props.subtitle} genre={this.props.genre} listview={this.props.listview}/>
                }
            </div>
        );
    }
}

export default Books;
