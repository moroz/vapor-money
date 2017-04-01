class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def to_json
    ActiveModelSerializers::SerializableResource.new(self, {}).as_json
  end
end
