import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import {addConstantMutation, getConstantsQuery } from '../../queries/constant';

class ConstantAdd extends Component {
   	constructor(preps){
		super(props);
		this.state = {
		 	OrganizationID: "",
			Category:	"",
			ConstantName:	"",
			Value1:		"",
			Value2:		"",
			Value3:		"",
			SortOrder:	"",
			EnteredBy:	"",
			DateEntered:	""
		};
	}

	submitForm(e){
		e.preventDefault();
		this.props.addConstantMutation({

			variables: {
		 		OrganizationID: this.state.OrganizationID,
				Category:	this.state.Category,
				ConstantName:	this.state.ConstantName,
				Value1:		this.state.Value1,
				Value2:		this.state.Value2,
				Value3:		this.state.Value3,
				SortOrder:	this.state.SortOrder,
				EnteredBy:	this.state.EnteredBy,
				DateEntered:	this.state.DateEntered
			},
			refetchQueries: [{query: getConstantsQuery}]
		});
	}

	render(){
		return (
			<form id="add-constant" onSubmit={this.submitForm.bind(this)}>
			<div class="field">
			<input type="text" onChange={(e) => this.setState({OrganizationID: e.target.value})}/>
			</div>

			<div class="field">
			<label>Category</label>
			<input type="text" onChange={(e) => this.setState({Category: e.target.value})}/>
			</div>

			<div class="field">
			<label>Constant Name</label>
			<input type="text" onChange={(e) => this.setState({ConstantName: e.target.value})}/>
			</div>

			<div class="field">
			<label>Value1</label>
			<input type="text" onChange={(e) => this.setState({Value1: e.target.value})}/>
			</div>

			<div class="field">
			<label>Value2</label>
			<input type="text" onChange={(e) => this.setState({Value2: e.target.value})}/>
			</div>

			<div class="field">
			<label>Value3</label>
			<input type="text" onChange={(e) => this.setState({Value3: e.target.value})}/>
			</div>

			<div class="field">
			<label>Sort Order</label>
			<input type="text" onChange={(e) => this.setState({SortOrder: e.target.value})}/>
			</div>

			<div class="field">
			<label>Entered By</label>
			<input type="text" onChange={(e) => this.setState({EnteredBy: e.target.value})}/>
			</div>

			<div class="field">
			<label>DateEntered</label>
			<input type="text" onChange={(e) => this.setState({DateEntered: e.target.value})}/>
			</div>

			<button>+</button>
			</form>
		);
	}
}

export default compose(
   graphql(addConstantMutation, {name: "addConstantMutation"}),
   graphql(getConstantsQuery, {name: "getConstantsQuery"})
)(ConstantAdd);
