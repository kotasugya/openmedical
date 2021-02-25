class CreateEvaluationCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :evaluation_categories do |t|
      t.string :name
      # free_opinion
      # teamwork
      # compliance
      # motivation
      # growth_enviroment
      # treatment
      # recommendation_level
      t.timestamps
    end
  end
end
