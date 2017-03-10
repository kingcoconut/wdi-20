class PlanetObject
  attr_accessor :fuel
  def runs_on_oxygen?
    return @fuel == "oxygen"
  end
end

class Person < PlanetObject
  attr_accessor :first_name
  @@id = 0
  def initialize(first, last)
    puts @@id
    @first_name = first
    @last_name = last
    @fuel = "oxygen"
    @@id += 1
  end

  def speak
    puts "I am speaking"
  end

  def laugh
    puts "I am laughing"
  end

  def cry
    puts "WDi is just too hard"
  end

  def print_name
    # puts "#{@first_name} #{@last_name}"
    puts @first_name + " " + @last_name
  end

  def set_id(value)
    @@id = value
  end

  def print_id
    puts @@id
  end
end

class Vehicle < PlanetObject
  def initialize
    @fuel = "petrol"
  end
end
