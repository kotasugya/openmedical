class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.references :user, null: false, foreign_key: true
      t.references :company, null: false, foreign_key: true
      t.references :review_category, null: false, foreign_key: true
      t.text :review_content

      t.timestamps
    end
  end
end
