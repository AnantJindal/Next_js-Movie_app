import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Wallpaper from '../../components/Wallpaper/Wallpaper'
import style from './Home.module.css'
import { Col, Row, } from 'antd';
import Loader from '../../components/Loader/Loader'
import Pagenation from '../../components/Pagenation/Pagenation'
import Navbar from '../../components/Header/Header'

const Home = () => {
    const [apidata, setApiData] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)

    const getApidata = () => {
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=36f92e051d1f7b92dd147302b1b51f81&page=${page}`)
            .then(res => {
                setApiData(res.data.results)
                setLoading(false)
            }).catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    useEffect(() => {
        setLoading(true)
        getApidata()
    }, [page])

    const nextPage = () => {
        setPage(page + 1)
    }

    const prevPage = () => {
        setPage(page - 1)
    }

    const pageNumber = (i) => {
        setPage(i)
    }

    return (
        <>
            <Navbar />
            <div className={style.home}>
                <Wallpaper />
                <div className={style.data}>
                    <h1
                        className={style.heading}>
                        Trending
                    </h1>

                    {
                        loading ? <Loader /> : ""
                    }
                    <Row gutter={[16, 24]}>
                        {
                            apidata.map((ele, i) => {
                                return (
                                    <Col span={6} key={i} >
                                        <Card ele={ele} i={i} />
                                    </Col>
                                )
                            })
                        }
                    </Row>

                    <Pagenation
                        pageNumber={page}
                        goToCurrentPage={pageNumber}
                        nextPage={nextPage}
                        prevPage={prevPage}
                        page={page} />
                </div>
            </div>
        </>
    )
}

export default Home