import React from 'react'
import Style from './LoaderSharingan.module.css'

const LoaderSharingan = () => {
  return (
    <div className={Style.container}>
        <div className={Style.sharingan}>
            <div className={Style.ring}>
                <div className={Style.tomoe}></div>
                <div className={Style.tomoe}></div>
                <div className={Style.tomoe}></div>
                <div className={Style.circle}></div>
                <div className={Style.circle}></div>
            </div>
        </div>
        <span className={Style.loadingText}>Loading</span>
    </div>
  )
}

export default LoaderSharingan;