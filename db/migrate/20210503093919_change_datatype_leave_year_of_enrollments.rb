class ChangeDatatypeLeaveYearOfEnrollments < ActiveRecord::Migration[5.2]
  def change
    change_column :enrollments, :leave_year, :date
  end
end
