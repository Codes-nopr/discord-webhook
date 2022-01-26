// @ts-ignore: node-fetch types
import fetch from "node-fetch";
import DAPI from "./constants";

export default async function editWebhook(
    appToken: string,
    webhookID: string,
    webhookToken: string,
    userName: string,
    avatarURL?: string,
    ): Promise<any> {
    return fetch(`${DAPI}/webhooks/${webhookID}/${webhookToken}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bot ${appToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: userName,
            avatar: avatarURL,
        }),
    })
    .then((r: any) => r.json());
}
