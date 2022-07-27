import React, { Component } from 'react'
import NavBar from './NavBar'
import NewsItem from './NewsItem'

export default class News extends Component {
 articles = [
  {
    "source": { "id": "the-verge", "name": "The Verge" },
    "author": "Jay Peters",
    "title": "Google is adding Flyover-like aerial views to Maps",
    "description": "Google is adding “photorealistic aerial views” to almost 100 landmarks in Google Maps that look similar to Apple Maps’ Flyover feature. The company is also adding improving biking directions and introducing new location sharing notifications.",
    "url": "https://www.theverge.com/2022/7/27/23279880/google-maps-aerial-views-immersive-cycling-directions-location-sharing-notifications",
    "urlToImage": "https://cdn.vox-cdn.com/thumbor/KpWNPWz6towbNIu_UdmjOdk6HdU=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23453508/acastro_180427_1777_0003.jpg",
    "publishedAt": "2022-07-27T07:01:00Z",
    "content": "Its also improving biking directions\r\nIllustration by Alex Castro / The Verge\r\nGoogle is adding photorealistic aerial views to almost 100 landmarks in Google Maps, the company announced on Wednesday.… [+1477 chars]"
  },
  {
    "source": { "id": "techradar", "name": "TechRadar" },
    "author": "Alex Walker-Todd",
    "title": "We went to the new London Apple Store and all we got was a bag of seeds",
    "description": "The new Brompton Road location lies in city's luxury district",
    "url": "https://www.techradar.com/news/we-went-to-the-new-london-apple-store-and-all-we-got-was-a-bag-of-seeds",
    "urlToImage": "https://cdn.mos.cms.futurecdn.net/2roQeKFwdhWVR2ju2MLTvc-1200-80.jpg",
    "publishedAt": "2022-07-26T20:31:59Z",
    "content": "Apple has proven itself resistant to the economic challenges a lot of consumer technology companies have faced of late and the opening of a new flagship retail store in one of London's most affluent … [+4675 chars]"
  },
  {
    "source": { "id": "reuters", "name": "Reuters" },
    "author": null,
    "title": "Apple stops product sales in Russia, adding to pressure from shippers, car makers",
    "description": "American big brands including Apple, Google, Ford and Harley-Davidson on Tuesday stopped sales and distanced themselves from Russia because of the invasion of Ukraine, joining a growing list of companies from shippers to car makers to energy companies shunnin…",
    "url": "https://www.reuters.com/world/uk/western-companies-pullout-russia-expected-accelerate-2022-03-01/",
    "urlToImage": "https://www.reuters.com/resizer/GxIPeP8CVW_362CGS3271BnJNWo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5UW4ELYYYRMJDCJTZ6HNEXCZJE.jpg",
    "publishedAt": "2022-03-01T22:36:13Z",
    "content": "March 1 (Reuters) - American big brands including Apple, Google, Ford and Harley-Davidson on Tuesday stopped sales and distanced themselves from Russia because of the invasion of Ukraine, joining a g… [+6542 chars]"
  },
  {
    "source": { "id": "wired-de", "name": "Wired.de" },
    "author": "GQ",
    "title": "Apple Neuheiten: Was wir vor der ersten Keynote 2021 wissen!",
    "description": "Bald soll es so weit sein: Bei der ersten Keynote 2021 präsentiert Apple Neues aus Cupertino. Auf diese Produkte dürfen wir uns freuen!",
    "url": "https://www.gq-magazin.de/auto-technik/article/apple-neuheiten-2021-das-wissen-wir-vor-keynote",
    "urlToImage": "https://res.cloudinary.com/wired-de/image/upload/t_teaser_square/v1/0/apple-neuheiten-event-erste-keynote-2021-technik-aufmjpg.jpg",
    "publishedAt": "2021-03-23T17:09:52Z",
    "content": "Auf eines ist im Frühjahr immer Verlass: Apple präsentiert seine (ersten) neuen Produkte. Glauben wir den jüngsten Gerüchten, wird das auch 2021 so sein und dieses Jahr sogar wieder live aus Cupertin… [+2936 chars]"
  },
  {
    "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    "author": null,
    "title": "Akram's yorkers, Hegg's hits, and Chapple's 6 for 18 | ESPNcricinfo.com",
    "description": "This week, we relive the glorious one-day triumphs of Lancashire in the 1990s | ESPNcricinfo.com",
    "url": "http://www.espncricinfo.com/story/_/id/29102935/o-my-akram-my-hegg-long-ago",
    "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1221634_1296x729.jpg",
    "publishedAt": "2020-04-27T10:24:08Z",
    "content": "With still no live cricket in sight, we're digging deep into YouTube to keep ourselves entertained. This week, a trip down memory lane with one of the most dominant one-day sides ever - Lancashire in… [+5185 chars]"
  }
]
 
  constructor()
  {
    super();
    this.state = {
      articles : this.articles
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>News Monkey - Top Headlines</h2> 
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title.slice(0,45)} newsUrl ={element.url} description = {element.description.slice(0,88)} 
            imageUrl = {element.urlToImage} />
            </div>
          })}
        </div>
      </div>
    )
  }
}
