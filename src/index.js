import React from 'react';
import { render } from 'react-dom';
import loaders from './loaders';
import { Arrow } from '@sdp/shared-ui';

const componentsOnPage = document.querySelectorAll('[data-component]');
  const componentPromises = [];

  // loop through all the components that were previously found on the page
  Array.prototype.map.call(componentsOnPage, element => {
    const componentName = element.getAttribute('data-component');

    // cache the props from the data-props attribute if it exists otherwise use an empty object
    let props = {};
    if (element.getAttribute('data-props')) {
      try {
        props = JSON.parse(element.getAttribute('data-props'));
      } catch (e) {
        console.warn(e.message);
        return false;
      }
    }

    if (typeof loaders[componentName] !== 'undefined') {
        const getProps = Promise.resolve(props);
        const componentPromise = getProps.then(_props => {
          return loaders[componentName](element, _props);
        }).catch(e => {
          /* eslint no-console: ["error", { allow: ["warn"] }] */
          console.warn(e);
          return Promise.resolve();
        });
  
        componentPromises.push(componentPromise);
      } else {
        console.warn('Unable to find component loader: ' + componentName);
      }
  
      return true;
    });
    

    Promise.all(componentPromises).then(() => {
       console.log('rendered');
      });

  const App = () => {
   return (
     <div>
       This is global App
       <Arrow />
     </div>
   ) 
  }

  render(<App />, document.getElementById('root'));