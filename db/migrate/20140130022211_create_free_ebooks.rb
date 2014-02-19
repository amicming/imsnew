class CreateFreeEbooks < ActiveRecord::Migration
  def change
    create_table :free_ebooks do |t|
      t.string :book_name
      t.string :book_url
      t.integer :book_category_type_id

      t.timestamps
    end
  end
end
