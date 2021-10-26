class CostumeSerializer < ActiveModel::Serializer
  attributes :id, :person, :img_url, :name
end
