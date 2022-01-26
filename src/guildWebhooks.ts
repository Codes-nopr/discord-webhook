// @ts-ignore: no node-fetch types check
import fetch from "node-fetch";
import DAPI from "./constants";

export default async function getGuildWebhooks(
    appToken: string,
    guildID: string,
    bot: boolean = true,
    ): Promise<any> {
    return fetch(`${DAPI}/guilds/${guildID}/webhooks`, {
        method: "GET",
        headers: {
            Authorization: `${bot ? "Bot" : ""} ${appToken}`,
            "Content-Type": "application/json",
        },
    })
    .then((r: any) => r.json());
}
