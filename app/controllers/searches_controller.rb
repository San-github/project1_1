class SearchesController < ApplicationController
  
  def new 
    @search = Search.new 
    
  end
  
  def index
    @searches=Search.all
  end

  def create 
  @search = Search.new(search_params) 
    if @search.save 
    redirect_to '/searches' 
    else 
    render 'new' 
    end 
  end
  
  private 
  def search_params 
    params.require(:search).permit(:content) 
  end
end
