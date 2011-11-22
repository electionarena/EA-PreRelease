class UsersHasType < ActiveRecord::Migration
  def up
      add_column :users, :kind, :string
  end

  def down
      remove_column :users, :kind
  end
end
