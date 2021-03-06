/* eslint-env mocha */
const React = require('react');
const chai = require('chai');
const { expect } = chai;
const Search = require('../js/Search');
const ShowCard = require('../js/ShowCard');
const Header = require('../js/Header');
const { store, rootReducer } = require('../js/Store');
const enzyme = require('enzyme');
const { render } = enzyme;
const data = require('../public/data');
const { Provider } = require('react-redux');

describe('<Header />', () => {
  it('should render the brand', () => {
    const wrapper = render(<Header store={store} />);
    expect(wrapper.find('h1.brand').text()).to.equal('svideo');
  });
});

describe('<Search />', () => {

  const mockRoute = {
    shows: data.shows,
  };

  it('show render as many shows as there are data for', () => {
    const wrapper = render(<Provider store={store}><Search route={mockRoute} /></Provider>);
    expect(wrapper.find('div.show-card').length).to.equal(data.shows.length);
  });

  it('should filter correctly given new state', () => {
    store.dispatch({ type: 'setSearchTerm', value: 'house' });
    const wrapper = render(<Provider store={store}><Search route={mockRoute} /></Provider>);
    expect(wrapper.find('div.show-card').length).to.equal(2);
  });
});

describe('Store', () => {
  it('should bootstrap', () => {
    const state = rootReducer(undefined, { type: '@@redux/INIT' });
    expect(state).to.deep.equal({ searchTerm: '', shows: data.shows });
  });

  it('should handle setSearchTerm actions', () => {
    const state = rootReducer({ searchTerm: 'some random string', shows: data.shows }, { type: 'setSearchTerm', value: 'correct string' });
    expect(state).to.deep.equal({ searchTerm: 'correct string', shows: data.shows });
  });
});
