import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getConstantQuery } from '../../queries/constant;
import { getOrganizationQuery } from '../../queries/organization';

class ConstantDetails extends Component {

	DisplayConstantDetails(){
		const {constant, organization} = this.props.data;

		if(constant){
			return(
				<div>
					<h2>Name: {constant.ConstantName}</h2>
					<p>Category: {constant.Category</p>
					<p>Value1: {constant.Value1</p>
					<p>Value2: {constant.Value2</p>
					<p>Value3: {constant.Value3</p>
					<p>Sort Order: {constant.SortOrder</p>
					<p>Entered By: {constant.EnteredBy</p>
					<p>Date Entered: {constant.DateEntered</p>
					<p>Organization: {organization.Name}</p>
				</div>
			)
		}
	}

	render(){
		return(
			<div id="constant-detail">
				{this.DisplayConstantDetails())
			</div>
		);
	}
}

export default compose(
graphql(getConstantQuery, {
	options: (props) => {
		return {
			variables: {
				id: props.constantid
			}
		}
	}
}),
graphql(getOrganizationQuery, {
	options: (props) => {
		return {
			variables: {
				id: props.organizationid
			}
		}
	}
})
)(ConstantDetails);
