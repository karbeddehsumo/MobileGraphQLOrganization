import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addCommitteeMutation, getCommitteesQuery } from '../../queries/committee';

class CommitteeAdd extends Component {
	constructor(props){
	super(props);
    	this.sate = {
		OrganizationID:	"",
  CommitteeName:	"",
  Description:		"",
  Contact:		"",
  ContactEmail :	"",
  PhoneNumber :		"",
  BriefDescription:	"",
  PageStyleID:		"",
  Status:		"",
  CodeDesc:		"",
  StoryCreateAccess :	"",
  PictureCreateAccess:	"",
  VideoCreateAccess:	"",
  IsPublic:		"",
  DefaultMemberType:	"",
  IsGroupCommittee:	"",
  PictureID :		"",
  MissionStatement :	"",
  Title1:		"",
  Information1 :	"",
  Title2:		"",
  Information2:		"",
  Title3:		"",
  Information3 :	"",
  DisplayBanner:	"",
  Vision :		"",
  EnteredBy :		"",
  DateEntered :		""
	};
}
	submitForm(e){
		e.preventDefault();
		this.props.addCommitteeMutatation({

		variables: {
		OrganizationID:	this.state.OrganizationID,
  CommitteeName:	this.state.CommitteeName,
  Description:		this.state.Description,
  Contact:		this.state.Contact,
  ContactEmail :	this.state.ContactEmail,
  PhoneNumber :		this.state.PhoneNumber,
  BriefDescription:	this.state.BriefDescription,
  PageStyleID:		this.state.PageStyleID,
  Status:		this.state.Status,
  CodeDesc:		this.state.CodeDesc,
  StoryCreateAccess :	this.state.StoryCreateAccess,
  PictureCreateAccess:	this.state.PictureCreateAccess,
  VideoCreateAccess:	this.state.VideoCreateAccess,
  IsPublic:		this.state.IsPublic,
  DefaultMemberType:	this.state.DefaultMemberType,
  IsGroupCommittee:	this.state.IsGroupCommittee,
  PictureID :		this.state.PictureID,
  MissionStatement :	this.state.MissionStatement,
  Title1:		this.state.Title1,
  Information1 :	this.state.Information1,
  Title2:		this.state.Title2,
  Information2:		this.state.Information2,
  Title3:		this.state.Title3,
  Information3 :	this.state.Information3,
  DisplayBanner:	this.state.DisplayBanner,
  Vision :		this.state.Vision,
  EnteredBy :		this.state.EnteredBy,
  DateEntered :		this.state.DateEntered
	},
	refreshQueries: [{query: getCommitteesQuery]
	});
	}
	render(){
		return(
			<form id=add-committee" onSubmit={this.submitForm.bind(this)}>

<div class="field">
<label>Organization</label>
<input type="text" onChange={(e) => this.setState({Organization: e.target.value})}/>
</div>

<div class="field">
<label>Name</label>
<input type="text" onChange={(e) => this.setState({CommitteeName: e.target.value})}/>
</div>

<div class="field">
<label>Description</label>
<input type="text" onChange={(e) => this.setState({Description: e.target.value})}/>
</div>

<div class="field">
<label>Contact</label>
<input type="text" onChange={(e) => this.setState({Contact: e.target.value})}/>
</div>

<div class="field">
<label>Email</label>
<input type="text" onChange={(e) => this.setState({ContactEmail: e.target.value})}/>
</div>

<div class="field">
<label>Phone Number</label>
<input type="text" onChange={(e) => this.setState({PhoneNumber: e.target.value})}/>
</div>

<div class="field">
<label>Brief Description</label>
<input type="text" onChange={(e) => this.setState({BriefDescription: e.target.value})}/>
</div>

<div class="field">
<label>Page Style</label>
<input type="text" onChange={(e) => this.setState({Status: e.target.value})}/>
</div>

<div class="field">
<label>Status</label>
<input type="text" onChange={(e) => this.setState({Organization: e.target.value})}/>
</div>

<div class="field">
<label>CodeDesc</label>
<input type="text" onChange={(e) => this.setState({CodeDesc: e.target.value})}/>
</div>

<div class="field">
<label>Story Access</label>
<input type="text" onChange={(e) => this.setState({StoryCreateAccess: e.target.value})}/>
</div>

<div class="field">
<label>Picture Access</label>
<input type="text" onChange={(e) => this.setState({PictureCreateAccess: e.target.value})}/>
</div>

<div class="field">
<label>Video Access</label>
<input type="text" onChange={(e) => this.setState({VideoCreateAccess: e.target.value})}/>
</div>

<div class="field">
<label>IsPublic</label>
<input type="text" onChange={(e) => this.setState({IsPublic: e.target.value})}/>
</div>

<div class="field">
<label>Default Member</label>
<input type="text" onChange={(e) => this.setState({DefaultMemberType: e.target.value})}/>
</div>

<div class="field">
<label>Group Committee</label>
<input type="text" onChange={(e) => this.setState({IsGroupCommittee: e.target.value})}/>
</div>

<div class="field">
<label>Picture</label>
<input type="text" onChange={(e) => this.setState({PictureID: e.target.value})}/>
</div>

<div class="field">
<label>Mission</label>
<input type="text" onChange={(e) => this.setState({MissionStatement: e.target.value})}/>
</div>


<div class="field">
<label>Title1</label>
<input type="text" onChange={(e) => this.setState({Title1: e.target.value})}/>
</div>

<div class="field">
<label>Information1</label>
<input type="text" onChange={(e) => this.setState({Information1: e.target.value})}/>
</div>

<div class="field">
<label>Title2</label>
<input type="text" onChange={(e) => this.setState({Title2: e.target.value})}/>
</div>

<div class="field">
<label>Information2</label>
<input type="text" onChange={(e) => this.setState({Information2: e.target.value})}/>
</div>

<div class="field">
<label>Title3</label>
<input type="text" onChange={(e) => this.setState({Title3: e.target.value})}/>
</div>

<div class="field">
<label>Information3</label>
<input type="text" onChange={(e) => this.setState({Information3: e.target.value})}/>
</div>

<div class="field">
<label>Display Banner</label>
<input type="text" onChange={(e) => this.setState({DisplayBanner: e.target.value})}/>
</div>

<div class="field">
<label>Vision</label>
<input type="text" onChange={(e) => this.setState({Vision: e.target.value})}/>
</div>

<div class="field">
<label>Entered BY</label>
<input type="text" onChange={(e) => this.setState({EnteredBy: e.target.value})}/>
</div>

<div class="field">
<label>Date Entered</label>
<input type="text" onChange={(e) => this.setState({DateEntered: e.target.value})}/>
</div>


<button>+</button>
			</form>
		);
	}
}
export default compose(
  	graphql(addCommitteeMutation, {name: "addCommitteeMutation"}),
	graphql(getCommitteesQuery, {name: "getCommitteesQuery"})
)(CommitteeAdd);
