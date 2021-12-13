class AdminSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :password_digest
end
