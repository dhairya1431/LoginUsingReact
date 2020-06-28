import React, { Component } from 'react'
import { login } from './UserFunctions'
import axios from 'axios'
import data from './data.json'
class Further extends Component {
  constructor() {
    super()
    this.state = {

     data : {

        }
    }

   
  }

  componentDidMount() {
            console.log(data)
  }
 
  onSubmit(e) {
    e.preventDefault()
  }

  render() {
       

            return (  
               data.movie.map((item) => {
                return (
                     
                <div> 
                    <img src={item.poster}/>

                    <h1>Directors:</h1>
                    {item.director.map( (item1) => <b>{item1}</b>)}

                    <h1>Stars:</h1>
                    {item.stars.map( (item1) => <b>{item1}</b>)}

                    <h1>Pageviews:</h1>
                    <b>{item.pageViews}</b>

                    <h1>title:</h1>
                    <b>{item.title}</b>

                    <h1>language:</h1>
                    <b>{item.language}</b>

                </div>
                )
                
                
                }))
            
          
    }
}

export default Further

{/* <div class="card movie-description">
            <!-- <div class="card-header" style=" padding-bottom: 0px; text-align: end; padding-top: 8px; padding-right: 8px; padding-left: 8px;">
              <div class="list-icons-item dropdown profile"> <a href="#" class="list-icons-item dropdown-toggle" data-toggle="dropdown"><i class="icon-more"></i></a>
                <div class="dropdown-menu ">
                    <a href='javascript: shareList("Phatte Dinde Chakk Punjabi")' class="dropdown-item"><i class="icon-share3"></i>Share</a>
                </div>
              </div>
            </div> -->
            <div class="card-body ">
              <div class="row ">
                <div class="col-lg-2 col-md-4 img-poster-div" style="text-align: center"><img class="img img-poster imageBox" src="https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1566460907551_cccccccccccc.jpeg" onerror="imageCanvas('Phatte Dinde Chakk Punjabi','5d5a7abde7dfda23f8ee7686');" style="width: inherit; max-width: 150px; border-radius: 5px;"></div>
                <div class="col-lg-6  col-md-6 mt-1 ">
                  <h1 class="card-title mb-0 font-weight-bold text-lg-left ">
                  Phatte Dinde Chakk Punjabi
                </h1>
                  <p id="genre " class="mt-1 capitalize"><strong>Genre: </strong>
                    comedy
                  </p>
                  
                    <p id="director " class="mt-1"><strong>Director: </strong>
                      Smeep Kang
                    </p>
                  
                  
                    <p id="star " class="mt-1"><strong>Starring: </strong>
                      Gippy Grewal
                    </p>
                  

                  <p id="star " class="mt-1"><strong>Language: </strong>
                    Punjabi
                  </p>
                  <p id="star " class="mt-1"><strong>Length: </strong>
                    70 Mins
                  </p>
                  <p id="star " class="mt-1"><strong>Release Date: </strong>
                    Fri Jun 26 2020
                  </p>
                  <div class="mt-1 mb-1 genres-block" id="movie-details-id" data-movie-id="5d5a7abde7dfda23f8ee7686">
                    
                      <div class="genre" id="userVoted_Div_comedy">
                        <div class="genre-vote" data-genre="comedy">
                          <span class="upvote"></span>
                          <span class="downvote"></span>
                        </div>
                        <span class="genre-name">
                      comedy</span>
                        <span class="genre-votes-count" data-voteduser-genre="comedy" style="cursor:pointer;color:blue">(
                      0)</span>
                      </div>
                      
                  </div>
                </div>
                <div class="col-lg-4 col-md-2 watch-trailer-btn">
                  
                      <button class="btn btn-primary" onclick="if (!window.__cfRLUnblockHandlers) return false; playVideo(this);" id="https://www.youtube.com/embed/yyRepLe0Vpo">Watch Trailer</button>
                      
                </div>
              </div>
              <div class="row">
                <div class="col-12 mt-2" style=" text-align: end; ">
                  <a title="Embed Code" href="javascript: shareEmbed(&quot;Phatte Dinde Chakk Punjabi&quot;)" class="btn btn-sm border-primary text-primary rounded-round border-2 mr-3" style=" background: white; box-shadow: unset; ">
  									<i class="icon-embed2"></i>
  								</a>
                  <a title="Embed Link" href="javascript: shareLink(&quot;Phatte Dinde Chakk Punjabi&quot;)" class="btn btn-sm border-primary text-primary rounded-round border-2 mr-3" style=" background: white; box-shadow: unset; ">
  									<i class="fa fa-share"></i>
  								</a>
                </div>

              </div>
            </div>
          </div> */}