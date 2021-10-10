/* eslint-disable import/no-extraneous-dependencies */
import { Provider } from 'react-redux';
import { fireEvent, render } from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Enzyme, { mount, shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-dom/test-utils';

Enzyme.configure({ adapter: new Adapter() });

export const shallowRender = (Element, props = {}) => (
  shallow(
    <Provider store={store}>
      <BrowserRouter>
        <Element {...props} />
      </BrowserRouter>
    </Provider>,
  )
);

export const shallowRenderWithoutProvider = (Element, props = {}) => (
  shallow(
    <Element {...props} />,
  )
);

export const mountRender = (Element, props = {}) => (
  mount(
    <Provider store={store}>
      <BrowserRouter>
        <Element {...props} />
      </BrowserRouter>
    </Provider>,
  )
);

export const renderWrapper = (Element, props = {}) => {
  const { getByLabelText, container } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Element {...props} />
      </BrowserRouter>
    </Provider>,
  );
  return { getByLabelText, container };
};

export const changeInputText = async (element, value = '') => {
  await act(async () => {
    fireEvent.change(element, { target: { value } });
    fireEvent.blur(element);
  });
};

export const getById = (container, id) => container.querySelector(`#${id}`);
