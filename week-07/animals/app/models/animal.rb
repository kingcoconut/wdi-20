class Animal < ApplicationRecord
  belongs_to :species

  def climate
    if self.species.habitat.name == "Alpine"
      "Very cold"
    else
      "Not so cold"
    end
  end
end
