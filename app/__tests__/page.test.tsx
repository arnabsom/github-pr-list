
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../page";

jest.mock("../api/github", () => ({
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

test("renders search button", async () => {
    render(<Home />);
    expect(await screen.findByText("Search")).toBeInTheDocument();
});

test("renders Loading PR", async () => {
    render(<Home />);
    expect(await screen.findByText("Loading PRs...")).toBeInTheDocument();
});

// test("displays PRs from API", async () => {
//     render(<Home/>);
//     const rows = await screen.findAllByTestId("pr-row");
//     expect(rows.length).toBe(2);
// });

// test("search input filters PRs by label", async () => {
//     render(<Home />);
//     const input = screen.getByLabelText("search-input")
//     fireEvent.change(input, { target: { value: "bug" } });
//     expect(input.).toBe("bug");
});

//});
