class Record < ApplicationRecord
  validates_presence_of :description, :amount, :date
end
