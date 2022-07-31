import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let{title, description, imageUrl, newsUrl, author, publishedAt, source} = this.props;
    return (
      <div className="container my-3"> 
        <div className="card">
        <span class="position-absolute translate-middle badge rounded-pill bg-danger" style={{zIndex : 1, left : "90%"}}>
    {source}</span>
        <img src= {imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{title}... <span class="badge bg-secondary">{author?author:"Unknown"}</span></h5>
            <p className="card-text">{description}...</p>
            <p class="card-text"><small class="text-muted">{new Date(publishedAt).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-dark">Read More</a>
        </div>
      </div>
      </div>
    )
  }
}
