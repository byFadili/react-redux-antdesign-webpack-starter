// @flow

// #region imports
import React from 'react';
import renderer from 'react-test-renderer'; // needed both for snpashot testing but also to prevent errors from enzyme
import AnimatedView from '../AnimatedView';
// #endregion

describe('AnimatedView component', () => {
  it('renders as expected', () => {
    const component = renderer
      .create(
        <div>
          <AnimatedView>
            <p>a child</p>
          </AnimatedView>
        </div>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });
});
