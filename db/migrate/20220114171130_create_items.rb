class CreateItems < ActiveRecord::Migration[7.0]
  def change
    create_table :items do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.string :price
      t.references :item_category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
