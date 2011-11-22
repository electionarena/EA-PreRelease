class AddUsersType < ActiveRecord::Migration
  def up
  		add_column("users", "user_type", :string, :limit => 15)
  end

  def down
  		remove_column("users", "user_type")
  end
end
