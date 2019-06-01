import React, {Component} from 'react';

class BookDetail extends Component {

    constructor() {
        super();

        this.state = {
            on: false,
        }
    }

    toggleDetail = () => {
      this.setState({
          on: !this.state.on,
      })
    };
    render() {

        return (
            <div className="bookdetail">
                <button className="bookdetail-button" onClick={this.toggleDetail.bind(this)}>Details</button>
                {this.state.on &&
                    <img className="bookdetail-img" alt={this.props.book.title} src={this.props.book.book_image}/>
                }
            </div>
        );
    }
}

export default BookDetail;
