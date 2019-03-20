const graphql = require('graphql');
const {
    	GraphQLObjectType,
	GraphQLString,
	GraphQLID,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const ConstantType = new GraphQLObjectType ({
	name: 'ConstantType',
  fields: () => ({
	id:		{type: new GraphQLNonNull(GraphQLID)},
	OrganizationID: {type: new GraphQLNonNull(GraphQLID)},
	Category:	{type: new GraphQLNonNull(GraphQLString)},
	ConstantName:	{type: new GraphQLNonNull(GraphQLString)},
	Value1:		{type: new GraphQLNonNull(GraphQLString)},
	Value2:		{type: GraphQLString},
	Value3:		{type: GraphQLString},
	SortOrder:	{type: GraphQLString},
	Status:		{type: new GraphQLNonNull(GraphQLString)},
	EnteredBy:	{type: new GraphQLNonNull(GraphQLString)},
	DateEntered:	{type: new GraphQLNonNull(GraphQLString)}
	})
});

module.exports = ConstantType;
