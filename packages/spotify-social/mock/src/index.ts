import { setupWorker } from 'msw/browser'
import { authHandlers } from './handlers/auth'

export const worker = setupWorker(...authHandlers);

export async function setupMock() {
    await worker.start()
}