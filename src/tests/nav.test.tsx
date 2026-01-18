import {
  test,
  expect,
  describe,
} from "bun:test";
import { screen, render } from "./testing-library";
import { Nav } from "@/components/nav";
import { LINKS } from "@/constants";


describe("Nav Component", () => {
  test("renders its content", () => {
    render(
      <Nav />,
    );

    const nav = screen.queryByRole("navigation");
    const list = screen.queryByRole("list");
    const links = screen.queryAllByRole("link");

    expect(nav).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(links).not.toHaveLength(0);

    links.forEach((link, i) => {
      expect(link).toHaveAttribute("href", LINKS[i].href);
      expect(link).toHaveTextContent(LINKS[i].label);
    });
  });
});
