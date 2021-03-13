class CreateEvaluations < ActiveRecord::Migration[5.2]
  def change
    create_table :evaluations do |t|
      t.references :user, null: false, foreign_key: true
      t.references :company, null: false, foreign_key: true
      t.references :evaluation_category, null: false, foreign_key: true
      t.string :evaluation_level
      # t.string :free_opinion
      # t.string :teamwork
      # t.string :compliance
      # t.string :motivation
      # t.string :growth_enviroment
      # t.string :treatment
      # t.integer :recommendation_level

      t.timestamps
    end
  end
end
