const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const OrganizationType = new GraphQLObjectType({
  name: 'OrganizationType',
  fields: () => ({
     id: { type: new GraphQLNonNull(GraphQLID)},
     Name: { type: new GraphQLNonNull(GraphQLString)},
     Address: {type: GraphQLString},
     Address2: {type: GraphQLString},
     City: {type: new GraphQLNonNull(GraphQLString)},
     State: {type: GraphQLString},
     Zip: {type: GraphQLString},
     Country: {type: new GraphQLNonNull(GraphQLString)},
     PhoneNumber: {type: GraphQLString},
     Email: {type: new GraphQLNonNull(GraphQLString)},
     YearFounded: {type: new GraphQLNonNull(GraphQLString)},
     StoryID: {type: GraphQLID},
     PictureID: {type: GraphQLID},
     VideoID: {type: GraphQLID},
     Description: {type: GraphQLString},
     Vision: {type: GraphQLString},
     Mission: {type: GraphQLString},
     Status: {type: new GraphQLNonNull(GraphQLString)},
     EnteredBy: {type: new GraphQLNonNull(GraphQLString)},
     DateEntered: {type: new GraphQLNonNull(GraphQLString)},
     ParentID: {type: GraphQLID}
   })
});

module.exports = OrganizationType;
