import React from 'react'
import { Separador } from '../Styles/styles'
import Card from './Card'

const ProductListFutbol = () => {
  return (
    <div className='productList'>
        <Separador backgroundcolor='#ACC' textcolor='#222' >
            <h2>LLEVA TU PASIÓN A TODOS LADOS 🏴‍☠️</h2>
        </Separador>
        <div className="container-card">
            <Card nameItem={'REMERA CAB H'} price={'$4430'} size={'M'}/>
            <Card nameItem={'CAMPERA CAB H'} price={'$8530'} size={'L'}/>
            <Card nameItem={'REMERA CAB M'} price={'$4230'} size={'M'}/>
        </div>
        <div className="more">
          <h3>ver mas</h3>
        </div>

        <Separador backgroundcolor='#152c4c' textcolor='#fff'>
            <h2>PINTO EL FRIO ❄️</h2>
        </Separador>
        <div className="container-card">
            <Card nameItem={'BUZO IGN H'} price={'$4430'} size={'M'}/>
            <Card nameItem={'CAMPERA IGN H'} price={'$8530'} size={'L'}/>
            <Card nameItem={'BUZO IGN M'} price={'$4230'} size={'M'}/>
        </div>
        <div className="more">
          <h3>ver mas</h3>
        </div>

        <Separador backgroundcolor='#f8df64' textcolor='#222'>
            <h2>EL VERANO 🌞</h2>
        </Separador>
        <div className="container-card">
            <Card nameItem={'REMERA IGN H'} price={'$4430'} size={'M'}/>
            <Card nameItem={'SHORT IGN H'} price={'$8530'} size={'L'}/>
            <Card nameItem={'REMERA IGN M'} price={'$4230'} size={'M'}/>
        </div>
        <div className="more">
          <h3>ver mas</h3>
        </div>
    </div>
  )
}

export default ProductListFutbol