import { http, HttpResponse } from 'msw';

export const userHandlers = [
    http.post('/api/trpc/users.getUser', () => {
        return HttpResponse.json({
            result: {
                data: {
                    id: '1',
                    name: 'Test User',
                    email: 'test@example.com'
                }
            }
        })
    })
]