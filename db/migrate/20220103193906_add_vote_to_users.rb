class AddVoteToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :vote, :int
  end
end
