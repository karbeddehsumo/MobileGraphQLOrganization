const graphql = require('graphql');
const {
	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
  GraphQLNonNull
} = graphql;


const FriendType = new GraphQLObjectType ({
	name: 'FriendType',
	fields: () => ({
	id:		{type: new GraphQLNonNull(GraphQLID)},
  	OrganizationID: {type: new GraphQLNonNull(GraphQLString)},
  	Title: 		{type: new GraphQLNonNull(GraphQLString)},
  	FirstName: 	{type: new GraphQLNonNull(GraphQLString)},
  	LastName: 	{type: new GraphQLNonNull(GraphQLString)},
  	Suffix: 	{type: new GraphQLNonNull(GraphQLString)},
  	SubCategoryID: 	{type: new GraphQLNonNull(GraphQLString)},
  	LastEventAttended: {type: new GraphQLNonNull(GraphQLString)},
  	EventDate: 	{type: new GraphQLNonNull(GraphQLString)},
  	PhoneNumber: 	{type: new GraphQLNonNull(GraphQLString)},
  	PhoneProviderID: {type: new GraphQLNonNull(GraphQLString)},
  	Email: 		{type: new GraphQLNonNull(GraphQLString)},
  	BestContact: 	{type: new GraphQLNonNull(GraphQLString)},
  	Address: 	{type: new GraphQLNonNull(GraphQLString)},
  	Address2: 	{type: new GraphQLNonNull(GraphQLString)},
  	City: 		{type: new GraphQLNonNull(GraphQLString)},
  	State: 		{type: new GraphQLNonNull(GraphQLString)},
  	Zip: 		{type: new GraphQLNonNull(GraphQLString)},
  	Comment: 	{type: new GraphQLNonNull(GraphQLString)},
  	Status: 	{type: new GraphQLNonNull(GraphQLString)},
  	EnteredBy: 	{type: new GraphQLNonNull(GraphQLString)},
  	DateEntered: 	{type: new GraphQLNonNull(GraphQLString)}
	})
});

module.exports = FriendType;
