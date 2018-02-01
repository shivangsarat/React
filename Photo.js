import React from 'react';
import { Image } from 'semantic-ui-react';

class Photo extends React.Component {
	render() {
		return (
			<div class="ui segment">
				<img class="ui centered medium image" src="http://i64.tinypic.com/21kdutu.jpg"/>
			</div>
		);
	}
}

export default Photo;