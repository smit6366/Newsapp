import React, { useState , useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
// import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import axios from 'axios';



const News =(props)=> {
const [articles, setArticles]= useState([])
const [loading, setLoading]= useState(true)
const [page, setPage]= useState(1)
const [totalResults, setTotalresults]= useState(0)
 

 const capitalizeFirst=(string)=>{
     return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
 const updateNews= async()=>{
    props.setProgress(10);
    let url=`https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=10&apikey=${props.apiKey}`;
    console.log(url)
    setLoading(true)
    axios(url).then((response) =>
       response.data)
    .then((data) => {
      props.setProgress(50);
      setArticles(data.articles)
      setTotalresults(data.totalResults)
      setLoading(false)
       
        props.setProgress(100);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
      });
  }
  
  useEffect(()=>{

  document.title=`${capitalizeFirst(props.category)}` 
    updateNews()
    //eslint-disable-next-line
  },[])

  const fetchMoreData = async () => {

    let url = `https://gnews.io/api/v4/top-headlines?category=${props.category}&lang=en&country=${props.country}&max=10&apikey=${props.apiKey}`
    setPage(page+1)
    fetch(url).then((response) => response.json())
    .then((data) => {
      setArticles(articles.concat(data.articles))
        setTotalresults(data.totalResults)
        
      });
  };
  

   
    return (
      <>
        <div className="container my-3 w-75">
          <h1 className='text-center' style={{marginTop:'90px'}}>Top {capitalizeFirst(props.category)} Headlines</h1>
          {loading && <Spinner/>}
          <div className="container">
          <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
          style={{overflow:'hidden'}}
        >
          <div className="row" >
          
          { articles.map((element)=>{
              return  (<div className="col-md-4"key={element.url}>
              <NewsItem title={element.title?element.title.slice(0,45):""}  description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage?element.urlToImage:"./logo512.png"} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>)
            })}
           
          </div>
          </InfiniteScroll>
          </div>
        </div>
       
      </>
    )
  }

export default News
