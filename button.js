import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const Buttons = () => (
	<Button animated color='red'>
      <Button.Content visible>Next</Button.Content>
      <Button.Content hidden>
        <Icon name='right arrow' />
      </Button.Content>
    </Button>
)


export default Buttons;