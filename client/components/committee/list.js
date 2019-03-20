import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getCommitteesQuery }from '../../queries/committee';

class CommitteeList extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: null;
			organizationid = null;
		}
	}

	displayCommittee(){
		var data = this.props.data;
		if(data.loging)
		{
			return(<div>Data is loading</div>);
		}
		else
		{
			return data.committees.map(committee => {
				return(
					<li key={committee.id} onClick={(e) => {this.setState({selected: committee.id, organizationID: committee.OrganizationID })}}>{committee.CommitteeName}</li>
				)
			}
		}
	}
render(){
	return(
		<div>
			<ul id="committee-list">
				{this.displayCommittee()}
			</ul>
   			<CommitteeDetails committeeid={this.state.selected} organizationid={this.state.organizationid}/>
		</div>
	)
}
CommitteeList = graphql(getCommitteesQuery)(CommitteeList)
dexport default CommitteeList;
}
