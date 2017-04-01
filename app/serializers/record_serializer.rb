class RecordSerializer < ActiveModel::Serializer
  attributes :id, :date, :description, :amount
end
