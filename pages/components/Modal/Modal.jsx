import React, { useEffect, useState } from 'react'
import style from './Modal.module.css'
import axios from 'axios'

const Modal = ({ id, onClick }) => {

    const [movieData, setMovieData] = useState([])

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=36f92e051d1f7b92dd147302b1b51f81`).then((res) => {
            const newData = res.data.results.filter((type) => {
                return (
                    type.type === "Trailer"
                )
            })
            setMovieData(newData)
        })
    }, [movieData])

    useEffect(()=>{
        console.log(movieData)
    },[])



    return (
        <>
            {movieData.length > 0 ?
                <>
                    <div className="modalContainer">
                        <div className={style.modalCloseButton}>
                            <button onClick={onClick}><i class="fa-sharp fa-solid fa-xmark"></i></button>
                        </div>

                        <iframe className={style.modal}
                            src={`https://www.youtube-nocookie.com/embed/${movieData[0].key}?autoplay=1&mute=1`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay;
                              encrypted-media; gyroscope;
                              picture-in-picture"
                            allowFullScreen>
                        </iframe>
                    </div>
                </>
                : ""}
        </>
    )
}

export default Modal