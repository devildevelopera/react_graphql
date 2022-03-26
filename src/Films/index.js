import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_FILMS_FOR_DIRECTOR_QUERY = gql`
  query ($directorName: String!) {
    filmsByDirectorName(directorName: $directorName) {
      name
      length
      rating
      releaseDate
      directorName
    }
  }
`;

export default class Films extends Component {
  render() {
    return (
      <Query
        query={GET_FILMS_FOR_DIRECTOR_QUERY}
        variables={{ directorName: "Christopher Nolan" }}
      >
        {({ data, loading }) => {
          const { filmsByDirectorName } = data;

          if (loading || !filmsByDirectorName) {
            return <div className="loader">Loading ...</div>;
          }

          console.log(data);

          return (
            <div className="stats-boxes">
              {filmsByDirectorName.map((item, index) => (
                <div key={index}>{item.name}</div>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}
