import React from 'react'
import { generateBlockClass } from '@vtex/css-handles';
import styles  from './styles.css';

const ButtonGroup = ({blockClass}:any) => {
  const containerButton = generateBlockClass(styles.containerButton, blockClass)
  const links = generateBlockClass(styles.links, blockClass)
  const buttonSigueComprando = generateBlockClass(styles.buttonSigueComprando, blockClass)

  return (
    <div className={containerButton}>
    <div>
      <a className={links} href='/'>Check Out</a>
    </div>
    <div>
      <button className={buttonSigueComprando}>Continúa Comprando</button>
      <a className={links} href='/'>Ver Carrito</a>
    </div>
    </div>
  )
}

export default ButtonGroup
