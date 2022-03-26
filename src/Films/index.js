import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import "./style.css";

const GET_FILMS_FOR_DIRECTOR_QUERY = gql`
    //TODO Implement query
  `;

export default class Films extends Component {
  //TODO Retrieve the director name passed to this component after clicking the Submit button.

  render() {
    return (
      <Query
        query={GET_FILMS_FOR_DIRECTOR_QUERY}
        variables={{ directorName: directorName }}
      >
        {({ data, loading }) => {
          const { filmsByDirectorName } = data;

          if (loading || !filmsByDirectorName) {
            return <div className="loader">Loading ...</div>;
          }

          return (
            <div className="stats-boxes">
              <div className="stats-box-row-1">
                <div className="stats-box">
                  <div className="stats-box-heading">Best rated film</div>
                  <div id="best-rated-film" className="stats-box-info">
                    {this.getBestRatedFilm(filmsByDirectorName)}
                  </div>
                </div>
                <div className="stats-box-right stats-box">
                  <div className="stats-box-heading">Longest film duration</div>
                  <div id="longest-film" className="stats-box-info">
                    {this.getLongestFilm(filmsByDirectorName)}
                  </div>
                </div>
              </div>
              <div>
                <div className="stats-box">
                  <div className="stats-box-heading">Average rating</div>
                  <div id="average-rating" className="stats-box-info">
                    {this.getAverageRating(filmsByDirectorName)}
                  </div>
                </div>
                <div className="stats-box-right stats-box">
                  <div className="stats-box-heading">
                    Shortest days between releases
                  </div>
                  <div id="shortest-days" className="stats-box-info">
                    {this.getShortestNumberOfDaysBetweenFilmReleases(
                      filmsByDirectorName
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }

  /**
   * Retrieves the name of the best rated film from the given list of films.
   * If the given list is empty, this method should return "N/A".
   * Note there will only be one film with the best rating.
   */
  getBestRatedFilm(films) {
    //TODO Implement
  }

  /**
   * Retrieves the length of the film which has the longest running time from the given list of films.
   * If the given list of films is empty, this method should return "N/A".
   *
   * The return value from this function should be in the form "{length} mins"
   * For example, if the duration of the longest film is 120, this function should return "120 mins".
   */
  getLongestFilm(films) {
    //TODO Implement
  }

  /**
   * Retrieves the average rating of the films in the given list of films, rounded to 1 decimal place.
   * If the given list of films is empty, this method should return 0.
   */
  getAverageRating(films) {
    //TODO Implement
  }

  /**
   * Retrieves the shortest number of days between any two film releases in the given list of films.
   *
   * If the given list of films is empty, this method should return "N/A".
   * If there is only one film in the given list, this method should return 0.
   * Note that no director released more than one film on any given day.
   *
   * For example, if the given list of films is composed of the following 3 entries
   *
   * {
   *    "name": "Batman Begins",
   *    "length": 140,
   *
   *    "rating": 8.2,
   *    "releaseDate": "2006-06-16",
   *    "directorName": "Christopher Nolan"
   * },
   * {
   *    "name": "Interstellar",
   *    "length": 169,
   *    "rating": 8.6,
   *    "releaseDate": "2014-11-07",
   *    "directorName": "Christopher Nolan"
   * },
   * {
   *   "name": "Prestige",
   *   "length": 130,
   *   "rating": 8.5,
   *   "releaseDate": "2006-11-10",
   *   "directorName": "Christopher Nolan"
   * }
   *
   * then this method should return 147, as Prestige was released 147 days after Batman Begins.
   */
  getShortestNumberOfDaysBetweenFilmReleases(films) {
    //TODO Implement
  }
}