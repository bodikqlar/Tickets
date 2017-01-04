require 'camel_json'

class ApplicationRecord < ActiveRecord::Base
  include CamelJson
  self.abstract_class = true
end
