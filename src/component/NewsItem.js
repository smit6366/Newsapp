import React from 'react'

const NewsItem = (props) =>{
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (

      <div className='my-3'>
        <div className="card" >
          <div style={{display:'flex',postion:'absolute',justifyContent:'flex-end',right:'0'}}>
          <span className="badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>
            {source}
          </span>
          </div>
          <img src={imageUrl} className="card-img-top" style={{ width: '100%', height: '50%' }} alt="..." />
          <div className="card-body py-1" >
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small>By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark" >Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
