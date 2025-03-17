'use client';
import React, { useEffect, useState } from 'react';
import { fetchPRs } from './api/github';
import { Label, PRRequest } from './types';


export default function Home() {
  const [prrequests, setPullRequests] = useState<PRRequest[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    fetchPRs()
      .then((data) => {
        if (data.length > 0) {
          const prData: PRRequest[] = data.map((pr: PRRequest) => ({
            id: pr.id,
            title: pr.title,
            html_url: pr.html_url,
            created_at: pr.created_at,
            labels: pr.labels.map((l: Label) => l.name),
          }));
          setPullRequests(prData);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleSearch = () => {
    // Optionally apply additional search logic here

  };

  const filteredPRs = searchText
    ? prrequests.filter((pr) =>
        pr.labels.some((label:string) => label.toLowerCase().includes(searchText.toLowerCase()))
      )
    : prrequests;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub PR Viewer</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between items-center">
        <input
          type="text"
          placeholder="Search by Label..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full sm:w-1/2 p-2 border rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-blue-400"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-center text-gray-600">Loading PRs...</p>}
      {error && <p className="text-center text-red-500">Error: {error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-left border rounded-xl overflow-hidden">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2">ID</th>
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Labels</th>
            </tr>
          </thead>
          <tbody>
            {filteredPRs.map((pr) => (
              <tr key={pr.id} className="border-t hover:bg-gray-50">
                <td className="px-4 py-2">{pr.id}</td>
                <td className="px-4 py-2 text-blue-600 hover:underline">
                  <a href={pr.html_url} target="_blank" rel="noopener noreferrer">{pr.title}</a>
                </td>
                <td className="px-4 py-2">
                  {pr.labels.map((label, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full"
                      data-testid="label-pill"
                    >
                      {label}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
            {filteredPRs.length === 0 && !loading && (
              <tr>
                <td colSpan={3} className="text-center px-4 py-4 text-gray-500">
                  No PRs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
