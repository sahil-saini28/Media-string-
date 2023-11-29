
import Loading from "./Loading";
import LoadingBar from 'react-top-loading-bar'
import Newscard from "./Newscard";
import { useState, useEffect } from "react";
export default function Newws(props) {
  let [articles, setArticles] = useState([]);
  let [page, setPage] = useState(1);
  let[loadingGif,setLoadingGif]=useState(false);
  const [progress, setProgress] = useState(100)
     
  
  
  const FetchData = async () => {
  setLoadingGif(true);
   setProgress(progress + 10) 
   let Url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory}&apiKey=${props.skey}&page=${page}`;
    const response = await fetch(Url);
    const data = await response.json();
    setArticles(data.articles);
    console.log(data);
    console.log(data.totalResults);
     setProgress(progress + 70)
    console.log(page);
    setLoadingGif(false);
  };

  useEffect(() => {
    FetchData();
    // eslint-disable-next-line
  }, []);

  async function NextPage() {
    setLoadingGif(true);
    
    let Url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.catagory}&apiKey=${props.skey}&page=${page}`;
    await setPage(page + 1);
    const response = await fetch(Url);
    const data = await response.json();
    setArticles(data.articles);
    console.log(page);
    console.log("hellow im the next page",Math.random());
    setLoadingGif(false);
    
  }

  async function PreviousPage() {
    setLoadingGif(true);
   
    let Url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.catagory}&apiKey=${props.skey}&page=${page}`;
    await setPage(page - 1);
    const response = await fetch(Url);
    const data = await response.json();
    setArticles(data.articles);
    console.log(page);
    console.log("previous page was clicked", Math.random());
    setLoadingGif(false);
  }

  return (
    <>
      <h1 className="text-center" style={{margin: '65px 0px', marginbottom:'35px'}} > Media String</h1>
      <LoadingBar  color='#f11946' progress={progress}onLoaderFinished={() => setProgress(0)}/>
        {loadingGif && <Loading/>}
      <div className="container  ">
        <div className="row">
          { !loadingGif &&articles &&
            articles.map((articles) => {
              return (
                <div className="col-md-4" key={articles.url}>
                  <Newscard
                    title={articles.title ? articles.title : ""}
                    description={
                      articles.description ? articles.description : ""
                    }
                    imageUrl={articles.urlToImage}
                    newsUrl={articles.url}
                    author={articles.author}
                    date={articles.publishedAt}
                    source={articles.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="d-flex justify-content-between">
          <button disabled={page<1} type="button" className="btn btn-dark" onClick={PreviousPage}>
            Previous
          </button>
          <button type="button" className="btn btn-dark  " onClick={NextPage}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
