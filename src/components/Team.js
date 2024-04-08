import React, { useState } from 'react';

function Team(){

    // Estado para controlar si se muestra el div con los huecos del equipo
    const [showTeamDiv, setShowTeamDiv] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    // Función para manejar el clic en el botón "Create a team"
    const handleCreateTeamClick = () => {
        setShowTeamDiv(true);
        setButtonClicked(true);
    };

    const handleDissolveTeamClick = () => {
        setShowTeamDiv(false);
        setButtonClicked(false);
    };

    // Supongamos que tienes una lista de equipos existentes
    const existingTeams = [
        { id: 1, name: 'Team A', members: ['Player 1', 'Player 2', 'Player 3'], vacancies: 2 },
        { id: 2, name: 'Team B', members: ['Player 4', 'Player 5'], vacancies: 3 },
        // Más equipos...
    ];

    return(
        <div className='teams-container'>

            <div className='own-team'>
                {/* Botón para crear un equipo */}
                {!buttonClicked && (
                    <div className='create-team'>
                    <button onClick={handleCreateTeamClick}>Create your own team</button>
                    </div>
                )}

                {/* Div con los huecos del equipo (se mostrará si showTeamDiv es true) */}
                {showTeamDiv && (
                    <div className='team-div'>
                    <p>Team name: XXXXXX</p>

                    <ul>
                        <li>Tu nombre (ocupado)</li>
                        <li>Hueco 2</li>
                        <li>Hueco 3</li>
                        <li>Hueco 4</li>
                        <li>Hueco 5</li>
                    </ul>
                    
                    <button onClick={handleDissolveTeamClick}>Dissolve team</button>
                    </div>
                )}
            </div>


            <p>Or...</p>
            <p>Join an existing team:</p>

            <div className='existing-team'>
                {/* Renderizar hasta 5 equipos existentes */}
                {existingTeams.slice(0, 5).map(team => (
                    <div key={team.id} className='existing-team-item'>
                        <p>{team.name}</p>
                        <p>Vacancies: {team.vacancies}</p>
                        <button>Join team</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Team;