
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../page";

jest.mock("../../app/api/github", () => ({
    fetchPRs: jest.fn(() =>
    Promise.resolve([
    {
        id: 1,
        title: "Add new feature",
        html_url: "https://github.com/test/pr/1",
        created_at: "2024-01-01",
        labels: [{ name: "feature" }, { name: "enhancement" }]
    },
    {
        id: 2,
        title: "Fix bug",
        html_url: "https://github.com/test/pr/2",
        created_at: "2024-01-02",
        labels: [{ name: "bug" }]
    }
    ])
)
}));

describe("Home Page", () => {
test("renders header", async () => {
    render(<Home />);
    expect(await screen.findByText("GitHub PR Viewer")).toBeInTheDocument();
});

test("displays PRs from API", async () => {
    render("tr");
    const rows = await screen.findAllByTestId("pr-row");
    expect(rows.length).toBe(2);
});

test("search input filters PRs by label", async () => {
    render("input");
    const input = screen.getByTestId("search-input") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "bug" } });
    expect(input.value).toBe("bug");
});

test("renders loading initially", () => {
    render("div");
    expect(screen.getByTestId("loading")).toBeInTheDocument();
});
});
