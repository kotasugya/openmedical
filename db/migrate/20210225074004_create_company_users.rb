class CreateCompanyUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :company_users do |t|
      t.references :company, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end
