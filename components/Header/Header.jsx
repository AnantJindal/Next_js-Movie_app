import React, { useEffect, useState } from 'react'
import style from './Header.module.css'
import Logo from '../../pages/assests/Logo.svg'
import SearchIcon from '../../pages/assests/search.svg'
import axios from 'axios';
import { Card } from 'antd';
import Image from 'next/image'
import { useRouter } from 'next/router';

const Navbar = () => {


    const [apiData, setApiData] = useState([])
    const [value, setValue] = useState("")
    const [suggestion, setSuggestion] = useState([])

    const router = useRouter()

    useEffect(() => {
        const fetchApiData = () => {
            axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=36f92e051d1f7b92dd147302b1b51f81`).then((res) => {
                setApiData(res.data.results)
            }).catch((err) => {
                console.log(err)
            })
        }
        fetchApiData()
    }, [])


    const onChnagehandeler = (e) => {
        setValue(e.target.value)

        let matches = apiData.filter((movie) => {
            const regex = RegExp(`${e.target.value}`)
            return movie.original_title.match(regex)
        })
        setSuggestion(matches)
    }

    const removeUser = () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem("token")
        }
        router.push('/')
    }

    const onSearchHandeler = () => {
        console.log(value)
    }

    const detailsHandeler = (i) => {
        setValue("")
    }

    if (typeof window !== 'undefined') {
        var token = window.localStorage.getItem("token")
    }

    return (
        <>
            <header className={style.navbar}>
                <div className={style.container}>

                    <div className={style.imgContainer}>
                        <Image src={Logo} alt="Logo" />
                    </div>

                    {token ?
                        <div className={style.userThings}>
                            <div className={style.searchBox}>
                                <input type="text"
                                    placeholder='Search movies'
                                    value={value}
                                    onChange={onChnagehandeler} />

                                <button onClick={onSearchHandeler}>
                                    <Image src={SearchIcon} alt="searchIcon" />
                                </button>

                            </div>

                            <div className={style.card}
                                style={{ zIndex: 1 }}>

                                {value.length > 0
                                    && suggestion
                                    && suggestion.map((ele, i) => {
                                        return (
                                            <Card
                                                bordered={true}
                                                key={i}
                                                onClick={() =>
                                                    detailsHandeler(ele.id)}>

                                                {ele.title}

                                            </Card>
                                        )
                                    })}
                            </div>

                            <button
                                onClick={removeUser}>
                                Logout
                            </button>

                        </div>
                        : ""}
                </div>
            </header>
        </>
    )
}

export default Navbar