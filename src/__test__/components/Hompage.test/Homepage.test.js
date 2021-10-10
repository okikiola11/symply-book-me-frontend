import { Link } from 'react-router-dom';
import { shallowRenderWithoutProvider } from '../../setup';
import HomePage from '../../../components/HomePage/HomePage';

describe('Homepage', () => {
  const page = shallowRenderWithoutProvider(HomePage);

  test('Should render Homepage', () => {
    expect(page).toBeTruthy();
    expect(page).not.toBeFalsy();
    expect(page).toMatchSnapshot();
  });

  test('Should render nav', () => {
    const nav = page.find('nav');

    expect(nav.length).toBe(1);
    expect(nav.length).not.toBe(0);
  });

  test('Should render logo', () => {
    const logo = page.find('.logo');

    expect(logo.length).toBe(1);
    expect(logo.length).not.toBe(0);
    expect(logo.text()).not.toBe('');
    expect(logo.text()).toBe('SYMPLY BOOK ME');
  });

  test('Should render register and login links in nav', () => {
    const nav = page.find('nav div');
    const links = nav.find(Link);

    expect(links.length).toBe(3);
    expect(nav.length).not.toBe(0);
    expect(links.first().text()).toBe('SYMPLY BOOK ME');
    expect(links.last().text()).toBe('Login');
  });

  test('Should render welcome text', () => {
    const h1 = page.find('h1');

    expect(h1.length).toBe(1);
    expect(h1.length).not.toBe(0);
    expect(h1.text()).toBe('Book a Lawyer for your affairs today');
    expect(h1.text()).not.toBe('');
  });
});
