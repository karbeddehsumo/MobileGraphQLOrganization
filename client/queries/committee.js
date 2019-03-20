import gql from 'graphql-tag';

	const getCommitteesQuery = gql`
		committees{
  OrganizationID
  CommitteeName
  Description
  Contact
  ContactEmail
  PhoneNumber
  BriefDescription
  PageStyleID
  Status
  CodeDesc
  StoryCreateAccess
  PictureCreateAccess
  VideoCreateAccess
  IsPublic
  DefaultMemberType
  IsGroupCommittee
  PictureID
  MissionStatement
  Title1
  Information1
  Title2
  Information2
  Title3
  Information3
  DisplayBanner
  Vision
  EnteredBy
  DateEntered
}
`
const getCommitteeQuery = gql`
	query($id: ID){
		committee(id: $id){
  OrganizationID
  CommitteeName
  Description
  Contact
  ContactEmail
  PhoneNumber
  BriefDescription
  PageStyleID
  Status
  CodeDesc
  StoryCreateAccess
  PictureCreateAccess
  VideoCreateAccess
  IsPublic
  DefaultMemberType
  IsGroupCommittee
  PictureID
  MissionStatement
  Title1
  Information1
  Title2
  Information2
  Title3
  Information3
  DisplayBanner
  Vision
  EnteredBy
  DateEntered
		}
}
`

const addCommitteeMutation = gql`
	mutation(
  $OrganizationID:	String!,
  $CommitteeName:	String!,
  $Description:	String!,
  $Contact:	String!,
  $ContactEmail:	String!,
  $PhoneNumber:	String!,
  $BriefDescription:	String!,
  $PageStyleID:	String!,
  $Status:	String!,
  $CodeDesc:	String!,
  $StoryCreateAccess:	String!,
  $PictureCreateAccess:	String!,
  $VideoCreateAccess:	String!,
  $IsPublic:	String!,
  $DefaultMemberType:	String!,
  $IsGroupCommittee:	String!,
  $PictureID :	String!,
  $MissionStatement:	String!,
  $Title1 :	String!,
  $Information1:	String!,
  $Title2 :	String!,
  $Information2:	String!,
  $Title3 :	String!,
  $Information3 :	String!,
  $DisplayBanner:	String!,
  $Vision :	String!,
  $EnteredBy :	String!,
  $DateEntered :	String!
	)
 addCommittee(
  OrganizationID:	$OrganizationID,
  CommitteeName:	$CommitteeName ,
  Description:		$Description,
  Contact:		$Contact,
  ContactEmail :	$ContactEmail,
  PhoneNumber :		$PhoneNumber,
  BriefDescription:	$BriefDescription,
  PageStyleID:		$PageStyleID,
  Status:		$Status,
  CodeDesc:		$CodeDesc,
  StoryCreateAccess :	$StoryCreateAccess,
  PictureCreateAccess:	$PictureCreateAccess,
  VideoCreateAccess:	$VideoCreateAccess,
  IsPublic:		$IsPublic,
  DefaultMemberType:	DefaultMemberType,
  IsGroupCommittee:	$IsGroupCommittee,
  PictureID :		$PictureID,
  MissionStatement :	$MissionStatement,
  Title1:		$Title1,
  Information1 :	$Information1,
  Title2:		$Title2,
  Information2:		$Information2,
  Title3:		$Title3,
  Information3 :	$Information3,
  DisplayBanner:	$DisplayBanner,
  Vision :		$Vision,
  EnteredBy :		$EnteredBy,
  DateEntered :		$DateEntered
){
  CommitteeName
  Description
  Contact
}
`

const updateCommitteeMutation = gql`
	mutation updateCommitteeMutation(
		  $OrganizationID:	String!,
  $CommitteeName:	String!,
  $Description:	String!,
  $Contact:	String!,
  $ContactEmail:	String!,
  $PhoneNumber:	String!,
  $BriefDescription:	String!,
  $PageStyleID:	String!,
  $Status:	String!,
  $CodeDesc:	String!,
  $StoryCreateAccess:	String!,
  $PictureCreateAccess:	String!,
  $VideoCreateAccess:	String!,
  $IsPublic:	String!,
  $DefaultMemberType:	String!,
  $IsGroupCommittee:	String!,
  $PictureID :	String!,
  $MissionStatement:	String!,
  $Title1 :	String!,
  $Information1:	String!,
  $Title2 :	String!,
  $Information2:	String!,
  $Title3 :	String!,
  $Information3 :	String!,
  $DisplayBanner:	String!,
  $Vision :	String!,
  $EnteredBy :	String!,
  $DateEntered :	String!
	){
		updateCommitteeMutation(
			OrganizationID:	$OrganizationID,
  CommitteeName:	$CommitteeName ,
  Description:		$Description,
  Contact:		$Contact,
  ContactEmail :	$ContactEmail,
  PhoneNumber :		$PhoneNumber,
  BriefDescription:	$BriefDescription,
  PageStyleID:		$PageStyleID,
  Status:		$Status,
  CodeDesc:		$CodeDesc,
  StoryCreateAccess :	$StoryCreateAccess,
  PictureCreateAccess:	$PictureCreateAccess,
  VideoCreateAccess:	$VideoCreateAccess,
  IsPublic:		$IsPublic,
  DefaultMemberType:	DefaultMemberType,
  IsGroupCommittee:	$IsGroupCommittee,
  PictureID :		$PictureID,
  MissionStatement :	$MissionStatement,
  Title1:		$Title1,
  Information1 :	$Information1,
  Title2:		$Title2,
  Information2:		$Information2,
  Title3:		$Title3,
  Information3 :	$Information3,
  DisplayBanner:	$DisplayBanner,
  Vision :		$Vision,
  EnteredBy :		$EnteredBy,
  DateEntered :		$DateEntered
		){
			id
			CommitteeName
			Contact
		}
	}
`
export { getCommitteesQuery, getCommitteeQuery, addCommitteeMutation, deleteCommitteeMutation, updateCommitteeMutation };
