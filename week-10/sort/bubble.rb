def bubble(array)
  while true
    swapped = false

    p array

    array.each_with_index do |el, i|
      if array[i+1] && el > array[i+1]
        array[i] = array[i+1]
        array[i+1] = el
        swapped = true
      end
    end

    break if !swapped
  end
  return array
end

def binary_search(value, array)
  length = array.length
  return false if length == 0

  mid_point = length / 2

  if array[mid_point] == value
    return true
  elsif array[mid_point] > value
    left_array = array[0..mid_point-1]
    binary_search(value, left_array)
  else
    right_array = array[mid_point+1..length]
    binary_search(value, right_array)
  end
end
