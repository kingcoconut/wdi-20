grades = {paul: 50, simon: 75, lucy: 100}

grades.each do |key, value|
  puts "**************"
  puts "KEY: #{key}"
  puts "VALUE: #{value}"
  puts "**************"
  puts ""
end

grades.each {|k,v| puts "KEY: #{k}\t VALUE:#{v}"}
