// @ts-ignore: eee;
import fetch from "node-fetch";
import DAPI from "./constants";

export default async function deleteWebhook(
    appToken: string,
    webhookID: string,
    bot: boolean = true
    ): Promise<any> {
    return fetch(`${DAPI}/webhooks/${webhookID}`, {
        method: "DELETE",
        headers: {
            Authorization: `${bot ? "Bot" : ""} ${appToken}`,
            "Content-Type": "application/json",
        },
    })
    .then((r: any) => r.json());
}
