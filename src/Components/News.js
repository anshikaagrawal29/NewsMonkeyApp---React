import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'

export default class News extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      articles : [],
      page: 1,
      loading: false
    }

    document.title = `NewsMonkey - ${this.capitalizeFirstLetter(this.props.category)}`
  }

  capitalizeFirstLetter = (string) => {

     return string.charAt(0).toUpperCase() + string.slice(1);
  }  

  async updateNews ()
  {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=8c0aec2ab08f43cc8ca385c08fb96cde&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
      //fetch is used to get the data from api
      let data = await fetch(url);
      let parsedData = await data.json();
      //This is how we set the state variable
      this.setState({
        articles : parsedData.articles,
        totalResults : parsedData.totalResults,
        loading : false})
  }

  // aysnc will wait till the await function returns promise 
  async componentDidMount()
  {
    this.updateNews();
  }

  HandlePreviousBtnClick = async () => {
    this.setState({
      page : this.page - 1,
    })
    this.updateNews();
  };

  HandleNextBtnClick = async () => {
    if(!(this.state.page + 1 >  Math.ceil(this.state.totalResults/5)))
    {
      this.setState({
        page : this.page + 1,
      })
      this.updateNews();
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center">News Monkey - Top Headlines</h2> 
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title? element.title.slice(0,45): ""} newsUrl ={element.url} 
            description = {element.description?element.description.slice(0,88): ""} 
            author = {element.author} publishedAt = {element.publishedAt}
            source = {element.source.name}
            imageUrl = {element.urlToImage? element.urlToImage: "https://images.moneycontrol.com/static-mcnews/2022/07/sensex_nifty-marketup_sensexup-Niftyup-4-770x433.jpg"} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" disabled= {this.state.page<=1} className="btn btn-dark" onClick={this.HandlePreviousBtnClick}> &larr; Previous</button>
          <button type="button" disabled= {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}  className="btn btn-dark" onClick={this.HandleNextBtnClick}>Next &rarr; </button>
        </div>
      </div>
    )
  }
}
