import React, { useEffect, useState } from 'react'
import DisplayItem from './DisplayItem'
import Overlay from './Overlay';
import allMovies from '../assets/movieCollection';

const HomePage = () => {
    const [movies, setMovies] = useState([])
    const [pageNo, setPageNo] = useState(1)
    const [genre, setGenre] = useState("")
    const [chosenItem, setChosenItem] = useState("")
    const [sort, setSort] = useState("LATEST")
    const [totalMovies, setTotalMovies] = useState(0)
    const [modal, setModal] = useState(false)
    const [query, setQuery] = useState("")

    const initalState = allMovies


    useEffect(() => {
        let myData = initalState

        if (genre !== "") {
            // eslint-disable-next-line array-callback-return
            myData = myData.filter((item) => {
                let arr = item.genres
                // console.log(arr)
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] === genre) {
                        return item
                    }
                }
            })
        }

        if (sort === "LATEST") {
            myData = myData.sort((a, b) => b.year - a.year)
        }
        else if (sort === "OLDEST") {
            myData = myData.sort((a, b) => a.year - b.year)
        }
        else if (sort === "RATINGUP") {
            myData = myData.sort((a, b) => b.imdbRating - a.imdbRating)
        }
        else if (sort === "RATINGDOWN") {
            myData = myData.sort((a, b) => a.imdbRating - b.imdbRating)
        }

        setTotalMovies(myData.length)



        if (query !== "") {
            // console.log("Hello")
            // eslint-disable-next-line array-callback-return
            myData = myData.filter((item) => {
                let myTitle = item.title.toLowerCase()
                let myQuery = query.toLowerCase()
                if (myTitle.includes(myQuery)) {
                    return item;
                }
            })
        }

        myData = myData.slice((parseInt(pageNo) - 1) * 20, (parseInt(pageNo) * 20))

        if (myData.length === 0) {
            setPageNo(1)
        }
        setMovies(myData)

        // setMovies(response.data)

    }, [genre, initalState, pageNo, query, sort])

    function incrementPage() {
        if (pageNo !== totalMovies / 20) {
            setPageNo(pageNo + 1)
        }
    }

    function decrementPage() {
        if (pageNo !== 1) {
            setPageNo(pageNo - 1)
        }
    }


    return (
        <div className='homepage'>
            {modal ? <div style={{ display: modal }} className='modal'>
                <div className='overlay'>
                    <Overlay setModal={setModal} chosenItem={chosenItem} />
                </div>
            </div> : ""}
            <h1 className='heading'>Home-Page</h1>
            <div className='homeContent'>
                <div className='leftHome'>
                    <h3>GENRES <hr /></h3>
                    <ul>
                        <li className={(genre === "") ? "selectedGenre" : ""} onClick={() => { setGenre(""); }}>All</li>
                        <li className={(genre === "Action") ? "selectedGenre" : ""} onClick={() => { setGenre("Action"); }}>Action</li>
                        <li className={(genre === "Adventure") ? "selectedGenre" : ""} onClick={() => { setGenre("Adventure"); }}>Adventure</li>
                        <li className={(genre === "Biography") ? "selectedGenre" : ""} onClick={() => { setGenre("Biography"); }}>Biography</li>
                        <li className={(genre === "Comedy") ? "selectedGenre" : ""} onClick={() => { setGenre("Comedy"); }}>Comedy</li>
                        <li className={(genre === "Crime") ? "selectedGenre" : ""} onClick={() => { setGenre("Crime"); }}>Crime</li>
                        <li className={(genre === "Drama") ? "selectedGenre" : ""} onClick={() => { setGenre("Drama"); }}>Drama</li>
                        <li className={(genre === "History") ? "selectedGenre" : ""} onClick={() => { setGenre("History"); }}>History</li>
                        <li className={(genre === "Romance") ? "selectedGenre" : ""} onClick={() => { setGenre("Romance"); }}>Romance</li>
                        <li className={(genre === "Mystery") ? "selectedGenre" : ""} onClick={() => { setGenre("Mystery"); }}>Mystery</li>
                        <li className={(genre === "Horror") ? "selectedGenre" : ""} onClick={() => { setGenre("Horror"); }}>Horror</li>
                        <li className={(genre === "Fantasy") ? "selectedGenre" : ""} onClick={() => { setGenre("Fantasy"); }}>Fantasy</li>
                        <li className={(genre === "Thriller") ? "selectedGenre" : ""} onClick={() => { setGenre("Thriller"); }}>Thriller</li>
                    </ul>
                </div>
                <div className='rightHome'>
                    <div className='upperHome'>
                        <h3>{totalMovies} Movies</h3>
                        <div><input className='queryBox' placeholder={`Search among ${totalMovies} movies...`} value={query} onChange={(e) => setQuery(e.target.value)}></input> &nbsp; </div>
                        <div><button onClick={() => decrementPage()}>👈🏻</button> {pageNo} <button onClick={() => incrementPage()}>👉🏻</button></div>
                        <div>SORT BY : <select onChange={(e) => setSort(e.target.value)} name='sort' id='sort'>
                            <option value="LATEST">LATEST</option>
                            <option value="OLDEST">OLDEST</option>
                            <option value="RATINGUP">HIGHEST RATED</option>
                            <option value="RATINGDOWN">LOWEST RATED</option>
                        </select>
                        </div>
                    </div>
                    <div className='displayContent'>
                        {movies && movies.map((item) => {
                            return <DisplayItem setModal={setModal} setChosenItem={setChosenItem} key={item.poster} item={item} />
                        })}
                    </div>
                    <div className='navigatePage'><button onClick={() => decrementPage()}>👈🏻</button> {pageNo} <button onClick={() => incrementPage()}>👉🏻</button></div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
