option = ""

while true
  puts "Choose which mode you want:"
  puts "1. +"
  puts "2. -"
  puts "3. *"
  puts "4. /"
  puts "5. Quit"
  option = gets.chomp
  break if option == "5"
  system("clear")
  puts "First number:"
  number_one = gets.chomp.to_i
  system("clear")
  puts "Second number:"
  number_two = gets.chomp.to_i
  system("clear")

  puts "\n*********** YOUR RESULT *************"
  case option
  when "1"
    puts number_one + number_two
  when "2"
    puts number_one - number_two
  when "3"
    puts number_one * number_two
  when "4"
    puts number_one / number_two
  end
  puts "***********************************"
  puts ""
end

puts "Thanks for playing!"
