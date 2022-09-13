import { resizeUI } from './figma/resizeUI';
import { dispatchUIMessage } from './figma/dispatchUIMessage';

import { data } from '../data/widgets';
import { unsupportedWidgets } from '../data/unsupported';

// Function to identify the widget and get its default data structure
export const identifyWidget = (node: any) => {
  // Get the parent component, so we can grab the
  // Description and documentation link
  const parent = node.masterComponent.parent;

  // Compare the node name with our database, to retrieve the default data
  const selectedWidget = data.filter((widget) => widget.name === node.name) as any;

  // TODO: List of unsupported widgets for v0.1. We check these and throw an error for now
  const isWidgetUnsupported = unsupportedWidgets.filter((widget: any) => widget === selectedWidget[0].name);
  if(isWidgetUnsupported.length) {
    resizeUI(300, 270);
    dispatchUIMessage('error', 'We are sorry, but the widget you selected isn\'t supported yet on the plugin 😔. Check the roadmap to see when we\'ll be adding support for it!', { helpUrl: 'https://github.com/streamlit/figma-plugin#roadmap', helpText: 'Check the roadmap'});
    throw new Error('Unsupported widget');
  }

  const widgetData = {
    description: parent.description || '',
    link: parent.documentationLinks.length ? parent.documentationLinks[0].uri : 'https://docs.streamlit.io',
    ...selectedWidget[0],
  };

  return widgetData;
};