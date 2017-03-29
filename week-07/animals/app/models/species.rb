class Species < ApplicationRecord
  belongs_to :habitat
  has_many :animals
end
