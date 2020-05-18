import React from "react";
import { render, waitFor } from "@testing-library/react";
import { fetchShow as mockFetchShow } from "./api/fetchShow";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders without errors", () => {
  render(<App />);
});
