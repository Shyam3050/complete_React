import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import useHttp from "../hooks/use-http";
import { getAllQuotes } from "../lib/api";
const DUMMY_DATA = [
  { id: "q1", author: "max", text: "learning react is fun!" },
  { id: "q2", author: "shyam", text: "learning javascript is great!" },
];
const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: loadedData,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(()=>{
sendRequest()
  },[sendRequest])
  if(status === "pending"){
    return <div className="centered">
       <LoadingSpinner/>
    </div>
  }
  if(error){
    return <div className="centered">
      {error}
    </div>
  }
if(status === 'completed' && (!loadedData || loadedData.length === 0)){
  return <NoQuotesFound />
}
  return <QuoteList quotes={loadedData} />;
};
export default AllQuotes;
