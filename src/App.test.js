import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import userEvent from "@testing-library/user-event";
import App from "./App";

jest.mock("./api/fetchShow");

const showData = {
  data : {
    name : "Stranger Things",

    image : {
      original : "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"
    },
    summary : "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    _embedded : {
      episodes : [
        {
          id : 1576475,
          url : "http://www.tvmaze.com/episodes/1576475/stranger-things-3x07-chapter-seven-the-bite",
          name : "Chapter Seven: The Bite",
          season : 3,
          number : 7,
          airdate : "2019-07-04",
          airtime : "",
          airstamp : "2019-07-04T12:00:00+00:00",
          runtime : 55,
          image : {
            medium : "http://static.tvmaze.com/uploads/images/medium_landscape/204/511708.jpg",
            original : "http://static.tvmaze.com/uploads/images/original_untouched/204/511708.jpg"
          },
          summary : "<p>El and the others defend themselves as the Flayer tracks them down. The Scoop Group escape the Russian base and hide in a movie theater, but the Russians close in on them.</p>",
          _links : {
            self : {
              href : "http://api.tvmaze.com/episodes/1576475"
            }
          }
        },
        {
          id : 1576476,
          url : "http://www.tvmaze.com/episodes/1576476/stranger-things-3x08-chapter-eight-the-battle-of-starcourt",
          name : "Chapter Eight: The Battle of Starcourt",
          season : 3,
          number : 8,
          airdate : "2019-07-04",
          airtime : "",
          airstamp : "2019-07-04T12:00:00+00:00",
          runtime : 78,
          image : {
            medium : "http://static.tvmaze.com/uploads/images/medium_landscape/204/510105.jpg",
            original : "http://static.tvmaze.com/uploads/images/original_untouched/204/510105.jpg"
          },
          summary : "<p>The Flayer comes to the mall to get El, and Dustin contacts Suzie to provide Jim and Joyce with needed information. El reminds Billy of his past, and Jim and Joyce have an argument about not arguing.</p>",
          _links : {
            self : {
              href : "http://api.tvmaze.com/episodes/1576476"
            }
          }
        }
      ]
    }
  }
};

test("renders without errors", () => {
  mockFetchShow.mockResolvedValueOnce(showData);
  render(<App />);
});

test("renders data after API is called", async () => {
  mockFetchShow.mockResolvedValueOnce(showData);

  const { getByText, queryAllByTestId } = render(<App />);

  await waitFor(() => expect(getByText(/select a season/i)).toBeInTheDocument());
  userEvent.click(getByText(/select a season/i));

  expect(getByText(/season 3/i)).toBeInTheDocument();
  userEvent.click(getByText(/season 3/i));
  expect(queryAllByTestId(/episodes/i)).toHaveLength(2);
});
