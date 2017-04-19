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

  describe "DELETE #destroy" do
    context "the user exists" do
      before :each do
       @user = FactoryGirl.create(:user)
      end
      it "removes the record from the database" do
        expect {
          delete :destroy, params: {id: @user.id}
        }.to change(User, :count).by -1
      end
      it "redirects to the root path" do
        delete :destroy, params: {id: @user.id}
        expect(response).to redirect_to(root_path)
      end
    end
    context "the user does not exist" do
      it "returns a 404" do
        delete :destroy, params: {id: 4321}
        expect(response.status).to eq 404
      end
    end
  end

  describe "POST #create" do
    context "valid params" do
      before :each do
        @user_params = FactoryGirl.attributes_for(:user)
      end
      it "creates a user in the database" do
        post :create, params: {user: @user_params}
        expect(User.find_by_email(@user_params[:email])).to_not eq nil
      end
      it "renders the show template" do
        post :create, params: {user: @user_params}
        expect(response).to render_template(:show)
      end
      it "sends a welcome email" do
        expect_any_instance_of(User).to receive(:send_welcome_email)
        post :create, params: {user: @user_params}
      end
      it "assigns the user variable" do
        post :create, params: {user: @user_params}
        expect(assigns[:user]).to eq User.find_by_email(@user_params[:email])
      end
    end

    context "invalid params" do
      before :each do
        expect_any_instance_of(User).to receive(:save).and_return(false)
      end
      it "should render the new template" do
        post :create, params: {user: FactoryGirl.attributes_for(:user)}
        expect(response).to render_template(:new)
      end
      it "should assign user" do
        user_params = FactoryGirl.attributes_for(:user)
        post :create, params: {user: user_params}
        expect(assigns[:user].email).to eq user_params[:email]
      end
      it "should not save the record" do
        expect {
          post :create, params: {user: FactoryGirl.attributes_for(:user)}
        }.to change(User, :count).by 0
      end
    end
  end
end
