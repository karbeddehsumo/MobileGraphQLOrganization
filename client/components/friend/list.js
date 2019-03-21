import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getFriendsQuery } from '../../queries/friend';
import FriendDetails from './details';

class FriendList extend Component {
	constructor(props){
		super(props);
		this.state = {
			selected: null;
			organization: null;
		}
	}
	displayFriend(){
		var data = this.props.data;
		if(data.loading)
		{
			return (<div>Data is loading</div>);
		}
		else
		{
			return data.friends.map(friend => {
				return (
					<li key={friend.id} onClick={(e) => {this.setState({selected: friend.id, organizationid: friend.organizationID})}}>{friend.LastName}, {friend.FirstName}</li>
				)
			}
		}
	}
	render(){
		return(
 			<div>
			<ul id="friend-list">
				{this.displayFriend()}
			</ul>
			<FriendDetails friendid={this.state.selected} prganizationid={this.state.organizationid}
			</div>
		)
	}

FriendList = graphql(getFriendsQuery)(FriendList)
export default FriendList;
}
