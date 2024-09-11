import { render } from "@testing-library/react";
import GifItem from "../../src/components/GifItem";

describe("Pruebas en <GiftItem />", () => {
  test("debe de hacer match con el snapshot", () => {
    render(<GifItem />);
  });
});
