class RemoveReviewIdFromEnrollments < ActiveRecord::Migration[5.2]
  def change
    remove_column :enrollments, :review_id, :integer
  end
end
