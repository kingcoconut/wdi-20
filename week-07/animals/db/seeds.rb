# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
h1 = Habitat.create({:name => "Woodland"})
h2 = Habitat.create({:name => "Alpine"})

s1 = Species.create({:name => "Meles meles", :status => "Not endangered", habitat_id: h1.id})
s2 = Species.create({:name => "Martes americana", :status => "Endangered", habitat_id: h2.id})
s3 = Species.create({:name => "Mustela putorius", :status => "Endangered", habitat_id: h2.id})

a1 = Animal.create({:name => "Badger", :color => "Black and white", species_id: s1.id})
a2 = Animal.create({:name => "Pine marten", :color => "Brown and white", species_id: s2.id})
a3 = Animal.create({:name => "Polecat", :color => "White", species_id: s3.id})
