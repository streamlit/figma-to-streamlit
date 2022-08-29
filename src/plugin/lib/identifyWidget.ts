import { data } from '../data/widgets';

// Function to identify the widget and get its default data structure
export const identifyWidget = (node: any) => {
  // Get the parent component, so we can grab the
  // Description and documentation link
  const parent = node.masterComponent;

  // Compare the node name with our database, to retrieve the default data
  const selectedWidget = data.filter((widget) => widget.name === node.name);

  const widgetData = {
    description: parent.description || '',
    link: parent.documentationLinks.length ? parent.documentationLinks[0].uri : 'https://docs.streamlit.io',
    ...selectedWidget[0],
  };

  return widgetData;
};