// @ts-ignore: node-fetch types
import fetch from "node-fetch";
import DAPI from "./constants";

export default async function deleteWebhook(
    webhookID: string,
    webhookToken: string,
    ): Promise<any> {
    return fetch(`${DAPI}/webhooks/${webhookID}/${webhookToken}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((r: any) => r.json());
}
