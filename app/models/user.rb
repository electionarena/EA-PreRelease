class User < ActiveRecord::Base

	EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

	validates :first_name, :presence => true, :length => { :maximum => 25 }
	validates :first_name, :exclusion => { :in => "First Name" }
	validates :last_name, :presence => true, :length => { :maximum => 50 }
	validates :last_name, :exclusion => { :in => "Last Name",}
	validates :email, :presence => true, :length => { :maximum => 100 }, :format => EMAIL_REGEX, :confirmation => true
	validates_inclusion_of :accept_terms, :in => [true] , :message => "is manadatory"
  
end

