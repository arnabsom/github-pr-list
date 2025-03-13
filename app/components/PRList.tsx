import { PullRequest } from "../types";

interface PRListProps {
    pullRequests: PullRequest[];
}

export default function PRList({ pullRequests }: PRListProps) {
    return (
    <ul className="space-y-4">
    {pullRequests.map((pr) => (
        <li key={pr.id} className="border p-4 rounded shadow">
        <a href={pr.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold">
            {pr.title}
        </a>
        <p className="text-gray-600">Opened on {new Date(pr.created_at).toLocaleDateString()}</p>
        <div className="mt-2">
            {pr.labels.map((label) => (
        <span key={label.id} className="px-2 py-1 text-sm bg-gray-200 rounded mr-2">
                {label.name}
        </span>
            ))}
        </div>
        </li>
    ))}
    </ul>
);
}
