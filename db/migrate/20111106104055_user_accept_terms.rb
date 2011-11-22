class UserAcceptTerms < ActiveRecord::Migration
  def up
    add_column :users, :accept_terms, :boolean  
  end

  def down
    remove_column :users, :accept_terms
  end
end
