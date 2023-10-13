import React, { useState } from 'react';

function Preguntas() {
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedEntre, setSelectedEntre] = useState(null);
  const [selectedGeo, setSelectedGeo] = useState(null);
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [selectedBio, setSelectedBio] = useState(null);

  const correctAnswerAuthor = "Gabriel García Márquez";
  const correctAnswerWork = "40 minutes";
  const correctAnswerEntre = "1977";
  const correctAnswerGeo = "The Atlantic";
  const correctAnswerMusic = "Elvis Presley";
  const correctAnswerBio = "Jellyfish";

  const handleAuthorChange = (event) => {
    if (!selectedAuthor) {
      setSelectedAuthor(event.target.value);
    }
  }

  const handleWorkChange = (event) => {
    if (!selectedWork) {
      setSelectedWork(event.target.value);
    }
  }

  const handleEntreChange = (event) => {
    if (!selectedEntre) {
      setSelectedEntre(event.target.value);
    }
  }

  const handleGeoChange = (event) => {
    if (!selectedGeo) {
      setSelectedGeo(event.target.value);
    }
  }

  const handleMusicChange = (event) => {
    if (!selectedMusic) {
      setSelectedMusic(event.target.value);
    }
  }

  const handleBioChange = (event) => {
    if (!selectedBio) {
      setSelectedBio(event.target.value);
    }
  }

  const isCorrectAuthor = selectedAuthor === correctAnswerAuthor;
  const isCorrectWork = selectedWork === correctAnswerWork;
  const isCorrectEntre = selectedEntre === correctAnswerEntre;
  const isCorrectGeo = selectedGeo === correctAnswerGeo;
  const isCorrectMusic = selectedMusic === correctAnswerMusic;
  const isCorrectBio = selectedBio === correctAnswerBio;


  return (
    <div className="question" style={{ backgroundColor: "black", color: "white" }}>
      <div className="flex flex-col py-10 place-items-center justify-center">
      <img
                    src='logoBC.png'
                    style={{
                    margin: '10px',
                    width: '300px',
                    height: '200px',
                    }}/>
      </div>
      <div>
        <p>Who wrote "One Hundred Years of Solitude"?</p>
        <form>
          <div>
            <input
              type="radio"
              name="author"
              value="Gabriel García Márquez"
              checked={selectedAuthor === "Gabriel García Márquez"}
              onChange={handleAuthorChange}
              disabled={selectedAuthor !== null}
            />
            <label>Gabriel García Márquez</label>
          </div>

          <div>
            <input
              type="radio"
              name="author"
              value="Leonardo Sabatella"
              checked={selectedAuthor === "Leonardo Sabatella"}
              onChange={handleAuthorChange}
              disabled={selectedAuthor !== null}
            />
            <label>Leonardo Sabatella</label>
          </div>

          <div>
            <input
              type="radio"
              name="author"
              value="Guillermo Fadelli"
              checked={selectedAuthor === "Guillermo Fadelli"}
              onChange={handleAuthorChange}
              disabled={selectedAuthor !== null}
            />
            <label>Guillermo Fadelli</label>
          </div>
        </form>
        <p>Your answer for the first question is {isCorrectAuthor ? "correct" : "incorrect"}.</p>
      </div>
      <br />

      <div>
        <p>How long does a European basketball game last? </p>
        <form>
          <div>
            <input
              type="radio"
              name="work"
              value="40 minutes"
              checked={selectedWork === "40 minutes"}
              onChange={handleWorkChange}
              disabled={selectedWork !== null}
            />
            <label>40 minutes</label>
          </div>

          <div>
            <input
              type="radio"
              name="work"
              value="50 minutos"
              checked={selectedWork === "50 minutos"}
              onChange={handleWorkChange}
              disabled={selectedWork !== null}
            />
            <label>50 minutos</label>
          </div>

          <div>
            <input
              type="radio"
              name="work"
              value="45 minutes"
              checked={selectedWork === "45 minutes"}
              onChange={handleWorkChange}
              disabled={selectedWork !== null}
            />
            <label>45 minutes</label>
          </div>
        </form>
        <p>Your answer for the second question is {isCorrectWork ? "correct" : "incorrect"}.</p>
      </div>
      <br />

      <div>
        <p>In what year did Star Wars premiere? </p>
        <form>
          <div>
            <input
              type="radio"
              name="entre"
              value="1995"
              checked={selectedEntre === "1995"}
              onChange={handleEntreChange}
              disabled={selectedEntre !== null}
            />
            <label>1995</label>
          </div>

          <div>
            <input
              type="radio"
              name="entre"
              value="1977"
              checked={selectedEntre === "1977"}
              onChange={handleEntreChange}
              disabled={selectedEntre !== null}
            />
            <label>1977</label>
          </div>

          <div>
            <input
              type="radio"
              name="entre"
              value="1995"
              checked={selectedEntre === "1995"}
              onChange={handleEntreChange}
              disabled={selectedEntre !== null}
            />
            <label>1983</label>
          </div>
        </form>
        <p>Your answer for the second question is {isCorrectEntre ? "correct" : "incorrect"}.</p>
      </div>
      <br />

      <div>
        <p>What ocean does the Amazon River flow into? </p>
        <form>
          <div>
            <input
              type="radio"
              name="geo"
              value="The Indian"
              checked={selectedGeo === "The Indian"}
              onChange={handleGeoChange}
              disabled={selectedGeo !== null}
            />
            <label>The Indian</label>
          </div>

          <div>
            <input
              type="radio"
              name="geo"
              value="The Pacific"
              checked={selectedGeo === "The Pacific"}
              onChange={handleGeoChange}
              disabled={selectedGeo !== null}
            />
            <label>The Pacific</label>
          </div>

          <div>
            <input
              type="radio"
              name="geo"
              value="The Atlantic"
              checked={selectedGeo === "The Atlantic"}
              onChange={handleGeoChange}
              disabled={selectedGeo !== null}
            />
            <label>The Atlantic</label>
          </div>
        </form>
        <p>Your answer for the second question is {isCorrectGeo ? "correct" : "incorrect"}.</p>
      </div>
      <br />

      <div>
        <p>Who is considered the King of Rock? </p>
        <form>
          <div>
            <input
              type="radio"
              name="music"
              value="Elvis Presley"
              checked={selectedMusic === "Elvis Presley"}
              onChange={handleMusicChange}
              disabled={selectedMusic !== null}
            />
            <label>Elvis Presley</label>
          </div>

          <div>
            <input
              type="radio"
              name="music"
              value="Michael Jackson"
              checked={selectedMusic === "Michael Jackson"}
              onChange={handleMusicChange}
              disabled={selectedMusic !== null}
            />
            <label>Michael Jackson</label>
          </div>

          <div>
            <input
              type="radio"
              name="music"
              value="Freddie Mercury"
              checked={selectedMusic === "Freddie Mercury"}
              onChange={handleMusicChange}
              disabled={selectedMusic !== null}
            />
            <label>Freddie Mercury</label>
          </div>
        </form>
        <p>Your answer for the second question is {isCorrectMusic ? "correct" : "incorrect"}.</p>
      </div>
      <br />

      <div>
        <p>What is the most poisonous animal in the world? </p>
        <form>
          <div>
            <input
              type="radio"
              name="bio"
              value="Snake"
              checked={selectedBio === "Snake"}
              onChange={handleBioChange}
              disabled={selectedBio !== null}
            />
            <label>Snake</label>
          </div>

          <div>
            <input
              type="radio"
              name="bio"
              value="Scorpion"
              checked={selectedBio === "Scorpion"}
              onChange={handleBioChange}
              disabled={selectedBio !== null}
            />
            <label>Scorpion</label>
          </div>

          <div>
            <input
              type="radio"
              name="bio"
              value="Jellyfish"
              checked={selectedBio === "Jellyfish"}
              onChange={handleBioChange}
              disabled={selectedBio !== null}
            />
            <label>Jellyfish</label>
          </div>
        </form>
        <p>Your answer for the second question is {isCorrectBio ? "correct" : "incorrect"}.</p>
      </div>
      <button className="btn btn-primary btn-lg" style={{ margin: "20px",  padding: "10px 20px", fontFamily: "Arial", backgroundColor: "blue", color: "white" }}>Terminar juego</button>
    </div>
  );
}

export default Preguntas;