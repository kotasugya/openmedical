class CreateReviewCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :review_categories do |t|
      t.string :name
      # t.string :gap_before_join
      # t.strgin :weak_and_strgon_point
      # t.string :leave_reason
      # t.string :company_culture
      # t.string :work_balance
      # t.integer :income
      t.timestamps
    end
  end
end
