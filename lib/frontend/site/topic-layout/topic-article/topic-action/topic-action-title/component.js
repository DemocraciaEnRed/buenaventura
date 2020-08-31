import React from 'react'

const TopicActionTitle = ({action}) => {
    const content = {
        vote: {
          title: 'Voto',
          description: 'Esta acción te permite votar por las propuestas presentadas: Afirmativo, Negativo y Abstención. ¡Es aquí donde puedes mostrar tu postura como ciudadano/a!'
        },
        cause: {
          title: 'Causa',
          description: 'Por medio de esta acción, puedes demostrar tu apoyo ante una propuesta. Reuniremos los apoyos de la mayor cantidad de personas para mostrar que es un tema importante para Buenaventura.'
        },
        poll: {
          title: 'Encuesta',
          description: 'En las encuestas podrás votar por diferentes opciones dando  respuesta a una pregunta específica. Así podremos conocer mejor la opinión de todos y todas.'
        },
    }
    return (
        <div className='topic-action-title'>
            <div className="image-column">
                <div className="icon-wrapper">
                    <img src={`/lib/frontend/site/home-multiforum/icon-${action}.svg`} />
                </div>
            </div>
                <div className="text-column">
                <h5>{content[action].title}</h5>
                <p>{content[action].description}</p>
            </div>
        </div>
    )
}

export default TopicActionTitle

