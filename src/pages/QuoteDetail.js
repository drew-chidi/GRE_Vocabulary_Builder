import {React, Fragment} from 'react'
import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const dummyQuotes = [
    {id: '1', author: "Bright Adams", text:"Nyansh is Life"},
    {id: '2', author: "Andrew Chidi", text:"Don't die for Nyansh"}

]
console.log(dummyQuotes)

const QuoteDetail = () => {
    const params = useParams();
    console.log(params.quoteId);
    const quote = dummyQuotes.find((quote) => quote.id === params.quoteId);
    console.log(quote);

    if(!quote){
        return <p>No Quote Found!</p>
    }

    return (
        <Fragment>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuoteDetail
