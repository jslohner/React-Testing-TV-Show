import React from "react";
import { render, waitFor } from "@testing-library/react";
import Episodes from "./Episodes";

const episodeData = [
  {
    id : 1576475,
    url : 'http://www.tvmaze.com/episodes/1576475/stranger-things-3x07-chapter-seven-the-bite',
    name : 'Chapter Seven: The Bite',
    season : 3,
    number : 7,
    airdate : '2019-07-04',
    airtime : '',
    airstamp : '2019-07-04T12:00:00+00:00',
    runtime : 55,
    image : {
      medium : 'http://static.tvmaze.com/uploads/images/medium_landscape/204/511708.jpg',
      original : 'http://static.tvmaze.com/uploads/images/original_untouched/204/511708.jpg'
    },
    summary : '<p>El and the others defend themselves as the Flayer tracks them down. The Scoop Group escape the Russian base and hide in a movie theater, but the Russians close in on them.</p>',
    _links : {
      self : {
        href : 'http://api.tvmaze.com/episodes/1576475'
      }
    }
  },
  {
    id : 1576476,
    url : 'http://www.tvmaze.com/episodes/1576476/stranger-things-3x08-chapter-eight-the-battle-of-starcourt',
    name : 'Chapter Eight: The Battle of Starcourt',
    season : 3,
    number : 8,
    airdate : '2019-07-04',
    airtime : '',
    airstamp : '2019-07-04T12:00:00+00:00',
    runtime : 78,
    image : {
      medium : 'http://static.tvmaze.com/uploads/images/medium_landscape/204/510105.jpg',
      original : 'http://static.tvmaze.com/uploads/images/original_untouched/204/510105.jpg'
    },
    summary : '<p>The Flayer comes to the mall to get El, and Dustin contacts Suzie to provide Jim and Joyce with needed information. El reminds Billy of his past, and Jim and Joyce have an argument about not arguing.</p>',
    _links : {
      self : {
        href : 'http://api.tvmaze.com/episodes/1576476'
      }
    }
  }
];

test("renders Episodes component", () => {
  render(<Episodes episodes={[]}/>);
});

test("renders episodes when data is received", () => {
  const { queryAllByTestId, rerender } = render(<Episodes episodes={[]}/>);

  expect(queryAllByTestId(/episodes/i)).toHaveLength(0);

  rerender(<Episodes episodes={episodeData}/>);

  expect(queryAllByTestId(/episodes/i)).toHaveLength(2);
});
