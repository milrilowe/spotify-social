import { http, HttpResponse } from 'msw';
import type { MockUserResponse } from '../types'

const mockUserData: MockUserResponse = {
    id: '1',
    display_name: 'Test User',
    email: 'test@example.com',
    images: [{
        url: 'https://example.com/avatar.jpg',
        height: 640,
        width: 640
    }],
    country: 'US',
}

export const userHandlers = [
    http.post('/api/trpc/users.getUser', () => {
        return HttpResponse.json({
            result: {
                data: mockUserData
            }
        })
    })
]