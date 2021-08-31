import React from 'react'
import QuoteList from '../components/quotes/QuoteList';

const dummyQuotes = [
    {id: 1, author: "Bright Adams", text:"Nyansh is Life"},
    {id: 2, author: "Andrew Chidi", text:"Don't die for Nyansh"}
]

const AllQuotes = () => {
    return (
        <div>
            <QuoteList quotes={dummyQuotes} />
        </div>
    )
}

export default AllQuotes
