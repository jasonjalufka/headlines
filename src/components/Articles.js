import React, { Component } from 'react';
import './Articles.css';
import './skeleton.css';
import './normalize.css';

class Articles extends Component {
	render() {
		return(
			<div className="articles">
				<h1>{this.props.source}</h1>
				<ul className="articles-list">
				{
					this.props.articles.map((article, index) => {
						return (
							<li className="article" key={index}>
								<a className="article-img" href={article.url}><img alt={this.props.src} src={article.urlToImage}/></a>
								<a className="article-title" href={article.url}>
									{article.title}
								</a>
								<ul>
									<div className="article-description">
										<p>{article.description}</p>
									</div>
								</ul>
							</li>
						)
					})
				}
				</ul>
			</div>
		)
	}
}

export default Articles;