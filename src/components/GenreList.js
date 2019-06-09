import React, {Component} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);
library.add(faSearch);

class GenreList extends Component {

    render() {

        let genrelist = [];
        let filteredGenre = this.props.list.filter(
            (elm) => {
                return elm.display_name.toLowerCase().indexOf(this.props.search) !== -1
            }
        );

        filteredGenre.forEach((elm) => {
            genrelist.push(
                <li key={elm.list_name_encoded}
                    id={elm.list_name_encoded}
                    data-id={elm.display_name}
                    onClick={this.props.setGenre}>
                    {elm.display_name}
                </li>)
        });

        return (
            <div className="genrelist">
                <div className="genrelist-header">
                    <div className="genrelist-category">Categories</div>
                    {!this.props.search 
                    ?
                    <div className="search">
                        <FontAwesomeIcon icon="search" className="search-button"/>
                        <input className="search-input"
                           type="text"
                           placeholder="Search"
                           value={this.search}
                           onChange={this.props.updateSearch}/>
                    </div>
                    : 
                    <div className="search" style={{width: '160px', paddingLeft: '15px'}}>
                        <FontAwesomeIcon icon="search" className="search-button" style={{color: 'white'}}/>
                        <input className="search-input"
                           type="text"
                           placeholder="Search"
                           value={this.search}
                           onChange={this.props.updateSearch}
                           style={{width: '100%'}}/>
                    </div>}
                </div>
                <PerfectScrollbar>
                    <ul>
                        {genrelist}
                    </ul>
                </PerfectScrollbar>
                <FontAwesomeIcon icon="angle-down" className="genrelist-icon"/>
            </div>
        );
    }
}

export default GenreList;
