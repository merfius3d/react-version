import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import Main from './components/main';
import Details from './containers/details';


const store = createStore (allReducers);
const root = document.getElementById('wrapper');
const siteUrl = 'http://www.merfius.com/';

//root
class Root extends React.Component {
  render() {
    return(
      <div>
                <Head />
                <Content />
                <Footer />
      </div>
    );
  }
}

//main menu
class Menu extends React.Component {
      render() {
          return (
            <div className="menu">
              <Provider store={store}>
                <Main />
              </Provider>
            </div>
           );
      }
  }
//header
class Head extends React.Component {
      render() {
          return (
          <header>
            <div id='header-inside'><br />
              <div className="header-right-side">
                <h1 className="site-title upper-sitename">Freelancer</h1>
                <h1 className="site-title lower-sitename"><a href={siteUrl} rel="home">Merfius</a></h1>
                <p className="site-description">Creating websites and web apps</p>
                <p className="site-description">React-Redux-SCSS version</p>
              </div>
            </div>
            <Menu />
          </header>
           );
      }
  }
  //content
  class Content extends React.Component {
        render() {
            return (
              <Provider store={store}>
                <Details />
              </Provider>
             );
        }
    }
    //footer
  class Footer extends React.Component {
          render() {
              return (
              <footer>
                 Merfius 2019 ©
                <Menu typemenu="footer" />
              </footer>
               );
          }
      }
      
  ReactDOM.render(<Root />, root);
