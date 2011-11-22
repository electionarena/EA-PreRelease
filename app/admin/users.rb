ActiveAdmin.register User do
    
 	scope :candidates
	scope :voters
	scope :journalists	

	index do
		column :first_name
		column :last_name
		column :email
		column "Type of User", :kind
		column "Sign-up Date", :created_at
		default_actions
	end  
end
