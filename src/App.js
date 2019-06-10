import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ReactComponent as Logo } from './images/NYT-logo.svg';

import Page from './components/Page';
import NotFound from './components/NotFound';

import './styles/style.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import { ScaleLoader } from 'react-spinners';

const API_KEY = "3If5G3vcIAo7p7kAkiFMZNCcEPC3yQ0n";

class App extends Component {

    // API_URL = process.env.API_URL;

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
            style: { height: '75px', width: '400px', fill: '#468778'},
            visited: "",
            listview: true,
            togglerCSS: "menu-toggler hidden",
            genrelistCSS: "genrelist hidden",
            isLoading: true
        };

        this.setGenre = this.setGenre.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.setListview = this.setListview.bind(this);
        this.setMosaicview = this.setMosaicview.bind(this);
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
        // e.target.style.color = '#C8CFD0';
        // e.target.style.backgroundColor = '#468778';
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

    setListview (e) {
        e.preventDefault();

        this.setState({
            listview: true,
        })
    }

    setMosaicview (e) {
        e.preventDefault();

        this.setState({
            listview: false,
        })
    }

    toggleMenu() {
        var css = (this.state.togglerCSS === "menu-toggler active") ? "menu-toggler hidden" : "menu-toggler active";
        var css2 = (this.state.genrelistCSS === "genrelist active") ? "genrelist hidden" : "genrelist active";
        this.setState({
            togglerCSS:css,
            genrelistCSS:css2
        });
    }

    render() {

        if (this.state.isLoading) {
            return <div className="loading">
                <ScaleLoader sizeUnit={"px"} size={15} color={'#468778'} />
            </div>
        }

        return(
            <Router>
                <div className="page">
                    <div className="title">
                        <div className="title-header">
                            <Logo style={this.state.style}/>
                            <h1> The current Best Sellers list</h1>
                        </div>
                        {!this.state.date ? null : <div className="date">Last update {this.state.date}</div>}
                        <div className={this.state.togglerCSS} onClick={this.toggleMenu.bind(this)}><span> </span></div>

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
                                      listview={this.state.listview}
                                      genrelistCSS={this.state.genrelistCSS}
                                      setMosaicview={this.setMosaicview}
                                      setListview={this.setListview}
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
