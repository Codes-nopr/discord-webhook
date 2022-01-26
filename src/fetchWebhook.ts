// @ts-ignore: node-fetch types
import fetch from "node-fetch";
import DAPI from "./constants";

export default async function fetchWebhooks(
    appToken: string,
    webhookID: string,
    webhookToken: string,
    ): Promise<any> {
    return fetch(`${DAPI}/webhooks/${webhookID}/${webhookToken}`, {
        method: "GET",
        headers: {
            Authorization: `Bot ${appToken}`,
            "Content-Type": "application/json",
        },
    })
    .then((r: any) => r.json());
}
