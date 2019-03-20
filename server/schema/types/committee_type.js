const graphql = require('graphql');
const {

	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
  GraphQLNonNull
} = graphql;

const CommitteeType = new GraphQLObjectType ({

  name: 'CommitteeType',
	fields:  () => ({
		  id: 		{type: new GraphQLNonNull(GraphQLID)},
  		CommitteeName: {type: new GraphQLNonNull(GraphQLString)},
  		Description: 	{type: new GraphQLNonNull(GraphQLString)},
  		Contact: 	{type: new GraphQLNonNull(GraphQLString)},
  		ContactEmail: 	{type: new GraphQLNonNull(GraphQLString)},
  		PhoneNumber: 	{type: new GraphQLNonNull(GraphQLString)},
  		BriefDescription: {type: new GraphQLNonNull(GraphQLString)},
  		PageStyleID: 	{type: new GraphQLNonNull(GraphQLString)},
  		Status: 	{type: new GraphQLNonNull(GraphQLString)},
  		CodeDesc: 	{type: new GraphQLNonNull(GraphQLString)},
  		StoryCreateAccess: 	{type: new GraphQLNonNull(GraphQLString)},
  		PictureCreateAccess: 	{type: new GraphQLNonNull(GraphQLString)},
  		VideoCreateAccess: 	{type: new GraphQLNonNull(GraphQLString)},
  		IsPublic: 		{type: new GraphQLNonNull(GraphQLString)},
  		DefaultMemberType: 	{type: new GraphQLNonNull(GraphQLString)},
  		IsGroupCommittee: 	{type: new GraphQLNonNull(GraphQLString)},
  		PictureID: 		{type: new GraphQLNonNull(GraphQLID)},
  		MissionStatement: 	{type: new GraphQLNonNull(GraphQLString)},
  		Title1: 		{type: new GraphQLNonNull(GraphQLString)},
  		Information1: 		{type: new GraphQLNonNull(GraphQLString)},
  		Title2: 		{type: new GraphQLNonNull(GraphQLString)},
  		Information2: 		{type: new GraphQLNonNull(GraphQLString)},
  		Title3: 		{type: new GraphQLNonNull(GraphQLString)},
  		Information3: 		{type: new GraphQLNonNull(GraphQLString)},
  		DisplayBanner: 		{type: new GraphQLNonNull(GraphQLString)},
  		Vision: 		{type: new GraphQLNonNull(GraphQLString)},
  		EnteredBy: 		{type: new GraphQLNonNull(GraphQLString)},
  		DateEntered: 		{type: new GraphQLNonNull(GraphQLString)}
	})
});

module.exports = CommitteeType;
