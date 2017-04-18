require 'rails_helper'

RSpec.describe UsersController, type: :controller do
  describe "GET #index" do
    it "assigns all users to @users" do
      10.times {FactoryGirl.create(:user, :with_experiences)}
      get :index
      expect(assigns[:users]).to eq User.all
      expect(response).to render_template(:index)
    end
  end

  describe "PUT #update" do
    let(:user) { FactoryGirl.create(:user) }

    context "with valid parameters" do
      it "changes to users attributes appropriately" do
        put :update, params: {id: user.id, user: {first_name: "Jordan"}}
        user.reload
        expect(user.first_name).to eq "Jordan"
      end
      it "renders the show template" do
        put :update, params: {id: user.id, user: {first_name: "Jordan"}}
        expect(response).to render_template(:show)
      end
    end

    context "with invalid parameters" do
      it "does not update the user record" do
        user2 = FactoryGirl.create(:user)
        put :update, params: {id: user.id, user: {email: user2.email}}
        user.reload
        expect(user.email).to_not eq user2.email
      end
      it "renders the edit template" do
        user2 = FactoryGirl.create(:user)
        put :update, params: {id: user.id, user: {email: user2.email}}
        expect(response).to render_template(:edit)
      end
    end
  end
end
