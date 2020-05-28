import React from 'react'
import { Link } from 'react-router'
import urlBuilder from 'lib/backend/url-builder'


class Comunidades extends React.Component {
  constructor (props) {
    super(props) 

    this.state = {
      page: 0,
      activeFilter: 'byDate',
      forums: []
    }
  }
  render () {
    // const {} = this.state
    return (
      <div className='container' id="comunidades">
        <div className='row'>
          <div className='col-lg-12'>
            <h1 className='text-center'>Comunidades activas</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse a sodales nulla, sed semper nisi. Cras lobortis volutpat nunc. Proin tincidunt enim in felis aliquet, a ultricies purus bibendum. Quisque in ultrices lectus. Nulla at urna diam.</p>
            </div>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <div className="block-button" onClick="holis">A</div>
          </div>
          <div className="col-lg-3">
            <div className="block-button selected" onClick="holis">A</div>
          </div>
          <div className="col-lg-3">
            <div className="block-button" onClick="holis">A</div>
          </div>
          <div className="col-lg-3">
            <div className="block-button" onClick="holis">A</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comunidades
