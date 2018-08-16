class Api::CategorizationsController < ApplicationController
    
    
    def create # do I need this route or can it go straight to events and be created there?
        @categorization = Categorization.new(params[:object])
        if @categorization.save
          flash[:success] = "Object successfully created"
          redirect_to?
        else
          flash[:error] = "Something went wrong"
          render 'new'
        end
    end
    
    def show
        @categorization = Categorization.find(params[:id])
    end
    
    def index
        @categorizations = Categorization.all
    end
    
end
