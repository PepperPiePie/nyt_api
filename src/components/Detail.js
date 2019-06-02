import React, {Component} from 'react';

const styles = {
    transition: 'all 0.3s ease-in'
};

class Detail extends Component {

    constructor() {
        super();

        this.state = {
            scale: 0,
        };

        this.toggleDetail = this.toggleDetail.bind(this);
    }

    toggleDetail = () => {
        this.setState({
            scale: !this.state.scale ? 1 : 0
        })
    };

    render() {

        return (
            <div className="bookdetail">
                <button className="bookdetail-button" onClick={this.toggleDetail}>Details</button>

                <img className="bookdetail-img" style={{styles, scale: this.state.translateY}} alt={this.props.book.title} src={this.props.book.book_image}/>

            </div>
        );
    }
}

export default Detail;
