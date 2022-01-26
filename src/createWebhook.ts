// @ts-ignore: node-fetch types
import fetch from "node-fetch";
import DAPI from "./constants";

export default async function createWebhook(
    appToken: string,
    channelID: string,
    userName: string,
    avatarURL?: string | undefined,
    bot: boolean = true,
    ): Promise<any> {
    // eslint-disable-next-line no-new
    return fetch(`${DAPI}/channels/${channelID}/webhooks`, {
        method: "POST",
        headers: {
            Authorization: `${bot ? "Bot" : ""} ${appToken}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: userName,
            avatar: avatarURL,
        }),
    })
    .then((r: any) => r.json());
}
