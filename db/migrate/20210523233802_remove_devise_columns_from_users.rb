class RemoveDeviseColumnsFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :provider, :string
    remove_column :users, :uid, :string
    remove_column :users, :tokens, :text
    remove_column :users, :encrypted_password, :string
  end
end
