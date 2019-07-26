const OrganizationType = require('./organization_type');
const FamilyType = require('./family_type');

const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull
} = graphql;

const MemberType = new GraphQLObjectType({
  name: 'MemberType',
  fields: () => ({
      id: {type: new GraphQLNonNull(GraphQLID)},
      FamilyID: {type: new GraphQLNonNull(GraphQLID)},
      OrganizationID: {type: new GraphQLNonNull(GraphQLID)},
      FirstName: {type: new GraphQLNonNull(GraphQLString)},
      MiddleName: {type: GraphQLString},
      LastName: {type: new GraphQLNonNull(GraphQLString)},
      Suffix: {type: GraphQLString},
      DOB: {type: GraphQLString},
      Gender: {type: new GraphQLNonNull(GraphQLString)},
      MembershipDate: {type: GraphQLString},
      Title: {type: GraphQLString},
      ContactTypeID: {type: GraphQLID},
      PhoneNumber: {type: new GraphQLNonNull(GraphQLString)},
      PhoneNumberProviderID: {type: GraphQLID},
      Email: {type: new GraphQLNonNull(GraphQLString)},
      PictureID: {type: GraphQLID},
      Status: {type: GraphQLString},
      EnteredBy: {type: new GraphQLNonNull(GraphQLString)},
      DateEntered: {type: new GraphQLNonNull(GraphQLString)},
    /*  organization: {
        type: OrganizationType,
        resolve(parent, args){
          return Organization.findById(parent.id);
        }
      },
      family: {
        type: FamilyType,
        resolve(parent, args){
          return Family.findById(parent.id);
        }
      }*/
    })
});

module.exports = MemberType;
