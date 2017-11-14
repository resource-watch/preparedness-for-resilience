class Api::ResourceSerializer < ActiveModel::Serializer
  attributes :id, :title, :slug, :description, :url, :photo

  def photo
    {
        thumb: object.photo.url(:thumb),
        original: object.photo.url(:original)
    }
  end
end