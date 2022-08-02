import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  
  state = {
    progress : 10
  }

  setprogress = (progress) =>{
    this.setState({
      progress : progress
    })
  }

  render() {
    return (
      <div >
        <Router>
        <NavBar/>
        <LoadingBar
        color='#f11946'
        height = {3}
        progress = {this.state.progress}
      />
        <Routes>
          <Route exact path='/'  element={<News setprogress = {this.setprogress}  key ="general" pageSize ={5} country ="in" category="general"/>}></Route>
          <Route exact path='/business'  element={<News setprogress = {this.setprogress}   key= "business" pageSize ={5} country ="in" category="business"/>}></Route>
          <Route exact path='/entertainment'   element={<News setprogress = {this.setprogress}   key= "entertainment" pageSize ={5} country ="in" category="entertainment"/>}></Route>
          <Route exact path='/general'element={<News setprogress = {this.setprogress}  key= "general"  pageSize ={5} country ="in" category="general"/>}></Route>
          <Route exact path='/health'  element={<News setprogress = {this.setprogress}  key= "health" pageSize ={5} country ="in" category="health"/>}></Route>
          <Route exact path='/science'  element={<News setprogress = {this.setprogress}  key= "science" pageSize ={5} country ="in" category="science"/>}></Route>
          <Route exact path='/sports'  element={<News setprogress = {this.setprogress}  key= "sports" pageSize ={5} country ="in" category="sports"/>}></Route>
          <Route exact path='/technology'  element={<News setprogress = {this.setprogress}  key= "technology" pageSize ={5} country ="in" category="technology"/>}></Route>
        </Routes>
        </Router>
     </div>
    )
  }
}
