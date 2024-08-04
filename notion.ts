import { Client} from '@notionhq/client'

const auth = process.env.NOTION_AUTH;
const notion = new Client({
    auth: auth
});
export const useNotion = () => {
    return notion;
}