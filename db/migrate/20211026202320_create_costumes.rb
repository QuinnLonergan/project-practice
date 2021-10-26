class CreateCostumes < ActiveRecord::Migration[6.1]
  def change
    create_table :costumes do |t|
      t.string :person
      t.string :img_url
      t.string :name

      t.timestamps
    end
  end
end
