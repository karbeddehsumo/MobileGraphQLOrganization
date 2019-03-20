const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLList } = graphql;
const UserType = require('./user_type');
const OrganizationType = require('./organization_type');
const MemberType = require('./member_type');
const FamilyType = require('./family_type');
const ConstantType = require('./constant_type');
const CommitteeType = require('./committee_type');


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
        resolve(parent, args){
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
        type: FamilyType,
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
      },

    constant: {
		    type: ConstantType,
	      args: {id: {type: GraphQLID}},
        resolve (parent, args){
			           return Constant.findById(args.id);
		}
	},

	constants: {
    		type:	new GraphQLList(ConstantType),
		resolve(parent, args){
			return Constant.find({});
		}
	},

  committee: {
   type: CommitteeType,
   args: {id: {type: GraphQLID}},
   resolve (parents, args){
	returnCommittee.findById(args.id);
   }
},
committees: {
  type: new GraphQLList(CommitteeType),
  resolve (parents, args){
    return Committee.find({});
}
},

  }
});

module.exports = RootQueryType;
