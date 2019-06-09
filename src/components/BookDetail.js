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
                    <p className="bookdetail-head">Description </p>
                    <p>{this.props.book.description}</p>
                    <p><span className="bookdetail-head">Publisher </span>{this.props.book.publisher}</p>
                    <a href={this.props.book.amazon_product_url} target="_blank" rel="noopener noreferrer">See on Amazon</a>
                    <p>{this.props.book.weeks_on_list} weeks on the list</p>

                    </div>
                </div>
                }
            </div>
        );
    }
}

export default BookDetail;
