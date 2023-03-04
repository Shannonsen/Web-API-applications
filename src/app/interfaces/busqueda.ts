export interface Busqueda {
  "total_count": number,
    "incomplete_results": boolean,
    "items": Array<
        {
        "id": number,
        "node_id": string,
        "name": string,
        "full_name": string,
        "private": boolean,
        "owner": {
            "login": string,
            "avatar_url": string
        },
        "html_url": string,
        "description": string,
        "fork": boolean,
        "url": string,
        "created_at": string
        }
    >
}
