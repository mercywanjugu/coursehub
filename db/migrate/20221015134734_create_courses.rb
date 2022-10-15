class CreateCourses < ActiveRecord::Migration[6.1]
  def change
    create_table :courses do |t|
      t.string :title
      t.text :description
      t.integer :duration
      t.string :user_id

      t.timestamps
    end
  end
end
