import React from 'react'
import style from './Pagenation.module.css'
import NextIcon from '../../assests/next.svg'
import PrevIcon from '../../assests/previcon.png'
import Image from 'next/image'

const Pagenation = ({ goToCurrentPage, prevPage, nextPage, page }) => {
    const pages = [1, 2, 3, 4, 5, 6]

    return (
        <>
            <div className={style.buttons}>

                <button id={style.prev}
                    className={style.button}
                    onClick={prevPage}
                    disabled={page === 1}>

                    <Image src={PrevIcon}
                        alt="PreviousIcon" />

                </button>

                {pages.map((ele, i) => {
                    return (
                        <button
                            className={style.button}
                            key={i}
                            id={page === ele ?
                                style.active
                                : ""}
                            onClick={() =>
                                goToCurrentPage(ele)}>

                            {ele}

                        </button>
                    )
                })}

                <button id={style.next}
                    onClick={nextPage}
                    className={style.button}
                    disabled={page === 6}>

                    <Image src={NextIcon} alt="NextIcon" />

                </button>

            </div>
        </>
    )
}

export default Pagenation