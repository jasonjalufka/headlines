import React, { Component } from 'react';
import './Search.css';

class Search extends Component {

	render() {
		const sources=[
			{"source":"abc-news-au"							,"name":"ABC News (AU)"},
			{"source":"al-jazeera-english"			,"name":"Al Jazeera English"},
			{"source":"ars-technica"						,"name":"Ars Technica"},
			{"source":"associated-press"				,"name":"Associated Press"},
			{"source":"bbc-news"								,"name":"BBC News"},
			{"source":"bbc-sport"								,"name":"BBC Sport"},
			{"source":"bild"										,"name":"Bild"},
			{"source":"bloomberg"								,"name":"Bloomberg"},
			{"source":"breitbart-news"					,"name":"Breitbart News"},
			{"source":"business-insider"				,"name":"Business Insider"},
			{"source":"business-insider-uk" 		,"name":"Business Insider (UK)"},
			{"source":"buzzfeed"								,"name":"Buzzfeed"},
			{"source":"cnbc"										,"name":"CNBC"},
			{"source":"cnn"											,"name":"CNN"},
			{"source":"daily-mail"							,"name":"Daily Mail"},
			{"source":"engadget"								,"name":"Engadget"},
			{"source":"entertainment-weekly"		,"name":"Entertainment Weekly"},
			{"source":"espn"										,"name":"ESPN"},
			{"source":"espn-cric-info"					,"name":"ESPN Cric Info"},
			{"source":"financial-times"					,"name":"Financial Times"},
			{"source":"focus"										,"name":"Focus"},
			{"source":"football-italia"					,"name":"Football Italia"},
			{"source":"fortune"									,"name":"Fortune"},
			{"source":"four-four-two"						,"name":"FourFourTwo"},
			{"source":"fox-sports"							,"name":"Fox Sports"},
			{"source":"google-news"							,"name":"Google News"},
			{"source":"gruenderszene"						,"name":"Gruenderszene"},
			{"source":"hacker-news"							,"name":"Hacker News"},
			{"source":"handelsblatt"						,"name":"Handelsblatt"},
			{"source":"ign"											,"name":"IGN"},
			{"source":"independent"							,"name":"Independent"},
			{"source":"mashable"								,"name":"Mashable"},
			{"source":"metro"										,"name":"Metro"},
			{"source":"mirror"									,"name":"Mirror"},
			{"source":"mtv-news"								,"name":"MTV News"},
			{"source":"mtv-news-uk"							,"name":"MTV News (UK)"},
			{"source":"national-geographic" 		,"name":"National Geographic"},
			{"source":"new-scientist"						,"name":"New Scientist"},
			{"source":"new-york-magazine"				,"name":"New York Magazine"},
			{"source":"newsweek"								,"name":"Newsweek"},
			{"source":"nfl-news"								,"name":"NFL News"},
			{"source":"polygon"									,"name":"Polygon"},
			{"source":"recode"									,"name":"Recode"},
			{"source":"reddit-r-all"						,"name":"Reddit /r/all"},
			{"source":"reuters"									,"name":"Reuters"},
			{"source":"spiegel-online"					,"name":"Spiegel Online"},
			{"source":"t3n"											,"name":"T3n"},
			{"source":"talksport"								,"name":"TalkSport"},
			{"source":"techcrunch"							,"name":"TechCrunch"},
			{"source":"techradar"								,"name":"TechRadar"},
			{"source":"the-economist"						,"name":"The Economist"},
			{"source":"the-guardian-au"					,"name":"The Guardian (AU)"},
			{"source":"the-guardian-uk"					,"name":"The Guardian (UK)"},
			{"source":"the-hindu"								,"name":"The Hindu"},
			{"source":"the-huffington-post"			,"name":"The Huffington Post"},
			{"source":"the-lad-bible"						,"name":"The Lad Bible"},
			{"source":"the-new-york-times"			,"name":"The New York Times"},
			{"source":"the-next-web"						,"name":"The Next Web"},
			{"source":"the-sport-bible"					,"name":"The Sport Bible"},
			{"source":"the-telegraph"						,"name":"The Telegraph"},
			{"source":"the-times-of-india"			,"name":"The Times of India"},
			{"source":"the-verge"								,"name":"The Verge"},
			{"source":"the-wall-street-journal"	,"name":"The Wall Street Journal"},
			{"source":"the-washington-post"			,"name":"The Washington Post"},
			{"source":"time"										,"name":"Time"},
			{"source":"usa-today"								,"name":"USA Today"},
			{"source":"wired-de"								,"name":"Wired.de"},
			{"source":"wirtschafts-woche"				,"name":"Wirtschafts Woche"}
		]
		return(
			<form>
			<div className="row">
				<div className="six columns">
					<label htmlFor="newsSourceInput">News Source</label>
						<select className="u-full-width" id="newsSourceInput" value={this.props.source} onChange={this.props.handleChange}>
							{
								sources.map((anObjectMapped, index) => {
									return <option key={index} value={anObjectMapped.source}>{anObjectMapped.name}</option>
								})
							}
						</select>
				</div>
			</div>
			</form>
		);
	}
}

export default Search;