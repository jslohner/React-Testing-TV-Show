import React from "react";
import { render, waitFor } from "@testing-library/react";
import Episodes from "./Episodes";

test("renders Episodes without errors", () => {
  render(<Episodes episodes={[]}/>);
});
