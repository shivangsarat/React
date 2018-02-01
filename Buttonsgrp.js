import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Buttonsgrp = () => (
	<Button.Group>
		<Button animated='fade' color='black'>
			<Button.Content visible>1</Button.Content>
			<Button.Content hidden><Icon name='shop' /></Button.Content>
		</Button>
		<Button animated='vertical' color='green'>
			<Button.Content visible>2</Button.Content>
			<Button.Content hidden><Icon name='world' /></Button.Content>
		</Button>
		<Button basic color='teal'>
			<Icon name='pause' />
		</Button>
	</Button.Group>
)

export default Buttonsgrp;