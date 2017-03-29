class AnimalsController < ApplicationController
  def show
    animal = Animal.find(params[:id])
    render json: animal.to_json(
      methods: [:climate],
      except: [:created_at, :updated_at],
      include: {
        species: {
          except: [:created_at, :updated_at],
          include: {
            habitat: {
              except: [:created_at, :updated_at]
            }
          }
        }
      }
    )
  end
end
