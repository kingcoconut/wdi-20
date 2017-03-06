puts "What is the current temperature?"

temp = gets.chomp.to_i

puts "Is the AC working?"

ac_working = gets.chomp

puts "What temperature do you want?"

new_temp = gets.chomp.to_i

puts "Turn on the AC please" if ac_working == "yes" && temp > new_temp
puts "Fixed the AC, it is hot!" if ac_working == "no" && temp > new_temp
puts "Fix the AC whenever man... its coooooooool" if ac_working == "no" && temp < new_temp
