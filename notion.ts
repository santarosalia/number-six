import { Client} from '@notionhq/client'

const notion = new Client({
    auth: 'secret_NScBJJvTyZmub9pnuX78tkyJErO8RH142EjPplD7bCG'
});
export const useNotion = () => {
    return notion;
}