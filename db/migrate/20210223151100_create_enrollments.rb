class CreateEnrollments < ActiveRecord::Migration[5.2]
  def change
    create_table :enrollments do |t|
      t.references :user, null: false, foreign_key: true
      t.references :company, null: false, foreign_key: true
      t.string :employment_status
      t.string :working_now_or_not
      t.integer :join_age
      t.integer :join_year
      t.integer :leave_year
      t.string :occupation

      t.timestamps
    end
  end
end
