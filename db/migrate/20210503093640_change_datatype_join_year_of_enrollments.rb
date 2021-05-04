class ChangeDatatypeJoinYearOfEnrollments < ActiveRecord::Migration[5.2]
  def change
    change_column :enrollments, :join_year, :date
  end
end
