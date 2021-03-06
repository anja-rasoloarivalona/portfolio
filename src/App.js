import React, { Component } from 'react'
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import DropDownList from './components/DropDownList/DropDownList'
import Sidebar from './components/Sidebar/Siderbar';
import LandingPage from './pages/LandingPage/LandingPage'
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import { IntlProvider} from 'react-intl';
import messages from "./messages"
import queryString from 'query-string';
import Navbar from './components/Navbar/Navbar';
import { Spring } from 'react-spring/renderprops'




class App extends Component {

  state = {
    started: false,
    lang: 'en',
    fullLang: 'english'
  }

  componentDidMount(){
    let parsedQuery = queryString.parse(this.props.location.search)
    if(Object.keys(parsedQuery).length > 0){
      let fullLang = parsedQuery.lang;
      let lang;
      if(fullLang === 'français'){
        lang = 'fr'
      } else {
        lang = "en"
      }  
      this.setState({ lang: lang, fullLang: fullLang}, () => this.props.history.push({
        pathname: this.props.location.pathname,
        search: `lang=${fullLang}`
      }))
    } else {
      this.props.history.push({
        pathname: this.props.location.pathname,
        search: `lang=${this.state.fullLang}`
      })
    }
  }

  componentDidUpdate(prevProps){
   if(prevProps.location.pathname !== this.props.location.pathname){
     this.props.history.push({
       pathname: this.props.location.pathname,
       search: prevProps.location.search
     })
   }
  }

  getStartedHandler = () => {
    this.setState({ started: true})
  }

  selectLangHandler = fullLang => {
    let lang;
    if(fullLang === 'french'){
      fullLang = 'français'
      lang = 'fr'
    } else {
      lang = "en"
    }
    this.setState({ lang, fullLang }, () =>  this.props.history.push({
      pathname: this.props.location.pathname,
      search: `lang=${fullLang}`
    }))
  }


  render() {
    const { started, lang, fullLang } = this.state;
    let windowWidth = window.innerWidth;


    return (
      <IntlProvider locale={lang}
                    messages={messages[lang]}
      >
        <div className={`app ${started ? 'started': ''}`}>
          
          <div className="app__mounting">
              <LandingPage getStartedHandler={this.getStartedHandler}/>
          </div>  

          {windowWidth < 977 && (
            <Navbar started={started}
            selectLangHandler={this.selectLangHandler}
            fullLang={fullLang}
            />
          )}
          {( windowWidth >= 977 && 
            <Sidebar started = {started}/>
          )}


          {started && (

           
          
          <Spring
            from={{marginTop: 1000}}
            to={{marginTop: 0}}
            config={{delay: 2000}}
          >
            {props => (
              <div style={props}>
                <div className="app__container">  
                  <DropDownList 
                      selectItemHandler={this.selectLangHandler}
                      value={fullLang}
                  />
                  <Switch>
                    <Route exact path={process.env.PUBLIC_URL + "/"} component={About}/>
                    <Route path={process.env.PUBLIC_URL + "/projects"}  component={Projects}/>
                    <Route path={process.env.PUBLIC_URL + "/skills"} component={Skills}/>
                    <Route path={process.env.PUBLIC_URL + "/contact"} component={Contact}/>
                    <Redirect to = {process.env.PUBLIC_URL + "/"} />
                  </Switch>
                </div>
              </div>
            )}

          </Spring>
 )}
          

        </div>
      </IntlProvider>
      
    )
  }
}


export default withRouter(App);
