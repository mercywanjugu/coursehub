class MovieSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :plot, :total_time , :comments #, :summary

  has_many :watchlists

  # def summary
  #   "#{self.object.title} - #{self.object.plot[0..49]}..."
  # end
end
