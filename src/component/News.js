import React, { useState , useEffect} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


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
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${props.page}&pageSize=${props.pageSize}`;
    setLoading(true)
    fetch(url).then((response) => response.json())
    .then((data) => {
      props.setProgress(50);
      setArticles(data.articles)
      setTotalresults(data.totalResults)
      setLoading(false)
       
        props.setProgress(100);
      });
  }
  
  useEffect(()=>{
  //  props.setProgress(10);
  //     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`;
  //     setLoading(true)
  //     fetch(url).then((response) => response.json())
  //     .then((data) => {
  //       props.setProgress(50);
  //       setArticles(data.articles)
  //       setTotalresults(data.totalResults)
  //       setLoading(false)
         
  //         props.setProgress(100);
  //   });
  document.title=`${capitalizeFirst(props.category)}` 
    updateNews()
    //eslint-disable-next-line
  },[])
//  const handletoprev= async ()=>{
//     let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page - 1}&pageSize=${props.pageSize}`;
//     setLoading(true)
//       fetch(url).then((response) => response.json())
//       .then((data) => {
//         setArticles(data.articles)
//         setTotalresults(data.totalResults)
//         setLoading(false)
//     })
//     setPage(page-1)
//     updateNews()
//   }
//  const handletonex= async ()=>{
//     if(!Math.ceil(page> totalResults/props.pageSize)){

//       let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4c01cae649f847138fb6e9465b651efb&page=${page}&pageSize=${props.pageSize}`;
//       setLoading(true)
//       fetch(url).then((response) => response.json())
//       .then((data) => {
//         setArticles(data.articles)
//         setTotalresults(data.totalResults)
//         setLoading(false)
//     });
//     setPage(page+1)
//     updateNews()
//     }
//   }
  const fetchMoreData = async () => {

    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4c01cae649f847138fb6e9465b651efb&page=${page + 1}&pageSize=${props.pageSize}`;
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
        {/* <div className="container d-flex justify-content-around">
        <button disabled={page<=1}type="button" className="btn btn-dark" onClick={handletoprev}>&laquo;Prev</button>
        <button disabled={page + 1 > Math.ceil(totalResults/props.pageSize)}type="button" className="btn btn-dark" onClick={handletonex}>Nex&raquo;</button>
        </div> */}
      </>
    )
  }

News.defaultProps={
  country:'in',
  pageSize:6,
  category:'general'
}
News.propTypes ={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
}

export default News
