import { act } from 'react-dom/test-utils';
import Login from '../../containers/Login';
import { renderWrapper, getById, changeInputText } from '../setup';

describe('Login', () => {
  let errorMessage;
  let container;
  let emailInput;
  let passwordInput;
  beforeEach(async () => {
    await act(async () => {
      ({ container } = await renderWrapper(Login));
    });
  });

  test('should validate email presence', async () => {
    emailInput = await getById(container, 'email');
    await changeInputText(emailInput);

    errorMessage = 'Email is required';

    expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  });

  test('should be a valid email', async () => {
    emailInput = await getById(container, 'email');
    await changeInputText(emailInput, 'email');

    errorMessage = 'Invalid email';

    expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  });

  test('should validate presence of password', async () => {
    passwordInput = await getById(container, 'password');
    await changeInputText(passwordInput, '');

    errorMessage = 'Password is required';

    expect(container.innerHTML.includes(errorMessage)).toBeTruthy();
  });
});
