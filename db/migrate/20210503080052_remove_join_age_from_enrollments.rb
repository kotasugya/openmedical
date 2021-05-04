class RemoveJoinAgeFromEnrollments < ActiveRecord::Migration[5.2]
  def change
    remove_column :enrollments, :join_age, :integer
  end
end
