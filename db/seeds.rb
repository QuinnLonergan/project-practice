# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Costume.create!(person:"Mark", img_url:'https://inst-2.cdn.shockers.de/hs_cdn/out/pictures/master/product/1/evil-joker-kostuem-superhelden-kostuem-halloween-kostuem-comic-kostuem-36585-001.jpg ', name: "Joker")
Costume.create!(person:"Frank", img_url:'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_500x500_$&$product=PartyCity/P750767', name:"Batman")

puts "costumes created"
