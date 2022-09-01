// Function to dispatch messages from the plugin to the UI
export const dispatchUIMessage = (type: string, message: string, data?: any) => {
  return figma.ui.postMessage({
    type,
    message,
    data
  });
}