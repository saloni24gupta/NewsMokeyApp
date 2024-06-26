import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

  constructor() {
    super();
    console.log("hello i m a connstructor")
    this.state = {
      articles: [],
      loading: false
    }
  }

  async componentDidMount() {
    let url = "https://newsapi.org/v2/everything?q=bitcoin&apiKey=02ceb65115d64a8190ca3567b3773afa&page=2"
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData.articles[0])
    this.setState({ articles: parsedData.articles, totalResults:  parsedData.totalResults})
  }

  handlePrevClick = async () =>{
    console.log("next");
    let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=02ceb65115d64a8190ca3567b3773afa&page=${this.state.page - 1}&pageSize=30`
    let data = await fetch(url)
    let parsedData = await data.json()
    console.log(parsedData.articles[0])
    this.setState({ articles: parsedData.articles })

  }
  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/pageSize)) {

    }
    else {
      let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=02ceb65115d64a8190ca3567b3773afa&page=${this.state.page + 1}&pageSize=30`
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData.articles[0]);
      this.setState({ 
        page: this.state.page + 1,
        articles: parsedData.articles })
    }

  }


render() {

  return (
    <div className='container my-3'>
      <h2>NewsMonkey - Top Headlines</h2>
      <div className="row">
        {this.state.articles.map((element) => {
          return <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
      </div>

    </div>
  )

}
}


export default News
