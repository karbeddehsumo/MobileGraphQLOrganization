const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');
const UserType = require('./organization_type');
const UserType = require('./member_type');
const UserType = require('./family_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user;
      }
    },
    organization: {
         type: OrganizationType,
         args: {id: {type: GraphQLID}},
         resolve(parent,args){
           return Organization.findById(args.id);
         }
      },
      organizations: {
        type: new GraphQLList(OrganizationType),
        resolve(parent, args){
          return Organization.find({});
        }
      },
      member: {
        type: MemberType,
        args: {id: {type: GraphQLID}},
        rosolve(parent, args){
          return Member.findById(args.id);
        }
      },
      members: {
        type: new GraphQLList(MemberType),
        resolve(parent, args){
          return Member.find({});
        }
      },
      family: {
        type:FamilyType,
        args: {id: {type: GraphQLID}},
        resolve(parent, args){
          return Family.findById(args.id);
        }
      },
      families:{
        type: new GraphQLList(FamilyType),
        resolve(parent, args){
          return Family.find({});
        }
      }
  }
});

module.exports = RootQueryType;
