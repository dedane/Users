import React from 'react'
import classes from './ErrorModal.css'
import Card from '../UI/Card'

function ErrorModal(props) {
     
  return (
    <>
      <div className={classes.backdrop} onclicck={props.onClick}>
        <Card className={classes.modal}>
            <header className={classes.header}>
              <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
              <p>{props.message}</p>
            </div>
            <footer className={classes.footer}>
              <Button onClick={props.onClick}>Okay</Button>
              </footer>
        </Card>
      </div>
    </>

  )
}

export default ErrorModal