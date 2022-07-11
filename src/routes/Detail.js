import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import propTypes from "prop-types";
import styled from "../css/detail.module.css"

function Detail() {
      const { id } = useParams();
      const [db, setDb] = useState();
      const getMovie = async () => {
            const json = await (
                  await (
                        fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
                  )
            ).json();
            // console.log(json.data);
            setDb(json.data);
      }
      console.log(db);


      useEffect(() => {
            getMovie();
      }, [])
      return (
            <div className={styled.motherDiv}>
                  <div className={styled.covImg}>
                        <img
                              className={styled.imgSize}
                              src={db ? db.movie.large_cover_image : undefined}
                        />
                        <div>
                              <div className={styled.title}>{db ? <h1 className={styled.h1Title}>{db.movie.title}</h1> : undefined}</div>
                              <div>{db ? <li className={styled.genre}>{db.movie.genres}</li> : undefined}</div>
                        </div>
                  </div>
                  <div className={styled.discription}>
                        {db ? <div>
                              <h3>Discription: </h3>
                              <h3> {db.movie.description_full}</h3>
                        </div> : undefined}
                  </div>

                  {/* <h1>{db}</h1>
                  <h1>{db.title}</h1> */}
            </div>
      )
}


export default Detail;