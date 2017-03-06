puts "How big should I be?"
size = gets.chomp.to_i
size.downto 10 do |i|
  output = ''
  i.times do 
    output += "*"
  end
  puts output
end
