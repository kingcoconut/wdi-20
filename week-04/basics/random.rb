number = Random.rand(0..10)
guess = -1

while guess != number
  puts "Make a guess"
  guess = gets.chomp.to_i
end

puts "Great job, you guess it right!"
puts "It was number #{number}"
