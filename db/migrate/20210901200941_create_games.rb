class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :name
      t.string :genre
      t.string :platform

      t.timestamps
    end
  end
end
