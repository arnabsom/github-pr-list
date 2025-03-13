'use client';
import React from 'react'
import { useEffect, useState } from "react";
import PRList from "./components/PRList";
import Filter from "./components/Filter";
import { fetchPRs } from "./api/github";
import { PullRequest } from "./types";

export default function Home() {
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedLabel, setSelectedLabel] = useState<string>("");

  useEffect(() => {
    fetchPRs()
      .then((data) => {
        setPullRequests(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const uniqueLabels = [
    ...new Set(pullRequests.flatMap((pr) => pr.labels.map((label) => label.name))),
  ];

  const filteredPRs = selectedLabel
    ? pullRequests.filter((pr) => pr.labels.some((label) => label.name === selectedLabel))
    : pullRequests;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub PR Viewer</h1>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      <Filter uniqueLabels={uniqueLabels} selectedLabel={selectedLabel} setSelectedLabel={setSelectedLabel} />
      <PRList pullRequests={filteredPRs} />
    </div>
  );
}
