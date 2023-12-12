import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'
import './SearchPage.css'
import SearchIcon from '@mui/icons-material/Search';
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';

function SearchPage() {

    const [{term}] = useStateValue();
    const { data } = useGoogleSearch(term);
    console.log(term);
  return (
    <div className='searchPage'>
        <div className='searchPage__header'>
            <Link to='/'>
               <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'/>
            </Link>
            <div className='searchPage__headerBody'>
                <Search hidebuttons/>
                <div className='searchPage__options'>
                    <div className='searchPage__optionLeft'>

                       <div className='searchPage__option'>
                          <SearchIcon/>
                          <Link to='/all'>All</Link>
                       </div>
                
                       <div className='searchPage__option'>
                           <DescriptionIcon/>
                           <Link to='/all'>News</Link>
                       </div>
                       
                       <div className='searchPage__option'>
                            <ImageIcon/>
                            <Link to='/all'>Images</Link>
                       </div>
                    
                       <div className='searchPage__option'>
                            <LocalOfferIcon/>
                            <Link to='/all'>shopping</Link>
                       </div>
                
                       <div className='searchPage__option'>
                             <RoomIcon/>
                            <Link to='/all'>maps</Link>
                      </div>
                
                      <div className='searchPage__option'>
                            <MoreVertIcon/>
                            <Link to='/all'>more</Link>
                     </div>

                    </div>
                    <div className='searchPage__optionRight'>
                        <div className='searchPage__option'>
                            <Link to='/settings'>Settings</Link>
                        </div>
                        <div className='searchPage__option'>
                            <Link to='/tools'>Tools</Link>
                        </div>
                    </div>
            
            
                </div>
                    
                    
                
            </div>
        </div>
{
    term && (

          <div className='searchPage__results'>
          <p className='searchPage__resultCount'>
            About {data?.searchInformation.formattedTotalResults}results ({data?.searchInformation.formattedSearchTime}) for {term}
          </p>

 {
    data?.items.map((item)=>(

        <div className='searchPage__result'>
            <a href={item.link} className='searchPage__resultLink' target='_blank'>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                    <img src={item.pagemap?.cse_image[0]?.src} className='searchPage__resultImage'/>

                )}
                
                {item.displayLink}
            </a> 
            <a href={item.link} className='searchPage__resultTitle' target='_blank'>
                <h2>{item.title}</h2>
            </a>
            <p className='searchPage__resultDescription'>{item.snippet}</p>

          </div>

    ))
}
   </div>

)
}
        
        
   
       
    </div>
  )
}

export default SearchPage