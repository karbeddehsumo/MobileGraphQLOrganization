const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString
} = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.signup({ email, password, req });
      }
    },
    logout: {
      type: UserType,
      resolve(parentValue, args, req) {
        const { user } = req;
        req.logout();
        return user;
      }
    },
    login: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parentValue, { email, password }, req) {
        return AuthService.login({ email, password, req });
      }
    },
    /*======Add Mutations======*/
  addMember: {
    type: MemberType,
    args: {
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
      DateEntered: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve(parent, args){
      let member = new Member({
        FamilyID: args.FamilyID,
        OrganizationID: args.OrganizationID,
        FirstName: args.FirstName,
        MiddleName: args.MiddleName,
        LastName: args.LastName,
        Suffix: args.Suffix,
        DOB: args.DOB,
        Gender: args.Gender,
        MembershipDate: args.MembershipDate,
        Title: args.Title,
        ContactTypeID: args.ContactTypeID,
        PhoneNumber: args.PhoneNumber,
        PhoneNumberProviderID: args.PhoneNumberProviderID,
        Email: args.Email,
        PictureID: args.PictureID,
        Status: args.Status,
        EnteredBy: args.EnteredBy,
        DateEntered: args.DateEntered
      });
      return member.save();
    }
  },
  addFamily: {
    type: FamilyType,
    args: {
      FamilyName: {type: new GraphQLNonNull(GraphQLString)},
      Address: {type: GraphQLString},
      Address2: {type: GraphQLString},
      City: {type: new GraphQLNonNull(GraphQLString)},
      State: {type: GraphQLString},
      Zip: {type: GraphQLString},
      Status: {type: new GraphQLNonNull(GraphQLString)},
      EnteredBy: {type: new GraphQLNonNull(GraphQLString)},
      DateEntered: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve(parent, args){
      let family = new Family ({
        FamilyName: args.FamilyName,
        Address: args.Address,
        Address2: args.Address2,
        City: args.City,
        State: args.State,
        Zip: args.Zip,
        Status: args.Status,
        EnteredBy: args.EnteredBy,
        DateEntered: args.DateEntered
      });
      return family.save();
    }
  },
  addOrganization: {
    type: OrganizationType,
    args: {
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
    },
    resolve(parent, args){
      let organization = new Organization({
        Name: args.Name,
        Address: args.Address,
        Address2: args.Address2,
        City: args.City,
        State: args.State,
        Zip: args.Zip,
        Country: args.Country,
        PhoneNumber: args.PhoneNumber,
        Email: args.Email,
        YearFounded: args.YearFounded,
        StoryID: args.StoryID,
        PictureID: args.PictureID,
        VideoID: args.VideoID,
        Description: args.Description,
        Vision: args.Vision,
        Mission: args.Mission,
        Status: args.Status,
        EnteredBy: args.EnteredBy,
        DateEntered: args.DateEntered,
        ParentID: args.ParentID
      });
      return organization.save();
    }
  },
  /*======Update Mutations======*/
  updateMember: {
    type: MemberType,
    args: {
      id: { type: GraphQLID },
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
      DateEntered: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve(parent, args) {
      return Member.findByIdAndUpdate(
        args.id,
        { $set:  {
          FamilyID: args.FamilyID,
          OrganizationID: args.OrganizationID,
          FirstName: args.FirstName,
          MiddleName: args.MiddleName,
          LastName: args.LastName,
          Suffix: args.Suffix,
          DOB: args.DOB,
          Gender: args.Gender,
          MembershipDate: args.MembershipDate,
          Title: args.Title,
          ContactTypeID: args.ContactTypeID,
          PhoneNumber: args.PhoneNumber,
          PhoneNumberProviderID: args.PhoneNumberProviderID,
          Email: args.Email,
          PictureID: args.PictureID,
          Status: args.Status,
          EnteredBy: args.EnteredBy,
          DateEntered: args.DateEntered

        }},
        { new: true }
      ).catch( err => Error(err));
    }
  },
  updateFamily: {
    type: FamilyType,
    args: {
        id: {type: GraphQLID},
        FamilyName: {type: new GraphQLNonNull(GraphQLString)},
        Address: {type: GraphQLString},
        Address2: {type: GraphQLString},
        City: {type: new GraphQLNonNull(GraphQLString)},
        State: {type: GraphQLString},
        Zip: {type: GraphQLString},
        Status: {type: new GraphQLNonNull(GraphQLString)},
        EnteredBy: {type: new GraphQLNonNull(GraphQLString)},
        DateEntered: {type: new GraphQLNonNull(GraphQLString)}
    },
    resolve(parent, args){
      return Family.findByIdAndUpdate(
        args.id,
        {
          $set: {
            FamilyName: args.FamilyName,
            Address: args.Address,
            Address2: args.Address2,
            City: args.City,
            State: args.State,
            Zip: args.Zip,
            Status: args.Status,
            EnteredBy: args.EnteredBy,
            DateEntered: args.DateEntered
          }
        },
        {new: true}
      ).catch( err => Error(err));
    }
  },
  updateOrganization: {
    type: OrganizationType,
    args: {},
    resolve(parent, args) {
      return Organization.findByIdAndUpdate(
        args.id,
        {
          $set: {
            Name: args.Name,
            Address: args.Address,
            Address2: args.Address2,
            City: args.City,
            State: args.State,
            Zip: args.Zip,
            Country: args.Country,
            PhoneNumber: args.PhoneNumber,
            Email: args.Email,
            YearFounded: args.YearFounded,
            StoryID: args.StoryID,
            PictureID: args.PictureID,
            VideoID: args.VideoID,
            Description: args.Description,
            Vision: args.Vision,
            Mission: args.Mission,
            Status: args.Status,
            EnteredBy: args.EnteredBy,
            DateEntered: args.DateEntered,
            ParentID: args.ParentID
          }
        },
        {new: true}
      ).catch( err => Error(err));
    }
  },
  /*======Delete Mutations======*/
  deleteMember: {
    type: MemberType,
    args: {
      id: { type: GraphQLID }
    },
    resolve(parent, args) {
      const removeMember =  Member.findByIdAndDelete(args.id).exec();
      if(!removeMember) {
        throw new Error('Error deleting member')
      }
      return removeMember;
    }
  },
  deleteFamily: {
    type: FamilyType,
    args: {
      id: {type: GraphQLID }
    },
    resolve(parent, args) {
      const deleteFamily = Family.findByIdAndDelete(args.id).exec();
      if(!deleteFamily){
        throw new Error('Error deleting family record')
      }
      return deleteFamily;
    }
  },
  deleteOrganization: {
    type: OrganizationType,
    args: {
      id: {type: GraphQLID }
    },
    resolve(parent, args) {
      const deleteOrganization = Organization.findByIdAndDelete(args.id).exec();
      if(!deleteOrganization){
        throw new Error('Error deleting organization')
      }
      return deleteOrganization;
    }
  }

  }
});

module.exports = mutation;
