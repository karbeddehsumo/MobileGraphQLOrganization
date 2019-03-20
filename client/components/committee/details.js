import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { getCommitteeQuery } from '../../queries/committee';
import { getOrganizationQuery } from '../../queries/organization';

class CommitteeDetails extend Component {

	DisplayCommitteeDetails(){
		const {committee, organization} = this.props.data;

		if(committee){
			return(
<h2>Name: {committeeName}</h2>
<p>Organization: {organization.Name}</p>
<p>Description:		{committee.Description}</p>
<p>Contact:		{committee.Contact}</p>
<p>ContactEmail :	{committee.ContactEmail}</p>
<p>PhoneNumber :	{committee.PhoneNumber}</p>
<p>BriefDescription:	{committee.BriefDescription}</p>
<p>PageStyleID:		{committee.PageStyleID}</p>
<p>Status:		{committee.Status}</p>
<p>CodeDesc:		{committee.CodeDesc}</p>
<p>StoryCreateAccess :	{committee.StoryCreateAccess}</p>
<p>PictureCreateAccess:	{committee.PictureCreateAccess}</p>
<p>VideoCreateAccess:	{committee.VideoCreateAccess}</p>
<p>IsPublic:		{committee.IsPublic}</p>
<p>DefaultMemberType:	{committee.DefaultMemberType}</p>
<p>IsGroupCommittee:	{committee.IsGroupCommittee}</p>
<p>PictureID :		{committee.PictureID}</p>
<p>MissionStatement :	{committee.MissionStatement}</p>
<p>Title1:		{committee.Title1}</p>
<p>Information1 :	{committee.Information1}</p>
<p>Title2:		{committee.Title2}</p>
<p>Information2:		{committee.Information2}</p>
<p>Title3:		{committee.Title3}</p>
<p>Information3 :	{committee.Information3}</p>
<p>DisplayBanner:	{committee.DisplayBanner}</p>
<p>Vision :		{committee.Vision}</p>
<p>EnteredBy :		{committee.EnteredBy}</p>
<p>DateEntered :	{committee.DateEntered}</p>
)
		}
	}
	render(){
		return(
			<div id="committee-detail">
				{this.DisplayCommitteeDetails()}
			</div>
		);
	}
}

export default compose(
	graphql(getCommitteeQuery, {
	option: (props) => {
		return {
			variables: {
				id: props.committeeid
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
)
(CommitteeDetails);
