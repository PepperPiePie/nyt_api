import React, {Component} from 'react';

import GenreList from './GenreList';
import Welcome from './Welcome';
import Books from './Books';

class Page extends Component {

    render() {

        return (
            <div className="container">
                <GenreList list={this.props.list}
                           setGenre={this.props.setGenre}
                           search={this.props.search}
                           updateSearch={this.props.updateSearch}/>
                {this.props.welcome
                    ? <Welcome/>
                    : <Books books={this.props.books}
                             subtitle={this.props.subtitle}
                             genre={this.props.genre}
                             listview={this.props.listview}
                             setMosaicview={this.props.setMosaicview}
                             setListview={this.props.setListview}/>
                }
                <div className="visited">Page has been visited {this.props.visited} times</div>
            </div>
        );
    }
}

export default Page;
