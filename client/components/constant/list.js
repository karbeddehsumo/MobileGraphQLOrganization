import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getConstantsQuery } from '../../queries/constant';
import ConstantDetails from './details';

class ConstantList extends Component {
	constructor(props){
		super(props);
		this.state = {
			selected: null;
			organizationid = null;
		}
	}

	displayConstant(){
		var data = this.props.data;
		if(data.loading)
		{
			return(<div>Data is loading</div>);
		}
		else
		{
			return data.constants.map(constant => {
				return (
					<li key={constant.id} onClick={(e) => {this.setState({selected: constant.id, organizationid: constant.OrganizationID})}}>{constant.Category} {constant.ConstantName}</li>
				)
			}
		}
	}

	render(){
		return(
			<div>
				<ul id="constant-list">
					{this.displayConstant()}
				</ul>
				<ConstantDetails constantid={this.state.selected} organizationid={organizationid}/>
			</div>
		)
	}

ConstantList = graphql(getConstantsQuery)(ConstantList)
export default ConstantList;
}
