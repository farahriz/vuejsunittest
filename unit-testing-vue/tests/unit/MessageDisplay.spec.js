import MessageDisplay from '@/components/MessageDisplay'
import {
  mount
} from '@vue/test-utils'
import {
  getMessage
} from '@/services/axios'
import flushPromises from 'flush-promises'

jest.mock('@/services/axios')

describe('MessageDisplay', () => {
  it('Calls getMessage once and displays message', async () => {
    const mockMessage = 'Hello from the db'
    getMessage.mockResolvedValueOnce({
      text: mockMessage
    })
    const wrapper = mount(MessageDisplay)

    await flushPromises()
    // check that call happened once
    // check that component displays message
  })
})