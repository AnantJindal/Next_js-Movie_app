import React from 'react'
import style from "./Loader.module.css"
import LoadingG from '../../assests/loading.webp'
import Image from 'next/image'

const Loader = () => {
    return (
        <>
            <div className={style.div}>
                <Image src={LoadingG} alt="Loading" />
                </div>
        </>
    )
}

export default Loader