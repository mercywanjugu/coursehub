class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :image_url
      t.string :genre
      t.string :plot
      t.string :total_time
      t.integer :view

      t.timestamps
    end
  end
end
