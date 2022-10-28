import React from 'react'
import style from './Card.module.css'
import MoviePlayer from '../../assests/moviePlayer.svg'
import StarRating from '../StarRating/StarRating'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Card = ({ ele }) => {

    const router = useRouter()

    // const detailsHandeler = (i) => {
    //     // router.push(`/components/Details/${i}`)
    // }

    const src = `https://image.tmdb.org/t/p/w500${ele.poster_path}`

    return (
        <>
            <div className={style.card}
             key={ele.vote_count} 
            // onClick={() => 
            // detailsHandeler(ele.id)}
            >
                <Link href="/components/Details/Details" as={`/components/Details/${ele.id}`}>
                    <a >
                        <div
                            className={style.cardImg}>

                            <Image
                                loader={() => src}
                                src={src}
                                width={500}
                                height={500}
                                alt="MovieBanner" />
                        </div>

                        <div
                            className={style.about}>

                            <ul>
                                <li>
                                    {ele.title.length <= 20 ? ele.title : ele.title.slice(0, 20)}</li>
                                <li>
                                    <StarRating
                                        rating={Math.round((ele.vote_average * 10) / 10) / 2} />
                                </li>
                            </ul>

                            <div className={style.moviePlayer}>

                                <Image
                                    src={MoviePlayer}
                                    alt="MoviePlayer" />
                            </div>

                        </div>
                    </a>
                </Link>
            </div>
        </>
    )
}

export default Card