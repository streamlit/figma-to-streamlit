# Figma to Streamlit plugin

![Intro image](https://user-images.githubusercontent.com/34423371/191044666-55e3cf5f-ce1e-4f43-b0ad-f4ff1d8a9c82.png)

A plugin to generate `st.` commands with their corresponding parameters and values, based on the components from [our existing Figma library]().

> **Note**
> **Heads up!**
> This is an experiment from our design team. We’re releasing early to get feedback, and there’s [a lot of stuff missing](https://github.com/streamlit/figma-to-streamlit#roadmap). If you find this useful, please contribute! See our [contributing section](https://github.com/streamlit/figma-to-streamlit#contributing) below.

## Installation

Go to our [community profile](), select the plugin and hit `Try it out`. Then, in Figma, run it from the `Plugins` tab.

## How to use the plugin

WIP

## Troubleshooting

WIP

## Roadmap

WIP

## Contributing

Thanks for your interest in helping with this plugin's development! Please see the instructions below to install it locally, and contributing guidelines.

### Running the plugin locally

This plugin uses Typescript and NPM, two standard tools in creating JavaScript applications.

> **Note**
> Below are the steps to get your plugin running in your machine. You can also find more detailed instructions in [Figma's setup guide](https://www.figma.com/plugin-docs/setup/).

1. First, check if you have node installed on your machine by opening a terminal window and running `node -v`.
2. If the command above outputs a version number, then you can safely skip this step. If you don't get anything back, or get a `node command not found` error, you need to download Node.js which comes with NPM. This will allow you to install TypeScript and other libraries. You can find the download link [here](https://nodejs.org/en/download/).
2. After installing Node, install Typescript by running `npm install -g typescript` in a terminal window.
3. After you've installed these global libraries, you need to clone the repo in your working directory: `git clone https://github.com/streamlit/figma-to-streamlit`.
4. Then, enter in the `figma-to-streamlit` directory by running `cd figma-to-streamlit`, and then run `npm install` to install the plugin's dependencies.
5. After dependencies are installed, run `npm run dev` on your terminal, to build the plugin, and keep the process running while you develop to watch the files.

### Loading the development version of the plugin in Figma

After you've completed the setup instructions above, it's time to run the plugin in Figma.

1. First, [Get the Figma desktop app](https://www.figma.com/downloads/) if you don't have it, since you need the desktop version to develop the plugin locally.
2. Log in to your Figma account and open the file editor in the Figma desktop app. You can open any existing document or create a new one.
3. Go to `Menu > Plugins > Development > Import plugin from manifest...`, find the `figma-to-streamlit` folder you've cloned above, locate the `manifest.json` file, and open it.
4. In the `plugins` tab, you should now see `Figma to Streamlit` under `Development`, and you can run it by hovering over it and clicking `Run`, or by going to `Menu > Plugins > Development > Figma to Streamlit`.
5. That's it! You might want to open the console tab by hitting `Cmd + Shift + I` as well, for easier development flow.

### Submitting an issue

WIP