const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} = graphql;
const UserType = require('./types/user_type');
const AuthService = require('../services/auth');
const MemberType = require('./types/member_type');
const FamilyType = require('./types/family_type');
const OrganizationType = require('./types/organization_type');
const ConstantType = require('./types/constant_type');
const CommitteeType = require('./types/committee_type');
const FriendType = require('./types/friend_type');

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
    /*======Member Mutations======*/

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


  /*======Family Mutations======*/

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


  /*======Organization Mutations======*/

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
  },
/*=======Constant Mutation===========*/
  addConstant: {
  		type:  ConstantType,
  		args: {
  				OrganizationID: {type: GraphQLID},
  				Category:	{type: new GraphQLNonNull(GraphQLString)},
  				ConstantName:	{type: new GraphQLNonNull(GraphQLString)},
  				Value1:		{type: new GraphQLNonNull(GraphQLString)},
  				Value2:		{type:  GraphQLString},
  				Value3:		{type:  GraphQLString},
  				SortOrder:	{type:  GraphQLString},
  				Status:		{type: new GraphQLNonNull(GraphQLString)},
  				EnteredBy:	{type: new GraphQLNonNull(GraphQLString)},
  				DateEntered:	{type: new GraphQLNonNull(GraphQLString)}
  		},
  		resolve(parent, args){
  			let constant = new Constant ({
  				OrganizationID: args.OrganizationID,
  				Category: 	args.Category,
  				ConstantName: 	args.ConstantName,
  				Value1:		args.Value1,
  				Value2: 	args.Value2,
  				Value3:		args.Value3,
  				SortOrder:	args.SortOrder,
  				Status:		args.Status,
  				EnteredBy:	args.EnteredBy,
  				DateEntered:	args.DateEntered
  			});
  			return constatnt.save();
  		}
  	},
  updateConstant: {
  		type: ConstantType,
  		args: {
  				id: {type: GraphQLID},
  				OrganizationID: {type: GraphQLID},
  				Category:	{type: new GraphQLNonNull(GraphQLString)},
  				ConstantName:	{type: new GraphQLNonNull(GraphQLString)},
  				Value1:		{type: new GraphQLNonNull(GraphQLString)},
  				Value2:		{type:  GraphQLString},
  				Value3:		{type:  GraphQLString},
  				SortOrder:	{type:  GraphQLString},
  				Status:		{type: new GraphQLNonNull(GraphQLString)},
  				EnteredBy:	{type: new GraphQLNonNull(GraphQLString)},
  				DateEntered:	{type: new GraphQLNonNull(GraphQLString)}
  		},

  		resolve(parent, args){

  			return Constant.findByIdAndUpdate(
  				args.id,
  				{
  					$set: {
  						OrganizationID: args.OrganizationID,
  						Category: 	args.Category,
  						ConstantName: 	args.ConstantName,
  						Value1:		args.Value1,
  						Value2: 	args.Value2,
  						Value3:		args.Value3,
  						SortOrder:	args.SortOrder,
  						Status:		args.Status,
  						EnteredBy:	args.EnteredBy,
  						DateEntered:	args.DateEntered
  					}
  				},
  				{new: true}
  			).catch( err => Error(err));
  		}
  	},
  deleteConstant: {
  		type: ConstantType,
  		args: {id: {type: GraphQLID}},
  		resolve(parent, args){
  			const deleteConstant = Constant.findByAndDelete(args.id).exec();
  			if(!deleteConstant){
  				throw new Error('Error deleting constant')
  			}
  		}
  	},

/*==============Committee Mutation=============*/
  addCommittee: {
   	type: CommitteeType,
   	args: {
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
	},
	resolve(parent, args){
		let committee = new Committee ({
		CommitteeName: args.CommitteeName,
  		Description: 		args.Description,
  		Contact: 		args.Contact,
  		ContactEmail: 		args.ContactEmail,
  		PhoneNumber: 		args.PhoneNumber,
  		BriefDescription: 	args.BriefDescription,
  		PageStyleID: 		args.PageStyleID,
  		Status: 		args.Status,
  		CodeDesc: 		args.CodeDesc,
  		StoryCreateAccess: 	args.StoryCreateAccess,
  		PictureCreateAccess: 	args.PictureCreateAccess,
  		VideoCreateAccess: 	args.VideoCreateAccess,
  		IsPublic: 		args.IsPublic,
  		DefaultMemberType: 	args.DefaultMemberType,
  		IsGroupCommittee: 	args.IsGroupCommittee,
  		PictureID: 		args.PictureID,
  		MissionStatement: 	args.MissionStatement,
  		Title1: 		args.Title1,
  		Information1: 		args.Information1,
  		Title2: 		args.Title2,
  		Information2: 		args.Information2,
  		Title3: 		args.Title3,
  		Information3: 		args.Information3,
  		DisplayBanner: 		args.DisplayBanner,
  		Vision: 		args.Vision,
  		EnteredBy: 		args.EnteredBy,
  		DateEntered: 		args.DateEntered
	});
	  return committee.save();
	}
},
  updateCommittee: {
	type: CommitteeType,
	args: {
		id: {type: GraphQLID},
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
	},
	resolve(parent, args) {
		return Committee.findByIdAndUpdate(
			args.id,
			{
				$set: {
					CommitteeName: args.CommitteeName,
      		Description: 		args.Description,
      		Contact: 		args.Contact,
      		ContactEmail: 		args.ContactEmail,
      		PhoneNumber: 		args.PhoneNumber,
      		BriefDescription: 	args.BriefDescription,
      		PageStyleID: 		args.PageStyleID,
      		Status: 		args.Status,
      		CodeDesc: 		args.CodeDesc,
      		StoryCreateAccess: 	args.StoryCreateAccess,
      		PictureCreateAccess: 	args.PictureCreateAccess,
      		VideoCreateAccess: 	args.VideoCreateAccess,
      		IsPublic: 		args.IsPublic,
      		DefaultMemberType: 	args.DefaultMemberType,
      		IsGroupCommittee: 	args.IsGroupCommittee,
      		PictureID: 		args.PictureID,
      		MissionStatement: 	args.MissionStatement,
      		Title1: 		args.Title1,
      		Information1: 		args.Information1,
      		Title2: 		args.Title2,
      		Information2: 		args.Information2,
      		Title3: 		args.Title3,
      		Information3: 		args.Information3,
      		DisplayBanner: 		args.DisplayBanner,
      		Vision: 		args.Vision,
      		EnteredBy: 		args.EnteredBy,
      		DateEntered: 		args.DateEntered
				}
			},
		{new: true}
		).catch( err => Error(err));
	}

},
  deleteCommittee: {
	type: CommitteeType,
	args: {id: {type: GraphQLID}},
	resolve(parent, args){
		const deletCommittee = Committee.findByAndDelete(args.id).exec();
		if(!deleteCommittee){
			throw new Error('Error deleting constant')
		}
	}
},

/*============Friend Mutation =============*/
addFriend: {
	type: FriendType,
	args: {
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
	},
	resolve(parent, args){
		let friend = new Friend ({
			  OrganizationID: args.OrganizationID,
  		Title: args.Title,
  		FirstName: args.FirstName,
  		LastName: args.LastName,
  		Suffix: args.Suffix,
  		SubCategoryID: args.SubCategory,
  		LastEventAttended: args.LastEventAttended,
  		EventDate: args.EventDate,
  		PhoneNumber: args.PhoneNumber,
  		PhoneProviderID: args.PhoneProviderID,
  		Email: args.Email,
  		BestContact: args.BestContact,
  		Address: args.Address,
  		Address2: args.Address2,
  		City: args.City,
  		State: args.State,
  		Zip: args.Zip,
  		Comment: args.Comment,
  		Status: args.Status,
  		EnteredBy: args.EnteredBy,
  		DateEntered: args.DateEntered
		});
		return friend.save();
	}
},
updateFriend: {
	type: FriendType,
	args: {
		OrganizationID: {type:  GraphQLString},
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

	},

	resolve(parent, args) {
		return Friend.findByIdAndUpdate(
			args.id,
			{
				$set: {
					OrganizationID: args.OrganizationID,
  		Title: args.Title,
  		FirstName: args.FirstName,
  		LastName: args.LastName,
  		Suffix: args.Suffix,
  		SubCategoryID: args.SubCategory,
  		LastEventAttended: args.LastEventAttended,
  		EventDate: args.EventDate,
  		PhoneNumber: args.PhoneNumber,
  		PhoneProviderID: args.PhoneProviderID,
  		Email: args.Email,
  		BestContact: args.BestContact,
  		Address: args.Address,
  		Address2: args.Address2,
  		City: args.City,
  		State: args.State,
  		Zip: args.Zip,
  		Comment: args.Comment,
  		Status: args.Status,
  		EnteredBy: args.EnteredBy,
  		DateEntered: args.DateEntered

		}},
			{new: true}
		).catch( err => Error(err));
	}
},
deleteFriend: {
		type: FriendType,
		args: {id: {type: GraphQLID}},
		resolve(parent, args){
			const deleteFriend = Friend.findByAndDelete(args.id).exec();
		if(!deleteFriend){
			throw new Error('Error deleting friend')
		}
		}
	}



  }

});

module.exports = mutation;
