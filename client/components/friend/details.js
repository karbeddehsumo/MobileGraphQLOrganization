import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getFriendQuery } from '../../queries/friend';
import { getOrganizationQuery } from '../../queries/organization';

class FriendDetails extends Component {
	DisplayFriendDetails(){}
	render(){}
}

export default compose(
	graphql(getFriendQuery, {
		options: (props) => {
 			return {
				variables: {
					id: props.friendid
				}
			}
	}
}),
graphql(getOrganizationQuery, {
		options: (props) => {
			return {
				variables: props.organizationid
			}
		}
	})
)(FriendDetails);
