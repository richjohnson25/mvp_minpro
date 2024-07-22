import * as Yup from 'yup';

export const eventSearchSchema = Yup.object().shape({
    query: Yup.string().min(3, 'Search query must be at least 3 characters!').required('Search query is required!')
})