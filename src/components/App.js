import React, { Component } from 'react'
import Articles from './Articles'
import Search from './Search'
import Analyze from './Analyze'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      newsID: 'bbc-news',
      articles: [],
      sentiment: '',
      response: ''
    }

    this.fetchNewsSource = this.fetchNewsSource.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleAnalyze = this.handleAnalyze.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    return (
      <div className='App row'>
        <div className='twelve-columns'>
          <header className='App-header'>
            <h1 onClick={() => this.handleClick()}className='App-title'>Headlines</h1>
          </header>
        </div>
        <Search source={this.state.newsID} handleChange={this.handleSearch} />
        <Analyze sentiment={this.state.sentiment} />
        <Articles articles={this.state.articles} source={this.state.newsID} />
      </div>
    )
  }

  handleSearch (event) {
    this.fetchNewsSource(event.target.value)
  }

  handleAnalyze (input) {
    this.fetchSentiment(input)
  }

  handleClick () {
    axios.get('http://204.48.22.52/api/hi')
      .then(res => console.log(res.data))
  }

  fetchSentiment (input) {
    let data = Array.from(input, x => x.title)
    console.log('Data: ' + data)
    axios.post('http://204.48.22.52/api/hello', data)
      .then(res => {
        this.getAvgSentiment(res.data)
      })
  }

  getAvgSentiment (sentiment) {
    let total = sentiment.length
    let sum = 0
    for (let index = 0; index < sentiment.length; index++) {
      sum += sentiment[index]
    }
    let avg = sum / total
    this.setState({
      sentiment: avg
    })
  }

  fetchNewsApi (url) {
    const Httpreq = new XMLHttpRequest()
    Httpreq.open('GET', url, false)
    Httpreq.send(null)
    var data = JSON.parse(Httpreq.responseText)
    var source = data.source
    var articles = data.articles
    console.log(data.articles)

    this.setState({
      newsID: source,
      articles: articles,
      sentiment: ''
    })

    this.fetchSentiment(articles)
  }

  fetchNewsSource (src) {
    let url = 'https://newsapi.org/v1/articles?source=' + src + '&sortBy=top&apiKey=fa27095c07154c5f8db9734d537852d4'
    this.fetchNewsApi(url)
  }

  componentDidMount () {
    let url = 'https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=fa27095c07154c5f8db9734d537852d4'
    this.fetchNewsApi(url)
  }
}

export default App
