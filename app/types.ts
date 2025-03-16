
export interface Label {
    id: number;
    name: string;
}

// export interface PullRequest {
//     id: number;
//     title: string;
//     html_url: string;
//     created_at: string;
//     labels: Label[];
// }


export interface PRRequest {
    id: number;
    title: string;
    html_url: string;
    created_at: string;
    labels: Label[];
}

