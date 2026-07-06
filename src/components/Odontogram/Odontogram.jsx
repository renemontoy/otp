import "./Odontogram.css";

const teeth = Array.from({ length: 32 });

function Odontogram() {

    return (

        <div className="odontogramCard">

            <h3>Odontograma</h3>

            <div className="legend">

                <span className="blue"></span> Caries

                <span className="green"></span> Resina

                <span className="orange"></span> Extracción

                <span className="teal"></span> Corona

            </div>

            <div className="teethGrid">

                {teeth.map((_, index) => (

                    <div className="tooth">

                        <div className="toothShape"></div>

                    </div>

                ))}

            </div>

        </div>

    )

}

export default Odontogram;