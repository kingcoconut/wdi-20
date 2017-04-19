file = File.open("sample.txt", "r")
file.each do |line|
 puts line if line =~ /[A-Z][a-z]+/
end
