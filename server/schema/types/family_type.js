const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = graphql;

const FamilyType = new GraphQLObjectType({
  name: 'FamilyType',
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    FamilyName: {type: new GraphQLNonNull(GraphQLString)},
    Address: {type: GraphQLString},
    Address2: {type: GraphQLString},
    City: {type: new GraphQLNonNull(GraphQLString)},
    State: {type: GraphQLString},
    Zip: {type: GraphQLString},
    Status: {type: new GraphQLNonNull(GraphQLString)},
    EnteredBy: {type: new GraphQLNonNull(GraphQLString)},
    DateEntered: {type: new GraphQLNonNull(GraphQLString)},
    members: {
      type: GraphQLList(MemberType),
      resolve(parent, args){
        return Member.find({FamiyID: parent.id});
      }
    }
  })
});

module.exports = FamilyType;
