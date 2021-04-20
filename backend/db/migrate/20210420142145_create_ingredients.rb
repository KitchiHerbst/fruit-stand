class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.references :fruit, foreign_key: true
      t.references :bug, foreign_key: true
      t.references :basket, null: false, foreign_key: true

      t.timestamps
    end
  end
end
