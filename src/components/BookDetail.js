import React, {Component} from 'react';

class BookDetail extends Component {

    constructor() {
        super();

        this.state = {
            on: false,
        };

        this.toggleDetail = this.toggleDetail.bind(this);
    }

    toggleDetail = () => {
      this.setState({
          on: !this.state.on,
      })
    };

    render() {

        return (
            <div className="bookdetail">
                <button className="bookdetail-button" onClick={this.toggleDetail}>Details</button>
                {this.state.on &&
                <div className="bookdetail-toggle">
                    <img className="bookdetail-img" alt={this.props.book.title} src={this.props.book.book_image}/>
                    <div className="bookdetail-body">
                    <p><span className="bookdetail-head">Description </span>{this.props.book.description}</p>
                    <p><span className="bookdetail-head">Publisher </span>{this.props.book.publisher}</p>
                    <p><span className="bookdetail-head">{this.props.book.weeks_on_list}</span> weeks on the list</p>
                    <a href={this.props.book.amazon_product_url} target="_blank" rel="noopener noreferrer">Buy it on Amazon</a>
                    </div>
                </div>
                }
            </div>
        );
    }
}

export default BookDetail;
