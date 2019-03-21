import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addFriendMutation, getFriendsQuery } from '../../queries/friend';

class FriendAdd extends Component {
	constructor(props){
		super(props);
		this.state = {
		OrganizationID: "",
  		Title: 		"",
  		FirstName: 	"",
  		LastName: 	"",
  		Suffix: 	"",
  		SubCategoryID: 	"",
  		LastEventAttended: "",
  		EventDate: 	"",
  		PhoneNumber: 	"",
  		PhoneProviderID: 	"",
  		Email: 		"",
  		BestContact: 	"",
  		Address: 	"",
  		Address2: 	"",
  		City: 		"",
  		State: 		"",
  		Zip: 		"",
  		Comment: 	"",
  		Status: 	"",
  		EnteredBy: 	"",
  		DateEntered: 	""
		};
	}
	submitForm(e){
		e.preventDefault();
		this.props.addFriendMutation({

		variables: {
		OrganizationID: this.state.OrganizationID,
  		Title: 		this.state.Title,
  		FirstName: 	this.state.FirstName,
  		LastName: 	this.state.LastName,
  		Suffix: 	this.state.Suffix,
  		SubCategoryID: 	$SubCategory,
  		LastEventAttended: $LastEventAttended,
  		EventDate: 	this.state.EventDate
  		PhoneNumber: 	this.state.PhoneNumber,
  		PhoneProviderID: 	this.state.PhoneProviderID,
  		Email: 		this.state.Email,
  		BestContact: 	this.state.BestContact
  		Address: 	this.state.Address,
  		Address2: 	this.state.Address2,
  		City: 		this.state.City,
  		State: 		this.state.State,
  		Zip: 		$Zip,
  		Comment: 	this.state.Comment,
  		Status: 	this.state.Status,
  		EnteredBy: 	$EnteredBy,
  		DateEntered: 	this.state.DateEntered
		},
		refetchQueries: [{query: getFriendsQuery}]
		});
	}

	render(){
		return(
			<form id="add-friend" onSubmit={this.submitForm.bind(this)}>
				<div class="field">
					<label>Organization</label>
					<input type="text" onChange={(e) => this.setState({OrganizationID: e.target.value})} />
				</div>

				<div class="field">
					<label>Title</label>
					<input type="text" onChange={(e) => this.setState({Title: e.target.value})} />
				</div>

				<div class="field">
					<label>First Name</label>
					<input type="text" onChange={(e) => this.setState({FirstName: e.target.value})} />
				</div>

				<div class="field">
					<label>Suffix</label>
					<input type="text" onChange={(e) => this.setState({Suffix: e.target.value})} />
				</div>

				<div class="field">
					<label>SubCategory</label>
					<input type="text" onChange={(e) => this.setState({SubCategoryID: e.target.value})} />
				</div>

				<div class="field">
					<label>Last Event Attended</label>
					<input type="text" onChange={(e) => this.setState({LastEventAttended: e.target.value})} />
				</div>

				<div class="field">
					<label>Event Date</label>
					<input type="text" onChange={(e) => this.setState({EventDate: e.target.value})} />
				</div>

				<div class="field">
					<label>Phone Number</label>
					<input type="text" onChange={(e) => this.setState({PhoneNumber: e.target.value})} />
				</div>

				<div class="field">
					<label>Phone Provider</label>
					<input type="text" onChange={(e) => this.setState({PhoneProviderID: e.target.value})} />
				</div>

				<div class="field">
					<label>Email</label>
					<input type="text" onChange={(e) => this.setState({Email: e.target.value})} />
				</div>

				<div class="field">
					<label>Best Contact</label>
					<input type="text" onChange={(e) => this.setState({BestContact: e.target.value})} />
				</div>

				<div class="field">
					<label>Address</label>
					<input type="text" onChange={(e) => this.setState({Address: e.target.value})} />
				</div>

				<div class="field">
					<label>Address2</label>
					<input type="text" onChange={(e) => this.setState({Address2: e.target.value})} />
				</div>

				<div class="field">
					<label>City</label>
					<input type="text" onChange={(e) => this.setState({City: e.target.value})} />
				</div>

				<div class="field">
					<label>State</label>
					<input type="text" onChange={(e) => this.setState({State: e.target.value})} />
				</div>

				<div class="field">
					<label>Zip</label>
					<input type="text" onChange={(e) => this.setState({Zip: e.target.value})} />
				</div>

				<div class="field">
					<label>Comment</label>
					<input type="text" onChange={(e) => this.setState({Comment: e.target.value})} />
				</div>

				<div class="field">
					<label>Status</label>
					<input type="text" onChange={(e) => this.setState({Status: e.target.value})} />
				</div>

				<div class="field">
					<label>Entered By</label>
					<input type="text" onChange={(e) => this.setState({EnteredBy: e.target.value})} />
				</div>

				<div class="field">
					<label>Date Entered</label>
					<input type="text" onChange={(e) => this.setState({DateEntered: e.target.value})} />
				</div>

				<button>+</button>

			</form>
		);
	}
}

expose.default compose(
	graphql(addFriendMutation, {name: "addFriendMutation"}),
	graphql(getFriendsQuery, {name: "getFriendQuery"})
)(FriendAdd);
