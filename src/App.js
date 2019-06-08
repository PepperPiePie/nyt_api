import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ReactComponent as Logo } from './images/NYT-logo.svg';

import './styles/style.css';
import 'react-perfect-scrollbar/dist/css/styles.css';

import Page from './components/Page';
import NotFound from './components/NotFound';

const API_KEY = "3If5G3vcIAo7p7kAkiFMZNCcEPC3yQ0n";
// const COUNTAPI_KEY = "865edd60-a3b9-4303-b22a-f150d2535694";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            books: [],
            list: [],
            welcome: true,
            genre: "",
            subtitle: "",
            date: "",
            update: "",
            search: "",
            style: { height: '75px', width: '400px'},
            visited: "",
            isLoading: true
        };

        this.setGenre = this.setGenre.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
    }

    componentDidMount() {
        console.log("App component has mounted");
        this.getGenre();
        this.getVisits();
    }

    getBooks() {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/${this.state.genre}.json?api-key=${API_KEY}`)
            .then((res) => {
                this.setState({
                    books: res.data.results.books,
                    date: res.data.results.bestsellers_date,
                    update: res.data.results.updated,
                    welcome: false
                })
            });
    }

    getGenre() {
        axios.get(`https://api.nytimes.com/svc/books/v3/lists/names?api-key=${API_KEY}`)
            .then((res) => {
                this.setState({
                    list: res.data.results,
                    isLoading: false
                })
            });
    }

    setGenre(e) {
        e.preventDefault();

        this.setState({
            genre: e.target.id,
            subtitle: e.currentTarget.dataset.id,
        }, () => {
            this.getBooks();
        })
    }

    updateSearch(e) {
        //console.log(e.target.value);
        this.setState({
            search: e.target.value
        })
    }

    getVisits() {
        axios.get('https://api.countapi.xyz/hit/newyorktimes-publicapi.herokuapp.com/visits')
            .then( (res) => {
                // console.log(res);
                this.setState({
                    visited: res.data.value
                })
            })
    }

    render() {

        if (this.state.isLoading) {
            return <div>Loading...</div>
        }

        return(
            <Router>
                <div className="page">
                    <div className="title">
                        <div className="title-header">
                            <Logo style={this.state.style}/>
                            <h1> The current Best Sellers list</h1>
                        </div>
                        {!this.state.date ? null : <div className="date">Updates {this.state.update}. Published on {this.state.date}</div>}
                    </div>
                    <Switch>
                        <Route exact path={'/'}
                            render={(props) =>
                                <Page {...props}
                                      books={this.state.books}
                                      list={this.state.list}
                                      welcome={this.state.welcome}
                                      subtitle={this.state.subtitle}
                                      setGenre={this.setGenre}
                                      search={this.state.search}
                                      visited={this.state.visited}
                                      updateSearch={this.updateSearch}/>}
                        />
                        <Route component={NotFound} />
                    </Switch>
                </div>
            </Router>

    )
    };
}

export default App;
