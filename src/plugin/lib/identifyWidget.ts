import { resizeUI } from './figma/resizeUI';
import { dispatchUIMessage } from './figma/dispatchUIMessage';

import { data } from '../data/widgets';
import { unsupportedWidgets } from '../data/unsupported';

// Function to identify the widget and get its default data structure
export const identifyWidget = (node: any) => {
  // Get the parent component, so we can grab the
  // Description and documentation link
  const parent = node.masterComponent.parent;
  const docsLink = parent.documentationLinks.length ? parent.documentationLinks[0].uri : 'https://docs.streamlit.io';

  // Compare the node name with our database, to retrieve the default data
  const clonedData = JSON.parse(JSON.stringify(data));
  const selectedWidget = clonedData.filter((widget: any) => widget.name === node.name) as any;

  // TODO: List of unsupported widgets for v0.1. We check these and throw an error for now
  const isWidgetUnsupported = unsupportedWidgets.filter((widget: any) => widget === selectedWidget[0].name);
  if(isWidgetUnsupported.length) {
    resizeUI(300, 305);
    dispatchUIMessage('error', 'We are sorry, but the widget you selected isn\'t supported yet on the plugin 😔. Check the roadmap to see when we\'ll be adding support for it, or view the docs to implement it yourself.', { helpUrl: 'https://github.com/streamlit/figma-plugin#roadmap', helpText: 'Check the roadmap', docsUrl: docsLink, docsText: `Browse our docs for ${selectedWidget[0].name}` });
    throw new Error('Unsupported widget');
  }

  const widgetData = {
    description: parent.description || '',
    link: docsLink,
    ...selectedWidget[0],
  };

  return widgetData;
};