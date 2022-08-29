// Function to dispatch messages from the plugin to the UI
export const dispatchUIMessage = (type: string, message: string) => {
  return figma.ui.postMessage({
    type,
    message
  });
}