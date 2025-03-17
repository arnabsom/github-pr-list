
export interface Label {
    name: string;
}


export interface PRRequest {
    id: number;
    title: string;
    html_url: string;
    created_at: string;
    labels: string[];
}
