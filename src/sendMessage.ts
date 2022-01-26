// @ts-ignore: no node-fetch types check
import fetch from "node-fetch";
import DAPI from "./constants";

export default async function sendMessage(
    webhookID: string,
    webhookToken: string,
    msg: string,
    userName?: string,
    avatarURL?: string,
    t2s?: boolean,
    addEmbeds?: any | any[],
    allowedMentions?: boolean,
    addComponents?: any | any[],
    addFile?: any | any[],
    payloadJSON?: string,
    addAttachments?: any | any[],
    ): Promise<any> {
    return fetch(`${DAPI}/webhooks/${webhookID}/${webhookToken}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            content: msg,
            username: userName,
            avatar_url: avatarURL,
            tts: t2s,
            embeds: addEmbeds,
            allowed_mentions: allowedMentions,
            components: addComponents,
            files: addFile,
            payload_json: payloadJSON,
            attachments: addAttachments,
        }),
    })
    .then((r: any) => r.json());
}
