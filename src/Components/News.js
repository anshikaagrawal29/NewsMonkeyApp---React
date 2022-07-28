import React, { Component } from 'react'
import NavBar from './NavBar'
import NewsItem from './NewsItem'

export default class News extends Component {

 
  constructor()
  {
    super();
    this.state = {
      articles : [],
      page: 1,
      totalResults : 0
    };
  }

  // aysnc will wait till the await function returns promise 
  async componentDidMount()
  {
      let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8c0aec2ab08f43cc8ca385c08fb96cde&page=1&pageSize=5";
      //fetch is used to get the data from api
      let data = await fetch(url);
      let parsedData = await data.json();
      //This is how we set the state variable
      this.setState({articles : parsedData.articles, totalResults : parsedData.totalResults})
  }

  HandlePreviousBtnClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8c0aec2ab08f43cc8ca385c08fb96cde&page=${this.state.page - 1}&pageSize=5`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page : this.page - 1,
      articles : parsedData.articles
    })
    
  };

  HandleNextBtnClick = async () => {

    if(this.state.page + 1 >  Math.ceil(this.state.totalResults/5))
    {
    
    }
    else
    {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=8c0aec2ab08f43cc8ca385c08fb96cde&page=${this.state.page +1 }&pageSize=5`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page : this.page + 1,
        articles : parsedData.articles
      })
    }
    
  };

  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey - Top Headlines</h2> 
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title? element.title.slice(0,45): ""} newsUrl ={element.url} 
            description = {element.description?element.description.slice(0,88): ""} 
            imageUrl = {element.urlToImage? element.urlToImage: "https://images.moneycontrol.com/static-mcnews/2022/07/sensex_nifty-marketup_sensexup-Niftyup-4-770x433.jpg"} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled= {this.state.page<=1} className="btn btn-dark" onClick={this.HandlePreviousBtnClick}> &larr; Previous</button>
          <button type="button"  className="btn btn-dark" onClick={this.HandleNextBtnClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}
