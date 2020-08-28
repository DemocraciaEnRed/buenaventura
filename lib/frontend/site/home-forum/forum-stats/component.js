import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isFetching: true,
      totalWithOfficialReply: 0,
      totalComments: 0,
      uniqueParticipants: 0,
      error: null,
    }
  }

  componentDidMount() {
    this.fetchStats()
  }

  fetchStats() {
    fetch(`/ext/api/stats/forum/${this.props.forum.name}`, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.ok && res.json())
      .then(stats => {
        this.setState({
          isFetching: false,
          totalWithOfficialReply: stats.totalWithOfficialReply,
          totalComments: stats.totalComments,
          uniqueParticipants: stats.uniqueParticipants
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({ 
        isFetching: false,
        error: 'Error al obtener las estadísticas'
        })
      })
  }

  render() {
    return (
      <div className="forum-description-stats forum-description">
        <div className="container">
          <div className="row">
          <div className="col-md-8 offset-md-2">
            <div className="row">
              <div className="col-xs-12 text-center">
                <h3>Datos de esta comunidad activa</h3>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 stat-container">
                {
                  this.state.isFetching ? 
                  <div className="spinning-loader"></div>
                  : <div className="stat-value"><span>{this.state.totalComments}</span></div>
                }
                <div className="stat-title">Comentarios<br />hechos</div>
              </div>
              <div className="col-md-4 stat-container">
                {
                  this.state.isFetching ? 
                  <div className="spinning-loader"></div>
                  : <div className="stat-value"><span>{Math.ceil((this.state.totalWithOfficialReply/(this.state.totalComments || 1))*100)}%</span></div>
                }
                <div className="stat-title">Comentarios<br />respondidos</div>
              </div>
              <div className="col-md-4 stat-container">
                {
                  this.state.isFetching ? 
                  <div className="spinning-loader"></div>
                  : <div className="stat-value"><span>{this.state.uniqueParticipants}</span></div>
                }
                <div className="stat-title">Participantes<br />que comentaron</div>
              </div>
            </div>
            {
              this.state.error && !this.state.isFetching &&
              <div className="alert alert-danger text-center">
                {this.state.error || 'Error al obtener las estadísticas'}
              </div>
            }
          </div>
        </div>
        </div>
      </div>
    )
  }
}