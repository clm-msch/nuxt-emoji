export {};

declare global {
    type Emoji = {
        emoji: string;
        description: string;
        category: string;
        aliases: string[];
        tags: string[];
        unicode_version: string;
        ios_version: string;
    }
}