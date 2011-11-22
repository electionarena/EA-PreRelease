class UsersController < ApplicationController

	layout 'ea'

	def index
		if session[:user]
			@user = session[:user]
		else
			@user = User.new(:first_name => "First Name", 
        :last_name => "Last Name", 
        :email => "e-mail",
        :accept_terms => "1")
		end
  end
	
	def admin
		@users = User.order("users.created_at DESC")
	end

	def new
		@user = User.new
	end
	
  
  
  require "gmail"
  def create
    @user = User.new(params[:user])
    if @user.save
      
      #send mail
      gmail = Gmail.connect("GOOGLE-USER-NAME", "PASSWORD")
      gmail.deliver do
        to @user.email
        subject "Having fun in Puerto Rico!"
        text_part do
          body "Text of plaintext message."
        end
        html_part do
          content_type 'text/html; charset=UTF-8'
          body "<p>Text of <em>html</em> message.</p>"
        end
      end
      
      
      flash[:notice] = "The user was successfully created. See you soon..."
      redirect_to(:action => 'index')
    else
    	session[:user] = @user
      redirect_to(:action => 'index')
    end
  end
  
  def edit
    @user = User.find(params[:id])
  end
  
  def update
    @user = User.find(params[:id])
    #    @kind = @user.kind
    if @user.update_attributes(params[:user])
      flash[:notice] = "User updated."      
      redirect_to(:action => 'admin')
    else
      render('edit')
    end
  end
  
  def delete
    @user = User.find(params[:id])
  end
  
  def destroy
    User.find(params[:id]).destroy
    flash[:notice] = "User destroyed."    
    redirect_to(:action => 'admin')
  end  
  
  #  def details
  #    raise params[:user_type].inspect
  #    @user =  User.new( :kind => "Voter")
  #    @kind = @user.kind
  #  end
  	
end
