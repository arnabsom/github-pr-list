import { PullRequest } from "../types";

export async function fetchPRs(): Promise<PullRequest[]> {
    const response = await fetch("https://api.github.com/repos/divvydose/ui-coding-challenge/pulls");
    if (!response.ok) {
    throw new Error("Failed to fetch pull requests");
    }
    return response.json();
}

