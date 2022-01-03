class AddVoteToCostumes < ActiveRecord::Migration[6.1]
  def change
    add_column :costumes, :vote, :int
  end
end
