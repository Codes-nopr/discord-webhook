// @ts-ignore: node-fetch types
import fetch from "node-fetch";
import DAPI from "./constants";

export default async function editWebhooks(
    appToken: string,
    channelID: string,
    webhookID: string,
    userName: string,
    avatarURL?: string,
    ): Promise<any> {
    return fetch(`${DAPI}/webhooks/${webhookID}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bot ${appToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            user: userName,
            avatar: avatarURL,
            channel_id: channelID,
        }),
    })
    .then((r: any) => r.json());
}
