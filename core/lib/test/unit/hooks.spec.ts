import { createListenerHook, createMutatorHook, createMutatorHookAsync } from '@vue-storefront/core/lib/hooks';

describe('Hooks', () => {
  describe('createListenerHook', () => {
    it('executes functions with arguments added by hook', () => {
      const { hook, executor } = createListenerHook();
      const mockedFn = jest.fn(arg => arg)
      const mockedArgs = [1, 2, 3]

      hook(mockedFn)
      executor(mockedArgs)

      expect(mockedFn).toHaveBeenCalledWith(mockedArgs);
    })
  })

  describe('createMutatorHook', () => {
    it('executes functions added by hook', () => {
      const { hook, executor } = createMutatorHook();
      const mockedFn = jest.fn(arg => `${arg} / test`)
      const mockedRawOutput = 'abc'

      hook(mockedFn)
      hook(mockedFn)
      executor(mockedRawOutput)

      expect(mockedFn).toHaveBeenCalledWith(mockedRawOutput);
    })
  })

  describe('createMutatorHookAsync', () => {
    it('executes functions added by hook', async () => {
      const { hook, executor } = await createMutatorHookAsync();
      const mockedFn = jest.fn(arg => `${arg} / test`)
      const mockedRawOutput = 'abc'

      hook(mockedFn)
      hook(mockedFn)
      executor(mockedRawOutput)

      expect(mockedFn).toHaveBeenCalledWith(mockedRawOutput);
    })
  })
})
