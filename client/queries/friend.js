
import gql from 'graphql-tag';

	const getFriendsQuery = gql`
		friends{
			OrganizationID
  Title
  FirstName
  LastName
  Suffix
  SubCategoryID
  LastEventAttended
  EventDate
  PhoneNumber
  PhoneProviderID
  Email
  BestContact
  Address
  Address2
  City
  State
  Zip
  Comment
  Status
  EnteredBy
  DateEntered
		}
	`

const getFriendQuery = gql`
	query($id: ID){
		friend(id: $id){
			OrganizationID
  Title
  FirstName
  LastName
  Suffix
  SubCategoryID
  LastEventAttended
  EventDate
  PhoneNumber
  PhoneProviderID
  Email
  BestContact
  Address
  Address2
  City
  State
  Zip
  Comment
  Status
  EnteredBy
  DateEntered
	}
}
`

const addFriendMutation = gql`
		mutation(
  $OrganizationID: String!,
  $Title: 	String!,
  $FirstName:	 String!,
  $LastName: 	String!,
  $Suffix: 	String!,
  $SubCategoryID: String!,
  $LastEventAttended: String!,
  $EventDate: 		String!,
  $PhoneNumber: 	String!,
  $PhoneProviderID: 	String!,
  $Email: 		String!,
  $BestContact: 	String!,
  $Address: 		String!,
  Address2: 	String!,
  $City: 	String!,
  $State: 	String!,
  $Zip: 	String!,
  $Comment: 	String!,
  $Status: 	String!,
  $EnteredBy: 	String!,
  $DateEntered: String!
		)
  addFriend(
		OrganizationID: $OrganizationID,
  		Title: 		$Title,
  		FirstName: 	$FirstName,
  		LastName: 	$LastName,
  		Suffix: 	$Suffix,
  		SubCategoryID: 	$SubCategory,
  		LastEventAttended: $LastEventAttended,
  		EventDate: 	$EventDate
  		PhoneNumber: 	$PhoneNumber,
  		PhoneProviderID: 	$PhoneProviderID,
  		Email: 		$Email,
  		BestContact: 	$BestContact
  		Address: 	$Address,
  		Address2: 	$Address2,
  		City: 		$City,
  		State: 		$State,
  		Zip: 		$Zip,
  		Comment: 	$Comment,
  		Status: 	$Status,
  		EnteredBy: 	$EnteredBy,
  		DateEntered: 	$DateEntered
	){
		FirstName
		LastName
		Email
	}
	`

    const deleteFriendMutation = gql`
		mutation deleteFriendMutation($id: ID){
			deleteFriendMutation(id: $id) {
				id
				FirstName
				LastName
			}
		}
	`

	const updateFriendMutation = gql`
		mutation updateFriendMutation(
			$OrganizationID: String!,
  $Title: 	String!,
  $FirstName:	 String!,
  $LastName: 	String!,
  $Suffix: 	String!,
  $SubCategoryID: String!,
  $LastEventAttended: String!,
  $EventDate: 		String!,
  $PhoneNumber: 	String!,
  $PhoneProviderID: 	String!,
  $Email: 		String!,
  $BestContact: 	String!,
  $Address: 		String!,
  Address2: 	String!,
  $City: 	String!,
  $State: 	String!,
  $Zip: 	String!,
  $Comment: 	String!,
  $Status: 	String!,
  $EnteredBy: 	String!,
  $DateEntered: String!
		){
			updateFriendMutation(
				OrganizationID: $OrganizationID,
  		Title: 		$Title,
  		FirstName: 	$FirstName,
  		LastName: 	$LastName,
  		Suffix: 	$Suffix,
  		SubCategoryID: 	$SubCategory,
  		LastEventAttended: $LastEventAttended,
  		EventDate: 	$EventDate
  		PhoneNumber: 	$PhoneNumber,
  		PhoneProviderID: 	$PhoneProviderID,
  		Email: 		$Email,
  		BestContact: 	$BestContact
  		Address: 	$Address,
  		Address2: 	$Address2,
  		City: 		$City,
  		State: 		$State,
  		Zip: 		$Zip,
  		Comment: 	$Comment,
  		Status: 	$Status,
  		EnteredBy: 	$EnteredBy,
  		DateEntered: 	$DateEntered
			){
				id
				FirstName
				LastName
			}
		}
		`
export { getFriendsQuery, getFriendQuery, addFriendMutation, deleteFriendMutation, updateFriendMutation};
