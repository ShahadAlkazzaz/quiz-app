import React from 'react'
import { useNavigate } from 'react-router-dom'

const StartPage = () => {
    const navigate = useNavigate()

    return (
        <div className="relative flex flex-col items-center justify-center h-screen bg-gradient-dark px-4 text-center">
            {/* Bakgrundsanimering */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute w-48 h-48 bg-accent opacity-20 rounded-full top-[10%] left-[15%] animate-float"></div>
                <div className="absolute w-64 h-64 bg-secondary opacity-10 rounded-full top-[60%] right-[10%] animate-float"></div>
            </div>

            <h1 className="text-5xl font-bold text-accent mb-6 drop-shadow-lg">
                Välkommen till Quiz-appen
            </h1>
            <p className="text-lg text-secondary font-semibold mb-6 drop-shadow-sm">
                Testa din kunskap med vårt spännande quiz! Klicka på knappen
                nedan för att börja.
            </p>

            <button
                className="bg-accent text-black font-semibold py-3 px-6 rounded-full hover:bg-secondary hover:scale-110 transition-transform duration-300 shadow-md "
                onClick={() => navigate('/quiz')}
            >
                Börja Quiz
            </button>
        </div>
    )
}

export default StartPage
