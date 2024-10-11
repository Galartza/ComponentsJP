import React from 'react'
import Style from './Mangekyou.module.css'

const Mangekyou = () => {
  return (
    <div className={Style.container}>
    <div className={Style.sharingan}>
        <div className={Style.ring}>
            <div className={Style.tomoe}></div>
            <div className={Style.tomoe}></div>
            <div className={Style.tomoe}></div>
            <div className={Style.circle}></div>
        </div>
    </div>

</div>
  )
}

export default Mangekyou;