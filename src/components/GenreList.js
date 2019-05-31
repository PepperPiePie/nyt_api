import React, {Component} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);

class GenreList extends Component {

    render() {
        let genrelist = [];
        this.props.list.forEach((elm) => {
            genrelist.push(<li key={elm.list_name_encoded} id={elm.list_name_encoded} data-id={elm.display_name} onClick={this.props.setGenre}> {elm.display_name}</li>)
        });
        return (
            <div className="genrelist">
                <div className="genrelist-category">Category</div>
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
