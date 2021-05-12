class AddEnrollmentToReview < ActiveRecord::Migration[5.2]
  def change
    add_reference :reviews, :enrollment, null: false, foreign_key: true
  end
end
