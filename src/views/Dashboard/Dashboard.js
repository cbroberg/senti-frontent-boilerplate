import React, { Component } from 'react'
import { InfoCard, GridContainer, ItemGrid } from 'components';

export default class Dashboard extends Component {
	render() {
		return (
			<GridContainer spacing={8} justify={'center'}>
				<ItemGrid xs={12} container>
					<InfoCard
						noExpand
						// noAvatar
						title={'Hello world'}
						content={<div>Hello Senti!</div>}
					/>
				</ItemGrid>
			</GridContainer>
		)
	}
}
