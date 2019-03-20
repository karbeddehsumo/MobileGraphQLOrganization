import gql from 'graphql-tag';

	const getConstantsQuery = gql`
		constants{
	    	OrganizationID
    		Category
    	   ConstantName
    		Value1
    		Value2
    		Value3
    		SortOrder
    		Status
    		EnteredBy
    		DateEntered
	}
	`

	const getConstantQuery = gql`
		query($id: ID){
			constant(id: $id) {
				OrganizationID
				Category
	   		ConstantName
				Value1
				Value2
				Value3
				SortOrder
				Status
				EnteredBy
				DateEntered
			}
		}
	`

	const addConstantMutation = gql`
		mutation(
			$OrganizationID: String!,
			$Category: 	String!,
			$ConstantName: 	String!,
			$Value1: 	String!,
			$Value2: 	String!,
			$Value3: 	String!,
			$SortOrder: 	String!,
			$Status: 	String!,
			$EnteredBy: 	String!,
			$DateEntered: 	String!
		)
		addConstant(
			OrganizationID: $OrganizationID,
			Category:	$Category,
			ConstantName:	$ConstantName,
			Value1:		$Value1,
			Value2:		$Value2,
			Value3:		$Value3,
			SortOrder:	$SortOrder,
			EnteredBy:	$EnteredBy,
			DateEntered:	$DateEntered
		)
		{
			Category
			ConstantName
			Value1
		}
	`

		const deleteConstantMutation = gql`
			mutation deleteConstantMutation($id: ID) {
				deleteConstantMutation(id: $id) {
					id
					Category
					ConstantName
				}
			}
		`

		const updateConstantMutation = gql`

			mutation updateConstantMutation(
				$id: String!,
				$OrganizationID: String!,
				$Category: 	String!,
				$ConstantName: 	String!,
				$Value1: 	String!,
				$Value2: 	String!,
				$Value3: 	String!,
				$SortOrder: 	String!,
				$Status: 	String!,
				$EnteredBy: 	String!,
				DateEntered: 	String!
			) {
				updateConstantMutation(
					id: $id,
					OrganizationID: $OrganizationID,
					Category:	$Category,
					ConstantName:	$ConstantName,
					Value1:		$Value1,
					Value2:		$Value2,
					Value3:		$Value3,
					SortOrder:	$SortOrder,
					EnteredBy:	$EnteredBy,
					DateEntered:	$DateEntered
				){
					id
					Category
					ConstantName
				}
			}
		`

		export { getConstantsQuery, getConstantQuery, addConstantMutation, deleteConstantMutation, updateConstantMutation};
