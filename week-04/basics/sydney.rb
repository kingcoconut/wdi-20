puts "What suburb do you live in?"

suburb = gets.chomp

case suburb
when "Bondi"
  puts "I like hanging out with backpackers at Bondi too :D"
when "Newtown"
  puts "You must ride a sweet fixie"
when "Coogee"
  puts "But do you actually want to live in Bondi?"
when "Manly"
  puts "Cool, see you never"
when "Glebe"
  puts "I like hanging out with students too"
else
  puts "Where is that?"
end
