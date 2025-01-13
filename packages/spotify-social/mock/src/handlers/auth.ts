import { http, HttpResponse } from 'msw'

export const authHandlers = [
    http.get('/auth/login', () => {
        return HttpResponse.json({
            "access_token": "mocked-access-token",
            "refresh_token": "mocked-refresh-token",
        })
    })
]