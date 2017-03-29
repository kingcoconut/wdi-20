class CharactersController < ApplicationController
  def show
    options = {
      male: {
        titles: ["Mr ", "Lord ", "Count ", "Sir ", "His Lordship, "],
        names: ["Lewis ", "Felix ", "Baxter "]
      },
      female: {
        titles: ["Ms ", "Lady ", "Countess ", "Baroness ", "Her Ladyship, "],
        names: ["Kristy ", "Liesl ", "Pia "]
      },
      surnames: ["Bergstrom", "Eckersley", "Weinberg"]
    }

    gender = [:male, :female].sample

    generated_name = {
      title: options[gender][:titles].sample,
      name: options[gender][:names].sample,
      surname: options[:surnames].sample
    }

    respond_to do |format|
      format.html {render text: 'this is the html response'}
      format.json {render json: generated_name}
    end
  end

  def index
  end
end
