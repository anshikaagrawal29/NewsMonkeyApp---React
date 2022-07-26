import React, { Component } from 'react'
import NavBar from './NavBar'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey - Top Headlines</h2> 
        <div className="row my-3">
            <div className='col-md-4'>
            <NewsItem title="My Title" description = "Description" />
            </div>
            <div className='col-md-4'>
            <NewsItem title="My Title" description = "Description"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="My Title" description = "Description"/>
            </div>
        </div>
        <div className="row my-3">
            <div className='col-md-4'>
            <NewsItem title="My Title" description = "Description"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="My Title" description = "Description"/>
            </div>
            <div className='col-md-4'>
            <NewsItem title="My Title" description = "Description"/>
            </div>
        </div>
      </div>
    )
  }
}
